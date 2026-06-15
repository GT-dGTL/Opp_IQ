# Business Requirements Document (BRD)
## OppIQ — AI Opportunity Intelligence Module
### Prepared for: Continuum Energy | Development Team: Claude Code (AI Pair Programmer)

---

## 1. Document Control

| Field | Detail |
|---|---|
| Document Title | BRD – OppIQ Opportunity Intelligence Module |
| Product Name | OppIQ (Opportunity Intelligence) |
| Client / Brand | Continuum Energy |
| Prepared By | Business Analyst |
| Prepared For | Development Team (Claude Code) |
| Document Type | Demo / Proof-of-Concept (POC) Build |
| Version | 1.0 |
| Status | Draft for Development |

---

## 2. Executive Summary

OppIQ is a **demo-grade, single-page web application** that simulates an AI-powered opportunity intelligence platform for Continuum Energy, a renewable energy IPP (Independent Power Producer). The product helps business development teams identify, score, and act on renewable energy procurement opportunities (SECI tenders, state DISCOM RPO gaps, MNRE schemes, C&I open access deals, etc.).

This BRD describes a **fully self-contained, front-end-only demo**. No live AI API calls, no backend, no external data feeds. All "AI" behaviour (insights, scoring, document forensics, business plan generation) must be **pre-scripted/simulated** using static mock data, animated UI sequences, and timed reveals — designed to **look and feel like a live, intelligent product** during a stakeholder demo.

The visual design must replicate the **UI theme, layout grammar, color palette, and component patterns** shown in the attached reference screenshot (a claims-management product called "ClaimIQ"), re-skinned for Continuum Energy's renewable energy opportunity intelligence use case.

A secondary deliverable is a **realistic sample invoice document** (provided separately) that can be "uploaded" into the demo to showcase the document verification / forensics feature.

---

## 3. Background & Business Context

Continuum Energy's business development team manually tracks renewable energy tenders, scheme notifications, RPO compliance gaps, and grid availability data across multiple government portals (SECI, MNRE, PGCIL, CERC/SERC, state DISCOMs). This is time-consuming and reactive.

OppIQ is being positioned as an **internal innovation showcase / sales demo** — a polished, "looks real" product that demonstrates how an AI co-pilot could:

- Continuously monitor public energy-sector data sources
- Surface time-sensitive signals (deadlines, document gaps, anomalies)
- Score and rank opportunities by feasibility
- Auto-draft business plans for high-priority opportunities
- Verify supporting documents (invoices, contracts, compliance certificates) for authenticity/consistency

**Important:** This is a *demo for stakeholder buy-in*, not a production system. All "intelligence" is simulated through scripted UI behaviour, mock datasets, and pre-written content — there is **no live AI inference, no external API, no real document parsing**.

---

## 4. Objectives

| # | Objective | Success Criteria |
|---|---|---|
| O1 | Re-create the reference UI (ClaimIQ-style) for Continuum Energy's renewable energy domain | Pixel-level fidelity to layout, spacing, color system, typography, and component shapes from the reference screenshot |
| O2 | Simulate an "AI thinking" experience without real AI calls | Animated agent log, timed reveals, scripted insight cards — feels live, costs nothing, works offline |
| O3 | Present a believable opportunity pipeline | Minimum 4–6 mock opportunities with realistic Indian renewable energy data (SECI, MNRE, DISCOM, etc.) |
| O4 | Demonstrate document intelligence using a sample invoice | Upload/preview flow that "analyzes" an invoice and flags mock anomalies/insights |
| O5 | Make the product feel "branded and original" | Custom name (OppIQ), custom logo mark, Continuum Energy color accents layered onto the base theme |
| O6 | Be deployable as a single static artifact | Single HTML file (or React artifact), no backend, no API keys, no environment variables |

---

## 5. Scope

### 5.1 In Scope
- Full front-end UI build (HTML/CSS/JS or React, single-file artifact)
- Left sidebar navigation (matching reference: Pipeline, In Review, Completed, Worklist, Learn sections)
- "Queue Insights" → renamed **"Opportunity Insights"** dashboard
- Three signal cards (SLA/Deadline Watch, Data Source Blockers, Pattern/Forensics Watch)
- "Suggested Next Actions" table with risk badges, opportunity metadata, and action links
- Opportunity detail drill-down (scoring breakdown, agent insight text, risk register)
- Mock "agent activity log" with animated, timed log lines (simulated thinking)
- Document upload simulation (drag-and-drop or "attach" button) using the supplied sample invoice
- Document Forensics panel — pre-scripted anomaly findings on the sample invoice
- Auto-generated "Business Plan" view for the top-scored opportunity (static, pre-written content rendered dynamically)
- Export buttons (Word/Excel/Share) — UI only, can show a toast/alert ("Export simulated for demo")
- Responsive desktop layout (primary), basic tablet support (secondary)

### 5.2 Out of Scope
- Any real API integration (Anthropic, OpenAI, government portals, etc.)
- User authentication / login / role management (beyond a static "Assessor"-style profile badge)
- Database, persistence layer, backend services
- Real OCR / document parsing
- Mobile-first design (nice-to-have only)
- Multi-user / multi-tenant support

---

## 6. Branding & Renaming Guide (Reference → OppIQ)

The reference screenshot is from a product called **"ClaimIQ"** (claims assessment). Rename all elements to fit Continuum Energy's renewable energy opportunity intelligence context:

| Reference (ClaimIQ) | OppIQ (Continuum Energy) |
|---|---|
| ClaimIQ (logo/wordmark) | **OppIQ** |
| "Assessor" role chip | "BD Analyst" or "Assessor" (keep generic) |
| My Queue | My Pipeline |
| In Review | In Diligence |
| Completed | Closed / Won-Lost |
| Queue Insights | Opportunity Insights |
| "Signals that change what you should open next." | "Signals that change what you should pursue next." |
| SLA Watch | Deadline Watch |
| "Deepa Nair is most overdue" | "[Opportunity name] is most time-sensitive" |
| Document Blockers | Data Gaps |
| "2 cases need documents" | "2 opportunities need supporting documents" |
| Pattern Watch / Document Forensics | Pattern Watch / Document Forensics (kept — fits invoice use case) |
| RISK / PATIENT / HOSPITAL / SIGNAL / ACTION columns | RISK / OPPORTUNITY / ENTITY / SIGNAL / ACTION |
| "How It Thinks" (Learn section) | "How OppIQ Thinks" |
| Sidebar icon set | Keep same icon family (lucide-react / inline SVG), swap to energy-relevant icons where natural (zap, sun, wind icons for opportunity types) |

**Logo Mark:** Square gradient tile (purple→indigo, matching reference `IQ` mark) with text **"OQ"** or **"⚡IQ"**, label "OppIQ" beside it.

---

## 7. Color & Typography System (extracted from reference screenshot)

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#4F46E5` (indigo-600) | Logo tile, active nav, links, primary buttons |
| `--primary-light` | `#EEF2FF` (indigo-50) | Active nav background, light highlight chips |
| `--text-main` | `#0F172A` | Headings, primary text |
| `--text-muted` | `#64748B` | Secondary text, labels |
| `--text-faint` | `#94A3B8` | Sub-labels, placeholders |
| `--bg-app` | `#F8FAFC` | App background |
| `--bg-surface` | `#FFFFFF` | Cards, sidebar, table |
| `--border` | `#E2E8F0` | Card borders, dividers |
| `--accent-red` | `#DC2626` / bg `#FEE2E2` | SLA/Deadline Watch card border + "Overdue" badges |
| `--accent-amber` | `#D97706` / bg `#FEF3C7` | Document Blockers card border + "Medium" risk badges, "Documents Needed" badges |
| `--accent-blue` | `#4F46E5` / bg `#EEF2FF` | Pattern Watch card border + info badges |
| `--accent-green` | `#16A34A` / bg `#DCFCE7` | "Low" risk, success states |
| `--accent-red-risk` | `#DC2626` / bg `#FEE2E2` | "High" risk badges |

**Typography:** Sans-serif (Inter, or DM Sans as fallback), weight 400/500/600/700. Card titles ~15–16px semibold, body ~13–14px regular, labels ~11px uppercase with letter-spacing.

**Component shapes:**
- Sidebar: fixed width ~260–280px, white background, light border-right
- Top bar: white, height ~60px, breadcrumb + page title + right-side icons (search, notification bell with red dot, user avatar)
- Insight cards: 3-column grid, white card, **4px colored left border**, icon chip top-left, label (uppercase, gray), bold title, description text, link with arrow (`→`)
- Table: clean rows, light header row in uppercase gray, risk badges as pill shapes with light background + bold text color, "Open" as a link-styled action

---

## 8. Functional Requirements (Detailed)

### FR-1: Application Shell
- Top bar: OppIQ logo (left), breadcrumb (`< My Pipeline`), page title "Opportunity Insights", right-aligned: search icon, notification bell (with red dot), role chip ("BD Analyst" or "Assessor"), user avatar with initials (e.g., "RM" → use a Continuum Energy persona, e.g., "AK" for Arjun Kapoor)
- Left sidebar: grouped sections — **PIPELINE** (My Pipeline, In Diligence, Closed), **WORKLIST** (Opportunity Insights — active/highlighted), **LEARN** (How OppIQ Thinks)
- Sidebar footer: user profile card (avatar, name, role) + settings/help icons

### FR-2: Opportunity Insights Dashboard (Landing View)
- Page header: title with sparkle/AI icon + subtitle tagline
- Three signal cards in a row:
  1. **Deadline Watch** (red left border) — most time-critical opportunity, days remaining/overdue, "Open case →" link
  2. **Data Gaps** (amber left border) — count of opportunities missing documents, "Draft notice →" or "View gaps →" link
  3. **Pattern Watch** (indigo/blue left border) — document forensics alert referencing the sample invoice opportunity, "View anomaly →" link

### FR-3: Suggested Next Actions Table
- Section header: "Suggested Next Opportunities" + subtitle "Ordered by operational urgency, not portfolio size."
- Columns: **RISK** (badge: High/Medium/Low), **OPPORTUNITY** (project name + ID, e.g., "SECI Tranche XIV — CE-OPP-001"), **ENTITY** (issuing body/DISCOM/developer, e.g., "SECI" / "TANGEDCO" / "Unknown / Unverified"), **SIGNAL** (badge: "72d to deadline", "Documents Needed", "Anomaly Flagged"), **ACTION** ("Open" link)
- Minimum 4 rows of mock data (see Section 10 — Mock Data Spec)
- Clicking "Open" expands or navigates to the Opportunity Detail view

### FR-4: Opportunity Detail View
- Header: Opportunity ID + title + source + overall score pill (color-coded: green ≥75, amber 60–74, red <60)
- Metadata chips: State, Technology, Capacity, Type, Deadline, Tariff
- Score breakdown (5 dimensions as horizontal progress bars): Grid Access, Policy Fit, Land Risk, Financial, Competition
- "Agent Assessment" callout box — pre-written insight text (static, no live generation)
- Risk register list (severity badge + risk + mitigation)
- Action buttons: "Generate Business Plan" (primary), "View Source" (opens alert: "Source portal would open here in production")

### FR-5: Simulated Agent Activity Log
- Triggered by a "Run Intelligence Scan" button (kept from reference pattern, renamed if needed)
- Animated log lines appear sequentially with `setTimeout`, each with a status dot (info/success/warning), bold keyword, and timestamp
- Log content is **fully scripted** — describes checking SECI, MNRE, PGCIL, DISCOM, CERC sources, finding opportunities, scoring them
- No network calls — purely `setTimeout`-driven UI animation

### FR-6: Document Upload & Forensics (Invoice Feature)
- An "Attach Document" / drag-and-drop zone within the Pattern Watch / Opportunity Detail flow
- User can upload the **sample invoice** (provided separately as a PDF/image or rendered HTML)
- On "upload," trigger a scripted **"Document Forensics"** sequence:
  - Animated progress ("Extracting line items...", "Cross-checking GSTIN...", "Validating bank details against vendor master...", "Checking date consistency...")
  - Result panel: 2–3 pre-written findings (e.g., "Invoice date precedes PO date by 4 days — flagged for review", "GSTIN format valid", "Bank account matches vendor master record")
- All findings are static text mapped to the specific sample invoice content — must reference actual values from the invoice (vendor name, invoice number, amount) so it looks contextually aware

### FR-7: Auto-Generated Business Plan View
- For the top-scored opportunity, "Generate Business Plan" reveals a structured plan document within the app:
  - Executive summary (3 paragraphs, static text — written in advance, NOT generated live)
  - KPI grid (Capacity, Capex, IRR, DSCR, Debt/Equity, Payback, CUF, Revenue)
  - Project timeline table + visual phase bar
  - Competitive positioning table
  - Financing plan table
  - Risk register
  - Next steps table
- Export buttons trigger `alert()` or toast: "In a live deployment, this would export as a branded Word/PDF document."

### FR-8: "How OppIQ Thinks" (Learn Section)
- Simple static page explaining (in marketing language) the conceptual pipeline: Data Sources → Signal Detection → Scoring → Recommendation → Plan Generation → Document Verification
- Use simple step cards or a horizontal stepper diagram
- Purely informational, no interactivity required

---

## 9. Mock Data Specification

All data is **hardcoded as JS arrays/objects** within the artifact. No fetch calls. Below is the minimum dataset the build must include.

### 9.1 Opportunities (minimum 4–5 records)

| ID | Title | Entity/Source | State | Tech | Capacity | Risk Score | Signal |
|---|---|---|---|---|---|---|---|
| CE-OPP-001 | SECI Tranche XIV — 100 MW Solar | SECI | Rajasthan | Solar PV | 100 MW | 88 (High priority) | "12d to RfS deadline" |
| CE-OPP-002 | TANGEDCO 200 MW Wind + BESS | TANGEDCO | Tamil Nadu | Wind + Storage | 200 MW | 72 | "Documents Needed" |
| CE-OPP-003 | MSEDCL Open Access C&I Solar | MSEDCL | Maharashtra | Solar PV | 40–80 MW | 65 | "Anchor consumer pending" |
| CE-OPP-004 | PM-KUSUM Component A | KREDL/MNRE | Karnataka | Distributed Solar | 25 MW eq. | 55 | "Approval delay risk" |
| CE-OPP-005 | Vendor Invoice Anomaly — EPC Contract | Internal / Vendor | Rajasthan | Solar PV (EPC) | — | — | "Anomaly Flagged" (links to invoice) |

### 9.2 Insight Cards Content (example copy)

- **Deadline Watch:** "SECI Tranche XIV (CE-OPP-001) RfS closes in 12 days. Bid preparation not yet started."
- **Data Gaps:** "2 opportunities need documents — CE-OPP-002 is blocked by missing land lease and grid connectivity letter."
- **Pattern Watch:** "CE-OPP-005 contains an EPC vendor invoice with a date inconsistency. Review forensic findings before approval."

### 9.3 Sample Invoice Reference Data
The sample invoice (delivered separately) should be a **realistic EPC/equipment supply invoice** for a solar project, e.g.:
- Vendor: a plausible EPC/module supplier name (fictional but realistic, e.g., "Sunline EPC Solutions Pvt. Ltd.")
- Bill-to: Continuum Energy (project SPV name, e.g., "Continuum Solar Rajasthan One Pvt. Ltd.")
- Invoice number, date, GSTIN (fictional but correctly formatted), PO reference, line items (modules, inverters, mounting structure, installation services), subtotal, GST breakdown (CGST/SGST or IGST), total
- This data must be **mirrored** in the Document Forensics findings text in FR-6 so the demo feels coherent

---

## 10. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Deployment | Single self-contained file (HTML or React artifact) — runnable with no build step or environment variables |
| Performance | All animations use `setTimeout`/CSS transitions only; no blocking operations |
| Browser Support | Latest Chrome, Edge, Safari |
| Accessibility | Sufficient color contrast for badges/text; semantic HTML where feasible |
| Data Privacy | All names, GSTINs, invoice numbers, and entities must be **clearly fictional** (no real company/personal data) |
| Maintainability | Mock data centralized in a single JS object/array at the top of the script for easy editing |
| Branding | No references to "ClaimIQ," "Grant Thornton," or any third-party product names anywhere in UI text or code comments |

---

## 11. Assumptions & Constraints

1. This is a **demo artifact only** — stakeholders understand it does not connect to real government portals or AI services.
2. The sample invoice will be supplied as a separate document/image that can be displayed inline (e.g., as an embedded image, PDF preview, or styled HTML invoice) within the artifact's upload flow.
3. "Generate Business Plan" and "Run Intelligence Scan" actions must complete within ~5–8 seconds of simulated activity for demo pacing — not instant, not too long.
4. No real user accounts; the profile shown is a static demo persona (e.g., "Arjun Kapoor, Sr. BD Manager").
5. All currency in ₹ (INR), all dates in `DD MMM YYYY` format, consistent with Indian business conventions.

---

## 12. Acceptance Criteria

- [ ] UI visually matches the reference screenshot's layout grammar (sidebar + top bar + 3-card row + table)
- [ ] Color palette and component styling follow Section 7 token table
- [ ] All ClaimIQ-specific terminology renamed per Section 6
- [ ] Minimum 4 opportunities rendered in the Suggested Next Actions table with correct risk badge coloring
- [ ] "Run Intelligence Scan" produces an animated, timed agent log with no network calls
- [ ] Opportunity detail view shows score breakdown bars, agent insight, and risk register
- [ ] Document upload flow accepts the sample invoice and produces scripted forensic findings referencing actual invoice values
- [ ] "Generate Business Plan" renders a complete static business plan view for CE-OPP-001
- [ ] No API keys, fetch calls to `api.anthropic.com`, or external data dependencies present in the code
- [ ] Single file, runs standalone

---

## 13. Deliverables Summary

| # | Deliverable | Format |
|---|---|---|
| 1 | This BRD | Markdown (.md) |
| 2 | OppIQ Demo Application | Single HTML/React artifact |
| 3 | Sample EPC Invoice (for upload demo) | Provided separately — markdown/HTML invoice ready to render or convert to PDF |

---

## 14. Open Questions for Stakeholder Sign-off

1. Confirm final product name — "OppIQ" vs. alternative (e.g., "GridIQ", "ContinuumIQ")
2. Confirm fictional vendor/SPV names for the invoice are acceptable for client-facing demo
3. Confirm whether "Learn / How OppIQ Thinks" page is required for v1 or can be deferred
4. Confirm desktop-only is acceptable for the demo, or tablet support is needed

---

*End of Document*