/* ==========================================================================
   PATHWAYS: fills in the words that live in core/
   ==========================================================================
   Color names are typed into each page, because they are the permanent
   keys that links depend on. Archetypes and verbs live only in
   core/climate-color.js, and this script writes them into the page:

     data-path="Purple"   -> "The Connector's Path"
     data-verbs="Purple"  -> "Bridge · Listen · Unite"
     id="pathway-wheel"   -> the brand wheel; each wedge opens its page

   Rename an archetype or change a verb in core/, and every Pathways page
   follows.
   ========================================================================== */

import { getColor } from "../core/climate-color.js";

document.querySelectorAll("[data-path]").forEach(el => {
  const c = getColor(el.dataset.path);
  if (c) el.textContent = `The ${c.archetype}'s Path`;
});

document.querySelectorAll("[data-verbs]").forEach(el => {
  const c = getColor(el.dataset.verbs);
  if (c) el.textContent = c.verbs.join(" · ");
});

const wheelEl = document.getElementById("pathway-wheel");
if (wheelEl) {
  const { renderWheel } = await import("../core/wheel.js");
  renderWheel(wheelEl, {
    variant: "brand",
    links: key => `${key.toLowerCase()}.html`,
    caption: "Tap a color to explore its path.",
    label: "The Climate Color wheel. Each color opens its pathway."
  });
}
