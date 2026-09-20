import { fullResults, styles } from './quiz-data.js';
import { getBlend } from './blends-data.js';
import { renderColorWheel } from './color-wheel-ui.js';

// Stable, future-proof absolute URL builder for pathway pages
function pathwayUrl(slug) {
  const repoRoot = window.location.pathname.split('/')[1]; // e.g. "climate-color-open"
  return `${window.location.origin}/${repoRoot}/pathways/${slug}.html`;
}

function pathwaysIndexUrl() {
  const repoRoot = window.location.pathname.split('/')[1];
  return `${window.location.origin}/${repoRoot}/pathways/index.html`;
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
  const paletteSummary = primaryKey && secondaryKey && tertiaryKey
    ? `A blend of ${reflectionOf(primaryKey)}, ${reflectionOf(secondaryKey)}, and ${reflectionOf(tertiaryKey)}.`
    : "";

  // Closing "You belong here" paragraph — walks color → palette → wheel in
  // one generated sentence, reusing primary's existing fullResults paragraph
  // verbatim and secondary/tertiary's existing one-word reflections. No new
  // hand-written copy per blend (56 combinations), same generated-not-
  // authored approach as paletteSummary above. Approved design: canvas
  // artboard C1 — Results Page: Cohesive Story Flow, 2026-09-20.
  const closingParagraph = primaryKey && secondaryKey && tertiaryKey && blend.name
    ? `${blend.name} starts with ${primaryKey}. ${(primaryFull.description || "").trim()} ` +
      `${secondaryKey}'s ${reflectionOf(secondaryKey)} and ${tertiaryKey}'s ${reflectionOf(tertiaryKey)} sharpen that instinct. ` +
      `That's one of eight ways to show up for the climate movement, and it needs all of them, including yours. ` +
      `This is your starting point, not a test you passed or failed.`
    : "";

  // Shared background wash for the two bookend cards (hero + closing), both
  // driven by the same primary/secondary colors so they always match for
  // any result, not just this one. Reused as-is on both cards below.
  const identityWash = `background: linear-gradient(135deg,
      color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 10%, transparent),
      color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 7%, transparent));
    border: 1px solid color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 22%, transparent);`;

  // Primary/Secondary/Tertiary detail cards — NOT rendered below (their
  // content now lives in the closing paragraph above instead, per design
  // decision on 2026-09-20: the wheel + pills already carry this info, so a
  // full card per color was redundant reading). Left defined, unused, in
  // case a future redesign wants them back.
  const detailCardsHtml = `
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
  void detailCardsHtml; // intentionally unused — see comment above

  resultsEl.innerHTML = `
    <!-- ACT 1 — THE REVEAL: single color-forward identity. Bookends with
         the closing card below via the same identityWash background. -->
    <div class="blend-hero" style="${identityWash}">
      <div class="identity-heading">This is your climate color.</div>
      <div class="blend-name">${blend.name}</div>
      <div class="blend-descriptor">${blend.descriptor}</div>
      <div class="blend-swatch"
        style="background: linear-gradient(135deg,
          var(--${primaryClass}-color, var(--brand-teal)),
          var(--${secondaryClass}-color, var(--brand-teal)),
          var(--${tertiaryClass}-color, var(--brand-teal)));"></div>
    </div>

    <!-- ACT 2+3 — PALETTE, THEN PALETTE IN CONTEXT: open on the page
         background rather than boxed, so the two solid cards (reveal,
         invitation) read as the page's bookends and this stays the
         "explore" beat between them. -->
    <div class="palette-section">
      <h2 class="identity-heading">This is your climate color palette.</h2>
      <div class="constellation-subtitle">${paletteSummary}</div>

      <!-- Uniform Sized Color Pills (Now Clickable Links) -->
      <div style="display: flex; align-items: center; justify-content: center; gap: 0.6rem; flex-wrap: wrap; margin: 0.75rem 0 1.8rem 0;">
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

      <div class="wheel-bridge-line">Here's how ${blend.name} fits among all eight climate colors.</div>

      <!-- 8-Color Wheel: explore all eight colors, with primary/secondary/tertiary
           extended outward as a persistent "you are here" indicator (B1) -->
      <div id="colorWheelSection" class="color-wheel-section"></div>
    </div>

    <!-- ACT 4 — THE INVITATION: closes the story instead of trailing off.
         Same identityWash as the hero card above, so the two visually
         bookend the page. Primary/secondary/tertiary detail is folded into
         this one paragraph instead of three separate cards (see
         detailCardsHtml above). -->
    <div class="blend-hero belonging-card" style="${identityWash}">
      <div class="identity-heading">You belong here.</div>
      <div class="belonging-paragraph">${closingParagraph}</div>
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <a href="${pathwaysIndexUrl()}" class="pill-btn" style="padding: 0.6rem 1.4rem; font-size: 0.9rem;">Explore All 8 Colors</a>
      </div>
      <!-- "Share Your Color" from the mockup isn't shipped yet on purpose:
           a button with no real action behind it is a dead click and an
           accessibility trap (a screen reader announces a control that does
           nothing). Add it once there's an actual mechanism, e.g. a
           shareable image export. -->
    </div>
  `;

  renderColorWheel(document.getElementById('colorWheelSection'), {
    primaryKey, secondaryKey, tertiaryKey
  });

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