# Deployment Guide — OLC Method Website v2

## Local Development

```bash
cd olc-method/website-v2
npm install
npm run dev
```

Runs at `http://localhost:4321`

## Build

```bash
npm run build
```

Output goes to `.vercel/output/static/`. Build produces 2 pages: `/` and `/thank-you/`.

## Deploy to Vercel

1. Push this repo to GitHub (if not already)
2. Go to [vercel.com](https://vercel.com) → New Project → Import Git Repository
3. Select the repo and set **Root Directory** to `olc-method/website-v2`
4. Vercel auto-detects Astro. Framework override is set in `vercel.json`.
5. Click Deploy

Every push to `main` triggers an automatic redeploy.

---

## Before Going Live — Action Required

**Both contact forms use Formspree. You must set up real form endpoints before launching.**

### Step 1: Create Formspree account

Go to [formspree.io](https://formspree.io) and sign up (free tier supports up to 50 submissions/month).

### Step 2: Create 2 forms

Create these two forms in your Formspree dashboard:
- **olc-audit** — for the "Get My Free Audit" form (homepage)
- **olc-offer** — for the "Book a Call" / CTA form (homepage)

Each form gets a unique endpoint ID that looks like: `xpznkbqw`

### Step 3: Replace placeholder IDs

Search for `REPLACE_WITH_FORMSPREE_ID` in these two files and swap in the real IDs:

- `src/components/AuditForm.astro` — replace with the `olc-audit` form ID
- `src/components/CTA.astro` — replace with the `olc-offer` form ID

The action URL format is: `https://formspree.io/f/YOUR_FORM_ID`

### Step 4: Test both forms

Before cutting over the domain, submit a test entry from each form and confirm you receive the email notification.

---

## Domain Cutover (olcmethod.com → Vercel)

1. In Vercel dashboard → your project → Settings → Domains → Add `olcmethod.com` and `www.olcmethod.com`
2. Vercel provides DNS records (usually an A record + CNAME)
3. In your domain registrar (wherever olcmethod.com is registered), update DNS to point to Vercel's values
4. DNS propagation takes 5–60 minutes
5. Vercel provisions SSL automatically once DNS resolves

## Post-Launch

- Confirm the old Netlify site is no longer receiving traffic (check Netlify analytics or disable the site)
- Archive the Netlify deployment or delete it to avoid confusion
- The old static HTML site at `olc-method/website/` can be kept as a reference but is no longer live
