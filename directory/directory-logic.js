import { styles, resources } from './directory-data.js';

// Dynamic URL Parsing
const urlParams = new URLSearchParams(window.location.search);
let rawStyle = urlParams.get('style');
let activeStyle = "All Styles";
let searchQuery = "";

// Color-to-Style Alias Map
const styleAliases = {
    red: "Driver",
    orange: "Advocate",
    yellow: "Visionary",
    green: "Stabilizer",
    blue: "Architect",
    indigo: "Keeper",
    purple: "Connector",
    violet: "Guardian"
};

// Style parsing
if (rawStyle) {
    const cleanInput = decodeURIComponent(rawStyle).trim().toLowerCase();
    const resolvedName = styleAliases[cleanInput] || cleanInput;
    const foundKey = Object.keys(styles).find(s => s.toLowerCase() === resolvedName.toLowerCase());
    if (foundKey) activeStyle = foundKey;
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
        btn.className = "pill-btn";
        btn.textContent = key;
        
        const styleInfo = styles[key];
        if (key === activeStyle) {
            btn.classList.add("active");
        } else {
            if (key === "All Styles") {
                btn.style.backgroundColor = "var(--bg-tertiary)";
                btn.style.borderColor = "var(--border-strong)";
                btn.style.color = "var(--text-secondary)";
            } else {
                btn.style.backgroundColor = `color-mix(in srgb, ${styleInfo.color} 8%, transparent)`;
                btn.style.borderColor = `color-mix(in srgb, ${styleInfo.color} 25%, transparent)`;
                btn.style.color = styleInfo.color;
            }
        }
        btn.onclick = () => selectStyle(key);
        container.appendChild(btn);
    });
}

function selectStyle(key) {
    activeStyle = key;
    const newUrl = new URL(window.location);
    if (key === 'All Styles') {
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
            activeStyle === "All Styles" || res.styles.includes(activeStyle);

        const matchesSearch =
            searchQuery === "" ||
            res.title.toLowerCase().includes(searchQuery) ||
            res.desc.toLowerCase().includes(searchQuery) ||
            (res.type && res.type.toLowerCase().includes(searchQuery)) ||
            res.styles.some(s => s.toLowerCase().includes(searchQuery));

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
        const activeColor = (activeStyle !== "All Styles" && styles[activeStyle]) 
            ? styles[activeStyle].color 
            : "var(--border-strong)";

        const styleTextHtml = res.styles.map(styleName => {
            const sInfo = styles[styleName];
            const color = sInfo ? sInfo.color : "var(--text-secondary)";
            return `
                <span class="style-text-item" style="color: ${color};">
                    ${styleName}
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