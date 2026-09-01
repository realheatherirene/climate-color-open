/* ==========================================================================
   Climate Color Quiz — Results Rendering UI
   ========================================================================== */

import { shortResults, fullResults, starterKits, synergyCards } from "./results.js";

/* --------------------------------------------------------------------------
   Render Full Results Screen
   -------------------------------------------------------------------------- */

export function renderResultsScreen(primary, secondary) {
  const resultsEl = document.getElementById("results");

  const short = shortResults[primary];
  const full = fullResults[primary];
  const synergy = synergyCards[primary][secondary];
  const kit = starterKits[primary];

  resultsEl.innerHTML = `
    <div class="results-card">

      <!-- Primary Style -->
      <h2 class="theme-${primary.toLowerCase()}">
        ${primary}
      </h2>
      <p>${short}</p>
      <p>${full.description.trim()}</p>

      <!-- Secondary Style -->
      <h3 class="theme-${secondary.toLowerCase()}">
        Secondary: ${secondary}
      </h3>
      <p class="text-secondary">
        ${synergy}
      </p>

      <!-- Starter Kit -->
      <div class="starter-kit">
        <h3>Starter Kit</h3>

        <h4>Core Practices</h4>
        <ul>
          ${kit.core.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h4>Community Practice</h4>
        <p>${kit.community}</p>

        <h4>Climate Practice</h4>
        <p>${kit.climate}</p>

        <h4>Reflection Prompt</h4>
        <p>${kit.reflection}</p>

        <h4>Small Step</h4>
        <p>${kit.smallStep}</p>
      </div>

      <!-- Restart -->
      <button id="restart-btn" class="start-btn bg-architect">
        Restart Quiz
      </button>
    </div>
  `;

  document.getElementById("restart-btn").addEventListener("click", () => {
    window.location.reload();
  });
}

/* --------------------------------------------------------------------------
   Inject Results into UI.js
   -------------------------------------------------------------------------- */

export function attachResultsHandler(uiCallback) {
  // uiCallback should call renderResultsScreen(primary, secondary)
  return uiCallback;
}
