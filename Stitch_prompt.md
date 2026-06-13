# Stitch Prompt — Personal Website Prototype (YELLOW PAGE / BYP)

> **Usage:** Copy the prompt block below into Stitch to generate a **wireframe / high-fidelity UI prototype** for a personal website.  
> **Reference style:** [Design Prompts — Cyberpunk (Dark #15)](https://www.designprompts.dev/cyberpunk) on [designprompts.dev](https://www.designprompts.dev/)  
> **Prototype constraint:** Do **NOT** include photos, avatars, profile pictures, or any raster image placeholders. Use typography, color blocks, icons, lines, and geometric shapes only.

---

## Prompt (copy from here)

```
Act as a senior UI/UX designer and product prototyper.

Design a multi-screen interactive website prototype for a platform called **YELLOW PAGE** — a personal / storefront / service homepage builder where users showcase models or sell services. The hero acronym **BYP** stands for **"Build Your Page"**.

---

### GOAL
Create a clean, shippable prototype that communicates structure, navigation, hierarchy, and a strong default visual identity. This is a **UI prototype**, not a final marketing site. Focus on layout, components, states, and interaction notes.

---

### REFERENCE VISUAL STYLE (Design Prompts)
Apply the **Cyberpunk — Dark** design language from Design Prompts (designprompts.dev/cyberpunk):

- Dark immersive background (#050505 to #0A0F1F range)
- High-contrast neon accents (cyan #00C2FF, magenta #FF2EEA, electric pink)
- Futuristic typography mix: bold sans-serif headlines + subtle monospace for labels / system text
- Thin neon borders, soft glow on interactive elements, glass-like panels with low-opacity overlays
- Grid-based, modular layout; sharp but readable hierarchy
- Japanese Cyberpunk / **"Japanese Punk 2077"** as the **default cultural theme**: neon kanji-style typographic accents (decorative only, no real copy required), rain-slick mood, vertical rhythm inspired by Tokyo night signage — but keep the UI clean and professional, not cluttered

The overall look should feel like: **Cyberpunk Dark (Design Prompts) + Japanese futurist street culture**.

---

### INFORMATION ARCHITECTURE

#### Primary pages / sections
1. **Home (Landing)**
2. **Content** — portfolio / articles / model showcase listing
3. **Circle (Community)** — community or social hub section
4. **Products** — goods or services catalog
5. **About Me**
6. **Contact Me**

#### Home page layout (required)
- **Top-left or top-center Logo:** text wordmark **"YELLOW PAGE"** (no image logo)
- **Hero / main area:** large typographic focal **"BYP"** with sublabel **"Build Your Page"**
- **Bottom section:** **"Select Country"** — country picker / selector control (show 3–5 country options as chips or dropdown; selecting a country triggers theme preview — annotate this behavior in the prototype)
- **Secondary entry points** to Content, Circle, Products (cards, tabs, or nav links)

---

### NAVIGATION & ROUTING
- **Fixed navigation bar** anchored to the **top-right** of the viewport
- Nav items (minimum): **About Me**, **Contact Me**, plus access to **Content**, **Circle**, **Products**
- Interaction: standard **page-to-page navigation** on click (show linked frames / screens in the prototype)
- Include hover and active states for nav links (neon underline or glow)

---

### DYNAMIC THEME SYSTEM (important)
The visual style is **driven by "Select Country"**:

- Each country option switches the site's **cultural visual style**
- **Default country theme:** Japan → **Japanese Cyberpunk / Japanese Punk 2077**
- When country changes, update these tokens (show at least 2 theme variants in the prototype, e.g. Japan default + one alternate such as France or Brazil):
  - **Primary color**
  - **Accent color** (buttons, links, CTAs)
  - **Text color** (primary + secondary)
  - Optional subtle background pattern or border motif reflecting that culture (abstract geometry only — no photos)

Add a small **"Theme Preview"** annotation panel or legend explaining: *Country selection → palette + motif + interaction style*.

---

### COLOR SYSTEM (default — Japan / Cyberpunk)
| Token | Default value | Usage |
|-------|---------------|-------|
| Background | #050505 – #0A0F1F | Page base, panels |
| Primary | #00C2FF (neon cyan) | Headlines, key borders |
| Accent | #FF2EEA (neon magenta) | Buttons, links, hover |
| Text primary | #E5E7EB | Body, nav |
| Text secondary | #6B7280 | Captions, meta |
| Surface / card | rgba(15, 23, 42, 0.8) | Cards, modals |

Buttons: filled accent with dark text OR outlined neon with glow on hover.

---

### INTERACTION & MOTION (annotate in prototype)
- **Page transitions:** fade in / fade out between screens (note as transition spec)
- **Scroll effects:** none — keep scrolling simple, no parallax
- **Mouse / cursor effects:** style varies by selected country; **default (Japan):** subtle neon trail or crosshair reticle on interactive zones — indicate with callout notes, do not over-animate static frames
- **Loading state:** country-specific loader; **default (Japan):** terminal-style boot sequence or glitch flicker text (e.g. `> SYSTEM ONLINE`) — design one loading screen

---

### CONTENT PLACEHOLDERS (no images)
Use **text placeholders** and **abstract blocks** only:
- Gray or neon-outlined rectangles instead of photos
- Icon-only or letter-based avatars (e.g. circle with initials "AB") — **no face photos**
- Product cards: title, price, short description, CTA button — no product photography
- Model / portfolio cards: name, category tag, metric — no headshots

---

### KEY SCREENS TO DELIVER
Please generate these connected frames:

1. **Home** — YELLOW PAGE logo, BYP hero, Select Country, links to main sections
2. **Content** — grid or list of content cards (placeholder blocks)
3. **Circle** — community feed or member list (abstract avatars as initials only)
4. **Products** — product / service grid with filters
5. **About Me** — bio text columns, skills tags, timeline (no portrait photo — use geometric avatar placeholder)
6. **Contact Me** — form fields (Name, Email, Message), submit button, optional social link icons
7. **Loading screen** — Japanese Punk 2077 default
8. **Theme variant preview** — same Home frame with alternate country palette applied

---

### RESPONSIVE
- Desktop-first (1440px width)
- Include one mobile breakpoint frame (375px) for the Home page showing stacked hero + country selector

---

### ACCESSIBILITY & UX NOTES
- Maintain WCAG-friendly contrast even with neon palette
- Clear focus states on buttons and links
- Country selector must be keyboard-accessible (dropdown or radio group)
- Label all interactive elements

---

### DO NOT INCLUDE
- Real photography, stock images, or AI-generated faces
- Profile pictures or character illustrations
- Video embeds
- Lorem ipsum longer than one short line per block — prefer meaningful placeholder labels like "Model Title", "Service Name", "Community Post"

---

### OUTPUT EXPECTATION
Deliver a cohesive, clickable prototype with consistent Cyberpunk Dark (Design Prompts) styling, Japanese Punk 2077 as default country theme, clear navigation from top-right, and a visible Select Country control that implies dynamic theming across pages.
```

---

## Quick reference (mind map → prompt mapping)

| Mind map field | Prompt section |
|----------------|----------------|
| 整体信息 — 个人/店铺/电商首页，展示模型或卖服务 | GOAL + platform description |
| 页面结构 — Logo YELLOW PAGE, BYP, Select Country, 内容/圈子/商品 | Home layout + IA |
| 导航与跳转 — 右上角固定，关于我/联系我 | Navigation & Routing |
| 视觉风格 — 随国家变化，默认日本赛博朋克 | Reference Visual Style + Dynamic Theme |
| 配色方案 — 主色/强调色/文字色随国家变化 | Color System + Theme variants |
| 交互效果 — 淡入淡出、无滚动特效、鼠标/加载随国家 | Interaction & Motion |

---

## Design Prompts styles used

- **Primary:** [#15 Cyberpunk (Dark)](https://www.designprompts.dev/cyberpunk)
- **Related (optional alternates for other countries):** [#22 Vaporwave (Dark)](https://www.designprompts.dev/vaporwave), [#08 Kinetic (Dark)](https://www.designprompts.dev/kinetic), [#10 Art Deco (Dark)](https://www.designprompts.dev/art-deco)
