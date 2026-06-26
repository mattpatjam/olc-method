# Skills to Build — OLC Method

*Last updated: 2026-06-18*

> **This is the curriculum** — what to learn, in what priority order, and why. For the weekly schedule and current focus, see `tracker.md`.

---

## Principle

Learn while building. Don't wait until learning is "done" — foundation files get written in parallel with the reading. Nirvana training runs for ~7 weeks (started 2026-06-09). That window is the learning and building phase.

**Brand:** OLC Method (Offer, Leads, Close)
**Domain:** olcmethod.com
**Stack:** Netlify (hosting) + GitHub (mattpatjam) + Google Workspace alias for email

---

## Two Lead Types

- **Developers (B2B)** — direct clients who pay OLC Method on performance
- **Buyers for developers (B2C)** — end consumers generated for developer clients via ads and funnels

The learning below covers both.

---

## Priority 1: The Offer (Most Critical) — DONE

**Resource:** *100 Million Offers* by Alex Hormozi — completed 2026-06-13

**Takeaways applied:**
- Grand Slam Offer built for OLC Method (phases 1-5 in `company/offer.md`)
- `offer-builder` skill built and live in `.claude/skills/`
- Offer framework template in `methodology/phase-1-offer.md` for client use
- Phases 6-11 blocked pending Meta Ads knowledge (digital marketing gap)

---

## Priority 2: Funnel Logic — DONE

**Resource:** *DotCom Secrets* by Russell Brunson — completed June 2026

**Takeaways applied:**
- Full framework documented in `company/funnels.md` (renamed from dotcom-secrets-reference.md)
- `funnel-audit` skill built and live in `.claude/skills/` — runs 6-area diagnostic for any developer client or OLC itself
- `funnel-builder` skill queued (see Skills to Build section below)

**The buyer journey:**
```
Ad impression
  → Landing page (offer + lead capture form)
    → Qualified lead (phone, budget, timeline confirmed)
      → Discovery call
        → Property tour / demo
          → Offer presented
            → Close
```

---

## Priority 3: SEO Fundamentals

**Goal:** Rank on Google when a developer searches "outsourced real estate sales" or "performance sales system."

**Resources:**
- Ahrefs YouTube channel — #1 most practical free SEO education. Start with "SEO for beginners" playlist.
- Backlinko by Brian Dean — case studies, proven techniques
- Google Search Console (free, mandatory) — install day 1 when site goes live
- Google Keyword Planner — free, shows search volume for target keywords

**In 2 weeks:** Know your 5-10 target keywords, site structured correctly, Google Search Console showing the site is indexed.

---

## Priority 4: GEO — Generative Engine Optimization

**Goal:** Appear when someone asks ChatGPT, Claude, or Perplexity: "Who does outsourced real estate sales?"

**Resources:**
- Kevin Indig (Growth Memo newsletter / Substack) — most cited voice on GEO
- Ahrefs blog — search "LLM optimization" and "GEO"
- Test right now: search your niche in Perplexity and ChatGPT — see who comes up

**How to make the site LLM-friendly:**
- FAQ sections that answer exactly what someone would ask an AI
- Clear definition of who you are, what you do, where you operate — first paragraph of homepage
- Structured data (schema markup)
- Clean H1/H2/H3 headings that answer real questions
- Get cited by authoritative sources (press, partnerships, directories)

---

## Priority 5: Website Launch

**Goal:** Get olcmethod.com live and indexed fast. Every week without a site is a week of lost SEO compounding.

**Stack decision:** Netlify (free, already familiar from ScaleRise)
**Content management:** Claude Code / Superset for updates (AI writes, commits to GitHub, Netlify auto-deploys)

**Must-haves at launch:**
- Clear positioning (what you do, who for, results only model)
- FAQ section (LLM-friendly)
- Contact / WhatsApp button
- "How it works" section
- Placeholder for case studies

---

## Priority 6: Meta Ads (do before Google — dominant channel for Bali real estate)

**Goal:** Run Meta (Facebook/Instagram) campaigns for developer clients. Most Bali property buyers are reached via Instagram. This is the primary lead gen channel.

**Prerequisite:** Read `knowledge/paid-ads.md` in the Hormozi advisor first — covers the strategic layer (targeting, ad structure, LTGP:CAC). Meta Blueprint covers the tactical execution on top of that.

### Learning path (in order)

**Step 1 — Conceptual foundation (already in paid-ads.md)**
- Call-out → Value → CTA ad structure
- Lookalike audiences + factor targeting
- LTGP:CAC ratio (3:1 minimum to run, 10:1 to scale)
- Funnel diagnostic: no clicks = ad problem, clicks but no opt-ins = landing page problem, opt-ins but no closes = sales problem

**Step 2 — Meta Blueprint (free, ~10-15 hours)**
- meta.com/blueprint
- Complete: "Digital Marketing Fundamentals" + "Advertising with Meta"
- Focus areas: Business Manager setup, campaign objectives, ad set targeting, pixel installation, lead forms

**Step 3 — Ben Heath (YouTube)**
- Best practical Meta Ads education for lead gen
- Playlist: "Meta Ads for Beginners" — watch in order
- Focus: campaign structure, budget testing, creative testing, when to kill vs. scale

**Step 4 — Real estate-specific execution**
- Meta classifies real estate under "Special Ad Categories" (housing) — this restricts age/gender/location targeting. Learn these limits before running a single campaign.
- Study: scroll Instagram in incognito or use Meta Ad Library (facebook.com/ads/library) — search "Bali villa" or "Bali property" — find the longest-running ads. Study what they hook on, what format they use, what CTA they send to.
- Spend 1-2 hours reverse-engineering 10-15 competitor property ads before writing your own

**Step 5 — Run a $50-100 test campaign (Week 5 target)**
- Use Nirvana project or a placeholder offer
- Goal: not conversions — goal is to get hands on the interface, understand the feedback loop
- Set up the pixel, build one ad set, run 2-3 creative variations
- Document: CPL, CTR, which creative won, what the landing page experience was

### Key concepts to be fluent in (before pitching this to a developer)
- [ ] Business Manager vs. personal account — always use Business Manager for clients
- [ ] Campaign objective: Lead Generation vs. Conversions — know when to use each
- [ ] Lookalike audience from a seed list — how to build, what seed quality means for output quality
- [ ] Special Ad Category — housing restriction, what it limits, how to work within it
- [ ] Cost per lead (CPL) benchmarks — for Bali real estate, expect $5-30/lead on Meta (cold audience, luxury product = higher)
- [ ] Creative formats — image vs. video vs. carousel for property listings
- [ ] Lead form vs. external landing page — pros/cons for each
- [ ] Pixel and events — how to confirm tracking is working before spending
- [ ] Budget: daily vs. lifetime, when to let it run vs. when to cut
- [ ] ROAS is not the right metric for real estate — track CPL + lead quality + cost per showing

---

## Priority 7: Google Ads (after Meta is running)

**Start only after:** Meta campaign live + landing page converting.

**Why after Meta:** Meta is higher volume and more visual — better for cold Bali property buyers. Google is intent-based (people searching "buy villa Bali") — lower volume, higher intent. Both matter, but Meta builds the pipeline faster.

**Resources:**
- Google Skillshop (free, official certification) — complete "Google Ads for Beginners" first
- Ben Heath (YouTube) — covers Google Ads for lead gen, practical
- Aaron Young / Defined Digital Academy — more advanced, real estate specific

**Key difference from Meta:** Google targets intent (search terms), not audience profiles. You're bidding on keywords, not people. Learn match types (broad, phrase, exact) and negative keywords before spending anything.

---

## Priority 8: Landing Pages

**Goal:** Build single-purpose pages that convert ad traffic into qualified leads.

**Resources:**
- Unbounce blog — most practical free landing page education
- ConversionXL (CXL) blog — conversion rate optimization, more advanced
- Study: Lead Estate's landing pages. A7A's buyer funnel.

**Key principles:**
- One page, one offer, one CTA
- Headline = dream outcome
- Social proof above the fold
- Pre-qualification questions before the call

---

## Priority 9: B2C Lead Generation

**Resources:**
- *100M Leads* by Alex Hormozi (read weeks 3-4)
- HubSpot Academy — free inbound lead gen courses
- Key concept: qualify leads before they reach the sales call

---

## Priority 10: Sales Scripting and Closing

Matthieu is already a closer. The skill to build is scripting the developer pitch and buyer close specifically.

**What to develop:**
- Discovery call script for first meeting with a developer prospect
- Objection handling: "why should I pay you more than a traditional agent?"
- Close language for developer contract negotiation
- Buyer closing call script for when the campaign runs

**How to build it:** After completing `methodology/phase-1-offer.md` for Nirvana, write the closing script. Record yourself. Identify gaps.

**Reference:** Chris Voss *Never Split the Difference* — apply labeling and calibrated questions to the developer pitch.

---

## Top 5 to Study for Positioning

Reverse-engineer how they write, position, run their site, and post content:

1. **Lead Estate** — local Bali, study their website, content, and funnel closely
2. **Luxury Presence** — luxury real estate digital marketing, excellent SEO and positioning example
3. **A7A** — local Bali developer, study their buyer-facing content and funnel
4. **Ylopo** — real estate digital marketing, known for Google/Meta campaigns
5. **CINC (Commissions Inc)** — study how they sell the value of performance-based lead gen

---

## Skills to Build Next

- **`funnel-builder`** — Full funnel build workflow (VLMS → Secret Formula → Value Ladder → Funnel Hacking → pick funnel type → write scripts → follow-up). Build when OLC or a developer client is ready to build an actual funnel. Uses `company/funnels.md` as knowledge base.

- **`olc-ad-creator`** — OLC paid ad creative workflow. Generates ad hooks, story-driven ad scripts (32-second Epiphany Bridge for hooks, full 7-phase script for longer formats), and creative briefs for Meta. Combines Expert Secrets (storytelling, villain, desire, hero's journey phases) + 100M Leads (channel strategy, audience targeting, lead gen mechanics) + Meta Ads execution knowledge + ICP from `company/icp.md`. **Do not build until all three are complete:** (1) Expert Secrets fully read, (2) 100M Leads read (Priority 9), (3) Meta Ads fluency (Priority 6 — Blueprint + Ben Heath + $50-100 test campaign). Target: after Week 5 (~Jul 13).

---

## Delivery Team Reference

When OLC is ready to build out a delivery team for client campaigns, see `research/agency-structure-intel.md`. Key points:
- Strategy layer (Matthieu / senior) + local execution layer (DMs, design, editing) is the proven model
- Hire local via Facebook groups or personal referrals — not LinkedIn
- Start with one local for channel execution. Grow from there.
- Ads always go to a specialist partner, not local staff

**Content and renderings partner (when needed):** Tim / Maison Bali Interiors Design. 281K organic IG in 6-8 months, zero paid ads, already has private villa clients. Handles property renderings, before/after visuals, Instagram reels, off-plan visual assets. Expressed interest in partnering when OLC has developer clients. Full tool stack: `research/tool-stack.md`. Profile: `research/content-creation-intel.md`.

---

## Skills NOT to Build Yet

- SEO automation tools (SurferSEO) — revisit in month 3 when publishing regularly
- CRM from scratch — use Airtable or Notion until model is proven
- Personal website separate from olcmethod.com — redundant at this stage
