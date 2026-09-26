/* ==========================================================================
   Climate Color Quiz — Score Keeping & Engine Logic (Normative rewrite,
   2026-09-22)
   ==========================================================================
   DOM, localStorage, and URL handling live here. The actual scoring math
   lives in quiz-scoring.js (a pure module with no DOM dependency), so it
   can also be imported directly by the Node simulation harness in
   tools/simulate-quiz.js without any browser shimming.

   This replaces the old axis-paired, forced-choice ipsative wrapper. There
   is no more per-axis sampling: every item belongs to exactly one color
   and is answered independently on the fixed 3-point scale from
   quiz-scoring.js, so the full 40-item bank is administered every session
   (order shuffled), rather than sampling N items per axis out of a larger
   pool.
   ========================================================================== */

import { questions, styles, ITEM_STEM } from './quiz-data.js';
import { renderResultsScreen } from './results-ui.js';
import { emptyScores, computeConstellation, SCALE } from './quiz-scoring.js';

// Items answered per color this session. The question bank currently holds
// exactly this many per color (5), so every session sees the full bank —
// this constant is what the confidence calculation normalizes against, and
// what a future retest/variety pool would sample down to.
const ITEMS_PER_COLOR = 5;

let currentQuestion = 0;
let scores = emptyScores();
// 2026-09-26: answers given so far, in order, so Back can undo exactly the
// last one (subtracting its points) instead of forcing a restart. Kept in
// memory only, like scores, so it never leaves the browser.
let answerHistory = [];
let activeList = [];

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
    const qNum = document.getElementById("questionNumber");
    const qText = document.getElementById("questionText");
    const container = document.getElementById("optionsContainer");
    const instructions = document.getElementById("quizInstructions");

    if (!qNum || !qText || !container) return;

    // Remove axis label entirely
    qNum.textContent = "";

    // Hide instructions after the first question
    if (instructions) {
        instructions.style.display = currentQuestion === 0 ? "block" : "none";
    }

    // 2026-09-26: the scenario and the shared stem render as two separate
    // lines, so the stem is always in the same spot and reads at a glance.
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
    // Distinguishes the fixed 3-button scale layout from the old 4-option
    // column layout, without touching .options-container/.option-btn
    // (still shared base styling — just laid out differently here).
    container.classList.add("scale-options");

    // Fixed 3-point behaviorally-anchored scale (Probably not / Maybe /
    // Probably yes) — the same three buttons on every question, since the
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
 * DOM/localStorage/URL-aware wrapper around the pure computeConstellation().
 * Returns { primary, secondary, tertiary } for backward compatibility with
 * existing callers, plus confidence/breakdown/excluded for anything that
 * wants them later (not yet consumed by results-ui.js — that's a separate,
 * later piece of work).
 */
export function calculateConstellation() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');
    const paramTertiary = urlParams.get('tertiary');

    // A shared/bookmarked link carries only the three color names, never
    // the underlying answers — consistent with the standing "we don't
    // track your answers" privacy commitment. That means confidence has
    // no meaning here: it's a property of a specific answer set, not of
    // the colors themselves, so it's intentionally left undefined rather
    // than faked from nothing.
    if (isValidColor(paramPrimary) && isValidColor(paramSecondary) && isValidColor(paramTertiary)) {
        return { primary: paramPrimary, secondary: paramSecondary, tertiary: paramTertiary, confidence: undefined };
    }

    const result = computeConstellation(scores, { itemsPerColor: ITEMS_PER_COLOR });

    localStorage.setItem('climatecolor_primary', result.primary);
    localStorage.setItem('climatecolor_secondary', result.secondary);
    localStorage.setItem('climatecolor_tertiary', result.tertiary);
    // Full 8-color raw score vector + confidence, persisted for future use
    // (team-mode aggregation, a later "how sure was I" UI, etc.) even
    // though nothing reads these back yet.
    localStorage.setItem('climatecolor_scores', JSON.stringify(scores));
    localStorage.setItem('climatecolor_confidence', String(result.confidence));

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

// Small helper so calculateConstellation()/initQuizState() don't each need
// their own lookup logic just to validate a URL/localStorage value against
// the 8 real color keys.
function isValidColor(key) {
    return !!(key && styles[key]);
}

function initQuizState() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');
    const paramTertiary = urlParams.get('tertiary');

    const validPrimary = isValidColor(paramPrimary)
        ? paramPrimary
        : isValidColor(localStorage.getItem('climatecolor_primary'))
        ? localStorage.getItem('climatecolor_primary')
        : null;

    let validSecondary = isValidColor(paramSecondary)
        ? paramSecondary
        : isValidColor(localStorage.getItem('climatecolor_secondary'))
        ? localStorage.getItem('climatecolor_secondary')
        : null;

    let validTertiary = isValidColor(paramTertiary)
        ? paramTertiary
        : isValidColor(localStorage.getItem('climatecolor_tertiary'))
        ? localStorage.getItem('climatecolor_tertiary')
        : null;

    if (validPrimary && validSecondary && validPrimary === validSecondary) {
        validSecondary = validPrimary === "Red" ? "Green" : "Red";
    }
    if (!validTertiary && validPrimary) {
        validTertiary = validPrimary === "Blue" ? "Violet" : "Blue";
    }

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
        renderResultsScreen(
            validPrimary,
            validSecondary || (validPrimary === "Red" ? "Green" : "Red"),
            validTertiary || "Blue"
        );
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