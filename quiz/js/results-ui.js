import { identityBlurbs, colorActivities } from './quiz-data.js';
import { getBlend } from './blends-data.js';
import { renderColorWheel } from './color-wheel-ui.js';

// Stable, future-proof absolute URL builder for pathway pages
function pathwayUrl(slug) {
  const repoRoot = window.location.pathname.split('/')[1]; // e.g. "climate-color-open"
  return `${window.location.origin}/${repoRoot}/pathways/${slug}.html`;
}

// Absolute URL builder for a color's pre-filtered Directory listing, mirroring
// pathwayUrl() above. directory-logic.js resolves the `?style=` param against
// the real style names case-insensitively, so the color's proper-case name
// (e.g. "Green") is exactly what it expects.
function directoryUrl(colorKey) {
  const repoRoot = window.location.pathname.split('/')[1];
  return `${window.location.origin}/${repoRoot}/directory/index.html?style=${encodeURIComponent(colorKey)}`;
}

// Generic, blend-agnostic closing line — the "reach the soul" beat Heather
// asked for, shared by all 56 blends rather than hand-written per blend.
// Verified via Flesch-Kincaid at grade 5.9.
const SOUL_CLOSER = "Together, these three colors mean you don't just care about the climate. " +
  "You keep hope alive, and you make it easier for everyone around you to care too.";

// Builds the hero card's summary content (revised 2026-09-23, replacing the
// prior version's "{Blend} starts with {Primary}, and {3-sentence blurb}"
// opening paragraph). Returns { subheader, paragraphs }:
//   - `subheader` is just the nature-imagery line ("{Blend} is the color of
//     {image}.") on its own, now standing in for the retired "Your climate
//     color in action:" label instead of leading into a paragraph — Heather:
//     that label "isn't needed and not accurate." Rendered separately by
//     renderResultsScreen as a small styled line, not one of the <p>s below.
//   - `paragraphs` is four short, parallel entries: the primary, secondary,
//     and tertiary colors' own "{Color} brings the {trait}." blurbs (all
//     three now pull from identityBlurbs' `short` field — the longer
//     "{Color} is you at your most X" `primary` field is no longer used
//     here, so all three colors read as one consistent, punchy pattern
//     instead of the primary color getting a different, longer treatment),
//     plus the shared closing line (SOUL_CLOSER) last.
// Still generated, not authored per blend — reused across all 56 blend
// combinations via blends-data.js's `natureImage` field.
function buildIdentityParagraphs(blend, primaryKey, secondaryKey, tertiaryKey) {
  const p = identityBlurbs[primaryKey];
  const s = identityBlurbs[secondaryKey];
  const t = identityBlurbs[tertiaryKey];
  if (!blend.name || !p || !s || !t) return { subheader: "", paragraphs: [] };

  const subheader = blend.natureImage ? `${blend.name} is the color of ${blend.natureImage}.` : "";
  const paragraphs = [p.short, s.short, t.short, SOUL_CLOSER];

  return { subheader, paragraphs };
}

// One "action palette" card for a given palette color — same
// .styleBlock/.styleTitle/.styleIdentity component family already used by
// the Pathways and Directory pages (kept dormant in results.css for this
// exact purpose). `isPrimary` adds the .primary-card modifier (thicker
// border + stronger hover shadow) so the person's primary color reads as
// the lead card among the three. Cards are now full-width stacked rows
// (2026-09-23, replacing the 3-column grid Heather felt made them "too
// skinny") with a short lead line plus a 3-item bullet list (quiz-data.js's
// colorActivities) instead of one dense sentence, and two buttons out to
// that color's Pathway page and its pre-filtered Directory listing.
function colorCardHtml(colorKey, colorClass, isPrimary) {
  const activities = colorActivities[colorKey] || [];
  const itemsHtml = activities.map(item => `<li>${item}</li>`).join('');
  return `
    <div class="styleBlock border-${colorClass}${isPrimary ? ' primary-card' : ''}">
      <div class="card-content">
        <div class="styleTitle">${colorKey}</div>
        <div class="styleIdentity">People with ${colorKey} in their palette tend to enjoy:</div>
        <ul class="action-palette-items">${itemsHtml}</ul>
      </div>
      <div class="action-palette-cta">
        <a href="${pathwayUrl(colorClass)}" class="btn-pill-soft">Explore ${colorKey} ideas &rarr;</a>
        <a href="${directoryUrl(colorKey)}" class="btn-pill-soft">Explore ${colorKey} resources &rarr;</a>
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
  const blend = getBlend(primaryKey, secondaryKey, tertiaryKey) || { name: "", descriptor: "", natureImage: "", hex: "" };

  const { subheader, paragraphs: identityParagraphs } = buildIdentityParagraphs(blend, primaryKey, secondaryKey, tertiaryKey);
  const identityParagraphsHtml = identityParagraphs.map(p => `<p>${p}</p>`).join('');

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

  resultsEl.innerHTML = `
    <!-- CARD 1 — THE HERO: approved C3 design (2026-09-21), replacing the
         old separate Box 1 (identity) and Box 3 (closing) cards entirely.
         Background changed 2026-09-23 from a per-blend color wash to a flat
         neutral grey (Heather: "I just don't love the color-aligned
         shading, and it's not necessary") — see results.css's .hero-card
         for the actual color; no inline style needed here anymore. Blend
         name renders in locked neutral black for all 56 blends (a
         deliberate WCAG decision, not an oversight — see blends-data.js
         header comment); the swatch pill below it carries the blend's true
         computed color instead, since a decorative swatch isn't subject to
         WCAG's text-contrast rule. The old "Your climate color in action:"
         label is retired 2026-09-23 (Heather: "it's not needed and not
         accurate") — the nature-imagery sentence built from blends-data.js's
         natureImage field now stands alone as a small styled lead-in line
         (.nature-subheader) in its place, followed by three short, parallel
         "{Color} brings the..." paragraphs (one per palette color) and the
         shared closing line. -->
    <div class="hero-card">
      <div class="identity-heading">Your climate color:</div>
      <div class="blend-name">${blend.name}</div>
      <div class="blend-swatch-pill" style="background: ${swatchBackground};"></div>

      <div class="blend-of-label">A blend of:</div>
      <div class="palette-pills">
        ${palettePillHtml(primaryKey, primaryClass)}
        ${palettePillHtml(secondaryKey, secondaryClass)}
        ${palettePillHtml(tertiaryKey, tertiaryClass)}
      </div>

      ${subheader ? `<div class="nature-subheader">${subheader}</div>` : ''}
      <div class="action-paragraph">${identityParagraphsHtml}</div>
    </div>

    <!-- YOUR ACTION PALETTE: revived from the original primary/secondary/
         tertiary card design (2026-09-22), relabeled and restyled
         2026-09-23 (was "Look for this") as full-width stacked rows instead
         of a 3-column grid Heather felt made the cards "too skinny." Each
         card carries a short bullet list plus two buttons — one to that
         color's Pathway page, one to its pre-filtered Directory listing —
         so a person who never scrolls past this point still leaves with
         real, usable next steps for all three colors. -->
    <div class="action-palette-section">
      <div class="identity-heading">Your action palette:</div>
      <div class="action-palette-list">
        ${colorCardHtml(primaryKey, primaryClass, true)}
        ${colorCardHtml(secondaryKey, secondaryClass, false)}
        ${colorCardHtml(tertiaryKey, tertiaryClass, false)}
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