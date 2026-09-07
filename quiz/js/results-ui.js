/* ==========================================================================
   Climate Color Results UI — Fluid Watercolor Wash Renderer
   ========================================================================== */

// Base hex codes mapped to your eight stewardship styles
export const styleColors = {
    Driver: "#E24A3B",     // Vibrant Red / Momentum
    Advocate: "#E88D34",   // Warm Orange / Amplification
    Visionary: "#D65BB1",  // Magenta / Possibility
    Architect: "#3B82F6",  // Blue / Clarity
    Stabilizer: "#22C55E", // Green / Steadiness
    Connector: "#06B6D4",  // Cyan / Belonging
    Keeper: "#8B5CF6",     // Purple / Memory
    Guardian: "#64748B"    // Slate / Protection
};

/**
 * Renders the fluid watercolor wash based on the user's top triad
 * @param {Array} topThreeStyles - Array of top 3 style names, e.g., ['Driver', 'Architect', 'Connector']
 */
export function renderFluidColorWash(topThreeStyles) {
    const container = document.getElementById('climate-color-wash-container');
    if (!container) return;

    const primaryColor = styleColors[topThreeStyles[0]] || "#3B82F6";
    const secondaryColor = styleColors[topThreeStyles[1]] || "#22C55E";
    const tertiaryColor = styleColors[topThreeStyles[2]] || "#E88D34";

    // Create a multi-stop radial gradient mesh simulating a fluid watercolor bleed
    container.style.background = `
        radial-gradient(at 20% 30%, ${primaryColor}cc 0px, transparent 60%),
        radial-gradient(at 80% 25%, ${secondaryColor}aa 0px, transparent 55%),
        radial-gradient(at 50% 85%, ${tertiaryColor}99 0px, transparent 70%),
        linear-gradient(135deg, ${primaryColor}, ${secondaryColor})
    `;
    container.style.filter = "blur(25px)";
    container.style.opacity = "0.9";
}

/**
 * Populates the results page DOM with user metadata and triad labels
 * @param {Object} resultsData - Object containing topThreeStyles array and synthesis text
 */
export function displayResults(resultsData) {
    const { topThreeStyles, synthesisText } = resultsData;

    // Update text elements if they exist in the DOM
    const primaryEl = document.getElementById('primary-name');
    const secondaryEl = document.getElementById('secondary-name');
    const tertiaryEl = document.getElementById('tertiary-name');
    const synthesisEl = document.getElementById('synthesis-description');

    if (primaryEl) primaryEl.textContent = topThreeStyles[0];
    if (secondaryEl) secondaryEl.textContent = topThreeStyles[1];
    if (tertiaryEl) tertiaryEl.textContent = topThreeStyles[2];
    if (synthesisEl) synthesisEl.textContent = synthesisText;

    // Trigger the fluid visual canvas update
    renderFluidColorWash(topThreeStyles);
}
