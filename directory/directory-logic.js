import { resources } from './directory-data.js';
import { COLORS, COLOR_KEYS, resolveColors, paletteMatches } from '../core/climate-color.js';

// The eight colors as this page shows them, in wheel order after "All",
// built from core/climate-color.js. `color` is the brand color (tints and
// borders); `text` is its darker text shade (words on white).
const styles = { "All": { color: "#334155" } };
for (const c of COLORS) {
    const k = c.key.toLowerCase();
    styles[c.key] = { color: `var(--${k}-color)`, text: `var(--${k}-text)`, archetype: c.archetype, plural: c.plural };
}

// Dynamic URL Parsing
const urlParams = new URLSearchParams(window.location.search);
let rawStyle = urlParams.get('style');
// The selected colors, in wheel order. Empty means "All".
let activeColors = [];
let searchQuery = "";

// Display label for a color key: the archetype (plural on pills, singular
// on cards). Falls back to the key itself, so "All" and any unknown
// value still render.
function pillLabel(key) {
    return styles[key]?.plural || key;
}
function tagLabel(key) {
    return styles[key]?.archetype || key;
}
// "Connectors", "Connectors or Keepers", "Connectors, Keepers, or Amplifiers".
function colorList(keys) {
    const names = keys.map(pillLabel);
    return names.length < 3 ? names.join(" or ") : `${names.slice(0, -1).join(", ")}, or ${names[names.length - 1]}`;
}
function inWheelOrder(keys) {
    return COLOR_KEYS.filter(k => keys.includes(k));
}

// URLSearchParams already decodes the ?style= value; decoding again only
// matters for a double-encoded link. A stray "%" (e.g. ?style=100%) made
// decodeURIComponent throw and stopped the whole page from loading, so a
// failed decode now just falls back to the value as given.
function safeDecode(value) {
    try { return decodeURIComponent(value); } catch { return value; }
}

// Style parsing. A link can name one color (?style=Red) or a whole
// palette (?style=Purple,Indigo,Orange, as the quiz results page sends).
// Color names are the canonical keys; colors, archetypes, plurals, and old
// archetype names (driver, advocate, stabilizer, kept forever so old links
// work) all resolve, in any capitalization, through core/climate-color.js.
// "All" or anything unknown shows everything.
if (rawStyle) {
    activeColors = inWheelOrder(resolveColors(safeDecode(rawStyle)));
}

// Search matching: ignores capitals and accents ("bogota"
// finds "Bogotá", "samso" finds "Samsø"), and treats each word on its own,
// so "trust land" finds a resource containing both words anywhere.
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

// Search listener
document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderResources();
});

function renderPills() {
    const container = document.getElementById("pillContainer");
    container.innerHTML = "";
    Object.keys(styles).forEach(key => {
        const btn = document.createElement("button");
        // Accessibility: a plain button (never a form submit),
        // and aria-pressed tells screen readers which filter is selected,
        // matching the Story Map's pills.
        btn.type = "button";
        btn.className = "pill-btn";
        const on = key === "All" ? activeColors.length === 0 : activeColors.includes(key);
        btn.setAttribute("aria-pressed", String(on));
        // Archetype plural ("Connectors") as the words; the color itself
        // stays as the pill's tint, so color still leads visually.
        btn.textContent = pillLabel(key);
        
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

    const newUrl = new URL(window.location);
    if (activeColors.length) newUrl.searchParams.set('style', activeColors.join(","));
    else newUrl.searchParams.delete('style');
    // Keeps the commas readable in the address bar.
    newUrl.search = newUrl.searchParams.toString().replace(/%2C/g, ",");
    window.history.pushState({}, '', newUrl);
    renderPills();
    renderResources();
}

function renderResources() {
    const container = document.getElementById("resourceContainer");
    container.innerHTML = "";

    const matches = res => paletteMatches(res.styles, activeColors);
    const filtered = resources.filter(res => {
        const matchesStyle = activeColors.length === 0 || matches(res) > 0;

        const matchesSearch = matchesAllWords(searchWords(searchQuery), [
            res.title, res.desc, res.type,
            ...res.styles, ...res.styles.map(tagLabel)
        ]);

        return matchesStyle && matchesSearch;
    });

    // Best matches first (most of the selected colors), then by title.
    filtered.sort((a, b) => matches(b) - matches(a) || a.title.localeCompare(b.title));

    const n = filtered.length;
    document.getElementById("resourceCount").textContent = n === 0 ? "" :
        `${n} ${n === 1 ? "resource" : "resources"}` +
        (activeColors.length ? ` with ${colorList(activeColors)}` : "") +
        (activeColors.length > 1 ? ", best matches first" : "");

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No resources match your search.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(res => {
        // Gray edges when showing everything. While filtered, each card's
        // edge takes its first color that's selected.
        const edgeKey = res.styles.find(k => activeColors.includes(k));
        const activeColor = edgeKey ? styles[edgeKey].color : "var(--border-strong)";

        const styleTextHtml = res.styles.map(styleName => {
            const sInfo = styles[styleName];
            // The color's text shade, readable on white.
            const color = sInfo ? (sInfo.text || sInfo.color) : "var(--text-secondary)";
            return `
                <span class="style-text-item" style="color: ${color};">
                    ${tagLabel(styleName)}
                </span>
            `;
        }).join('');

        const card = document.createElement("div");
        card.className = "styleBlock";
        card.style.borderLeftColor = activeColor;
        card.innerHTML = `
            <div class="card-content">
                <div class="styleTitle">
                    <a href="${res.url}" target="_blank" rel="noopener noreferrer">
                        ${res.title}
                    </a>
                </div>
                <div class="styleIdentity">${res.desc}</div>
                <div class="style-text-container">
                    ${styleTextHtml}
                </div>
            </div>
            
            <div class="cta-container">
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn-pill-soft">
                    Visit Resource &rarr;
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Back and forward follow the color filter, as on the Story Map.
window.addEventListener("popstate", () => {
    const style = new URLSearchParams(window.location.search).get('style');
    activeColors = style ? inWheelOrder(resolveColors(safeDecode(style))) : [];
    renderPills();
    renderResources();
});

// Initial Execution
renderPills();
renderResources();