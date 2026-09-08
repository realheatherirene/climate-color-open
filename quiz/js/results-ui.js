import { styles, fullResults, starterKits, secondarySyntheses } from './quiz-data.js';

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;
  
// Dynamically inject the action buttons into the top banner when results load
  const bannerActions = document.getElementById('bannerActions');
  if (bannerActions) {
      if (!document.getElementById('btnCopyLink')) {
          bannerActions.insertAdjacentHTML('afterbegin', `
              <button onclick="window.print()" class="action-btn">PRINT</button>
              <button id="btnCopyLink" class="action-btn">COPY</button>
              <button id="btnResetQuiz" class="action-btn">RETAKE</button>
          `);
      }
  }
  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const tertiaryFull = fullResults[tertiaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  
  const primarySecText = secondarySyntheses[primaryKey]?.[secondaryKey] || "";
  const secondaryTerText = secondarySyntheses[secondaryKey]?.[tertiaryKey] || "";
  const combinedSynthesis = `${primarySecText} Grounded further by your tertiary focus in ${tertiaryKey}, ${secondaryTerText.toLowerCase()}`;

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";
  const tertiaryClass = tertiaryKey ? tertiaryKey.toLowerCase() : "";

  resultsEl.innerHTML = `

   <!-- Unboxed Editorial Constellation Header -->
    <div class="constellation-header-section" style="text-align: left; margin: 1.5rem 0 2.5rem 0;">
        <span class="season-tag">Stewardship Blend</span>
        
        <!-- Uniform Sized Archetype Pills -->
        <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; margin: 0.5rem 0 1rem 0;">
            <span class="archetype-pill" style="font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px; background-color: color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 15%, transparent); color: var(--${primaryClass}-color, var(--brand-teal)); border: 1px solid color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 40%, transparent);">
                ${primaryKey}
            </span>
            <span class="archetype-pill" style="font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px; background-color: color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 12%, transparent); color: var(--${secondaryClass}-color, var(--brand-teal)); border: 1px solid color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 30%, transparent);">
                ${secondaryKey}
            </span>
            <span class="archetype-pill" style="font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px; background-color: color-mix(in srgb, var(--${tertiaryClass}-color, var(--brand-teal)) 8%, transparent); color: var(--${tertiaryClass}-color, var(--brand-teal)); border: 1px solid color-mix(in srgb, var(--${tertiaryClass}-color, var(--brand-teal)) 25%, transparent);">
                ${tertiaryKey}
            </span>
        </div>
        
        <!-- Full-Width Fluid Gradient Spectrum Bar -->
        <div id="climate-color-wash-container" class="constellation-spectrum-line" style="height: 8px; width: 100%; border-radius: 9999px; margin: 2rem 0 0.5rem 0;"></div>
    </div>

<!-- Primary Style Card -->
    <div class="styleBlock primary-card border-${primaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.25rem;">
                <span style="color: var(--text-muted); font-weight: 400;">Primary style:</span> 
                <span class="theme-${primaryClass}" style="font-weight: 700;">${primaryKey}</span>
            </div>
            <div class="styleIdentity">${primaryFull.description ? primaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Core Practices</div>
            <ul style="margin: 0.5rem 0 1.25rem 1.25rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
              ${primaryKit.core.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <a href="/pathways/${primaryClass}.html" class="pill-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore ${primaryKey} Archetype &rarr;</a>
        </div>
    </div>

    <!-- Secondary Style Card -->
    <div class="styleBlock border-${secondaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.15rem;">
                <span style="color: var(--text-muted); font-weight: 400;">Secondary style:</span> 
                <span class="theme-${secondaryClass}" style="font-weight: 700;">${secondaryKey}</span>
            </div>
            <div class="styleIdentity">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
            <div class="styleMeta" style="margin-bottom: 1rem;">Supporting Energy</div>
            <a href="/pathways/${secondaryClass}.html" class="pill-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore ${secondaryKey} Archetype &rarr;</a>
        </div>
    </div>

    <!-- Tertiary Accent Card -->
    <div class="styleBlock border-${tertiaryClass}">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.10rem;">
                <span style="color: var(--text-muted); font-weight: 400;">Tertiary accent:</span> 
                <span class="theme-${tertiaryClass}" style="font-weight: 700;">${tertiaryKey}</span>
            </div>
            <div class="styleIdentity">${tertiaryFull.description ? tertiaryFull.description.trim() : ''}</div>
            <div class="styleMeta" style="margin-bottom: 1rem;">Balancing Accent</div>
            <a href="/pathways/${tertiaryClass}.html" class="pill-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore ${tertiaryKey} Archetype &rarr;</a>
        </div>
    </div>
  `;

  // Render fluid gradient for the sleek accent line
  const container = document.getElementById('climate-color-wash-container');
  if (container) {
      const pColor = styles[primaryKey]?.color || "#3B82F6";
      const sColor = styles[secondaryKey]?.color || "#22C55E";
      const tColor = styles[tertiaryKey]?.color || "#E88D34";
      container.style.background = `linear-gradient(90deg, ${pColor}, ${sColor}, ${tColor})`;
  }

  // Copy Link & Reset Handlers... (keep existing logic)
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
