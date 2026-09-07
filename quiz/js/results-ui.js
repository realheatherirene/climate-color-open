/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Three-Color Triad Palette)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";
import { starterKits, synergyCards, fullResults } from "./results.js";

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const tertiaryFull = fullResults[tertiaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  const synergyText = synergyCards[primaryKey]?.[secondaryKey] || secondarySyntheses[primaryKey]?.[secondaryKey] || "";

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";
  const tertiaryClass = tertiaryKey ? tertiaryKey.toLowerCase() : "";

  resultsEl.innerHTML = `
    <!-- Sticky Results Buttons -->
    <div class="sticky-results-bar">
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print</button>
            <button id="btnCopyLink" class="btn-sm-action btn-sm-primary">Copy Link</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-sm-primary">Retake Quiz</button>
        </div>
    </div>

    <!-- Core Philosophy & Three-Color Triad Swatch Card -->
    <div class="styleBlock synergy-card border-neutral" style="--archetype-color: var(--text-muted); background: var(--bg-primary);">
        <div class="card-content">
            <div class="sticky-results-label" style="font-size: 1.6rem; margin-bottom: 0.75rem;">
              <span style="color: var(--text-primary); font-family: 'ADLaM Display', sans-serif;">You are perfect for the planet. Here is your climate color palette.</span>
            </div>
            
            <!-- ColorHunt-Style Triad Swatch Bar (Primary / Secondary / Tertiary) -->
            <div class="palette-swatch-container" style="display: flex; height: 64px; border-radius: 12px; overflow: hidden; gap: 4px; margin: 1.25rem 0 1rem 0; box-shadow: var(--shadow-soft);">
              <div style="flex: 3; background-color: var(--${primaryClass}-color);" title="Primary: ${primaryKey}"></div>
              <div style="flex: 2; background-color: var(--${secondaryClass}-color);" title="Secondary: ${secondaryKey}"></div>
              <div style="flex: 1.5; background-color: var(--${tertiaryClass}-color);" title="Tertiary: ${tertiaryKey}"></div>
            </div>

            <div class="styleTitle" style="font-size: 1.15rem; color: var(--text-primary); margin-top: 1rem;">
              <span style="font-weight: 700;">Your Triad:</span> 
              <span class="theme-${primaryClass}" style="font-weight: 800;">${primaryKey}</span> / 
              <span class="theme-${secondaryClass}" style="font-weight: 800;">${secondaryKey}</span> / 
              <span class="theme-${tertiaryClass}" style="font-weight: 800;">${tertiaryKey}</span>
              <div style="font-weight: 400; color: var(--text-secondary); margin-top: 0.25rem;">${synergyText}</div>
            </div>
        </div>
    </div>

    <!-- Primary Style Card -->
    <div class="styleBlock primary-card border-${primaryClass}" style="--archetype-color: var(--${primaryClass}-color);">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.35rem;">
                <span style="color: var(--text-primary);">Your primary climate color is:</span> 
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
                <span style="color: var(--text-primary);">Your secondary climate color is:</span> 
                <span class="theme-${secondaryClass}">${secondaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.05rem;">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: Core | Energy: ${secondaryKey}</div>
        </div>
    </div>

    <!-- Tertiary Style Card -->
    <div class="styleBlock border-${tertiaryClass}" style="--archetype-color: var(--${tertiaryClass}-color);">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.15rem;">
                <span style="color: var(--text-primary);">Your tertiary accent color is:</span> 
                <span class="theme-${tertiaryClass}">${tertiaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1rem;">${tertiaryFull.description ? tertiaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: Core | Energy: ${tertiaryKey}</div>
        </div>
    </div>
  `;

  // Action bindings
  document.getElementById("btnCopyLink").onclick = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?primary=${encodeURIComponent(primaryKey)}&secondary=${encodeURIComponent(secondaryKey)}&tertiary=${encodeURIComponent(tertiaryKey)}`;
    navigator.clipboard?.writeText(shareUrl)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => prompt("Copy your share link below:", shareUrl));
  };

  document.getElementById("btnResetQuiz").onclick = () => {
    localStorage.removeItem('climatecolor_primary');
    localStorage.removeItem('climatecolor_secondary');
    localStorage.removeItem('climatecolor_tertiary');
    window.location.href = window.location.pathname;
  };
}
