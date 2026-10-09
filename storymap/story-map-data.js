/* ==========================================================================
   STORY MAP DATA: the stories
   ==========================================================================
   One plain list of stories, added to by hand. Colors and archetype labels
   come from core/.

   FIELDS
     title    Short headline in your own words.
     place    Human-readable place, e.g. "Glasgow, Scotland".
     lat, lng Where the pin goes. City-level is plenty (2 decimals max);
              never a street address or a private home.
     colors   1–3 color names, most prominent first. The first color sets
              the pin's color when "All" is showing. (The placeholder below
              carries all six, so every filter shows it.)
     type     Short category, like the Directory's (optional).
     summary  1–2 sentences, in your own words, at a 9th-grade reading
              level or below.
     source   The outlet or organization that reported it, e.g. "BBC News".
     url      Link to that source.
     year     Year it happened.
     draft    true = hidden unless the page is opened with ?drafts=1.
              Use this to stage entries while you verify them.

   CURATION RULES
     1. Tag by what people brought, using what each color provides in
        core/climate-color.js: Red for grounding, Orange for vision,
        Yellow for energy, Green for support, Blue for language, and
        Indigo for direction. Not by topic: a tree-planting story can be
        Red (they built something that lasts), Yellow (they rallied the
        neighborhood), or Green (they brought people together), depending
        on what the story is really about.
     2. Every story links to a reliable source you have read yourself.
        Stories someone else found get checked against the source before
        `draft` comes off.
     3. Summaries are written fresh, never copied from the source.
     4. Company announcements only when an independent outlet has reported
        the result, not just the promise. "Good news" and greenwashing can
        look alike.
     5. Prefer lasting stories over breaking news, so entries stay true.
     6. Aim for balance: roughly equal stories per color, from many regions.
   ========================================================================== */

export const stories = [
    // A placeholder that holds this spot until real stories are added.
    { title: "Placeholder story", place: "Lebanon, Kansas, USA", lat: 39.81, lng: -98.56, colors: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo"], type: "Placeholder", summary: "A sample entry that holds this spot until real stories are added. Its pin sits near the middle of the lower 48 states.", source: "Climate Color", url: "https://climatecolor.com", year: 2026, draft: false }
];