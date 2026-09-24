/* ==========================================================================
   Pilot results snapshot — frozen copy of quiz/js/color-wheel-ui.js (2026-09-24)
   ==========================================================================
   The pilot's results screen runs from this copy, not the live file, so the
   result participants rate stays identical for the whole data-collection
   window. Do not edit during the pilot.
   Changed from the live file: imports from ./content.js, and the globe
   image path points at ../quiz/images/ because this page lives in
   quiz-pilot/, not quiz/ (the path resolves against the page's URL).
   ========================================================================== */

import { styles } from './content.js';

/* ==========================================================================
   Climate Color Quiz — Interactive 8-Color Wheel (B1)

   Renders the full 8-color ring, with the viewer's primary/secondary/
   tertiary colors extended outward like petals as a persistent "you are
   here" indicator (no spotlight glow, no animated reveal — the extension
   itself is the only cue). Hovering or tapping a wedge shows a short,
   one-word tooltip pulled from each color's existing `reflection` in
   quiz-data.js. Approved design: mockup canvas, Option B — Petal Extension.
   ========================================================================== */

// Proportions matched to the brand master wheel:
//   outer ring (no pull-out) = 6in, white ring = 2.4in, globe = 1.93in
//   -> 60 SVG units per inch.
const CX = 200;
const CY = 200;
const RO_BASE = 180;       // outer radius for a color outside the user's top 3
const RO_PRIMARY = 214;    // furthest-extended petal
const RO_SECONDARY = 204;
const RO_TERTIARY = 196;
const RI = 72;             // inner radius / visible white ring
const GLOBE_D = 115.8;     // globe diameter, centered inside the white ring
const VIEWBOX_MIN = -40;
const VIEWBOX_SIZE = 480;
// This src is written into the page's HTML, so it resolves against the
// DOCUMENT's URL (quiz/index.html) — not against this script's own location,
// the way a JS `import` path would. quiz/index.html and quiz/images/ are
// siblings, so no "../" here. Move the asset elsewhere and this is the only
// line to update (and re-check against quiz/index.html's location, not
// color-wheel-ui.js's).
const GLOBE_SRC = '../quiz/images/climate-color-globe.png';

// Wheel order, clockwise from 12 o'clock, matching the brand master wheel.
// textColor is fixed per color: whichever of black/white actually clears
// 4.5:1 contrast against that color's real atlas.css fill (checked directly,
// not assumed) — approved alongside the Option B mockup.
const WHEEL_COLORS = [
  { key: 'Yellow', varName: 'yellow', textColor: '#000000' },
  { key: 'Orange', varName: 'orange', textColor: '#000000' },
  { key: 'Red',    varName: 'red',    textColor: '#FFFFFF' },
  { key: 'Violet', varName: 'violet', textColor: '#000000' },
  { key: 'Indigo', varName: 'indigo', textColor: '#FFFFFF' },
  { key: 'Purple', varName: 'purple', textColor: '#FFFFFF' },
  { key: 'Green',  varName: 'green',  textColor: '#000000' },
  { key: 'Blue',   varName: 'blue',   textColor: '#FFFFFF' },
];

function point(r, deg) {
  const a = (deg * Math.PI) / 180;
  return { x: CX + r * Math.sin(a), y: CY - r * Math.cos(a) };
}

function wedgePath(ro, ri, a0, a1) {
  const os = point(ro, a0);
  const oe = point(ro, a1);
  const ie = point(ri, a1);
  const is = point(ri, a0);
  const f = (n) => n.toFixed(2);
  return `M ${f(os.x)} ${f(os.y)} A ${f(ro)} ${f(ro)} 0 0 1 ${f(oe.x)} ${f(oe.y)} ` +
         `L ${f(ie.x)} ${f(ie.y)} A ${ri} ${ri} 0 0 0 ${f(is.x)} ${f(is.y)} Z`;
}

function toPercent(v) {
  return ((v - VIEWBOX_MIN) / VIEWBOX_SIZE) * 100;
}

// Kept module-scoped so a re-render (e.g. a shared link resolving after the
// page's already up) removes its own prior listener instead of stacking a
// second one on document.
let outsideClickHandler = null;

export function renderColorWheel(container, { primaryKey, secondaryKey, tertiaryKey } = {}) {
  if (!container) return;

  const extendedRo = {
    [primaryKey]: RO_PRIMARY,
    [secondaryKey]: RO_SECONDARY,
    [tertiaryKey]: RO_TERTIARY,
  };

  let wedgesSvg = '';
  let labelsSvg = '';
  const tooltipPoints = [];

  WHEEL_COLORS.forEach((c, i) => {
    const a0 = i * 45;
    const a1 = a0 + 45;
    const ro = extendedRo[c.key] || RO_BASE;
    const reflection = styles[c.key]?.reflection || '';

    wedgesSvg += `<path d="${wedgePath(ro, RI, a0, a1)}" ` +
      `style="fill: var(--${c.varName}-color, #94A3B8);" ` +
      `stroke="#F8FAFC" stroke-width="3" ` +
      `class="wheel-wedge" tabindex="0" role="button" ` +
      `aria-label="${c.key}${reflection ? ` — ${reflection}` : ''}" ` +
      `data-color="${c.key}"></path>`;

    const mid = a0 + 22.5;
    const labelR = (RI + ro) / 2;
    const lp = point(labelR, mid);
    labelsSvg += `<text x="${lp.x.toFixed(2)}" y="${lp.y.toFixed(2)}" ` +
      `text-anchor="middle" dominant-baseline="middle" font-size="15" font-weight="700" ` +
      `fill="${c.textColor}" class="wheel-label">${c.key}</text>`;

    tooltipPoints.push({ key: c.key, x: toPercent(lp.x), y: toPercent(lp.y) });
  });

  const globeOffset = (CX - GLOBE_D / 2).toFixed(2);

  container.innerHTML = `
    <div class="color-wheel-wrap">
      <svg class="color-wheel-svg" viewBox="${VIEWBOX_MIN} ${VIEWBOX_MIN} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}"
        xmlns="http://www.w3.org/2000/svg" role="img"
        aria-label="Wheel of all eight climate colors. Your primary, secondary, and tertiary colors extend further out from the ring.">
        <circle cx="${CX}" cy="${CY}" r="${RI}" fill="#FFFFFF" />
        <image href="${GLOBE_SRC}" x="${globeOffset}" y="${globeOffset}" width="${GLOBE_D}" height="${GLOBE_D}" />
        ${wedgesSvg}
        ${labelsSvg}
        <circle cx="${CX}" cy="${CY}" r="${RI}" fill="none" stroke="#E2E8F0" stroke-width="1" />
      </svg>
      <div class="color-wheel-tooltip" hidden></div>
    </div>
    <div class="color-wheel-caption">Hover or tap any color to explore.</div>
  `;

  const tooltipEl = container.querySelector('.color-wheel-tooltip');
  const wedgeEls = container.querySelectorAll('.wheel-wedge');

  function showTooltip(colorKey) {
    const pt = tooltipPoints.find((p) => p.key === colorKey);
    if (!pt) return;
    const reflection = styles[colorKey]?.reflection || '';
    tooltipEl.textContent = reflection ? `${colorKey} — ${reflection}` : colorKey;
    tooltipEl.style.left = `${pt.x}%`;
    tooltipEl.style.top = `${pt.y}%`;
    tooltipEl.hidden = false;
  }

  function hideTooltip() {
    tooltipEl.hidden = true;
  }

  wedgeEls.forEach((el) => {
    const colorKey = el.getAttribute('data-color');
    el.addEventListener('mouseenter', () => showTooltip(colorKey));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('focus', () => showTooltip(colorKey));
    el.addEventListener('blur', hideTooltip);
    el.addEventListener('click', () => showTooltip(colorKey));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideTooltip();
    });
  });

  if (outsideClickHandler) {
    document.removeEventListener('click', outsideClickHandler);
  }
  outsideClickHandler = (e) => {
    if (!container.contains(e.target)) hideTooltip();
  };
  document.addEventListener('click', outsideClickHandler);
}