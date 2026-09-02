import { styles, questions, secondarySyntheses } from './quiz-data.js';

let currentQuestion = 0;
let scores = {
    Driver: 0, Stabilizer: 0,
    Advocate: 0, Connector: 0,
    Architect: 0, Guardian: 0,
    Visionary: 0, Keeper: 0
};

function updateProgressBar(percentage) {
    const bar = document.getElementById("progressBar");
    const container = document.getElementById("progressContainer");
    bar.style.width = `${percentage}%`;
    container.setAttribute("aria-valuenow", Math.round(percentage));
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const qNum = document.getElementById("questionNumber");
    const qText = document.getElementById("questionText");

    qNum.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    qText.textContent = q.prompt || q.text;

    const pct = (currentQuestion / questions.length) * 100;
    updateProgressBar(pct);

    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.style);
        container.appendChild(btn);
    });

    qText.setAttribute("tabindex", "-1");
    qText.focus();
}

function selectOption(styleKey) {
    scores[styleKey]++;
    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : calculateResults();
}

function calculateResults() {
    updateProgressBar(100);
    document.getElementById("quizCard").style.display = "none";

    const axes = [
        { anchor: "PACE", poleA: "Driver", poleB: "Stabilizer" },
        { anchor: "PEOPLE", poleA: "Advocate", poleB: "Connector" },
        { anchor: "PLACE", poleA: "Architect", poleB: "Guardian" },
        { anchor: "PURPOSE", poleA: "Visionary", poleB: "Keeper" }
    ];

    const axisWinners = axes.map((axis, index) => {
        const scoreA = scores[axis.poleA];
        const scoreB = scores[axis.poleB];
        return {
            anchor: axis.anchor,
            winner: scoreA >= scoreB ? axis.poleA : axis.poleB,
            winningScore: Math.max(scoreA, scoreB),
            margin: Math.abs(scoreA - scoreB),
            originalIndex: index
        };
    });

    axisWinners.sort((a, b) => {
        if (b.winningScore !== a.winningScore) return b.winningScore - a.winningScore;
        if (b.margin !== a.margin) return b.margin - a.margin;
        return a.originalIndex - b.originalIndex;
    });

    const primaryKey = axisWinners[0].winner;
    let secondaryKey = axisWinners[1].winner;

    if (secondaryKey === primaryKey) {
        const alt = axisWinners.find(w => w.winner !== primaryKey);
        secondaryKey = alt ? alt.winner : (primaryKey === "Driver" ? "Stabilizer" : "Driver");
    }

    localStorage.setItem('climatecolor_primary', primaryKey);
    localStorage.setItem('climatecolor_secondary', secondaryKey);

    const url = new URL(window.location);
    url.searchParams.set('primary', primaryKey);
    url.searchParams.set('secondary', secondaryKey);
    window.history.pushState({}, '', url);

    renderReveal(primaryKey, secondaryKey);
}

function renderReveal(primaryKey, secondaryKey) {
    const primary = styles[primaryKey];
    const secondary = styles[secondaryKey];

    const synthesisText =
        secondarySyntheses[primaryKey]?.[secondaryKey] ||
        `You bring a unique combination of ${primaryKey} initiative and ${secondaryKey} perspective to community stewardship.`;

    const result = document.getElementById("resultContainer");
    result.style.display = "block";

    result.innerHTML = `
        <div class="sticky-results-bar">
            <div class="sticky-results-label">
                Results:
                <span class="theme-${primaryKey.toLowerCase()}">${primaryKey}</span> /
                <span class="theme-${secondaryKey.toLowerCase()}">${secondaryKey}</span>
            </div>
            <div class="sticky-actions">
                <button onclick="window.print()" class="btn-sm-action btn-sm-primary">Print / Save PDF</button>
                <button id="btnCopyLink" class="btn-sm-action">Copy Link</button>
                <button id="btnResetQuiz" class="btn-sm-action">Retake</button>
            </div>
        </div>

        <div class="styleBlock border-${primaryKey.toLowerCase()}">
            <div class="styleTitle styleTitle-lg">${primaryKey}</div>
            <div class="styleIdentity">${primary.identity}</div>
            <div class="styleMeta">Anchor: ${primary.anchor} | Energy: ${primary.energy}</div>
            <div class="styleContribution"><strong>How You Contribute:</strong> ${primary.contribution}</div>
            <div class="styleAction"><strong>Where You Shine:</strong> ${primary.shine}</div>
            <div class="styleWatchouts"><strong>Watchouts:</strong> ${primary.watchouts}</div>
        </div>

        <div class="styleBlock border-${secondaryKey.toLowerCase()}">
            <div class="styleTitle styleTitle-md">Secondary: ${secondaryKey}</div>
            <div class="styleIdentity styleIdentity-sm">${secondary.identity}</div>
            <div class="styleMeta">Anchor: ${secondary.anchor} | Energy: ${secondary.energy}</div>
            <div class="styleContribution"><strong>How You Contribute:</strong> ${secondary.contribution}</div>
            <div class="styleAction"><strong>Where You Shine:</strong> ${secondary.shine}</div>
            <div class="styleWatchouts"><strong>Watchouts:</strong> ${secondary.watchouts}</div>
        </div>

        <div class="synthesisBlock border-${primaryKey.toLowerCase()}">
            <div class="synthesisTitle">How Your Styles Work Together</div>
            <div class="synthesisText">${synthesisText}</div>
        </div>
    `;

    document.getElementById("btnCopyLink").onclick = () => copyQuizLink(primaryKey, secondaryKey);
    document.getElementById("btnResetQuiz").onclick = resetQuiz;
}

function copyQuizLink(primaryKey, secondaryKey) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?primary=${encodeURIComponent(primaryKey)}&secondary=${encodeURIComponent(secondaryKey)}`;
    navigator.clipboard?.writeText(shareUrl)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => prompt("Copy your share link below:", shareUrl));
}

function resetQuiz() {
    localStorage.removeItem('climatecolor_primary');
    localStorage.removeItem('climatecolor_secondary');
    window.location.href = window.location.pathname;
}

function initQuizState() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPrimary = urlParams.get('primary');
    const paramSecondary = urlParams.get('secondary');

    const validPrimary = styles[paramPrimary]
        ? paramPrimary
        : styles[localStorage.getItem('climatecolor_primary')]
        ? localStorage.getItem('climatecolor_primary')
        : null;

    let validSecondary = styles[paramSecondary]
        ? paramSecondary
        : styles[localStorage.getItem('climatecolor_secondary')]
        ? localStorage.getItem('climatecolor_secondary')
        : null;

    if (validPrimary && validSecondary && validPrimary === validSecondary) {
        validSecondary = validPrimary === "Driver" ? "Stabilizer" : "Driver";
    }

    if (validPrimary) {
        updateProgressBar(100);
        document.getElementById("quizCard").style.display = "none";
        renderReveal(validPrimary, validSecondary || (validPrimary === "Driver" ? "Stabilizer" : "Driver"));
    } else {
        currentQuestion = 0;
        scores = {
            Driver: 0, Stabilizer: 0,
            Advocate: 0, Connector: 0,
            Architect: 0, Guardian: 0,
            Visionary: 0, Keeper: 0
        };
        document.getElementById("resultContainer").style.display = "none";
        document.getElementById("quizCard").style.display = "block";
        renderQuestion();
    }
}

document.addEventListener("DOMContentLoaded", initQuizState);
window.addEventListener("popstate", initQuizState);
