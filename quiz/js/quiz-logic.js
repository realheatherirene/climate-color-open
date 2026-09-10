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

/* ==========================================================================
   Balanced Axis-Based Randomizer
   ========================================================================== */

function selectRandomQuestionsByAxis(fullList, perAxis = 2) {
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

    return selected;
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
    Object.keys(scores).forEach(key => scores[key] = 0);
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

export function calculateConstellation() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');
    const paramTertiary = urlParams.get('tertiary');

    if (styles[paramPrimary] && styles[paramSecondary] && styles[paramTertiary]) {
        return { primary: paramPrimary, secondary: paramSecondary, tertiary: paramTertiary };
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
    let tertiaryKey = axisWinners[2].winner;

    if (secondaryKey === primaryKey) {
        const alt = axisWinners.find(w => w.winner !== primaryKey);
        secondaryKey = alt ? alt.winner : (primaryKey === "Driver" ? "Stabilizer" : "Driver");
    }
    if (tertiaryKey === primaryKey || tertiaryKey === secondaryKey) {
        const alt = axisWinners.find(w => w.winner !== primaryKey && w.winner !== secondaryKey);
        tertiaryKey = alt ? alt.winner : (primaryKey === "Architect" ? "Guardian" : "Architect");
    }

    localStorage.setItem('climatecolor_primary', primaryKey);
    localStorage.setItem('climatecolor_secondary', secondaryKey);
    localStorage.setItem('climatecolor_tertiary', tertiaryKey);

    const url = new URL(window.location);
    url.searchParams.set('primary', primaryKey);
    url.searchParams.set('secondary', secondaryKey);
    url.searchParams.set('tertiary', tertiaryKey);
    window.history.pushState({}, '', url);

    return { primary: primaryKey, secondary: secondaryKey, tertiary: tertiaryKey };
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
        validSecondary = validPrimary === "Driver" ? "Stabilizer" : "Driver";
    }
    if (!validTertiary && validPrimary) {
        validTertiary = validPrimary === "Architect" ? "Guardian" : "Architect";
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
            validSecondary || (validPrimary === "Driver" ? "Stabilizer" : "Driver"),
            validTertiary || "Architect"
        );
    } else {
        if (quizMain) quizMain.hidden = false;
        if (instructions) instructions.style.display = "block";

        const activeQuestions = selectRandomQuestionsByAxis(questions, 2);

        resetScores();
        renderQuestion(activeQuestions);
    }
}

document.addEventListener("DOMContentLoaded", initQuizState);
window.addEventListener("popstate", initQuizState);
