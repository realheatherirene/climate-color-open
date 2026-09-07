import { styles, fullResults, starterKits, secondarySyntheses } from './quiz-data.js';

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const tertiaryFull = fullResults[tertiaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  
  // Build a nuanced synthesis covering all three archetypes gracefully
  const primarySecText = secondarySyntheses[primaryKey]?.[secondaryKey] || "";
  const secondaryTerText = secondarySyntheses[secondaryKey]?.[tertiaryKey] || "";
  const combinedSynthesis = `${primarySecText} Grounded further by your tertiary focus in ${tertiaryKey}, ${secondaryTerText.toLowerCase()}`;

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

    <div class="styleBlock synergy-card border-neutral">
        <div class="card-content" style="text-align: center;">
            <div class="sticky-results-label" style="font-size: 1.35rem; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-secondary);">
              Your climate color constellation:
            </div>
            
            <div class="result-display-wrapper">
                <div id="climate-color-wash-container" class="color-wash-spectrum"></div>
                <div class="result-content-overlay">
                    <span class="season-tag">Stewardship Blend</span>
                    <p class="triad-summary" style="margin: 0; font-family: 'ADLaM Display', sans-serif; font-size: 1.4rem;">
                        <span class="theme-${primaryClass}">${primaryKey}</span> &bull; 
                        <span class="theme-${secondaryClass}">${secondaryKey}</span> &bull; 
                        <span class="theme-${tertiaryClass}">${tertiaryKey}</span>
                    </p>
                </div>
            </div>

            <div class="styleTitle" style="font-size: 1.05rem; color: var(--text-secondary); margin-top: 1.25rem; font-weight: 400; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
              ${combinedSynthesis}
            </div>
        </div>
    </div>

    <div class="styleBlock primary-card border-${primaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.25rem;">
                <span style="color: var(--text-secondary); font-weight: 400;">Primary style:</span> 
                <span class="theme-${primaryClass}" style="font-weight: 700;">${primaryKey}</span>
            </div>
            <div class="styleIdentity">${primaryFull.description ? primaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Core Practices</div>
            <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
              ${primaryKit.core.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    </div>

    <div class="styleBlock border-${secondaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.15rem;">
                <span style="color: var(--text-secondary); font-weight: 400;">Secondary style:</span> 
                <span class="theme-${secondaryClass}" style="font-weight: 700;">${secondaryKey}</span>
            </div>
            <div class="styleIdentity">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Supporting Energy</div>
        </div>
    </div>

    <div class="styleBlock border-${tertiaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.10rem;">
                <span style="color: var(--text-secondary); font-weight: 400;">Tertiary accent:</span> 
                <span class="theme-${tertiaryClass}" style="font-weight: 700;">${tertiaryKey}</span>
            </div>
            <div class="styleIdentity">${tertiaryFull.description ? tertiaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Balancing Accent</div>
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

function renderFluidColorWash(primaryKey, secondaryKey, tertiaryKey) {
    const container = document.getElementById('climate-color-wash-container');
    if (!container) return;

    const primaryColor = styles[primaryKey]?.color || "#3B82F6";
    const secondaryColor = styles[secondaryKey]?.color || "#22C55E";
    const tertiaryColor = styles[tertiaryKey]?.color || "#E88D34";

    container.style.background = `linear-gradient(90deg, ${primaryColor}33, ${secondaryColor}33, ${tertiaryColor}33)`;
    container.style.border = `1px solid var(--border-color)`;
}
}
