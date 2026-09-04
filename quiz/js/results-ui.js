/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Directory Styled)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";
import { starterKits, synergyCards, fullResults } from "./results.js";

export function renderResultsScreen(primaryKey, secondaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primary = styles[primaryKey] || { color: "#CBD5E1" };
  const secondary = styles[secondaryKey] || { color: "#CBD5E1" };
  
  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const primaryKit = starterKits[primaryKey] || { core: [] };
  const synergyText = synergyCards[primaryKey]?.[secondaryKey] || secondarySyntheses[primaryKey]?.[secondaryKey] || "";

  resultsEl.innerHTML = `
    <!-- Sticky Results Bar / Constellation Banner -->
    <div class="sticky-results-bar">
        <div class="sticky-results-label">
            Your Constellation: 
            <span style="color: ${primary.color};">${primaryKey}</span> / 
            <span style="color: ${secondary.color};">${secondaryKey}</span>
        </div>
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print / Save PDF</button>
            <button id="btnCopyLink" class="btn-sm-action">Copy Link</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-pill-soft">Retake Quiz</button>
        </div>
    </div>

    <!-- Primary Style Card (Largest, with primary color bar) -->
    <div class="styleBlock primary-card" style="border-left-color: ${primary.color};">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.35rem;">
                <span style="color: #0F172A;">Your primary archetype is:</span> 
                <span style="color: ${primary.color};">${primaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.1rem; font-weight: 500;">${primaryFull.description ? primaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: ${primary.pAnchor || 'Core'} | Energy: ${primaryKey}</div>
            <div class="styleAction" style="margin-top: 1rem; font-size: 1rem; color: #0F172A;"><strong>Core Practices:</strong></div>
            <ul style="margin: 0.5rem 0 1rem 1.25rem; font-size: 1rem; color: #334155; line-height: 1.6;">
              ${primaryKit.core.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    </div>

    <!-- Secondary Style Card (Medium-large, with secondary color bar) -->
    <div class="styleBlock" style="border-left-color: ${secondary.color};">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.2rem;">
                <span style="color: #0F172A;">Your secondary archetype is:</span> 
                <span style="color: ${secondary.color};">${secondaryKey}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.05rem;">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
            <div class="styleMeta">Anchor: ${secondary.pAnchor || 'Core'} | Energy: ${secondaryKey}</div>
        </div>
    </div>

    <!-- Synergy Synthesis Block (Neutral Grey Card) -->
    <div class="styleBlock synergy-card" style="border-left-color: #64748B; background: #F8FAFC;">
        <div class="card-content">
            <div class="styleTitle" style="font-size: 1.15rem; color: #0F172A;">
                Synergy Synthesis: <span style="font-weight: 400; color: #334155;">${synergyText}</span>
            </div>
            <div class="styleIdentity" style="font-size: 1.05rem; margin-top: 0.75rem; color: #334155;">
                ${secondarySyntheses[primaryKey]?.[secondaryKey] || ''}
            </div>
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
