import { RESULTS_TEXT as T } from './results-content.js';
import { getColor, paletteMatches } from '../../core/climate-color.js';
import { getBlend, blendHex } from '../../core/blends.js';
import { renderWheel } from '../../core/wheel.js';
import { resources } from '../../directory/directory-data.js';
import { stories } from '../../storymap/story-map-data.js';

/* ==========================================================================
   RESULTS PAGE: one guided path, in three parts, each under a heading
   that starts "Your climate colors". The first part holds everything a
   person needs; the other two are there for anyone who scrolls on.
     1. Recognition: the three colors first, then the blend they make
        (with a swatch of its own color), and the full brand wheel,
        linked to the pathways as on the Pathways landing page.
     2. Understanding: "You're part ..." first, then each color with its
        archetype, move, and spark.
     3. Checklist: a few small steps, each one line: the strongest
        color's pathway, one resource and one story picked for the whole
        palette, then the Directory and Story Map, filtered to the
        palette. The page closes with the closer and the reassurance
        together.
   Print, Copy, and Retake join the FAQ in the quiz's top bar, which moves
   up beside the page title on wider screens. The header and page margins
   are the shared ones, as on the Directory and Pathways.

   Solid color means "this is you" (the lineup and the card edges);
   light tints mean "select this" (buttons and links). Keep the
   color lineup as plain text, not links, so that rule holds.
   ========================================================================== */

// The site's own pages, which embed the Pathways, Directory, and Story
// Map. Links from here open in the whole window (target="_top"), so a
// visitor leaves the quiz's box and lands on the site page with its
// header and navigation. Each page passes ?style= on to the page it
// embeds (the script in tools/squarespace-embed-links.html), and the
// Pathways page opens the one color's page when ?style= names just one.
const SITE = {
  pathways: "https://climatecolor.com/pathways",
  directory: "https://climatecolor.com/directory",
  storyMap: "https://climatecolor.com/storymap"
};
// A whole palette in the link, in any order and capitalization. Commas
// are left readable.
const paletteQuery = colors => `?style=${colors.map(encodeURIComponent).join(",")}`;
const pathwayUrl = colorKey => `${SITE.pathways}${paletteQuery([colorKey])}`;
const directoryUrl = colors => `${SITE.directory}${paletteQuery(colors)}`;
const storyMapUrl = colors => `${SITE.storyMap}${paletteQuery(colors)}`;

const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const lowerFirst = s => s.charAt(0).toLowerCase() + s.slice(1);

// Items that share at least one of the palette's colors, best first: the
// most shared colors, then those that include the strongest color, then
// the data's own order. Items without a real link are left out.
function rankForPalette(items, colors) {
  return items
    .map((item, i) => ({ item, i, n: paletteMatches(item.styles, colors), top: item.styles.includes(colors[0]) }))
    .filter(x => x.n > 0 && !x.item.draft && x.item.url && x.item.url !== "#")
    .sort((a, b) => b.n - a.n || (b.top - a.top) || a.i - b.i);
}

// Checklist ticks are kept in this browser only, for this palette, under
// a "climatecolor_" key so Retake clears them with everything else.
const CHECKS_KEY = "climatecolor_checklist";

function readChecks(paletteId) {
  try {
    const saved = JSON.parse(localStorage.getItem(CHECKS_KEY) || "null");
    return saved && saved.palette === paletteId && Array.isArray(saved.done) ? saved.done : [];
  } catch { return []; }
}

function saveChecks(paletteId, done) {
  try { localStorage.setItem(CHECKS_KEY, JSON.stringify({ palette: paletteId, done })); } catch { /* storage off */ }
}

// One checklist step: a checkbox, then the step's words and a short note.
// The checkbox is named by the step's words, so a screen reader says
// "Done: Explore the Keeper's Path" and so on.
function stepHtml(id, mainHtml, noteHtml) {
  return `
        <li class="check-step">
          <input type="checkbox" class="check-box" id="${id}" aria-labelledby="${id}-label">
          <div class="check-body">
            <p class="check-main" id="${id}-label">${mainHtml}</p>
            ${noteHtml ? `<p class="check-note">${noteHtml}</p>` : ""}
          </div>
        </li>`;
}

function matchDots(itemColors, colors) {
  return itemColors.filter(k => colors.includes(k)).map(k =>
    `<span class="match-color"><span class="match-dot" style="background: var(--${k.toLowerCase()}-color);" aria-hidden="true"></span>${esc(k)}</span>`
  ).join(" ");
}

// One pick: a resource or a story, opening at its source, with a short
// note and the colors it shares with the palette.
function pickStep(id, kind, ranked, colors, note) {
  if (!ranked) return "";
  const { item, n } = ranked;
  const link = `<a class="check-link" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}<span class="visually-hidden"> ${T.newTab}</span> <span aria-hidden="true">&#8599;</span></a>`;
  return stepHtml(id, `${kind} ${link}`,
    `${esc(note)} <span class="check-match">${T.matchLine(n)}: ${matchDots(item.styles, colors)}</span>`);
}

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;
  resultsEl.hidden = false;

  // Print, Copy, and Retake join the FAQ in the top bar, where the quiz
  // keeps its controls. The bar moves into the header, so on wider screens
  // it can sit to the right of the page title, above the wheel.
  const bannerActions = document.getElementById('bannerActions');
  const header = document.querySelector('.quiz-header');
  const banner = bannerActions?.closest('.beta-banner');
  if (header && banner && banner.parentElement !== header) {
    header.classList.add('quiz-header-results');
    header.appendChild(banner);
  }
  if (bannerActions && !document.getElementById('btnCopyLink')) {
    bannerActions.insertAdjacentHTML('afterbegin', `
      <button type="button" onclick="window.print()" class="btn-sm-action">Print</button>
      <button type="button" id="btnCopyLink" class="btn-sm-action">Copy</button>
      <button type="button" id="btnResetQuiz" class="btn-sm-action">Retake</button>
    `);
    bannerActions.insertAdjacentHTML('beforeend', `<span class="copy-status" id="copyStatus" aria-live="polite"></span>`);
  }

  const colorKeys = [primaryKey, secondaryKey, tertiaryKey];
  const palette = colorKeys.map(getColor);
  const blend = getBlend(...colorKeys);

  // A broken shared link that doesn't name three different colors of the
  // eight gets a short message instead of a half-built page.
  if (!blend || palette.some(c => !c)) {
    resultsEl.innerHTML = `<section class="results-section"><p>This result link is missing a color. <a href="${esc(window.location.pathname)}">Take the quiz</a> to find your climate colors.</p></section>`;
    wireButtons(colorKeys);
    return;
  }

  const [p, s, t] = palette;
  const topResource = rankForPalette(resources, colorKeys)[0];
  const topStory = rankForPalette(stories, colorKeys)[0];
  const resourceCount = resources.filter(r => paletteMatches(r.styles, colorKeys) > 0).length;
  const storyCount = stories.filter(st => !st.draft && paletteMatches(st.styles, colorKeys) > 0).length;

  resultsEl.innerHTML = `
    <!-- 1. Recognition: the three colors come first, then the blend they
         make, with the wheel beside the words. -->
    <section class="results-section results-section-first results-hero" aria-labelledby="heroHeading"
      style="--blend-color: ${blendHex(blend)};">
      <h2 class="results-heading" id="heroHeading">${T.heroLabel}</h2>
      <div class="hero-text">
        <ul class="palette-lineup" aria-label="${T.chipsLabel}">
          ${palette.map(c => `
          <li class="lineup-item">
            <span class="lineup-dot" style="background: var(--${c.key.toLowerCase()}-color);" aria-hidden="true"></span>
            <span class="lineup-words"><span class="lineup-name">${esc(c.key)}</span> <span class="lineup-arch">${esc(c.archetype)}</span></span>
          </li>`).join("")}
        </ul>
        <p class="blend-lead">${T.blendLead}</p>
        <h3 class="blend-name">${esc(blend.name)}</h3>
        <div class="blend-bar" aria-hidden="true"></div>
        <p class="nature-line">${esc(T.natureLine(blend.name, blend.natureImage))}</p>
      </div>
      <div class="hero-wheel" id="colorWheelSection"></div>
    </section>

    <!-- 2. Understanding: "You're part ..." first, then one card per
         color, strongest first. -->
    <section class="results-section" aria-labelledby="colorsHeading">
      <h2 class="results-heading" id="colorsHeading">${T.colorsHeading}</h2>
      <p class="archetype-line">${esc(T.archetypeLine(p.archetype, s.archetype, t.archetype))}</p>
      <ol class="color-cards">
        ${palette.map((c, i) => `
        <li class="color-card" style="--card-color: var(--${c.key.toLowerCase()}-color);">
          <p class="color-card-rank">${T.rankLabels[i]}</p>
          <h3 class="color-card-title"><span class="theme-${c.key.toLowerCase()}">${esc(c.key)}</span> · The ${esc(c.archetype)}</h3>
          <p class="color-card-move">${esc(c.move)}</p>
          <p class="color-card-spark">${T.sparkLead} ${esc(lowerFirst(c.spark))}</p>
        </li>`).join("")}
      </ol>
    </section>

    <!-- 3. Checklist: one line per step, with a short note under it. -->
    <section class="results-section" aria-labelledby="checklistHeading">
      <h2 class="results-heading" id="checklistHeading">${T.checklistHeading}</h2>
      <p class="checklist-lead">${T.checklistLead}</p>
      <ul class="checklist">
        ${stepHtml("step-path",
          `<a class="pill-btn pill-${p.key.toLowerCase()} check-path-btn" href="${pathwayUrl(p.key)}" target="_top">${esc(T.pathButton(p.archetype))} <span aria-hidden="true">&rarr;</span></a>`,
          esc(T.firstStepLead(p.key, p.archetype)))}
        ${pickStep("step-resource", T.resourceKind, topResource, colorKeys, topResource?.item.desc)}
        ${pickStep("step-story", T.storyKind, topStory, colorKeys, topStory ? `${topStory.item.place} · ${topStory.item.source}` : "")}
        ${stepHtml("step-more",
          `${T.moreLead} <a class="check-link" href="${directoryUrl(colorKeys)}" target="_top">${T.moreResources(resourceCount)}</a> · <a class="check-link" href="${storyMapUrl(colorKeys)}" target="_top">${T.moreStories(storyCount)}</a>`,
          "")}
      </ul>
      <p class="results-closer">${T.closer} ${esc(T.reassurance)}</p>
    </section>

  `;

  // The full brand wheel from core/wheel.js, the same one on the Pathways
  // landing page, so a first-time visitor sees the whole system: all eight
  // colors and all 24 verbs, none faded, whole enough to screenshot or
  // print. As on Pathways, each wedge opens that color's pathway.
  const wheel = renderWheel(document.getElementById('colorWheelSection'), {
    variant: "brand",
    links: pathwayUrl,
    caption: "Tap a color to explore its path.",
    label: `The Climate Color wheel. Your colors are ${p.key}, ${s.key}, and ${t.key}. Each color opens its pathway.`
  });
  // The wedges open in the whole window too, like the checklist's links.
  wheel?.querySelectorAll(".ccw-link").forEach(a => a.setAttribute("target", "_top"));

  wireChecklist(colorKeys.join(","));
  wireButtons(colorKeys);
}

// Ticks are restored when the page loads and saved on every change.
function wireChecklist(paletteId) {
  const boxes = [...document.querySelectorAll("#results .check-box")];
  const done = readChecks(paletteId);
  boxes.forEach(box => {
    box.checked = done.includes(box.id);
    box.addEventListener("change", () => {
      saveChecks(paletteId, boxes.filter(b => b.checked).map(b => b.id));
    });
  });
}

function wireButtons([primaryKey, secondaryKey, tertiaryKey]) {
  // Copy puts a share link on the clipboard and says so quietly, without
  // a pop-up. If the browser won't allow it, the link is shown instead.
  const copyBtn = document.getElementById("btnCopyLink");
  if (copyBtn) copyBtn.onclick = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?primary=${encodeURIComponent(primaryKey)}&secondary=${encodeURIComponent(secondaryKey)}&tertiary=${encodeURIComponent(tertiaryKey)}`;
    const status = document.getElementById("copyStatus");
    const say = text => { if (status) status.textContent = text; };
    const fallback = () => say(`${T.copyFallback} ${shareUrl}`);
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(shareUrl).then(() => say(T.copied), fallback);
    else fallback();
  };

  // Retake clears everything the quiz saved: the three colors, the raw
  // scores, and the confidence. It removes every "climatecolor_" key, so
  // anything saved under that prefix later is cleared too. If the browser
  // blocks storage, there is nothing saved to clear.
  const resetBtn = document.getElementById("btnResetQuiz");
  if (resetBtn) resetBtn.onclick = () => {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith('climatecolor_'))
        .forEach(key => localStorage.removeItem(key));
    } catch { /* storage off */ }
    window.location.href = window.location.pathname;
  };
}