# Phase 4 — Scale | *Growth*

*Version: 1.0 | Created: 2026-06-18*

---

## Purpose

Use data from every campaign and every closed deal to make the next cycle perform better. The system learns with every engagement — smarter targeting, tighter messaging, faster closings.

Phase 4 is not the end of the engagement. It's the optimization loop that feeds back into Phase 2 (better targeting) and Phase 3 (tighter playbook). The cycle continues as long as there is inventory.

---

## What OLC Does

**Campaign data review**
- Ad performance by audience, creative, and channel
- Which hooks generated the most qualified leads (not just clicks)
- Which lead sources closed at the highest rate
- Cost per qualified lead vs. cost per closed deal

**Sales conversation data review**
- What objections came up most often — are they covered in the playbook?
- Which parts of the offer presentation landed vs. needed clarification
- Where in the pipeline did leads most often go cold
- Which buyer profiles closed fastest and at what price point

**Decision output**
- Refine targeting: adjust audience, channel mix, or ad creative based on what actually converted
- Refine messaging: update hook angles and offer framing based on what buyers responded to
- Refine offer positioning: if the same objection keeps surfacing, something in the offer needs to change
- Update lead qualification criteria: if certain lead types consistently don't close, remove them from the ICP

**Inventory and pipeline monitoring**
- Tracks sell-out pace vs. target timeline
- Flags when pace is off before it becomes a problem
- Plans next inventory tranche or project phase with higher baseline performance

---

## What the Client Provides

- Updated inventory and pricing as new units or phases become available
- Strategic direction for next tranche or project phase
- Feedback on buyer conversations the developer's team handles directly

---

## Phase 4 Deliverables

**Monthly KPI Dashboard**
- Leads generated (total and qualified)
- Pipeline by stage
- Calls booked and completed
- Conversion rates at each stage
- Units closed and revenue
- Ad spend vs. cost per lead vs. cost per close
- Referral rate: % of buyers who referred someone this month, tracked against refund/cancellation rate (data sourced from Phase 3 Step 7)

**Quarterly Performance Review**
- What worked this quarter
- What underperformed and why
- Recommendations for the next cycle
- Updated playbook sections if needed
- What the developer should do next: expand scope, release the next tranche, or start a second project — never end a review without naming it

---

## Company-Level Learning Loop

The Optimization Loop above feeds Phase 4 learnings back into *this same client's* Phase 2 and Phase 3, better targeting and a tighter playbook for their next tranche or project. That's necessary but not sufficient, it doesn't help the next *different* developer.

At every Quarterly Performance Review, ask one more question before closing it out: **does this learning only matter for this client, or would it have helped any client?**

- Client-specific (their buyer profile, their price point, their objections) → stays in this client's Phase 2/3, nothing more to do.
- Generalizable (an objection pattern that would show up with any developer, a targeting insight that isn't project-specific, a playbook section that would help every future engagement) → roll it into the company-level docs, not just this client's file:
  - `company/icp.md` — if it changes what "a good fit" looks like
  - `company/strategy.md` — if it changes positioning or the pitch itself
  - The master Sales Playbook template referenced in `phase-1-offer.md` 1H — if it's a script, objection-handling, or discovery-question improvement any future client's playbook should start with

Without this step, OLC's own system doesn't get smarter with scale, only each individual client's campaign does. This is the difference between one project going well and OLC itself compounding in quality with every client.

---

## Client Communication Cadence

The developer's confidence in OLC compounds or decays the same way a buyer's does (Phase 3). Applying the same "deliver faster, never leave someone in no man's land" logic to the developer relationship, not just the buyer's.

**First 48 hours of the engagement** (from the moment onboarding fee clears):
- Kickoff call held, not just scheduled
- Developer has a concrete first artifact in hand — even a draft ICP or a brand foundation outline counts, it doesn't need to be finished
- Developer is told exactly when they'll hear from OLC next, with a real date — never "we'll be in touch"

**Smaller, more frequent, over one large batch:**
- Don't hold every deliverable for the Monthly Dashboard. If a piece is ready — an ad creative approved, a playbook section finished, a milestone hit — send it the day it's ready.
- During active Phase 2/3 work, a short weekly snapshot goes out even when there's no material change. Silence reads as no progress; a two-line "still on track, next update Friday" doesn't.

**Never deliver late:**
- Every timeline given to a developer has buffer built in before it's quoted. If something is going to slip anyway, that gets flagged as soon as it's known — not at the deadline.
- Early delivery is the default target, not the exception.

**Monthly Improvement Loop** (runs every month, independent of the Quarterly Performance Review's bigger strategic calls):
1. Pull the most common friction point from buyer objections logged in Phase 3, developer feedback, and CRM activity notes.
2. Find the fix — a script change, a playbook update, a process adjustment.
3. Test it on a small slice (new leads only, not the whole pipeline) before rolling it out.
4. Measure whether it actually moved the numbers.
5. Roll out if it worked, drop it if it didn't, repeat next month.

*Full framework: `.claude/knowledge/hormozi-advisor/knowledge/referrals.md` — "How to Fix the Product," items 4 and 5.*

---

## The Optimization Loop

```
Phase 2 (Leads)  →  generates pipeline
Phase 3 (Close)  →  generates sales data and objection patterns
Phase 4 (Scale)  →  synthesizes data, optimizes both phases
                 ↓
Feeds back into Phase 2 (better targeting and creative)
Feeds back into Phase 3 (updated playbook and qualification)
```

A developer who stays with OLC for multiple inventory tranches or multiple projects gets compounding returns: each cycle starts from a stronger baseline.

---

## The Referral Loop

`% of buyers who refer monthly − % who cancel/refund monthly = compounding growth rate` for this project's buyer pool.

- If referrals outpace cancellations, the project's remaining inventory sells faster with no added ad spend — this is the strongest signal Phase 2 targeting and Phase 1 offer design actually landed.
- If referrals lag, don't just push more leads through Phase 2 — check the offer and buyer experience first (Phase 1 dream outcome, Phase 3 delivery speed). More leads into a weak referral loop just accelerates cost per close.
- Ongoing language, not a one-time campaign: every follow-up message and every buyer update (Phase 3 Step 6) carries a soft "who else would benefit from this" line, not just the Step 7 ask at signing.

*Full framework: `.claude/knowledge/hormozi-advisor/knowledge/referrals.md`*

---

## References

- ICP scoring and buyer profiling: `company/icp.md`
- Pricing model and per-unit economics: `company/pricing.md`
- Funnel benchmarks and conversion targets: `company/funnels.md`
- Full engagement overview: `client-framework.md`
- Referral loop and ask methodology: `.claude/knowledge/hormozi-advisor/knowledge/referrals.md`
