import { fullResults, styles } from './quiz-data.js';
import { getBlend } from './blends-data.js';

// Stable, future-proof absolute URL builder for pathway pages
function pathwayUrl(slug) {
  const repoRoot = window.location.pathname.split('/')[1]; // e.g. "climate-color-open"
  return `${window.location.origin}/${repoRoot}/pathways/${slug}.html`;
}

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  // Dynamically inject the action buttons into the top banner
  const bannerActions = document.getElementById('bannerActions');
  if (bannerActions) {
    if (!document.getElementById('btnCopyLink')) {
      bannerActions.insertAdjacentHTML('afterbegin', `
        <button onclick="window.print()" class="btn-sm-action">Print</button>
        <button id="btnCopyLink" class="btn-sm-action">Copy</button>
        <button id="btnResetQuiz" class="btn-sm-action">Retake</button>
      `);
    }
  }
  const primaryFull = fullResults[primaryKey] || { description: "" };
  const secondaryFull = fullResults[secondaryKey] || { description: "" };
  const tertiaryFull = fullResults[tertiaryKey] || { description: "" };

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";
  const tertiaryClass = tertiaryKey ? tertiaryKey.toLowerCase() : "";

  // Order-independent: the same three colors always resolve to the same
  // blend, regardless of which one is primary/secondary/tertiary. Falls
  // back gracefully for a malformed/legacy shared link that doesn't
  // resolve to three of the 8 core colors.
  const blend = getBlend(primaryKey, secondaryKey, tertiaryKey) || { name: "", descriptor: "" };

  // Short, generated blend-personality line — pulled from each color's
  // existing one-word reflection (quiz-data.js), not new hand-written copy.
  // e.g. "A blend of steadiness, belonging, and safety."
  const reflectionOf = (key) => (styles[key]?.reflection || "").toLowerCase();
  const blendSummary = primaryKey && secondaryKey && tertiaryKey
    ? `A blend of ${reflectionOf(primaryKey)}, ${reflectionOf(secondaryKey)}, and ${reflectionOf(tertiaryKey)}.`
    : "";

  resultsEl.innerHTML = `
    <!-- Blend Hero: single color-forward identity, leads the results page -->
    <div class="blend-hero">
      <div class="blend-eyebrow">Your climate color is</div>
      <div class="blend-name">${blend.name}</div>
      <div class="blend-descriptor">${blend.descriptor}</div>
      <div class="blend-swatch"
        style="background: linear-gradient(135deg,
          var(--${primaryClass}-color, var(--brand-teal)),
          var(--${secondaryClass}-color, var(--brand-teal)),
          var(--${tertiaryClass}-color, var(--brand-teal)));"></div>
      <div class="blend-summary">${blendSummary}</div>
    </div>

    <!-- Constellation: the three colors behind the blend, in order of strength -->
    <div class="constellation-header-section" style="text-align: left; margin: 2rem 0 2.5rem 0;">

      <h2 class="results-heading">Your Climate Color Palette</h2>
      <div class="constellation-subtitle">The three colors behind your blend, in order of strength.</div>

      <!-- Uniform Sized Color Pills (Now Clickable Links) -->
      <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; margin: 0.75rem 0 0 0;">
        <a href="${pathwayUrl(primaryClass)}" class="result-pill"
          style="text-decoration: none; font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px;
          background-color: color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 15%, transparent);
          color: var(--${primaryClass}-color, var(--brand-teal));
          border: 1px solid color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 40%, transparent);">
          ${primaryKey}
        </a>

        <a href="${pathwayUrl(secondaryClass)}" class="result-pill"
          style="text-decoration: none; font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px;
          background-color: color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 12%, transparent);
          color: var(--${secondaryClass}-color, var(--brand-teal));
          border: 1px solid color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 30%, transparent);">
          ${secondaryKey}
        </a>

        <a href="${pathwayUrl(tertiaryClass)}" class="result-pill"
          style="text-decoration: none; font-size: 0.95rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 9999px;
          background-color: color-mix(in srgb, var(--${tertiaryClass}-color, var(--brand-teal)) 8%, transparent);
          color: var(--${tertiaryClass}-color, var(--brand-teal));
          border: 1px solid color-mix(in srgb, var(--${tertiaryClass}-color, var(--brand-teal)) 25%, transparent);">
          ${tertiaryKey}
        </a>
      </div>
    </div>

    <!-- Primary Style Card -->
    <div class="styleBlock primary-card border-${primaryClass}">
      <div class="card-content">
        <div class="styleTitle" style="font-size: 1.25rem;">
          <span style="color: var(--text-muted); font-weight: 400;">Primary color:</span>
          <span class="theme-${primaryClass}" style="font-weight: 700;">${primaryKey}</span>
        </div>
        <div class="styleIdentity">${primaryFull.description ? primaryFull.description.trim() : ''}</div>
        <a href="${pathwayUrl(primaryClass)}" class="pill-btn"
          style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore the ${primaryKey} Pathway &rarr;</a>
      </div>
    </div>

    <!-- Secondary Style Card -->
    <div class="styleBlock border-${secondaryClass}">
      <div class="card-content">
        <div class="styleTitle" style="font-size: 1.15rem;">
          <span style="color: var(--text-muted); font-weight: 400;">Secondary color:</span>
          <span class="theme-${secondaryClass}" style="font-weight: 700;">${secondaryKey}</span>
        </div>
        <div class="styleIdentity">${secondaryFull.description ? secondaryFull.description.trim() : ''}</div>
        <div class="styleMeta" style="margin-bottom: 1rem;">Supporting Energy</div>
        <a href="${pathwayUrl(secondaryClass)}" class="pill-btn"
          style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore the ${secondaryKey} Pathway &rarr;</a>
      </div>
    </div>

    <!-- Tertiary Accent Card -->
    <div class="styleBlock border-${tertiaryClass}">
      <div class="card-content">
        <div class="styleTitle" style="font-size: 1.10rem;">
          <span style="color: var(--text-muted); font-weight: 400;">Tertiary color:</span>
          <span class="theme-${tertiaryClass}" style="font-weight: 700;">${tertiaryKey}</span>
        </div>
        <div class="styleIdentity">${tertiaryFull.description ? tertiaryFull.description.trim() : ''}</div>
        <div class="styleMeta" style="margin-bottom: 1rem;">Balancing Accent</div>
        <a href="${pathwayUrl(tertiaryClass)}" class="pill-btn"
          style="padding: 0.45rem 1rem; font-size: 0.85rem;">Explore the ${tertiaryKey} Pathway &rarr;</a>
      </div>
    </div>
  `;

  // Copy Link & Reset Handlers
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