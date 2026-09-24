/* ==========================================================================
   Climate Color Quiz Pilot — Flow & Data Capture
   ==========================================================================
   Consent → 40-item quiz → results (frozen snapshot) → optional feedback.

   What is shared with the public quiz, and what is not:
   - SHARED (imported live): the question bank (quiz-data.js `questions`)
     and the scoring engine (quiz-scoring.js). The pilot must measure the
     exact instrument the public takes, so these are never copied. Both are
     frozen for the duration of the pilot instead.
   - NOT SHARED: quiz-logic.js. It auto-shows a previously saved result on
     load and writes to the public quiz's localStorage keys, which this page
     shares (same origin, same Squarespace embedding site). The pilot keeps
     all session state in memory and never reads or writes localStorage.
   - FROZEN COPY: the results screen (snapshot/), so the result participants
     rate stays constant for the whole pilot.
   ========================================================================== */

import { questions, QUESTION_BANK_VERSION } from '../../quiz/js/quiz-data.js';
import { COLORS, SCALE, emptyScores, computeConstellation } from '../../quiz/js/quiz-scoring.js';
import { renderResultsScreen } from '../snapshot/results.js';
import { CONSENT_VERSION, PUBLIC_QUIZ_URL } from './pilot-config.js';
import { createSession, send } from './pilot-transport.js';

// Derived from the live bank rather than hardcoded, and checked: confidence
// normalizes against this number, so an uneven bank must stop the pilot
// rather than silently mis-scale every result.
const perColor = COLORS.map(c => questions.filter(q => q.color === c).length);
const ITEMS_PER_COLOR = perColor[0];
const BANK_OK = perColor.every(n => n === ITEMS_PER_COLOR)
    && questions.every(q => q.id && Number.isInteger(q.v));

const session = createSession();
let activeQuestions = [];
let current = 0;
let scores = emptyScores();
let responses = [];
let shownAt = 0;
let quizStartedAt = 0;

const $ = id => document.getElementById(id);

function shuffle(list) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ---------- Consent ---------- */

function initConsent() {
    $('linkStandardQuiz').href = PUBLIC_QUIZ_URL;
    if (session.test) $('testBanner').hidden = false;

    if (!BANK_OK) {
        $('consentActions').hidden = true;
        $('pilotUnavailable').hidden = false;
        return;
    }

    $('btnConsent').addEventListener('click', () => {
        send(session, 'consent', {
            consentVersion: CONSENT_VERSION,
            bankVersion: QUESTION_BANK_VERSION,
            itemsPerColor: ITEMS_PER_COLOR,
        });
        $('consent').hidden = true;
        startQuiz();
    });
}

/* ---------- Quiz ---------- */

function startQuiz() {
    activeQuestions = shuffle(questions);
    current = 0;
    scores = emptyScores();
    responses = [];
    $('quiz').hidden = false;
    quizStartedAt = performance.now();
    renderQuestion();
}

function updateProgress() {
    const total = activeQuestions.length;
    const pct = (current / total) * 100;
    $('progressBar').style.width = `${pct}%`;
    $('progressContainer').setAttribute('aria-valuenow', String(Math.round(pct)));
    $('progressText').textContent = `Question ${Math.min(current + 1, total)} of ${total}`;
    $('progressPercent').textContent = `${Math.round(pct)}%`;
}

function renderQuestion() {
    const q = activeQuestions[current];
    $('quizInstructions').hidden = current !== 0;
    $('questionText').textContent = q.prompt;
    updateProgress();

    const container = $('optionsContainer');
    container.innerHTML = '';
    SCALE.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn scale-btn';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => handleAnswer(q, opt.points, container));
        container.appendChild(btn);
    });

    $('questionText').focus();
    shownAt = performance.now();
}

function handleAnswer(q, points, container) {
    // Block a double-click from recording two answers to one item.
    container.querySelectorAll('button').forEach(b => { b.disabled = true; });

    const response = {
        itemId: q.id,
        itemVersion: q.v,
        color: q.color,
        position: current + 1,
        points,
        latencyMs: Math.round(performance.now() - shownAt),
    };
    responses.push(response);
    scores[q.color] += points;
    send(session, 'answer', response);

    current++;
    if (current < activeQuestions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

/* ---------- Result ---------- */

function finishQuiz() {
    const result = computeConstellation(scores, { itemsPerColor: ITEMS_PER_COLOR });
    // A tie at the 3rd/4th cut means the displayed tertiary color came from
    // the engine's random tie-break. This can't be reconstructed from the
    // scores afterward, because it decided which result the participant saw
    // and rated.
    const tieAtCut = result.breakdown[2].score === result.breakdown[3].score;

    send(session, 'complete', {
        primary: result.primary,
        secondary: result.secondary,
        tertiary: result.tertiary,
        confidence: result.confidence,
        tieAtCut,
        scores: { ...scores },
        totalMs: Math.round(performance.now() - quizStartedAt),
        bankVersion: QUESTION_BANK_VERSION,
        consentVersion: CONSENT_VERSION,
        // Full response set repeated here so a finished session is complete
        // even if an individual answer request was lost in transit.
        responses,
    });

    $('quiz').hidden = true;
    renderResultsScreen(result.primary, result.secondary, result.tertiary);
    insertFeedbackCard();

    const heading = document.querySelector('#results .identity-heading');
    if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
    }
    window.scrollTo(0, 0);
}

/* ---------- Feedback ---------- */

// Placed directly after the hero card (the result itself), before the
// action palette and wheel, so it is seen without scrolling past the whole
// page — and before any outbound link could take attention elsewhere.
function insertFeedbackCard() {
    const tpl = $('feedbackTemplate');
    const hero = document.querySelector('#results .hero-card');
    if (!tpl || !hero) return;
    hero.after(tpl.content.cloneNode(true));

    const form = $('feedbackForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const pick = name => fd.get(name) || null;
        send(session, 'feedback', {
            resonance: fd.get('resonance') ? Number(fd.get('resonance')) : null,
            priorExposure: pick('priorExposure'),
            comments: (fd.get('comments') || '').toString().slice(0, 2000),
            segment: pick('segment'),
            englishFirst: pick('englishFirst'),
            grewUp: pick('grewUp'),
        });
        const card = $('feedbackCard');
        card.innerHTML = '<h2 class="feedback-title" tabindex="-1">Thank you.</h2>' +
            '<p>Your answers were sent. They help us make the quiz more accurate for everyone who takes it.</p>';
        card.querySelector('h2').focus();
    });
}

initConsent();
