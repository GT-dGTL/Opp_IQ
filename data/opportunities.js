/* ============================================================
   OppIQ — Mock Data Layer
   ------------------------------------------------------------
   All data on this page is static and hand-authored for demo
   purposes. Nothing here is fetched, generated, or computed by
   any AI/LLM service. Every "agent" narrative, log line, and
   finding is pre-written copy designed to look like the output
   of an intelligence pipeline.
   ============================================================ */

/* ----------------------------------------------------------
   OPPORTUNITIES
   ---------------------------------------------------------- */
const OPPORTUNITIES = [
  {
    id: "CE-OPP-001",
    title: "SECI Tranche XIV — 100 MW Solar",
    entity: "SECI",
    state: "Rajasthan",
    technology: "Solar PV",
    capacity: "100 MW",
    type: "ISTS-Connected Solar (RfS)",
    deadline: "23 Jun 2026",
    tariff: "₹2.59/kWh (ceiling tariff)",
    score: 88,
    riskLevel: "High",
    signal: "12d to RfS deadline",
    status: "active",
    showForensicsLink: true,
    scoreBreakdown: {
      gridAccess: 92,
      policyFit: 90,
      landRisk: 85,
      financialViability: 88,
      competitionIntensity: 78
    },
    sources: [
      { sourceId: "seci",  label: "SECI Tender Portal",  detail: "Tranche XIV RfS published 28 Apr 2026 · Ref: SECI/RfS/Solar/2026/XIV" },
      { sourceId: "pgcil", label: "PGCIL ISTS Data",     detail: "Evacuation capacity confirmed — 765 kV Bikaner pooling station (available: 400 MW)" }
    ],
    agentAssessment:
      "Strong solar irradiation profile, low policy risk, and favorable transmission availability make this a priority opportunity. Recommend bid preparation immediately.",
    riskRegister: [
      {
        severity: "Medium",
        risk: "Module price volatility could affect bid economics ahead of RfS submission.",
        mitigation: "Lock indicative module pricing with two backup suppliers before finalizing the bid tariff."
      },
      {
        severity: "Low",
        risk: "ISTS connectivity application for the Bikaner pooling station is pending CEA approval.",
        mitigation: "Track the CEA approval queue and request expedited review through the SECI nodal officer."
      },
      {
        severity: "Medium",
        risk: "Land aggregation in the Bikaner cluster is approximately 70% complete.",
        mitigation: "Engage the regional land aggregator to close the remaining parcels within 30 days."
      }
    ]
  },
  {
    id: "CE-OPP-002",
    title: "TANGEDCO 200 MW Wind + BESS",
    entity: "TANGEDCO",
    state: "Tamil Nadu",
    technology: "Wind + Storage",
    capacity: "200 MW + 100 MWh BESS",
    type: "Hybrid Wind-Storage (Tariff-Based Bidding)",
    deadline: "18 Jul 2026",
    tariff: "₹3.42/kWh",
    score: 72,
    riskLevel: "Medium",
    signal: "Documents Needed",
    status: "diligence",
    scoreBreakdown: {
      gridAccess: 75,
      policyFit: 80,
      landRisk: 60,
      financialViability: 70,
      competitionIntensity: 65
    },
    sources: [
      { sourceId: "tangedco", label: "TANGEDCO e-Procurement", detail: "Tender T/2026/WS/0042 published 12 Mar 2026 · Bid deadline 18 Jul 2026" }
    ],
    dataGaps: [
      { id: "g1", label: "Land Lease Agreement", desc: "Signed lease deed for the Tuticorin wind site (minimum 25-year tenure)", required: true },
      { id: "g2", label: "TANTRANSCO Grid Connectivity Letter", desc: "Formal letter from TANTRANSCO regional office confirming 200 MW evacuation capacity", required: true },
      { id: "g3", label: "BESS Vendor Shortlist", desc: "Technical evaluation matrix for at least 3 qualified BESS vendors", required: false }
    ],
    rescoreTarget: { score: 79, signal: "Ready for Bid Prep", scoreBreakdown: { gridAccess: 80, landRisk: 75, financialViability: 78 } },
    agentAssessment:
      "Tamil Nadu's hybrid wind-storage policy framework is favorable and the tariff ceiling supports healthy returns, but the opportunity is currently blocked by two outstanding documents. Resolve the land lease and grid connectivity letter before this can advance to bid preparation.",
    riskRegister: [
      {
        severity: "High",
        risk: "Land lease agreement for the Tuticorin site is pending signature.",
        mitigation: "Escalate to legal for priority execution — target signature within 10 days."
      },
      {
        severity: "Medium",
        risk: "Grid connectivity letter from TANTRANSCO has not yet been received.",
        mitigation: "Follow up with the TANTRANSCO regional office and submit a formal reminder application."
      },
      {
        severity: "Low",
        risk: "BESS technology vendor shortlist is still being finalized.",
        mitigation: "Complete vendor evaluation scoring ahead of the next pipeline review."
      }
    ]
  },
  {
    id: "CE-OPP-003",
    title: "MSEDCL Open Access C&I Solar",
    entity: "MSEDCL",
    state: "Maharashtra",
    technology: "Solar PV",
    capacity: "40–80 MW",
    type: "Group Captive Open Access",
    deadline: "05 Aug 2026",
    tariff: "₹3.85/kWh (PPA)",
    score: 65,
    riskLevel: "Medium",
    signal: "Anchor consumer pending",
    status: "diligence",
    scoreBreakdown: {
      gridAccess: 70,
      policyFit: 68,
      landRisk: 72,
      financialViability: 60,
      competitionIntensity: 55
    },
    sources: [
      { sourceId: "msedcl", label: "MSEDCL Tender Portal", detail: "Open access tender OA/2026/Solar/028 published 05 Apr 2026 · Deadline 05 Aug 2026" }
    ],
    dataGaps: [
      { id: "g1", label: "Anchor Consumer LOI", desc: "Signed Letter of Intent from anchor consumer confirming ≥26% equity participation under group captive framework", required: true },
      { id: "g2", label: "SPV Equity Structure Document", desc: "Draft shareholders agreement showing 26% consumer equity allocation and board representation", required: false }
    ],
    rescoreTarget: { score: 76, signal: "LOI Secured", scoreBreakdown: { financialViability: 72, competitionIntensity: 65 } },
    agentAssessment:
      "Maharashtra's open access framework remains workable, and land options near the proposed site are favorable. However, the group captive structure requires a committed anchor consumer holding at least 26% equity, and that commitment has not yet been secured.",
    riskRegister: [
      {
        severity: "High",
        risk: "Anchor consumer LOI is not yet executed — the 26% minimum offtake/equity requirement for group captive status remains unmet.",
        mitigation: "Finalize the term sheet with the shortlisted textile-cluster consumer within 3 weeks."
      },
      {
        severity: "Medium",
        risk: "Cross-subsidy surcharge revision is expected in the FY27 MSEDCL tariff order.",
        mitigation: "Model CSS sensitivity scenarios and build an escalation clause into the draft PPA."
      },
      {
        severity: "Low",
        risk: "Group captive equity structuring documentation for the SPV is still in progress.",
        mitigation: "Coordinate with legal and finance to complete the 26% equity structuring ahead of financial close."
      }
    ]
  },
  {
    id: "CE-OPP-004",
    title: "PM-KUSUM Component A",
    entity: "KREDL / MNRE",
    state: "Karnataka",
    technology: "Distributed Solar",
    capacity: "25 MW (aggregate)",
    type: "PM-KUSUM Component A — Feeder-Level Solar",
    deadline: "10 Sep 2026",
    tariff: "₹3.10/kWh (KERC-determined FiT)",
    score: 55,
    riskLevel: "Low",
    signal: "Approval delay risk",
    status: "active",
    scoreBreakdown: {
      gridAccess: 60,
      policyFit: 72,
      landRisk: 50,
      financialViability: 48,
      competitionIntensity: 45
    },
    sources: [
      { sourceId: "mnre",  label: "MNRE Scheme Portal",  detail: "PM-KUSUM Component A — FY 2026–27 tranche guidelines published 15 Jan 2026" },
      { sourceId: "kredl", label: "KREDL Karnataka",     detail: "Scheme notification No. KREDL/2026/PMKUSUM/014 · Feeder-level solar, Karnataka" }
    ],
    agentAssessment:
      "PM-KUSUM Component A carries strong policy backing and a guaranteed feed-in tariff, but feeder-level technical feasibility approvals are progressing slowly and the sub-2 MW project sizing limits financial upside. Suitable as a portfolio diversification play rather than a near-term priority.",
    riskRegister: [
      {
        severity: "High",
        risk: "Feeder-level technical feasibility approvals are delayed at 4 of the 10 proposed sites.",
        mitigation: "Engage the KREDL nodal office for batch approval and prioritize the 6 feasible feeders first."
      },
      {
        severity: "Medium",
        risk: "Sub-2 MW project economics are sensitive to further module price increases.",
        mitigation: "Re-evaluate the IRR threshold and consider consolidating into fewer, larger sites where feeder capacity allows."
      },
      {
        severity: "Medium",
        risk: "Disbursement timeline for the 30% MNRE central financial assistance (CFA) is uncertain.",
        mitigation: "Track the MNRE disbursement schedule and structure project financing independent of subsidy timing."
      }
    ]
  },
  {
    id: "CE-OPP-005",
    title: "Vendor Invoice Anomaly — EPC Contract",
    subtitle: "100 MW Solar EPC Package — Bikaner, Rajasthan (linked to CE-OPP-001)",
    entity: "Unknown / Unverified",
    state: "Rajasthan",
    technology: "Solar PV (EPC)",
    capacity: "—",
    type: "EPC Supply & Installation",
    deadline: "—",
    tariff: "—",
    score: null,
    riskLevel: "High",
    signal: "Anomaly Flagged",
    status: "diligence",
    isForensics: true,
    sources: []
  }
];

/* Order opportunities should appear in "Suggested Next Opportunities" table */
const SUGGESTED_ORDER = ["CE-OPP-001", "CE-OPP-005", "CE-OPP-002", "CE-OPP-003", "CE-OPP-004"];

/* ----------------------------------------------------------
   INSIGHT CARDS (Dashboard)
   ---------------------------------------------------------- */
const INSIGHT_CARDS = [
  {
    type: "red",
    eyebrow: "DEADLINE WATCH",
    title: "SECI Tranche XIV closes in 12 days",
    desc: "Bid preparation has not started for CE-OPP-001 (100 MW Solar, Rajasthan). RfS submission window closes 23 Jun 2026.",
    cta: "Open Opportunity →",
    action: { view: "opportunity-detail", id: "CE-OPP-001" }
  },
  {
    type: "amber",
    eyebrow: "DATA GAPS",
    title: "2 opportunities require supporting documentation",
    desc: "CE-OPP-002 is missing a land lease agreement and grid connectivity letter. CE-OPP-003 is pending anchor consumer documentation.",
    cta: "View Gaps →",
    action: { view: "opportunity-detail", id: "CE-OPP-002" }
  },
  {
    type: "indigo",
    eyebrow: "PATTERN WATCH",
    title: "Anomaly detected in a supporting vendor document",
    desc: "An EPC invoice linked to CE-OPP-001's Bikaner project shows a date sequence inconsistency. Forensic review recommended before payment approval.",
    cta: "Review Findings →",
    action: { view: "document-forensics" }
  }
];

/* ----------------------------------------------------------
   TOPBAR NOTIFICATIONS
   ---------------------------------------------------------- */
const NOTIFICATIONS = [
  {
    type: "red",
    title: "SECI Tranche XIV (CE-OPP-001) RfS closes in 12 days — bid prep not yet started.",
    time: "10 min ago",
    action: { view: "opportunity-detail", id: "CE-OPP-001" }
  },
  {
    type: "amber",
    title: "CE-OPP-002 is missing a land lease agreement and grid connectivity letter.",
    time: "1 hr ago",
    action: { view: "opportunity-detail", id: "CE-OPP-002" }
  },
  {
    type: "indigo",
    title: "Pattern Watch flagged a date sequence anomaly on the CE-OPP-001 EPC invoice.",
    time: "3 hr ago",
    action: { view: "document-forensics" }
  }
];

/* ----------------------------------------------------------
   RUN INTELLIGENCE SCAN — stages & activity log
   ---------------------------------------------------------- */
const SCAN_STAGES = [
  "Scanning SECI Sources",
  "Reviewing MNRE Notifications",
  "Checking DISCOM Signals",
  "Assessing Transmission Availability",
  "Scoring Opportunities",
  "Generating Recommendations"
];

const SCAN_LOGS = [
  { time: 100, type: "info", text: "Initializing intelligence scan across monitored sources..." },
  { time: 450, type: "info", text: "Connecting to SECI tender portal..." },
  { time: 850, type: "success", text: "SECI Tranche XIV (CE-OPP-001) RfS notice confirmed — 12 days to submission deadline." },
  { time: 1150, type: "info", text: "Checking MNRE scheme notifications for PM-KUSUM Component A updates..." },
  { time: 1550, type: "warning", text: "CE-OPP-004: Feeder-level feasibility approvals delayed at 4 of 10 sites." },
  { time: 1950, type: "info", text: "MNRE notification review complete." },
  { time: 2150, type: "info", text: "Scanning DISCOM portals for procurement and open access signals..." },
  { time: 2550, type: "warning", text: "CE-OPP-002: TANTRANSCO grid connectivity letter still outstanding." },
  { time: 2950, type: "warning", text: "CE-OPP-003: MSEDCL anchor consumer LOI not yet executed." },
  { time: 3300, type: "info", text: "DISCOM signal scan complete — 2 document gaps identified." },
  { time: 3450, type: "info", text: "Cross-checking ISTS and intra-state transmission availability..." },
  { time: 3850, type: "success", text: "CE-OPP-001: 765kV Bikaner pooling station confirms available evacuation capacity." },
  { time: 4250, type: "success", text: "CE-OPP-002: Tuticorin grid corridor capacity within tolerance for 200 MW." },
  { time: 4450, type: "info", text: "Recomputing opportunity scores across 5 dimensions..." },
  { time: 4850, type: "success", text: "CE-OPP-001 scored 88/100 — Grid Access 92, Policy Fit 90." },
  { time: 5150, type: "info", text: "CE-OPP-005: Vendor invoice pattern flagged for forensic review." },
  { time: 5450, type: "info", text: "Ranking opportunities by operational urgency..." },
  { time: 5850, type: "success", text: "Recommendation: prioritize CE-OPP-001 bid preparation this week." },
  { time: 6200, type: "success", text: "Intelligence scan complete. Dashboard refreshed." }
];

const SCAN_TOTAL_DURATION = 6400;

/* Maps stage index -> time (ms) at which the stage becomes active */
const SCAN_STAGE_TIMINGS = [0, 1150, 2150, 3450, 4450, 5450];

/* ----------------------------------------------------------
   SAMPLE INVOICE (Document Forensics source document)
   ---------------------------------------------------------- */
const SAMPLE_INVOICE = {
  vendor: {
    name: "Sunline EPC Solutions Pvt. Ltd.",
    address: "Plot No. 12, RIICO Industrial Area, Bhiwadi, Alwar District, Rajasthan – 301019",
    gstin: "08AALCS9182H1ZP",
    pan: "AALCS9182H"
  },
  billTo: {
    name: "Continuum Solar Rajasthan One Pvt. Ltd.",
    address: "Project Site, Village Bhadla, Tehsil Phalodi, Jodhpur District, Rajasthan – 342312",
    gstin: "08AAJCC7734N1Z8"
  },
  invoiceNo: "SES/INV/2026/0734",
  invoiceDate: "18 May 2026",
  poRef: "PO-CSR1-2026-0142",
  poDate: "22 May 2026",
  paymentTerms: "Net 30 Days (Due 17-Jun-2026)",
  placeOfSupply: "Rajasthan (08)",
  lineItems: [
    {
      description: "Supply of Solar PV Modules — 545 Wp Bifacial Mono-PERC Tier-1 (Sunline Astra-545)",
      hsn: "85414300",
      qty: "500 Nos",
      rate: "9,450.00",
      amount: "47,25,000.00"
    },
    {
      description: "Supply of String Inverters — 110 kW (Sunline InvertX-110)",
      hsn: "85044090",
      qty: "4 Nos",
      rate: "2,85,000.00",
      amount: "11,40,000.00"
    },
    {
      description: "Supply of Hot-Dip Galvanized Mounting Structures (Fixed-Tilt)",
      hsn: "73089090",
      qty: "1 Lot",
      rate: "3,80,000.00",
      amount: "3,80,000.00"
    },
    {
      description: "Installation, Testing &amp; Commissioning Services",
      hsn: "998733",
      qty: "1 Lot",
      rate: "2,50,000.00",
      amount: "2,50,000.00"
    }
  ],
  subtotal: "64,95,000.00",
  cgst: "5,84,550.00",
  sgst: "5,84,550.00",
  total: "76,64,100.00",
  totalWords: "Rupees Seventy-Six Lakh Sixty-Four Thousand One Hundred Only",
  bank: {
    name: "ICICI Bank Ltd",
    branch: "Bhiwadi Industrial Area Branch, Rajasthan",
    accountName: "Sunline EPC Solutions Pvt. Ltd.",
    accountNo: "0345 8821 0067 2",
    ifsc: "ICIC0003456"
  }
};

/* ----------------------------------------------------------
   DOCUMENT FORENSICS — stages, activity log & findings
   ---------------------------------------------------------- */
const FORENSICS_STAGES = [
  "Reading Document",
  "Extracting Metadata",
  "Validating GSTIN",
  "Checking Vendor Details",
  "Reviewing PO References",
  "Validating Dates"
];

const FORENSICS_LOGS = [
  { time: 200, type: "info", text: "Reading uploaded document..." },
  { time: 700, type: "info", text: "Document recognized as Tax Invoice — Sunline EPC Solutions Pvt. Ltd." },
  { time: 1300, type: "info", text: "Extracting line items and metadata..." },
  { time: 1900, type: "success", text: "4 line items extracted — Modules, Inverters, Mounting Structures, Installation Services." },
  { time: 2500, type: "info", text: "Validating GSTIN format for 08AALCS9182H1ZP..." },
  { time: 3100, type: "success", text: "GSTIN format valid — state code 08 (Rajasthan) matches vendor address." },
  { time: 3700, type: "info", text: "Checking vendor bank details against master record..." },
  { time: 4300, type: "success", text: "Vendor bank account (ICICI ...0067 2) matches master record for Sunline EPC Solutions Pvt. Ltd." },
  { time: 4900, type: "info", text: "Cross-checking PO reference PO-CSR1-2026-0142..." },
  { time: 5500, type: "warning", text: "Invoice dated 18 May 2026 precedes PO-CSR1-2026-0142 (dated 22 May 2026) by 4 days." },
  { time: 6100, type: "warning", text: "Date sequence anomaly flagged — manual review recommended before payment of ₹76,64,100." },
  { time: 6600, type: "info", text: "Document forensics complete." }
];

const FORENSICS_TOTAL_DURATION = 6600;

/* Maps stage index -> time (ms) at which the stage becomes active */
const FORENSICS_STAGE_TIMINGS = [0, 1300, 2500, 3700, 4900, 5500];

const FORENSICS_FINDINGS = [
  {
    status: "pass",
    text: "GSTIN format valid — 08AALCS9182H1ZP follows the standard 15-character structure for Rajasthan-registered entities."
  },
  {
    status: "pass",
    text: "Vendor information matches master record — Sunline EPC Solutions Pvt. Ltd., ICICI Bank A/C ...0067 2."
  },
  {
    status: "warning",
    text: "Invoice date (18 May 2026) precedes PO-CSR1-2026-0142 (22 May 2026) by 4 days — sequence inconsistency."
  },
  {
    status: "warning",
    text: "Manual review recommended before approving payment of ₹76,64,100 against this invoice."
  }
];

/* ----------------------------------------------------------
   BUSINESS PLAN — generated for CE-OPP-001 (score ≥ 75)
   ---------------------------------------------------------- */
const BUSINESS_PLAN = {
  opportunityId: "CE-OPP-001",
  generatedOn: "11 Jun 2026",
  executiveSummary: [
    "Continuum Energy is well positioned to bid for SECI Tranche XIV, a 100 MW ISTS-connected solar tender located in the Bikaner cluster of Rajasthan. The Request for Selection (RfS) closes on 23 June 2026, with a ceiling tariff of ₹2.59/kWh. Given the strength of the underlying site fundamentals and the company's existing footprint in the region, this opportunity has been ranked as the highest-priority item in the current pipeline and warrants immediate bid preparation.",
    "From a technical standpoint, the Bikaner cluster offers an average global horizontal irradiance (GHI) of approximately 5.8 kWh/m²/day, among the strongest solar resource profiles in India. The site benefits from confirmed evacuation capacity at the 765kV Bikaner pooling station, removing one of the most common execution risks for ISTS-connected projects. Land aggregation for the project footprint is approximately 70% complete, with the remaining parcels expected to close within the bid preparation window.",
    "On financial and strategic grounds, the project is projected to deliver a 14.2% project-level IRR and a 16.8% equity IRR at the ceiling tariff, with a debt service coverage ratio averaging 1.35x across the loan tenor. This opportunity strengthens Continuum Energy's renewable portfolio in a high-resource state with an established grid corridor, and the recommendation is to proceed with RfS submission without delay."
  ],
  financialOverview: [
    { label: "Capacity", value: "100 MW (AC)" },
    { label: "Capex", value: "₹385 Cr" },
    { label: "IRR", value: "14.2% (Project) / 16.8% (Equity)" },
    { label: "DSCR", value: "1.35x (avg)" },
    { label: "Revenue", value: "₹56.3 Cr (Year 1, est.)" },
    { label: "Payback", value: "8.4 years" }
  ],
  timeline: [
    { phase: "RfS Submission & Bid Evaluation", window: "Jun – Jul 2026", months: 1 },
    { phase: "LOA Issuance & PPA Signing", window: "Aug – Sep 2026", months: 2 },
    { phase: "Land Acquisition & Financial Closure", window: "Oct – Dec 2026", months: 3 },
    { phase: "EPC Mobilization & Civil Works", window: "Jan – Apr 2027", months: 4 },
    { phase: "Module / Inverter Installation", window: "May – Sep 2027", months: 5 },
    { phase: "Testing, Commissioning & COD", window: "Oct – Nov 2027", months: 2 }
  ],
  competitivePositioning: [
    {
      bidder: "Continuum Energy",
      capacity: "100 MW",
      strategy: "Competitive ₹2.55–2.59/kWh",
      position: "Strong — existing Rajasthan presence and pre-tied-up land in the Bikaner cluster."
    },
    {
      bidder: "Large IPP A",
      capacity: "300 MW (multi-tranche)",
      strategy: "Aggressive low-tariff bidding",
      position: "Moderate — scale advantage offset by a stretched balance sheet across concurrent tranches."
    },
    {
      bidder: "Large IPP B",
      capacity: "200 MW",
      strategy: "Moderate tariff positioning",
      position: "Moderate — newer entrant to the Rajasthan ISTS pool with limited local execution history."
    },
    {
      bidder: "Mid-size IPP C",
      capacity: "50–100 MW",
      strategy: "Conservative tariff positioning",
      position: "Weak — limited execution track record at this project scale."
    }
  ],
  financingStructure: [
    { source: "Senior Debt (REC/PFC Consortium)", amount: "₹269.5 Cr", share: "70%", terms: "10-year tenor, ~9.25% p.a. door-to-door" },
    { source: "Sponsor Equity (Continuum Energy)", amount: "₹115.5 Cr", share: "30%", terms: "Internal accruals + green bond proceeds" },
    { source: "Total Project Cost", amount: "₹385.0 Cr", share: "100%", terms: "—" }
  ],
  riskRegister: [
    {
      severity: "Medium",
      risk: "Module price volatility could affect bid economics ahead of RfS submission.",
      mitigation: "Lock indicative module pricing with two backup suppliers before finalizing the bid tariff."
    },
    {
      severity: "Low",
      risk: "ISTS connectivity application for the Bikaner pooling station is pending CEA approval.",
      mitigation: "Track the CEA approval queue and request expedited review through the SECI nodal officer."
    },
    {
      severity: "Medium",
      risk: "Land aggregation in the Bikaner cluster is approximately 70% complete.",
      mitigation: "Engage the regional land aggregator to close the remaining parcels within 30 days."
    },
    {
      severity: "Medium",
      risk: "Senior debt pricing is exposed to interest rate movements between term sheet and financial close.",
      mitigation: "Negotiate a rate-lock or cap structure with the lender consortium ahead of financial close."
    }
  ],
  nextSteps: [
    { step: "Finalize bid tariff & submit RfS response", owner: "BD Team", target: "Within 10 days", status: "In Progress" },
    { step: "Lock module supply agreement with 2 vendors", owner: "Procurement", target: "Within 3 weeks", status: "Pending" },
    { step: "Complete land title due diligence for Bikaner cluster", owner: "Legal", target: "Within 4 weeks", status: "In Progress" },
    { step: "Initiate lender term sheet discussions", owner: "Finance", target: "Within 2 weeks", status: "Not Started" },
    { step: "Mobilize EPC pre-qualification", owner: "Projects", target: "Within 6 weeks", status: "Not Started" }
  ]
};

/* ----------------------------------------------------------
   BUSINESS PLAN V2 — regenerated with revised intelligence
   ---------------------------------------------------------- */
const BUSINESS_PLAN_V2 = {
  opportunityId: "CE-OPP-001",
  generatedOn: "15 Jun 2026",
  version: "v2 — Regenerated",
  executiveSummary: [
    "Following leadership review and a subsequent intelligence re-scan, OppIQ has regenerated the business plan for SECI Tranche XIV with updated financials, revised competitive positioning, and tightened risk mitigations. The RfS deadline of 23 June 2026 is now 8 days away, making bid submission the single most urgent action for the team. The ceiling tariff of ₹2.59/kWh remains unchanged; however, a re-optimized EPC cost structure reduces total project capex from ₹385 Cr to ₹372 Cr, improving return metrics across the board.",
    "On the ground, land aggregation has progressed to 85% of the required footprint, up from 70% in the prior version, reducing execution risk materially. The 765kV Bikaner pooling station evacuation capacity remains confirmed and uncontested. Critically, updated competitive intelligence indicates that one of the large IPP bidders has withdrawn from this tranche due to balance sheet constraints, narrowing the competitive field and improving Continuum Energy's probability of award.",
    "The revised financial model reflects a 14.8% project-level IRR and a 17.4% equity IRR — both up from the prior version — on the back of lower capex and an improved module supply pricing outcome. The DSCR improves to 1.41x on average. The recommendation remains an unconditional bid submission at the ceiling tariff, with the tariff floor set at ₹2.53/kWh to retain an acceptable return in a competitive scenario."
  ],
  financialOverview: [
    { label: "Capacity", value: "100 MW (AC)" },
    { label: "Capex", value: "₹372 Cr (revised, –₹13 Cr vs v1)" },
    { label: "IRR", value: "14.8% (Project) / 17.4% (Equity)" },
    { label: "DSCR", value: "1.41x (avg, revised)" },
    { label: "Revenue", value: "₹56.9 Cr (Year 1, est.)" },
    { label: "Payback", value: "8.1 years (revised)" }
  ],
  timeline: [
    { phase: "RfS Submission (deadline: 23 Jun 2026)", window: "Jun 2026 — 8 days", months: 1 },
    { phase: "LOA Issuance & PPA Signing", window: "Aug – Sep 2026", months: 2 },
    { phase: "Land Acquisition & Financial Closure", window: "Oct – Dec 2026", months: 3 },
    { phase: "EPC Mobilization & Civil Works", window: "Jan – Apr 2027", months: 4 },
    { phase: "Module / Inverter Installation", window: "May – Aug 2027", months: 4 },
    { phase: "Testing, Commissioning & COD", window: "Sep – Oct 2027", months: 2 }
  ],
  competitivePositioning: [
    {
      bidder: "Continuum Energy",
      capacity: "100 MW",
      strategy: "Bid at ₹2.53–2.59/kWh with EPC cost advantage",
      position: "Strong — existing Rajasthan presence, 85% land tied up, improved capex position versus prior estimate."
    },
    {
      bidder: "Large IPP A",
      capacity: "Withdrawn from Tranche XIV",
      strategy: "—",
      position: "Withdrawn — balance sheet constraints and concurrent tranche commitments cited. Reduces competition materially."
    },
    {
      bidder: "Large IPP B",
      capacity: "200 MW",
      strategy: "Moderate tariff positioning",
      position: "Moderate — still active but faces grid evacuation uncertainty at secondary sites."
    },
    {
      bidder: "Mid-size IPP C",
      capacity: "50–100 MW",
      strategy: "Conservative tariff positioning",
      position: "Weak — limited execution track record; unlikely to submit at competitive tariff."
    }
  ],
  financingStructure: [
    { source: "Senior Debt (REC/PFC Consortium)", amount: "₹260.4 Cr", share: "70%", terms: "10-year tenor, ~9.10% p.a. door-to-door (revised down 15 bps)" },
    { source: "Sponsor Equity (Continuum Energy)", amount: "₹111.6 Cr", share: "30%", terms: "Internal accruals + green bond proceeds (tranche pre-approved)" },
    { source: "Total Project Cost", amount: "₹372.0 Cr", share: "100%", terms: "—" }
  ],
  riskRegister: [
    {
      severity: "Low",
      risk: "Module supply pricing locked with primary vendor; secondary backup secured at ≤2% premium.",
      mitigation: "Pricing risk substantially mitigated. Monitor spot market weekly until RfS submission."
    },
    {
      severity: "Low",
      risk: "ISTS connectivity application for the Bikaner pooling station is pending final CEA sign-off.",
      mitigation: "CEA review at advanced stage — SECI nodal officer has confirmed verbal clearance. Written order expected within 5 days."
    },
    {
      severity: "Low",
      risk: "Remaining 15% of land parcels (vs. 30% in v1) yet to be formally registered.",
      mitigation: "Title due diligence complete; registration formalities in process. No material risk to timeline."
    },
    {
      severity: "Medium",
      risk: "8-day RfS window leaves no buffer for internal approval delays.",
      mitigation: "Escalate to MD for pre-approval of bid parameters. BD team to work in parallel on all submission documents."
    }
  ],
  nextSteps: [
    { step: "Submit RfS bid response to SECI — URGENT", owner: "BD Team", target: "By 23 Jun 2026 (8 days)", status: "In Progress" },
    { step: "Execute module supply LOI with primary vendor", owner: "Procurement", target: "By 18 Jun 2026 (3 days)", status: "In Progress" },
    { step: "Complete remaining land parcel registrations", owner: "Legal", target: "By 30 Jun 2026", status: "In Progress" },
    { step: "Issue term sheet request to REC/PFC consortium", owner: "Finance", target: "By 25 Jun 2026", status: "In Progress" },
    { step: "Shortlist and issue NIT to EPC contractors", owner: "Projects", target: "By 15 Jul 2026", status: "Pending" }
  ]
};

/* ----------------------------------------------------------
   EXTERNAL SOURCES (connected portals)
   ---------------------------------------------------------- */
const EXTERNAL_SOURCES = [
  { id: "seci",     name: "SECI Tender Portal",      domain: "seci.gov.in",       type: "Central PSU",   color: "#4F46E5", opportunities: 1 },
  { id: "mnre",     name: "MNRE Scheme Portal",       domain: "mnre.gov.in",       type: "Ministry",      color: "#059669", opportunities: 1 },
  { id: "tangedco", name: "TANGEDCO e-Procurement",  domain: "tntenders.gov.in",  type: "State DISCOM",  color: "#0891B2", opportunities: 1 },
  { id: "msedcl",   name: "MSEDCL Tender Portal",    domain: "mahadiscom.in",     type: "State DISCOM",  color: "#D97706", opportunities: 0 },
  { id: "kredl",    name: "KREDL Karnataka",          domain: "kredl.kar.nic.in",  type: "State Agency",  color: "#7C3AED", opportunities: 1 },
  { id: "pgcil",    name: "PGCIL ISTS Data",          domain: "powergrid.in",      type: "Transmission",  color: "#DC2626", opportunities: 0 },
];

/* ----------------------------------------------------------
   FETCHED OPPORTUNITIES
   New tenders discovered from external sources, not yet
   evaluated or added to the user's pipeline.
   ---------------------------------------------------------- */
const FETCHED_OPPORTUNITIES = [
  {
    id: "CE-FET-001",
    title: "SECI Tranche XV — 150 MW Solar, Jaisalmer",
    entity: "SECI",
    state: "Rajasthan",
    technology: "Solar PV",
    capacity: "150 MW",
    type: "ISTS-Connected Solar (RfS)",
    deadline: "10 Aug 2026",
    tariff: "₹2.61/kWh (ceiling tariff)",
    score: null,
    riskLevel: "Medium",
    signal: "Newly Fetched",
    status: "active",
    agentAssessment: "Newly fetched from SECI portal. Add to pipeline to trigger a full OppIQ scoring and assessment.",
    scoreBreakdown: { gridAccess: null, policyFit: null, landRisk: null, financialViability: null, competitionIntensity: null },
    riskRegister: [],
    showForensicsLink: false,
    sources: [
      { sourceId: "seci", label: "SECI Tender Portal", detail: "Tranche XV RfS published 02 Jun 2026 · Ref: SECI/RfS/Solar/2026/XV · Jaisalmer cluster, Rajasthan" }
    ]
  },
  {
    id: "CE-FET-002",
    title: "MNRE SIGHT — 50 MW Green Hydrogen Electrolyser",
    entity: "MNRE / SIGHT Scheme",
    state: "Gujarat",
    technology: "Green Hydrogen",
    capacity: "50 MW (Electrolyser)",
    type: "SIGHT Mode-I Incentive Scheme",
    deadline: "25 Sep 2026",
    tariff: "₹50/kg H₂ (incentive ceiling)",
    score: null,
    riskLevel: "Low",
    signal: "Newly Fetched",
    status: "active",
    agentAssessment: "Newly fetched from MNRE portal. Add to pipeline to trigger a full OppIQ scoring and assessment.",
    scoreBreakdown: { gridAccess: null, policyFit: null, landRisk: null, financialViability: null, competitionIntensity: null },
    riskRegister: [],
    showForensicsLink: false,
    sources: [
      { sourceId: "mnre", label: "MNRE Scheme Portal", detail: "SIGHT Mode-I Tranche III — Electrolyser manufacturing incentive, Kutch cluster, Gujarat · Published 28 May 2026" }
    ]
  },
  {
    id: "CE-FET-003",
    title: "TANGEDCO Phase III — 80 MW Rooftop Solar, Chennai",
    entity: "TANGEDCO",
    state: "Tamil Nadu",
    technology: "Rooftop Solar PV",
    capacity: "80 MW (aggregate)",
    type: "Rooftop Solar — Commercial & Industrial",
    deadline: "05 Sep 2026",
    tariff: "₹4.10/kWh (PPA)",
    score: null,
    riskLevel: "Low",
    signal: "Newly Fetched",
    status: "active",
    agentAssessment: "Newly fetched from TANGEDCO portal. Add to pipeline to trigger a full OppIQ scoring and assessment.",
    scoreBreakdown: { gridAccess: null, policyFit: null, landRisk: null, financialViability: null, competitionIntensity: null },
    riskRegister: [],
    showForensicsLink: false,
    sources: [
      { sourceId: "tangedco", label: "TANGEDCO e-Procurement", detail: "Tender T/2026/RS/0019 published 28 May 2026 · Rooftop Solar C&I segment, Chennai metropolitan area" }
    ]
  },
  {
    id: "CE-FET-004",
    title: "KREDL Phase II — 75 MW Wind, Chitradurga",
    entity: "KREDL",
    state: "Karnataka",
    technology: "Wind Power",
    capacity: "75 MW",
    type: "State Procurement Wind (RfP)",
    deadline: "30 Sep 2026",
    tariff: "₹3.28/kWh (quoted tariff bid)",
    score: null,
    riskLevel: "Medium",
    signal: "Newly Fetched",
    status: "active",
    agentAssessment: "Newly fetched from KREDL portal. Add to pipeline to trigger a full OppIQ scoring and assessment.",
    scoreBreakdown: { gridAccess: null, policyFit: null, landRisk: null, financialViability: null, competitionIntensity: null },
    riskRegister: [],
    showForensicsLink: false,
    sources: [
      { sourceId: "kredl", label: "KREDL Karnataka", detail: "RfP No. KREDL/2026/WIND/009 published 10 Jun 2026 · Chitradurga Wind Zone, Karnataka" }
    ]
  }
];

/* ----------------------------------------------------------
   COLLEAGUES (Business Plan sharing)
   ---------------------------------------------------------- */
const COLLEAGUES = [
  { id: "c1", name: "Priya Sharma",   role: "Finance Director",    email: "priya.sharma@continuumenergy.com",   initials: "PS", color: "#4F46E5" },
  { id: "c2", name: "Rahul Mehta",    role: "VP Strategy",         email: "rahul.mehta@continuumenergy.com",    initials: "RM", color: "#0891B2" },
  { id: "c3", name: "Ananya Iyer",    role: "Legal Counsel",       email: "ananya.iyer@continuumenergy.com",    initials: "AI", color: "#059669" },
  { id: "c4", name: "Vikram Nair",    role: "Head of Projects",    email: "vikram.nair@continuumenergy.com",    initials: "VN", color: "#D97706" },
  { id: "c5", name: "Deepa Krishnan", role: "CFO",                 email: "deepa.krishnan@continuumenergy.com", initials: "DK", color: "#7C3AED" },
  { id: "c6", name: "Suresh Patel",   role: "Sr. Project Manager", email: "suresh.patel@continuumenergy.com",   initials: "SP", color: "#DC2626" },
  { id: "c7", name: "Meera Joshi",    role: "BD Analyst",          email: "meera.joshi@continuumenergy.com",    initials: "MJ", color: "#0D9488" }
];

/* ----------------------------------------------------------
   "HOW OPPIQ THINKS" — explainer steps
   ---------------------------------------------------------- */
const HOW_IT_THINKS_STEPS = [
  {
    title: "Data Sources",
    desc: "Continuously monitors public energy-sector portals — SECI, MNRE, PGCIL, CERC/SERC orders, and state DISCOM tender notices — for new opportunity listings and policy updates."
  },
  {
    title: "Signal Detection",
    desc: "Flags time-sensitive signals: approaching deadlines, missing documentation, regulatory changes, and unusual patterns in vendor or contract data."
  },
  {
    title: "Opportunity Scoring",
    desc: "Scores each opportunity across five dimensions — Grid Access, Policy Fit, Land Risk, Financial Viability, and Competition Intensity — to produce a single comparable priority score."
  },
  {
    title: "Recommendation Engine",
    desc: "Ranks opportunities by operational urgency and generates a prioritized action list with suggested next steps for the BD team."
  },
  {
    title: "Business Plan Generation",
    desc: "Auto-drafts a structured business plan for high-priority opportunities — executive summary, financial KPIs, timeline, financing structure, and risk register — ready for leadership review."
  },
  {
    title: "Document Verification",
    desc: "Cross-checks supporting documents (invoices, POs, compliance certificates) for consistency, flagging anomalies like GSTIN mismatches or date sequence errors before approval."
  }
];

/* ----------------------------------------------------------
   CLOSED OPPORTUNITIES
   ---------------------------------------------------------- */
const CLOSED_OPPORTUNITIES = [
  {
    id: "CE-OPP-CLO-001",
    title: "SECI Tranche XII — 100 MW Solar PV",
    entity: "SECI",
    state: "Rajasthan",
    technology: "Solar PV",
    capacity: "100 MW (AC)",
    type: "ISTS-Connected Solar (RfS)",
    deadline: "28 Feb 2026",
    tariff: "₹2.48/kWh",
    score: 86,
    riskLevel: "Medium",
    status: "closed",
    outcome: "won",
    closedOn: "15 Mar 2026",
    signal: "Won — L1",
    sources: [
      { sourceId: "seci", label: "SECI Tender Portal", detail: "Tranche XII RfS — Ref: SECI/RfS/Solar/2025/XII · Published 05 Jan 2026" },
      { sourceId: "pgcil", label: "PGCIL ISTS Data", detail: "765 kV Bikaner pooling station evacuation — capacity confirmed Jan 2026" }
    ],
    scoreBreakdown: { gridAccess: 90, policyFit: 88, landRisk: 82, financialViability: 86, competitionIntensity: 80 },
    bidSummary: {
      ourTariff: "₹2.48/kWh",
      winningTariff: "₹2.48/kWh",
      bidPosition: "L1 (Winner)",
      totalBidders: 6,
      submittedOn: "28 Feb 2026",
      bidBond: "₹1.92 Cr (2% of project cost)",
      technicalScore: "94/100"
    },
    awardDetails: {
      loaDate: "20 Mar 2026",
      ppaSignedOn: "15 Apr 2026",
      ppaDuration: "25 years",
      ppaTariff: "₹2.48/kWh",
      ppaCapacity: "100 MW (AC)",
      codTarget: "Dec 2027",
      procuringEntity: "SECI / NTPC Vidyut Vyapar Nigam Ltd."
    },
    finalFinancials: {
      capex: "₹388 Cr",
      projectIrr: "14.0%",
      equityIrr: "16.5%",
      dscr: "1.33x (avg)",
      revenue: "₹52.4 Cr (Year 1 est.)",
      debtTenor: "18 years",
      lender: "REC Limited — ₹271.6 Cr @ 9.30% p.a."
    },
    rfpDocuments: [
      { id: "rfp-1", name: "RfS Notice — SECI Tranche XII", docType: "Tender Notice", issuedOn: "05 Jan 2026", ref: "SECI/RfS/Solar/2025/XII" },
      { id: "rfp-2", name: "Technical Specifications & Site Survey Data", docType: "Technical Document", issuedOn: "05 Jan 2026", ref: "SECI/TS/2025/XII-A" },
      { id: "rfp-3", name: "Draft PPA, RfS Agreement & SIA", docType: "Commercial Document", issuedOn: "05 Jan 2026", ref: "SECI/PPA/2025/XII" },
      { id: "rfp-4", name: "ISTS Connectivity Guidelines (CEA)", docType: "Regulatory Annexure", issuedOn: "05 Jan 2026", ref: "CEA/ISTS/2025/GL-14" },
      { id: "rfp-5", name: "Corrigendum 1 — Bid Deadline Extension", docType: "Corrigendum", issuedOn: "20 Jan 2026", ref: "SECI/Corr/2025/XII/01" }
    ],
    rfpResponses: [
      { id: "res-1", name: "Technical Bid — Continuum Energy", docType: "Technical Response", submittedOn: "28 Feb 2026", status: "Accepted", statusType: "positive" },
      { id: "res-2", name: "Financial Bid — Price Schedule (₹2.48/kWh)", docType: "Financial Response", submittedOn: "28 Feb 2026", status: "L1 — Winner", statusType: "positive" },
      { id: "res-3", name: "Bid Security — Bank Guarantee (ICICI Bank)", docType: "Bank Guarantee", submittedOn: "25 Feb 2026", status: "Released post-LOA", statusType: "neutral" },
      { id: "res-4", name: "Company Qualification Dossier & Track Record", docType: "Qualification Document", submittedOn: "28 Feb 2026", status: "Cleared", statusType: "positive" },
      { id: "res-5", name: "Net Worth & Financial Capacity Certificate", docType: "Financial Eligibility", submittedOn: "28 Feb 2026", status: "Cleared", statusType: "positive" },
      { id: "res-6", name: "Land Pre-Commitment Confirmation (80%)", docType: "Land Document", submittedOn: "28 Feb 2026", status: "Accepted", statusType: "positive" }
    ],
    competitiveAnalysis: {
      totalBidders: 6,
      results: [
        { rank: "L1", entity: "Continuum Energy", tariff: "₹2.48/kWh", capacity: "100 MW", notes: "Our bid — Winner" },
        { rank: "L2", entity: "Large IPP A", tariff: "₹2.51/kWh", capacity: "300 MW", notes: "Disqualified above ceiling in tranche allotment" },
        { rank: "L3", entity: "Large IPP B", tariff: "₹2.54/kWh", capacity: "200 MW", notes: "" },
        { rank: "L4", entity: "Mid-size IPP C", tariff: "₹2.57/kWh", capacity: "100 MW", notes: "" }
      ]
    },
    lessonsLearned: [
      { type: "positive", title: "Early land pre-aggregation was the decisive advantage", detail: "Securing 80%+ of the required land before RfS publication eliminated execution risk contingency from our tariff, letting us bid ₹0.03–0.06/kWh lower than comparable competitors." },
      { type: "positive", title: "Module supply pricing locked 90 days ahead of bid", detail: "Pre-negotiating module pricing with two Tier-1 suppliers three months before submission protected us against the 4% spot price increase that narrowed competitor margins in the final week." },
      { type: "positive", title: "Technical score (94/100) differentiated us from L2 bidder", detail: "SECI's evaluation matrix weighted execution track record at 40%. Our 3.2 GW operational portfolio scored highest in that category, providing headroom even if our tariff had been marginally higher." },
      { type: "improvement", title: "Bank guarantee turnaround needs a 10-day buffer", detail: "BG was issued only 72 hours before submission. Future timelines should require BG initiation no later than T-10 days to absorb bank processing delays without last-minute risk." },
      { type: "improvement", title: "MD approval on final tariff came 18 hours before deadline", detail: "Internal governance delayed financial bid finalization. Recommend establishing a pre-approved tariff band (floor/ceiling) at start of bid preparation so final tariff sign-off is a formality, not a decision point." },
      { type: "learning", title: "SECI's ISTS capacity confirmation is a harder prerequisite than it appears", detail: "Two competitors were de-risked by PGCIL data we had sourced independently months earlier. This confirms the value of continuous transmission monitoring even outside active bid windows." }
    ],
    agentAssessment: "CE-OPP-CLO-001 was a well-executed bid. Early land and supply-chain preparation were the key differentiators versus the L2 bidder. The ₹2.48/kWh tariff sets a useful internal benchmark for Tranche XIV (CE-OPP-001) — any tariff above ₹2.53/kWh still delivers acceptable equity returns on a cost basis consistent with this win."
  },
  {
    id: "CE-OPP-CLO-002",
    title: "NTPC Floating Solar — 50 MW, Ramagundam",
    entity: "NTPC Limited",
    state: "Telangana",
    technology: "Floating Solar PV",
    capacity: "50 MW (AC)",
    type: "NTPC Tender — Floating Solar on Reservoir",
    deadline: "10 Dec 2025",
    tariff: "₹3.28/kWh",
    score: 71,
    riskLevel: "Medium",
    status: "closed",
    outcome: "lost",
    closedOn: "22 Dec 2025",
    signal: "Lost — L3",
    sources: [
      { sourceId: "pgcil", label: "PGCIL ISTS Data", detail: "NTPC Ramagundam reservoir — 50 MW floating solar tender notice, Oct 2025" }
    ],
    scoreBreakdown: { gridAccess: 78, policyFit: 75, landRisk: 68, financialViability: 65, competitionIntensity: 58 },
    bidSummary: {
      ourTariff: "₹3.28/kWh",
      winningTariff: "₹3.07/kWh",
      bidPosition: "L3",
      totalBidders: 8,
      submittedOn: "10 Dec 2025",
      bidBond: "₹72 L",
      technicalScore: "81/100"
    },
    awardDetails: null,
    finalFinancials: null,
    rfpDocuments: [
      { id: "rfp-1", name: "Tender Notice — Floating Solar 50 MW, Ramagundam", docType: "Tender Notice", issuedOn: "15 Oct 2025", ref: "NTPC/FS/2025/RGM-50" },
      { id: "rfp-2", name: "Technical Specifications — Floating Solar System", docType: "Technical Document", issuedOn: "15 Oct 2025", ref: "NTPC/TS/2025/RGM-50-A" },
      { id: "rfp-3", name: "Site Survey Report — Ramagundam Reservoir", docType: "Site Report", issuedOn: "15 Oct 2025", ref: "NTPC/SSR/2025/RGM" },
      { id: "rfp-4", name: "Draft O&M and Site Access Agreement", docType: "Commercial Document", issuedOn: "15 Oct 2025", ref: "NTPC/OMA/2025/RGM-50" },
      { id: "rfp-5", name: "Corrigendum 1 — Revised Structural Load Specs", docType: "Corrigendum", issuedOn: "01 Nov 2025", ref: "NTPC/Corr/2025/RGM/01" }
    ],
    rfpResponses: [
      { id: "res-1", name: "Technical Bid — Floating Solar Design Proposal", docType: "Technical Response", submittedOn: "10 Dec 2025", status: "Accepted", statusType: "positive" },
      { id: "res-2", name: "Financial Bid — ₹3.28/kWh (L3 position)", docType: "Financial Response", submittedOn: "10 Dec 2025", status: "L3 — Not awarded", statusType: "negative" },
      { id: "res-3", name: "Bid Security — Bank Guarantee", docType: "Bank Guarantee", submittedOn: "08 Dec 2025", status: "Forfeited (nil)", statusType: "neutral" },
      { id: "res-4", name: "Floating Solar Technology Partner Agreement", docType: "Qualification Document", submittedOn: "10 Dec 2025", status: "Cleared", statusType: "positive" },
      { id: "res-5", name: "Net Worth & Experience Certificate", docType: "Financial Eligibility", submittedOn: "10 Dec 2025", status: "Cleared", statusType: "positive" }
    ],
    competitiveAnalysis: {
      totalBidders: 8,
      results: [
        { rank: "L1", entity: "Specialist Floating Solar Co.", tariff: "₹3.07/kWh", capacity: "50 MW", notes: "Winner — proprietary floating structure reduced cost" },
        { rank: "L2", entity: "Large IPP with JV partner", tariff: "₹3.18/kWh", capacity: "50 MW", notes: "JV enabled lower tech cost" },
        { rank: "L3", entity: "Continuum Energy", tariff: "₹3.28/kWh", capacity: "50 MW", notes: "Our bid — ₹0.21/kWh above winner" },
        { rank: "L4", entity: "Mid-size IPP D", tariff: "₹3.35/kWh", capacity: "50 MW", notes: "" }
      ]
    },
    lessonsLearned: [
      { type: "improvement", title: "Floating solar requires a specialist EPC or JV partner", detail: "The L1 and L2 winners both had proprietary floating structure technology or JV arrangements that reduced CAPEX by 12–15% versus our general EPC quotes. Entering floating solar without a technology partnership is uncompetitive." },
      { type: "improvement", title: "Our financial modelling understated O&M costs for water-based structures", detail: "Post-bid analysis showed our O&M cost assumptions were 18% below the actual market rate for floating solar maintenance, which would have eroded the equity IRR below acceptable thresholds had we won." },
      { type: "learning", title: "Niche technology tenders should only be bid with a validated cost advantage", detail: "Floating solar is a specialist segment. Future bids should only be submitted after securing a technology partner agreement that demonstrably reduces CAPEX to within 5% of the market leader." },
      { type: "learning", title: "The ₹0.21/kWh gap to L1 was structural, not a pricing error", detail: "Even with the most aggressive internal assumptions, we could not have closed the gap to L1 without a technology partnership. This was the correct call to pursue at the time; the lesson is upstream in partner selection, not bid strategy." },
      { type: "positive", title: "Technical bid quality was strong — 81/100 score", detail: "NTPC evaluators noted the quality of our design proposal. Our technical credibility in this segment is established; the barrier is purely cost structure, not capability." }
    ],
    agentAssessment: "CE-OPP-CLO-002 outcome (L3) reflects a structural cost disadvantage in floating solar without a specialist technology partner. The loss was anticipated at the scoring stage (71/100) — competition intensity was flagged as the primary risk. Key learning: do not pursue niche technology tenders without a JV or licensed technology arrangement that closes the CAPEX gap."
  }
];
