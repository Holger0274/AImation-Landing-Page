# ProjectShowcase Section – Briefing für Claude Code

## Kontext

Diese Section ist ein "Schaufenster" für AI.mation Use Cases. Sie zeigt konkrete Anwendungsfälle die für Entscheider im Mittelstand relevant sind – Patent, Technologie-Scouting, E-Mail, Benchmarking. Die Section wird regelmäßig mit neuen Cases erweitert.

## Design-Anforderungen

### Einbettung
- Muss sich nahtlos in bestehendes Design System einfügen
- Verwendet die definierten Farben, Fonts, Spacing aus der bestehenden Tailwind Config
- Gleiche Animationssprache wie andere Sections (Framer Motion)

### Layout
- **Horizontales Karussell** (NICHT vertikales Grid)
- Cards scrollen von links nach rechts
- Auf Desktop: 2-3 Cards sichtbar, Rest per Scroll/Drag erreichbar
- Auf Mobile: 1 Card sichtbar, Swipe-Geste
- Subtile Scroll-Indikatoren (Dots oder Progress-Bar)
- Optional: Pfeil-Buttons links/rechts für Desktop

### Card-Design

Jede Projekt-Card hat **ein Bild** (nicht mehrere):

```
┌─────────────────────────────────────┐
│                                     │
│         [EIN BILD – 16:9]           │
│                                     │
│   n8n Flow / Excalidraw / Screen    │
│   oder Kombi-Bild (vorproduziert)   │
│                                     │
├─────────────────────────────────────┤
│  [KNOW] ← Lösungswelt-Badge         │
│                                     │
│  Projekt-Titel                      │
│  Kurze Beschreibung (2-3 Zeilen)    │
│                                     │
│  ┌──────────────┐                   │
│  │ 80% schneller │ ← Metric         │
│  └──────────────┘                   │
│                                     │
│  [Perplexity] [Claude] ← Tech-Tags  │
│                                     │
│  ● PoC abgeschlossen                │
└─────────────────────────────────────┘
```

### Bild-Bereich
- **Genau 1 Bild pro Card** (16:9 Ratio)
- Bildtypen variieren je nach Case: n8n Screenshot, Excalidraw Diagramm, UI Screenshot, oder vorproduziertes Kombi-Bild
- **Aktuell Platzhalter verwenden** – stilisiert, nicht einfach grau
- Bilder später unter `/public/images/projects/` ablegen
- Leichter Hover-Effekt (sanfter Zoom)

### Lösungswelt-Farben (aus bestehendem Design System)
```
FLOW  = #0077B6 (Prozessautomatisierung)
KNOW  = #7209B7 (Wissensmanagement)  
THINK = #F72585 (KI-Assistenten)
WORK  = #4CC9F0 (Arbeitsplatz-Tools)
```

### Status-Anzeige
- `completed` → Grüner Dot + "PoC abgeschlossen" oder "Im Einsatz"
- `in-progress` → Amber Dot + "In Entwicklung"  
- `coming-soon` → Grauer Dot + "Coming Soon" (Card leicht ausgegraut)

## Technische Umsetzung

### Komponenten-Struktur
```
components/sections/ProjectShowcase/
├── ProjectShowcase.tsx      (Haupt-Section mit Karussell)
├── ProjectCard.tsx          (Einzelne Card)
├── ImagePlaceholder.tsx     (Stilisierte Platzhalter)
└── types.ts                 (TypeScript Interfaces)
```

### Daten-Struktur
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  solutionWorld: 'FLOW' | 'KNOW' | 'THINK' | 'WORK';
  status: 'completed' | 'in-progress' | 'coming-soon';
  tags: string[];
  metrics?: string;
  image: {
    type: 'placeholder' | 'image';
    src?: string;
    placeholderType?: 'n8n' | 'excalidraw' | 'screenshot' | 'diagram';
    alt: string;
  };
}
```

## Die 4 Use Cases

```typescript
const PROJECTS: Project[] = [
  {
    id: 'patent-research',
    title: 'Patentrecherche & Prior Art',
    description: 'Automatisierte Analyse von Patentdatenbanken. Findet relevante Prior Art, identifiziert Wettbewerber-Patente und erstellt strukturierte Übersichten.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['Perplexity', 'Claude', 'Patent-APIs'],
    metrics: '80% schnellere Recherche',
    image: {
      type: 'placeholder',
      placeholderType: 'excalidraw',
      alt: 'Patent-Recherche Workflow'
    }
  },
  {
    id: 'tech-scouting',
    title: 'Technologie-Scouting',
    description: 'Kontinuierliches Monitoring von Technologie-Trends und Innovationen. Filtert relevante Entwicklungen aus Fachpublikationen, Papers und News.',
    solutionWorld: 'KNOW',
    status: 'completed',
    tags: ['RSS', 'Claude', 'Notion'],
    metrics: 'Wöchentlicher Tech-Radar',
    image: {
      type: 'placeholder',
      placeholderType: 'n8n',
      alt: 'Tech-Scouting Automatisierung'
    }
  },
  {
    id: 'email-classification',
    title: 'E-Mail Klassifizierung',
    description: 'Intelligente Kategorisierung eingehender E-Mails. Erkennt Anfrage-Typ, Dringlichkeit und routet automatisch an die richtige Stelle.',
    solutionWorld: 'FLOW',
    status: 'completed',
    tags: ['OpenAI', 'n8n', 'Outlook'],
    metrics: '60% weniger Sortieraufwand',
    image: {
      type: 'placeholder',
      placeholderType: 'n8n',
      alt: 'E-Mail Klassifizierungs-Flow'
    }
  },
  {
    id: 'competitor-benchmark',
    title: 'Wettbewerbs-Benchmark',
    description: 'Automatisierte Analyse von Wettbewerbern. Vergleicht Preise, Features, Positionierung und erstellt regelmäßige Reports.',
    solutionWorld: 'THINK',
    status: 'coming-soon',
    tags: ['Web Scraping', 'Claude', 'Airtable'],
    image: {
      type: 'placeholder',
      placeholderType: 'diagram',
      alt: 'Benchmark-Prozess'
    }
  }
];
```

## Section-Header

```
Badge:    "Use Cases"
Headline: "So sieht KI-Automatisierung in der Praxis aus"
Subline:  "Konkrete Anwendungsfälle – von der Patentrecherche bis zum Technologie-Radar."
```

## Platzhalter-Design

Stilisierte Platzhalter die den Bildtyp andeuten (nicht einfach graue Boxen):

**n8n Style:**
```
┌─────────────────────────────────────┐
│                                     │
│      ┌───┐      ┌───┐      ┌───┐   │
│      │ ● │──────│ ● │──────│ ● │   │
│      └───┘      └───┘      └───┘   │
│                    │               │
│               ┌───┐               │
│               │ ● │               │
│               └───┘               │
│                                     │
│         n8n Workflow                │
└─────────────────────────────────────┘
```
- Hintergrund: `bg-[#1a1a2e]` (n8n dark theme Anmutung)
- Nodes: Abgerundete Rechtecke mit Verbindungslinien
- Accent: Ein Node in Lösungswelt-Farbe

**Excalidraw Style:**
```
┌─────────────────────────────────────┐
│                                     │
│    ╭─────╮         ╭─────╮         │
│    │     │────────▶│     │         │
│    ╰─────╯         ╰─────╯         │
│        │               │           │
│        ▼               ▼           │
│    ╭─────╮         ╭─────╮         │
│    │     │         │     │         │
│    ╰─────╯         ╰─────╯         │
│                                     │
│       Prozess-Diagramm              │
└─────────────────────────────────────┘
```
- Hintergrund: `bg-[#fffce8]` (Excalidraw canvas Farbe)
- Elemente: Handgezeichnet-Stil mit `stroke-dasharray` oder rough edges
- Farbe: `stroke-gray-600`

**Screenshot Style:**
```
┌─────────────────────────────────────┐
│  ● ● ●                             │
│ ─────────────────────────────────── │
│  ┌─────┐                           │
│  │ ▢ ▢ │  ━━━━━━━━━━━━━━━         │
│  └─────┘  ━━━━━━━━━━               │
│           ━━━━━━━━━━━━━            │
│                                     │
│  ┌──────────────────────┐          │
│  │ ████████░░░░░░░░░░░░ │          │
│  └──────────────────────┘          │
│                                     │
│         UI Screenshot               │
└─────────────────────────────────────┘
```
- Hintergrund: `bg-white`
- Browser Chrome oben (drei Dots)
- Angedeutete UI-Elemente

**Diagram Style:**
```
┌─────────────────────────────────────┐
│                                     │
│           ┌───────┐                │
│           │ Input │                │
│           └───┬───┘                │
│               │                     │
│        ┌──────┼──────┐             │
│        ▼      ▼      ▼             │
│      ┌───┐  ┌───┐  ┌───┐          │
│      │ A │  │ B │  │ C │          │
│      └───┘  └───┘  └───┘          │
│                                     │
│       Architektur-Diagramm          │
└─────────────────────────────────────┘
```
- Hintergrund: `bg-gray-50`
- Clean, technisch
- Accent in Lösungswelt-Farbe

## Responsive Verhalten

| Breakpoint | Sichtbare Cards | Card-Breite |
|------------|-----------------|-------------|
| Mobile     | 1 (+ Peek)      | 85vw        |
| Tablet     | 2               | 340px       |
| Desktop    | 2.5-3           | 400px       |

"Peek" = nächste Card leicht sichtbar am Rand → signalisiert Scrollbarkeit

## Animation

- Section-Entry: Cards sliden gestaffelt von rechts rein
- Hover: Card hebt sich leicht (`translateY(-4px)`), Shadow verstärkt sich
- Bild-Hover: Sanfter Zoom (1.02 scale)
- Karussell: Smooth scroll mit CSS `scroll-behavior: smooth`

## Scroll-Snap Implementation

```tsx
// Container
<div className="
  flex gap-6 overflow-x-auto snap-x snap-mandatory
  pb-4 -mx-4 px-4
  scrollbar-hide
  scroll-smooth
">
  {projects.map((project, index) => (
    <motion.div 
      key={project.id} 
      className="snap-center shrink-0 w-[85vw] md:w-[340px] lg:w-[400px]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <ProjectCard project={project} />
    </motion.div>
  ))}
</div>
```

## Scrollbar Hide Utility

Falls nicht vorhanden, zu globals.css hinzufügen:
```css
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

## Section ID

```tsx
<section id="use-cases" className="...">
```

Für Navigation/Anchor-Links.
