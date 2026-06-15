# OppIQ — AI Opportunity Intelligence

OppIQ is an AI-assisted opportunity intelligence platform built for **Continuum
Energy**, a renewable energy independent power producer (IPP). It gives the
business development (BD) team a single, prioritized view of every public
tender, Request for Selection (RfS), and policy signal worth pursuing —
so the team always knows what to work on next, and why.

---

## The Problem

Renewable energy BD teams track opportunities across dozens of fragmented
sources — SECI tenders, MNRE notifications, state DISCOM portals, PGCIL
transmission updates, CERC/SERC orders, and individual project documentation.
Each opportunity carries its own deadlines, eligibility conditions, land and
grid status, and risk profile.

Without a unified view, teams lose time on three things:

- **Missed or rushed deadlines** because a tender's RfS window wasn't tracked
  closely enough.
- **Stalled opportunities** sitting in diligence because nobody surfaced a
  missing document (land lease, grid connectivity letter, anchor consumer LOI).
- **Manual, slow business case preparation** — building a leadership-ready
  business plan from scratch for every opportunity that clears the bar.

OppIQ addresses all three by continuously scoring, ranking, and explaining
the pipeline in plain language.

---

## What OppIQ Does

### Opportunity Insights (Dashboard)
A single landing view with portfolio-wide stats (opportunities tracked, high
priority count, average opportunity score, document flags), AI-generated
insight cards for the most time-sensitive issues, and a **Suggested Next
Opportunities** table ordered by operational urgency — not just by project size.

### Run Intelligence Scan
A one-click agent run that re-scans monitored sources (SECI, MNRE, DISCOMs,
transmission availability) and refreshes opportunity scores and
recommendations. The live activity log shows exactly what the agent checked
and what it found, stage by stage.

### Opportunity Detail
For every tracked opportunity, OppIQ provides:
- A **score breakdown across five dimensions** — Grid Access, Policy Fit,
  Land Risk, Financial Viability, and Competition Intensity — rolled up into
  a single comparable Opportunity Score.
- An **agent assessment** in plain language explaining why the opportunity is
  (or isn't) worth prioritizing right now.
- A **risk register** with mitigations for each identified risk.

### Generate Business Plan
Once an opportunity's score crosses the 75-point threshold, OppIQ can
auto-draft a full leadership-ready business plan: executive summary,
financial overview (capex, IRR, DSCR, payback), project timeline,
competitive positioning, financing structure, risk register, and
recommended next steps. The finished plan can be **exported to Word,
exported to a spreadsheet, or shared via a copy-to-clipboard link** —
turning a multi-day manual exercise into an on-demand output.

### Document Forensics
A focused diligence tool: attach a vendor invoice or supporting document
(drag-and-drop or file picker), and OppIQ runs an automated forensic check —
validating GSTIN format, cross-checking vendor bank details against master
records, and comparing invoice and purchase order dates for sequencing
issues. Findings are presented as a pass/flag summary before any payment is
approved.

### My Pipeline / In Diligence / Closed
Pipeline views filtered by status, each with the opportunity's current score,
risk level, and a one-click path into the detail view.

### How OppIQ Thinks
A plain-language walkthrough of the intelligence pipeline — data sources,
signal detection, opportunity scoring, the recommendation engine, business
plan generation, and document verification — so the BD team (and leadership)
understands the reasoning behind every score and recommendation.

### Topbar Search & Notifications
Global search across all tracked opportunities, plus a notifications center
that surfaces the same time-sensitive signals (deadline risk, missing
documents, flagged anomalies) without needing to visit the dashboard.

---

## What Help This Gives Continuum Energy

- **Faster prioritization.** Instead of reviewing every opportunity with
  equal weight, the team starts each day with a ranked list driven by
  deadlines, risk, and score — so the highest-urgency item is never buried.
- **Fewer missed deadlines.** RfS and submission windows are surfaced as
  countdowns and notifications well before they become a crisis.
- **Earlier visibility into blockers.** Missing land leases, grid
  connectivity letters, or anchor consumer agreements are flagged as soon as
  they're identified, rather than discovered late in diligence.
- **Consistent, comparable scoring.** Every opportunity is evaluated against
  the same five dimensions, removing guesswork and personal bias from
  go/no-go decisions.
- **Dramatically faster business case turnaround.** A business plan that
  would normally take days of cross-team coordination can be produced,
  reviewed, and exported in minutes — accelerating the path from "qualified
  opportunity" to "submitted bid."
- **Stronger financial controls.** Document Forensics adds an automated
  second look at vendor invoices before payment, catching sequencing and
  data-consistency issues that are easy to miss manually.
- **A shared source of truth.** Everyone on the BD team — and leadership —
  sees the same pipeline, the same scores, and the same reasoning, making
  pipeline reviews faster and more focused.

---

## How It's Built

OppIQ is a lightweight single-page application:

- **No build step, no frameworks** — vanilla HTML, CSS, and JavaScript.
- **Client-side routing** between views (Dashboard, Opportunity Detail,
  Document Forensics, Business Plan, Pipeline, How OppIQ Thinks).
- **Centralized data layer** (`data/opportunities.js`) holding all
  opportunities, scores, insight cards, and reference documents.
- **Export utilities** that generate real downloadable Word and spreadsheet
  files for business plans, and a working clipboard-based share link.

This makes it easy to run anywhere — including static hosts like GitHub
Pages — with zero configuration.

---

## Getting Started

No build step, no dependencies, no installation.

1. Open `index.html` directly in a modern browser, **or**
2. Serve the folder with any static file server, e.g.:

   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```

The app is also ready to deploy as-is to GitHub Pages — just point Pages at
this folder (or the repository root, if this folder *is* the repository root).

---

## Project Structure

```
GT_OPPIQ/
├── index.html              App shell (sidebar, topbar, modals, mount point)
├── styles.css               Design system & component styles
├── script.js                Views, navigation, scoring, exports, and agent
│                             activity simulations
├── data/
│   └── opportunities.js     Opportunities, insight cards, notifications,
│                             scan/forensics scripts, business plan content
├── assets/
│   ├── logo.svg
│   └── sample-documents/
│       └── Invoice_SES-2026-0734.html   Sample EPC invoice used by
│                                          Document Forensics
└── opportunity.md            Source business requirements document
```

---

## Notes

- Company names, GSTINs, tender references, tariffs, and financial figures
  throughout this build are illustrative.
- "Export to Word" and "Export to Excel" on the Business Plan page produce
  real downloadable files; "Share" copies a link to your clipboard.
