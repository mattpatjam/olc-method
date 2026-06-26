# Renner AI — Meeting Brief
*OLC Method CRM + Back Office + KPI Tracker*

---

## Context

OLC Method runs marketing campaigns and closes real estate deals for developer clients on a performance basis. We need a fully integrated platform to run this for multiple clients simultaneously. We are evaluating this against GoHighLevel ($297/month, off-the-shelf). The decision depends on your answers below.

**What we need it to do:** CRM, WhatsApp automation, email sequences, Meta Ads integration, landing pages, appointment booking, client-facing KPI dashboards, and back office reporting — all white-labeled per client.

---

## Category 1 — CRM and Pipeline

1. Can you build a CRM with contact management, custom fields, tags, and pipeline stage tracking?
2. Can it handle multiple clients (sub-accounts), each with their own pipeline and contacts?
3. Can contacts be imported from Meta Lead Forms automatically (webhook or API)?

## Category 2 — WhatsApp Automation

4. Can you integrate with the WhatsApp Business API to send and receive messages programmatically?
5. Can you build automated multi-step WhatsApp sequences (triggered by form fill, stage change, time delay)?
6. Can you handle Meta's 24-hour window rule (template messages for outbound vs. free-form for replies within window)?
7. What WhatsApp Business API provider would you use (360dialog, Twilio, Meta direct)?

## Category 3 — Email Sequences

8. Can you build automated email sequences (multi-step drip campaigns triggered by lead actions)?
9. What sending infrastructure would you use (SendGrid, Mailgun, SES)?
10. Can you handle deliverability management (bounce handling, unsubscribes, domain warm-up)?

## Category 4 — Landing Pages and Funnels

11. Can you build a landing page with a lead capture form that feeds directly into the CRM?
12. How are landing pages updated when the client needs to change offer or property? Is it self-serve or does it require your team?

## Category 5 — Meta Ads Integration

13. Can you pull leads from Meta Lead Forms into the CRM in real time?
14. Can you send conversion events back to Meta (Conversions API / CAPI) for attribution?
15. Can you push contact lists from the CRM to Meta Custom Audiences?

## Category 6 — KPI Tracker and Reporting

16. Can clients log in and see a live dashboard with their own metrics — or does OLC have to generate and send reports manually?
17. What specific KPIs are trackable out of the box: CPL, lead-to-viewing rate, viewing-to-offer rate, offer-to-close rate, pipeline value, revenue closed, ad spend vs. revenue?
18. Can you show lead source attribution down to the deal level (which ad campaign produced which lead and which closed unit)?
19. Can OLC set up automated weekly/monthly KPI reports sent directly to the client without manual effort each time?
20. Can the client-facing KPI dashboard be white-labeled with the client's own branding?

## Category 7 — Multi-Client Management

21. How do you handle multiple developer clients, each with their own campaigns, pipelines, and automations?
22. When adding a new developer client, how long does it take to spin up their sub-account with pipeline stages, automations, and dashboard configured? Is there a template/snapshot system, or is each setup manual?
23. Is there a white-label option where each client sees their own branded interface?

## Category 8 — Back Office Functions

24. Can you build a calendar and appointment booking system with Google Calendar sync, auto-reminders via WhatsApp and email, and round-robin assignment if OLC adds more closers?
25. Is proposals, e-signature, and invoicing in scope?
26. Can social media scheduling (Instagram, LinkedIn, Facebook) be integrated, or is that out of scope?
27. Is two-way SMS possible alongside WhatsApp?

## Category 9 — AI Layer

28. What AI capabilities can you layer on top of the above? (Lead qualification bot, auto-reply on WhatsApp, lead scoring, etc.)
29. Can the AI be Claude-native, and can OLC Method provide the system prompts and logic?

## Category 10 — Build, Cost, and Timeline

30. What is the estimated build time for the core stack (CRM + WhatsApp + email + landing page + Meta integration + KPI dashboard)?
31. What is the build cost (one-time)?
32. What is the ongoing maintenance cost per month?
33. What is the SLA when something breaks — specifically if a client-facing system goes down at night or before a live demo?
34. Can we add features over time or is the system fixed at delivery?

## Category 11 — Operational and Data

35. Can OLC salespeople access the CRM from mobile (phone/tablet), or is it web-only?
36. If OLC ever switches away from Renner, can all contacts, pipeline history, conversation logs, and campaign data be exported cleanly? What format?
37. What backup and data recovery is in place?

## Category 12 — What Renner Cannot Do

38. What is explicitly out of scope? What would OLC Method still need another tool for?

---

## The Decision Framework

We are comparing this against **GoHighLevel Unlimited at $297/month**.

| | GoHighLevel | Renner AI |
|---|---|---|
| Time to first client | Days | Weeks/months |
| Feature coverage | Proven, broad | TBD from answers above |
| AI quality | Basic (not Claude) | Claude-native if confirmed |
| White-label | Yes (proven) | TBD |
| Monthly cost | $297/mo ongoing | One-time build + maintenance |
| Ownership | Third-party dependency | OLC/ScaleRise owns it |
| ScaleRise potential | Reselling GHL | Proprietary product |

**Custom build is worth it if:** build cost is under $3K, maintenance under $150/month, and covers 80%+ of GHL's feature set.
