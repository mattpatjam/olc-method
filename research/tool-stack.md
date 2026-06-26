# OLC Method — Tool Stack Research

*Last updated: 2026-06-16*
*Status: Research complete — Renner AI comparison pending*

---

## Purpose

Define the exact tools OLC Method will use to deliver each service block. This determines what you're selling, how you deliver it, and what it costs to run per client.

---

## Service Blocks and What Each Needs

| Block | What it does | Tool needed |
|---|---|---|
| The Setup | Offer design, brand foundation, funnel strategy | Claude (already built) |
| The Lead Machine | Run Meta/Google ads, capture leads | Meta Ads Manager + landing pages |
| Lead Capture | Convert ad traffic to qualified leads | Landing page builder |
| CRM + Pipeline | Track every lead, status, next action | CRM platform |
| Follow-up Sequences | Email, SMS, WhatsApp automated nurture | Automation platform |
| B2B Outreach | Find and contact Bali developer prospects | Apollo.io + LinkedIn |

---

## Progress Tracker

| Item | Status | Notes |
|---|---|---|
| GoHighLevel research | Done | See section below. Confirmed by Czech practitioner (INSTINCT MEDIA) as the tool used in production. |
| WhatsApp API options | Done | Wati recommended |
| Apollo.io research | Done | See section below |
| Meta Ads (Special Ad Category) | Done | See section below |
| Client reporting stack | Done | Looker Studio + BigQuery + GA4. Practitioner-validated. Standard for all clients. |
| Renner AI comparison | Pending | Questions prepared — meeting Renner June 17. Reporting stack no longer blocked on this. |
| Final stack decision | Pending Renner response | Reporting and CRM direction clear; Renner only affects automation/AI layer |
| Pricing model for clients | Not started | Depends on stack cost |

---

## Option 1 — GoHighLevel (GHL)

*Knowledge base: August 2025. Verify pricing at gohighlevel.com before committing.*

### Plans and Pricing

| Plan | Price/mo | Best for |
|---|---|---|
| Starter | $97 | Single location, no white-label |
| Unlimited | $297 | Agencies, unlimited sub-accounts, white-label add-on |
| SaaS Pro | $497 | Full SaaS mode, automated billing, resell as your own software |
| White-label desktop app | +$497/mo | Brand the platform as your own (on top of Unlimited or SaaS) |

For OLC Method: **Unlimited ($297/mo)** is the right entry point. SaaS Pro becomes relevant if you sell this as recurring software to agents (ScaleRise angle).

### What It Covers

**CRM and pipeline**
- Contact management, custom fields, tags, smart lists
- Visual drag-and-drop pipeline (stages: New Lead > Viewing > Offer > LOI > Closed)
- Opportunity tracking with revenue weighting

**Communication — unified inbox**
- WhatsApp, email, SMS, Facebook Messenger, Instagram DM, Google Business
- Two-way conversations in one inbox
- Call tracking and recording

**Automation**
- Visual workflow builder, trigger-based
- Triggers: form fill, tag change, pipeline stage, appointment booked, inbound message, webhook
- Multi-step sequences mixing WhatsApp, email, SMS, wait steps, conditions

**Marketing**
- Funnel and landing page builder (drag and drop, custom domain)
- Email broadcast campaigns
- Social media scheduler (FB, IG, LinkedIn, TikTok, GMB)
- Forms, surveys, quizzes

**Bookings**
- Calendar: one-on-one, round-robin, group
- Syncs with Google Calendar and Outlook
- Auto-reminders via WhatsApp, SMS, or email

**Sales**
- Proposals, e-signatures, invoicing
- Stripe and PayPal payment integration
- Memberships and course hosting (LMS built in)

**Reporting**
- Lead source attribution, revenue, conversion rates
- Ad attribution (Meta and Google connected)
- Agent/rep performance tracking

### WhatsApp Integration

- Native WhatsApp Business API (Cloud API via Meta)
- Automated WhatsApp sequences built in GHL workflows
- Two-way conversations in unified inbox
- Template messages required for first outbound (Meta 24-hour window rule applies)
- Trigger automations from inbound WhatsApp replies
- **Watch-out:** Requires Meta Business verification. Not available out of the box for all countries — may need number porting. Indonesia works but test first.

### Meta Ads Integration

- Pull leads from Meta Lead Forms directly into GHL CRM (no Zapier)
- Revenue attribution: link a closed deal back to the ad that sourced it
- Facebook Conversions API support (iOS-proof attribution)
- Push GHL contact lists to Meta Custom Audiences for retargeting
- Reporting: ad spend vs. revenue inside GHL dashboard
- **Not a replacement** for Meta Ads Manager — you still run campaigns there. GHL handles the data flow.

### White-Label

- Fully branded desktop app (your logo, colors, domain)
- Clients log in to your brand, not GoHighLevel
- Custom mobile app (extra cost: ~$299 setup + monthly)
- Rebill SMS, email, and AI credits at your own margin
- SaaS Mode: automated sub-account creation, Stripe billing, deploy pre-built snapshots to new clients
- **ScaleRise angle:** Build a "real estate agent starter kit" snapshot, sell under your brand on subscription. GHL is the engine, ScaleRise is the product.

### Limitations

- Steep learning curve — budget 2-4 weeks to configure properly
- Support quality is inconsistent (community Facebook group is better than official support)
- Email deliverability not as strong as dedicated tools (Klaviyo, ActiveCampaign) for high-volume broadcast
- Built-in AI (Conversation AI) is basic — not a Claude replacement
- International SMS requires Twilio integration (extra setup and cost)
- Mobile app exists but not polished
- Indonesia WhatsApp: works but needs Meta Business API verification and setup

### Practitioner Validation (June 2026)

Direct call with a Czech real estate marketing specialist (INSTINCT MEDIA / Reframe) who runs full lead gen + CRM operations for developers. He explicitly named GHL as his CRM and automation platform. This confirms GHL is the tool experienced practitioners in this exact space converge on — not just a theoretical recommendation.

### Bottom Line on GHL

The most complete single platform for what OLC Method needs. One subscription covers CRM, landing pages, WhatsApp sequences, email, Meta attribution, and calendar. The white-label layer makes it the backbone for ScaleRise too. Main downside: it takes time to set up and it is not a push-button solution.

---

---

## Client Reporting Stack — Confirmed by Practitioner

The Czech specialist (INSTINCT MEDIA) uses this setup for client-facing KPI dashboards on live developer campaigns:

| Tool | Role | Cost |
|------|------|------|
| **Google Looker Studio** | Dashboard layer — charts, tables, KPIs, shareable client link | Free |
| **BigQuery** | Data aggregation — pulls from Google Ads, Meta, Sklik into one place | Near-free at these volumes |
| **GA4** | Web behavior tracking — form submissions, page views, soft lead events | Free |

This is the standard OLC client reporting setup. Free, scalable, fully white-labelable per client. Build the template dashboard once, deploy it for every developer client. Looker Studio generates a shareable link — client sees live KPIs without logging into any platform.

**Status: locked.** This is not a fallback — it is the standard regardless of what Renner AI can or cannot build. Renner AI comparison questions 16–20 remain relevant to understand if Renner can augment this stack, but the reporting baseline is no longer blocked on their response.

---

## Campaign Naming Convention — Standard to Adopt

From live campaigns reviewed during the INSTINCT MEDIA call. Clean, replicable, makes attribution readable in any reporting tool:

`[Platform][Type][Subtype] YYMMDD_CAMPAIGN_NAME`

**Platform codes:**
- `[G]` = Google Ads
- `[SEZ]` = Sklik/Seznam (Czech ad network — not relevant for Bali)

**Type codes:**
- `[MAX]` = Performance Max
- `[S]` = Search
- `[D]` = Display
- `[TEXT]` = Text ads
- `[BANNER]` = Banner/HTML5 display

**Subtype codes:**
- `[KOM]` = Acquisition (cold traffic)
- `[REM]` = Remarketing
- `[DEMAND]` = Demand Gen

**Example:** `[G][S][DEMAND] 260512_VIDEA` = Google / Search / Demand Gen / May 12 2026 / Videos campaign

Adopt this for all OLC client campaigns. Makes Looker Studio filtering and reporting clean from day one.

---

## Option 2 — Custom Stack (Best-of-Breed)

Build from separate tools, each optimized for its function.

### WhatsApp Automation — Wati.io (recommended)

| Plan | Price/mo | What it includes |
|---|---|---|
| Growth | ~$49 | Core automation, flow builder, 3 agents |
| Pro | ~$99 | More agents, advanced flows, integrations |
| Business | ~$299 | Team, priority support, custom integrations |

All plans: unlimited contacts. Messages billed separately by Meta (Indonesia is low-cost tier: ~$0.01-0.03/conversation).

**At 500-2,000 messages/month in Indonesia:** $49-99 (platform) + $20-60 (Meta) = under $160/month total.

**Why Wati over alternatives:**
- Fastest setup, no technical overhead
- Built specifically for WhatsApp automation, not bolted on
- Meta Business Solution Provider — handles verification for you
- Best for non-technical operators

**Alternatives considered:**

| Provider | Price | Notes |
|---|---|---|
| 360dialog | ~$5-10/mo | Cheapest, raw API access, you build automation yourself |
| Twilio WhatsApp | $0.005/msg + Meta fees | Most powerful, most complex, requires code |
| GHL native | Included in GHL plan | Works but WhatsApp-first workflows are better in Wati |

### B2B Outreach — Apollo.io

For finding developer contacts and running cold email sequences to get OLC Method clients.

| Plan | Price/user/mo | Key limits |
|---|---|---|
| Free | $0 | 5 email credits/month — essentially unusable |
| Basic | ~$49 | 75 email credits/mo, CSV export 250/day, sequences |
| Professional | ~$79 | Unlimited emails (fair use), A/B testing, advanced filters |
| Organization | ~$119 | Team features, API access, call recording |

**Recommended:** Professional ($79/mo) — unlimited email credits unlocks serious outreach volume.

**What it does:**
- Database of 265M+ contacts globally (weak in Indonesia/SEA specifically)
- Email sequences: multi-step, A/B testing, auto follow-ups
- LinkedIn Chrome extension for enriching profiles
- Integration with Gmail, Outlook, Salesforce, HubSpot

**SEA database quality:** This is Apollo's weak point. Indonesia coverage is thin — expect 20-40% email bounce rates vs. 5-10% for US contacts. Developer/property contacts in Bali specifically: very sparse.

**Better approach for Bali developers:** LinkedIn Sales Navigator (manual search) + Apollo for enrichment + Instantly or Lemlist for email sequences. Apollo alone won't fill your prospect list.

---

## Meta Ads — Special Ad Category: Housing

This affects every campaign you run for developer clients. Know it before you pitch.

### What's Restricted

| Targeting option | Normal | Housing category |
|---|---|---|
| Age | Full range | 18+ only, no upper cap restriction |
| Gender | Male / Female / All | All only — no splits |
| Geographic radius | 1km minimum | 25km (15 miles) minimum |
| Interest targeting | Full | Mostly removed |
| Behavioral targeting | Full | Mostly removed |
| Income / homeownership | Available | Removed |
| Lookalike audience | 1% minimum | 15% minimum |

### What IS Available

- Custom audiences from uploaded lists (email, phone)
- Website retargeting via Pixel
- Video view audiences
- Page and Instagram engagement audiences
- Broad location (country, city, region — just not tight radius)
- Advantage+ audience (Meta's AI targeting — now the primary lever for cold campaigns)

### CPL Benchmarks

| Audience type | CPL range |
|---|---|
| Local Bali buyers (cold) | $5-15 USD |
| International buyers (EU/AU/US) | $20-60 USD |
| Retargeting (warm) | 40-60% lower than cold |
| Global luxury real estate (cold) | $15-80 USD |

**Key variable:** Creative quality and landing page conversion rate matter far more than targeting at the audience sizes typical in Bali.

### Lead Form vs. Landing Page

| | Lead Form | Landing Page |
|---|---|---|
| Conversion rate | 3-5x higher | Lower |
| Lead quality | Lower intent | Higher intent |
| CPL | Lower | 3-5x higher |
| Best for | Volume, top of funnel | Luxury, high-ticket |

**Recommended approach:** Lead forms for cold traffic volume. Retarget warm audiences to a landing page with a VSL or property walkthrough. For $500K+ properties, prioritize landing page quality over volume.

### Best Ad Formats for Property

1. **Video (best for cold)** — property walkthroughs, location reels, 60-90 seconds
2. **Carousel** — multiple units, views, or floor plans (good for inventory)
3. **Single image** — ROI angle, price hook, scarcity. Works for retargeting.
4. Avoid generic stock photography — it dies on luxury audiences.

### Pixel Events to Track

```
ViewContent    — property page views
Lead           — form submission or inquiry
Contact        — WhatsApp button tap, phone click
QualifiedLead  — custom event: fires when full form completed or call booked
```

Also implement Conversions API (CAPI) alongside the pixel. Reduces data loss from iOS blocking — critical for accurate attribution on international buyers (EU/AU on iPhones).

---

## Renner AI — Capability Assessment

*Note: Renner AI's exact capabilities are not fully known. The questions below are designed to determine if a custom Renner build could replace or compete with GoHighLevel for OLC Method's delivery stack.*

### Why This Matters

GHL is $297-497/month and is a third-party dependency. If Renner can build equivalent functionality (or better, with Claude-native AI layers), OLC Method could:
- Run its delivery stack on custom infrastructure
- Differentiate on AI quality (Claude-powered vs. GHL's basic AI)
- Position ScaleRise around the custom stack rather than reselling GHL

### Questions for Renner AI

Send these as a structured brief. Ask Renner to confirm: can they build it, how long, what it would cost to build vs. maintain, and what is out of scope.

**Category 1 — CRM and Pipeline**
1. Can you build a CRM with contact management, custom fields, tags, and pipeline stage tracking?
2. Can it handle multiple clients (sub-accounts), each with their own pipeline and contacts?
3. Can contacts be imported from Meta Lead Forms automatically (webhook or API)?

**Category 2 — WhatsApp Automation**
4. Can you integrate with the WhatsApp Business API to send and receive messages programmatically?
5. Can you build automated multi-step WhatsApp sequences (triggered by form fill, stage change, time delay)?
6. Can you handle Meta's 24-hour window rule (template messages for outbound vs. free-form for replies within window)?
7. What WhatsApp Business API provider would you use (360dialog, Twilio, Meta direct)?

**Category 3 — Email Sequences**
8. Can you build automated email sequences (multi-step drip campaigns triggered by lead actions)?
9. What sending infrastructure would you use (SendGrid, Mailgun, SES)?
10. Can you handle deliverability management (bounce handling, unsubscribes, domain warm-up)?

**Category 4 — Landing Pages and Funnels**
11. Can you build a landing page with a lead capture form that feeds directly into the CRM?
12. How are landing pages updated when the client needs to change offer or property? Is it self-serve or does it require your team?

**Category 5 — Meta Ads Integration**
13. Can you pull leads from Meta Lead Forms into the CRM in real time?
14. Can you send conversion events back to Meta (Conversions API / CAPI) for attribution?
15. Can you push contact lists from the CRM to Meta Custom Audiences?

**Category 6 — KPI Tracker and Reporting**
16. Can clients log in and see a live dashboard with their own metrics — or does OLC have to generate and send reports manually?
17. What specific KPIs are trackable out of the box: CPL, lead-to-viewing rate, viewing-to-offer rate, offer-to-close rate, pipeline value, revenue closed, ad spend vs. revenue?
18. Can you show lead source attribution down to the deal level (which ad campaign produced which lead and which closed unit)?
19. Can OLC set up automated weekly/monthly KPI reports that are sent directly to the client without manual effort each time?
20. Can the client-facing KPI dashboard be white-labeled with the client's own branding, not OLC's or Renner's?

**Category 7 — Multi-Client Management**
21. How do you handle multiple developer clients, each with their own campaigns, pipelines, and automations?
22. When adding a new developer client, how long does it take to spin up their sub-account with pipeline stages, automations, and dashboard configured? Is there a template/snapshot system like GHL's, or is each setup manual?
23. Is there a white-label option where each client sees their own branded interface?

**Category 8 — Back Office Functions**
24. Can you build a calendar and appointment booking system with Google Calendar sync, auto-reminders via WhatsApp and email, and round-robin assignment if OLC adds more closers?
25. Is proposals, e-signature, and invoicing in scope? Or does OLC need a separate tool for that?
26. Can social media scheduling (Instagram, LinkedIn, Facebook) be integrated into the back office, or is that fully out of scope?
27. Is two-way SMS possible alongside WhatsApp?

**Category 9 — AI Layer**
28. What AI capabilities can you layer on top of the above? (Lead qualification bot, auto-reply on WhatsApp, lead scoring, etc.)
29. Can the AI be Claude-native, and can OLC Method provide the system prompts and logic?

**Category 10 — Build, Cost, and Timeline**
30. What is the estimated build time for the core stack (CRM + WhatsApp + email + landing page + Meta integration + KPI dashboard)?
31. What is the build cost (one-time)?
32. What is the ongoing maintenance cost per month?
33. What is the SLA when something breaks — and specifically, what happens if a client-facing system goes down at night or before a live demo?
34. Can we add features over time or is the system fixed at delivery?

**Category 11 — Operational and Data**
35. Can OLC salespeople access the CRM from mobile (phone/tablet), or is it web-only?
36. If OLC ever switches away from Renner, can all contacts, pipeline history, conversation logs, and campaign data be exported cleanly? What format?
37. What backup and data recovery is in place?

**Category 12 — What Renner Cannot Do**
38. What is explicitly out of scope? What would OLC Method still need GHL or another tool for?

---

## Recommended Stack (Pending Renner Response)

Until Renner answers the questions above, the default recommendation is:

| Need | Tool | Cost/mo |
|---|---|---|
| CRM + pipelines + sequences + landing pages + Meta integration | GoHighLevel Unlimited | $297 |
| WhatsApp automation (primary channel) | Wati.io Growth | $49 |
| B2B prospecting for OLC developer clients | Apollo.io Professional | $79 |
| Ads platform | Meta Ads Manager | Free (ad spend separate) |
| Client-facing KPI dashboard | Google Looker Studio + BigQuery + GA4 | Free |
| **Total platform cost** | | **~$425/mo** |

This cost gets built into the onboarding fee. At $15-20K onboarding, platform cost is a rounding error.

**If Renner can replace GHL:** Evaluate on build cost vs. 12 months of GHL ($297 × 12 = $3,564). Custom build is worth it if it costs under $3K and maintenance is under $150/mo — and only if it covers 80%+ of GHL's feature set. Reporting stack (Looker Studio) is separate and stays regardless.

---

## Content Creation Tools — Practitioner-Validated Stack

*Source: Tim (Maison Bali Interiors Design), personal conversation June 2026*
*Context: Tim grew an interior design / villa rendering Instagram to 281K organic followers in 6-8 months with zero paid ads. Already generating private clients. His stack is what a dedicated content partner for developer clients would run.*

This is not OLC Method's own stack — it's the reference for what to expect from a content creation partner, and what to ask about when vetting candidates.

| Tool | Category | Use case |
|---|---|---|
| **Metricool** | Social media scheduling/analytics | Post scheduling, performance tracking across Instagram |
| **Meta Business Suite** | Meta platform management | Page management, inbox, basic analytics |
| **ManyChat** | Instagram DM automation | Auto-replies, lead capture from DMs, comment triggers |
| **Midjourney** | AI image generation | Artistic/conceptual renderings — mood boards, design direction, interior concepts |
| **ChatGPT image (GPT-4o)** | Realistic AI image generation | Photo-realistic renders, before/after comparisons from existing property photos |
| **Xfile** | Multi-AI image toolbox | Image editing using multiple bundled AI models |
| **CapCut** | Video editing | Reels production and editing |

**Key workflow:** Midjourney (artistic direction) → GPT image (photorealistic renders + before/after) → CapCut (turn renders into reels) → ManyChat (capture inbound leads from content reach).

**What this means for OLC:** When a developer client needs content production (renderings, reels, off-plan visual assets), a partner running this stack can deliver the full pipeline. ManyChat especially is a signal of maturity — automated DM lead capture turns content reach into qualified leads.

*Full partner profile and relationship context: `research/content-creation-intel.md`*

---

## Next Steps

- [ ] Send Renner AI the 38 questions above
- [ ] Receive and review Renner's response
- [ ] Make final stack decision (GHL vs. Renner vs. hybrid)
- [ ] Define exact platform cost per client
- [ ] Update `company/pricing.md` with platform cost line item
- [ ] Set up GHL trial account (free trial available) to test before committing
