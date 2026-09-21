import { identityBlurbs, checklistActions } from './quiz-data.js';
import { getBlend } from './blends-data.js';
import { renderColorWheel } from './color-wheel-ui.js';

// Stable, future-proof absolute URL builder for pathway pages
function pathwayUrl(slug) {
  const repoRoot = window.location.pathname.split('/')[1]; // e.g. "climate-color-open"
  return `${window.location.origin}/${repoRoot}/pathways/${slug}.html`;
}

// Generic, blend-agnostic closing line — the "reach the soul" beat Heather
// asked for, shared by all 56 blends rather than hand-written per blend.
// Verified via Flesch-Kincaid at grade 5.9.
const SOUL_CLOSER = "Together, these three colors mean you don't just care about the climate. " +
  "You keep hope alive, and you make it easier for everyone around you to care too.";

// Builds the "What this means for you:" paragraph inside Card 1. Composes:
// a fixed lead-in naming the blend + primary color, the primary color's
// 3-sentence "you at your X" blurb, the secondary and tertiary colors'
// shorter 2-sentence "brings the Y" blurbs, then the shared closing line.
// Generated, not authored — reused across all 56 blend combinations.
function buildIdentityParagraph(blendName, primaryKey, secondaryKey, tertiaryKey) {
  const p = identityBlurbs[primaryKey];
  const s = identityBlurbs[secondaryKey];
  const t = identityBlurbs[tertiaryKey];
  if (!blendName || !p || !s || !t) return "";
  return `${blendName} starts with ${primaryKey}, and ${p.primary} ${s.short} ${t.short} ${SOUL_CLOSER}`;
}

// One row of Card 2's checklist for a given palette color. `--item-color`
// (an inline custom property) drives both the checkbox border and the link
// color — the same pattern already used for `--pill-true`/`--pill-text`
// below, so every color-specific styling hook in this file works the same
// way rather than needing one CSS rule per color.
function checklistItemHtml(colorKey, colorClass) {
  const action = checklistActions[colorKey] || "";
  return `
    <div class="checklist-item">
      <div class="checklist-box" style="--item-color: var(--${colorClass}-text, var(--brand-teal));"></div>
      <div>
        <div class="checklist-text">${action}</div>
        <a href="${pathwayUrl(colorClass)}" class="checklist-link" style="--item-color: var(--${colorClass}-text, var(--brand-teal));">More ${colorKey} ideas &rarr;</a>
      </div>
    </div>`;
}

// One palette pill (used for both Card 1's "a blend of" row). `--pill-true`
// is the color's real atlas.css hue (for the tinted background/border);
// `--pill-text` is that color's WCAG-darkened counterpart (4.5:1 on white),
// computed once for all 8 colors — Red/Blue/Indigo/Purple already clear
// 4.5:1 at full saturation and use their true color for both.
function palettePillHtml(colorKey, colorClass) {
  return `<a href="${pathwayUrl(colorClass)}" class="palette-pill"
      style="--pill-true: var(--${colorClass}-color, var(--brand-teal));
             --pill-text: var(--${colorClass}-text, var(--brand-teal));">${colorKey}</a>`;
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

  const primaryClass = primaryKey ? primaryKey.toLowerCase() : "";
  const secondaryClass = secondaryKey ? secondaryKey.toLowerCase() : "";
  const tertiaryClass = tertiaryKey ? tertiaryKey.toLowerCase() : "";

  // Order-independent: the same three colors always resolve to the same
  // blend, regardless of which one is primary/secondary/tertiary. Falls
  // back gracefully for a malformed/legacy shared link that doesn't
  // resolve to three of the 8 core colors.
  const blend = getBlend(primaryKey, secondaryKey, tertiaryKey) || { name: "", descriptor: "", hex: "" };

  const identityParagraph = buildIdentityParagraph(blend.name, primaryKey, secondaryKey, tertiaryKey);

  // Swatch pill background: the blend's true computed color when available.
  // If blend.hex is ever missing (a blends-data.js that predates the hex
  // field, or a malformed/legacy shared link that didn't resolve to a real
  // blend), fall back to a gradient of the person's own 3 colors instead of
  // one flat static color — so a stale data file degrades to "still shows
  // your actual colors, just as a blend instead of a blend" rather than
  // silently showing the same unrelated color for every single result.
  const swatchBackground = blend.hex
    ? blend.hex
    : `linear-gradient(135deg,
        var(--${primaryClass}-color, var(--brand-teal)),
        var(--${secondaryClass}-color, var(--brand-teal)),
        var(--${tertiaryClass}-color, var(--brand-teal)))`;

  // Shared background wash for Card 1 only (Card 2/the checklist stays a
  // plain neutral card per the approved C3 mockup — no wash needed there).
  const identityWash = `background: linear-gradient(135deg,
      color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 10%, transparent),
      color-mix(in srgb, var(--${secondaryClass}-color, var(--brand-teal)) 7%, transparent));
    border: 1px solid color-mix(in srgb, var(--${primaryClass}-color, var(--brand-teal)) 22%, transparent);`;

  resultsEl.innerHTML = `
    <!-- CARD 1 — THE HERO: approved C3 design (2026-09-21), replacing the
         old separate Box 1 (identity) and Box 3 (closing) cards entirely.
         Blend name renders in locked neutral black for all 56 blends (a
         deliberate WCAG decision, not an oversight — see blends-data.js
         header comment); the swatch pill below it carries the blend's true
         computed color instead, since a decorative swatch isn't subject to
         WCAG's text-contrast rule. No blend.descriptor line here by design
         — the approved mockup dropped it in favor of the fuller paragraph
         below doing that work in plain language. -->
    <div class="hero-card" style="${identityWash}">
      <div class="identity-heading">Your climate color is:</div>
      <div class="blend-name">${blend.name}</div>
      <div class="blend-swatch-pill" style="background: ${swatchBackground};"></div>

      <div class="blend-of-label">A blend of:</div>
      <div class="palette-pills">
        ${palettePillHtml(primaryKey, primaryClass)}
        ${palettePillHtml(secondaryKey, secondaryClass)}
        ${palettePillHtml(tertiaryKey, tertiaryClass)}
      </div>

      <div class="identity-heading">What this means for you:</div>
      <div class="action-paragraph">${identityParagraph}</div>
    </div>

    <!-- CARD 2 — THE CHECKLIST: pulled out of the paragraph into its own
         card per Heather's note ("a new paragraph, a new card, or something
         else... what if the user had their checklist, at this point?").
         One row per palette color, each a real action grounded in that
         color's own pathway page, plus a link into the full pathway for
         more. -->
    <div class="checklist-card">
      <div class="identity-heading">Your starting checklist:</div>
      <div class="checklist-items">
        ${checklistItemHtml(primaryKey, primaryClass)}
        ${checklistItemHtml(secondaryKey, secondaryClass)}
        ${checklistItemHtml(tertiaryKey, tertiaryClass)}
      </div>
    </div>

    <!-- EXPLORE: just the wheel, positioned after both cards now — "the
         larger context" that follows the printable plan itself. Content
         here is still TBD pending a future round (interactive wheel today;
         pathway/directory links may join it later). -->
    <div id="colorWheelSection" class="color-wheel-section"></div>
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