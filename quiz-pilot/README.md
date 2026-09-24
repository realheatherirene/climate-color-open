# Climate Color Quiz — Pilot

A separate, consent-gated build of the quiz that records responses for the pilot study described in the Pilot Program Design document. The public quiz in `quiz/` is unchanged and never records answers.

## Files

| Path | Purpose | Edit during the pilot? |
|---|---|---|
| `index.html` | Consent → quiz → results → feedback | Only for bug fixes. If the consent text changes, bump `CONSENT_VERSION`. |
| `js/pilot-config.js` | Endpoint URL, consent version | Yes (this is the deploy setting) |
| `js/pilot-logic.js` | Flow and data capture | Bug fixes only |
| `js/pilot-transport.js` | Sends each event to the endpoint | Bug fixes only |
| `css/pilot.css` | Consent, feedback, test-banner styles | Bug fixes only |
| `snapshot/` | Frozen copy of the results screen (taken 2026-09-24) | **No** |

## Shared with the public quiz — frozen while the pilot runs

The pilot imports these live files directly, so it measures the same instrument the public takes:

- `quiz/js/quiz-scoring.js`
- the `questions` list and `QUESTION_BANK_VERSION` in `quiz/js/quiz-data.js`

Do not edit either while the pilot is collecting data. Everything else — `results-ui.js`, `results.css`, `color-wheel-ui.js`, the blurbs and activities in `quiz-data.js`, `blends-data.js`, pathways, directory — stays free to edit, because the pilot uses its own snapshot.

If the public results page changes before launch and the pilot should match it, refresh `snapshot/` before launch, not after.

## Test sessions

Add `?test=1` to the URL. A visible banner appears, and every row from that session is marked `test = TRUE` in the Sheet so it can be excluded at analysis.

## Data endpoint

The Google Apps Script code is kept outside this repository. Setup steps are in its header comment. Pilot data never goes into this repository.
