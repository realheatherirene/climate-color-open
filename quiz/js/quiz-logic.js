/* ==========================================================================
   Climate Color Quiz — Score Keeping & Engine Logic
   ==========================================================================
   DOM, localStorage, and URL handling live here. The actual scoring math
   lives in quiz-scoring.js (a pure module with no DOM dependency), so it
   can also be imported directly by the Node simulation harness in
   tools/simulate-quiz.js without any browser shimming.
   ========================================================================== */

import { styles, questions } from './quiz-data.js';
import { renderResultsScreen } from './results-ui.js';
import { emptyScores, computeConstellation } from './quiz-scoring.js';

// Questions sampled per axis per quiz session. The question bank currently
// holds exactly this many per axis (4), so every session sees the full
// bank today — but this constant is what you'd change if the bank later
// grows to include a reserve pool for retake variety (see
// tools/simulate-quiz.js output / the sampling-depth discussion for why 4
// was chosen over the previous default of 2).
const QUESTIONS_PER_AXIS = 4;

let currentQuestion = 0;
let scores = emptyScores();

/* ==========================================================================
   Axis-Based Randomizer
   ========================================================================== */

function selectRandomQuestionsByAxis(fullList, perAxis = QUESTIONS_PER_AXIS) {
    const grouped = {
        Pace: [],
        People: [],
        Place: [],
        Purpose: []
    };

    fullList.forEach(q => {
        if (grouped[q.axis]) {
            grouped[q.axis].push(q);
        }
    });

    const selected = [];
    Object.keys(grouped).forEach(axis => {
        const shuffled = grouped[axis].sort(() => Math.random() - 0.5);
        selected.push(...shuffled.slice(0, perAxis));
    });

    // Shuffle the combined order too, so the four axes aren't always
    // presented in the same Pace → People → Place → Purpose block order.
    return selected.sort(() => Math.random() - 0.5);
}

/* ==========================================================================
   Core Quiz Logic
   ========================================================================== */

export function recordAnswer(styleKey) {
    if (scores[styleKey] !== undefined) {
        scores[styleKey]++;
    }
}

export function resetScores() {
    scores = emptyScores();
    currentQuestion = 0;
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

    qText.textContent = q.prompt;

    const pct = (currentQuestion / activeQuestions.length) * 100;
    updateProgress(pct, activeQuestions);

    container.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.text;
        btn.addEventListener("click", () => handleAnswer(opt.style, activeQuestions));
        container.appendChild(btn);
    });

    qText.setAttribute("tabindex", "-1");
    qText.focus();
}

function handleAnswer(styleKey, activeQuestions) {
    recordAnswer(styleKey);
    currentQuestion++;
    if (currentQuestion < activeQuestions.length) {
        renderQuestion(activeQuestions);
    } else {
        calculateResults();
    }
}

/**
 * DOM/localStorage/URL-aware wrapper around the pure computeConstellation().
 * Returns { primary, secondary, tertiary } for backward compatibility with
 * existing callers, plus confidence/axisBreakdown/excluded for anything
 * that wants them later (not yet consumed by results-ui.js — that's a
 * separate, later piece of work).
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
    if (styles[paramPrimary] && styles[paramSecondary] && styles[paramTertiary]) {
        return { primary: paramPrimary, secondary: paramSecondary, tertiary: paramTertiary, confidence: undefined };
    }

    const result = computeConstellation(scores, { perAxis: QUESTIONS_PER_AXIS });

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

function initQuizState() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');
    const paramTertiary = urlParams.get('tertiary');

    const validPrimary = styles[paramPrimary]
        ? paramPrimary
        : styles[localStorage.getItem('climatecolor_primary')]
        ? localStorage.getItem('climatecolor_primary')
        : null;

    let validSecondary = styles[paramSecondary]
        ? paramSecondary
        : styles[localStorage.getItem('climatecolor_secondary')]
        ? localStorage.getItem('climatecolor_secondary')
        : null;

    let validTertiary = styles[paramTertiary]
        ? paramTertiary
        : styles[localStorage.getItem('climatecolor_tertiary')]
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

        const activeQuestions = selectRandomQuestionsByAxis(questions, QUESTIONS_PER_AXIS);

        resetScores();
        renderQuestion(activeQuestions);
    }
}

document.addEventListener("DOMContentLoaded", initQuizState);
window.addEventListener("popstate", initQuizState);
