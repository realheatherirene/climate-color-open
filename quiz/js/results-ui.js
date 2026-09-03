/* ==========================================================================
   Climate Color Quiz — Results Rendering UI (Directory Styled)
   ========================================================================== */

import { styles, secondarySyntheses } from "./quiz-data.js";

export function renderResultsScreen(primaryKey, secondaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  const primary = styles[primaryKey];
  const secondary = styles[secondaryKey];

  const synthesisText =
    secondarySyntheses[primaryKey]?.[secondaryKey] ||
    `You bring a unique combination of ${primaryKey} initiative and ${secondaryKey} perspective to community stewardship.`;

  resultsEl.innerHTML = `
    <!-- Sticky Results Bar -->
    <div class="sticky-results-bar">
        <div class="sticky-results-label">
            Your Constellation: 
            <span class="theme-${primaryKey.toLowerCase()}">${primaryKey}</span> / 
            <span class="theme-${secondaryKey.toLowerCase()}">${secondaryKey}</span>
        </div>
        <div class="sticky-actions">
            <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print / Save PDF</button>
            <button id="btnCopyLink" class="btn-sm-action">Copy Link</button>
            <button id="btnResetQuiz" class="btn-sm-action btn-pill-soft">Retake Quiz</button>
        </div>
    </div>

    <!-- Primary Style Card (Directory Styled) -->
    <div class="styleBlock border-${primaryKey.toLowerCase()}">
        <div class="styleTitle styleTitle-lg theme-${primaryKey.toLowerCase()}">Primary Style: ${primaryKey}</div>
        <div class="styleIdentity">${primary.identity}</div>
        <div class="styleMeta">Anchor: ${primary.anchor} | Energy: ${primary.energy}</div>
        <div class="styleContribution"><strong>How You Contribute:</strong> ${primary.contribution}</div>
        <div class="styleAction"><strong>Where You Shine:</strong> ${primary.shine}</div>
        <div class="styleWatchouts"><strong>Watchouts:</strong> ${primary.watchouts}</div>
    </div>

    <!-- Secondary Style Card -->
    <div class="styleBlock border-${secondaryKey.toLowerCase()}">
        <div class="styleTitle styleTitle-md theme-${secondaryKey.toLowerCase()}">Secondary Style: ${secondaryKey}</div>
        <div class="styleIdentity styleIdentity-sm">${secondary.identity}</div>
        <div class="styleMeta">Anchor: ${secondary.anchor} | Energy: ${secondary.energy}</div>
        <div class="styleContribution"><strong>How You Contribute:</strong> ${secondary.contribution}</div>
        <div class="styleAction"><strong>Where You Shine:</strong> ${secondary.shine}</div>
        <div class="styleWatchouts"><strong>Watchouts:</strong> ${secondary.watchouts}</div>
    </div>

    <!-- Synergy Synthesis Block -->
    <div class="synthesisBlock border-${primaryKey.toLowerCase()}">
        <div class="synthesisTitle">How Your Styles Work Together</div>
        <div class="synthesisText">${synthesisText}</div>
    </div>
  `;

  // Attach interactive button behaviors
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
