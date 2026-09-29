/* ==========================================================================
   CLIMATE COLOR: the wheel (one copy, with options)
   ==========================================================================
   Draws the eight-color wheel from core/climate-color.js (order, names,
   archetypes, verbs, label colors) and core/atlas.css (the colors, the
   24 outer-ring shades, and the verb text color). It has no colors or
   names of its own. The look follows the brand wheel (brand deck
   CC_Branding_091926.pptx, slide 6).

   USE
     import { renderWheel } from "../core/wheel.js";
     renderWheel(el, { variant: "brand" });

   OPTIONS (all optional)
     variant     "simple" (default): one ring, each wedge shows the color
                 name with its archetype in smaller text beneath.
                 "brand": the full brand wheel. Same inner ring, plus an
                 outer ring with each color's three verbs.
     petals      { primary, secondary, tertiary } color keys. Those wedges
                 reach further out, largest first. For the results page.
                 Simple variant only.
     links       A function, color key -> URL. Each wedge becomes a link
                 (for Pathways). Leave out for a wheel that doesn't link.
     tooltip     Show the color's move on hover or tap. Defaults to on
                 when there are no links.
     caption     A line of text under the wheel. Defaults to a hint when
                 the tooltip is on; pass "" for none.
     globe       false to leave out the globe in the middle.
     label       The wheel's description for screen readers.

   For a download, wheelSVG(options) returns the SVG as text. Pass
   `inline: true` to write in the real hex values (a saved file can't read
   atlas.css), and `globeHref` for an embedded globe image.

   FONTS: color names in Nunito ExtraBold (close to the brand's Arial
   Rounded MT Bold), verbs in Barlow Semi Condensed SemiBold (close to the
   brand's Bahnschrift SemiBold). Both load from Google Fonts the first
   time a wheel is drawn. FONT_CSS below is the one place they're named.
   ========================================================================== */

import { COLORS, colorValue } from "./climate-color.js";

// Proportions measured from the brand wheel, in SVG units. The white ring
// around the globe ends at 72, the inner (color) ring at 180, and the
// outer (verb) ring at 279: 25.8%, 64.5%, and 100% of the full radius.
const CX = 200;
const CY = 200;
const RI = 72;
const GLOBE_D = 115.8;
const SIMPLE = { ro: 180, petals: [214, 204, 196], view: [-40, 480] };
const BRAND = { ro: 180, outer: 279, view: [-82, 564] };
const SIZE = { name: 16.5, archetype: 11, verb: 11.5 };

export const FONT_CSS = "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600&family=Nunito:wght@700;800&display=swap";
const NAME_FONT = "Nunito, 'Arial Rounded MT Bold', Arial, sans-serif";
const VERB_FONT = "'Barlow Semi Condensed', Bahnschrift, 'Arial Narrow', sans-serif";

const GLOBE_SRC = new URL("./images/climate-color-globe.png", import.meta.url).href;
const LABEL_HEX = { black: "#000000", white: "#FFFFFF" };
const STEP = 360 / COLORS.length;
const START = -STEP / 2;   // Yellow is centered at 12 o'clock

let wheelCount = 0;

function point(r, deg) {
  const a = (deg * Math.PI) / 180;
  return { x: CX + r * Math.sin(a), y: CY - r * Math.cos(a) };
}

const f = n => n.toFixed(2);

function wedgePath(ro, ri, a0, a1) {
  const os = point(ro, a0), oe = point(ro, a1), ie = point(ri, a1), is = point(ri, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${f(os.x)} ${f(os.y)} A ${ro} ${ro} 0 ${large} 1 ${f(oe.x)} ${f(oe.y)} ` +
         `L ${f(ie.x)} ${f(ie.y)} A ${ri} ${ri} 0 ${large} 0 ${f(is.x)} ${f(is.y)} Z`;
}

// Verbs run like spokes. Words are never upside down, and words that run
// nearly up and down read from bottom to top, as on the brand wheel.
function verbRotation(mid) {
  let rot = ((mid - 90) % 360 + 360) % 360;       // pointing outward
  if (rot > 180) rot -= 360;                      // -180..180
  if (rot > 90 || rot <= -90) rot += rot > 0 ? -180 : 180;
  if (rot >= 74.9) rot -= 180;                    // near-vertical: bottom to top
  return rot;
}

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* The wheel as SVG text. See the options above. */
export function wheelSVG(options = {}) {
  const {
    variant = "simple", petals = {}, links = null, globe = true,
    inline = false, globeHref = GLOBE_SRC, interactive = !!links,
    label = variant === "brand"
      ? "The Climate Color wheel: eight colors, each with its archetype and three verbs."
      : "The Climate Color wheel: eight colors, each with its archetype."
  } = options;
  const brand = variant === "brand";
  const id = `ccw${++wheelCount}`;
  const view = brand ? BRAND.view : SIMPLE.view;
  const petalR = {};
  if (!brand) {
    [petals.primary, petals.secondary, petals.tertiary]
      .forEach((k, i) => { if (k) petalR[k] = SIMPLE.petals[i]; });
  }

  // A fill (and a matching thin stroke, which hides the hairline seams
  // browsers leave between touching shapes) from an atlas.css variable.
  const paint = (key, kind) => {
    const v = `--${key.toLowerCase()}-${kind}`;
    const c = inline ? colorValue(key, kind) : `var(${v})`;
    return inline ? `fill="${c}" stroke="${c}" stroke-width="0.75"`
                  : `style="fill: ${c}; stroke: ${c}; stroke-width: 0.75"`;
  };
  const verbInk = inline
    ? (getComputedStyle(document.documentElement).getPropertyValue("--wheel-verb-text").trim() || "#333333")
    : "var(--wheel-verb-text, #333333)";

  let body = "";

  COLORS.forEach((c, i) => {
    const a0 = START + i * STEP, a1 = a0 + STEP, mid = a0 + STEP / 2;
    const ro = brand ? BRAND.ro : (petalR[c.key] || SIMPLE.ro);
    const ink = LABEL_HEX[c.label];
    let g = "";

    if (brand) {
      const r0 = BRAND.ro, r1 = BRAND.outer, vStep = STEP / c.verbs.length, rv = (r0 + r1) / 2;
      c.verbs.forEach((verb, j) => {
        const v0 = a0 + j * vStep, v1 = v0 + vStep, vm = v0 + vStep / 2;
        const p = point(rv, vm);
        g += `<path class="ccw-wedge ccw-verb" d="${wedgePath(r1, r0 - 0.5, v0, v1)}" ${paint(c.key, `tint-${j + 1}`)}/>`;
        g += `<text x="${f(p.x)}" y="${f(p.y)}" transform="rotate(${f(verbRotation(vm))} ${f(p.x)} ${f(p.y)})" ` +
             `text-anchor="middle" dominant-baseline="central" font-family="${VERB_FONT}" font-weight="600" ` +
             `font-size="${SIZE.verb}" letter-spacing="0.4" fill="${verbInk}" aria-hidden="true">${esc(verb.toUpperCase())}</text>`;
      });
    }

    g += `<path class="ccw-wedge" d="${wedgePath(ro, RI, a0, a1)}" ${paint(c.key, "color")}/>`;

    // Color name with its archetype in smaller text beneath.
    const lp = point((RI + ro) / 2 + 4, mid);
    g += `<text x="${f(lp.x)}" y="${f(lp.y)}" text-anchor="middle" fill="${ink}" ` +
         `font-family="${NAME_FONT}" aria-hidden="true">` +
         `<tspan x="${f(lp.x)}" dy="-0.15em" font-size="${SIZE.name}" font-weight="800">${esc(c.key)}</tspan>` +
         `<tspan x="${f(lp.x)}" dy="1.3em" font-size="${SIZE.archetype}" font-weight="700">${esc(c.archetype)}</tspan></text>`;

    const name = `${c.key}, the ${c.archetype}`;
    if (links) {
      body += `<a class="ccw-link" href="${esc(links(c.key))}" data-color="${c.key}" ` +
              `aria-label="${esc(name)}">${g}</a>`;
    } else {
      body += `<g class="ccw-item" data-color="${c.key}"` +
              (interactive ? ` aria-label="${esc(name)}"` : "") + `>${g}</g>`;
    }
  });

  const off = f(CX - GLOBE_D / 2);
  const globeImg = globe
    ? `<image href="${esc(globeHref)}" x="${off}" y="${off}" width="${GLOBE_D}" height="${GLOBE_D}"/>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view[0]} ${view[0]} ${view[1]} ${view[1]}" ` +
    `role="${interactive ? "group" : "img"}" aria-label="${esc(label)}" class="ccw-svg">` +
    `<title>${esc(label)}</title>` +
    `${body}<circle cx="${CX}" cy="${CY}" r="${RI + 0.5}" fill="#FFFFFF"/>${globeImg}</svg>`;
}

const STYLES = `
.ccw-wrap { position: relative; width: 100%; max-width: 480px; margin: 0 auto; }
.ccw-svg { display: block; width: 100%; height: auto; overflow: visible; }
.ccw-link, .ccw-item { cursor: pointer; }
.ccw-link:hover .ccw-wedge, .ccw-item:hover .ccw-wedge { filter: brightness(1.06); }
.ccw-link:focus { outline: none; }
.ccw-link:focus-visible .ccw-wedge { stroke: #212121 !important; stroke-width: 3 !important; }
.ccw-tip { position: absolute; transform: translate(-50%, calc(-100% - 24px)); max-width: 220px;
  padding: 0.5rem 0.75rem; border-radius: 8px; background: #212121; color: #FFFFFF;
  font-size: 0.85rem; line-height: 1.35; text-align: center; pointer-events: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15); z-index: 2; }
.ccw-tip strong { display: block; }
.ccw-caption { margin-top: 0.5rem; text-align: center; font-size: 0.9rem; color: var(--text-muted, #64748B); }
`;

function addStyles() {
  if (document.getElementById("ccw-styles")) return;
  const s = document.createElement("style");
  s.id = "ccw-styles";
  s.textContent = STYLES;
  document.head.appendChild(s);
  if (!document.querySelector(`link[href="${FONT_CSS}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = FONT_CSS;
    document.head.appendChild(l);
  }
}

/* Draws the wheel into `container`. Returns the <svg> element. */
export function renderWheel(container, options = {}) {
  if (!container) return null;
  addStyles();
  const tooltip = options.tooltip ?? !options.links;
  const caption = options.caption ?? (tooltip ? "Hover or tap any color to explore." : "");

  container.innerHTML = `<div class="ccw-wrap">${wheelSVG({ ...options, interactive: tooltip || !!options.links })}` +
    (tooltip ? `<div class="ccw-tip" role="status" hidden></div>` : "") + `</div>` +
    (caption ? `<div class="ccw-caption">${esc(caption)}</div>` : "");

  const svg = container.querySelector("svg");
  if (!tooltip) return svg;

  const tip = container.querySelector(".ccw-tip");
  const view = options.variant === "brand" ? BRAND.view : SIMPLE.view;
  const pct = v => ((v - view[0]) / view[1]) * 100;

  const show = key => {
    const i = COLORS.findIndex(c => c.key === key);
    const c = COLORS[i];
    const p = point((RI + SIMPLE.ro) / 2, START + i * STEP + STEP / 2);
    tip.innerHTML = `<strong>${esc(c.key)} · ${esc(c.archetype)}</strong>${esc(c.move)}`;
    tip.style.left = `${pct(p.x)}%`;
    tip.style.top = `${pct(p.y)}%`;
    tip.hidden = false;
  };
  const hide = () => { tip.hidden = true; };

  container.querySelectorAll(".ccw-item").forEach(el => {
    const key = el.dataset.color;
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.addEventListener("mouseenter", () => show(key));
    el.addEventListener("mouseleave", hide);
    el.addEventListener("focus", () => show(key));
    el.addEventListener("blur", hide);
    el.addEventListener("click", e => { e.stopPropagation(); show(key); });
    el.addEventListener("keydown", e => { if (e.key === "Escape") hide(); });
  });

  // One listener per container; replaced on redraw instead of stacking.
  if (container._ccwOutside) document.removeEventListener("click", container._ccwOutside);
  container._ccwOutside = e => { if (!container.contains(e.target)) hide(); };
  document.addEventListener("click", container._ccwOutside);
  return svg;
}
