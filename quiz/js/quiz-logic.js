/* ==========================================================================
   Climate Color Quiz — Score Keeping & Engine Logic
   ========================================================================== */

import { styles, questions } from './quiz-data.js';
import { renderResultsScreen } from './results-ui.js';

let currentQuestion = 0;
let scores = {
    Driver: 0, Stabilizer: 0,
    Advocate: 0, Connector: 0,
    Architect: 0, Guardian: 0,
    Visionary: 0, Keeper: 0
};

export function recordAnswer(styleKey) {
    if (scores[styleKey] !== undefined) {
        scores[styleKey]++;
    }
}

export function resetScores() {
    Object.keys(scores).forEach(key => scores[key] = 0);
    currentQuestion = 0;
}

function updateProgress(percentage) {
    const bar = document.getElementById("progressBar");
    const container = document.getElementById("progressContainer");
    const textEl = document.getElementById("progressText");
    const percentEl = document.getElementById("progressPercent");

    if (bar && container) {
        bar.style.width = `${percentage}%`;
        container.setAttribute("aria-valuenow", Math.round(percentage));
    }
    if (textEl) {
        textEl.textContent = `Question ${Math.min(currentQuestion + 1, questions.length)} of ${questions.length}`;
    }
    if (percentEl) {
        percentEl.textContent = `${Math.round(percentage)}%`;
    }
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const qNum = document.getElementById("questionNumber");
    const qText = document.getElementById("questionText");
    const container = document.getElementById("optionsContainer");

    if (!qNum || !qText || !container) return;

    // Correctly formatting the axis name from your quiz-data.js structure
    const axisName = q.axis ? `${q.axis.toUpperCase()} AXIS` : "QUESTION";
    qNum.textContent = `${axisName} — Question ${currentQuestion + 1} of ${questions.length}`;
    qText.textContent = q.prompt;

    const pct = (currentQuestion / questions.length) * 100;
    updateProgress(pct);

    container.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.text;
        btn.addEventListener("click", () => handleAnswer(opt.style));
        container.appendChild(btn);
    });

    qText.setAttribute("tabindex", "-1");
    qText.focus();
}

function handleAnswer(styleKey) {
    recordAnswer(styleKey);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        calculateResults();
    }
}

export function calculateConstellation() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');

    if (styles[paramPrimary] && styles[paramSecondary]) {
        return { primary: paramPrimary, secondary: paramSecondary };
    }

    const axes = [
        { anchor: "Pace", poleA: "Driver", poleB: "Stabilizer" },
        { anchor: "People", poleA: "Advocate", poleB: "Connector" },
        { anchor: "Place", poleA: "Architect", poleB: "Guardian" },
        { anchor: "Purpose", poleA: "Visionary", poleB: "Keeper" }
    ];

    const axisWinners = axes.map((axis, index) => {
        const scoreA = scores[axis.poleA];
        const scoreB = scores[axis.poleB];
        return {
            anchor: axis.anchor,
            winner: scoreA >= scoreB ? axis.poleA : axis.poleB,
            winningScore: Math.max(scoreA, scoreB),
            margin: Math.abs(scoreA - scoreB),
            originalIndex: index
        };
    });

    axisWinners.sort((a, b) => {
        if (b.winningScore !== a.winningScore) return b.winningScore - a.winningScore;
        if (b.margin !== a.margin) return b.margin - a.margin;
        return a.originalIndex - b.originalIndex;
    });

    const primaryKey = axisWinners[0].winner;
    let secondaryKey = axisWinners[1].winner;

    if (secondaryKey === primaryKey) {
        const alt = axisWinners.find(w => w.winner !== primaryKey);
        secondaryKey = alt ? alt.winner : (primaryKey === "Driver" ? "Stabilizer" : "Driver");
    }

    localStorage.setItem('climatecolor_primary', primaryKey);
    localStorage.setItem('climatecolor_secondary', secondaryKey);

    const url = new URL(window.location);
    url.searchParams.set('primary', primaryKey);
    url.searchParams.set('secondary', secondaryKey);
    window.history.pushState({}, '', url);

    return { primary: primaryKey, secondary: secondaryKey };
}

function calculateResults() {
    updateProgress(100);
    const quizCard = document.getElementById("quizCard");
    const progressContainer = document.getElementById("progressContainer");
    const progressInfoBar = document.querySelector(".progress-info-bar");

    if (quizCard) quizCard.closest("main").hidden = true;
    if (progressContainer) progressContainer.style.display = "none";
    if (progressInfoBar) progressInfoBar.style.display = "none";

    const { primary, secondary } = calculateConstellation();
    renderResultsScreen(primary, secondary);
}

function initQuizState() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');

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

    if (validPrimary && validSecondary && validPrimary === validSecondary) {
        validSecondary = validPrimary === "Driver" ? "Stabilizer" : "Driver";
    }

    const quizMain = document.getElementById("quiz");
    const progressContainer = document.getElementById("progressContainer");
    const progressInfoBar = document.querySelector(".progress-info-bar");

    if (validPrimary) {
        if (quizMain) quizMain.hidden = true;
        if (progressContainer) progressContainer.style.display = "none";
        if (progressInfoBar) progressInfoBar.style.display = "none";
        updateProgress(100);
        renderResultsScreen(validPrimary, validSecondary || (validPrimary === "Driver" ? "Stabilizer" : "Driver"));
    } else {
        if (quizMain) quizMain.hidden = false;
        resetScores();
        renderQuestion();
    }
}

document.addEventListener("DOMContentLoaded", initQuizState);
window.addEventListener("popstate", initQuizState);
