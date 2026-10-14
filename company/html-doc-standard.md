# OLC Method — HTML Document Standard

*All client-facing HTML documents (proposals, brochures, pitch decks, briefs) follow this standard.*

**Template file:** `olc-method/assets/proposal-template.html` — copy this, do not rebuild from scratch.

---

## Fonts

Load from Google Fonts:

```
Cormorant — display/headings (300, 400, 600; italic variants)
DM Sans   — body/UI (300, 400, 500; opsz 9..40)
```

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

---

## Color Tokens

```css
--white:        #F9F8F4;   /* page background */
--off-white:    #EFEDE7;   /* subtle background variant */
--accent:       #4F6352;   /* sage green — primary brand color */
--accent-lt:    #6B8470;   /* lighter sage for secondary elements */
--accent-pale:  #EDF1EE;   /* pale sage for highlights and tags */
--sand:         #C4A06A;   /* warm gold — bullet dots, numbering */
--sand-pale:    #F7F2EA;   /* pale sand background */
--dark:         #0D100C;   /* near-black for headings */
--text:         #0F1510;   /* body text */
--text-dim:     #3D4D40;   /* secondary body text */
--text-muted:   #9BA89E;   /* captions, footnotes, page numbers */
--border:       rgba(79,99,82,0.13);  /* dividers */
--font-d:       'Cormorant', Georgia, serif;
--font-b:       'DM Sans', system-ui, sans-serif;
--sidebar-w:    54px;
```

Page body background (screen only): `#C8C6BF`

---

## Page Layout

- **Format:** A4 (210mm × 297mm)
- **Structure:** Full-height sage green sidebar (54px) on the left + content area on the right
- **Content padding:** `28mm 24mm 24mm 20mm` (top right bottom left)
- **Print:** `@page { size: A4; margin: 0; }` — no browser margins
- **Page breaks:** `page-break-after: always` on every `.page` except the last (class `last-page`)

---

## Sidebar

The signature design element. Sage green vertical bar, full page height.

- **Width:** 54px
- **Background:** `var(--accent)` (#4F6352)
- **Label:** rotated white text, `font-size: 8px`, `letter-spacing: 0.22em`, `text-transform: uppercase`, `opacity: 0.6`
- **Cover variant** (`sidebar-cover`): `justify-content: space-between; padding: 28mm 0;` — shows "OLC Method" at top and "Confidential" at bottom

---

## Typography Scale

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| `h1` | Cormorant | 48px | 400 | Cover title. `line-height: 1.08`. Use `<em>` for italic sage green accent. |
| `h2` | Cormorant | 30px | 400 | Section title. `line-height: 1.12`. Use `<em>` for italic sage green accent. |
| `h3` | DM Sans | 9px | 500 | Sub-section label. `letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent)`. |
| `.label` | DM Sans | 9px | 500 | Eyebrow above headings. `letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent)`. |
| `p` | DM Sans | 13px | 400 | Body. `line-height: 1.8; color: var(--text-dim)`. |
| `strong` | DM Sans | — | 500 | `color: var(--text)` (slightly darker than body). |

---

## Components

### Stats Row (`.stats`)

```html
<div class="stats">
  <div class="stat">
    <div class="stat-num">18</div>
    <div class="stat-sub">Units sold off-plan</div>
  </div>
  <!-- repeat -->
</div>
```

Each stat: border-top in accent, large Cormorant number (30px), small muted label.

---

### Highlight Box (`.highlight`)

Pale sage background, 2px left border in accent. Use for key data or single-sentence callouts.

```html
<div class="highlight">
  <strong>Label:</strong> Supporting text.
</div>
```

---

### Move List (`.move`)

Numbered sections with a title and paragraph. Use for step-by-step or named action items.

```html
<div class="move">
  <div class="move-head">
    <span class="move-n">01</span>
    <span class="move-title">Section Title</span>
  </div>
  <p>Description text.</p>
</div>
```

---

### Belief / Objection List (`.belief-list`)

Sand-colored large numeral, bold title, answer below. Use for objection handling or key points.

```html
<div class="belief-list">
  <div class="belief">
    <span class="belief-n">01</span>
    <div class="belief-text">
      <span class="belief-title">"Objection text."</span>
      <span class="belief-answer">The answer.</span>
    </div>
  </div>
</div>
```

---

### Model Box (`.model-box`)

Bordered box with title, subtitle, and bullet items (middle-dot style). Use for pricing structures, packages, or key deliverables.

```html
<div class="model-box">
  <div class="model-title">Title</div>
  <div class="model-sub">Subtitle / tagline</div>
  <div class="model-item">Bullet point one</div>
  <div class="model-item">Bullet point two</div>
</div>
```

---

### Framework / Method Items (`.fw-item`)

Tag + title + description row, separated by thin borders. Use for methodology or framework explanations.

```html
<div class="fw-item">
  <span class="fw-tag">Category</span>
  <div class="fw-body">
    <span class="fw-title">Framework Name</span>
    <span class="fw-desc">One or two sentences explaining how it works.</span>
  </div>
</div>
```

---

### Avatar / Hook Lines (`.avatar-hooks`)

Tag + italicized hook copy side by side. Use for audience-specific messaging examples.

```html
<div class="avatar-hooks">
  <div class="hook-line">
    <span class="hook-tag">Audience</span>
    <span class="hook-copy">"Hook or message copy."</span>
  </div>
</div>
```

---

## Logos

- **OLC Method:** `website-v2/public/OLC_beige_vertical.jpg` (vertical, beige on sage)
- **Client logo:** `website-v2/public/clients/[ClientName].png`
- **Placement on cover:** centered flex row above stats, `height: 114px` (OLC) and `90px` (client), separated by a 1px vertical divider
- **Relative path from `clients/[client]/Marketing/`:** `../../../website-v2/public/...`

---

## Footer

Every interior page (not cover) has an absolute-positioned footer:

```html
<div class="footer">
  <span class="footer-l">OLC Method × [Client] — Confidential</span>
  <span class="footer-r">[Page number]</span>
</div>
```

Position: `bottom: 9mm`, spanning from sidebar edge to right margin.

---

## Standard Page Structure

```
Cover         — Sidebar (OLC Method / Confidential) + H1 title + logos + stats row + contact footer
Page 2–N      — Sidebar (section label) + label + H2 + body content + page footer
Last page     — CTA / next step
```

---

## Quick Checklist for New Documents

- [ ] Google Fonts link in `<head>`
- [ ] All CSS variables defined in `:root`
- [ ] `@page { size: A4; margin: 0; }` present
- [ ] Every page has `.page` class; last page has `.last-page`
- [ ] Cover uses `sidebar-cover` variant
- [ ] Logos on cover: OLC vertical beige + client logo, centered, above stats
- [ ] All interior pages have `.footer` with page number
- [ ] Humanizer applied before delivery (no em dashes, no AI vocabulary)
- [ ] Print tested: File > Print > Save as PDF in browser, verify page breaks
