/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Directory Styled)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";
import { starterKits, synergyCards, fullResults } from "./results.js";

export function renderResultsScreen(primaryKey, secondaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  const synergyText = synergyCards[primaryKey]?.[secondaryKey] || secondarySyntheses[primaryKey]?.[secondaryKey] || "";

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";

  resultsEl.innerHTML = `
    <!-- Sticky Results Buttons -->
    <div class="sticky-results-bar">
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print</button>
            <button id="btnCopyLink" class="btn-sm-action btn-sm-primary">Copy</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-sm-primary">Retake</button>
        </div>
    </div>

    <!-- Stewardship Style Card (grey border) -->
    <div class="styleBlock synergy-card border-neutral" style="--archetype-color: var(--text-muted); background: var(--bg-tertiary);">
        <div class="card-content">
            <div class="sticky-results-label" style="font-size: 1.5rem;">
            <span style="color: var(--text-primary);">Your stewardship style is:</span>
            <span class="theme-${primaryClass}" style="font-weight: 800;">${primaryKey}</span> / 
            <span class="theme-${secondaryClass}" style="font-weight: 800;">${secondaryKey}</span>
        </div>
            <div class="styleTitle" style="font-size: 1.15rem; color: var(--text-primary);">
            <span style="font-weight: 400; color: var(--text-secondary);">${synergyText}</span>
            </div>
        </div>
    </div>

    <!-- Primary Style Card -->
    <div class="styleBlock primary-card border-${primaryClass}" style="--archetype-color: var(--${primaryClass}-color);">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.35rem;">
                <span style="color: var(--text-primary);">Your primary archetype is:</span> 
                <span class="theme-${primaryClass}">${primaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.1rem; font-weight: 500;">${primaryFull.description ? primaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: Core | Energy: ${primaryKey}</div>
            <div class="styleAction" style="margin-top: 1rem; font-size: 1rem; color: var(--text-primary);"><strong>Core Practices:</strong></div>
            <ul style="margin: 0.5rem 0 1rem 1.25rem; font-size: 1rem; color: var(--text-secondary); line-height: 1.6;">
              ${primaryKit.core.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    </div>

    <!-- Secondary Style Card -->
    <div class="styleBlock border-${secondaryClass}" style="--archetype-color: var(--${secondaryClass}-color);">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.2rem;">
                <span style="color: var(--text-primary);">Your secondary archetype is:</span> 
                <span class="theme-${secondaryClass}">${secondaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.05rem;">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: Core | Energy: ${secondaryKey}</div>
        </div>
    </div>
  `;

  // Action bindings
  document.getElementById("btnCopyLink").onclick = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?primary=${encodeURIComponent(primaryKey)}&secondary=${encodeURIComponent(secondaryKey)}`;
    navigator.clipboard?.writeText(shareUrl)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => prompt("Copy your share link below:", shareUrl));
  };

  document.getElementById("btnResetQuiz").onclick = () => {
    localStorage.removeItem('climatecolor_primary');
    localStorage.removeItem('climatecolor_secondary');
    window.location.href = window.location.pathname;
  };
}
