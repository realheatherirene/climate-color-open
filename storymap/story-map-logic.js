import { stories } from './story-map-data.js';
import { worldRows, DOT_DEG, LAT_TOP, LON_LEFT } from './world-dots.js';
import { COLORS, COLOR_KEYS, resolveColors, paletteMatches } from '../core/climate-color.js';
import { getBlend, blendHex } from '../core/blends.js';

/* ==========================================================================
   STORY MAP LOGIC — imports only files in this folder and core/ (the
   color system: names, archetypes, blends, and core/atlas.css for the
   colors). It follows the same patterns as the Directory (the ?style=
   link, archetype aliases, pills, search, cards) so the two feel alike.
   ========================================================================== */

// The eight colors as this page shows them, in wheel order after "All",
// built from core/climate-color.js. `color` is the brand color (tints,
// borders, pins); `text` is its darker text shade (words on white).
const styles = { "All": { color: "#334155" } };
for (const c of COLORS) {
    const k = c.key.toLowerCase();
    styles[c.key] = { color: `var(--${k}-color)`, text: `var(--${k}-text)`, archetype: c.archetype, plural: c.plural };
}

const urlParams = new URLSearchParams(window.location.search);
let rawStyle = urlParams.get('style');
// The selected colors, in wheel order. Empty means "All".
let activeColors = [];
let searchQuery = "";
let selectedIndex = null; // index into `stories` of the highlighted story

// ?drafts=1 shows entries marked draft: true, for previewing before publishing.
const showDrafts = urlParams.get('drafts') === '1';

// Archetype labels from core/: plural on pills, singular on cards.
function pillLabel(key) { return styles[key]?.plural || key; }
function tagLabel(key) { return styles[key]?.archetype || key; }
// "Connectors", "Connectors or Keepers", "Connectors, Keepers, or Amplifiers".
function colorList(keys) {
    const names = keys.map(pillLabel);
    return names.length < 3 ? names.join(" or ") : `${names.slice(0, -1).join(", ")}, or ${names[names.length - 1]}`;
}
function inWheelOrder(keys) { return COLOR_KEYS.filter(k => keys.includes(k)); }
// URLSearchParams already decodes the ?style= value; decoding again only
// matters for a double-encoded link. A stray "%" (e.g. ?style=100%) made
// decodeURIComponent throw and stopped the whole page from loading, so a
// failed decode now just falls back to the value as given.
function safeDecode(value) {
    try { return decodeURIComponent(value); } catch { return value; }
}
// A link can name one color (?style=Red) or a whole palette
// (?style=Purple,Indigo,Orange, as the quiz results page sends). Colors,
// archetypes, plurals, and old archetype names ("driver") all resolve, in
// any capitalization, through core/climate-color.js. "All" or anything
// unknown shows everything.
function colorsFromLink(input) {
    return input ? inWheelOrder(resolveColors(safeDecode(input))) : [];
}

activeColors = colorsFromLink(rawStyle);

// Map geometry: one dot every DOT_DEG degrees, 10 SVG units apart.
const UNIT = 10;
const MAP_W = worldRows[0].length * UNIT;
const MAP_H = worldRows.length * UNIT;
const SVG_NS = "http://www.w3.org/2000/svg";
const MAP_PAD = 14; // breathing room so edge pins (e.g. Fiji) aren't clipped

function project(lat, lng) {
    return {
        x: ((lng - LON_LEFT) / DOT_DEG) * UNIT,
        y: ((LAT_TOP - lat) / DOT_DEG) * UNIT + UNIT / 2
    };
}

function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
}

function styleColor(name) {
    return styles[name] ? styles[name].color : "var(--text-secondary)";
}

// Darker, readable version for words on white (card tags): the color's
// text shade from core/atlas.css.
function styleTextColor(name) {
    return styles[name] ? (styles[name].text || styles[name].color) : "var(--text-secondary)";
}

// Search matching: ignores capitals and accents ("bogota"
// finds "Bogotá", "samso" finds "Samsø"), and treats each word on its own,
// so "solar rio" finds a story containing both words anywhere, in any order.
const SPECIAL_LETTERS = { "ø": "o", "æ": "ae", "œ": "oe", "ß": "ss", "ł": "l", "đ": "d", "ı": "i" };
function normalizeText(value) {
    return String(value ?? "")
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[øæœßłđı]/g, ch => SPECIAL_LETTERS[ch]);
}
function searchWords(query) {
    return normalizeText(query).split(/\s+/).filter(Boolean);
}
function matchesAllWords(words, fields) {
    if (words.length === 0) return true;
    const haystack = normalizeText(fields.join(" "));
    return words.every(w => haystack.includes(w));
}

/* ---------- Filtering (same rules as the Directory) ---------- */

function visibleStories() {
    return stories
        .map((story, index) => ({ story, index }))
        .filter(({ story }) => {
            if (story.draft && !showDrafts) return false;
            const matchesStyle = activeColors.length === 0 || paletteMatches(story.styles, activeColors) > 0;
            // Also searches the source and year, e.g. "Mongabay" or "2019".
            const matchesSearch = matchesAllWords(searchWords(searchQuery), [
                story.title, story.summary, story.place, story.type,
                story.source, story.year,
                ...story.styles, ...story.styles.map(tagLabel)
            ]);
            return matchesStyle && matchesSearch;
        });
}

/* ---------- Pills ---------- */

function renderPills() {
    const container = document.getElementById("pillContainer");
    container.innerHTML = "";
    Object.keys(styles).forEach(key => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pill-btn";
        btn.textContent = pillLabel(key);
        const on = key === "All" ? activeColors.length === 0 : activeColors.includes(key);
        btn.setAttribute("aria-pressed", String(on));
        // Colors, hover, and focus come from the shared pill classes in
        // core/atlas.css.
        btn.classList.add(key === "All" ? "pill-all" : `pill-${key.toLowerCase()}`);
        if (on) btn.classList.add("active");
        btn.onclick = () => toggleColor(key);
        container.appendChild(btn);
    });
}

// Color pills work together: each one adds or removes its color, so
// people can see their whole palette at once. "All" clears them.
function toggleColor(key) {
    if (key === "All") activeColors = [];
    else if (activeColors.includes(key)) activeColors = activeColors.filter(k => k !== key);
    else activeColors = inWheelOrder([...activeColors, key]);
    selectedIndex = null;
    const newUrl = new URL(window.location);
    if (activeColors.length) newUrl.searchParams.set("style", activeColors.join(","));
    else newUrl.searchParams.delete("style");
    // Keeps the commas readable in the address bar.
    newUrl.search = newUrl.searchParams.toString().replace(/%2C/g, ",");
    window.history.pushState({}, "", newUrl);
    renderAll();
}

// A story's color for its pin and card edge: its first color that's
// selected, or its own first color when showing everything.
function storyColorKey(story) {
    return story.styles.find(k => activeColors.includes(k)) || story.styles[0];
}

/* ---------- Map ---------- */

function buildBaseMap(svg) {
    // Dots are drawn once; only the pin layer re-renders on filter changes.
    const dots = document.createElementNS(SVG_NS, "g");
    dots.setAttribute("class", "map-dots");
    worldRows.forEach((row, r) => {
        for (let c = 0; c < row.length; c++) {
            if (row[c] !== "1") continue;
            const dot = document.createElementNS(SVG_NS, "circle");
            dot.setAttribute("cx", c * UNIT + UNIT / 2);
            dot.setAttribute("cy", r * UNIT + UNIT / 2);
            dot.setAttribute("r", 2.6);
            dots.appendChild(dot);
        }
    });
    svg.appendChild(dots);
    const pins = document.createElementNS(SVG_NS, "g");
    pins.setAttribute("id", "pinLayer");
    svg.appendChild(pins);
}

// Pins are sized in screen pixels, not map units, so they stay tappable on
// a phone (where the whole map shrinks) without looking huge on desktop.
function pinScale() {
    const svg = document.getElementById("storyMap");
    const w = svg.getBoundingClientRect().width || MAP_W;
    return (MAP_W + 2 * MAP_PAD) / w; // map units per screen pixel
}

function renderPins(list) {
    const layer = document.getElementById("pinLayer");
    const k = pinScale();
    const R_DOT = Math.max(7, 6 * k);   // ~6px on screen
    const R_HALO = Math.max(15, 13 * k); // ~13px on screen
    const R_HIT = 22 * k;                // ~44px tap target
    layer.innerHTML = "";
    // Draw the selected pin last so it sits on top of any neighbors.
    const ordered = [...list].sort((a, b) =>
        (a.index === selectedIndex) - (b.index === selectedIndex));
    ordered.forEach(({ story, index }) => {
        const { x, y } = project(story.lat, story.lng);
        const colorName = storyColorKey(story);
        const g = document.createElementNS(SVG_NS, "g");
        g.setAttribute("class", "pin" + (index === selectedIndex ? " is-selected" : ""));
        g.setAttribute("tabindex", "0");
        g.setAttribute("role", "button");
        g.setAttribute("aria-label", `${story.title}, ${story.place}`);
        g.dataset.pin = index;
        g.style.setProperty("--pin-color", styleColor(colorName));

        const hit = document.createElementNS(SVG_NS, "circle");
        hit.setAttribute("class", "pin-hit");
        hit.setAttribute("cx", x); hit.setAttribute("cy", y); hit.setAttribute("r", R_HIT);
        const halo = document.createElementNS(SVG_NS, "circle");
        halo.setAttribute("class", "pin-halo");
        halo.setAttribute("cx", x); halo.setAttribute("cy", y); halo.setAttribute("r", R_HALO);
        const dot = document.createElementNS(SVG_NS, "circle");
        dot.setAttribute("class", "pin-dot");
        dot.setAttribute("cx", x); dot.setAttribute("cy", y); dot.setAttribute("r", R_DOT);
        dot.style.strokeWidth = String(Math.max(2.5, 2 * k));
        const tip = document.createElementNS(SVG_NS, "title");
        tip.textContent = `${story.title} (${story.place})`;
        g.append(hit, halo, dot, tip);

        const choose = () => selectStory(index, { scrollTo: "card" });
        g.addEventListener("click", choose);
        g.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); }
        });
        layer.appendChild(g);
    });
}

function selectStory(index, { scrollTo } = {}) {
    selectedIndex = index;
    renderAll();
    if (scrollTo === "card") {
        const card = document.querySelector(`[data-story="${index}"]`);
        if (card) {
            card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
            card.focus({ preventScroll: true });
        }
    } else if (scrollTo === "map") {
        document.getElementById("storyMap").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
        // Move keyboard focus to the highlighted pin, so keyboard and
        // screen reader users land where the page just scrolled instead of
        // back at the top (the button they pressed was re-rendered away).
        const pin = document.querySelector(`#pinLayer [data-pin="${index}"]`);
        if (pin) pin.focus({ preventScroll: true });
    }
}

function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------- Cards (same component as the Directory) ---------- */

function renderCards(list) {
    const container = document.getElementById("storyContainer");
    container.innerHTML = "";

    if (list.length === 0) {
        const anyPublished = stories.some(s => !s.draft) || showDrafts;
        container.innerHTML = anyPublished
            ? `<div class="empty-state"><p>No stories match this color or search yet. Try another color, or clear the search.</p></div>`
            : `<div class="empty-state"><p>Stories are on their way. Check back soon to see climate action by color around the world.</p></div>`;
        return;
    }

    // Best matches first (most of the selected colors), then by title.
    const matches = s => paletteMatches(s.styles, activeColors);
    const sorted = [...list].sort((a, b) =>
        matches(b.story) - matches(a.story) || a.story.title.localeCompare(b.story.title));
    sorted.forEach(({ story, index }) => {
        // Same as the Directory: a neutral gray edge on every card, switching
        // to the story's first selected color while a pill filter is active.
        // The color names inside the card still show each story's colors.
        const borderColor = activeColors.length ? styleColor(storyColorKey(story)) : "var(--border-strong)";
        const styleTextHtml = story.styles.map(name =>
            `<span class="style-text-item" style="color: ${styleTextColor(name)};">${escapeHtml(tagLabel(name))}</span>`
        ).join("");

        const blend = story.styles.length === 3 ? getBlend(...story.styles) : null;
        const blendHtml = blend
            ? `<div class="story-blend"><span class="story-blend-swatch" style="background: ${blendHex(blend)};" aria-hidden="true"></span>A ${escapeHtml(blend.name)} story</div>`
            : "";

        const hasLink = story.url && story.url !== "#";
        const card = document.createElement("article");
        card.className = "styleBlock story-card" + (index === selectedIndex ? " is-selected" : "");
        card.dataset.story = index;
        card.tabIndex = -1;
        card.style.borderLeftColor = borderColor;
        card.innerHTML = `
            <div class="card-content">
                <div class="story-place">${escapeHtml(story.place)}${story.year ? `, ${escapeHtml(story.year)}` : ""}</div>
                <h2 class="styleTitle">${hasLink
                    ? `<a href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(story.title)}</a>`
                    : escapeHtml(story.title)}</h2>
                <div class="styleIdentity">${escapeHtml(story.summary)}</div>
                <div class="style-text-container">${styleTextHtml}</div>
                ${blendHtml}
            </div>
            <div class="cta-container story-actions">
                ${hasLink ? `<a href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer" class="btn-pill-soft">Read the story at ${escapeHtml(story.source)}</a>` : ""}
                <button type="button" class="btn-pill-soft story-find">Show on map</button>
            </div>`;
        card.querySelector(".story-find").addEventListener("click", () => selectStory(index, { scrollTo: "map" }));
        container.appendChild(card);
    });
}

/* ---------- Page ---------- */

function renderCount(list) {
    const el = document.getElementById("storyCount");
    const n = list.length;
    const colorText = activeColors.length ? ` with ${colorList(activeColors)}` : "";
    const order = activeColors.length > 1 ? ", best matches first" : "";
    el.textContent = n === 0 ? "" : `${n} ${n === 1 ? "story" : "stories"}${colorText}${order}`;
}

function renderAll() {
    const list = visibleStories();
    renderPills();
    renderPins(list);
    renderCards(list);
    renderCount(list);
}

document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value.toLowerCase().trim();
    selectedIndex = null;
    renderAll();
});

window.addEventListener("popstate", () => {
    activeColors = colorsFromLink(new URLSearchParams(window.location.search).get("style"));
    renderAll();
});

const svg = document.getElementById("storyMap");
svg.setAttribute("viewBox", `${-MAP_PAD} ${-MAP_PAD} ${MAP_W + 2 * MAP_PAD} ${MAP_H + 2 * MAP_PAD}`);
buildBaseMap(svg);
if (showDrafts) document.getElementById("draftNotice").hidden = false;
renderAll();

// Re-size pins when the screen size changes (e.g. rotating a phone).
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderPins(visibleStories()), 150);
});
