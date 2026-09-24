/* ==========================================================================
   Climate Color Quiz Pilot — Configuration
   ==========================================================================
   The only file that should need editing to deploy the pilot.

   ENDPOINT_URL: the Google Apps Script web-app URL (ends in /exec), from
   Deploy → Manage deployments in the script bound to the pilot Sheet. This
   URL is public by nature (the repository is public); the script validates
   every submission, so knowing the URL only lets someone send data that is
   either rejected or easy to exclude at analysis. Leave it empty to run the
   pilot with nothing sent anywhere (payloads are logged to the browser
   console instead) — useful for local checks.

   CONSENT_VERSION: change whenever the consent text in index.html changes,
   so each session records exactly which wording the participant agreed to.
   ========================================================================== */

export const ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbzIH12JLiYUaHqC6Mx4wTY0NzpPfgt9DGTD7rliTTlbajoKdFxpbhpplv8tV60Z4Uy5Lw/exec";

export const CONSENT_VERSION = "2026-09-24-v1";

// Where "Take the standard quiz instead" goes. Relative to quiz-pilot/, so
// it opens the public quiz inside the same Squarespace frame.
export const PUBLIC_QUIZ_URL = "../quiz/";
