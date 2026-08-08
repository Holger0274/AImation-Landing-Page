---
type: todo
campaign: aimation-website-relaunch
spec: 04-proof
---

# TODO: Assets für Spec 04 (Proof, Build in Public)

Diese drei Screencasts fehlen noch im Code. Bis sie geliefert sind, zeigen die Demo-Kacheln auf der Startseite (Sektion "Zuerst selbst gebaut") und auf den drei Use-Case-Detailseiten einen neutralen Platzhalter mit Hinweistext. Kein Fake-Screenshot wurde generiert.

## 1. Wissens-Graph

- **Inhalt**: Screencast, 60–120 Sek. Frage an den Wissens-Graphen stellen, Antwort mit Quellenangabe zeigen.
- **Titel im Code**: „Wissens-Graph: Frage rein, Antwort mit Quelle raus"
- **Eingebaut in**: Startseite (`components/sections/SelfBuilt.tsx`), `/use-cases/knowledge-graph-management`
- **Format**: MP4 oder WebM, Breitbild (16:9)

## 2. Anfragen-Agent

- **Inhalt**: Screencast. Eingehende technische Anfrage wird klassifiziert, Kontext gesammelt, Antwortentwurf erstellt.
- **Titel im Code**: „Anfragen-Agent: vom Posteingang zum Antwortentwurf"
- **Eingebaut in**: Startseite (`components/sections/SelfBuilt.tsx`), `/use-cases/email-klassifizierung`
- **Format**: MP4 oder WebM, Breitbild (16:9)

## 3. Patentrecherche

- **Inhalt**: Screencast oder Screenshot-Serie. Strukturierter Ergebnisbericht der Patentrecherche.
- **Titel im Code**: „Patentrecherche: strukturierter Bericht statt Trefferliste"
- **Eingebaut in**: Startseite (`components/sections/SelfBuilt.tsx`), `/use-cases/patentrecherche-ki`
- **Format**: MP4/WebM oder eine Serie von PNG/JPG-Screenshots

## Einbau nach Lieferung

In `components/ui/DemoTile.tsx` wird das Asset über die Props `videoSrc` (Video) oder `imageSrc` (Bild) eingebunden. Sobald eine Datei unter `public/videos/` bzw. `public/images/` liegt, den jeweiligen `<DemoTile ... />`-Aufruf in `components/sections/SelfBuilt.tsx` und in der jeweiligen Use-Case-Detailseite um die passende Prop ergänzen.
