import { RESULTS_TEXT as T } from './results-content.js';
import { getColor, paletteMatches } from '../../core/climate-color.js';
import { getBlend, blendHex } from '../../core/blends.js';
import { renderWheel } from '../../core/wheel.js';
import { resources } from '../../directory/directory-data.js';
import { stories } from '../../storymap/story-map-data.js';

/* ==========================================================================
   RESULTS PAGE: one guided path, in four parts.
     1. Recognition: the blend, its swatch, the three colors, and the
        petal wheel.
     2. Understanding: each color with its archetype, move, and spark.
     3. A first step: the strongest color's pathway, plus one resource and
        one story picked for the whole palette.
     4. Keep going: the Directory and Story Map, filtered to the palette.
   Print, Copy, and Retake stay in the quiz's top bar, next to the FAQ.

   Solid color means "this is you" (the chips and the wheel); light tints
   mean "select this" (buttons and links). Keep the chips as plain text,
   not links, so that rule holds.
   ========================================================================== */

// Pages are linked by full address, built from the repo name in the
// current address (e.g. "climate-color-open").
function siteUrl(path) {
  const repoRoot = window.location.pathname.split('/')[1];
  return `${window.location.origin}/${repoRoot}/${path}`;
}
const pathwayUrl = colorKey => siteUrl(`pathways/${colorKey.toLowerCase()}.html`);
// The Directory and Story Map read a whole palette from ?style=, in any
// order and capitalization. Commas are left readable.
const paletteQuery = colors => `?style=${colors.map(encodeURIComponent).join(",")}`;
const directoryUrl = colors => siteUrl(`directory/index.html${paletteQuery(colors)}`);
const storyMapUrl = colors => siteUrl(`storymap/index.html${paletteQuery(colors)}`);

const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const lowerFirst = s => s.charAt(0).toLowerCase() + s.slice(1);
// Words on a solid color chip: the same black or white as the wheel labels,
// which core/index.html checks at 4.5:1.
const chipInk = c => c.label === "black" ? "#000000" : "#FFFFFF";

// Items that share at least one of the palette's colors, best first: the
// most shared colors, then those that include the strongest color, then
// the data's own order. Items without a real link are left out.
function rankForPalette(items, colors) {
  return items
    .map((item, i) => ({ item, i, n: paletteMatches(item.styles, colors), top: item.styles.includes(colors[0]) }))
    .filter(x => x.n > 0 && !x.item.draft && x.item.url && x.item.url !== "#")
    .sort((a, b) => b.n - a.n || (b.top - a.top) || a.i - b.i);
}

function matchDots(itemColors, colors) {
  return itemColors.filter(k => colors.includes(k)).map(k =>
    `<span class="match-color"><span class="match-dot" style="background: var(--${k.toLowerCase()}-color);" aria-hidden="true"></span>${esc(k)}</span>`
  ).join(" ");
}

// One pick card: a resource or a story, opening at its source.
function pickHtml(kind, ranked, colors, meta, text) {
  if (!ranked) return "";
  const { item, n } = ranked;
  return `
    <a class="pick-card" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
      <span class="pick-kind">${kind}</span>
      <h3 class="pick-title">${esc(item.title)}<span class="visually-hidden"> ${T.newTab}</span></h3>
      <p class="pick-text">${esc(text)}</p>
      <span class="pick-meta">${esc(meta)}</span>
      <span class="pick-match">${T.matchLine(n)}: ${matchDots(item.styles, colors)}</span>
    </a>`;
}

export function renderResultsScreen(primaryKey, secondaryKey, tertiaryKey) {
  const resultsEl = document.getElementById("results");
  if (!resultsEl) return;
  resultsEl.hidden = false;

  // Print, Copy, and Retake join the FAQ in the top bar, where the quiz
  // keeps its controls.
  const bannerActions = document.getElementById('bannerActions');
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
    <!-- 1. Recognition -->
    <section class="results-hero" aria-labelledby="blendName">
      <div class="hero-text">
        <p class="results-eyebrow">${T.heroLabel}</p>
        <h2 class="blend-name" id="blendName">${esc(blend.name)}</h2>
        <div class="blend-swatch" style="background: ${blendHex(blend)};" aria-hidden="true"></div>
        <p class="nature-line">${esc(T.natureLine(blend.name, blend.natureImage))}</p>
        <ul class="palette-chips" aria-label="${T.chipsLabel}">
          ${palette.map(c => `<li class="palette-chip" style="background: var(--${c.key.toLowerCase()}-color); color: ${chipInk(c)};">${esc(c.key)}</li>`).join("")}
        </ul>
        <p class="archetype-line">${esc(T.archetypeLine(p.archetype, s.archetype, t.archetype))}</p>
        <p class="reassurance-line">${esc(T.reassurance)}</p>
      </div>
      <div class="hero-wheel" id="colorWheelSection"></div>
    </section>

    <!-- 2. Understanding -->
    <section class="results-section" aria-labelledby="colorsHeading">
      <h2 class="results-heading" id="colorsHeading">${T.colorsHeading}</h2>
      <div class="color-rows">
        ${palette.map(c => `
        <div class="color-row">
          <span class="color-row-bar" style="background: var(--${c.key.toLowerCase()}-color);" aria-hidden="true"></span>
          <div>
            <h3 class="color-row-title"><span class="theme-${c.key.toLowerCase()}">${esc(c.key)}</span> · The ${esc(c.archetype)}</h3>
            <p class="color-row-text">${esc(c.move)} ${T.sparkLead} ${esc(lowerFirst(c.spark))}</p>
          </div>
        </div>`).join("")}
      </div>
    </section>

    <!-- 3. A first step -->
    <section class="results-section" aria-labelledby="firstStepHeading">
      <h2 class="results-heading" id="firstStepHeading">${T.firstStepHeading}</h2>
      <div class="first-step">
        <p class="first-step-lead">${esc(T.firstStepLead(p.key, p.archetype))}</p>
        <a class="pill-btn pill-${p.key.toLowerCase()} first-step-btn" href="${pathwayUrl(p.key)}">${esc(T.pathButton(p.archetype))} <span aria-hidden="true">&rarr;</span></a>
        <p class="bridge-line">${esc(T.bridgeLine)}</p>
        <p class="picks-label">${T.picksLabel}</p>
        <div class="picks">
          ${pickHtml(T.resourceKind, topResource, colorKeys, topResource?.item.type, topResource?.item.desc)}
          ${pickHtml(T.storyKind, topStory, colorKeys, topStory ? `${topStory.item.place} · ${topStory.item.source}` : "", topStory?.item.summary)}
        </div>
      </div>
    </section>

    <!-- 4. Keep going -->
    <section class="results-section" aria-labelledby="keepGoingHeading">
      <h2 class="results-heading" id="keepGoingHeading">${T.keepGoingHeading}</h2>
      <div class="more-links">
        <a class="btn-pill-soft" href="${directoryUrl(colorKeys)}">${T.moreResources(resourceCount)} <span aria-hidden="true">&rarr;</span></a>
        <a class="btn-pill-soft" href="${storyMapUrl(colorKeys)}">${T.moreStories(storyCount)} <span aria-hidden="true">&rarr;</span></a>
      </div>
      <p class="results-closer">${T.closer}</p>
    </section>

  `;

  // The wheel from core/wheel.js, with the person's three colors reaching
  // out as petals. A picture only (no tooltips): the rows under "What your
  // colors do" already say what each color means, and keyboard users reach
  // the first step without eight extra stops.
  renderWheel(document.getElementById('colorWheelSection'), {
    variant: "simple",
    tooltip: false,
    petals: { primary: primaryKey, secondary: secondaryKey, tertiary: tertiaryKey },
    label: "Wheel of all eight climate colors. Your three colors reach further out from the ring."
  });

  wireButtons(colorKeys);
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
  // anything saved under that prefix later is cleared too.
  const resetBtn = document.getElementById("btnResetQuiz");
  if (resetBtn) resetBtn.onclick = () => {
    Object.keys(localStorage)
      .filter(key => key.startsWith('climatecolor_'))
      .forEach(key => localStorage.removeItem(key));
    window.location.href = window.location.pathname;
  };
}
