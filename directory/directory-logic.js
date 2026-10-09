/* ==========================================================================
   DIRECTORY: search, color pills, and resource cards
   ==========================================================================
   The resources live in directory-data.js. Search, pills, and colors in
   the address work the same as on the Story Map (core/listing.js).
   ========================================================================== */

import { resources } from './directory-data.js';
import { paletteMatches } from '../core/climate-color.js';
import {
    tagLabel, colorVar, textColorVar, colorList, escapeHtml, colorsFromAddress,
    writeColorsToAddress, toggleColor, renderPills, focusPill, matchesSearch
} from '../core/listing.js';

const pillsEl = document.getElementById("pillContainer");
const cardsEl = document.getElementById("resourceContainer");
const countEl = document.getElementById("resourceCount");

let activeColors = colorsFromAddress();
let searchQuery = "";

function onPill(key) {
    activeColors = toggleColor(activeColors, key);
    writeColorsToAddress(activeColors);
    render();
    focusPill(pillsEl, key);
}

function render() {
    renderPills(pillsEl, activeColors, onPill);

    const matches = res => paletteMatches(res.colors, activeColors);
    const shown = resources.filter(res =>
        (activeColors.length === 0 || matches(res) > 0) &&
        matchesSearch(searchQuery, [res.title, res.desc, res.type, ...res.colors, ...res.colors.map(tagLabel)])
    );

    // Best matches first (most of the selected colors), then by title.
    shown.sort((a, b) => matches(b) - matches(a) || a.title.localeCompare(b.title));

    const n = shown.length;
    countEl.textContent = n === 0 ? "" :
        `${n} ${n === 1 ? "resource" : "resources"}` +
        (activeColors.length ? ` with ${colorList(activeColors)}` : "") +
        (activeColors.length > 1 ? ", best matches first" : "");

    if (n === 0) {
        cardsEl.innerHTML = `<div class="empty-state"><p>No resources match your search.</p></div>`;
        return;
    }

    cardsEl.innerHTML = "";
    shown.forEach(res => {
        // Each card is an article with a heading, as on the Story Map, so
        // screen readers can jump from resource to resource.
        const card = document.createElement("article");
        card.className = "listing-card";
        const edgeKey = res.colors.find(k => activeColors.includes(k));
        card.style.borderLeftColor = edgeKey ? colorVar(edgeKey) : "var(--border-strong)";
        const url = escapeHtml(res.url);
        card.innerHTML = `
            <div class="listing-body">
                <h2 class="listing-title"><a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(res.title)}</a></h2>
                <div class="listing-desc">${escapeHtml(res.desc)}</div>
                <div class="listing-tags">${res.colors.map(k =>
                    `<span class="listing-tag" style="color: ${textColorVar(k)};">${escapeHtml(tagLabel(k))}</span>`).join("")}</div>
            </div>
            <div class="listing-actions">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="listing-btn">Visit Resource &rarr;</a>
            </div>`;
        cardsEl.appendChild(card);
    });
}

document.getElementById("searchInput").addEventListener("input", e => {
    searchQuery = e.target.value;
    render();
});

window.addEventListener("popstate", () => {
    activeColors = colorsFromAddress();
    render();
});

render();