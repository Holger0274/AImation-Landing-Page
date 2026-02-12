# AI.mation Design System
## Finale LLM-Guideline für Landing Page Entwicklung

> **WICHTIG:** Diese Guideline definiert das komplette visuelle System für AI.mation. 
> Befolge diese Regeln strikt bei jeder Erstellung von Code, Komponenten und Layouts.
> Weiche NIEMALS von diesen Vorgaben ab, außer der Nutzer fordert es explizit.

---

## 1. MARKENIDENTITÄT

```
Brand:        AI.mation
Inhaber:      Holger – 20+ Jahre Engineering-Leadership-Erfahrung
Angebot:      KI-Automatisierung für kleine und mittlere Unternehmen
Tonalität:    Modern, kompetent, zugänglich, innovativ
Zielgruppe:   Geschäftsführer und Entscheider in KMUs

WICHTIG:      Die Marke soll NIEMALS konservativ, "Bank-like" oder langweilig wirken.
              Magenta ist das Herzstück der Marke – mutig, differenzierend, memorable.
```

---

## 2. FARBPALETTE

### Primäre Markenfarben

| Name | Hex | RGB | Anteil | Verwendung |
|------|-----|-----|--------|------------|
| **Magenta** | `#f90093` | 249, 0, 147 | 10% | CTAs, Buttons, Glow-Effekte, Highlights |
| **Soft Black** | `#071013` | 7, 16, 19 | 20% | Text, Headlines, dunkle Sektionen, Footer |
| **Warm White** | `#faf9f7` | 250, 249, 247 | 65% | Haupthintergrund – NICHT reines Weiß! |
| **Pure White** | `#ffffff` | 255, 255, 255 | – | Nur für Karten, Inputs, Kontrast-Elemente |
| **Hellblau** | `#60AFFF` | 96, 175, 255 | 5% | NUR dezente Icons, kleine Akzentpunkte |

### Magenta-Varianten (für Hover, Glow, Gradient)

| Name | Hex | Verwendung |
|------|-----|------------|
| Magenta | `#f90093` | Standard |
| Magenta Hover | `#d1007d` | Hover-States |
| Magenta Light | `#ff4ecd` | Gradient-Endpunkt |
| Magenta Glow | `#f9009350` | Glow-Effekt (50% Opacity) |
| Magenta Subtle | `#f9009308` | Subtle Backgrounds (3% Opacity) |
| Magenta Tint | `#f9009315` | Badge/Pill Backgrounds (8% Opacity) |

### Graustufen (abgeleitet von Warm White)

| Name | Hex | Verwendung |
|------|-----|------------|
| Warm White | `#faf9f7` | Haupthintergrund |
| Gray 50 | `#f5f4f2` | Getönte Sektionen |
| Gray 100 | `#efeee9` | Karten-Hintergründe, Hover |
| Gray 200 | `#e4e4e7` | Borders, Dividers |
| Gray 400 | `#a1a1aa` | Placeholder, deaktivierte Elemente |
| Gray 600 | `#52525b` | Sekundärer Text, Beschreibungen |

### Funktionale Farben

| Name | Hex | Verwendung |
|------|-----|------------|
| Error | `#dc2626` | Fehlermeldungen – NIEMALS Magenta für Fehler! |
| Success | `#16a34a` | Erfolgsmeldungen |
| Warning | `#f59e0b` | Warnungen |

### Farbverteilung

```
65% → Warm White (#faf9f7)  → Haupthintergrund, Content-Bereiche
20% → Soft Black (#071013)  → Headlines, Text, dunkle Sektionen, Footer
10% → Magenta (#f90093)     → Buttons, Links, Glow (NUR klickbare Elemente!)
 5% → Hellblau (#60AFFF)    → Dezente Icons, kleine Marker (SEHR SPARSAM!)
```

---

## 3. TYPOGRAFIE

### Font-Stack

| Rolle | Schriftart | Fallback | Verwendung |
|-------|------------|----------|------------|
| **Headlines** | Space Grotesk | system-ui, sans-serif | H1-H5, Buttons, Navigation, Logo |
| **Body** | Inter | system-ui, sans-serif | Fließtext, Beschreibungen, Inputs |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Typografie-Hierarchie

| Element | Font | Größe | Gewicht | Line-Height | Letter-Spacing | Farbe |
|---------|------|-------|---------|-------------|----------------|-------|
| H1 | Space Grotesk | 48-64px | 700 | 1.1 | -0.03em | Soft Black |
| H2 | Space Grotesk | 36px | 700 | 1.2 | -0.02em | Soft Black |
| H3 | Space Grotesk | 24px | 700 | 1.3 | -0.01em | Soft Black |
| H4 | Space Grotesk | 20px | 600 | 1.4 | 0 | Soft Black |
| Body Large | Inter | 18-20px | 400 | 1.7 | 0 | Gray 600 |
| Body | Inter | 16px | 400 | 1.6 | 0 | Soft Black |
| Body Small | Inter | 14px | 400 | 1.5 | 0 | Gray 600 |
| Button | Space Grotesk | 16px | 600 | 1 | 0.01em | White |
| Nav Link | Space Grotesk | 15px | 500 | 1 | 0 | Gray 600 |
| Overline | Space Grotesk | 12-14px | 600 | 1.2 | 0.05em | Soft Black |

### Highlight-Wort in Headlines

Ein einzelnes wichtiges Wort in der Headline wird in Magenta gefärbt:

```html
<h1>Mehr Zeit für das <span class="highlight">Wesentliche</span></h1>
```

```css
.highlight {
  color: var(--color-magenta);
}

/* Auf dunklem Hintergrund mit Glow */
.dark-section .highlight {
  color: var(--color-magenta);
  text-shadow: 0 0 40px rgba(249, 0, 147, 0.5);
}
```

---

## 4. CSS CUSTOM PROPERTIES

```css
:root {
  /* ===== FARBEN ===== */
  
  /* Primäre Markenfarben */
  --color-magenta: #f90093;
  --color-magenta-hover: #d1007d;
  --color-magenta-light: #ff4ecd;
  --color-magenta-glow: rgba(249, 0, 147, 0.5);
  --color-magenta-subtle: rgba(249, 0, 147, 0.03);
  --color-magenta-tint: rgba(249, 0, 147, 0.08);
  
  --color-black: #071013;
  --color-white: #ffffff;
  --color-warm-white: #faf9f7;
  --color-lightblue: #60AFFF;
  --color-lightblue-tint: rgba(96, 175, 255, 0.1);
  
  /* Graustufen */
  --color-gray-50: #f5f4f2;
  --color-gray-100: #efeee9;
  --color-gray-200: #e4e4e7;
  --color-gray-400: #a1a1aa;
  --color-gray-600: #52525b;
  
  /* Semantische Farben */
  --color-background: var(--color-warm-white);
  --color-background-alt: var(--color-gray-50);
  --color-background-dark: var(--color-black);
  --color-surface: var(--color-white);
  --color-text: var(--color-black);
  --color-text-muted: var(--color-gray-600);
  --color-text-on-dark: var(--color-white);
  --color-text-muted-on-dark: var(--color-gray-400);
  --color-border: var(--color-gray-200);
  --color-primary: var(--color-magenta);
  --color-primary-hover: var(--color-magenta-hover);
  
  /* Funktionale Farben */
  --color-error: #dc2626;
  --color-success: #16a34a;
  --color-warning: #f59e0b;
  
  /* ===== TYPOGRAFIE ===== */
  
  --font-heading: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;
  
  /* ===== SPACING ===== */
  
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  /* ===== BORDER RADIUS ===== */
  
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* ===== SHADOWS ===== */
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
  
  /* ===== GLOW EFFEKTE ===== */
  
  --glow-magenta-sm: 0 0 20px rgba(249, 0, 147, 0.3);
  --glow-magenta-md: 0 0 40px rgba(249, 0, 147, 0.4);
  --glow-magenta-lg: 0 0 60px rgba(249, 0, 147, 0.5);
  --glow-magenta-text: 0 0 40px rgba(249, 0, 147, 0.5);
  
  /* ===== TRANSITIONS ===== */
  
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## 5. BUTTON-SYSTEM

### Primär-Button (Hauptaktion)

```css
.btn-primary {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, var(--color-magenta), var(--color-magenta-light));
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--glow-magenta-sm);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-magenta-md);
}
```

**Verwendung:** NUR für die wichtigste Aktion pro Viewport

### Sekundär-Button (Alternative)

```css
.btn-secondary {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  background: transparent;
  color: var(--color-black);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  border-color: var(--color-black);
  background: var(--color-black);
  color: var(--color-white);
}
```

### Ghost-Button (Auf dunklem Hintergrund)

```css
.btn-ghost {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  background: transparent;
  color: var(--color-white);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-ghost:hover {
  background: var(--color-white);
  color: var(--color-black);
  border-color: var(--color-white);
}
```

### Text-Link

```css
.btn-text {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  background: transparent;
  color: var(--color-magenta);
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.btn-text:hover {
  color: var(--color-magenta-hover);
}
```

### Button-Hierarchie

```
1. Gradient Magenta Button  → Wichtigste Aktion (max. 1 pro Viewport!)
2. Secondary Button         → Alternative Optionen
3. Ghost Button             → Auf dunklen Hintergründen
4. Text Link                → Tertiäre Navigation

REGEL: Niemals mehr als 1 Magenta-Button im sichtbaren Bereich!
```

---

## 6. GLOW-EFFEKTE (Signature-Element)

Glow-Effekte sind ein Signature-Element von AI.mation und werden NUR auf dunklen Hintergründen verwendet.

### Glow auf Buttons

```css
.dark-section .btn-primary {
  box-shadow: var(--glow-magenta-md);
}

.dark-section .btn-primary:hover {
  box-shadow: var(--glow-magenta-lg);
}
```

### Glow auf Text

```css
.glow-text {
  color: var(--color-magenta);
  text-shadow: var(--glow-magenta-text);
}
```

### Glow als Hintergrund-Effekt

```css
.glow-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(249, 0, 147, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}
```

### Glow auf Dot/Icon

```css
.glow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-magenta);
  box-shadow: 0 0 10px var(--color-magenta);
}
```

### Wann Glow verwenden

| Situation | Glow? |
|-----------|-------|
| Dunkle Sektion (Soft Black BG) | ✅ JA |
| Hero auf Schwarz | ✅ JA |
| CTA-Banner auf Schwarz | ✅ JA |
| Footer | ✅ JA (dezent) |
| Helle Sektionen | ❌ NEIN |
| Weiße Karten | ❌ NEIN |

---

## 7. SEKTIONS-REZEPTE

### Hero Section – Hell (Standard)

```
Background:     Warm White (#faf9f7)
Overline:       Badge mit Hellblau-Dot + Soft Black Text
Headline:       Soft Black, H1, Space Grotesk 700
Highlight-Wort: Magenta (#f90093)
Subline:        Gray 600, Inter, 18-20px
Primary CTA:    Gradient Magenta Button (mit Glow: NEIN)
Secondary CTA:  Secondary Button (Gray Border)
```

### Hero Section – Dunkel (Impact)

```
Background:     Soft Black (#071013)
Glow-Effekt:    Ja – Magenta Radial Gradient im Hintergrund
Overline:       Badge mit Magenta-Glow-Dot + Weiß Text
Headline:       Weiß, H1
Highlight-Wort: Magenta MIT text-shadow Glow
Subline:        Gray 400
Primary CTA:    Gradient Magenta Button MIT Glow
Secondary CTA:  Ghost Button
```

### Features/Benefits Section

```
Background:     Warm White (#faf9f7) oder Gray 50 (#f5f4f2)
Headline:       Soft Black, H2, zentriert
Cards:          Pure White (#ffffff), Border Gray 200, Border-Radius 12px
Card-Icon:      Hellblau Dot (SEHR DEZENT)
Card-Title:     Soft Black, H4, Space Grotesk
Card-Text:      Gray 600, Inter
```

### Testimonial Section

```
Background:     Pure White (#ffffff)
Quote-Mark:     Gray 200, 4rem, dekorativ
Quote-Text:     Soft Black, Space Grotesk 500, 1.25-1.5rem
Author-Name:    Soft Black, Space Grotesk 700
Author-Role:    Gray 600, Inter, 14px
```

### Pricing Section

```
Background:     Warm White (#faf9f7)
Standard Card:  Pure White, Border Gray 200
Featured Card:  Pure White, Border 3px Magenta, Badge "Beliebt"
Price:          Soft Black, Space Grotesk 700, groß
Features:       Gray 600, Inter, mit Checkmarks
CTA Featured:   Gradient Magenta Button
CTA Standard:   Secondary Button
```

### CTA Banner (Dunkel – MIT GLOW)

```
Background:     Soft Black (#071013)
Glow-Effekt:    JA – Magenta Radial Gradient
Headline:       Weiß, H2
Highlight-Wort: Magenta mit Glow
Subline:        Gray 400
CTA:            Gradient Magenta Button MIT Glow
```

### Footer

```
Background:     Soft Black (#071013)
Logo:           Weiß + Magenta Dot (mit subtle Glow)
Links:          Gray 400, Hover: Weiß
Copyright:      Gray 600
```

---

## 8. KOMPONENTEN

### Cards

```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card-featured {
  border: 3px solid var(--color-magenta);
  position: relative;
}
```

### Overline Badge (für Hero)

```css
.overline-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--color-lightblue-tint);
  border-radius: var(--radius-full);
}

.overline-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-lightblue);
}

/* Auf dunklem Hintergrund */
.dark-section .overline-badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark-section .overline-badge .dot {
  background: var(--color-magenta);
  box-shadow: 0 0 10px var(--color-magenta);
}
```

### Icon-Box (für Features)

```css
.icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-lightblue-tint);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-lightblue);
}
```

### Input Fields

```css
.input {
  font-family: var(--font-body);
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-white);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: border-color var(--transition-base);
}

.input::placeholder {
  color: var(--color-gray-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-magenta);
  box-shadow: 0 0 0 3px var(--color-magenta-tint);
}

.input-error {
  border-color: var(--color-error);
}
```

### Badge

```css
.badge {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
}

.badge-magenta {
  background: var(--color-magenta);
  color: var(--color-white);
}

.badge-subtle {
  background: var(--color-magenta-tint);
  color: var(--color-magenta);
}
```

---

## 9. LOGO

```css
.logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-black);
}

.logo .dot {
  color: var(--color-magenta);
}

/* Auf dunklem Hintergrund */
.dark-section .logo {
  color: var(--color-white);
}

.dark-section .logo .dot {
  color: var(--color-magenta);
  text-shadow: 0 0 10px var(--color-magenta);
}
```

```html
<div class="logo">AI<span class="dot">.</span>mation</div>
```

---

## 10. RESPONSIVE BREAKPOINTS

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;

@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Mobile-Anpassungen

- Buttons: Volle Breite auf Mobile
- H1: Von 48-64px auf 36-40px
- Sektions-Padding: Von 6rem auf 3rem
- Cards: Single-Column statt Grid
- Navigation: Hamburger-Menü
- Glow-Effekte: Intensität reduzieren (Performance)

---

## 11. STRIKTE REGELN

### ✅ IMMER

1. **Warm White (#faf9f7)** als Haupthintergrund – nicht reines Weiß
2. **Gradient** auf Magenta-Buttons (135deg, #f90093 → #ff4ecd)
3. **Glow-Effekte** NUR auf dunklen Hintergründen
4. **Space Grotesk** für Headlines, Buttons, Navigation
5. **Inter** für Fließtext
6. **Ein Highlight-Wort** in Magenta pro Headline
7. **Max. 1 Magenta-Button** pro sichtbarem Bereich

### ❌ NIEMALS

1. **Reines Weiß (#ffffff)** als Seitenhintergrund – immer Warm White
2. **Glow auf hellen Hintergründen** – sieht falsch aus
3. **Magenta für nicht-klickbare Elemente** – zerstört die Bedeutung
4. **Hellblau für Text** – Kontrast zu gering
5. **Mehrere Magenta-Buttons** im Viewport – verwässert Hierarchie
6. **Reines Schwarz (#000000)** – immer Soft Black (#071013)
7. **Space Grotesk für Fließtext** – nur für Headlines
8. **Navy oder dunkles Blau** – wirkt "Bank-like", passt nicht zur Marke

---

## 12. HELLBLAU-VERWENDUNG

Hellblau (#60AFFF) ist ein **sehr dezenter** Akzent. Maximum 5% der Seite.

### ✅ Erlaubt

- Kleine Dots (8-12px) in Overline-Badges
- Icon-Box Hintergründe (10% Opacity)
- Dezente visuelle Marker

### ❌ Verboten

- Text jeglicher Art
- Buttons
- Große Flächen
- Headlines
- Links

---

## 13. ACCESSIBILITY

### Kontrast-Check

| Kombination | Ratio | Status |
|-------------|-------|--------|
| Soft Black auf Warm White | 18.5:1 | ✅ AAA |
| Soft Black auf Pure White | 19.5:1 | ✅ AAA |
| White auf Soft Black | 19.5:1 | ✅ AAA |
| White auf Magenta | 4.0:1 | ✅ AA (große Texte) |
| Gray 600 auf Warm White | 5.7:1 | ✅ AA |
| Hellblau auf Warm White | 2.4:1 | ❌ FAIL – nie für Text! |

### Regeln

- Focus-States immer sichtbar (Magenta Outline + Glow)
- Links müssen auch ohne Farbe erkennbar sein (Underline)
- Buttons mindestens 44x44px Touch-Target
- Alt-Texte für alle Bilder
- Glow-Effekte nicht für kritische Information

---

## 14. VOLLSTÄNDIGES BEISPIEL: HERO SECTION (DUNKEL MIT GLOW)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI.mation – KI-Automatisierung</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --color-magenta: #f90093;
      --color-magenta-light: #ff4ecd;
      --color-black: #071013;
      --color-white: #ffffff;
      --color-warm-white: #faf9f7;
      --color-gray-400: #a1a1aa;
      --color-gray-600: #52525b;
      --font-heading: 'Space Grotesk', system-ui, sans-serif;
      --font-body: 'Inter', system-ui, sans-serif;
    }
    
    body {
      background: var(--color-warm-white);
      font-family: var(--font-body);
    }
    
    /* Hero Section */
    .hero {
      background: var(--color-black);
      padding: 6rem 2rem;
      min-height: 90vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    
    /* Glow Background Effect */
    .hero-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 500px;
      background: radial-gradient(ellipse, rgba(249, 0, 147, 0.15) 0%, transparent 70%);
      filter: blur(80px);
      pointer-events: none;
      z-index: 0;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    
    /* Overline Badge */
    .overline-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 100px;
      margin-bottom: 1.5rem;
    }
    
    .overline-badge .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-magenta);
      box-shadow: 0 0 10px var(--color-magenta);
    }
    
    .overline-badge span {
      font-family: var(--font-heading);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-white);
    }
    
    /* Headline */
    .hero h1 {
      font-family: var(--font-heading);
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 700;
      color: var(--color-white);
      line-height: 1.1;
      letter-spacing: -0.03em;
    }
    
    .hero h1 .highlight {
      color: var(--color-magenta);
      text-shadow: 0 0 40px rgba(249, 0, 147, 0.5);
    }
    
    /* Subline */
    .hero-subline {
      font-family: var(--font-body);
      font-size: 1.25rem;
      color: var(--color-gray-400);
      line-height: 1.7;
      margin-top: 1.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* CTA Group */
    .cta-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2.5rem;
      flex-wrap: wrap;
    }
    
    /* Primary Button with Gradient + Glow */
    .btn-primary {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 600;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, var(--color-magenta), var(--color-magenta-light));
      color: var(--color-white);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 0 30px rgba(249, 0, 147, 0.4);
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 50px rgba(249, 0, 147, 0.5);
    }
    
    /* Ghost Button */
    .btn-ghost {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 600;
      padding: 1rem 2rem;
      background: transparent;
      color: var(--color-white);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .btn-ghost:hover {
      background: var(--color-white);
      color: var(--color-black);
      border-color: var(--color-white);
    }
    
    @media (max-width: 640px) {
      .hero {
        padding: 4rem 1.5rem;
        min-height: auto;
      }
      .cta-group {
        flex-direction: column;
      }
      .btn-primary, .btn-ghost {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="hero-content">
      <div class="overline-badge">
        <span class="dot"></span>
        <span>KI-Automatisierung für KMUs</span>
      </div>
      <h1>Mehr Zeit für das <span class="highlight">Wesentliche</span></h1>
      <p class="hero-subline">
        Wir helfen Unternehmen, repetitive Aufgaben zu automatisieren –
        mit KI-Lösungen, die wirklich funktionieren.
      </p>
      <div class="cta-group">
        <button class="btn-primary">Kostenlos beraten lassen →</button>
        <button class="btn-ghost">Mehr erfahren</button>
      </div>
    </div>
  </section>
  
</body>
</html>
```

---

## 15. QUICK REFERENCE

```
═══════════════════════════════════════════════════════════════
                    AI.MATION DESIGN SYSTEM
                         FINAL VERSION
═══════════════════════════════════════════════════════════════

FARBEN:
• Magenta #f90093       → CTAs, Buttons, Glow (NUR klickbar!)
• Magenta Light #ff4ecd → Gradient-Endpunkt
• Soft Black #071013    → Text, Headlines, dunkle Sektionen
• Warm White #faf9f7    → Haupthintergrund (65%) – NICHT #ffffff!
• Pure White #ffffff    → Nur für Karten, Inputs
• Hellblau #60AFFF      → Dezente Icons (5%, SEHR SPARSAM!)

VERTEILUNG: 65% Warm White | 20% Schwarz | 10% Magenta | 5% Hellblau

TYPOGRAFIE:
• Headlines: Space Grotesk (500-700)
• Body: Inter (400-600)
• H1: 48-64px, Space Grotesk 700, letter-spacing: -0.03em
• Body: 16px, Inter 400, line-height: 1.6

BUTTONS:
• Primär: Gradient Magenta + Glow → Hauptaktion (1x pro Viewport!)
• Sekundär: Gray Border → Alternative
• Ghost: Weiß Border → Auf dunklem Hintergrund
• Text: Magenta underline → Tertiär

GLOW-EFFEKTE (nur auf Soft Black Hintergrund):
• Button: box-shadow: 0 0 30px rgba(249, 0, 147, 0.4)
• Text: text-shadow: 0 0 40px rgba(249, 0, 147, 0.5)
• Background: radial-gradient + blur(60-80px)
• Dot: box-shadow: 0 0 10px #f90093

SEKTIONEN:
• Hero Hell: Warm White BG + Magenta CTA (kein Glow)
• Hero Dunkel: Soft Black BG + Glow + Magenta CTA mit Glow
• Features: Warm White/Gray-50 BG + Weiße Cards
• Testimonial: Pure White BG
• CTA Banner: Soft Black BG + Glow
• Footer: Soft Black BG

GOLDENE REGELN:
1. Magenta = IMMER klickbar
2. Glow = NUR auf dunklem Hintergrund
3. Warm White = Haupthintergrund (nicht reines Weiß!)
4. Hellblau = NUR dezente Akzente (nie Text!)
5. Max. 1 Magenta-Button pro Viewport
6. Ein Highlight-Wort in Magenta pro Headline

FONTS IMPORT:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

═══════════════════════════════════════════════════════════════
```

---

## Changelog

- v3.0 – Final: Warm White statt Pure White, Glow-Effekte, Gradient-Buttons
