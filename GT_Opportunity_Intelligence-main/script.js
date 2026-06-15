/* ============================================================
   OppIQ — Application Logic
   ------------------------------------------------------------
   Single-page app shell. No build step, no frameworks.
   All "AI" behaviour is pre-scripted (see data/opportunities.js)
   and driven by setTimeout-based animation only.
   ============================================================ */

/* ----------------------------------------------------------
   ICON LIBRARY
   ---------------------------------------------------------- */
const ICONS = {
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  helpCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  logOut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>`
};

/* ----------------------------------------------------------
   APP STATE & NAVIGATION
   ---------------------------------------------------------- */
const state = {
  view: "dashboard",
  params: {}
};

function navigate(view, params = {}) {
  state.view = view;
  state.params = params;
  const hash = "#" + view + (Object.keys(params).length ? "/" + encodeURIComponent(JSON.stringify(params)) : "");
  history.pushState({ view, params }, "", hash);
  render();
  updateSidebarActive();
  updateBreadcrumb();
  document.getElementById("content").scrollTop = 0;
  window.scrollTo(0, 0);
}

window.addEventListener("popstate", (e) => {
  const s = e.state;
  if (s && s.view) {
    state.view = s.view;
    state.params = s.params || {};
    render();
    updateSidebarActive();
    updateBreadcrumb();
  }
});

const BREADCRUMBS = {
  dashboard: "Opportunity Insights",
  "opportunity-detail": "Opportunity Detail",
  "document-forensics": "Document Forensics",
  "business-plan": "Business Plan",
  "how-it-thinks": "How OppIQ Thinks",
  pipeline: {
    all: "My Pipeline",
    diligence: "In Diligence",
    closed: "Closed"
  }
};

function updateBreadcrumb() {
  const el = document.getElementById("topbarBreadcrumb");
  let text = BREADCRUMBS[state.view];
  if (state.view === "pipeline") {
    text = BREADCRUMBS.pipeline[state.params.tab || "all"];
  }
  el.textContent = text || "OppIQ";
}

function updateSidebarActive() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const view = item.dataset.view;
    const tab = item.dataset.tab;
    const isActive =
      view === state.view &&
      (view !== "pipeline" || tab === (state.params.tab || "all"));
    item.classList.toggle("active", isActive);
  });
}

function render() {
  const content = document.getElementById("content");
  let html = "";
  switch (state.view) {
    case "dashboard":
      html = renderDashboard();
      break;
    case "opportunity-detail":
      html = renderOpportunityDetail(state.params.id);
      break;
    case "document-forensics":
      html = renderDocumentForensics();
      break;
    case "business-plan":
      html = renderBusinessPlan();
      break;
    case "how-it-thinks":
      html = renderHowItThinks();
      break;
    case "pipeline":
      html = renderPipeline(state.params.tab || "all");
      break;
    default:
      html = renderDashboard();
  }
  content.innerHTML = `<div class="fade-view">${html}</div>`;
}

/* ----------------------------------------------------------
   TOAST HELPER
   ---------------------------------------------------------- */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span class="toast__dot"></span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3700);
}

/* ----------------------------------------------------------
   SHARED RENDER HELPERS
   ---------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : str;
  return div.innerHTML;
}

function getScoreTier(score) {
  if (score === null || score === undefined) return "neutral";
  if (score >= 75) return "green";
  if (score >= 60) return "amber";
  return "red";
}

function renderScorePill(score) {
  const tier = getScoreTier(score);
  if (score === null || score === undefined) {
    return `
      <div class="score-pill score-pill--neutral">
        <div class="score-pill__value">—</div>
        <div class="score-pill__label">Unscored</div>
      </div>`;
  }
  return `
    <div class="score-pill score-pill--${tier}">
      <div class="score-pill__value">${score}</div>
      <div class="score-pill__label">/ 100</div>
    </div>`;
}

const META_CHIP_FIELDS = [
  { key: "state", label: "State" },
  { key: "technology", label: "Technology" },
  { key: "capacity", label: "Capacity" },
  { key: "type", label: "Type" },
  { key: "deadline", label: "Deadline" },
  { key: "tariff", label: "Tariff" }
];

function renderMetaChips(opp) {
  return `
    <div class="meta-chips">
      ${META_CHIP_FIELDS.map(
        (f) => `
        <div class="meta-chip">
          <div class="meta-chip__label">${f.label}</div>
          <div class="meta-chip__value">${opp[f.key]}</div>
        </div>`
      ).join("")}
    </div>`;
}

const SCORE_DIMENSION_LABELS = {
  gridAccess: "Grid Access",
  policyFit: "Policy Fit",
  landRisk: "Land Risk",
  financialViability: "Financial Viability",
  competitionIntensity: "Competition Intensity"
};

function renderScoreBars(breakdown) {
  const allNull = Object.values(breakdown).every((v) => v === null || v === undefined);
  if (allNull) {
    return `<div class="score-unassessed">Assessment pending — add to pipeline to trigger OppIQ scoring.</div>`;
  }
  return `
    <div class="score-bars">
      ${Object.keys(SCORE_DIMENSION_LABELS)
        .map((key) => {
          const value = breakdown[key];
          const tier = getScoreTier(value);
          return `
          <div class="score-bar score-bar--${tier}">
            <div class="score-bar__row">
              <span class="score-bar__label">${SCORE_DIMENSION_LABELS[key]}</span>
              <span class="score-bar__value">${value !== null && value !== undefined ? value : "—"}</span>
            </div>
            <div class="score-bar__track">
              <div class="score-bar__fill" style="width: ${value || 0}%"></div>
            </div>
          </div>`;
        })
        .join("")}
    </div>`;
}

function renderRiskRegister(risks) {
  return `
    <div class="risk-register">
      ${risks
        .map(
          (r) => `
        <div class="risk-item">
          <div class="risk-item__header">
            <span class="pill pill--${r.severity.toLowerCase()}">${r.severity}</span>
            <span class="risk-item__title">${r.risk}</span>
          </div>
          <div class="risk-item__mitigation"><strong>Mitigation:</strong> ${r.mitigation}</div>
        </div>`
        )
        .join("")}
    </div>`;
}

function getSignalPillClass(signal) {
  const s = signal.toLowerCase();
  if (s.includes("anomaly")) return "info";
  if (s.includes("deadline")) return "high";
  if (s.includes("document") || s.includes("pending") || s.includes("delay")) return "medium";
  return "neutral";
}

function computeStats() {
  const scored = OPPORTUNITIES.filter((o) => typeof o.score === "number");
  const avg = Math.round(scored.reduce((sum, o) => sum + o.score, 0) / scored.length);
  const highPriority = OPPORTUNITIES.filter((o) => o.riskLevel === "High").length;
  const docFlags = OPPORTUNITIES.filter((o) => o.isForensics).length;
  return {
    total: OPPORTUNITIES.length,
    highPriority,
    avgScore: avg,
    docFlags
  };
}

/* ----------------------------------------------------------
   DASHBOARD VIEW (Opportunity Insights)
   ---------------------------------------------------------- */
function renderDashboard() {
  const stats = computeStats();
  return `
    <div class="page-header">
      <div>
        <div class="page-title"><span class="sparkle">${ICONS.sparkle}</span> Opportunity Insights</div>
        <div class="page-subtitle">Signals that change what you should pursue next.</div>
      </div>
      <button class="btn btn--primary" data-action="run-scan">${ICONS.zap} Run Intelligence Scan</button>
    </div>

    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-card__label">Opportunities Tracked</div>
        <div class="stat-card__value">${stats.total}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__label">High Priority</div>
        <div class="stat-card__value is-red">${stats.highPriority}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__label">Avg Opportunity Score</div>
        <div class="stat-card__value">${stats.avgScore}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__label">Document Flags</div>
        <div class="stat-card__value is-amber">${stats.docFlags}</div>
      </div>
    </div>

    <div class="insight-cards">
      ${INSIGHT_CARDS.map(renderInsightCard).join("")}
    </div>

    <div class="table-card">
      <div class="table-card__header">
        <div>
          <div class="table-card__title">Suggested Next Opportunities</div>
          <div class="table-card__subtitle">Ordered by operational urgency, not portfolio size.</div>
        </div>
      </div>
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Opportunity</th>
              <th>Entity</th>
              <th>Signal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${SUGGESTED_ORDER.map((id) => renderSuggestedRow(getOpportunity(id))).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getOpportunity(id) {
  return OPPORTUNITIES.find((o) => o.id === id)
    || FETCHED_OPPORTUNITIES.find((o) => o.id === id)
    || CLOSED_OPPORTUNITIES.find((o) => o.id === id);
}

const INSIGHT_ICON_MAP = {
  red: ICONS.alertTriangle,
  amber: ICONS.fileText,
  indigo: ICONS.search
};

function renderInsightCard(card) {
  return `
    <div class="insight-card insight-card--${card.type}">
      <div class="insight-card__icon">${INSIGHT_ICON_MAP[card.type]}</div>
      <div class="insight-card__eyebrow">${card.eyebrow}</div>
      <div class="insight-card__title">${card.title}</div>
      <div class="insight-card__desc">${card.desc}</div>
      <button class="insight-card__cta" data-action="insight-cta" data-view="${card.action.view}" data-id="${card.action.id || ""}">${card.cta}</button>
    </div>`;
}

function renderSuggestedRow(opp) {
  return `
    <tr>
      <td><span class="pill pill--${opp.riskLevel.toLowerCase()}">${opp.riskLevel}</span></td>
      <td>
        <span class="cell-title">${opp.title}</span>
        <span class="cell-sub">${opp.id}</span>
      </td>
      <td>${opp.entity}</td>
      <td><span class="pill pill--${getSignalPillClass(opp.signal)}">${opp.signal}</span></td>
      <td><button class="action-link" data-action="open-opportunity" data-id="${opp.id}">Open</button></td>
    </tr>`;
}

/* ----------------------------------------------------------
   OPPORTUNITY DETAIL VIEW
   ---------------------------------------------------------- */
/* ----------------------------------------------------------
   CLOSED OPPORTUNITY DETAIL VIEW
   ---------------------------------------------------------- */
function renderClosedOpportunityDetail(opp) {
  const isWon = opp.outcome === "won";
  const outcomeClass = isWon ? "won" : "lost";
  const outcomeLabel = isWon ? "Won" : "Lost";

  const rfpDocRows = opp.rfpDocuments.map(d => `
    <div class="closed-doc-item">
      <div class="closed-doc-icon">${ICONS.fileText}</div>
      <div class="closed-doc-info">
        <div class="closed-doc-name">${d.name}</div>
        <div class="closed-doc-meta">${d.docType} &nbsp;·&nbsp; Issued ${d.issuedOn} &nbsp;·&nbsp; Ref: ${d.ref}</div>
      </div>
      <button class="btn btn--secondary btn--sm" data-action="view-closed-doc" data-oppid="${opp.id}" data-docid="${d.id}" data-category="rfp">${ICONS.externalLink} View</button>
    </div>`).join("");

  const responseRows = opp.rfpResponses.map(d => `
    <div class="closed-doc-item">
      <div class="closed-doc-icon ${d.statusType === "negative" ? "closed-doc-icon--neg" : d.statusType === "positive" ? "closed-doc-icon--pos" : ""}">${d.statusType === "positive" ? ICONS.checkCircle : d.statusType === "negative" ? ICONS.alertCircle : ICONS.fileText}</div>
      <div class="closed-doc-info">
        <div class="closed-doc-name">${d.name}</div>
        <div class="closed-doc-meta">${d.docType} &nbsp;·&nbsp; Submitted ${d.submittedOn}</div>
      </div>
      <div class="closed-doc-item__right">
        <span class="closed-response-status closed-response-status--${d.statusType}">${d.status}</span>
        <button class="btn btn--secondary btn--sm" data-action="view-closed-doc" data-oppid="${opp.id}" data-docid="${d.id}" data-category="response">${ICONS.externalLink} View</button>
      </div>
    </div>`).join("");

  const competitorRows = opp.competitiveAnalysis.results.map(r => `
    <tr class="${r.entity === "Continuum Energy" ? "closed-comp-us" : ""}">
      <td><strong>${r.rank}</strong></td>
      <td>${r.entity}</td>
      <td>${r.tariff}</td>
      <td>${r.capacity}</td>
      <td style="color:var(--text-muted);font-size:12px">${r.notes}</td>
    </tr>`).join("");

  const lessonRows = opp.lessonsLearned.map(l => `
    <div class="lesson-item lesson-item--${l.type}">
      <div class="lesson-item__icon">
        ${l.type === "positive" ? ICONS.checkCircle : l.type === "improvement" ? ICONS.alertTriangle : ICONS.search}
      </div>
      <div class="lesson-item__body">
        <div class="lesson-item__title">${l.title}</div>
        <div class="lesson-item__detail">${l.detail}</div>
      </div>
    </div>`).join("");

  const kvRow = (k, v) => `<tr><td>${k}</td><td>${v}</td></tr>`;

  const financialsHtml = isWon && opp.finalFinancials ? `
    <div class="card">
      <div class="card__title">Financial Outcome</div>
      <table class="closed-kv-table">
        <tbody>
          ${kvRow("Final Capex", opp.finalFinancials.capex)}
          ${kvRow("Project IRR", opp.finalFinancials.projectIrr)}
          ${kvRow("Equity IRR", opp.finalFinancials.equityIrr)}
          ${kvRow("Avg DSCR", opp.finalFinancials.dscr)}
          ${kvRow("Year 1 Revenue (est.)", opp.finalFinancials.revenue)}
          ${kvRow("Debt Tenor", opp.finalFinancials.debtTenor)}
          ${kvRow("Debt Lender", opp.finalFinancials.lender)}
        </tbody>
      </table>
    </div>` : "";

  const awardHtml = isWon && opp.awardDetails ? `
    <div class="card">
      <div class="card__title">Award & PPA Details</div>
      <table class="closed-kv-table">
        <tbody>
          ${kvRow("LOA Date", opp.awardDetails.loaDate)}
          ${kvRow("PPA Signed", opp.awardDetails.ppaSignedOn)}
          ${kvRow("PPA Duration", opp.awardDetails.ppaDuration)}
          ${kvRow("PPA Tariff", opp.awardDetails.ppaTariff)}
          ${kvRow("PPA Capacity", opp.awardDetails.ppaCapacity)}
          ${kvRow("COD Target", opp.awardDetails.codTarget)}
          ${kvRow("Procuring Entity", opp.awardDetails.procuringEntity)}
        </tbody>
      </table>
    </div>` : "";

  return `
    <div class="content-breadcrumb" data-action="back-closed-pipeline">${ICONS.chevronLeft} Back to Closed</div>

    <div class="closed-outcome-banner closed-outcome-banner--${outcomeClass}">
      <div class="closed-outcome-banner__left">
        <div class="closed-outcome-pill closed-outcome-pill--${outcomeClass}">${outcomeLabel}</div>
        <div>
          <div class="closed-outcome-banner__title">${opp.title}</div>
          <div class="closed-outcome-banner__sub">${opp.id} &nbsp;·&nbsp; ${opp.entity}, ${opp.state} &nbsp;·&nbsp; Closed ${opp.closedOn}</div>
        </div>
      </div>
      <div class="closed-outcome-banner__right">
        ${isWon
          ? `<div class="closed-outcome-stat"><span>Our Tariff</span><strong>${opp.bidSummary.ourTariff}</strong></div>
             <div class="closed-outcome-stat"><span>Bid Position</span><strong>${opp.bidSummary.bidPosition}</strong></div>
             <div class="closed-outcome-stat"><span>COD Target</span><strong>${opp.awardDetails.codTarget}</strong></div>`
          : `<div class="closed-outcome-stat"><span>Our Tariff</span><strong>${opp.bidSummary.ourTariff}</strong></div>
             <div class="closed-outcome-stat"><span>Winner's Tariff</span><strong>${opp.bidSummary.winningTariff}</strong></div>
             <div class="closed-outcome-stat"><span>Our Position</span><strong>${opp.bidSummary.bidPosition}</strong></div>`}
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-main">

        <div class="card">
          <div class="card__title">RFP / Tender Documents</div>
          <div class="closed-doc-list">${rfpDocRows}</div>
        </div>

        <div class="card">
          <div class="card__title">Our Bid Response Documents</div>
          <div class="closed-doc-list">${responseRows}</div>
        </div>

        <div class="card">
          <div class="card__title">Competitive Analysis &nbsp;<span style="font-weight:400;font-size:12.5px;color:var(--text-muted)">${opp.competitiveAnalysis.totalBidders} bidders</span></div>
          <div class="table-scroll">
            <table class="data-table">
              <thead><tr><th>Rank</th><th>Bidder</th><th>Quoted Tariff</th><th>Capacity</th><th>Notes</th></tr></thead>
              <tbody>${competitorRows}</tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card__title">Lessons Learned</div>
          <div class="lesson-list">${lessonRows}</div>
        </div>

        ${financialsHtml}

      </div>
      <div class="detail-side">
        <div class="card">
          <div class="card__title">Bid Summary</div>
          <table class="closed-kv-table">
            <tbody>
              ${kvRow("Our Tariff", opp.bidSummary.ourTariff)}
              ${kvRow("Winning Tariff", opp.bidSummary.winningTariff)}
              ${kvRow("Bid Position", opp.bidSummary.bidPosition)}
              ${kvRow("Total Bidders", opp.bidSummary.totalBidders)}
              ${kvRow("Submitted On", opp.bidSummary.submittedOn)}
              ${kvRow("Technical Score", opp.bidSummary.technicalScore)}
              ${kvRow("Bid Security", opp.bidSummary.bidBond)}
            </tbody>
          </table>
        </div>

        ${awardHtml}

        <div class="ai-note">
          <div class="ai-note__header">${ICONS.sparkle} Agent Assessment</div>
          <div class="ai-note__body">${opp.agentAssessment}</div>
        </div>
      </div>
    </div>`;
}

function renderOpportunityDetail(id) {
  const opp = getOpportunity(id);
  if (!opp) return renderDashboard();
  if (opp.status === "closed") return renderClosedOpportunityDetail(opp);

  const canGeneratePlan = typeof opp.score === "number" && opp.score >= 75;
  const isFetched = FETCHED_OPPORTUNITIES.some((f) => f.id === opp.id);

  return `
    <div class="content-breadcrumb" data-action="back-dashboard">${ICONS.chevronLeft} Back to Opportunity Insights</div>
    ${isFetched ? `
    <div class="fetched-banner">
      ${ICONS.zap}
      <span>This opportunity was recently fetched from an external source and has <strong>not yet been scored</strong>. Add it to your pipeline to trigger full OppIQ assessment.</span>
      ${OPPORTUNITIES.some((o) => o.id === opp.id)
        ? `<span class="fetched-banner__added">${ICONS.checkCircle} In Pipeline</span>`
        : `<button class="btn btn--primary btn--sm" data-action="add-to-pipeline" data-id="${opp.id}">+ Add to Pipeline</button>`}
    </div>` : ""}

    <div class="detail-header">
      <div>
        <div class="detail-header__id">${opp.id}</div>
        <div class="detail-header__title">${opp.title}</div>
        <div class="detail-header__entity">${opp.entity} · ${opp.state}</div>
      </div>
      ${renderScorePill(opp.score)}
    </div>

    ${renderMetaChips(opp)}

    <div class="detail-grid">
      <div class="detail-main">
        <div class="card">
          <div class="card__title">Opportunity Score Breakdown</div>
          ${renderScoreBars(opp.scoreBreakdown)}
        </div>

        <div class="ai-note">
          <div class="ai-note__header">${ICONS.sparkle} Agent Assessment</div>
          <div class="ai-note__body">${opp.agentAssessment}</div>
        </div>

        <div class="card">
          <div class="card__title">Risk Register</div>
          ${renderRiskRegister(opp.riskRegister)}
        </div>

        ${opp.showForensicsLink ? renderForensicsBanner() : ""}
      </div>

      <div class="detail-side">
        <div class="card">
          <div class="card__title">Actions</div>
          <div class="stack">
            <button class="btn btn--primary btn--block" data-action="generate-plan" data-id="${opp.id}" ${canGeneratePlan ? "" : "disabled"}>
              ${ICONS.sparkle} Generate Business Plan
            </button>
            ${canGeneratePlan ? "" : (() => {
              if (opp.dataGaps && opp.dataGaps.length) {
                const resolved = resolvedGaps[opp.id] || new Set();
                const requiredTotal = opp.dataGaps.filter(g => g.required).length;
                const requiredDone  = opp.dataGaps.filter(g => g.required && resolved.has(g.id)).length;
                return `
                  <div class="helper-text">Score ${opp.score}/100 — need ≥ 75 to generate plan. Submit the required documents to unlock re-scoring.</div>
                  <button class="btn btn--secondary btn--block" data-action="open-data-gaps" data-id="${opp.id}">
                    ${ICONS.fileText} Resolve Data Gaps ${requiredDone > 0 ? `(${requiredDone}/${requiredTotal} done)` : ""}
                  </button>`;
              }
              if (opp.status === "active" && !opp.isForensics) {
                return `
                  <div class="helper-text">Score ${opp.score}/100 — need ≥ 75 to generate plan. Move this to active diligence to start tracking approvals.</div>
                  <button class="btn btn--secondary btn--block" data-action="move-to-diligence" data-id="${opp.id}">
                    ${ICONS.search} Move to Diligence Track
                  </button>`;
              }
              if (opp.status === "diligence" && !opp.dataGaps) {
                return `<div class="helper-text">Score ${opp.score}/100 — under active diligence. Run an Intelligence Scan after key approvals land to trigger re-scoring.</div>`;
              }
              return `<div class="helper-text">Business plan generation unlocks once Opportunity Score ≥ 75.</div>`;
            })()}
            <button class="btn btn--secondary btn--block" data-action="view-source" data-id="${opp.id}">${ICONS.externalLink} View Source</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderForensicsBanner() {
  return `
    <div class="forensics-banner">
      <div class="forensics-banner__icon">${ICONS.search}</div>
      <div class="forensics-banner__text">This project's EPC invoice has a flagged anomaly — forensic review recommended before payment approval.</div>
      <button class="forensics-banner__cta" data-action="open-forensics">View Document Forensics →</button>
    </div>`;
}

/* ----------------------------------------------------------
   SOURCE NOTICE (View Source)
   ---------------------------------------------------------- */
function buildSourceNoticeHtml(opp) {
  const refNo = `${opp.entity.replace(/[^A-Za-z]/g, "").toUpperCase()}/${opp.id}/2026-27`;
  const retrievedOn = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${opp.id} — Source Notice</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; color: #1a1b25; max-width: 760px; margin: 40px auto; padding: 0 24px 60px; line-height: 1.6; }
  .notice-header { text-align: center; border-bottom: 3px double #1a1b25; padding-bottom: 16px; margin-bottom: 24px; }
  .notice-header__entity { font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; color: #475569; }
  .notice-header__title { font-size: 22px; font-weight: 700; margin: 6px 0; }
  .notice-header__type { font-size: 14px; color: #475569; }
  .notice-meta { display: flex; justify-content: space-between; font-size: 13px; color: #475569; margin-bottom: 24px; }
  table { border-collapse: collapse; width: 100%; margin: 8px 0 20px; font-size: 13px; }
  th, td { border: 1px solid #CBD5E1; padding: 8px 12px; text-align: left; vertical-align: top; }
  th { background: #F1F5F9; width: 42%; }
  h2 { font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #CBD5E1; padding-bottom: 4px; margin-top: 28px; }
  p { font-size: 14px; }
  .notice-footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #CBD5E1; font-size: 12px; color: #94A3B8; font-style: italic; }
</style>
</head>
<body>
  <div class="notice-header">
    <div class="notice-header__entity">${opp.entity}</div>
    <div class="notice-header__title">${opp.title}</div>
    <div class="notice-header__type">${opp.type}</div>
  </div>

  <div class="notice-meta">
    <span><strong>Ref. No.:</strong> ${refNo}</span>
    <span><strong>Bid Submission Deadline:</strong> ${opp.deadline}</span>
  </div>

  <h2>Key Parameters</h2>
  <table>
    <tr><th>Project Reference</th><td>${opp.id}</td></tr>
    <tr><th>Issuing Authority</th><td>${opp.entity}</td></tr>
    <tr><th>State / UT</th><td>${opp.state}</td></tr>
    <tr><th>Technology</th><td>${opp.technology}</td></tr>
    <tr><th>Capacity</th><td>${opp.capacity}</td></tr>
    <tr><th>Procurement Category</th><td>${opp.type}</td></tr>
    <tr><th>Tariff</th><td>${opp.tariff}</td></tr>
    <tr><th>Bid Submission Deadline</th><td>${opp.deadline}</td></tr>
  </table>

  <h2>Notice</h2>
  <p>${opp.entity} invites Requests for Selection / bids from eligible developers for the development, financing, construction, operation, and maintenance of a ${opp.capacity} ${opp.technology} project located in ${opp.state}, under the ${opp.type} framework, on a Build-Own-Operate basis.</p>
  <p>The applicable tariff for this procurement is <strong>${opp.tariff}</strong>. Selected bidders will be required to enter into a Power Purchase Agreement (PPA) with the procuring entity for the contracted capacity, subject to the terms and conditions set out in the full Request for Selection document.</p>

  <h2>Eligibility &amp; Submission</h2>
  <p>Bidders must meet the technical and financial eligibility criteria specified in the detailed RfS document, including minimum net worth, prior project execution experience, and Earnest Money Deposit (EMD) requirements. Bids must be submitted electronically through the issuing authority's e-procurement portal on or before <strong>${opp.deadline}</strong>. Late submissions will not be considered.</p>

  <h2>Data Sources</h2>
  ${(opp.sources && opp.sources.length > 0) ? `
  <table>
    <tr><th style="width:30%">Portal</th><th>Detail</th></tr>
    ${opp.sources.map((src) => {
      const ext = EXTERNAL_SOURCES.find((e) => e.id === src.sourceId);
      return `<tr><td><strong>${src.label}</strong><br/><span style="color:#64748B;font-size:12px">${ext ? ext.domain : ""} &nbsp;·&nbsp; ${ext ? ext.type : ""}</span></td><td>${src.detail}</td></tr>`;
    }).join("")}
  </table>` : `<p style="color:#64748B">No external source data recorded for this opportunity.</p>`}

  <div class="notice-footer">
    This is a cached copy of the source notice retrieved by OppIQ's source-monitoring agent from the ${opp.entity} procurement portal on ${retrievedOn}. Figures and dates reflect the most recently indexed version of this notice.
  </div>
</body>
</html>`;
}

/* ----------------------------------------------------------
   CLOSED OPPORTUNITY DOCUMENT VIEWER
   ---------------------------------------------------------- */
function buildClosedDocHtml(opp, doc, category) {
  const isPrimaryBlue = opp.outcome === "won" ? "#1D4ED8" : "#374151";
  const accentColor   = opp.outcome === "won" ? "#1D4ED8" : "#6B7280";
  const entityShort   = opp.entity.replace(/\s+(Limited|Ltd\.?|Pvt\.?|Corporation)/gi, "").trim();

  const baseStyle = `
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',Arial,sans-serif;background:#eef1f6;color:#1a1b25;padding:24px;font-size:13px;}
    .sheet{max-width:820px;margin:0 auto;background:#fff;border:1px solid #c7c9d6;padding:32px 36px;}
    .lh{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid ${accentColor};padding-bottom:14px;margin-bottom:20px;}
    .lh .brand{font-size:22px;font-weight:800;letter-spacing:.03em;color:${accentColor};}
    .lh .brand-sub{font-size:11px;color:#6B7280;margin-top:2px;}
    .lh .meta{text-align:right;font-size:11.5px;color:#4b4d5c;line-height:1.7;}
    .doc-title{text-align:center;font-size:15px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin:0 0 18px;}
    .ref-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid #c7c9d6;margin-bottom:16px;}
    .ref-grid>div{padding:9px 13px;border-bottom:1px solid #e2e4ed;border-right:1px solid #e2e4ed;}
    .ref-grid>div:nth-child(2n){border-right:none;}
    .ref-grid>div:last-child,.ref-grid>div:nth-last-child(2){border-bottom:none;}
    .rl{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:#6B7280;margin-bottom:3px;}
    .rv{font-weight:600;}
    .section{margin:18px 0;}
    .section h3{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:${accentColor};margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid #e2e4ed;}
    p{line-height:1.75;margin-bottom:10px;font-size:13px;}
    table{width:100%;border-collapse:collapse;margin-bottom:14px;}
    th,td{border:1px solid #c7c9d6;padding:8px 10px;font-size:12px;text-align:left;}
    th{background:#f4f6fb;font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#4b4d5c;}
    ul{padding-left:18px;margin-bottom:10px;}
    li{line-height:1.8;font-size:13px;}
    .sig{display:flex;justify-content:flex-end;margin-top:32px;}
    .sig .box{width:220px;text-align:center;}
    .sig .line{margin-top:44px;border-top:1px solid #1a1b25;padding-top:6px;font-size:11.5px;color:#4b4d5c;}
    .footer{margin-top:18px;text-align:center;font-size:10.5px;color:#9CA3AF;}
    .print-btn{max-width:820px;margin:0 auto 12px;text-align:right;}
    .print-btn button{background:${accentColor};color:#fff;border:none;padding:8px 18px;font-size:13px;font-family:'Segoe UI',Arial,sans-serif;border-radius:4px;cursor:pointer;font-weight:600;}
    @media print{body{background:#fff;padding:0;}.sheet{border:none;max-width:100%;}.print-btn{display:none;}}
  `;

  let body = "";

  if (category === "rfp") {
    switch (doc.docType) {
      case "Tender Notice":
        body = `
          <div class="doc-title">${doc.docType}</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Issuing Authority</div><div class="rv">${opp.entity}</div></div>
            <div><div class="rl">State / Region</div><div class="rv">${opp.state}</div></div>
          </div>
          <div class="section"><h3>Subject</h3>
            <p>Request for Selection (RfS) for setting up of ${opp.capacity} ${opp.technology} Power Project under ${opp.entity}'s renewable energy programme for the state of ${opp.state}.</p>
          </div>
          <div class="section"><h3>Scope</h3>
            <ul>
              <li>Capacity: ${opp.capacity}</li>
              <li>Technology: ${opp.technology}</li>
              <li>Tariff Ceiling: As per Schedule-I of RfS</li>
              <li>PPA Term: 25 years from COD</li>
              <li>Interconnection: As per applicable grid code</li>
            </ul>
          </div>
          <div class="section"><h3>Eligibility Criteria</h3>
            <ul>
              <li>Minimum Net Worth: ₹1.0 Cr per MW of quoted capacity</li>
              <li>Minimum Annual Turnover: ₹1.0 Cr per MW (average of last 3 financial years)</li>
              <li>Prior Renewable Energy Experience: ≥ 50 MW commissioned capacity in India</li>
              <li>Bank Guarantee: ₹10 L per MW of quoted capacity</li>
            </ul>
          </div>
          <div class="section"><h3>Important Dates</h3>
            <table>
              <thead><tr><th>Event</th><th>Date</th></tr></thead>
              <tbody>
                <tr><td>RfS Publication</td><td>${doc.issuedOn}</td></tr>
                <tr><td>Last Date for Queries</td><td>Refer Corrigendum</td></tr>
                <tr><td>Pre-Bid Conference</td><td>Refer Corrigendum</td></tr>
                <tr><td>Bid Submission Deadline</td><td>${opp.deadline}</td></tr>
                <tr><td>Bid Opening</td><td>${opp.deadline}</td></tr>
              </tbody>
            </table>
          </div>`;
        break;

      case "Technical Document":
        body = `
          <div class="doc-title">Technical Specifications</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
            <div><div class="rl">Capacity</div><div class="rv">${opp.capacity}</div></div>
          </div>
          <div class="section"><h3>Module Requirements</h3>
            <table>
              <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
              <tbody>
                <tr><td>Cell Technology</td><td>Mono-PERC or TOPCon (Tier-1 only)</td></tr>
                <tr><td>Minimum Wattage</td><td>540 Wp per module</td></tr>
                <tr><td>Module Efficiency</td><td>≥ 21.5%</td></tr>
                <tr><td>Degradation (Year 1)</td><td>≤ 2%</td></tr>
                <tr><td>Degradation (Linear)</td><td>≤ 0.55% per annum thereafter</td></tr>
                <tr><td>Warranty</td><td>10 years product, 25 years linear performance</td></tr>
                <tr><td>Certifications</td><td>IEC 61215, IEC 61730, BIS IS 14286</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Inverter & BoS Requirements</h3>
            <ul>
              <li>String or central inverter — IEC 62109 certified</li>
              <li>MPPT efficiency ≥ 99.5%; overall efficiency ≥ 98.5%</li>
              <li>Anti-islanding protection, DC arc fault detection mandatory</li>
              <li>Cables: UV-resistant, copper conductor, rated for 1.5× Voc</li>
              <li>Mounting structures: Hot-dip galvanised steel or aluminium alloy</li>
            </ul>
          </div>
          <div class="section"><h3>SCADA & Monitoring</h3>
            <p>Real-time SCADA mandatory with minimum 5-minute data logging interval. Must interface with ${entityShort}'s central monitoring system via OPC-UA or equivalent. Cyber security standards as per CEA Cyber Security Regulations 2021.</p>
          </div>`;
        break;

      case "Commercial Document":
        body = `
          <div class="doc-title">Draft Power Purchase Agreement</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Procurer</div><div class="rv">${opp.entity}</div></div>
            <div><div class="rl">PPA Term</div><div class="rv">25 Years from COD</div></div>
          </div>
          <div class="section"><h3>Article 1 — Definitions</h3>
            <p>"Contracted Capacity" means ${opp.capacity} as specified in the RfS Notice. "COD" means Commercial Operation Date, which is the date on which the Project achieves full Contracted Capacity injection into the grid. "Tariff" means the per-unit rate quoted by the Seller in the Financial Bid and accepted by the Procurer, as set out in Schedule 1.</p>
          </div>
          <div class="section"><h3>Article 3 — Sale and Purchase of Power</h3>
            <p>Subject to the terms hereof, the Seller agrees to sell and the Procurer agrees to purchase electricity generated from the Project at the Tariff for a period of 25 (twenty-five) years from COD. The Seller shall dispatch power in accordance with the schedule issued by the Load Despatch Centre.</p>
          </div>
          <div class="section"><h3>Article 5 — Payment Terms</h3>
            <ul>
              <li>Billing cycle: Monthly on actual units injected</li>
              <li>Payment due: Within 45 days of invoice receipt</li>
              <li>Late payment surcharge: SBI PLR + 3.5% p.a.</li>
              <li>Payment security mechanism: Irrevocable LC or escrow as per MNRE guidelines</li>
            </ul>
          </div>
          <div class="section"><h3>Article 8 — Force Majeure</h3>
            <p>Neither party shall be liable for delay or failure to perform obligations due to Force Majeure events including but not limited to acts of God, war, insurrection, government order, or grid curtailment beyond the Seller's control, subject to notification within 7 days of occurrence.</p>
          </div>`;
        break;

      case "Regulatory Annexure":
        body = `
          <div class="doc-title">Regulatory Annexure — Grid Connectivity</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Issuing Body</div><div class="rv">Central Electricity Authority (CEA)</div></div>
            <div><div class="rl">Applicable to</div><div class="rv">ISTS-connected RE Projects</div></div>
          </div>
          <div class="section"><h3>Applicable Regulations</h3>
            <ul>
              <li>CEA (Technical Standards for Connectivity) Regulations, 2007 (as amended)</li>
              <li>CERC (Grant of Connectivity, Long-term and Medium-term Open Access) Regulations, 2009</li>
              <li>PGCIL Transmission Connectivity Procedures (2023 revision)</li>
              <li>MNRE Grid Integration Guidelines for RE Projects ≥ 5 MW</li>
            </ul>
          </div>
          <div class="section"><h3>Connectivity Requirements</h3>
            <table>
              <thead><tr><th>Requirement</th><th>Standard</th></tr></thead>
              <tbody>
                <tr><td>Substation voltage level</td><td>220 kV or 400 kV as specified by RLDC</td></tr>
                <tr><td>Power factor at injection point</td><td>0.90 lag to 0.95 lead</td></tr>
                <tr><td>Harmonic distortion (THD)</td><td>≤ 5% at PCC</td></tr>
                <tr><td>Protection relay coordination</td><td>As per PGCIL Grid Code</td></tr>
                <tr><td>Communication protocol</td><td>IEC 61850 / DNP3</td></tr>
              </tbody>
            </table>
          </div>`;
        break;

      case "Corrigendum":
        body = `
          <div class="doc-title">Corrigendum</div>
          <div class="ref-grid">
            <div><div class="rl">Corrigendum Ref.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Amends</div><div class="rv">Original RfS Notice</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
          </div>
          <div class="section"><h3>Amendments</h3>
            <table>
              <thead><tr><th>Clause / Section</th><th>Original Text</th><th>Amended Text</th></tr></thead>
              <tbody>
                <tr><td>Schedule I — Bid Submission Deadline</td><td>${opp.deadline}</td><td>Extended — refer amended schedule</td></tr>
                <tr><td>Schedule II — Pre-bid Query Deadline</td><td>T-15 days from bid deadline</td><td>T-20 days from amended bid deadline</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Note</h3>
            <p>All other terms and conditions of the original RfS Notice ref. remain unchanged. Bidders are requested to note the amendments and ensure compliance. This Corrigendum shall form an integral part of the RfS documents.</p>
          </div>`;
        break;

      case "Site Report":
        body = `
          <div class="doc-title">Site Survey Report</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
            <div><div class="rl">State</div><div class="rv">${opp.state}</div></div>
          </div>
          <div class="section"><h3>Site Characteristics</h3>
            <table>
              <thead><tr><th>Parameter</th><th>Observation</th></tr></thead>
              <tbody>
                <tr><td>Reservoir / Land Area Available</td><td>Approx. 120 Ha (usable)</td></tr>
                <tr><td>Water Depth (avg.)</td><td>12 – 18 m (seasonal variation ±2.5 m)</td></tr>
                <tr><td>GHI (annual avg.)</td><td>5.62 kWh/m²/day</td></tr>
                <tr><td>Wind Speed (avg.)</td><td>3.8 m/s at 10 m hub height</td></tr>
                <tr><td>Nearest 220 kV S/S</td><td>Ramagundam (8.2 km)</td></tr>
                <tr><td>Road access</td><td>2-lane state highway within 1.4 km</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Key Observations</h3>
            <ul>
              <li>Water turbidity levels within acceptable limits for floating PV pontoon systems</li>
              <li>Monsoon wave height ≤ 0.6 m — standard anchor design adequate</li>
              <li>Transmission line ROW clearance confirmed with ${entityShort} engineering team</li>
              <li>No protected ecological zones within 3 km radius</li>
            </ul>
          </div>`;
        break;

      default:
        body = `
          <div class="doc-title">${doc.docType}</div>
          <div class="ref-grid">
            <div><div class="rl">Ref. No.</div><div class="rv">${doc.ref}</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.issuedOn}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
            <div><div class="rl">Issuing Authority</div><div class="rv">${opp.entity}</div></div>
          </div>
          <div class="section"><h3>Document Contents</h3>
            <p>${doc.name}</p>
            <p>This document was issued by ${opp.entity} in connection with the tender for ${opp.title} (${opp.capacity}, ${opp.state}). Please refer to the original tender dossier for full terms and conditions.</p>
          </div>`;
    }
  } else {
    // category === "response" — our submitted documents
    switch (doc.docType) {
      case "Technical Response":
        body = `
          <div class="doc-title">Technical Bid</div>
          <div class="ref-grid">
            <div><div class="rl">Submitted By</div><div class="rv">Continuum Energy Pvt. Ltd.</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Status</div><div class="rv">${doc.status}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
          </div>
          <div class="section"><h3>Technical Approach</h3>
            <p>Continuum Energy proposes to develop the ${opp.capacity} ${opp.technology} project in ${opp.state} using best-in-class Tier-1 modules with bifacial technology to maximize generation yield. The design incorporates a fixed-tilt mounting structure optimised for the site's latitude, with a DC:AC ratio of 1.25 to improve capacity utilisation.</p>
          </div>
          <div class="section"><h3>Key Technical Parameters</h3>
            <table>
              <thead><tr><th>Parameter</th><th>Our Proposal</th></tr></thead>
              <tbody>
                <tr><td>Module Technology</td><td>Bifacial Mono-PERC TOPCon, 545–560 Wp</td></tr>
                <tr><td>Inverter Type</td><td>String inverters — 110 kW, IEC 62109</td></tr>
                <tr><td>DC:AC Ratio</td><td>1.25</td></tr>
                <tr><td>Annual CUF (P50)</td><td>23.4%</td></tr>
                <tr><td>Mounting Structure</td><td>Fixed-tilt, HDG steel, 28° tilt angle</td></tr>
                <tr><td>Transformer</td><td>On-site step-up to 33 kV, then 220 kV interconnect</td></tr>
                <tr><td>SCADA</td><td>Continuum IntelliMonitor v3.2 — 5-min data granularity</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Track Record</h3>
            <ul>
              <li>3.2 GW operational solar portfolio across Rajasthan, Gujarat, Karnataka</li>
              <li>12 SECI / NTPC / MSEDCL projects commissioned on time in last 5 years</li>
              <li>ISO 9001:2015 certified EPC and O&M operations</li>
            </ul>
          </div>`;
        break;

      case "Financial Response":
        body = `
          <div class="doc-title">Financial Bid</div>
          <div class="ref-grid">
            <div><div class="rl">Submitted By</div><div class="rv">Continuum Energy Pvt. Ltd.</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Quoted Tariff</div><div class="rv">${opp.tariff}</div></div>
            <div><div class="rl">Bid Outcome</div><div class="rv">${doc.status}</div></div>
          </div>
          <div class="section"><h3>Price Schedule</h3>
            <table>
              <thead><tr><th>Item</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Discovered Tariff (₹/kWh)</td><td><strong>${opp.tariff}</strong></td></tr>
                <tr><td>Tariff Validity Period</td><td>25 years from COD (fixed)</td></tr>
                <tr><td>Capacity Quoted</td><td>${opp.capacity}</td></tr>
                <tr><td>Estimated Annual Generation (P50)</td><td>Refer Technical Bid Annex B</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Cost Build-up Summary (Confidential)</h3>
            <table>
              <thead><tr><th>Cost Head</th><th>₹ Cr / MW</th></tr></thead>
              <tbody>
                <tr><td>Module Supply</td><td>2.85</td></tr>
                <tr><td>BoS (Inverter, Structure, Cable)</td><td>0.92</td></tr>
                <tr><td>Civil & Electrical Works</td><td>0.45</td></tr>
                <tr><td>Transmission (Pooling + STU)</td><td>0.18</td></tr>
                <tr><td>Dev & Pre-dev Costs</td><td>0.12</td></tr>
                <tr><td>Financing Costs (20-yr amortised)</td><td>0.31</td></tr>
                <tr><td><strong>Total Project Cost</strong></td><td><strong>4.83</strong></td></tr>
              </tbody>
            </table>
          </div>`;
        break;

      case "Bank Guarantee":
        body = `
          <div class="doc-title">Bank Guarantee — Bid Security</div>
          <div class="ref-grid">
            <div><div class="rl">BG Ref. No.</div><div class="rv">ICICI/BG/CRE/${opp.id}/2026</div></div>
            <div><div class="rl">Issued On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Issued By</div><div class="rv">ICICI Bank Ltd., Corporate Banking Branch</div></div>
            <div><div class="rl">In Favour Of</div><div class="rv">${opp.entity}</div></div>
          </div>
          <div class="section"><h3>Guarantee Details</h3>
            <table>
              <thead><tr><th>Parameter</th><th>Details</th></tr></thead>
              <tbody>
                <tr><td>Applicant</td><td>Continuum Energy Pvt. Ltd.</td></tr>
                <tr><td>Beneficiary</td><td>${opp.entity}</td></tr>
                <tr><td>BG Amount</td><td>${opp.bidSummary ? opp.bidSummary.bidBond : "As per RfS Schedule"}</td></tr>
                <tr><td>Validity</td><td>180 days from bid submission date</td></tr>
                <tr><td>Guarantee Type</td><td>Unconditional, irrevocable, on-demand</td></tr>
                <tr><td>Status</td><td>${doc.status}</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Terms</h3>
            <p>We, ICICI Bank Ltd., undertake to pay the Beneficiary on demand any amount not exceeding the BG Amount, without demur, without requiring proof or condition, upon receipt of a written demand from the Beneficiary stating that the Applicant has failed to fulfil obligations under the RfS. This guarantee shall be valid until the validity date and shall be extended on request.</p>
          </div>`;
        break;

      case "Qualification Document":
        body = `
          <div class="doc-title">Company Qualification Dossier</div>
          <div class="ref-grid">
            <div><div class="rl">Submitted By</div><div class="rv">Continuum Energy Pvt. Ltd.</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Status</div><div class="rv">${doc.status}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
          </div>
          <div class="section"><h3>Corporate Overview</h3>
            <p>Continuum Energy Pvt. Ltd. is a Gurugram-based renewable energy independent power producer (IPP) with 3.2 GW of operational solar and wind capacity across 7 Indian states. Incorporated in 2009, the company has commissioned 18 utility-scale projects under SECI, NTPC, MSEDCL, RUVNL, and TANGEDCO procurement programs.</p>
          </div>
          <div class="section"><h3>Qualifying Projects (≥ 50 MW Commissioned)</h3>
            <table>
              <thead><tr><th>Project</th><th>Capacity</th><th>Procurer</th><th>COD</th></tr></thead>
              <tbody>
                <tr><td>Rajasthan Solar Phase IV</td><td>200 MW</td><td>SECI</td><td>Mar 2022</td></tr>
                <tr><td>Gujarat RE Park — Zone C</td><td>150 MW</td><td>GUVNL</td><td>Sep 2023</td></tr>
                <tr><td>Karnataka Solar + Storage</td><td>100 MW + 50 MWh</td><td>SPDCL</td><td>Jan 2025</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Certifications</h3>
            <ul>
              <li>ISO 9001:2015 — Quality Management System</li>
              <li>ISO 14001:2015 — Environmental Management</li>
              <li>ISO 45001:2018 — Occupational Health & Safety</li>
            </ul>
          </div>`;
        break;

      case "Financial Eligibility":
        body = `
          <div class="doc-title">Net Worth & Financial Capacity Certificate</div>
          <div class="ref-grid">
            <div><div class="rl">Certified By</div><div class="rv">B.R. Agarwal & Associates, Chartered Accountants</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Status</div><div class="rv">${doc.status}</div></div>
            <div><div class="rl">For Project</div><div class="rv">${opp.title}</div></div>
          </div>
          <div class="section"><h3>Financial Metrics (as of 31 March 2025)</h3>
            <table>
              <thead><tr><th>Metric</th><th>Value (₹ Cr)</th><th>Required (per MW × ${opp.capacity.replace(/[^0-9]/g, "")} MW)</th></tr></thead>
              <tbody>
                <tr><td>Net Worth</td><td>2,840</td><td>${Number(opp.capacity.replace(/[^0-9]/g,"")) * 1} Cr (min)</td></tr>
                <tr><td>Avg. Annual Turnover (3Y)</td><td>1,420</td><td>${Number(opp.capacity.replace(/[^0-9]/g,"")) * 1} Cr (min)</td></tr>
                <tr><td>Total Assets</td><td>7,650</td><td>—</td></tr>
                <tr><td>Total Debt</td><td>4,210</td><td>—</td></tr>
                <tr><td>Debt-Equity Ratio</td><td>1.48</td><td>≤ 3.0 (per RfS)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Certification</h3>
            <p>We certify that the above financial data has been extracted from audited financial statements of Continuum Energy Pvt. Ltd. for FY 2024-25, and that the company meets all financial eligibility criteria specified in the RfS.</p>
          </div>`;
        break;

      case "Land Document":
        body = `
          <div class="doc-title">Land Pre-Commitment Confirmation</div>
          <div class="ref-grid">
            <div><div class="rl">Submitted By</div><div class="rv">Continuum Energy Pvt. Ltd.</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Status</div><div class="rv">${doc.status}</div></div>
            <div><div class="rl">Land % Pre-Committed</div><div class="rv">80%</div></div>
          </div>
          <div class="section"><h3>Land Status Summary</h3>
            <table>
              <thead><tr><th>Parcel / Survey No.</th><th>Village</th><th>Area (Ha)</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>SY No. 142/A, 143</td><td>Bhadla, Jodhpur</td><td>112</td><td>Lease signed</td></tr>
                <tr><td>SY No. 201, 205/B</td><td>Bhadla, Jodhpur</td><td>68</td><td>Lease signed</td></tr>
                <tr><td>SY No. 318</td><td>Phalodi, Jodhpur</td><td>45</td><td>MoU executed</td></tr>
                <tr><td>Remaining 20%</td><td>Various</td><td>56</td><td>Acquisition ongoing</td></tr>
              </tbody>
            </table>
          </div>
          <div class="section"><h3>Declaration</h3>
            <p>Continuum Energy Pvt. Ltd. confirms that 80% (225 Ha) of the total required land (281 Ha) has been pre-committed through executed lease agreements or binding MoUs. The remaining 20% is expected to be acquired prior to Financial Close, with no encumbrances or litigation pending on the pre-committed parcels.</p>
          </div>`;
        break;

      default:
        body = `
          <div class="doc-title">${doc.docType}</div>
          <div class="ref-grid">
            <div><div class="rl">Document</div><div class="rv">${doc.name}</div></div>
            <div><div class="rl">Submitted On</div><div class="rv">${doc.submittedOn}</div></div>
            <div><div class="rl">Status</div><div class="rv">${doc.status}</div></div>
            <div><div class="rl">Project</div><div class="rv">${opp.title}</div></div>
          </div>
          <div class="section"><h3>Document Details</h3>
            <p>This document was submitted by Continuum Energy Pvt. Ltd. in response to the tender for ${opp.title} (${opp.capacity}, ${opp.state}). Please refer to the bid submission dossier for the complete document set.</p>
          </div>`;
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${doc.name} — OppIQ</title>
<style>${baseStyle}</style>
</head>
<body>
<div class="print-btn"><button onclick="window.print()">Save as PDF (Print → Save as PDF)</button></div>
<div class="sheet">
  <div class="lh">
    <div>
      <div class="brand">${category === "rfp" ? opp.entity : "Continuum Energy Pvt. Ltd."}</div>
      <div class="brand-sub">${category === "rfp" ? "Issuing Authority — RfS / Tender Documents" : "Renewable Energy — Business Development"}</div>
    </div>
    <div class="meta">
      Project: ${opp.title}<br/>
      Capacity: ${opp.capacity}<br/>
      State: ${opp.state}
    </div>
  </div>
  ${body}
  <div class="sig"><div class="box"><div class="line">${category === "rfp" ? "Authorised Signatory<br/>" + opp.entity : "Authorised Signatory<br/>Continuum Energy Pvt. Ltd."}</div></div></div>
  <div class="footer">This is a sample document generated by OppIQ for demonstration purposes. Not a real transaction.</div>
</div>
</body>
</html>`;
}

/* ----------------------------------------------------------
   PIPELINE STEPPER & ACTIVITY LOG HELPERS
   (shared by Run Intelligence Scan + Document Forensics)
   ---------------------------------------------------------- */
function renderStepper(stages, activeIndex) {
  return stages
    .map((label, i) => {
      let cls = "";
      let circleContent = i + 1;
      if (i < activeIndex) {
        cls = "is-done";
        circleContent = ICONS.checkCircle;
      } else if (i === activeIndex) {
        cls = "is-active";
      }
      return `
        <div class="pipeline-step ${cls}">
          <div class="pipeline-step__connector"></div>
          <div class="pipeline-step__circle">${circleContent}</div>
          <div class="pipeline-step__label">${label}</div>
        </div>`;
    })
    .join("");
}

function appendLogEntry(logEl, entry) {
  const div = document.createElement("div");
  div.className = "activity-log__entry";
  const seconds = (entry.time / 1000).toFixed(1);
  div.innerHTML = `
    <span class="activity-log__dot activity-log__dot--${entry.type}"></span>
    <span class="activity-log__time">[${seconds}s]</span>
    <span class="activity-log__message">${entry.text}</span>`;
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}

function renderLogEntries(logs) {
  return logs
    .map((entry) => {
      const seconds = (entry.time / 1000).toFixed(1);
      return `
      <div class="activity-log__entry">
        <span class="activity-log__dot activity-log__dot--${entry.type}"></span>
        <span class="activity-log__time">[${seconds}s]</span>
        <span class="activity-log__message">${entry.text}</span>
      </div>`;
    })
    .join("");
}

/* ----------------------------------------------------------
   DOCUMENT FORENSICS VIEW (secondary feature)
   ---------------------------------------------------------- */
let forensicsRunning = false;
let forensicsComplete = false;
let forensicsEscalated = false;
let documentAttached = false;
let attachedFileName = null;

let shareAccessList = [];
let sharePendingIds = [];
let bpApprovalStatus = null;
let activeBusinessPlan = BUSINESS_PLAN;
const resolvedGaps = {};

function renderDocumentForensics() {
  return `
    <div class="content-breadcrumb" data-action="back-dashboard">${ICONS.chevronLeft} Back to Opportunity Insights</div>

    <div class="page-header">
      <div>
        <div class="page-title"><span class="sparkle">${ICONS.search}</span> Document Forensics</div>
        <div class="page-subtitle">Secondary diligence tool — cross-checks supporting vendor documents for consistency before payment approval.</div>
      </div>
    </div>

    <div class="forensics-view stack" style="gap:18px;">
      ${documentAttached ? renderAttachedDocCard() : renderUploadCard()}

      <div class="card ${documentAttached && (forensicsRunning || forensicsComplete) ? "" : "hidden"}" id="forensicsLogCard">
        <div class="card__title">Forensic Analysis</div>
        <div class="pipeline-stepper" id="forensicsStepper">${renderStepper(FORENSICS_STAGES, forensicsComplete ? FORENSICS_STAGES.length : 0)}</div>
        <div class="progress-bar"><div class="progress-bar__fill" id="forensicsProgressFill" style="width:${forensicsComplete ? 100 : 0}%"></div></div>
        <div class="progress-meta">
          <span id="forensicsProgressLabel">${forensicsComplete ? "Document forensics complete." : "Initializing..."}</span>
          <strong id="forensicsProgressPct">${forensicsComplete ? 100 : 0}%</strong>
        </div>
      </div>

      <div class="card ${documentAttached && forensicsComplete ? "" : "hidden"}" id="forensicsFindingsCard">
        <div class="card__title">Forensic Findings</div>
        <div class="findings-summary" id="forensicsSummary">${forensicsComplete ? renderForensicsSummaryHtml() : ""}</div>
        <div class="findings-list" id="forensicsFindingsList">${forensicsComplete ? renderForensicsFindingsListHtml() : ""}</div>
        <div class="findings-actions" id="forensicsActions">${forensicsComplete ? renderFindingsActionsHtml() : ""}</div>
      </div>
    </div>
  `;
}

function renderUploadCard() {
  return `
    <div class="card">
      <div class="card__title">Attach Document</div>
      <div class="dropzone" id="dropzone" data-action="browse-file">
        <div class="dropzone__icon">${ICONS.upload}</div>
        <div class="dropzone__title">Drag and drop a document here</div>
        <div class="dropzone__desc">or <span class="dropzone__browse">click to browse</span> — PDF, Word, Excel, or image files supported</div>
        <input type="file" id="invoiceFileInput" class="dropzone__input" accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" tabindex="-1" />
      </div>
      <div class="upload-progress hidden" id="uploadProgressWrap">
        <div class="upload-progress__row">
          <span class="upload-progress__name" id="uploadFileName"></span>
          <span class="upload-progress__pct" id="uploadProgressPct">0%</span>
        </div>
        <div class="progress-bar"><div class="progress-bar__fill" id="uploadProgressFill" style="width:0%"></div></div>
      </div>
    </div>`;
}

function renderAttachedDocCard() {
  return `
    <div class="card">
      <div class="card__title">Source Document</div>
      <div class="doc-tile">
        <div class="doc-tile__icon">${ICONS.fileText}</div>
        <div class="doc-tile__info">
          <div class="doc-tile__name">${SAMPLE_INVOICE.invoiceNo} — Tax Invoice (extracted)</div>
          <div class="doc-tile__meta">${SAMPLE_INVOICE.vendor.name} · Uploaded as "${escapeHtml(attachedFileName)}" · Linked to CE-OPP-001 (Bikaner, Rajasthan)</div>
        </div>
        <a class="doc-tile__link" href="./assets/sample-documents/Invoice_SES-2026-0734.html" target="_blank" rel="noopener">
          Preview Document ${ICONS.externalLink}
        </a>
      </div>
      <div class="upload-success">
        <span class="upload-success__dot">${ICONS.checkCircle}</span>
        <span>Document uploaded successfully.</span>
        ${forensicsRunning || forensicsComplete ? "" : `<button class="link-btn" data-action="replace-document">Replace document</button>`}
      </div>
      <button class="btn btn--primary" id="runForensicsBtn" data-action="run-forensics" ${forensicsRunning || forensicsComplete ? "disabled" : ""}>
        ${ICONS.zap} ${forensicsComplete ? "Analysis Complete" : forensicsRunning ? "Analyzing..." : "Run Forensic Analysis"}
      </button>
    </div>`;
}

function attachDocument(file) {
  if (documentAttached) return;
  const filename = file && file.name ? file.name : "EPC_Invoice_Sunline.pdf";

  const dropzone = document.getElementById("dropzone");
  const progressWrap = document.getElementById("uploadProgressWrap");
  const nameEl = document.getElementById("uploadFileName");
  const fillEl = document.getElementById("uploadProgressFill");
  const pctEl = document.getElementById("uploadProgressPct");
  if (!dropzone || !progressWrap) return;

  dropzone.classList.add("hidden");
  progressWrap.classList.remove("hidden");
  nameEl.textContent = filename;

  let pct = 0;
  const interval = setInterval(() => {
    pct = Math.min(pct + Math.random() * 28 + 12, 100);
    fillEl.style.width = `${pct}%`;
    pctEl.textContent = `${Math.round(pct)}%`;
    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        documentAttached = true;
        attachedFileName = filename;
        render();
        showToast(`"${filename}" uploaded successfully.`, "success");
      }, 350);
    }
  }, 220);
}

function runForensicsScan() {
  if (forensicsRunning || forensicsComplete) return;
  forensicsRunning = true;
  render();

  const stepperEl = document.getElementById("forensicsStepper");
  const fillEl = document.getElementById("forensicsProgressFill");
  const labelEl = document.getElementById("forensicsProgressLabel");
  const pctEl = document.getElementById("forensicsProgressPct");

  FORENSICS_LOGS.forEach((entry) => {
    setTimeout(() => {
      if (!stepperEl.isConnected) return;
      const pct = Math.min(Math.round((entry.time / FORENSICS_TOTAL_DURATION) * 100), 100);
      fillEl.style.width = `${pct}%`;
      pctEl.textContent = `${pct}%`;
      labelEl.textContent = entry.text;
    }, entry.time);
  });

  FORENSICS_STAGE_TIMINGS.forEach((time, i) => {
    setTimeout(() => {
      if (!stepperEl.isConnected) return;
      stepperEl.innerHTML = renderStepper(FORENSICS_STAGES, i);
    }, time);
  });

  setTimeout(() => {
    forensicsRunning = false;
    forensicsComplete = true;

    if (stepperEl.isConnected) {
      stepperEl.innerHTML = renderStepper(FORENSICS_STAGES, FORENSICS_STAGES.length);
      fillEl.style.width = "100%";
      pctEl.textContent = "100%";
      labelEl.textContent = "Document forensics complete.";
    }

    const btn = document.getElementById("runForensicsBtn");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `${ICONS.zap} Analysis Complete`;
    }

    document.getElementById("forensicsFindingsCard")?.classList.remove("hidden");
    revealForensicsFindings();
  }, FORENSICS_TOTAL_DURATION + 400);
}

function renderForensicsSummaryHtml() {
  const passCount = FORENSICS_FINDINGS.filter((f) => f.status === "pass").length;
  const warnCount = FORENSICS_FINDINGS.filter((f) => f.status === "warning").length;
  return `
    <span class="pill pill--low">${passCount} Passed</span>
    <span class="pill pill--medium">${warnCount} Flagged for Review</span>`;
}

function renderForensicsFindingsListHtml() {
  return FORENSICS_FINDINGS.map(
    (f) => `
    <div class="finding-item finding-item--${f.status}">
      <div class="finding-item__icon">${f.status === "pass" ? ICONS.checkCircle : ICONS.alertCircle}</div>
      <div class="finding-item__text">${f.text}</div>
    </div>`
  ).join("");
}

function renderFindingsActionsHtml() {
  const amount = `₹${SAMPLE_INVOICE.total.split(".")[0]}`;

  if (forensicsEscalated) {
    return `
      <div class="upload-success" style="margin: 0;">
        <span class="upload-success__dot">${ICONS.checkCircle}</span>
        <span>Escalated to Finance — payment of ${amount} against ${SAMPLE_INVOICE.invoiceNo} is on hold pending review.</span>
      </div>`;
  }

  return `
    <div class="findings-actions__text">2 items flagged for review. Recommended next step: escalate to Finance and hold payment of ${amount} pending verification.</div>
    <button class="btn btn--primary" data-action="escalate-forensics">${ICONS.alertTriangle} Escalate to Finance &amp; Hold Payment</button>
  `;
}

function revealForensicsFindings() {
  const summary = document.getElementById("forensicsSummary");
  const list = document.getElementById("forensicsFindingsList");
  const actions = document.getElementById("forensicsActions");
  if (!summary || !list) return;

  summary.innerHTML = renderForensicsSummaryHtml();
  list.innerHTML = renderForensicsFindingsListHtml();
  if (actions) actions.innerHTML = renderFindingsActionsHtml();

  showToast("Document forensics complete — 2 items flagged for review.", "warning");
}

/* ----------------------------------------------------------
   BUSINESS PLAN VIEW
   ---------------------------------------------------------- */
function renderBusinessPlan() {
  const bp = activeBusinessPlan;
  const opp = getOpportunity(bp.opportunityId);

  return `
    <div class="content-breadcrumb" data-action="back-detail" data-id="${bp.opportunityId}">${ICONS.chevronLeft} Back to ${bp.opportunityId}</div>

    <div class="page-header">
      <div>
        <div class="page-title"><span class="sparkle">${ICONS.sparkle}</span> Business Plan — ${opp.title}</div>
        <div class="page-subtitle">Auto-drafted by OppIQ for leadership review. Verify all figures before external distribution.</div>
      </div>
    </div>

    <div class="bp-view">
      <div class="bp-meta">
        Generated ${bp.generatedOn} · Opportunity ${bp.opportunityId} · ${opp.entity}, ${opp.state}
        ${bp.version ? `<span class="bp-version-badge">${bp.version}</span>` : ""}
      </div>

      <div class="bp-actions">
        <button class="btn btn--secondary" data-action="export" data-format="Word">${ICONS.download} Export to Word</button>
        <button class="btn btn--secondary" data-action="export" data-format="Excel">${ICONS.download} Export to Excel</button>
        <button class="btn btn--secondary" data-action="export" data-format="Share">${ICONS.share} Share</button>
      </div>

      <div class="bp-approval-wrap" id="bpApprovalWrap">${renderBpApprovalBanner()}</div>

      <section class="bp-section">
        <h2>Executive Summary</h2>
        ${bp.executiveSummary.map((p) => `<p>${p}</p>`).join("")}
      </section>

      <section class="bp-section">
        <h2>Financial Overview</h2>
        <div class="kpi-grid">
          ${bp.financialOverview
            .map(
              (k) => `
            <div class="kpi-card">
              <div class="kpi-card__label">${k.label}</div>
              <div class="kpi-card__value">${k.value}</div>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <section class="bp-section">
        <h2>Project Timeline</h2>
        <div class="timeline-bar">
          ${bp.timeline.map((t) => `<div class="timeline-bar__seg" style="flex:${t.months}" title="${t.phase} (${t.window})"></div>`).join("")}
        </div>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>Phase</th><th>Window</th></tr></thead>
            <tbody>
              ${bp.timeline.map((t) => `<tr><td class="cell-title">${t.phase}</td><td>${t.window}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="bp-section">
        <h2>Competitive Positioning</h2>
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr><th>Bidder</th><th>Capacity</th><th>Tariff Strategy</th><th>Relative Position</th></tr>
            </thead>
            <tbody>
              ${bp.competitivePositioning
                .map(
                  (c) => `
                <tr>
                  <td class="cell-title">${c.bidder}</td>
                  <td>${c.capacity}</td>
                  <td>${c.strategy}</td>
                  <td>${c.position}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="bp-section">
        <h2>Financing Structure</h2>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>Source</th><th>Amount</th><th>Share</th><th>Terms</th></tr></thead>
            <tbody>
              ${bp.financingStructure
                .map(
                  (f) => `
                <tr>
                  <td class="cell-title">${f.source}</td>
                  <td>${f.amount}</td>
                  <td>${f.share}</td>
                  <td>${f.terms}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="bp-section">
        <h2>Risk Register</h2>
        ${renderRiskRegister(bp.riskRegister)}
      </section>

      <section class="bp-section">
        <h2>Recommended Next Steps</h2>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>Step</th><th>Owner</th><th>Target</th><th>Status</th></tr></thead>
            <tbody>
              ${bp.nextSteps
                .map(
                  (s) => `
                <tr>
                  <td class="cell-title">${s.step}</td>
                  <td>${s.owner}</td>
                  <td>${s.target}</td>
                  <td><span class="pill pill--${nextStepPillClass(s.status)}">${s.status}</span></td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderBpApprovalBanner() {
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  if (bpApprovalStatus === "approved") {
    return `
      <div class="bp-approval-banner bp-approval-banner--approved">
        <span class="bp-approval-icon">${ICONS.checkCircle}</span>
        <span class="bp-approval-text">Business plan <strong>approved</strong> by Arjun Kapoor on ${today}. Ready for distribution.</span>
        <button class="link-btn" data-action="bp-reconsider">Reconsider</button>
      </div>`;
  }
  if (bpApprovalStatus === "rejected") {
    return `
      <div class="bp-approval-banner bp-approval-banner--rejected">
        <span class="bp-approval-icon">${ICONS.alertCircle}</span>
        <div class="bp-approval-text">
          Business plan <strong>rejected</strong> on ${today}. The AI can regenerate an improved version based on the latest data.
        </div>
        <div class="bp-approval-actions">
          <button class="link-btn" data-action="bp-reconsider">Restore original</button>
          <button class="btn btn--primary btn--sm" data-action="bp-regenerate">${ICONS.sparkle} Regenerate Plan</button>
        </div>
      </div>`;
  }
  return `
    <div class="bp-approval-banner bp-approval-banner--pending">
      <span class="bp-approval-icon">${ICONS.alertTriangle}</span>
      <span class="bp-approval-text">This business plan is pending leadership review. Approve to mark it ready for distribution, or reject to send back for revision.</span>
      <div class="bp-approval-actions">
        <button class="btn btn--reject" data-action="bp-reject">${ICONS.x} Reject</button>
        <button class="btn btn--approve" data-action="bp-approve">${ICONS.checkCircle} Approve</button>
      </div>
    </div>`;
}

function nextStepPillClass(status) {
  if (status === "In Progress") return "info";
  if (status === "Pending") return "medium";
  return "neutral";
}

/* ----------------------------------------------------------
   BUSINESS PLAN EXPORT (Word / Excel / Share)
   ---------------------------------------------------------- */
function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buildBusinessPlanWordHtml() {
  const bp = activeBusinessPlan;
  const opp = getOpportunity(bp.opportunityId);
  return `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Business Plan — ${bp.opportunityId}</title>
<style>
  body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #1a1b25; }
  h1 { font-size: 22pt; color: #4F46E5; margin-bottom: 2px; }
  h2 { font-size: 14pt; color: #1a1b25; border-bottom: 1px solid #CBD5E1; padding-bottom: 4px; margin-top: 22px; }
  .subtitle { font-size: 13pt; color: #475569; margin-bottom: 4px; }
  .meta { color: #64748B; font-size: 10pt; margin-bottom: 18px; }
  p { line-height: 1.5; margin: 8px 0; }
  table { border-collapse: collapse; width: 100%; margin: 8px 0 16px; }
  th, td { border: 1px solid #CBD5E1; padding: 6px 10px; font-size: 10pt; text-align: left; vertical-align: top; }
  th { background: #EEF2FF; color: #1a1b25; }
</style>
</head>
<body>
  <h1>Business Plan</h1>
  <div class="subtitle">${opp.title}</div>
  <div class="meta">Generated ${bp.generatedOn} &middot; Opportunity ${bp.opportunityId} &middot; ${opp.entity}, ${opp.state}</div>

  <h2>Executive Summary</h2>
  ${bp.executiveSummary.map((p) => `<p>${p}</p>`).join("\n")}

  <h2>Financial Overview</h2>
  <table>
    ${bp.financialOverview.map((k) => `<tr><th>${k.label}</th><td>${k.value}</td></tr>`).join("\n")}
  </table>

  <h2>Project Timeline</h2>
  <table>
    <tr><th>Phase</th><th>Window</th></tr>
    ${bp.timeline.map((t) => `<tr><td>${t.phase}</td><td>${t.window}</td></tr>`).join("\n")}
  </table>

  <h2>Competitive Positioning</h2>
  <table>
    <tr><th>Bidder</th><th>Capacity</th><th>Tariff Strategy</th><th>Relative Position</th></tr>
    ${bp.competitivePositioning.map((c) => `<tr><td>${c.bidder}</td><td>${c.capacity}</td><td>${c.strategy}</td><td>${c.position}</td></tr>`).join("\n")}
  </table>

  <h2>Financing Structure</h2>
  <table>
    <tr><th>Source</th><th>Amount</th><th>Share</th><th>Terms</th></tr>
    ${bp.financingStructure.map((f) => `<tr><td>${f.source}</td><td>${f.amount}</td><td>${f.share}</td><td>${f.terms}</td></tr>`).join("\n")}
  </table>

  <h2>Risk Register</h2>
  <table>
    <tr><th>Severity</th><th>Risk</th><th>Mitigation</th></tr>
    ${bp.riskRegister.map((r) => `<tr><td>${r.severity}</td><td>${r.risk}</td><td>${r.mitigation}</td></tr>`).join("\n")}
  </table>

  <h2>Recommended Next Steps</h2>
  <table>
    <tr><th>Step</th><th>Owner</th><th>Target</th><th>Status</th></tr>
    ${bp.nextSteps.map((s) => `<tr><td>${s.step}</td><td>${s.owner}</td><td>${s.target}</td><td>${s.status}</td></tr>`).join("\n")}
  </table>
</body>
</html>`;
}

function csvRow(cells) {
  return (
    cells
      .map((c) => {
        const s = c == null ? "" : String(c);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
      })
      .join(",") + "\r\n"
  );
}

function buildBusinessPlanCsv() {
  const bp = activeBusinessPlan;
  const opp = getOpportunity(bp.opportunityId);
  let csv = "";

  csv += csvRow([`Business Plan — ${opp.title}`]);
  csv += csvRow([`Generated ${bp.generatedOn}`, `Opportunity ${bp.opportunityId}`, `${opp.entity}, ${opp.state}`]);
  csv += csvRow([]);

  csv += csvRow(["Financial Overview"]);
  bp.financialOverview.forEach((k) => csv += csvRow([k.label, k.value]));
  csv += csvRow([]);

  csv += csvRow(["Project Timeline"]);
  csv += csvRow(["Phase", "Window"]);
  bp.timeline.forEach((t) => csv += csvRow([t.phase, t.window]));
  csv += csvRow([]);

  csv += csvRow(["Competitive Positioning"]);
  csv += csvRow(["Bidder", "Capacity", "Tariff Strategy", "Relative Position"]);
  bp.competitivePositioning.forEach((c) => csv += csvRow([c.bidder, c.capacity, c.strategy, c.position]));
  csv += csvRow([]);

  csv += csvRow(["Financing Structure"]);
  csv += csvRow(["Source", "Amount", "Share", "Terms"]);
  bp.financingStructure.forEach((f) => csv += csvRow([f.source, f.amount, f.share, f.terms]));
  csv += csvRow([]);

  csv += csvRow(["Risk Register"]);
  csv += csvRow(["Severity", "Risk", "Mitigation"]);
  bp.riskRegister.forEach((r) => csv += csvRow([r.severity, r.risk, r.mitigation]));
  csv += csvRow([]);

  csv += csvRow(["Recommended Next Steps"]);
  csv += csvRow(["Step", "Owner", "Target", "Status"]);
  bp.nextSteps.forEach((s) => csv += csvRow([s.step, s.owner, s.target, s.status]));

  return csv;
}

function copyShareLink() {
  const bp = activeBusinessPlan;
  const shareUrl = `${window.location.origin}${window.location.pathname}?plan=${bp.opportunityId}`;

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = shareUrl;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      /* clipboard unavailable */
    }
    document.body.removeChild(textarea);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrl).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  showToast("Shareable link copied to clipboard.", "success");
}

/* ----------------------------------------------------------
   DATA GAP MODAL
   ---------------------------------------------------------- */
function openDataGapModal(oppId) {
  openInfoModal(renderDataGapModalHtml(oppId));
}

function renderDataGapModalHtml(oppId) {
  const opp = getOpportunity(oppId);
  if (!opp || !opp.dataGaps) return "";

  const resolved = resolvedGaps[oppId] || new Set();
  const requiredGaps  = opp.dataGaps.filter(g => g.required);
  const allRequiredDone = requiredGaps.every(g => resolved.has(g.id));
  const totalDone = opp.dataGaps.filter(g => resolved.has(g.id)).length;
  const pct = Math.round((totalDone / opp.dataGaps.length) * 100);

  const gapItems = opp.dataGaps.map(gap => {
    const done = resolved.has(gap.id);
    return `
      <div class="gap-item ${done ? "gap-item--resolved" : ""}">
        <div class="gap-item__icon">${done ? ICONS.checkCircle : ICONS.fileText}</div>
        <div class="gap-item__info">
          <div class="gap-item__label">
            ${gap.label}
            <span class="gap-tag gap-tag--${gap.required ? "required" : "optional"}">${gap.required ? "Required" : "Optional"}</span>
          </div>
          <div class="gap-item__desc">${gap.desc}</div>
        </div>
        <div class="gap-item__action">
          ${done
            ? `<span class="gap-uploaded-badge">${ICONS.checkCircle} Uploaded</span>`
            : `<button class="btn btn--secondary btn--sm" data-action="mark-gap-resolved" data-oppid="${oppId}" data-gapid="${gap.id}">Upload</button>`}
        </div>
      </div>`;
  }).join("");

  return `
    <div class="modal__header">
      <div class="modal__title">${ICONS.fileText} Resolve Data Gaps — ${oppId}</div>
      <button class="modal__close" data-action="close-info-modal">${ICONS.x}</button>
    </div>
    <div class="modal__subtitle">Upload the required documents below. Once all required items are submitted, OppIQ will re-score this opportunity and unlock business plan generation.</div>

    <div class="gap-progress-row">
      <span class="gap-progress-label">${totalDone} of ${opp.dataGaps.length} documents submitted</span>
      <span class="gap-progress-pct">${pct}%</span>
    </div>
    <div class="progress-bar" style="margin-bottom:18px"><div class="progress-bar__fill" style="width:${pct}%"></div></div>

    <div class="gap-list">${gapItems}</div>

    <div class="modal__footer">
      ${allRequiredDone
        ? `<button class="btn btn--primary" data-action="rescore-opportunity" data-id="${oppId}">${ICONS.zap} Re-Score Opportunity</button>`
        : `<span style="font-size:13px;color:var(--text-muted)">Upload all required documents to enable re-scoring.</span>`}
    </div>`;
}

/* ----------------------------------------------------------
   SHARE MODAL
   ---------------------------------------------------------- */
function openShareModal() {
  openInfoModal(renderShareModalHtml());
}

function renderShareModalHtml() {
  const pendingChips = sharePendingIds.map((id) => {
    const c = COLLEAGUES.find((c) => c.id === id);
    return `<span class="share-chip" style="background:${c.color}20;color:${c.color}">${c.initials}<button class="share-chip__remove" data-action="share-remove-pending" data-id="${id}">×</button></span>`;
  }).join("");

  const accessRows = shareAccessList.map((item) => {
    const c = COLLEAGUES.find((c) => c.id === item.id);
    return `
      <div class="share-access-item">
        <div class="share-avatar" style="background:${c.color}20;color:${c.color}">${c.initials}</div>
        <div class="share-access-info">
          <div class="share-access-name">${c.name}</div>
          <div class="share-access-email">${c.email}</div>
        </div>
        <select class="share-perm-select" data-action="share-change-perm" data-id="${c.id}">
          <option value="view" ${item.permission === "view" ? "selected" : ""}>Can view</option>
          <option value="edit" ${item.permission === "edit" ? "selected" : ""}>Can edit</option>
          <option value="remove">Remove access</option>
        </select>
      </div>`;
  }).join("");

  return `
    <div class="modal__header">
      <div class="modal__title">${ICONS.share} Share Business Plan</div>
      <button class="modal__close" data-action="close-info-modal">${ICONS.x}</button>
    </div>

    <div class="share-search-row">
      <div class="share-search-wrap">
        <div class="share-chips-input" id="shareChipsInput">
          ${pendingChips}
          <input type="text" id="shareSearchInput" class="share-search-input" placeholder="${sharePendingIds.length ? "" : "Add people…"}" autocomplete="off" />
        </div>
        <div class="share-perm-default">
          <select id="shareDefaultPerm">
            <option value="view">Can view</option>
            <option value="edit">Can edit</option>
          </select>
        </div>
      </div>
      <button class="btn btn--primary" data-action="share-send" ${sharePendingIds.length === 0 ? "disabled" : ""}>Send</button>
    </div>

    <div id="shareSuggestions" class="share-suggestions hidden"></div>

    <div class="share-section-label">People with access</div>

    <div class="share-owner-row">
      <div class="share-avatar" style="background:#EEF2FF;color:#4F46E5">AK</div>
      <div class="share-access-info">
        <div class="share-access-name">Arjun Kapoor <span class="share-you-tag">(you)</span></div>
        <div class="share-access-email">arjun.kapoor@continuumenergy.com</div>
      </div>
      <span class="share-owner-tag">Owner</span>
    </div>

    ${accessRows}

    <div class="share-divider"></div>

    <div class="share-link-row">
      <div class="share-link-icon">${ICONS.externalLink}</div>
      <div class="share-link-info">
        <div class="share-link-label">Copy link</div>
        <div class="share-link-sub">Only people added above can open this plan</div>
      </div>
      <button class="btn btn--secondary" data-action="share-copy-link">Copy link</button>
    </div>`;
}

function renderShareSuggestions(query) {
  const el = document.getElementById("shareSuggestions");
  if (!el) return;
  const q = query.trim().toLowerCase();
  if (!q) { el.classList.add("hidden"); return; }

  const taken = new Set([...sharePendingIds, ...shareAccessList.map((a) => a.id)]);
  const matches = COLLEAGUES.filter(
    (c) => !taken.has(c.id) &&
      (c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.email.includes(q))
  );

  el.innerHTML = matches.length === 0
    ? `<div class="share-suggestion-empty">No matching colleagues found.</div>`
    : matches.map((c) => `
        <button class="share-suggestion-item" data-action="share-add-pending" data-id="${c.id}">
          <div class="share-avatar share-avatar--sm" style="background:${c.color}20;color:${c.color}">${c.initials}</div>
          <div>
            <div class="share-sugg-name">${c.name} <span class="share-sugg-role-inline">· ${c.role}</span></div>
            <div class="share-sugg-email">${c.email}</div>
          </div>
        </button>`).join("");
  el.classList.remove("hidden");
}

/* ----------------------------------------------------------
   BUSINESS PLAN GENERATION MODAL
   ---------------------------------------------------------- */
const BP_GEN_STAGES = [
  "Analyzing opportunity data...",
  "Compiling financial model...",
  "Benchmarking competitive landscape...",
  "Drafting executive summary & risk register...",
  "Finalizing business plan..."
];

const BP_GEN_DURATION = 5000;

function openBusinessPlanGenModal(regenerate = false) {
  const backdrop = document.getElementById("bpGenBackdrop");
  const modal = document.getElementById("bpGenModal");

  modal.innerHTML = `
    <div class="modal__header">
      <div class="modal__title"><span class="sparkle">${ICONS.sparkle}</span> ${regenerate ? "Regenerating Business Plan" : "Generating Business Plan"}</div>
    </div>
    <div class="modal__subtitle">${regenerate
      ? `OppIQ is producing an improved version of the business plan for ${BUSINESS_PLAN.opportunityId} — ${getOpportunity(BUSINESS_PLAN.opportunityId).title} using the latest intelligence data.`
      : `OppIQ is compiling a structured business plan for ${BUSINESS_PLAN.opportunityId} — ${getOpportunity(BUSINESS_PLAN.opportunityId).title}.`
    }</div>
    <div class="progress-bar"><div class="progress-bar__fill" id="bpProgressFill" style="width:0%"></div></div>
    <div class="progress-meta">
      <span id="bpProgressLabel">${BP_GEN_STAGES[0]}</span>
      <strong id="bpProgressPct">0%</strong>
    </div>
  `;
  backdrop.classList.add("is-visible");

  const stepDuration = BP_GEN_DURATION / BP_GEN_STAGES.length;
  BP_GEN_STAGES.forEach((label, i) => {
    setTimeout(() => {
      const labelEl = document.getElementById("bpProgressLabel");
      const fillEl = document.getElementById("bpProgressFill");
      const pctEl = document.getElementById("bpProgressPct");
      if (!labelEl) return;
      const pct = Math.round(((i + 1) / BP_GEN_STAGES.length) * 100);
      labelEl.textContent = label;
      fillEl.style.width = `${pct}%`;
      pctEl.textContent = `${pct}%`;
    }, i * stepDuration);
  });

  setTimeout(() => {
    backdrop.classList.remove("is-visible");
    if (regenerate) activeBusinessPlan = BUSINESS_PLAN_V2;
    bpApprovalStatus = null;
    navigate("business-plan");
    showToast(regenerate
      ? `Business plan regenerated for ${activeBusinessPlan.opportunityId}. Ready for review.`
      : `Business plan generated for ${activeBusinessPlan.opportunityId}.`, "success");
  }, BP_GEN_DURATION + 400);
}

/* ----------------------------------------------------------
   HOW OPPIQ THINKS VIEW
   ---------------------------------------------------------- */
function renderHowItThinks() {
  return `
    <div class="content-breadcrumb" data-action="back-dashboard">${ICONS.chevronLeft} Back to Opportunity Insights</div>

    <div class="page-header">
      <div>
        <div class="page-title"><span class="sparkle">${ICONS.bookOpen}</span> How OppIQ Thinks</div>
        <div class="page-subtitle">A look under the hood at how OppIQ turns public energy-sector signals into a prioritized action list.</div>
      </div>
    </div>

    <div class="think-steps">
      ${HOW_IT_THINKS_STEPS.map(
        (step, i) => `
        <div class="think-step">
          <div class="think-step__rail">
            <div class="think-step__number">${i + 1}</div>
            ${i < HOW_IT_THINKS_STEPS.length - 1 ? `<div class="think-step__line"></div>` : ""}
          </div>
          <div class="think-step__body">
            <div class="think-step__title">${step.title}</div>
            <div class="think-step__desc">${step.desc}</div>
          </div>
        </div>`
      ).join("")}
    </div>
  `;
}

/* ----------------------------------------------------------
   FETCH OPPORTUNITIES MODAL
   ---------------------------------------------------------- */
function openFetchModal() {
  const backdrop = document.getElementById("fetchBackdrop");
  const modal = document.getElementById("fetchModal");

  const cards = EXTERNAL_SOURCES.map((s) => `
    <div class="fetch-source-card fetch-source-card--connecting" id="fetchCard_${s.id}">
      <div class="fetch-source-card__header">
        <span class="fetch-source-card__type" style="color:${s.color}">${s.type}</span>
      </div>
      <div class="fetch-source-card__name">${s.name}</div>
      <div class="fetch-source-card__domain">${s.domain}</div>
      <div class="fetch-source-card__status">
        <span class="fetch-status-dot"></span>
        <span class="fetch-status-text">Connecting…</span>
      </div>
    </div>`).join("");

  modal.innerHTML = `
    <div class="modal__header">
      <div class="modal__title">${ICONS.zap} Fetch Opportunities</div>
    </div>
    <div class="modal__subtitle">Connecting to ${EXTERNAL_SOURCES.length} monitored external portals and pulling the latest tender notices into your pipeline.</div>
    <div class="fetch-source-grid">${cards}</div>
    <div class="progress-bar"><div class="progress-bar__fill" id="fetchProgressFill" style="width:0%"></div></div>
    <div class="progress-meta">
      <span id="fetchProgressLabel">Connecting to sources…</span>
      <strong id="fetchProgressPct">0%</strong>
    </div>
    <div id="fetchResults" class="hidden"></div>
    <div class="modal__footer" id="fetchFooter">
      <span class="scan-status" id="fetchStatus">Fetching…</span>
      <button class="btn btn--secondary" id="fetchCloseBtn" disabled data-action="close-fetch-modal">Close</button>
    </div>`;

  backdrop.classList.add("is-visible");
  runFetchAnimation();
}

function runFetchAnimation() {
  const fillEl  = document.getElementById("fetchProgressFill");
  const labelEl = document.getElementById("fetchProgressLabel");
  const pctEl   = document.getElementById("fetchProgressPct");

  function setProgress(p, text) {
    if (fillEl)  fillEl.style.width = `${p}%`;
    if (pctEl)   pctEl.textContent = `${p}%`;
    if (labelEl) labelEl.textContent = text;
  }

  function setCard(id, state, text) {
    const card = document.getElementById(`fetchCard_${id}`);
    if (!card) return;
    card.className = `fetch-source-card fetch-source-card--${state}`;
    card.querySelector(".fetch-status-text").textContent = text;
  }

  // Phase 1: connect each source
  EXTERNAL_SOURCES.forEach((s, i) => {
    setTimeout(() => {
      setCard(s.id, "connected", "Connected");
      setProgress(Math.round((i + 1) / EXTERNAL_SOURCES.length * 38), `Connected to ${s.name}`);
    }, 280 + i * 370);
  });

  // Phase 2: fetch from each source
  const fetchStart = 280 + EXTERNAL_SOURCES.length * 370 + 500;
  EXTERNAL_SOURCES.forEach((s, i) => {
    setTimeout(() => setCard(s.id, "fetching", "Fetching…"), fetchStart + i * 360);
    setTimeout(() => {
      const state = s.opportunities > 0 ? "done" : "empty";
      const text  = s.opportunities > 0 ? `Found ${s.opportunities} opportunit${s.opportunities !== 1 ? "ies" : "y"}` : "Up to date";
      setCard(s.id, state, text);
      setProgress(Math.round(38 + (i + 1) / EXTERNAL_SOURCES.length * 58), `Processed ${s.name}`);
    }, fetchStart + i * 360 + 520);
  });

  // Phase 3: complete — show results
  const total = fetchStart + EXTERNAL_SOURCES.length * 360 + 520 + 500;
  setTimeout(() => {
    const found = EXTERNAL_SOURCES.reduce((sum, s) => sum + s.opportunities, 0);
    const sourcesHit = EXTERNAL_SOURCES.filter((s) => s.opportunities > 0).length;
    setProgress(100, `${found} opportunities fetched from ${sourcesHit} sources.`);

    const resultsEl = document.getElementById("fetchResults");
    if (resultsEl) {
      resultsEl.innerHTML = renderFetchResultsHtml();
      resultsEl.classList.remove("hidden");
    }
    const footerEl = document.getElementById("fetchFooter");
    if (footerEl) {
      footerEl.innerHTML = `
        <span class="scan-status is-done">Complete — ${found} opportunities ready</span>
        <div style="display:flex;gap:8px">
          <button class="btn btn--secondary" data-action="close-fetch-modal">Close</button>
          <button class="btn btn--primary" data-action="close-fetch-go-pipeline">View in Pipeline</button>
        </div>`;
    }
    showToast(`${found} opportunities fetched — pipeline updated.`, "success");
  }, total);
}

function renderFetchResultsHtml() {
  const rows = EXTERNAL_SOURCES
    .filter((s) => s.opportunities > 0)
    .flatMap((s) => {
      const matched = FETCHED_OPPORTUNITIES.filter(
        (o) => o.sources && o.sources.some((src) => src.sourceId === s.id)
      );
      return matched.map((o) => {
        const srcDetail = o.sources.find((src) => src.sourceId === s.id);
        const alreadyAdded = OPPORTUNITIES.some((existing) => existing.id === o.id);
        return `
          <div class="fetch-result-item" id="fetchResultItem_${o.id}">
            <div class="fetch-result-left">
              <span class="fetch-result-badge" style="color:${s.color};background:${s.color}1a">${s.name} &nbsp;·&nbsp; ${s.domain}</span>
              <div class="fetch-result-title">${o.title}</div>
              <div class="fetch-result-meta">${o.id} &nbsp;·&nbsp; ${o.state} &nbsp;·&nbsp; Due ${o.deadline}</div>
              <div class="fetch-result-detail">${srcDetail ? srcDetail.detail : ""}</div>
            </div>
            <div class="fetch-result-actions">
              <button class="btn btn--secondary btn--sm" data-action="fetch-result-source" data-id="${o.id}">Source Doc</button>
              <button class="btn btn--secondary btn--sm" data-action="fetch-result-open" data-id="${o.id}">Preview</button>
              ${alreadyAdded
                ? `<span class="fetch-added-badge">${ICONS.checkCircle} Added</span>`
                : `<button class="btn btn--primary btn--sm" data-action="add-to-pipeline" data-id="${o.id}">+ Add</button>`}
            </div>
          </div>`;
      });
    }).join("");

  const total = FETCHED_OPPORTUNITIES.length;
  const sourcesHit = EXTERNAL_SOURCES.filter((s) => s.opportunities > 0).length;

  return `
    <div class="fetch-results">
      <div class="fetch-results__header">${total} new opportunit${total !== 1 ? "ies" : "y"} found — not yet in your pipeline</div>
      ${rows}
    </div>`;
}

/* ----------------------------------------------------------
   PIPELINE VIEW (My Pipeline / In Diligence / Closed)
   ---------------------------------------------------------- */
const PIPELINE_META = {
  all: {
    title: "My Pipeline",
    subtitle: "All opportunities currently tracked by OppIQ."
  },
  diligence: {
    title: "In Diligence",
    subtitle: "Opportunities undergoing active due diligence."
  },
  closed: {
    title: "Closed",
    subtitle: "Opportunities that have been won, lost, or withdrawn."
  }
};

function renderPipeline(tab) {
  const meta = PIPELINE_META[tab] || PIPELINE_META.all;

  let opps = OPPORTUNITIES;
  if (tab === "diligence") opps = OPPORTUNITIES.filter((o) => o.status === "diligence");
  if (tab === "closed") opps = CLOSED_OPPORTUNITIES;

  const isClosed = tab === "closed";

  const body =
    opps.length === 0
      ? `
      <div class="empty-state">
        <div class="empty-state__icon">${ICONS.inbox}</div>
        <div class="empty-state__title">No closed opportunities yet</div>
        <div class="empty-state__desc">Opportunities will appear here once they are won, lost, or withdrawn from the pipeline.</div>
      </div>`
      : `
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Opportunity</th>
              <th>Entity</th>
              <th>State</th>
              ${isClosed ? "<th>Outcome</th><th>Our Tariff</th><th>Closed On</th>" : "<th>Source</th><th>Score</th><th>Status</th>"}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${opps.map(isClosed ? renderClosedPipelineRow : renderPipelineRow).join("")}
          </tbody>
        </table>
      </div>`;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">${meta.title}</div>
        <div class="page-subtitle">${meta.subtitle}</div>
      </div>
      ${tab === "all" ? `<button class="btn btn--primary" data-action="open-fetch-modal">${ICONS.zap} Fetch Opportunities</button>` : ""}
    </div>
    <div class="table-card">
      ${body}
    </div>
  `;
}

function renderPipelineRow(opp) {
  const scoreDisplay = typeof opp.score === "number" ? opp.score : "—";
  const statusLabel = opp.status === "diligence" ? "In Diligence" : "Active";
  const statusClass = opp.status === "diligence" ? "diligence" : "active";
  const sourceBadges = (opp.sources && opp.sources.length > 0)
    ? opp.sources.map((src) => {
        const ext = EXTERNAL_SOURCES.find((e) => e.id === src.sourceId);
        return ext ? `<span class="source-badge" style="color:${ext.color};background:${ext.color}1a">${ext.name}</span>` : "";
      }).join("")
    : `<span class="source-badge source-badge--none">—</span>`;
  const hasSource = opp.sources && opp.sources.length > 0 && !opp.isForensics;
  return `
    <tr>
      <td>
        <span class="cell-title">${opp.title}</span>
        <span class="cell-sub">${opp.id}</span>
      </td>
      <td>${opp.entity}</td>
      <td>${opp.state}</td>
      <td>${sourceBadges}</td>
      <td>${scoreDisplay}</td>
      <td><span class="status-pill status-pill--${statusClass}">${statusLabel}</span></td>
      <td>
        <div class="pipeline-row-actions">
          ${hasSource ? `<button class="action-link" data-action="fetch-result-source" data-id="${opp.id}">Source Doc</button>` : ""}
          <button class="action-link" data-action="open-opportunity" data-id="${opp.id}">Open</button>
        </div>
      </td>
    </tr>`;
}

function renderClosedPipelineRow(opp) {
  const outcomeClass = opp.outcome === "won" ? "won" : opp.outcome === "lost" ? "lost" : "withdrawn";
  const outcomeLabel = opp.outcome === "won" ? "Won" : opp.outcome === "lost" ? "Lost" : "Withdrawn";
  return `
    <tr>
      <td>
        <span class="cell-title">${opp.title}</span>
        <span class="cell-sub">${opp.id}</span>
      </td>
      <td>${opp.entity}</td>
      <td>${opp.state}</td>
      <td><span class="outcome-pill outcome-pill--${outcomeClass}">${outcomeLabel}</span></td>
      <td>${opp.bidSummary ? opp.bidSummary.ourTariff : "—"}</td>
      <td>${opp.closedOn}</td>
      <td>
        <button class="action-link" data-action="open-opportunity" data-id="${opp.id}">Open</button>
      </td>
    </tr>`;
}

/* ----------------------------------------------------------
   RUN INTELLIGENCE SCAN MODAL
   ---------------------------------------------------------- */
let scanRunning = false;

function openScanModal() {
  if (scanRunning) return;
  scanRunning = true;

  const backdrop = document.getElementById("scanBackdrop");
  const modal = document.getElementById("scanModal");

  modal.innerHTML = `
    <div class="modal__header">
      <div class="modal__title"><span class="sparkle">${ICONS.sparkle}</span> Running Intelligence Scan</div>
    </div>
    <div class="modal__subtitle">OppIQ is scanning monitored sources and re-scoring opportunities across your pipeline.</div>
    <div class="pipeline-stepper" id="scanStepper">${renderStepper(SCAN_STAGES, 0)}</div>
    <div class="progress-bar"><div class="progress-bar__fill" id="scanProgressFill" style="width:0%"></div></div>
    <div class="progress-meta">
      <span id="scanProgressLabel">Initializing intelligence scan...</span>
      <strong id="scanProgressPct">0%</strong>
    </div>
    <div class="modal__footer">
      <span class="scan-status" id="scanStatus">Scanning...</span>
      <button class="btn btn--secondary" id="scanCloseBtn" disabled data-action="close-scan">Close</button>
    </div>
  `;
  backdrop.classList.add("is-visible");

  const stepperEl = document.getElementById("scanStepper");
  const fillEl = document.getElementById("scanProgressFill");
  const labelEl = document.getElementById("scanProgressLabel");
  const pctEl = document.getElementById("scanProgressPct");

  SCAN_LOGS.forEach((entry) => {
    setTimeout(() => {
      if (!stepperEl.isConnected) return;
      const pct = Math.min(Math.round((entry.time / SCAN_TOTAL_DURATION) * 100), 100);
      fillEl.style.width = `${pct}%`;
      pctEl.textContent = `${pct}%`;
      labelEl.textContent = entry.text;
    }, entry.time);
  });

  SCAN_STAGE_TIMINGS.forEach((time, i) => {
    setTimeout(() => {
      if (!stepperEl.isConnected) return;
      stepperEl.innerHTML = renderStepper(SCAN_STAGES, i);
    }, time);
  });

  setTimeout(() => {
    if (!stepperEl.isConnected) return;

    // Apply scan findings to opportunity data so the dashboard reflects real changes
    const updates = [
      { id: "CE-OPP-001", signal: "8d to RfS deadline", score: 91,
        scoreBreakdown: { gridAccess: 92, policyFit: 90, landRisk: 85, financialViability: 88, competitionIntensity: 80 } },
      { id: "CE-OPP-002", signal: "Grid doc outstanding" },
      { id: "CE-OPP-003", signal: "Anchor LOI pending" },
      { id: "CE-OPP-004", signal: "Feeder approvals delayed" },
    ];
    updates.forEach(({ id, signal, score, scoreBreakdown }) => {
      const opp = OPPORTUNITIES.find((o) => o.id === id);
      if (!opp) return;
      if (signal) opp.signal = signal;
      if (score !== undefined) opp.score = score;
      if (scoreBreakdown) opp.scoreBreakdown = { ...opp.scoreBreakdown, ...scoreBreakdown };
    });

    stepperEl.innerHTML = renderStepper(SCAN_STAGES, SCAN_STAGES.length);
    fillEl.style.width = "100%";
    pctEl.textContent = "100%";
    labelEl.textContent = "Intelligence scan complete. Dashboard refreshed.";

    const statusEl = document.getElementById("scanStatus");
    statusEl.textContent = "Scan Complete";
    statusEl.classList.add("is-done");
    document.getElementById("scanCloseBtn").disabled = false;
    scanRunning = false;
  }, SCAN_TOTAL_DURATION + 300);
}

function closeScanModal() {
  document.getElementById("scanBackdrop").classList.remove("is-visible");
  if (state.view === "dashboard") render();
  showToast("Intelligence scan complete. Dashboard refreshed.", "success");
}

/* ----------------------------------------------------------
   ACCOUNT / HELP / SIGN-OUT MODAL
   ---------------------------------------------------------- */
function openInfoModal(html) {
  const backdrop = document.getElementById("infoBackdrop");
  const modal = document.getElementById("infoModal");
  modal.innerHTML = html;
  backdrop.classList.add("is-visible");
}

function closeInfoModal() {
  document.getElementById("infoBackdrop").classList.remove("is-visible");
}

function renderAccountSettingsModal() {
  return `
    <div class="modal__header">
      <div class="modal__title">${ICONS.settings} Account Settings</div>
      <button class="modal__close" data-action="close-info-modal">${ICONS.x}</button>
    </div>
    <div class="modal__subtitle">Manage your OppIQ profile and notification preferences.</div>

    <div class="settings-field">
      <label class="settings-field__label">Full Name</label>
      <input type="text" value="Arjun Kapoor" />
    </div>
    <div class="settings-field">
      <label class="settings-field__label">Work Email</label>
      <input type="email" value="arjun.kapoor@continuumenergy.com" />
    </div>
    <div class="settings-field">
      <label class="settings-field__label">Role</label>
      <input type="text" value="Sr. BD Manager · Continuum Energy" disabled />
    </div>

    <div class="card__title" style="margin-top: 20px;">Notification Preferences</div>
    <div class="toggle-row">
      <div>
        <div class="toggle-row__label">Deadline alerts</div>
        <div class="toggle-row__desc">Email me when an RfS deadline is within 14 days.</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" checked />
        <span class="toggle-switch__slider"></span>
      </label>
    </div>
    <div class="toggle-row">
      <div>
        <div class="toggle-row__label">Document flags</div>
        <div class="toggle-row__desc">Notify me when Document Forensics flags an anomaly.</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" checked />
        <span class="toggle-switch__slider"></span>
      </label>
    </div>
    <div class="toggle-row">
      <div>
        <div class="toggle-row__label">Weekly pipeline digest</div>
        <div class="toggle-row__desc">A Monday summary of every tracked opportunity and its score.</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" />
        <span class="toggle-switch__slider"></span>
      </label>
    </div>

    <div class="modal__footer">
      <button class="btn btn--secondary" data-action="close-info-modal">Cancel</button>
      <button class="btn btn--primary" data-action="save-account-settings">Save Changes</button>
    </div>
  `;
}

function renderHelpSupportModal() {
  return `
    <div class="modal__header">
      <div class="modal__title">${ICONS.helpCircle} Help &amp; Support</div>
      <button class="modal__close" data-action="close-info-modal">${ICONS.x}</button>
    </div>
    <div class="modal__subtitle">Answers to common questions about OppIQ.</div>

    <details class="faq-item">
      <summary>How is the Opportunity Score calculated?</summary>
      <div class="faq-item__body">Each opportunity is scored across five weighted dimensions — Grid Access, Policy Fit, Land Risk, Financial Viability, and Competition Intensity — which roll up into the single 0–100 score shown on the Opportunity Detail page.</div>
    </details>
    <details class="faq-item">
      <summary>How often does OppIQ refresh the pipeline?</summary>
      <div class="faq-item__body">Run Intelligence Scan re-checks monitored sources (SECI, MNRE, DISCOM portals, transmission availability) on demand and refreshes every opportunity's score and recommendation, with a live activity log of what was checked.</div>
    </details>
    <details class="faq-item">
      <summary>How do I generate and export a business plan?</summary>
      <div class="faq-item__body">Once an opportunity's score reaches 75 or above, use "Generate Business Plan" from its detail page. The finished plan can be exported to Word or Excel, or shared via a copy-to-clipboard link from the Business Plan page.</div>
    </details>
    <details class="faq-item">
      <summary>What happens when Document Forensics flags an issue?</summary>
      <div class="faq-item__body">Flagged items appear in the Findings list with a severity level and recommended action — for example, a vendor bank detail mismatch should be resolved with the vendor before any related payment is released.</div>
    </details>

    <div class="support-contact">
      ${ICONS.mail} Still need help? Email <a href="mailto:support@continuumenergy.com">support@continuumenergy.com</a> and the OppIQ team will get back to you within one business day.
    </div>

    <div class="modal__footer">
      <button class="btn btn--secondary" data-action="close-info-modal">Close</button>
    </div>
  `;
}

function renderSignOutModal() {
  return `
    <div class="modal__header">
      <div class="modal__title">${ICONS.logOut} Sign Out</div>
      <button class="modal__close" data-action="close-info-modal">${ICONS.x}</button>
    </div>
    <div class="modal__subtitle">Are you sure you want to sign out of OppIQ? You'll need to sign in again to access your pipeline.</div>
    <div class="modal__footer">
      <button class="btn btn--secondary" data-action="close-info-modal">Cancel</button>
      <button class="btn btn--danger" data-action="confirm-sign-out">${ICONS.logOut} Sign Out</button>
    </div>
  `;
}

/* ----------------------------------------------------------
   EVENT DELEGATION
   ---------------------------------------------------------- */
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  switch (action) {
    case "run-scan":
      openScanModal();
      break;

    case "close-scan":
      closeScanModal();
      break;

    case "insight-cta": {
      const view = target.dataset.view;
      const id = target.dataset.id;
      if (view === "opportunity-detail") {
        navigate(view, { id });
      } else {
        navigate(view);
      }
      break;
    }

    case "open-opportunity": {
      const opp = getOpportunity(target.dataset.id);
      if (!opp) return;
      if (opp.isForensics) {
        navigate("document-forensics");
      } else {
        navigate("opportunity-detail", { id: opp.id });
      }
      break;
    }

    case "open-forensics":
      navigate("document-forensics");
      break;

    case "back-dashboard":
      navigate("dashboard");
      break;

    case "back-closed-pipeline":
      navigate("pipeline", { tab: "closed" });
      break;

    case "view-closed-doc": {
      const oppId    = target.dataset.oppid;
      const docId    = target.dataset.docid;
      const category = target.dataset.category;
      const opp      = getOpportunity(oppId);
      if (!opp) break;
      const docs = category === "rfp" ? opp.rfpDocuments : opp.rfpResponses;
      const doc  = docs.find(d => d.id === docId);
      if (!doc) break;
      const blobUrl = URL.createObjectURL(new Blob([buildClosedDocHtml(opp, doc, category)], { type: "text/html" }));
      window.open(blobUrl, "_blank");
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
      break;
    }

    case "back-detail":
      navigate("opportunity-detail", { id: target.dataset.id });
      break;

    case "generate-plan":
      openBusinessPlanGenModal();
      break;

    case "view-source": {
      const opp = getOpportunity(target.dataset.id);
      if (!opp) return;
      const blobUrl = URL.createObjectURL(new Blob([buildSourceNoticeHtml(opp)], { type: "text/html" }));
      window.open(blobUrl, "_blank");
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
      break;
    }

    case "run-forensics":
      runForensicsScan();
      break;

    case "export": {
      const format = target.dataset.format;
      const bp = activeBusinessPlan;
      if (format === "Word") {
        downloadBlob(buildBusinessPlanWordHtml(), `Business_Plan_${bp.opportunityId}.doc`, "application/msword");
        showToast("Business plan exported as a Word document.", "success");
      } else if (format === "Excel") {
        downloadBlob("﻿" + buildBusinessPlanCsv(), `Business_Plan_${bp.opportunityId}.csv`, "text/csv;charset=utf-8;");
        showToast("Business plan exported as a spreadsheet.", "success");
      } else if (format === "Share") {
        openShareModal();
      }
      break;
    }

    case "browse-file":
      if (!documentAttached) document.getElementById("invoiceFileInput")?.click();
      break;

    case "replace-document":
      documentAttached = false;
      attachedFileName = null;
      forensicsRunning = false;
      forensicsComplete = false;
      forensicsEscalated = false;
      render();
      break;

    case "escalate-forensics": {
      forensicsEscalated = true;
      const actionsEl = document.getElementById("forensicsActions");
      if (actionsEl) actionsEl.innerHTML = renderFindingsActionsHtml();

      const mailSubject = encodeURIComponent("[URGENT] Payment Hold — Invoice SES/INV/2026/0734 | Forensic Flag");
      const mailBody = encodeURIComponent(
`Dear Finance Team,

OppIQ Document Forensics has flagged anomalies on the following invoice that require your immediate review. Payment has been placed on hold pending verification.

INVOICE DETAILS
───────────────────────────────────────
Invoice No.    : SES/INV/2026/0734
Vendor         : Sunline EPC Solutions Pvt. Ltd. (GSTIN: 08AALCS9182H1ZP)
Billed To      : Continuum Solar Rajasthan One Pvt. Ltd.
Invoice Date   : 18 May 2026
PO Reference   : PO-CSR1-2026-0142 (dated 22 May 2026)
Total Amount   : ₹76,64,100.00
Payment Due    : 17 Jun 2026

FORENSIC FLAGS
───────────────────────────────────────
1. [HIGH] Purchase order date (22 May 2026) is 4 days AFTER the invoice date (18 May 2026) — PO should precede the invoice.
2. [MEDIUM] Unit rate for Solar PV Modules (₹9,450/Wp) is 8–12% above current market benchmarks. Supplier verification recommended.

RECOMMENDED ACTIONS
───────────────────────────────────────
• Place a formal payment hold on invoice SES/INV/2026/0734 until verification is complete.
• Request vendor clarification on the PO/invoice date discrepancy.
• Cross-check module pricing against at least two independent market quotes.
• Escalate to Legal if vendor response is unsatisfactory within 5 business days.

This alert was generated by OppIQ Document Forensics on ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}.

Regards,
Arjun Kapoor
Sr. BD Manager — Continuum Energy`
      );

      window.location.href = `mailto:finance@continuumenergy.com?cc=arjun.kapoor@continuumenergy.com&subject=${mailSubject}&body=${mailBody}`;
      showToast("Finance escalation email opened — payment held pending review.", "success");
      break;
    }

    case "bp-approve": {
      bpApprovalStatus = "approved";
      const wrap = document.getElementById("bpApprovalWrap");
      if (wrap) wrap.innerHTML = renderBpApprovalBanner();
      showToast("Business plan approved.", "success");
      break;
    }

    case "bp-reject": {
      bpApprovalStatus = "rejected";
      const wrap = document.getElementById("bpApprovalWrap");
      if (wrap) wrap.innerHTML = renderBpApprovalBanner();
      showToast("Business plan rejected — sent back for revision.", "info");
      break;
    }

    case "bp-reconsider": {
      bpApprovalStatus = null;
      const wrap = document.getElementById("bpApprovalWrap");
      if (wrap) wrap.innerHTML = renderBpApprovalBanner();
      break;
    }

    case "bp-regenerate":
      bpApprovalStatus = null;
      openBusinessPlanGenModal(true);
      break;

    case "add-to-pipeline": {
      const id = target.dataset.id;
      const fetched = FETCHED_OPPORTUNITIES.find((o) => o.id === id);
      if (fetched && !OPPORTUNITIES.find((o) => o.id === id)) {
        OPPORTUNITIES.push({ ...fetched, signal: "Recently Added" });
        updateNavBadges();
        target.outerHTML = `<span class="fetch-added-badge">${ICONS.checkCircle} Added</span>`;
        showToast(`"${fetched.title}" added to your pipeline.`, "success");
      }
      break;
    }

    case "open-data-gaps":
      openDataGapModal(target.dataset.id);
      break;

    case "mark-gap-resolved": {
      const { oppid, gapid } = target.dataset;
      if (!resolvedGaps[oppid]) resolvedGaps[oppid] = new Set();
      resolvedGaps[oppid].add(gapid);
      openInfoModal(renderDataGapModalHtml(oppid));
      break;
    }

    case "rescore-opportunity": {
      const id = target.dataset.id;
      const opp = getOpportunity(id);
      closeInfoModal();
      if (!opp || !opp.rescoreTarget) break;
      const modal = document.getElementById("bpGenModal");
      const backdrop = document.getElementById("bpGenBackdrop");
      modal.innerHTML = `
        <div class="modal__header">
          <div class="modal__title"><span class="sparkle">${ICONS.sparkle}</span> Re-Scoring Opportunity</div>
        </div>
        <div class="modal__subtitle">OppIQ is incorporating the submitted documents and re-computing the opportunity score for ${id}.</div>
        <div class="progress-bar"><div class="progress-bar__fill" id="bpProgressFill" style="width:0%"></div></div>
        <div class="progress-meta">
          <span id="bpProgressLabel">Analysing submitted documents…</span>
          <strong id="bpProgressPct">0%</strong>
        </div>`;
      backdrop.classList.add("is-visible");
      const steps = ["Analysing submitted documents…", "Updating land risk dimension…", "Recalculating financial viability…", "Recomputing composite score…", "Finalising assessment…"];
      steps.forEach((label, i) => {
        setTimeout(() => {
          const lEl = document.getElementById("bpProgressLabel");
          const fEl = document.getElementById("bpProgressFill");
          const pEl = document.getElementById("bpProgressPct");
          if (!lEl) return;
          const pct = Math.round(((i + 1) / steps.length) * 100);
          lEl.textContent = label;
          fEl.style.width = `${pct}%`;
          pEl.textContent = `${pct}%`;
        }, i * 700);
      });
      setTimeout(() => {
        backdrop.classList.remove("is-visible");
        const t = opp.rescoreTarget;
        opp.score  = t.score;
        opp.signal = t.signal;
        opp.scoreBreakdown = { ...opp.scoreBreakdown, ...t.scoreBreakdown };
        if (opp.status === "diligence" || opp.status === "active") opp.status = "active";
        render();
        updateNavBadges();
        showToast(`${id} re-scored to ${t.score}/100. Business plan generation is now unlocked.`, "success");
      }, steps.length * 700 + 400);
      break;
    }

    case "move-to-diligence": {
      const opp = getOpportunity(target.dataset.id);
      if (!opp) break;
      opp.status = "diligence";
      opp.signal = "Under Diligence";
      render();
      updateNavBadges();
      showToast(`${opp.id} moved to the In Diligence tab for active tracking.`, "success");
      break;
    }

    case "open-fetch-modal":
      openFetchModal();
      break;

    case "close-fetch-modal":
      document.getElementById("fetchBackdrop").classList.remove("is-visible");
      break;

    case "close-fetch-go-pipeline":
      document.getElementById("fetchBackdrop").classList.remove("is-visible");
      navigate("pipeline", { tab: "all" });
      break;

    case "fetch-result-open": {
      document.getElementById("fetchBackdrop")?.classList.remove("is-visible");
      const opp = getOpportunity(target.dataset.id);
      if (!opp) break;
      if (opp.isForensics) navigate("document-forensics");
      else navigate("opportunity-detail", { id: opp.id });
      break;
    }

    case "fetch-result-source": {
      const opp = getOpportunity(target.dataset.id);
      if (!opp) break;
      const blobUrl = URL.createObjectURL(new Blob([buildSourceNoticeHtml(opp)], { type: "text/html" }));
      window.open(blobUrl, "_blank");
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
      break;
    }

    case "share-add-pending": {
      const id = target.dataset.id;
      if (!sharePendingIds.includes(id)) sharePendingIds.push(id);
      openInfoModal(renderShareModalHtml());
      setTimeout(() => document.getElementById("shareSearchInput")?.focus(), 30);
      break;
    }

    case "share-remove-pending": {
      sharePendingIds = sharePendingIds.filter((i) => i !== target.dataset.id);
      openInfoModal(renderShareModalHtml());
      setTimeout(() => document.getElementById("shareSearchInput")?.focus(), 30);
      break;
    }

    case "share-send": {
      const perm = document.getElementById("shareDefaultPerm")?.value || "view";
      sharePendingIds.forEach((id) => {
        if (!shareAccessList.find((a) => a.id === id)) shareAccessList.push({ id, permission: perm });
      });
      const count = sharePendingIds.length;
      sharePendingIds = [];
      openInfoModal(renderShareModalHtml());
      showToast(`Business plan shared with ${count} colleague${count !== 1 ? "s" : ""}.`, "success");
      break;
    }

    case "share-copy-link":
      copyShareLink();
      break;

    case "toggle-search": {
      const box = document.getElementById("searchBox");
      const willOpen = !box.classList.contains("is-open");
      closeAllDropdowns();
      if (willOpen) {
        box.classList.add("is-open");
        document.getElementById("searchInput").focus();
      }
      break;
    }

    case "toggle-notifications": {
      const dropdown = document.getElementById("notifDropdown");
      const willOpen = dropdown.classList.contains("hidden");
      closeAllDropdowns();
      if (willOpen) {
        dropdown.classList.remove("hidden");
        document.getElementById("notificationDot")?.remove();
      }
      break;
    }

    case "toggle-profile": {
      const dropdown = document.getElementById("profileDropdown");
      const willOpen = dropdown.classList.contains("hidden");
      closeAllDropdowns();
      if (willOpen) dropdown.classList.remove("hidden");
      break;
    }

    case "open-notification": {
      closeAllDropdowns();
      const view = target.dataset.view;
      const id = target.dataset.id;
      if (view === "opportunity-detail") navigate(view, { id });
      else navigate(view);
      break;
    }

    case "search-result": {
      closeAllDropdowns();
      const input = document.getElementById("searchInput");
      if (input) input.value = "";
      const opp = getOpportunity(target.dataset.id);
      if (!opp) return;
      if (opp.isForensics) navigate("document-forensics");
      else navigate("opportunity-detail", { id: opp.id });
      break;
    }

    case "profile-item": {
      closeAllDropdowns();
      const label = target.dataset.label;
      if (label === "Account Settings") {
        openInfoModal(renderAccountSettingsModal());
      } else {
        openInfoModal(renderHelpSupportModal());
      }
      break;
    }

    case "sign-out":
      closeAllDropdowns();
      openInfoModal(renderSignOutModal());
      break;

    case "close-info-modal":
      closeInfoModal();
      break;

    case "save-account-settings":
      closeInfoModal();
      showToast("Account settings updated.", "success");
      break;

    case "confirm-sign-out":
      closeInfoModal();
      showToast("Signing out...", "info");
      setTimeout(() => location.reload(), 700);
      break;
  }
});

/* ----------------------------------------------------------
   TOPBAR DROPDOWNS (Search / Notifications / Profile)
   ---------------------------------------------------------- */
function closeAllDropdowns() {
  document.getElementById("notifDropdown")?.classList.add("hidden");
  document.getElementById("profileDropdown")?.classList.add("hidden");
  document.getElementById("searchBox")?.classList.remove("is-open");
  document.getElementById("searchResults")?.classList.add("hidden");
}

function renderNotifications() {
  const dropdown = document.getElementById("notifDropdown");
  if (!dropdown) return;
  dropdown.innerHTML = `
    <div class="notif-dropdown__header">Notifications</div>
    <div class="notif-dropdown__list">
      ${NOTIFICATIONS.map(
        (n) => `
        <button class="notif-item" data-action="open-notification" data-view="${n.action.view}" data-id="${n.action.id || ""}">
          <span class="notif-item__dot notif-item__dot--${n.type}"></span>
          <span class="notif-item__body">
            <span class="notif-item__title">${n.title}</span>
            <span class="notif-item__time">${n.time}</span>
          </span>
        </button>`
      ).join("")}
    </div>`;
}

function renderSearchResults(query) {
  const resultsEl = document.getElementById("searchResults");
  if (!resultsEl) return;
  const q = query.trim().toLowerCase();

  if (!q) {
    resultsEl.classList.add("hidden");
    resultsEl.innerHTML = "";
    return;
  }

  const matches = OPPORTUNITIES.filter(
    (o) =>
      o.title.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q) ||
      o.entity.toLowerCase().includes(q)
  ).slice(0, 6);

  resultsEl.innerHTML =
    matches.length === 0
      ? `<div class="search-result-empty">No opportunities match "${escapeHtml(query)}".</div>`
      : matches
          .map(
            (o) => `
        <button class="search-result-item" data-action="search-result" data-id="${o.id}">
          <span class="search-result-item__title">${o.title}</span>
          <span class="search-result-item__sub">${o.id} · ${o.entity}</span>
        </button>`
          )
          .join("");

  resultsEl.classList.remove("hidden");
}

function findFirstOpportunityMatch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  return OPPORTUNITIES.find(
    (o) =>
      o.title.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q) ||
      o.entity.toLowerCase().includes(q)
  );
}

document.addEventListener("input", (e) => {
  if (e.target.id === "searchInput") {
    renderSearchResults(e.target.value);
  }
  if (e.target.id === "shareSearchInput") {
    renderShareSuggestions(e.target.value);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDropdowns();
    document.getElementById("searchInput")?.blur();
  }
  if (e.key === "Enter" && e.target.id === "searchInput") {
    const match = findFirstOpportunityMatch(e.target.value);
    if (match) {
      closeAllDropdowns();
      e.target.value = "";
      if (match.isForensics) navigate("document-forensics");
      else navigate("opportunity-detail", { id: match.id });
    }
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    document.getElementById("searchBox")?.classList.remove("is-open");
    document.getElementById("searchResults")?.classList.add("hidden");
  }
  if (!e.target.closest(".notif-box")) {
    document.getElementById("notifDropdown")?.classList.add("hidden");
  }
  if (!e.target.closest(".profile-box")) {
    document.getElementById("profileDropdown")?.classList.add("hidden");
  }
});

/* ----------------------------------------------------------
   DOCUMENT ATTACH — drag & drop / file picker
   ---------------------------------------------------------- */
document.addEventListener("dragover", (e) => {
  const dz = e.target.closest("#dropzone");
  if (dz) {
    e.preventDefault();
    dz.classList.add("is-dragover");
  }
});

document.addEventListener("dragleave", (e) => {
  const dz = e.target.closest("#dropzone");
  if (dz) dz.classList.remove("is-dragover");
});

document.addEventListener("drop", (e) => {
  const dz = e.target.closest("#dropzone");
  if (dz) {
    e.preventDefault();
    dz.classList.remove("is-dragover");
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    attachDocument(file);
  }
});

document.addEventListener("change", (e) => {
  if (e.target.id === "invoiceFileInput") {
    const file = e.target.files && e.target.files[0];
    if (file) attachDocument(file);
  }
  if (e.target.dataset.action === "share-change-perm") {
    const id = e.target.dataset.id;
    const val = e.target.value;
    if (val === "remove") {
      shareAccessList = shareAccessList.filter((a) => a.id !== id);
    } else {
      const item = shareAccessList.find((a) => a.id === id);
      if (item) item.permission = val;
    }
    openInfoModal(renderShareModalHtml());
  }
});

/* ----------------------------------------------------------
   SIDEBAR NAVIGATION & TOGGLE
   ---------------------------------------------------------- */
document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
  item.addEventListener("click", () => {
    const view = item.dataset.view;
    const tab = item.dataset.tab;
    navigate(view, tab ? { tab } : {});
  });
});

document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

/* ----------------------------------------------------------
   INIT
   ---------------------------------------------------------- */
function updateNavBadges() {
  document.getElementById("badgeMyPipeline").textContent = OPPORTUNITIES.length;
  document.getElementById("badgeInDiligence").textContent = OPPORTUNITIES.filter((o) => o.status === "diligence").length;
}

function init() {
  updateNavBadges();
  renderNotifications();
  history.replaceState({ view: state.view, params: state.params }, "", "#dashboard");
  render();
  updateSidebarActive();
  updateBreadcrumb();
}

init();
