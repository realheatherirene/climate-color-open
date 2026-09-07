/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Fluid Watercolor Wash)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";
import { starterKits, synergyCards, fullResults } from "./results.js";

export const styleColors = {
    Driver: "#E24A3B",
    Advocate: "#E88D34",
    Visionary: "#D65BB1",
    Architect: "#3B82F6",
    Stabilizer: "#22C55E",
    Connector: "#06B6D4",
    Keeper: "#8B5CF6",
    Guardian: "#64748B"
};

function renderFluidColorWash(primaryKey, secondaryKey, tertiaryKey) {
    const container = document.getElementById('climate-color-wash-container');
    if (!container) return;

    const primaryColor = styleColors[primaryKey] || "#3B82F6";
    const secondaryColor = styleColors[secondaryKey] || "#22C55E";
    const tertiaryColor = styleColors[tertiaryKey] || "#E88D34";

    container.style.background = `
        radial-gradient(at 20% 30%, ${primaryColor}cc 0px, transparent 60%),
        radial-gradient(at 80% 25%, ${secondaryColor}aa 0px, transparent 55%),
        radial-gradient(at 50% 85%, ${tertiaryColor}99 0px, transparent 70%),
        linear-gradient(135deg, ${primaryColor}, ${secondaryColor})
    `;
    container.style.filter = "blur(25px)";
    container.style.opacity = "0.9";
}

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
    <div class="sticky-results-bar">
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print</button>
            <button id="btnCopyLink" class="btn-sm-action btn-sm-primary">Copy Link</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-sm-primary">Retake Quiz</button>
        </div>
    </div>

    <div class="styleBlock synergy-card border-neutral" style="--archetype-color: var(--text-muted); background: var(--bg-primary);">
        <div class="card-content" style="text-align: center;">
            <div class="sticky-results-label" style="font-size: 1.6rem; margin-bottom: 0.75rem;">
              <span style="color: var(--text-primary); font-family: 'ADLaM Display', sans-serif;">You are perfect for the planet. Here is your climate color palette.</span>
            </div>
            
            <div class="result-display-wrapper">
                <div id="climate-color-wash-container" class="color-wash-blob"></div>
                <div class="result-content-overlay">
                    <span class="season-tag">Current Season</span>
                    <p class="triad-summary" style="margin: 0;">
                        <span class="theme-${primaryClass}" style="font-weight: 800;">${primaryKey}</span> + 
                        <span class="theme-${secondaryClass}" style="font-weight: 800;">${secondaryKey}</span> + 
                        <span class="theme-${tertiaryClass}" style="font-weight: 800;">${tertiaryKey}</span>
                    </p>
                </div>
            </div>

            <div class="styleTitle" style="font-size: 1.15rem; color: var(--text-primary); margin-top: 1rem; text-align: left;">
              <div style="font-weight: 400; color: var(--text-secondary); margin-top: 0.25rem; text-align: center;">${synergyText}</div>
            </div>
        </div>
    </div>

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

  renderFluidColorWash(primaryKey, secondaryKey, tertiaryKey);

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
