# AI.mation Landing Page – Projekt-Guideline

> **Zweck:** Zentrale Wissensbasis für die Entwicklung der AI.mation Landing Page.
> 
> **Wichtig:** Dieses Dokument definiert Struktur, Verhalten und Technik. Alle visuellen Werte (Farben, Schriften, Spacing, Shadows, Buttons) befinden sich im separaten **Design-System-Dokument** und werden hier NICHT wiederholt.

---

## 1. Projektübersicht

### 1.1 Unternehmen
**AI.mation** – KI-Automatisierung für kleine und mittlere Unternehmen (KMU).

### 1.2 Zielgruppe
- Geschäftsführer und Entscheider im Mittelstand
- Führungskräfte die KI verstehen und einsetzen wollen
- Unternehmen die Prozesse automatisieren möchten

### 1.3 Ziel der Landing Page
- Besucher begeistern und auf der Seite halten
- Vertrauen und Expertise vermitteln
- Conversion: Besucher zur Kontaktaufnahme animieren
- Positionierung als Premium-Anbieter

---

## 2. Tech-Stack

### 2.1 Core
```
Next.js 14/15 (App Router)    → Framework
Tailwind CSS                  → Styling
Framer Motion                 → Animationen
GSAP (optional)               → Komplexe Scroll-Animationen
```

### 2.2 Komponenten & Tools
```
shadcn/ui                     → Basis-Komponenten
Lucide Icons                  → Icon-Library
next-intl                     → Internationalisierung (DE/EN)
Lottie React                  → Vektor-Animationen
```

### 2.3 Deployment
```
Vercel                        → Hosting & CI/CD
```

---

## 3. Projektstruktur

```
aimation-landing/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Solution.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── SocialProof.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FlipCard.tsx
│   │   ├── MagneticButton.tsx
│   │   └── AnimatedCounter.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       ├── TextReveal.tsx
│       └── ParallaxWrapper.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── messages/
│   ├── de.json
│   └── en.json
├── public/
│   ├── images/
│   ├── icons/
│   └── lottie/
└── docs/
    ├── DESIGN_SYSTEM.md         ← Farben, Schriften, Spacing, Buttons
    ├── SCHULUNGEN.md            ← Säule 1 Content
    ├── BERATUNG.md              ← Säule 2 Content
    ├── KI_AUTOMATISIERUNG.md    ← Säule 3 Content
    └── LOGO/                    ← Logo-Assets
```

---

## 4. Design-System Integration

> **Alle visuellen Werte werden aus dem externen Design-System-Dokument übernommen.**

### Was das Design-System enthält:
- Farbpalette (Primär, Graustufen, Funktional)
- Typografie (Schriften, Größen, Gewichte)
- Spacing-System
- Border Radius
- Shadows & Glow-Effekte
- Button-Varianten & States
- Komponenten-Styles
- CSS Custom Properties

### Integration:
1. CSS Custom Properties in `globals.css` übertragen
2. Tailwind Config mit Design-Tokens erweitern
3. Komponenten entsprechend stylen

---

## 5. Seitenstruktur & Sektionen

### 5.1 Header

**Verhalten:**
- Sticky beim Scrollen
- Transparent auf Hero → solid beim Scroll
- Backdrop-blur für Premium-Look

**Inhalt:**
- Logo (links)
- Navigation: Leistungen | Über mich | Kontakt
- CTA-Button (rechts)
- Language Switcher (DE/EN)

**Mobile:**
- Hamburger-Menu
- Slide-in Navigation

---

### 5.2 Hero Section

**Ziel:** Pattern Interrupt – Besucher in 3 Sekunden fesseln

**Struktur:**
```
┌─────────────────────────────────────────────────┐
│  [Logo]                        [Nav] [CTA] [DE] │
├─────────────────────────────────────────────────┤
│                                                 │
│   [Overline Badge]                              │
│   [Headline mit Highlight-Wort]                 │
│   [Subheadline]                                 │
│                                                 │
│   [Primärer CTA]    [Sekundärer CTA]            │
│                                                 │
│   [Background Animation / Glow]                 │
│                                                 │
│              ↓ Scroll-Indikator                 │
└─────────────────────────────────────────────────┘
```

**Animationen:**
- Headline: Text-Reveal (Wort für Wort)
- Subheadline: Fade-in mit Delay
- CTAs: Slide-up mit Stagger
- Hintergrund: Gradient-Shift oder Blob-Animation
- Scroll-Indikator: Bounce

---

### 5.3 Pain Points Section

**Ziel:** Besucher spiegeln – "Die verstehen mein Problem"

**Inhalt:**
- 3 Pain Points mit Icons
- Beispiele: "Excel-Listen die niemand pflegt", "Wissen in Köpfen statt Systemen", "Wiederkehrende Aufgaben die Zeit fressen"

**Design:**
- Dunkler Hintergrund
- Kontrastierender Text

**Animationen:**
- Scroll-triggered Einblenden
- Icons: Pulse oder Draw-Animation

---

### 5.4 Solution Section

**Ziel:** Kontrast zum Problem – "So sieht die Lösung aus"

**Design:**
- Heller Hintergrund (Wechsel = unbewusst "Lösung")
- Ergebnis-orientierte Aussagen

**Animationen:**
- Fade-in beim Scroll
- Parallax-Elemente

---

### 5.5 Services Section (Die 3 Säulen)

**Ziel:** Leistungsspektrum klar kommunizieren

> **Content aus externen Dokumenten:**
> - Schulungen
> - Beratung  
> - KI-Automatisierung

**Design:**
- **Flip-Cards** für jede Säule
  - Vorderseite: Icon + Titel + Teaser
  - Rückseite: Benefits + Link

**Verhalten:**
- Desktop: Flip auf Hover
- Mobile: Flip auf Tap

**Animationen:**
- 3D-Flip (Y-Achse, 180°)
- Stagger-Effekt beim Scroll
- Glow auf aktiver Karte (nur auf dunklem BG)

---

### 5.6 Process Section

**Ziel:** Komplexität reduzieren – "So einfach geht's"

**Struktur:**
```
[1. Erstgespräch] → [2. Konzept] → [3. Umsetzung] → [4. Begleitung]
```

**Design:**
- Desktop: Horizontale Timeline
- Mobile: Vertikale Timeline

**Animationen:**
- Draw-Animation für Verbindungslinien
- Steps erscheinen sequentiell
- Icons mit Bounce

---

### 5.7 Social Proof Section

**Ziel:** Vertrauen durch Dritte

**Elemente:**
- Tool-Logos (make.com, n8n, Microsoft)
- Zahlen mit Animated Counter ("20+ Jahre Erfahrung")
- Testimonials (wenn vorhanden)

**Animationen:**
- Logo-Slider (Infinite-Scroll)
- Counter hochzählen beim Scroll

---

### 5.8 About Section

**Ziel:** Persönliche Verbindung

**Inhalt:**
- Professionelles Foto
- Authentische Bio
- Erfahrung & Expertise

**Design:**
- Split-Layout: Bild | Text

**Animationen:**
- Bild: Reveal-Effekt (Mask öffnet sich)
- Text: Fade-in

---

### 5.9 FAQ Section

**Ziel:** Einwände vorwegnehmen

**Design:**
- Akkordeon-Stil
- 5-7 Fragen

**Animationen:**
- Smooth Expand/Collapse
- Icon-Rotation

---

### 5.10 CTA Section (Final)

**Ziel:** Letzte Conversion-Chance

**Inhalt:**
- Compelling Headline
- Zwei CTAs:
  1. Warm: "Kostenloses Erstgespräch buchen"
  2. Kalt: "KI-Potenzial-Guide herunterladen"

**Design:**
- Volle Breite
- Dunkler Hintergrund mit Glow

**Animationen:**
- Background Gradient-Shift
- Magnetic Buttons

---

### 5.11 Footer

**Inhalt:**
- Logo
- Kontaktdaten
- LinkedIn
- Impressum | Datenschutz
- Copyright

---

## 6. Animationen & Interaktionen

### 6.1 Framer Motion Varianten

```typescript
// Fade In Up
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale In
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

### 6.2 Flip-Card

```typescript
const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const handleInteraction = () => {
    if (isMobile) setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      onClick={handleInteraction}
      onHoverStart={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </motion.div>
    </motion.div>
  );
};
```

### 6.3 Magnetic Button

```typescript
const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.button>
  );
};
```

### 6.4 Text-Reveal

```typescript
const TextReveal = ({ text }) => {
  const words = text.split(" ");
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
```

### 6.5 Animated Counter

```typescript
const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};
```

### 6.6 Parallax Wrapper

```typescript
const ParallaxWrapper = ({ children, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};
```

### 6.7 Custom Cursor (nur Desktop)

```typescript
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};
```

---

## 7. Responsive Design

> **KRITISCH:** Die Landing Page MUSS auf Laptops, Tablets und Smartphones einwandfrei funktionieren.

### 7.1 Breakpoints (Tailwind)

```
sm:   640px   → Mobile landscape
md:   768px   → Tablet
lg:  1024px   → Laptop
xl:  1280px   → Desktop
2xl: 1536px   → Large Desktop
```

### 7.2 Mobile-First Entwicklung

Immer zuerst für Mobile entwickeln, dann erweitern.

### 7.3 Device-spezifische Regeln

**Mobile (< 768px):**
- Hamburger-Menu
- Flip-Cards: Tap statt Hover
- Vereinfachte Animationen
- Vertikale Layouts
- Touch-Targets min. 44x44px
- Kein Custom Cursor
- Glow-Effekte reduziert

**Tablet (768px - 1024px):**
- 2-spaltige Layouts
- Navigation horizontal oder Hamburger
- Moderate Animationen

**Laptop/Desktop (> 1024px):**
- Volle Animationen
- Hover-Effekte aktiv
- Parallax aktiv
- Custom Cursor möglich
- Mehrspaltige Layouts

### 7.4 Performance auf Mobile

```typescript
// Reduced Motion Check
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
  : false;

const variants = prefersReducedMotion 
  ? { hidden: {}, visible: {} }
  : fadeInUp;
```

### 7.5 Responsive Images

```tsx
<Image
  src="/hero-image.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority
/>
```

### 7.6 Testing-Checkliste

- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Laptop (1366px)
- [ ] Desktop (1920px)
- [ ] Touch-Interaktionen
- [ ] Landscape-Orientierung

---

## 8. Content-Strategie & SEO

### 8.1 Strategie-Empfehlung

Für AI.mation ist ein **klassischer Blog NICHT die beste Strategie**. Blogs brauchen 6-12 Monate für SEO-Resultate und viel kontinuierlichen Aufwand.

**Besserer Ansatz: LinkedIn-First + Ressourcen-Hub**

### 8.2 LinkedIn-First Content

**Warum:**
- Zielgruppe (Entscheider im Mittelstand) ist auf LinkedIn
- Sofortige Reichweite ohne SEO-Warten
- Persönliche Marke stärken
- Direkte Lead-Generierung

**Umsetzung:**
- 2-3 Posts pro Woche
- Inhalte später für Website recyceln
- Link zur Landing Page in Profil

### 8.3 Ressourcen-Hub statt Blog

**Struktur auf der Website:**

```
/ressourcen
├── /guides
│   ├── ki-einstieg-mittelstand.pdf
│   ├── automatisierungs-checkliste.pdf
│   └── copilot-quickstart.pdf
├── /use-cases
│   ├── meeting-automatisierung
│   ├── dokumenten-verarbeitung
│   └── lead-qualifizierung
└── /tools
    └── ki-potenzial-rechner (interaktiv)
```

**Vorteile:**
- Lead Magnets (E-Mail gegen Download)
- Evergreen Content (kein Datumsstempel)
- Höhere Conversion als Blog

### 8.4 SEO-Strategie ohne Blog

**Pillar Pages:**
Wenige, sehr tiefe Seiten zu Kernthemen:

```
/ki-automatisierung-mittelstand     → 3000+ Wörter, umfassend
/ki-schulungen-unternehmen          → 3000+ Wörter, umfassend
/ki-beratung                        → 3000+ Wörter, umfassend
```

**Lokales SEO:**
- Google Business Profile
- "KI Beratung [Stadt]" Keywords

**Technisches SEO:**
- Core Web Vitals optimieren
- Strukturierte Daten (Schema.org)
- Sitemap
- Meta-Tags pro Seite

### 8.5 Lead Magnets

**Empfohlene Formate:**

| Lead Magnet | Aufwand | Conversion |
|-------------|---------|------------|
| PDF-Guide (5-10 Seiten) | Mittel | Hoch |
| Checkliste (1-2 Seiten) | Niedrig | Mittel |
| KI-Potenzial-Rechner | Hoch | Sehr hoch |
| Video-Serie | Hoch | Hoch |
| Template/Vorlage | Niedrig | Mittel |

**Für den Start empfohlen:**
1. "KI-Potenzial-Check für KMUs" (PDF, 5 Seiten)
2. "Automatisierungs-Checkliste" (PDF, 2 Seiten)

### 8.6 Später (Future Scope)

- Case Studies nach ersten Kundenprojekten
- Video-Testimonials
- Webinar-Aufzeichnungen
- Interaktiver ROI-Rechner

---

## 9. Internationalisierung (i18n)

### 9.1 Struktur

```
messages/
├── de.json
└── en.json
```

### 9.2 Beispiel

```json
{
  "hero": {
    "headline": "Mehr Zeit für das Wesentliche",
    "subheadline": "...",
    "cta_primary": "Erstgespräch buchen",
    "cta_secondary": "Mehr erfahren"
  },
  "services": {
    "training": { "title": "Schulungen", "description": "..." },
    "consulting": { "title": "Beratung", "description": "..." },
    "automation": { "title": "KI-Automatisierung", "description": "..." }
  },
  "navigation": {
    "services": "Leistungen",
    "about": "Über mich",
    "contact": "Kontakt"
  }
}
```

---

## 10. Kontakt-Formular

### 10.1 Felder

```typescript
interface ContactForm {
  name: string;           // Required
  email: string;          // Required, Validation
  company?: string;       // Optional
  interest: 'schulung' | 'beratung' | 'automatisierung' | 'sonstiges';
  message: string;        // Required
  privacy: boolean;       // Required
}
```

### 10.2 Verhalten

- Client-side Validation
- Loading State
- Success/Error Feedback
- Mobile: Stacked Layout
- E-Mail via Resend oder ähnlich

---

## 11. Externe Dokumente

| Dokument | Beschreibung | Integration |
|----------|--------------|-------------|
| Design-System | Farben, Schriften, Spacing, Buttons | → `tailwind.config.js`, `globals.css` |
| Schulungen | Säule 1 Content | → `messages/*.json` |
| Beratung | Säule 2 Content | → `messages/*.json` |
| KI-Automatisierung | Säule 3 Content | → `messages/*.json` |
| Logo | SVG, PNG | → `/public/images/` |

**Reihenfolge:**
1. Design-System zuerst – alle Komponenten hängen davon ab
2. Logo einbinden
3. Säulen-Content in Sprachdateien

---

## 12. Performance-Ziele

```
Lighthouse Score:           > 90
First Contentful Paint:     < 1.5s
Largest Contentful Paint:   < 2.5s
Cumulative Layout Shift:    < 0.1
```

**Optimierungen:**
- Next.js Image Component (WebP/AVIF)
- next/font für Fonts
- GPU-beschleunigte Animationen (transform, opacity)
- Dynamic Imports für schwere Komponenten
- Lazy Loading für Below-the-Fold

---

## 13. Launch-Checkliste

### Design & Content
- [ ] Design-System integriert
- [ ] Logo in allen Größen
- [ ] Alle Texte DE + EN
- [ ] Säulen-Content eingepflegt

### Responsive
- [ ] Mobile getestet (375px - 428px)
- [ ] Tablet getestet (768px - 1024px)
- [ ] Laptop getestet (1024px - 1440px)
- [ ] Desktop getestet (1920px+)
- [ ] Touch-Interaktionen funktionieren

### Accessibility
- [ ] Keyboard-Navigation
- [ ] Screen-Reader getestet
- [ ] Reduced Motion respektiert
- [ ] Focus-States sichtbar

### SEO & Rechtliches
- [ ] Meta-Tags gesetzt
- [ ] OG-Images vorhanden
- [ ] Sitemap generiert
- [ ] robots.txt
- [ ] Impressum
- [ ] Datenschutzerklärung
- [ ] Cookie-Banner (falls nötig)

### Deployment
- [ ] Vercel Preview getestet
- [ ] Production Deploy
- [ ] Domain konfiguriert
- [ ] SSL aktiv

---

## 14. Weiterentwicklung (Future Scope)

- [ ] Ressourcen-Hub mit Lead Magnets
- [ ] Use Cases / Case Studies
- [ ] Interaktiver KI-Potenzial-Rechner
- [ ] Kalender-Integration (Cal.com)
- [ ] Newsletter-System
- [ ] Pillar Pages für SEO

---

> **Hinweis für Claude Code:**
> 
> 1. **Design-System zuerst lesen** – alle visuellen Werte kommen von dort
> 2. **Dieses Dokument** definiert Struktur, Verhalten, Technik
> 3. **Keine Annahmen** – bei fehlenden Infos nachfragen
> 4. **Responsive ist Pflicht** – jede Komponente muss auf allen Geräten funktionieren
