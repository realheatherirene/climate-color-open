/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Full-Spectrum Palette Readout)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";
import { starterKits, synergyCards, fullResults } from "./results.js";

// Mapping style keys to brand color variables and clean display names/slugs
const styleConfig = {
  Driver: { colorVar: "var(--driver-color)", label: "Red", alias: "red" },
  Advocate: { colorVar: "var(--advocate-color)", label: "Orange", alias: "orange" },
  Visionary: { colorVar: "var(--visionary-color)", label: "Yellow", alias: "yellow" },
  Stabilizer: { colorVar: "var(--stabilizer-color)", label: "Green", alias: "green" },
  Architect: { colorVar: "var(--architect-color)", label: "Blue", alias: "blue" },
  Keeper: { colorVar: "var(--keeper-color)", label: "Deep Blue", alias: "keeper" },
  Connector: { colorVar: "var(--connector-color)", label: "Purple", alias: "purple" },
  Guardian: { colorVar: "var(--guardian-color)", label: "Magenta", alias: "guardian" }
};

export function renderResultsScreen(primaryKey, secondaryKey, scores = null) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  const synergyText = synergyCards[primaryKey]?.[secondaryKey] || secondarySyntheses[primaryKey]?.[secondaryKey] || "";

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";

  // Fallback if scores aren't explicitly passed: build a balanced mock distribution giving weight to primary/secondary
  const calculatedScores = scores || {
    [primaryKey]: 5,
    [secondaryKey]: 4,
    Driver: 2, Advocate: 2, Visionary: 2, Stabilizer: 2, Architect: 2, Keeper: 2, Connector: 2, Guardian: 2
  };

  const totalScore = Object.values(calculatedScores).reduce((a, b) => a + b, 1);

  // Generate ColorHunt-style weighted palette swatch bands
  const paletteHTML = Object.entries(calculatedScores).map(([styleName, score]) => {
    const config = styleConfig[styleName] || { colorVar: "var(--border-strong)", alias: styleName.toLowerCase() };
    const percentage = Math.max(Math.round((score / totalScore) * 100), 6); // Ensure minimum visible width
    
    return `
      <div class="palette-band" style="flex: ${percentage}; background-color: ${config.colorVar};" title="${styleName}: ${percentage}%">
        <span class="palette-band-tooltip">${styleName} (${percentage}%)</span>
      </div>
    `;
  }).join('');

  resultsEl.innerHTML = `
    <!-- Sticky Results Buttons -->
    <div class="sticky-results-bar">
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print</button>
            <button id="btnCopyLink" class="btn-sm-action btn-sm-primary">Copy Link</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-sm-primary">Retake Quiz</button>
        </div>
    </div>

    <!-- Core Philosophy & Full-Spectrum Palette Card -->
    <div class="styleBlock synergy-card border-neutral" style="--archetype-color: var(--text-muted); background: var(--bg-primary);">
        <div class="card-content">
            <div class="sticky-results-label" style="font-size: 1.6rem; margin-bottom: 0.75rem;">
              <span style="color: var(--text-primary); font-family: 'ADLaM Display', sans-serif;">You are perfect for the planet. Here is your climate color palette.</span>
            </div>
            
            <!-- ColorHunt-Style Stacked Swatch Bar -->
            <div class="palette-swatch-container" style="display: flex; height: 56px; border-radius: 10px; overflow: hidden; gap: 3px; margin: 1.25rem 0 1rem 0; box-shadow: var(--shadow-soft);">
              ${paletteHTML}
            </div>

            <div class="styleTitle" style="font-size: 1.15rem; color: var(--text-primary); margin-top: 1rem;">
              <span style="font-weight: 700;">Primary Dynamic:</span> <span class="theme-${primaryClass}" style="font-weight: 800;">${primaryKey}</span> / <span class="theme-${secondaryClass}" style="font-weight: 800;">${secondaryKey}</span>
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
