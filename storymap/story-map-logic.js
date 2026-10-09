/* ==========================================================================
   STORY MAP: a dot-grid world map with a pin per story, plus search,
   color pills, and story cards
   ==========================================================================
   The stories live in story-map-data.js and the map's land dots in
   world-dots.js. Search, pills, and colors in the address work the same as
   on the Directory (core/listing.js); the map is the only part unique to
   this page.
   ========================================================================== */

import { stories } from './story-map-data.js';
import { worldRows, DOT_DEG, LAT_TOP, LON_LEFT } from './world-dots.js';
import { paletteMatches } from '../core/climate-color.js';
import {
    tagLabel, colorVar, textColorVar, colorList, escapeHtml, colorsFromAddress,
    writeColorsToAddress, toggleColor, renderPills, focusPill, matchesSearch
} from '../core/listing.js';

const urlParams = new URLSearchParams(window.location.search);
// ?drafts=1 shows entries marked draft: true, for previewing before publishing.
const showDrafts = urlParams.get('drafts') === '1';

let activeColors = colorsFromAddress();
let searchQuery = "";
let selectedIndex = null; // index into `stories` of the highlighted story

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

/* ---------- Filtering (same rules as the Directory) ---------- */

function visibleStories() {
    return stories
        .map((story, index) => ({ story, index }))
        .filter(({ story }) => {
            if (story.draft && !showDrafts) return false;
            const matchesColor = activeColors.length === 0 || paletteMatches(story.colors, activeColors) > 0;
            // Also searches the source and year, e.g. "Mongabay" or "2019".
            return matchesColor && matchesSearch(searchQuery, [
                story.title, story.summary, story.place, story.type,
                story.source, story.year,
                ...story.colors, ...story.colors.map(tagLabel)
            ]);
        });
}

/* ---------- Pills ---------- */

const pillsEl = document.getElementById("pillContainer");

function onPill(key) {
    activeColors = toggleColor(activeColors, key);
    selectedIndex = null;
    writeColorsToAddress(activeColors);
    renderAll();
    focusPill(pillsEl, key);
}

// A story's color for its pin and card edge: its first color that's
// selected, or its own first color when showing everything.
function storyColorKey(story) {
    return story.colors.find(k => activeColors.includes(k)) || story.colors[0];
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
        g.style.setProperty("--pin-color", colorVar(colorName));

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

/* ---------- Cards (the same cards as the Directory) ---------- */

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
    const matches = s => paletteMatches(s.colors, activeColors);
    const sorted = [...list].sort((a, b) =>
        matches(b.story) - matches(a.story) || a.story.title.localeCompare(b.story.title));
    sorted.forEach(({ story, index }) => {
        // Same as the Directory: a neutral gray edge on every card, switching
        // to the story's first selected color while a pill filter is active.
        // The color names inside the card still show each story's colors.
        const borderColor = activeColors.length ? colorVar(storyColorKey(story)) : "var(--border-strong)";
        const tagsHtml = story.colors.map(k =>
            `<span class="listing-tag" style="color: ${textColorVar(k)};">${escapeHtml(tagLabel(k))}</span>`
        ).join("");

        const hasLink = story.url && story.url !== "#";
        const card = document.createElement("article");
        card.className = "listing-card story-card" + (index === selectedIndex ? " is-selected" : "");
        card.dataset.story = index;
        card.tabIndex = -1;
        card.style.borderLeftColor = borderColor;
        card.innerHTML = `
            <div class="listing-body">
                <div class="story-place">${escapeHtml(story.place)}${story.year ? `, ${escapeHtml(story.year)}` : ""}</div>
                <h2 class="listing-title">${hasLink
                    ? `<a href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(story.title)}</a>`
                    : escapeHtml(story.title)}</h2>
                <div class="listing-desc">${escapeHtml(story.summary)}</div>
                <div class="listing-tags">${tagsHtml}</div>
            </div>
            <div class="listing-actions story-actions">
                ${hasLink ? `<a href="${escapeHtml(story.url)}" target="_blank" rel="noopener noreferrer" class="listing-btn">Read the story at ${escapeHtml(story.source)} <span aria-hidden="true">&rarr;</span></a>` : ""}
                <button type="button" class="listing-btn story-find">Show on map</button>
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
    renderPills(pillsEl, activeColors, onPill);
    renderPins(list);
    renderCards(list);
    renderCount(list);
}

document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value;
    selectedIndex = null;
    renderAll();
});

window.addEventListener("popstate", () => {
    activeColors = colorsFromAddress();
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