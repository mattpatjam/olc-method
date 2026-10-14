# OLC Method

Outsourced sales performance for real estate developers. Domain: olcmethod.com

**Primary contact:** Matthieu Jammers (hello@olcmethod.com)

## Structure
- `clients/` — active client files (e.g. nirvana)
- `methodology/` — phase playbooks, frameworks
- `assets/` — brand logos and images
- `company/` — brand foundation, offer
- `research/` — content intel, tool stack
- `website/` — site copy and client logos

## HTML Document Standard

**All client-facing HTML documents must follow the OLC design standard.** Full reference at `company/html-doc-standard.md`.

- **Start from the template:** `assets/proposal-template.html` — copy and rename, never rebuild from scratch
- **Colors:** sage green `#4F6352`, warm off-white `#F9F8F4`, sand `#C4A06A` — all in CSS `:root` variables
- **Fonts:** Cormorant (headings) + DM Sans (body) from Google Fonts — no substitutions
- **Signature element:** 54px sage green sidebar with rotated white section label
- **Logos on cover:** OLC vertical beige (`website-v2/public/OLC_beige_vertical.jpg`) + client logo, centered, `height: 114px` / `90px`, above the stats row
- **Print:** `@page { size: A4; margin: 0; }` — always verify page breaks in browser before delivery
- **Humanizer required:** apply before sending any client-facing document

## Notes
- Skills and full assistant context live in the parent Claude repo (`../CLAUDE.md`)
- Google Drive: files sync to the ScaleRise Shared Drive automatically
- Binary files (JPG, PNG, PDF, XLSX, DOCX) are stored in Google Drive only — not kept locally. Exception: `website-v2/public/` images referenced directly by HTML (`OLC_beige_horizontal.jpg`, `OLC_beige_vertical.jpg`, `scalrise-logo-horizontal.jpg`, `clients/Nirvana.png`, `favicon.svg`) — these must stay local.
- `assets/` folder logos are in Drive; `research/references/` PDFs are in Drive
