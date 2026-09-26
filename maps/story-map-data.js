/* ==========================================================================
   STORY MAP DATA: Single Source of Truth for Story Map entries
   ==========================================================================
   Same idea as directory/directory-data.js: one plain list, added to by
   hand. Color names and colors come from the Directory's `styles` object
   (imported by story-map-logic.js), so there is only one place to change
   them.

   FIELDS
     title    Short headline in your own words.
     place    Human-readable place, e.g. "Glasgow, Scotland".
     lat, lng Where the pin goes. City-level is plenty (2 decimals max);
              never a street address or a private home.
     styles   1–3 color names, most prominent first. The first color sets
              the pin's color when "All Styles" is showing. A story with
              exactly 3 colors also shows its blend name (from the quiz's
              blends-data.js), e.g. "A Heather story."
     type     Short category, like the Directory's (optional).
     summary  1–2 sentences, in your own words, at a 9th-grade reading
              level or below.
     source   The outlet or organization that reported it, e.g. "BBC News".
     url      Link to that source.
     year     Year it happened or was reported.
     draft    true = hidden unless the page is opened with ?drafts=1.
              Use this to stage entries while you verify them.

   CURATION RULES
     1. Tag by the move people made, using quiz-data.js colorDefinitions:
        Purple if they connected people, Green if they kept something
        going, and so on. Not by topic: a tree-planting story can be Red
        (they got it started), Green (they kept it going), or Blue (they
        organized it), depending on what the story is really about.
     2. Every story links to a reliable source you have read yourself.
        Agent-found stories get checked against the source before `draft`
        comes off.
     3. Summaries are written fresh, never copied from the source.
     4. Company announcements only when an independent outlet has reported
        the result, not just the promise. "Good news" and greenwashing can
        look alike.
     5. Prefer lasting stories over breaking news, so entries stay true.
     6. Aim for balance: roughly equal stories per color, from many regions.

   The eight entries below are FICTIONAL EXAMPLES (draft: true) that show
   the format and let you preview the map with ?drafts=1. Replace them with
   real, sourced stories.
   ========================================================================== */

export const stories = [
    { title: "[Example] Neighbors launch a tool library in a week", place: "Example: Glasgow, Scotland", lat: 55.86, lng: -4.25, styles: ["Red"], type: "Sharing", summary: "Fictional example. A few neighbors turned a spare garage into a free tool library and opened it seven days after first talking about it.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] A storytelling tour fills a river cleanup", place: "Example: Lagos, Nigeria", lat: 6.52, lng: 3.38, styles: ["Orange", "Purple"], type: "Outreach", summary: "Fictional example. Local storytellers toured markets and radio shows, and the next river cleanup drew three times the usual crowd.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] Students redesign their school's rooftop", place: "Example: Medellín, Colombia", lat: 6.24, lng: -75.58, styles: ["Yellow", "Blue"], type: "Design", summary: "Fictional example. Students imagined a shaded rooftop garden, then worked with teachers to plan how it would be built and watered.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] Twenty years of weekly beach counts", place: "Example: Perth, Australia", lat: -31.95, lng: 115.86, styles: ["Green", "Indigo"], type: "Monitoring", summary: "Fictional example. The same volunteer group has counted shorebirds every week for two decades, building a record scientists now rely on.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] A shared calendar keeps a food network running", place: "Example: Minneapolis, USA", lat: 44.98, lng: -93.27, styles: ["Blue", "Green", "Purple"], type: "Food", summary: "Fictional example. One clear shared schedule now links a dozen gardens, pantries, and drivers so no harvest goes to waste.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] Elders map how the coastline has moved", place: "Example: Suva, Fiji", lat: -18.14, lng: 178.44, styles: ["Indigo", "Violet"], type: "Heritage", summary: "Fictional example. Elders recorded where the shore used to be, and the maps now guide where new seawalls and mangroves go.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] A choir brings two neighborhoods together", place: "Example: Pune, India", lat: 18.52, lng: 73.86, styles: ["Purple"], type: "Community", summary: "Fictional example. A climate-themed community choir became the first thing two long-divided neighborhoods did together.", source: "Example source", url: "#", year: 2026, draft: true },
    { title: "[Example] Residents protect a wetland from a new road", place: "Example: Tartu, Estonia", lat: 58.38, lng: 26.72, styles: ["Violet", "Red"], type: "Protection", summary: "Fictional example. Residents documented the wetland's birds and won a route change that keeps the road clear of the marsh.", source: "Example source", url: "#", year: 2026, draft: true }
];
