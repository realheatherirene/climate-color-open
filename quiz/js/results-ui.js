import { identityBlurbs, colorActivities } from './results-content.js';
import { getColor } from '../../core/climate-color.js';
import { getBlend, blendHex } from '../../core/blends.js';
import { renderWheel } from '../../core/wheel.js';

// Full link to a color's pathway page
function pathwayUrl(slug) {
  const repoRoot = window.location.pathname.split('/')[1]; // e.g. "climate-color-open"
  return `${window.location.origin}/${repoRoot}/pathways/${slug}.html`;
}

// Full link to a color's Directory view. The Directory reads ?style= in
// any capitalization, so the color name works as is.
function directoryUrl(colorKey) {
  const repoRoot = window.location.pathname.split('/')[1];
  return `${window.location.origin}/${repoRoot}/directory/index.html?style=${encodeURIComponent(colorKey)}`;
}

// Full link to a color's view of the Story Map (reads ?style= the same
// way).
function storyMapUrl(colorKey) {
  const repoRoot = window.location.pathname.split('/')[1];
  return `${window.location.origin}/${repoRoot}/storymap/index.html?style=${encodeURIComponent(colorKey)}`;
}

// The closing line, shared by all 56 blends (reading level: grade 5.9).
const SOUL_CLOSER = "Together, these three colors mean you don't just care about the climate. " +
  "You keep hope alive, and you make it easier for everyone around you to care too.";

// Builds the hero card's summary. Returns { subheader, paragraphs }:
//   - `subheader`: the nature line, "{Blend} is the color of {image}.",
//     shown on its own as a small lead-in.
//   - `paragraphs`: one short "{Color} brings the..." line for each of the
//     three colors (identityBlurbs' `short`), so all three read as equals,
//     then the shared closing line.
// Built from data, so it works for all 56 blends.
function buildIdentityParagraphs(blend, primaryKey, secondaryKey, tertiaryKey) {
  const p = identityBlurbs[primaryKey];
  const s = identityBlurbs[secondaryKey];
  const t = identityBlurbs[tertiaryKey];
  if (!blend.name || !p || !s || !t) return { subheader: "", paragraphs: [] };

  const subheader = blend.natureImage ? `${blend.name} is the color of ${blend.natureImage}.` : "";
  const paragraphs = [p.short, s.short, t.short, SOUL_CLOSER];

  return { subheader, paragraphs };
}

// A color's archetype, or "" for an unknown key, so a broken shared link
// just leaves the archetype out instead of printing "undefined".
function archetypeOf(colorKey) {
  return getColor(colorKey)?.archetype || "";
}

// One action palette card, in the same card style as the Directory and
// Pathways. `isPrimary` adds .primary-card (a thicker border and stronger
// shadow), so the person's primary color leads.
function colorCardHtml(colorKey, colorClass, isPrimary) {
  const activities = colorActivities[colorKey] || [];
  const archetype = archetypeOf(colorKey);
  const itemsHtml = activities.map(item => `<li>${item}</li>`).join('');
  return `
    <div class="styleBlock border-${colorClass}${isPrimary ? ' primary-card' : ''}">
      <div class="card-content">
        <div class="styleTitle">${colorKey}</div>
        ${archetype ? `<div class="card-archetype">The ${archetype}</div>` : ''}
        <div class="styleIdentity">People with ${colorKey} in their palette tend to enjoy:</div>
        <ul class="action-palette-items">${itemsHtml}</ul>
      </div>
      <div class="action-palette-cta">
        <a href="${pathwayUrl(colorClass)}" class="btn-pill-soft">Explore ${colorKey} pathways &rarr;</a>
        <a href="${directoryUrl(colorKey)}" class="btn-pill-soft">Explore ${colorKey} resources &rarr;</a>
        <a href="${storyMapUrl(colorKey)}" class="btn-pill-soft">Explore ${colorKey} stories &rarr;</a>
      </div>
    </div>`;
}

// One palette pill in the hero card's "A blend of" row. `--pill-true`
// is the color (for the tint and border) and `--pill-text` its text shade,
// both from core/atlas.css. results.css turns them into the site-wide pill
// recipe, which clears 4.5:1 for all eight colors.
function palettePillHtml(colorKey, colorClass) {
  return `<a href="${pathwayUrl(colorClass)}" class="palette-pill"
      style="--pill-true: var(--${colorClass}-color, var(--brand-teal));
             --pill-text: var(--${colorClass}-text, var(--brand-teal));">${colorKey}</a>`;
}

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;

  resultsEl.hidden = false;

  // Add the Print, Copy, and Retake buttons to the top banner
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

  // The same three colors always give the same blend, in any order. A
  // broken shared link that doesn't name three of the eight colors gets an
  // empty blend instead of an error.
  const blend = getBlend(primaryKey, secondaryKey, tertiaryKey) || { name: "", descriptor: "", natureImage: "", hex: "" };

  const { subheader, paragraphs: identityParagraphs } = buildIdentityParagraphs(blend, primaryKey, secondaryKey, tertiaryKey);
  const identityParagraphsHtml = identityParagraphs.map(p => `<p>${p}</p>`).join('');

  // Color first, archetype right after: the pills are the hook, and this
  // line under them says what they mean. All three archetypes are named
  // equally, in palette order.
  const [aP, aS, aT] = [primaryKey, secondaryKey, tertiaryKey].map(archetypeOf);
  const archetypeLine = (aP && aS && aT)
    ? `<div class="archetype-line">You're part ${aP}, part ${aS}, and part ${aT}.</div>`
    : '';

  // Swatch pill background: the blend's color, worked out live from
  // core/atlas.css (core/blends.js). If it can't be (a malformed or legacy
  // shared link that didn't resolve to a real blend), fall back to a
  // gradient of the person's own three colors.
  const swatchHex = blend.name ? blendHex(blend) : "";
  const swatchBackground = swatchHex
    ? swatchHex
    : `linear-gradient(135deg,
        var(--${primaryClass}-color, var(--brand-teal)),
        var(--${secondaryClass}-color, var(--brand-teal)),
        var(--${tertiaryClass}-color, var(--brand-teal)))`;

  resultsEl.innerHTML = `
    <!-- Hero card: the blend name (always neutral black, so it's readable
         for all 56 blends), its swatch (decorative, in the blend's real
         color), the three color pills, the archetype line, the nature
         line, and the summary. -->
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
      ${archetypeLine}

      ${subheader ? `<div class="nature-subheader">${subheader}</div>` : ''}
      <div class="action-paragraph">${identityParagraphsHtml}</div>
    </div>

    <!-- Your action palette: one card per color, each with a short list
         and three buttons (pathways, resources, stories), so the next steps
         are clear even for someone who reads no further. -->
    <div class="action-palette-section">
      <div class="identity-heading">Your action palette:</div>
      <div class="action-palette-list">
        ${colorCardHtml(primaryKey, primaryClass, true)}
        ${colorCardHtml(secondaryKey, secondaryClass, false)}
        ${colorCardHtml(tertiaryKey, tertiaryClass, false)}
      </div>
    </div>

    <!-- The wheel, after the cards: the bigger picture. -->
    <div id="colorWheelSection" class="color-wheel-section"></div>
  `;

  // The wheel from core/wheel.js, with the person's three colors reaching
  // out as petals. Hover or tap shows each color's archetype and move.
  renderWheel(document.getElementById('colorWheelSection'), {
    variant: "simple",
    petals: { primary: primaryKey, secondary: secondaryKey, tertiary: tertiaryKey },
    label: "Wheel of all eight climate colors. Your three colors reach further out from the ring."
  });

  // Copy Link & Reset Handlers
  document.getElementById("btnCopyLink").onclick = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?primary=${encodeURIComponent(primaryKey)}&secondary=${encodeURIComponent(secondaryKey)}&tertiary=${encodeURIComponent(tertiaryKey)}`;
    navigator.clipboard?.writeText(shareUrl)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => prompt("Copy your share link below:", shareUrl));
  };

  // Retake clears everything the quiz saved: the three colors, the raw
  // scores, and the confidence. It removes every "climatecolor_" key, so
  // anything saved under that prefix later is cleared too.
  document.getElementById("btnResetQuiz").onclick = () => {
    Object.keys(localStorage)
      .filter(key => key.startsWith('climatecolor_'))
      .forEach(key => localStorage.removeItem(key));
    window.location.href = window.location.pathname;
  };
}
