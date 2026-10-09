# Climate Color
> Find the kind of climate action that energizes you.

---

## 🎨 About the Project
Climate Color helps people find their **climate colors**: the strengths they already use to care for their communities, and can use for the climate too. Community care is climate care. At its center is the **Stewardship Wheel**: six colors around the Earth, each with an archetype, like the Connector or the Navigator, and three words for how it helps. From there, people can explore resources and real stories that match their colors.

It also gives groups a shared language, so a team can see what each person brings and where it could use more help.

* **Creator:** Heather Succio
* **Status:** Open Access / Active Beta
* **License:** Creative Commons (CC BY-NC-SA 4.0)

---

## 🧩 What's Inside

* **6 Colors, 6 Archetypes:** Red · Anchor (grounding), Orange · Creator (vision), Yellow · Motivator (energy), Green · Connector (support), Blue · Communicator (language), and Indigo · Navigator (direction).
* **The Stewardship Wheel:** all six colors around the Earth, each with three words for how it helps. Tap a color to learn about it.
* **Pathways:** a page for each color.
* **The Directory:** guides, grants, and tools, sorted by color (being rebuilt; one placeholder for now).
* **The Story Map:** real stories from around the world, sorted by color (being rebuilt; one placeholder for now).
* **The Quiz:** a new way to find your colors is on the way; the quiz page holds a placeholder until then.

---

## 🛠️ How It's Built

Plain HTML, CSS, and JavaScript (ES modules), with no build step and no dependencies. Everything runs in the browser. There are no accounts and no tracking. Pages load fonts from Google Fonts.

GitHub Pages publishes this repo as it is (`.nojekyll` tells it not to process anything). The public site, climatecolor.com, is a Squarespace site that shows these pages in embedded boxes (iframes), one per page.

### Where everything lives

| Folder | What's in it |
|---|---|
| `core/` | Everything more than one page uses. Start here. |
| `wheel/` | The Stewardship Wheel page and its FAQ |
| `pathways/` | The index of six color cards, and one page per color |
| `directory/` | The resource directory: its data, script, and the one style unique to it |
| `storymap/` | The Story Map: its data, the world map's dots, script, and styles |
| `quiz/` | A placeholder page until the new way to find your colors is ready |
| `tools/` | Reference copies of the two scripts pasted into Squarespace |

Inside `core/`:

| File | What it does |
|---|---|
| `climate-color.js` | **The source of truth.** The six colors, their archetypes, what each provides, their three words, the wheel's wording, and the site's page addresses. |
| `atlas.css` | How everything looks: the brand colors and shades, and the styles every page shares. Every page loads it first. |
| `wheel.js` | Draws the wheel from `climate-color.js` and `atlas.css`. |
| `color-card.js` | One card per color, used on the Wheel page and the Pathways index. |
| `listing.js`, `listing.css` | Search, color pills, cards, and `?style=` links, shared by the Directory and the Story Map. |
| `iframe-resize.js` | Tells Squarespace how tall an embedded page is, so its box fits. |
| `index.html` | A reference page: the wheel with SVG and PNG downloads, every color with its contrast checks. |
| `images/` | The globe at the center of the wheel. |

Each page's own folder holds only what is unique to that page. Each file opens with a comment that says what it does and how it connects to the rest.

### How the pages connect

* **Colors in links.** Pathways, the Directory, and the Story Map accept `?style=` with one or more colors, like `climatecolor.com/directory?style=Blue,Green`. Colors, archetypes, and plurals all work, in any capitalization. Pathways opens the one color named.
* **Squarespace helpers.** Two small scripts live on the Squarespace side, with copies in `tools/`. `squarespace-height-listener.html` (in Code Injection > Footer) resizes the embedded boxes. `squarespace-embed-links.html` (in the Code Block after each Pathways, Directory, and Story Map embed) passes `?style=` from the site's address into the embed. It finds the embeds by the repo name, `climate-color-open`, so renaming the repo means updating it too.
* **Links out of an embed** open in the whole window (`target="_top"`), so visitors land on the Squarespace page with its menu.

### Making common changes

* **A color's archetype, words, or "provides":** edit `COLORS` in `core/climate-color.js`. The wheel, cards, Pathways, Directory, and Story Map all follow. If you rename an archetype, add the old name to `ALIASES` so old links still work.
* **The wheel's wording:** edit `WHEEL_TEXT` in `core/climate-color.js`.
* **A brand color or shade:** edit `core/atlas.css`, then open `core/index.html` and check that every contrast check still passes.
* **A resource or story:** add an entry to `directory/directory-data.js` or `storymap/story-map-data.js`. Each file explains its fields at the top, and the Story Map file also has its curation rules.
* **The Wheel FAQ:** edit `wheel/wheel-faq.html`.

### Conventions

* **One place for everything.** Colors, names, and wording live in `core/`; pages never keep their own copies.
* **Color first, then archetype:** "Blue · Communicator". In sentences, people say "I am a Communicator" or "I like Communicating." Never show a color without its name.
* **Public wording** is plain, at a 9th-grade reading level or below, with no words that assume a body or a sense (walk, see, look, hear, listen, notice).
* **Contrast:** all text clears 4.5:1. `core/index.html` checks the color text live.
* **Line endings:** files keep the line endings they have (most are CRLF).

### Trying it locally

The pages use ES modules, so open them through a local web server rather than as files. From the folder that contains this repo:

```
python3 -m http.server
```

Then visit `http://localhost:8000/climate-color-open/wheel/` (or any other page).

---

## ⚖️ Licensing & Attribution

This project is open-access and licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)** license.

### How to Credit

If you adapt, share, or build upon this work, please include the following attribution:

> **"Climate Color"** by Heather Succio, used under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

For full license terms, visit [Creative Commons](https://creativecommons.org/licenses/by-nc-sa/4.0/).

---

## 💼 Enterprise & Organizational Inquiries

Looking to facilitate Climate Color workshops, run team assessment cohorts, or access enterprise L&D tools for your organization?

We offer facilitated team mapping, B2B toolkits, and organizational resources. Visit [climatecolor.com](https://climatecolor.com) or reach out to **hello@climatecolor.com** to learn more.

---

🌐 *Explore the web app live at [climatecolor.com](https://climatecolor.com)*

---
