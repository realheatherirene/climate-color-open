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

  // One-word reflection per color (quiz-data.js) — reused below both for the
  // closing paragraph and as the tooltip text inside the wheel itself.
  const reflectionOf = (key) => (styles[key]?.reflection || "").toLowerCase();

  // Closing paragraph — walks color → palette → wheel in one generated
  // sentence, reusing primary's existing fullResults paragraph verbatim and
  // secondary/tertiary's existing one-word reflections. No new hand-written
  // copy per blend (56 combinations). B2-tweaks round (2026-09-20): the
  // standalone "A blend of X, Y, and Z." sentence that used to sit in the
  // wheel section is gone — this paragraph already carries that same
  // information (secondary/tertiary reflections), so it was pure repetition,
  // not a second thing to fold in. Trimmed the closing sentence from two
  // sentences to one via an em dash to read punchier.
  const closingParagraph = primaryKey && secondaryKey && tertiaryKey && blend.name
    ? `${blend.name} starts with ${primaryKey}. ${(primaryFull.description || "").trim()} ` +
      `${secondaryKey}'s ${reflectionOf(secondaryKey)} and ${tertiaryKey}'s ${reflectionOf(tertiaryKey)} sharpen that instinct — ` +
      `one of eight ways to show up for the climate movement, and it needs all of them, including yours. ` +
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
    <!-- ACT 1 — THE REVEAL: single color-forward identity, now including the
         palette names (moved in from the old palette-section below) as one
         compact line of text-links. Bookends with the closing card below
         via the same identityWash background. B2-tweaks round: header
         shortened from a sentence to a colon-terminated label per Heather's
         "ultra simple" headers. -->
    <div class="blend-hero" style="${identityWash}">
      <div class="identity-heading">Your climate color:</div>
      <div class="blend-name">${blend.name}</div>
      <div class="blend-descriptor">${blend.descriptor}</div>
      <div class="blend-swatch"
        style="background: linear-gradient(135deg,
          var(--${primaryClass}-color, var(--brand-teal)),
          var(--${secondaryClass}-color, var(--brand-teal)),
          var(--${tertiaryClass}-color, var(--brand-teal)));"></div>
      <div class="palette-line">
        <span class="palette-label">Your climate palette:</span>
        <a href="${pathwayUrl(primaryClass)}" class="palette-link theme-${primaryClass}">${primaryKey}</a>
        <span class="palette-sep">&middot;</span>
        <a href="${pathwayUrl(secondaryClass)}" class="palette-link theme-${secondaryClass}">${secondaryKey}</a>
        <span class="palette-sep">&middot;</span>
        <a href="${pathwayUrl(tertiaryClass)}" class="palette-link theme-${tertiaryClass}">${tertiaryKey}</a>
      </div>
    </div>

    <!-- ACT 2 — EXPLORE: just the wheel. B2-tweaks round: the heading,
         summary sentence, big pill links, and bridge line that used to sit
         above the wheel are gone — the palette names live in Box 1 now, the
         wheel's own caption ("Hover or tap any color to explore.") already
         tells people what to do with it, and the wheel is self-explanatory
         once someone has their result. Nothing else needed here. -->
    <div id="colorWheelSection" class="color-wheel-section"></div>

    <!-- ACT 3 — THE INVITATION: closes the story instead of trailing off.
         Same identityWash as the hero card above, so the two visually
         bookend the page. Primary/secondary/tertiary detail is folded into
         this one paragraph instead of three separate cards (see
         detailCardsHtml above). B2-tweaks round: header changed from "You
         belong here." to "Your climate colors in action." — the belonging
         sentiment stays in the paragraph body ("your starting point, not a
         test..."), it's just no longer the literal header text. Also
         removed a "climate strengths" framing that used to run through this
         part of the page. -->
    <div class="blend-hero belonging-card" style="${identityWash}">
      <div class="identity-heading">Your climate colors in action.</div>
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