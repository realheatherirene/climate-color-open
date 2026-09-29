import { resources } from './directory-data.js';
import { COLORS, resolveColor } from '../core/climate-color.js';

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
let activeStyle = "All";
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

// URLSearchParams already decodes the ?style= value; decoding again only
// matters for a double-encoded link. A stray "%" (e.g. ?style=100%) made
// decodeURIComponent throw and stopped the whole page from loading, so a
// failed decode now just falls back to the value as given.
function safeDecode(value) {
    try { return decodeURIComponent(value); } catch { return value; }
}

// Style parsing. The color name (?style=Red) is the canonical key; colors,
// archetypes, plurals, and old archetype names (driver, advocate,
// stabilizer, kept forever so old links work) all resolve, in any
// capitalization, through core/climate-color.js.
if (rawStyle) {
    const cleanInput = safeDecode(rawStyle).trim();
    const foundKey = cleanInput.toLowerCase() === "all" ? "All" : resolveColor(cleanInput);
    if (foundKey) activeStyle = foundKey;
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
        btn.setAttribute("aria-pressed", String(key === activeStyle));
        // Archetype plural ("Connectors") as the words; the color itself
        // stays as the pill's tint, so color still leads visually.
        btn.textContent = pillLabel(key);
        
        const styleInfo = styles[key];
        if (key === activeStyle) {
            btn.classList.add("active");
        } else {
            if (key === "All") {
                btn.style.backgroundColor = "var(--bg-tertiary)";
                btn.style.borderColor = "var(--border-strong)";
                btn.style.color = "var(--text-secondary)";
            } else {
                btn.style.backgroundColor = `color-mix(in srgb, ${styleInfo.color} 8%, transparent)`;
                btn.style.borderColor = `color-mix(in srgb, ${styleInfo.color} 25%, transparent)`;
            // The site-wide pill recipe (see core/atlas.css): words in the
            // text shade mixed 88% with black, on an 8% tint with a 25%
            // border, so every pill clears 4.5:1.
            btn.style.color = `color-mix(in srgb, ${styleInfo.text || styleInfo.color} 88%, black)`;
            }
        }
        btn.onclick = () => selectStyle(key);
        container.appendChild(btn);
    });
}

function selectStyle(key) {
    activeStyle = key;
    const newUrl = new URL(window.location);
    if (key === 'All') {
        newUrl.searchParams.delete('style');
    } else {
        newUrl.searchParams.set('style', key);
    }
    window.history.pushState({}, '', newUrl);
    renderPills();
    renderResources();
}

function renderResources() {
    const container = document.getElementById("resourceContainer");
    container.innerHTML = "";

    const filtered = resources.filter(res => {
        const matchesStyle =
            activeStyle === "All" || res.styles.includes(activeStyle);

        const matchesSearch = matchesAllWords(searchWords(searchQuery), [
            res.title, res.desc, res.type,
            ...res.styles, ...res.styles.map(tagLabel)
        ]);

        return matchesStyle && matchesSearch;
    });

    // Alphabetical sort by title
    filtered.sort((a, b) => a.title.localeCompare(b.title));

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No resources match your search.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(res => {
        const activeColor = (activeStyle !== "All" && styles[activeStyle]) 
            ? styles[activeStyle].color 
            : "var(--border-strong)";

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

// Initial Execution
renderPills();
renderResources();