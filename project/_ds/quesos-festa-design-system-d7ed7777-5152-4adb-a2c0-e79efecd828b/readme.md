# Quesos Festa — Design System

A brand + UI design system for **Quesos Festa**, a premium artisanal fresh-cheese
brand from Argentina (Buenos Aires), family-run **since 1989 (35+ years)**, Italian
heritage, and **entirely gluten-free (sin TACC)**. Product range: Burrata,
Burratina, Stracciatella, Mascarpone, Crema (incl. the JIRO Premium line) and the
white cheeses (Descremado, Quark) — sold both retail and foodservice (1–3 kg).

Positioning: warmth, family tradition, and the "receta original" italiana. The
visual world is a deep navy ground, warm appetite-forward food photography, an
engraved serif wordmark, and a delicate script signature ("Familia Festa").

---

## Sources

- **Figma file:** `quesos-festa.fig` (mounted VFS). It is a **brand mood board**,
  not a component library: one page ("Page-1") with 14 product/food photos, a
  low-res logo raster (150×150), and one standalone image symbol
  (`Chomba escudo CAT Verde`, a merch mockup — not usable as UI). It defines
  **no component families, no Figma variables, and no text styles.** All 15
  photos were copied into `assets/photos/`.
- **Uploaded logo:** `uploads/logo.jpg` → `assets/logo/festa-logo.jpg` (the FESTA
  wordmark on navy, 150×150, low resolution).
- Brand facts drawn from the mood-board content: contact `11 4991 4156`,
  `ventas@quesosfesta.com.ar`, `@quesosfesta`, `www.quesosfesta.com.ar`,
  "Industria Argentina", "4° Mundial del Queso, Brasil 2026".

> Because the source defines no components/tokens/type styles, the token system,
> component library and UI kits here are **authored** to fit the brand (see
> "Intentional additions"). Colors and photography are extracted from the source;
> everything else is a considered brand fit, flagged where relevant.

---

## Content fundamentals

- **Language:** Argentine Spanish (rioplatense). Prefers the voseo — "disfrutá",
  "contanos", "elegí" — not the peninsular "disfruta/cuéntanos".
- **Voice:** warm, familial, proud of craft and heritage. Speaks as a family
  ("nuestra", "en casa"), addresses the reader informally ("vos"). Confident, never
  loud; artisan pride over hype.
- **Casing:** headlines in the display serif are often UPPERCASE with wide tracking
  ("FESTA", "CATÁLOGO DE PRODUCTOS", "RECETA ORIGINAL"). Body copy is sentence case.
- **Overlines/eyebrows:** short, uppercase, widely tracked ("Desde 1989",
  "Catálogo de productos", "Respetamos la receta original").
- **Script accents:** a single decorative script line used as a kicker or
  signature — "Disfrutá de", "Presentación de", "Familia Festa". Never body copy.
- **Recurring phrases:** "Sin TACC / Libre de gluten", "Receta original",
  "Quesos frescos artesanales", "Desde 1989", "Familia Festa".
- **Numbers:** prices in AR$ with thousands dots ($3.200); weights in g/kg.
- **Emoji:** not part of the brand voice — avoid. Iconography is line icons only.

---

## Visual foundations

- **Color:** the anchor is **Festa navy `#1a1e54`** (the wordmark ground), backed by
  a heritage **olive-forest green `#38563e`**. Product families are colour-coded —
  mascarpone gold `#b88601`, crema blue `#1b3b7c`, descremado green `#006512`,
  quark rust `#a83505`, burrata navy. A warm neutral ramp (paper/marble) carries
  surfaces. Italian-flag green/white/red appears only as a small heritage accent.
- **Type:** engraved caps for the wordmark & hero display (**Cinzel**), an editorial
  serif for headings (**Cormorant Garamond**), a script accent (**Parisienne**), and
  a geometric humanist sans for all body & UI (**Jost**). See font substitution note.
- **Spacing:** 4px base scale (4·8·12·16·24·32·48·64). Generous section padding
  (64–96px) on marketing surfaces.
- **Backgrounds:** either the deep navy ground, the forest-green ground, warm paper
  (`#faf8f3`), or full-bleed food photography with a navy gradient scrim for text.
  No gradients-as-decoration, no noise, no synthetic textures.
- **Photography:** warm, appetite-forward, natural light; fresh cheese on wood or
  marble, caprese/bruschetta/pizza, and clean product-pack shots. Slightly warm
  white balance. This is the primary decorative surface — lean on it.
- **Corners & cards:** cards are soft (16px radius), white, with a subtle warm
  border (`#dee8e6`) and low-contrast warm shadow. Tags/buttons use small radius
  (6px) or full pill. Nothing sharp; nothing heavily rounded.
- **Shadows:** soft, warm, low-opacity navy shadows (`0 8px 24px rgba(20,23,63,.10)`).
  Used sparingly — mostly on hover lift.
- **Borders & rules:** 1px warm neutral hairlines; a signature **48px gold rule**
  under overlines/headings.
- **Motion:** restrained. 140–240ms ease-out; hover = 1–3px lift + slightly darker
  fill or deeper shadow; press = darkest fill. No bounces, no infinite loops.
- **Transparency/blur:** navy gradient scrims over photos for legibility; otherwise
  solid surfaces. Blur is not a brand motif.

---

## Iconography

- No icon font or SVG icon set exists in the source. UI icons are **line icons**
  (~1.7px stroke, rounded joins) drawn inline where needed (cart, search, close,
  chevron) to match the light geometric sans.
- If a fuller icon set is needed, use **Lucide** (CDN) — same 1.7px rounded-stroke
  style — and note the substitution. Do not mix filled icon families.
- The **Italian flag** and the **gold seal** ("Sin TACC", "Desde 1989") act as
  brand marks/stamps, reproduced as the `HeritageBadge` component — not as icons.
- **Emoji / unicode glyphs are not used** as iconography.
- **No vector logo** exists in the source (only a 150×150 raster). The wordmark is
  therefore reproduced in type via the `Wordmark` component (Cinzel). The raster is
  kept at `assets/logo/festa-logo.jpg` for reference only — replace with a proper
  vector when available.

---

## Font substitution — action needed

No brand font binaries were provided. The following Google Fonts are the closest
matches and are used throughout; **please confirm or send the licensed brand faces:**

- Wordmark / display → **Cinzel** (engraved Trajan-style caps, matches "FESTA")
- Editorial serif → **Cormorant Garamond**
- Script accent → **Parisienne** (elegant signature)
- Body / UI → **Jost** (geometric humanist ≈ Century Gothic)

---

## Intentional additions

The Figma source defines no components, so the following primitives were authored to
fit the brand's needs (retail + foodservice + marketing). Each mirrors a real brand
pattern seen in the mood board:

- **Wordmark / HeritageBadge** — the FESTA lockup and the packaging seals/flag.
- **ProductCard** — the fresh-cheese tile with family colour-coding.
- **Overline** — the uppercase-eyebrow + script-kicker + gold-rule pattern.
- Standard primitives: **Button, IconButton, Badge, Card, Input, Textarea, Select,
  Checkbox, Radio, Switch, Tabs, Accordion**.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry (import only). Links: `tokens/fonts.css`,
  `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`.
- `guidelines/*.card.html` — specimen cards (Colors, Type, Spacing, Brand).

**Components** (`components/<group>/`) — bundled to `window.QuesosFestaDesignSystem_*`
- core: **Button**, **IconButton**, **Badge**, **Card**, **Overline**
- forms: **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- navigation: **Tabs**, **Accordion**
- brand: **Wordmark**, **HeritageBadge**
- product: **ProductCard**

**UI kits** (`ui_kits/<product>/index.html`)
- `marketing/` — Festa marketing homepage (hero, catálogo, historia, recetas, FAQ)
- `shop/` — interactive product catalog with filters + live cart drawer

**Assets**
- `assets/photos/` — 14 brand food/product photos + logo raster (from Figma)
- `assets/logo/festa-logo.jpg` — FESTA wordmark raster (reference; low-res)

**Other**
- `SKILL.md` — Agent-Skill entry point for reuse.
