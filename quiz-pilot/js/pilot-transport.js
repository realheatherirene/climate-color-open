/* ==========================================================================
   Climate Color Quiz Pilot — Data Transport
   ==========================================================================
   Every event is sent the moment it happens (consent, each answer, the
   computed result, the feedback form), not batched at the end. That is what
   lets the analysis see where people stop: an abandoned session still has
   every answer given before the person left.

   Transport details:
   - Content-Type text/plain keeps the POST a "simple" CORS request, so the
     browser sends it straight to Apps Script without a preflight that Apps
     Script cannot answer.
   - mode "no-cors" means the response can't be read. Delivery is therefore
     confirmed in the Sheet during the pre-launch dry run, not in code. The
     "complete" event also carries the full response set, so a dropped
     individual answer request never loses a finished session's data.
   - keepalive lets a request already in flight finish if the tab closes
     right after the last answer.
   ========================================================================== */

import { ENDPOINT_URL } from './pilot-config.js';

export function createSession() {
    const params = new URLSearchParams(window.location.search);
    return {
        sessionId: crypto.randomUUID(),
        // ?test=1 tags every row from this session for exclusion at analysis
        // (pre-launch dry runs and soft-launch sessions).
        test: params.get('test') === '1',
    };
}

export function send(session, type, data) {
    const payload = {
        type,
        sessionId: session.sessionId,
        test: session.test,
        clientTime: new Date().toISOString(),
        ...data,
    };
    const body = JSON.stringify(payload);

    if (!ENDPOINT_URL) {
        console.info('[pilot] no ENDPOINT_URL set — not sent:', payload);
        return;
    }

    fetch(ENDPOINT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body,
        keepalive: true,
    }).catch(() => {
        // Nothing useful to do client-side; the participant's experience
        // must not depend on data delivery.
    });
}
