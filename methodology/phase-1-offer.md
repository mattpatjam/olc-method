# Phase 1 — Offer | *Foundation*

*Version: 1.0 | Created: 2026-06-18*

---

## Purpose

Design the value-driven offer and build everything OLC needs to operate as the developer's sales engine. This is the most intensive phase. Every downstream decision — lead gen targeting, ad creative, closing language — is built on the work done here.

**Do Phase 1 in order.** Each sub-step feeds the next. Don't start offer design before brand foundation. Don't start the sales playbook before positioning and ICP.

---

## Skills to run during this phase

- **`brand-foundation`** — conversational session that produces the brand foundation document (run before offer design)
- **`offer-builder`** — conversational session that produces the Grand Slam Offer document (run after brand foundation). Starts with a repeat-partner check (`offer-builder`'s Phase 0), if the developer has closed a project with OLC before, pull forward their prior Phase 4 output and Lead Intelligence Report instead of rebuilding brand foundation and ICP from zero.

---

## 1A. Market Identification

Before anything else, identify:

**The core market desire** — which of the three fundamental human motivations does this project address?
- **Wealth** — ROI, investment returns, capital growth, financial security
- **Health** — wellness, lifestyle, physical environment, longevity
- **Relationships** — family security, status, community, belonging

Most real estate projects address wealth, but some (like Nirvana Health Club) primarily address health and lifestyle — with wealth as a secondary motivator. Getting this wrong means misaligned messaging throughout.

**The market location** — not the person, but where they already exist. Where do the developer's ideal buyers congregate, transact, and consume? The specific channel, community, or context that already has their attention.

*The core desire and market location shape every decision in Phase 2. Do not skip this.*

---

**New opportunity framing** — before designing the offer, establish the vehicle switch:

1. What vehicle has the buyer been using to try to get this result? (What sub-market or niche have they already been in? What have they tried or are currently doing?) This is the existing vehicle.
2. Why is it failing them emotionally — not just logically? (Frustration, wasted money, feeling like they made a bad decision, loss of trust in the category.)
3. What is OLC's new vehicle for this project? State it in one sentence without referencing the old vehicle. It must be a different category, not an improvement. "Better marketing" is not a new vehicle. "A performance partner who designs your offer and closes your deals, paid only on results" is.
4. **Status audit** — which of these levers does buying this project activate for the buyer? Pick 1-2 and build the offer stack to emphasize them:
   - Appearance of intelligence ("I made the smart, non-obvious choice")
   - Appearance of wealth, power, or happiness ("I own what successful people own")
   - Physical appearance ("this changes how I look and feel day to day")
   - Style/identity signal ("this is who I am and what I stand for")

Done-for-you elements and guarantees always belong in the offer stack — they protect status on the downside and make it safe to say yes.

*Full framework: `.claude/knowledge/expert-secrets-reference.md`*

---

## 1B. Brand Foundation

Run the `brand-foundation` skill to produce the client's brand foundation document. It covers five sections — the output from each feeds directly into the offer design and marketing work below.

**What the session produces:**

| Section | What it captures | Where it's used |
|---|---|---|
| Secret Formula | Dream customer, where they are, the bait, the result delivered | Offer design, ad targeting, ICP validation |
| Mission Statement | "We help [who] to [result] through [vehicle]" | Brand kit, sales playbook, marketing collateral |
| Value Ladder | Every offer at every price point | Pricing strategy, upsell logic |
| Attractive Character | Type, backstory, flaws, polarity, cause, story arcs | Hook writing, content, pitch framing |
| Hook / Story / Offer inputs | Traffic temperature, awareness level, hook angle, core story | Ad copy, landing pages, outreach sequences |

**Output:** `clients/[client]/brand-foundation.md`

---

## 1C. Offer Design

Run the `offer-builder` skill to produce the Grand Slam Offer document. Build the offer using the 6-step framework:

1. **Dream Outcome** — what does the buyer's life look like 3 years after buying? Sell the outcome, not the property.
2. **Remove every risk** — list every buyer fear; stack a solution for each. This is where most offers fail.
3. **Build the value stack** — every element of what they get, with standalone value stated for each
4. **Write the offer in one sentence** — "When you buy [product], you get [outcome] without [biggest fear], even if [biggest objection]"
5. **Name the offer** — signal transformation, not transaction (e.g., "The Bali Yield Package" not "3-bed villa")
6. **Price anchoring** — present full value stack → total standalone value → reveal price → guarantee

**Output:** `clients/[client]/offer.md`

---

## 1D. Positioning and ICP

Using the brand foundation and offer as inputs:

- Validate the ICP against the 6-factor scoring rubric in `company/icp.md`
- Define green lights (qualification criteria) and red flags (disqualifiers) for this specific project
- Establish positioning vs. comparable offers in the buyer's market — what makes this the only logical choice?
- Document buyer personas (1–2 max) with their specific pain signals and decision triggers

**Output:** section in the client's folder — `clients/[client]/icp-positioning.md` (or appended to offer.md)

---

## 1E. Brand Kit

Build the messaging infrastructure for the client's project:

- **Messaging hierarchy** — what OLC says and in what order across all touchpoints
- **Tone of voice** — derived from the Attractive Character and market temperature from 1B
- **Visual identity guidelines** — color, typography, logo usage if the developer doesn't have a kit

*Use OLC's own `company/brand-foundation.md` as the template — same structure, different content.*

**Output:** `clients/[client]/brand-kit.md`

---

## 1F. Marketing Collateral

Create all client-facing assets. OLC owns the production — outsourcing is managed internally and invisible to the client.

- Pitch deck (project overview, investment thesis, offer, next steps)
- One-pager (single-page summary for WhatsApp sharing and follow-up)
- Social media asset templates (ad creative formats, story templates)

*Use `html-pitch-deck` skill for pitch deck production.*

**Output:** `clients/[client]/` — pitch deck HTML/PDF, one-pager, template pack

---

## 1G. Tools Setup

Configure the operational infrastructure before Phase 2 launches:

- **CRM (GoHighLevel)** — pipeline stages set up per Phase 1D qualification criteria, automated follow-up sequences loaded
- **WhatsApp automation (Wati)** — sequences from the Sales Playbook (below) connected and tested
- **Landing page** — built from the offer and hook angles, ready for ad traffic

*Tool stack details, costs, and setup notes: `research/tool-stack.md`*
*Monthly infrastructure cost: ~$500/month (passed through at cost — see `company/pricing.md`)*

---

## 1H. Sales Playbook

The playbook governs every sales conversation from first touch to close. Includes:

- **Discovery question framework** — uncover the buyer's real motivation before any pitch
- **Offer presentation sequence** — value stack → price anchor → guarantee, in that order
- **Closing language** — committed next step formula; acceptable next steps defined
- **Objection handling** — mapped to the risk-removal section from the offer (1C); every fear has a prepared response
- **Outreach sequences** — initial contact → qualification → viewing → post-viewing → follow-up → close, across all active channels
- **Referral ask** — built into the playbook from day one, not bolted on after close. Ask fires at the moment of purchase (`phase-3-close.md` Step 7); ask WHO not IF.

*First completed playbook: `Sales-Training/Nirvana/training-structure.md`*
*Sequence examples: `Sales-Training/Nirvana/follow-up-sequences-rewrite.md`*

**Output:** `clients/[client]/playbook.md`

---

## 1I. Big Domino & Story Inventory

Before the sales playbook is finalized, establish the single belief that organizes the entire sales process — and the stories that break the false beliefs standing between that belief and a signed reservation.

**The Big Domino statement:**
One sentence. The buyer needs to believe this before any other conversation matters.

Format: "If I can make [buyer profile] believe that [this project / opportunity] is the only way to get [their desired result] — and that it's only available through [this specific vehicle] — then every other objection becomes secondary."

Build this with the developer in the brand foundation session. It becomes the north star for every script, every story, and every closing conversation in Sessions 2–5.

**Story Inventory — 4 stories minimum:**

| Type | False belief it breaks | Source |
|---|---|---|
| Origin / New Opportunity | "This category doesn't work / I've been burned before" | The developer's own origin story with OLC |
| Vehicle | "I don't understand how this actually works" | A client story showing the mechanism in plain language |
| Internal | "I don't think I'm the kind of buyer / investor who does this" | A client who had the same doubt and closed anyway |
| External | "The market / timing / partner / advisor will block this" | A client who had this exact external fear and moved anyway |

**How to build each story — 3-step process:**

1. **Identify the core false belief.** For each category (new opportunity, vehicle, internal, external), surface the single dominant belief that is stopping buyers. Not a list — one belief per category, the one that comes up most. Ask the sales team: "What's the real thing buyers don't say out loud right before they go quiet?"

2. **Find or source the epiphany bridge.** For each core belief, find a real client who had that exact belief and still closed. This is the raw material. Matthieu shapes it into a 60-second story using the 5-step bridge: back story → trigger → what shifted → decision moment → where they are now. The story ends at the moment of belief change, not the outcome. The outcome goes in the value stack.

3. **Name it.** Give each story a short internal label ("The Singapore Investor," "The Cautious Spouse"). This lets salespeople identify which story to pull without re-reading a script.

One-to-many note: if the client's sales process includes group presentations, each story is also the foundation for a "secret" — rewritten as a how-to statement ("How to [outcome] even if [the false belief]"). This is the Expert Secrets Three Secrets framework and lives in the playbook separately from the 1:1 stories.

Stories are 60 seconds or less, third-grade language, told naturally — not read. Each one ends at the moment of belief change, not the final outcome. The outcome comes later in the value stack.

**Output:** added to `clients/[client]/playbook.md` as a dedicated Story Inventory section.

---

## Phase 1 Deliverables

| Deliverable | File |
|---|---|
| Brand Foundation Document | `clients/[client]/brand-foundation.md` |
| Grand Slam Offer Document | `clients/[client]/offer.md` |
| ICP and Positioning | `clients/[client]/icp-positioning.md` |
| Brand Kit | `clients/[client]/brand-kit.md` |
| Marketing Asset Pack | `clients/[client]/` — pitch deck, one-pager, social templates |
| Sales Playbook (incl. Big Domino + Story Inventory) | `clients/[client]/playbook.md` |

**What the client provides:**
- Product details, pricing, development timeline
- Existing brand assets (if any)
- Access to key team members for interviews during brand foundation session

**Duration:** 2–3 weeks for a new partner. For a repeat partner (see Phase 0 in `offer-builder`), expect shorter, brand foundation and ICP carry forward and only the genuinely new parts of the offer need rebuilding.

---

## References

- OLC's own brand foundation (as template): `company/brand-foundation.md`
- ICP scoring rubric and pain signals: `company/icp.md`
- Competitive positioning vs. Prosper, A7A, Lead Estate: `company/strategy.md`
- Tool stack and infrastructure: `research/tool-stack.md`
- First live example (Nirvana): `clients/nirvana/`, `Sales-Training/Nirvana/`
- Next phase: `phase-2-leads.md`
