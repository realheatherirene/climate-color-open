/* ==========================================================================
   Climate Color Quiz — UI Rendering + Navigation
   ========================================================================== */

import { questions, tieBreakers, axes } from "./quiz-data.js";
import {
  recordAnswer,
  determineAxisStyle,
  applyTieBreaker,
  calculateConstellation,
  resetScores
} from "./quiz-logic.js";

/* --------------------------------------------------------------------------
   DOM Elements
   -------------------------------------------------------------------------- */

const introEl = document.getElementById("intro");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const beginBtn = document.getElementById("begin-btn");

let currentIndex = 0;
let pendingTieAxis = null;

/* --------------------------------------------------------------------------
   Render Question
   -------------------------------------------------------------------------- */

function renderQuestion() {
  const q = questions[currentIndex];

  quizEl.innerHTML = `
    <div class="question-card">
      <h2>${q.prompt}</h2>
      ${q.options
        .map(
          opt => `
        <button class="option-btn" data-style="${opt.style}">
          ${opt.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.style));
  });
}

/* --------------------------------------------------------------------------
   Handle Answer
   -------------------------------------------------------------------------- */

function handleAnswer(style) {
  recordAnswer(style);
  currentIndex++;

  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    checkForAxisTies();
  }
}

/* --------------------------------------------------------------------------
   Axis Tie Check
   -------------------------------------------------------------------------- */

function checkForAxisTies() {
  const tiedAxes = [];

  Object.keys(axes).forEach(axis => {
    const result = determineAxisStyle(axis);
    if (Array.isArray(result)) tiedAxes.push(axis);
  });

  if (tiedAxes.length > 0) {
    pendingTieAxis = tiedAxes[0];
    renderTieBreaker(pendingTieAxis);
  } else {
    showResults();
  }
}

/* --------------------------------------------------------------------------
   Render Tie-Breaker
   -------------------------------------------------------------------------- */

function renderTieBreaker(axis) {
  const tb = tieBreakers[axis];

  quizEl.innerHTML = `
    <div class="question-card">
      <h2>${tb.prompt}</h2>
      ${tb.options
        .map(
          opt => `
        <button class="option-btn" data-style="${opt.style}">
          ${opt.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTieBreaker(axis, btn.dataset.style);
      pendingTieAxis = null;
      showResults();
    });
  });
}

/* --------------------------------------------------------------------------
   Show Results
   -------------------------------------------------------------------------- */

function showResults() {
  const { primary, secondary } = calculateConstellation();

  quizEl.hidden = true;
  resultsEl.hidden = false;

  resultsEl.innerHTML = `
    <div class="results-card">
      <h2 class="theme-${primary.toLowerCase()}">Primary: ${primary}</h2>
      <h3 class="theme-${secondary.toLowerCase()}">Secondary: ${secondary}</h3>

      <p class="text-secondary">
        Your Climate Color constellation reflects how you move, relate,
        shape spaces, and hold meaning in shared climate work.
      </p>

      <button id="restart-btn" class="start-btn bg-architect">
        Restart Quiz
      </button>
    </div>
  `;

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

/* --------------------------------------------------------------------------
   Restart Quiz
   -------------------------------------------------------------------------- */

function restartQuiz() {
  resetScores();
  currentIndex = 0;
  pendingTieAxis = null;

  resultsEl.hidden = true;
  quizEl.hidden = false;

  renderQuestion();
}

/* --------------------------------------------------------------------------
   Begin Quiz
   -------------------------------------------------------------------------- */

beginBtn.addEventListener("click", () => {
  introEl.hidden = true;
  quizEl.hidden = false;
  renderQuestion();
});
