/* ==========================================================================
   LISTING: what the Directory and the Story Map share
   ==========================================================================
   Both pages list items (resources or stories) that carry one or more
   colors, with a search box and a row of color pills. This file holds the
   parts that work the same on both, so a fix here fixes both pages.

   COLORS IN THE ADDRESS
     A link can name one color (?style=Red) or several
     (?style=Green,Indigo,Orange). Colors, archetypes, plurals, action
     forms, and any old names in ALIASES all resolve, in any capitalization,
     through core/climate-color.js. "All" or anything unknown shows
     everything. The parameter is called "style" because existing links
     and the Squarespace helper (tools/squarespace-embed-links.html) use it.

   PILLS
     Each pill adds or removes its color, so people can filter by several
     colors at once. "All" clears them. The address bar keeps up with the
     pills, so back and forward follow the filter.

   SEARCH
     Ignores capitals and accents ("bogota" finds "Bogotá", "samso" finds
     "Samsø"), and treats each word on its own, so "trust land" finds an
     item containing both words anywhere, in any order.
   ========================================================================== */

import { COLOR_KEYS, getColor, resolveColors } from "./climate-color.js";

/* The pills in order: "All", then the six colors starting at Red. */
export const PILL_KEYS = ["All", ...COLOR_KEYS];

/* Labels for a color key: the archetype's plural on pills ("Connectors"),
   the singular on cards ("Connector"). Anything else, like "All", shows
   as it is. */
export const pillLabel = key => getColor(key)?.plural || key;
export const tagLabel = key => getColor(key)?.archetype || key;

/* A color's brand color (card edges, map pins) and its darker text shade
   (words on white), from core/atlas.css. */
export const colorVar = key => getColor(key) ? `var(--${key.toLowerCase()}-color)` : "var(--text-secondary)";
export const textColorVar = key => getColor(key) ? `var(--${key.toLowerCase()}-text)` : "var(--text-secondary)";

/* "Connectors", "Connectors or Navigators",
   "Connectors, Navigators, or Creators". */
export function colorList(keys) {
  const names = keys.map(pillLabel);
  return names.length < 3 ? names.join(" or ") : `${names.slice(0, -1).join(", ")}, or ${names[names.length - 1]}`;
}

/* Any set of color keys, sorted into list order. */
export const inListOrder = keys => COLOR_KEYS.filter(k => keys.includes(k));

/* Item words go into the page as text, never as markup, so a "&" or a
   quote in a title can't break a card. */
export function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

/* The colors named in the address (?style=...), in list order. The
   browser has already decoded the value once; a second decode only
   matters for a double-encoded link, and a value it can't decode (a stray
   "%") is used as given. */
export function colorsFromAddress(search = window.location.search) {
  let value = new URLSearchParams(search).get("style");
  if (!value) return [];
  try { value = decodeURIComponent(value); } catch { /* use as given */ }
  return inListOrder(resolveColors(value));
}

/* Puts the selected colors into the address bar, with readable commas,
   and adds a history step so back and forward follow the filter. */
export function writeColorsToAddress(colors) {
  const url = new URL(window.location);
  if (colors.length) url.searchParams.set("style", colors.join(","));
  else url.searchParams.delete("style");
  url.search = url.searchParams.toString().replace(/%2C/g, ",");
  window.history.pushState({}, "", url);
}

/* The selected colors after a tap on one pill. */
export function toggleColor(colors, key) {
  if (key === "All") return [];
  if (colors.includes(key)) return colors.filter(k => k !== key);
  return inListOrder([...colors, key]);
}

/* Draws the pill row into `container`. Each pill is a plain button whose
   aria-pressed tells screen readers whether it's selected; its colors come
   from the pill classes in core/atlas.css. `onTap` gets the pill's key. */
export function renderPills(container, colors, onTap) {
  container.innerHTML = "";
  PILL_KEYS.forEach(key => {
    const on = key === "All" ? colors.length === 0 : colors.includes(key);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `pill-btn ${key === "All" ? "pill-all" : `pill-${key.toLowerCase()}`}${on ? " active" : ""}`;
    btn.textContent = pillLabel(key);
    btn.setAttribute("aria-pressed", String(on));
    btn.dataset.color = key;
    btn.addEventListener("click", () => onTap(key));
    container.appendChild(btn);
  });
}

/* After the pills are redrawn, keyboard focus goes back to the one just
   pressed instead of dropping to the top of the page. */
export function focusPill(container, key) {
  container.querySelector(`[data-color="${key}"]`)?.focus();
}

/* Whether an item's words contain every word of the search. */
export function matchesSearch(query, fields) {
  const words = normalizeText(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const haystack = normalizeText(fields.join(" "));
  return words.every(w => haystack.includes(w));
}

const SPECIAL_LETTERS = { "ø": "o", "æ": "ae", "œ": "oe", "ß": "ss", "ł": "l", "đ": "d", "ı": "i" };
function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[øæœßłđı]/g, ch => SPECIAL_LETTERS[ch]);
}
