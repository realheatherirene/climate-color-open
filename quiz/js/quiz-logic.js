/* ==========================================================================
   QUIZ LOGIC: runs the quiz on the page: shows the questions, keeps score,
   saves the result, and reads shared links.
   ==========================================================================
   The scoring math lives in quiz-scoring.js, which has no page code, so
   tools/simulate-quiz.js can use it too. Every session asks all 40
   questions in shuffled order. Each belongs to one color and is answered on
   the 3-point scale.
   ========================================================================== */

import { questions, ITEM_STEM } from './questions.js';
import { resolveColor } from '../../core/climate-color.js';
import { renderResultsScreen } from './results-ui.js';
import { emptyScores, computeConstellation, SCALE } from './quiz-scoring.js';

// Questions per color (5). The whole bank is asked every session, and the
// confidence score is measured against this number.
const ITEMS_PER_COLOR = 5;

let currentQuestion = 0;
let scores = emptyScores();
// Answers given so far, in order, so Back can undo exactly the last one.
// Kept in memory only, like the scores, so it never leaves the browser.
let answerHistory = [];
let activeList = [];

// The browser's saved result. Some browsers block storage inside an
// embedded page (strict privacy settings, some school and work devices);
// these never throw, so the quiz still runs and shows its result, it just
// isn't remembered.
const saved = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage off */ } }
};

/* ==========================================================================
   Presentation-order Shuffle
   ========================================================================== */

// Fisher-Yates — an unbiased shuffle of the full 40-item bank, so the 8
// colors' items are interleaved rather than always appearing in color-block
// order, and no color is systematically favored by presentation position.
function shuffleQuestions(fullList) {
    const a = [...fullList];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ==========================================================================
   Core Quiz Logic
   ========================================================================== */

export function recordAnswer(colorKey, points) {
    if (scores[colorKey] !== undefined) {
        scores[colorKey] += points;
    }
}

export function resetScores() {
    scores = emptyScores();
    currentQuestion = 0;
    answerHistory = [];
}

function updateProgress(percentage, activeQuestions) {
    const bar = document.getElementById("progressBar");
    const container = document.getElementById("progressContainer");
    const textEl = document.getElementById("progressText");
    const percentEl = document.getElementById("progressPercent");

    if (bar && container) {
        bar.style.width = `${percentage}%`;
        container.setAttribute("aria-valuenow", Math.round(percentage));
    }
    if (textEl) {
        textEl.textContent = `Question ${Math.min(currentQuestion + 1, activeQuestions.length)} of ${activeQuestions.length}`;
    }
    if (percentEl) {
        percentEl.textContent = `${Math.round(percentage)}%`;
    }
}

function renderQuestion(activeQuestions) {
    const q = activeQuestions[currentQuestion];
    const qText = document.getElementById("questionText");
    const container = document.getElementById("optionsContainer");
    const instructions = document.getElementById("quizInstructions");

    if (!qText || !container) return;

    // Hide instructions after the first question
    if (instructions) {
        instructions.style.display = currentQuestion === 0 ? "block" : "none";
    }

    // The activity and the shared question render as two separate lines, so
    // the question is always in the same spot and reads at a glance.
    qText.textContent = "";
    const promptEl = document.createElement("span");
    promptEl.textContent = q.prompt;
    const stemEl = document.createElement("span");
    stemEl.className = "question-stem";
    stemEl.textContent = ITEM_STEM;
    qText.append(promptEl, stemEl);

    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.hidden = currentQuestion === 0;

    const pct = (currentQuestion / activeQuestions.length) * 100;
    updateProgress(pct, activeQuestions);

    container.innerHTML = "";
    // Marks the 3-button scale layout (same base styles as the answer
    // buttons, laid out in a row).
    container.classList.add("scale-options");

    // Fixed 3-point scale (Not for me / Maybe / I'd enjoy it, from quiz-scoring.js
    // SCALE) — the same three buttons on every question, since the
    // scale itself is the constant and the color/points come from the item.
    SCALE.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn scale-btn";
        btn.textContent = opt.label;
        btn.addEventListener("click", () => handleAnswer(q.color, opt.points, activeQuestions));
        container.appendChild(btn);
    });

    qText.setAttribute("tabindex", "-1");
    qText.focus();
}

function handleAnswer(colorKey, points, activeQuestions) {
    recordAnswer(colorKey, points);
    answerHistory.push({ colorKey, points });
    currentQuestion++;
    if (currentQuestion < activeQuestions.length) {
        renderQuestion(activeQuestions);
    } else {
        calculateResults();
    }
}

// Undo the most recent answer and show that question again.
function goBack() {
    const last = answerHistory.pop();
    if (!last) return;
    scores[last.colorKey] -= last.points;
    currentQuestion--;
    renderQuestion(activeList);
}

// Keyboard shortcuts for fast answering: 1 / 2 / 3 pick the answer in
// scale order, Backspace goes back. Registered once at module load; ignored
// whenever the quiz itself isn't on screen (e.g. the results page).
document.addEventListener("keydown", (e) => {
    const quizMain = document.getElementById("quiz");
    if (!quizMain || quizMain.hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    const idx = ["1", "2", "3"].indexOf(e.key);
    if (idx !== -1) {
        const btns = document.querySelectorAll("#optionsContainer .scale-btn");
        if (btns[idx]) { e.preventDefault(); btns[idx].click(); }
    } else if (e.key === "Backspace" && answerHistory.length) {
        e.preventDefault();
        goBack();
    }
});

/**
 * Page-side wrapper around computeConstellation(): saves the result and
 * puts it in the address. Returns { primary, secondary, tertiary }, plus
 * confidence, breakdown, and excluded, which the results page doesn't use
 * yet.
 */
export function calculateConstellation() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = resolveColor(urlParams.get('primary'));
    const paramSecondary = resolveColor(urlParams.get('secondary'));
    const paramTertiary = resolveColor(urlParams.get('tertiary'));

    // A shared link carries only the three color names, never the answers
    // (the quiz doesn't track answers), so there's no confidence to report.
    if (isValidColor(paramPrimary) && isValidColor(paramSecondary) && isValidColor(paramTertiary)) {
        return { primary: paramPrimary, secondary: paramSecondary, tertiary: paramTertiary, confidence: undefined };
    }

    const result = computeConstellation(scores, { itemsPerColor: ITEMS_PER_COLOR });

    saved.set('climatecolor_primary', result.primary);
    saved.set('climatecolor_secondary', result.secondary);
    saved.set('climatecolor_tertiary', result.tertiary);
    // All eight scores and the confidence are saved too, for later uses such
    // as team results. Nothing reads them yet.
    saved.set('climatecolor_scores', JSON.stringify(scores));
    saved.set('climatecolor_confidence', String(result.confidence));

    const url = new URL(window.location);
    url.searchParams.set('primary', result.primary);
    url.searchParams.set('secondary', result.secondary);
    url.searchParams.set('tertiary', result.tertiary);
    window.history.pushState({}, '', url);

    return result;
}

function calculateResults() {
    updateProgress(100, []);

    const quizCard = document.getElementById("quizCard");
    const progressContainer = document.getElementById("progressContainer");
    const progressInfoBar = document.querySelector(".progress-info-bar");
    const instructions = document.getElementById("quizInstructions");

    if (quizCard) quizCard.closest("main").hidden = true;
    if (progressContainer) progressContainer.style.display = "none";
    if (progressInfoBar) progressInfoBar.style.display = "none";
    if (instructions) instructions.style.display = "none";

    const { primary, secondary, tertiary } = calculateConstellation();
    renderResultsScreen(primary, secondary, tertiary);
}

// Checks a link or saved value against the eight colors. Any
// capitalization and old archetype names ("Driver") count, through
// resolveColor in core/climate-color.js.
function isValidColor(key) {
    return !!resolveColor(key);
}

function initQuizState() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = resolveColor(urlParams.get('primary'));
    const paramSecondary = resolveColor(urlParams.get('secondary'));
    const paramTertiary = resolveColor(urlParams.get('tertiary'));

    // A link's colors win; otherwise the browser's saved result. Nothing is
    // made up: a link that doesn't name three different colors gets the
    // results page's "missing a color" note instead.
    const validPrimary = isValidColor(paramPrimary)
        ? paramPrimary
        : isValidColor(saved.get('climatecolor_primary'))
        ? saved.get('climatecolor_primary')
        : null;

    const validSecondary = isValidColor(paramSecondary)
        ? paramSecondary
        : isValidColor(saved.get('climatecolor_secondary'))
        ? saved.get('climatecolor_secondary')
        : null;

    const validTertiary = isValidColor(paramTertiary)
        ? paramTertiary
        : isValidColor(saved.get('climatecolor_tertiary'))
        ? saved.get('climatecolor_tertiary')
        : null;

    const quizMain = document.getElementById("quiz");
    const progressContainer = document.getElementById("progressContainer");
    const progressInfoBar = document.querySelector(".progress-info-bar");
    const instructions = document.getElementById("quizInstructions");

    if (validPrimary) {
        if (quizMain) quizMain.hidden = true;
        if (progressContainer) progressContainer.style.display = "none";
        if (progressInfoBar) progressInfoBar.style.display = "none";
        if (instructions) instructions.style.display = "none";

        updateProgress(100, []);
        renderResultsScreen(validPrimary, validSecondary, validTertiary);
    } else {
        if (quizMain) quizMain.hidden = false;
        if (instructions) instructions.style.display = "block";

        const activeQuestions = shuffleQuestions(questions);
        activeList = activeQuestions;

        resetScores();
        renderQuestion(activeQuestions);

        const backBtn = document.getElementById("backBtn");
        if (backBtn) backBtn.onclick = goBack;
    }
}

document.addEventListener("DOMContentLoaded", initQuizState);
window.addEventListener("popstate", initQuizState);