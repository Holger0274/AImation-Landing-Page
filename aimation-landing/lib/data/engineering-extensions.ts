import { ASSEMBLY_INSTRUCTIONS_VIDEO } from './assembly-instructions-video';
import { ASSEMBLY_VIDEO } from './assembly-video';

// Independent demonstrations. New disciplines can be added without extending
// the original mounting-plate / shaft workflow or claiming a shared workpiece.
export const ENGINEERING_EXTENSIONS = [
  {
    id: 'patent', slug: 'patent-zu-3d', number: '06', duration: '2:42', seconds: 162,
    kind: 'AI2CAD', uploadDate: '2026-11-01', audio: true,
    field: { de: 'Patentverständnis', en: 'Understanding patents' },
    de: {
      title: 'Ein Patent in 3D visualisieren', short: 'Patent → 3D-Modell',
      teaser: 'Eine Patentschrift wird zur räumlichen Baugruppe. Schnittansichten und eine Explosionsdarstellung machen den Aufbau sichtbar.',
      metaDescription: 'Patent in 3D visualisieren mit KI: AImation zeigt eine Baugruppe mit Drehknopf, Spule und Temperatursensor, Schnittansichten und veränderbaren Parametern.',
      description: 'Aus einer Patentschrift entsteht ein CAD-Modell mit Drehknopf, Spule und Temperatursensor. Das Video stellt eine Patentfigur dem räumlichen Modell gegenüber, zeigt die Sensorpositionen und zerlegt die Baugruppe in einer Explosionsdarstellung. Anschließend werden zwei Parameter geändert.',
      features: ['Patentfigur und 3D-Schnittansicht gegenüberstellen', 'Bauteile, Sensorpositionen und Zusammenbau sichtbar machen', 'Gehäusedurchmesser und Anzahl der Sternscheiben-Vorsprünge verändern'],
      context: 'Teil 6 ist ein eigenständiges Beispiel zum technischen Verständnis einer Patentschrift. Das Patentmodell gehört weder zur bisherigen Wellen-Demonstration noch zum CNC-Beispiel aus Teil 7.',
      check: 'Das CAD-Modell zeigt eine technische Interpretation der Patentschrift. Abgeleitete Maße, Annahmen und die Zuordnung der Bauteile müssen mit der Quelle abgeglichen werden. Eine fertige Konstruktion oder deren Erprobung ist damit nicht belegt.',
      poster: 'Patentfigur neben dem 3D-Schnittmodell einer Baugruppe mit Drehknopf, Spule und Temperatursensor',
    },
    en: {
      title: 'Visualise a patent in 3D', short: 'Patent → 3D model',
      teaser: 'A patent document becomes a spatial assembly. Section views and an exploded view reveal its structure.',
      metaDescription: 'Visualise a patent in 3D with AI: AImation demonstrates an assembly with a rotary knob, coil and temperature sensor, section views and editable parameters.',
      description: 'A patent document is used to create a CAD model with a rotary knob, coil and temperature sensor. The video compares a patent figure with the spatial model, shows sensor positions and separates the assembly in an exploded view. Two parameters are then changed.',
      features: ['Compare a patent figure with a 3D section view', 'Show components, sensor positions and assembly structure', 'Change housing diameter and the number of star-disc protrusions'],
      context: 'Part 6 is a standalone example of understanding a patent technically. Its model is separate from both the earlier shaft demonstration and the CNC example in part 7.',
      check: 'The CAD model is a technical interpretation of the patent document. Derived dimensions, assumptions and component mappings require comparison with the source. A finished or tested design is not established.',
      poster: 'Patent figure beside a 3D section model with rotary knob, coil and temperature sensor',
    },
  },
  {
    id: 'cnc', slug: 'cnc-drehprogramm', number: '07', duration: '2:22', seconds: 142,
    kind: 'AI2CAM', uploadDate: '2026-11-01', audio: true,
    field: { de: 'Fertigungsvorbereitung', en: 'Manufacturing preparation' },
    de: {
      title: 'Ein CNC-Drehprogramm vorbereiten', short: 'Bauteil → CNC-Programm',
      teaser: 'Vom 3D-Modell zu Aufspannungen, Bearbeitungsfolge und NC-Programmen. Die Simulation zeigt die geplante Bearbeitung.',
      metaDescription: 'CNC-Drehprogramm mit KI vorbereiten: Modell und Zeichnung, zwei Aufspannungen, Bearbeitungsfolge, Simulation und Rüstblatt im eigenständigen AImation-Video.',
      description: 'Ein 3D-Modell und eine Zeichnung bilden den Ausgangspunkt für die Fertigungsvorbereitung. Das Video zeigt die Wahl von Rohteil und Aufspannungen, die Bearbeitungsfolge und eine Simulation der Werkzeugbewegungen. Zum gezeigten Paket gehören zwei NC-Programme und ein Rüstblatt.',
      features: ['Rohteil, zwei Aufspannungen und Bearbeitungsreihenfolge planen', 'Werkzeugbewegungen und Materialabtrag in der Simulation ansehen', 'NC-Programme und Rüstblatt für die weitere Prüfung vorbereiten'],
      context: 'Teil 7 zeigt ein eigenständiges Fertigungsbeispiel. Das Bauteil wird hier neu eingeführt; es setzt weder das Patentmodell aus Teil 6 noch die Welle aus den bisherigen CAD-/FEM-Videos fort.',
      check: 'Gezeigt werden Programmvorbereitung und Simulation. Ein tatsächlich gefertigtes Bauteil oder ein freigegebener Maschinenlauf ist in diesem Video nicht dokumentiert. NC-Code, Steuerung, Werkzeuge und Aufspannung müssen vor einem realen Einsatz fachlich geprüft werden.',
      poster: 'Drehteil mit Rohteil und zwei gekennzeichneten Aufspannungen aus dem CNC-Demonstrationsvideo',
    },
    en: {
      title: 'Prepare a CNC turning program', short: 'Part → CNC program',
      teaser: 'From a 3D model to setups, machining sequence and NC programs. The simulation shows the planned machining operations.',
      metaDescription: 'Prepare a CNC turning program with AI: model and drawing, two setups, machining sequence, simulation and setup sheet in a standalone AImation video.',
      description: 'A 3D model and a drawing are the starting point for manufacturing preparation. The video shows stock and setup selection, the machining sequence and a simulation of tool movements. The demonstrated package includes two NC programs and a setup sheet.',
      features: ['Plan stock, two setups and the machining sequence', 'Inspect tool movements and material removal in simulation', 'Prepare NC programs and a setup sheet for further review'],
      context: 'Part 7 is a standalone manufacturing example. It introduces its own part, separate from the patent model in part 6 and the shaft in the earlier CAD/FEM videos.',
      check: 'The video documents program preparation and simulation. It does not document a physically manufactured part or an approved machine run. NC code, controller, tools and workholding require technical review before actual use.',
      poster: 'Turned part with stock and two labelled setups from the CNC demonstration video',
    },
  },
  ASSEMBLY_VIDEO,
  ASSEMBLY_INSTRUCTIONS_VIDEO,
] as const;
