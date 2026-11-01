export type ArticleKey = 'requirements' | 'knowledge' | 'changes';
export interface EngineeringArticle {
  key: ArticleKey; slug: string; title: string; shortTitle: string; tag: string; description: string;
  date?: string;
  lead: string; answer: string; visualTitle: string; visualIntro: string;
  sections: { id: string; title: string; paragraphs: { text: string; source?: string }[]; table?: { headers: string[]; rows: string[][] } }[];
  faqs: { question: string; answer: string }[]; sources: string[]; related: { label: string; href: string }[];
}
export const ARTICLE_DATE = '2026-10-31';
export const ARTICLE_SOURCES: Record<string, { label: string; url: string }> = {
  'autodesk-post': { label: 'Autodesk: Post process a manufacturing operation', url: 'https://help.autodesk.com/view/fusion360/ENU/?contextId=MFG-POST-PROCESS-OPERATIONS' },
  'eplan-checks': { label: 'EPLAN: Checking Projects', url: 'https://www.eplan.help/en-US/Infoportal/Content/Plattform/2027/Content/htm/msgmanagementgui_h_prueflauf.htm' },
  'aimation-cnc': { label: 'AImation: Ein CNC-Drehprogramm vorbereiten (Video)', url: 'https://www.aimation.de/ai2cad/cnc-drehprogramm' },
  'aimation-motor': { label: 'AImation: Vom Satz zum Schaltplan (Video)', url: 'https://www.aimation.de/ki-elektrik/schaltplan-motorabgang' },
  'aimation-kurzschluss': { label: 'AImation: Die Schaltung im Kurzschluss-Test (Video)', url: 'https://www.aimation.de/ki-elektrik/kurzschluss-wendeschuetz' },
  "nasa-requirements": {
    "label": "NASA: How to Write a Good Requirement",
    "url": "https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/"
  },
  "nasa-configuration": {
    "label": "NASA: Configuration Management",
    "url": "https://www.nasa.gov/reference/6-5-configuration-management/"
  },
  "microsoft-rag": {
    "label": "Microsoft Learn: Retrieval Augmented Generation",
    "url": "https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation"
  },
  "microsoft-access": {
    "label": "Microsoft Learn: Document-level access control",
    "url": "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview"
  }
};
export const ENGINEERING_ARTICLES: EngineeringArticle[] = [
  {
    "key": "requirements",
    "slug": "ki-lastenheft-anforderungen-pruefen",
    "title": "Lastenhefte mit KI prüfen: Aus unklaren Sätzen werden prüfbare Anforderungen",
    "shortTitle": "Lastenhefte mit KI prüfen",
    "tag": "Requirements Engineering",
    "description": "KI im Lastenheft-Prozess: Mehrdeutigkeiten, Widersprüche und fehlende Prüfkriterien finden. Mit interaktivem Beispiel und einem Vorschlag für Ihren Pilot.",
    "lead": "„Die Halterung muss hohe Temperaturen aushalten und schnell montierbar sein.“ Der Satz klingt nach einer Anforderung. Für Konstruktion und Versuch lässt er die entscheidenden Fragen offen.",
    "answer": "KI kann Anforderungen vorsortieren, unklare Begriffe markieren und Rückfragen vorbereiten. Grenzwerte, Lastfälle und Abnahmekriterien legt Ihr Fachteam mit dem Auftraggeber fest. Ein sprachlich sauberer Satz ist noch keine abgestimmte Anforderung.",
    "visualTitle": "Drei Sätze aus einem fiktiven Lastenheft",
    "visualIntro": "Wählen Sie einen Satz. Das Beispiel zeigt einen möglichen Prüfhinweis und die Frage, die vor einer Überarbeitung geklärt werden muss.",
    "sections": [
      {
        "id": "offene-fragen",
        "title": "Die offene Frage gehört in den Prüfbericht",
        "paragraphs": [
          {
            "text": "Im Beispiel LH-017 fehlen der Temperaturbereich, die Einwirkdauer und ein Kriterium für die Montagezeit. Wer den Satz direkt in eine konkrete Spezifikation umschreiben lässt, riskiert erfundene Zahlen. Aus „hohe Temperaturen“ darf nicht stillschweigend ein Wert werden, den niemand gefordert hat."
          },
          {
            "text": "Ein brauchbarer KI-Prüflauf hält deshalb den Originaltext fest. Daneben stehen die Fundstelle, die Art der Unklarheit und eine Rückfrage. Der Vorschlag bleibt mit der ursprünglichen Anforderungs-ID verbunden. So kann die Projektleitung später nachvollziehen, weshalb eine Formulierung geändert wurde."
          },
          {
            "text": "Die NASA nennt in ihrer Checkliste unter anderem Eindeutigkeit, Konsistenz, Prüfbarkeit und Rückverfolgbarkeit als Merkmale guter Anforderungen. Diese Kriterien bieten eine Grundlage für eine Prüfliste. Sie belegen keine bestimmte Trefferquote eines KI-Modells.",
            "source": "nasa-requirements"
          }
        ]
      },
      {
        "id": "pruefumfang",
        "title": "Drei Aufgaben für einen ersten Prüflauf",
        "paragraphs": [
          {
            "text": "Beginnen Sie mit einem begrenzten Ausschnitt, etwa den Montageanforderungen einer Baugruppe. Für einen ersten Versuch schlage ich 20 bis 30 Anforderungen vor, die Konstruktion und Versuch bereits fachlich bewertet haben. Diese Anzahl ist ein Arbeitsvorschlag für den Einstieg, kein allgemeiner Mindestumfang."
          },
          {
            "text": "Im ersten Durchlauf sucht die KI nach unbestimmten Ausdrücken. Im zweiten vergleicht sie zusammengehörige Anforderungen auf mögliche Widersprüche. Im dritten sammelt sie fehlende Angaben für einen Nachweis. Die Aufgaben bleiben getrennt, damit ein plausibler Formulierungsvorschlag keinen übersehenen Widerspruch verdeckt."
          }
        ],
        "table": {
          "headers": [
            "Prüfaufgabe",
            "Möglicher Hinweis",
            "Entscheidung des Teams"
          ],
          "rows": [
            [
              "Unklare Formulierung",
              "„Schnell montierbar“ enthält keine Zielzeit.",
              "Unter welchen Bedingungen wird die Montagezeit gemessen?"
            ],
            [
              "Möglicher Widerspruch",
              "Zwei Anforderungen nennen verschiedene zulässige Massen.",
              "Betreffen beide dieselbe Variante und denselben Stand?"
            ],
            [
              "Fehlender Nachweis",
              "Für eine geforderte Funktion fehlt ein Abnahmekriterium.",
              "Welcher Versuch oder welche Analyse liefert den Nachweis?"
            ]
          ]
        }
      },
      {
        "id": "kontext",
        "title": "Eine Anforderung braucht ihren Kontext",
        "paragraphs": [
          {
            "text": "Eine einzelne Tabellenzeile reicht häufig nicht. Begriffe werden in einem Glossar definiert, Einsatzbedingungen stehen in einem anderen Kapitel, und eine Einschränkung gilt vielleicht nur für eine bestimmte Variante. Geben Sie dem Prüflauf diesen Zusammenhang mit. Sonst markiert er Angaben als fehlend, die im Dokument bereits vorhanden sind."
          },
          {
            "text": "Das Eingabepaket sollte den freigegebenen Dokumentenstand, die relevanten Begriffsdefinitionen und die zugehörigen Anforderungen enthalten. Bei PDFs ist zusätzlich zu prüfen, ob Tabellen, Einheiten und Fußnoten korrekt ausgelesen wurden. Ein vertauschtes Spaltenpaar kann aus einer richtigen Vorgabe einen vermeintlichen Widerspruch machen."
          },
          {
            "text": "Lassen Sie jeden Hinweis an einer konkreten Fundstelle festmachen. „Im Lastenheft ist das unklar“ reicht für eine Bearbeitung nicht. „LH-017, Revision B, Abschnitt 3.2“ ist ein Punkt, den jemand übernehmen und schließen kann."
          }
        ]
      },
      {
        "id": "ausgabe",
        "title": "Das Ergebnis ist eine bearbeitbare Rückfragenliste",
        "paragraphs": [
          {
            "text": "Für den Versuch braucht es keinen neuen Dokumentenstandard. Eine Tabelle mit Anforderungs-ID, Originaltext, Fundstelle, Prüfhinweis, Rückfrage, Verantwortlichem und Bearbeitungsstatus genügt als Start. Ein vorgeschlagener neuer Text erhält ein eigenes Feld. Er überschreibt das Original nicht."
          },
          {
            "text": "Prüfen Sie zunächst einige Hinweise gemeinsam mit Konstruktion und Versuch. Ein Hinweis kann richtig sein und trotzdem wenig helfen, etwa wenn er nur eine längst bekannte Lücke wiederholt. Umgekehrt kann ein kurzer Verweis auf zwei widersprüchliche Variantenstände wichtiger sein als eine ausführliche sprachliche Überarbeitung."
          },
          {
            "text": "Fehlende Angaben bleiben ausdrücklich offen. Das Fachteam entscheidet, ob eine Frage an den Kunden geht, intern geklärt werden kann oder auf eine bereits freigegebene Vorgabe verweist. Die KI darf diese Zuständigkeit nicht aus einer vermuteten Plausibilität ableiten."
          }
        ]
      },
      {
        "id": "pilot",
        "title": "So prüfen Sie, ob sich der Einsatz lohnt",
        "paragraphs": [
          {
            "text": "Legen Sie vor dem Versuch fest, welche Arten von Fehlern gefunden werden sollen. Nutzen Sie dafür einen fachlich geprüften Vergleichssatz. Halten Sie einen zweiten Ausschnitt zurück, den Sie nicht zur Anpassung der Anweisung verwenden. Erst damit sehen Sie, ob der Ablauf auch bei anderen Anforderungen trägt."
          },
          {
            "text": "Erfassen Sie gefundene relevante Lücken, übersehene bekannte Lücken und Fehlalarme getrennt. Messen Sie außerdem die Zeit für das Lesen, Prüfen und Nacharbeiten der Vorschläge. Die reine Laufzeit des Modells sagt wenig darüber aus, ob das Team schneller fertig wird."
          },
          {
            "text": "Besonders aufschlussreich ist ein sauber formulierter Satz ohne Fehler. Er sollte nicht nur deshalb umgeschrieben werden, weil ein Modell noch eine elegantere Formulierung erzeugen kann. Für mich ist das ein wichtiges Abnahmekriterium: Das Werkzeug muss eine gute Anforderung auch in Ruhe lassen."
          }
        ]
      },
      {
        "id": "einstieg",
        "title": "Bringen Sie einen kleinen, freigegebenen Ausschnitt mit",
        "paragraphs": [
          {
            "text": "Für die erste gemeinsame Bewertung reichen ein anonymisierter Abschnitt, die verwendeten Anforderungs-IDs und einige bekannte Rückfragen aus Ihrem Review. Klären Sie zuvor, welche Unterlagen für den gewählten Verarbeitungsweg freigegeben sind. Kundenspezifische Vorgaben und Betriebsgeheimnisse gehören nur in eine dafür freigegebene Umgebung."
          },
          {
            "text": "In der KI-Landkarte lässt sich prüfen, ob der Engpass beim Formulieren, beim Abgleich von Dokumentenständen oder bei der Rückfragenbearbeitung liegt. Daraus folgt der Umfang eines möglichen Piloten. Wenn Ihr Team zunächst den Umgang mit solchen Prüfanweisungen lernen soll, lässt sich das Thema auch als Inhouse-Schulung bearbeiten."
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Kann KI ein Lastenheft fachlich freigeben?",
        "answer": "Die fachliche Freigabe bleibt bei den zuständigen Personen. KI kann Prüfhinweise und Formulierungsvorschläge vorbereiten. Einsatzbedingungen, Grenzwerte und Nachweise müssen mit dem Auftraggeber und den verantwortlichen Fachbereichen abgestimmt werden."
      },
      {
        "question": "Muss dafür sofort ein neues Requirements-Tool eingeführt werden?",
        "answer": "Für einen begrenzten Versuch kann ein kontrollierter Export genügen. Anforderungs-IDs, Dokumentenstände und Fundstellen müssen erhalten bleiben. Eine spätere Rückführung in Ihr Requirements-System wird als eigener Integrationsschritt geplant."
      },
      {
        "question": "Wie vermeiden wir erfundene technische Werte?",
        "answer": "Die Prüfanweisung verlangt Rückfragen für fehlende Angaben. Ein vorgeschlagener Wert darf nicht als vorhandene Anforderung ausgegeben werden. Fachliche Prüfung und ein Vergleich mit bekannten Fehlerfällen bleiben notwendig."
      }
    ],
    "sources": [
      "nasa-requirements"
    ],
    "related": [
      {
        "label": "Mehrdeutige Anforderungen interaktiv durchspielen",
        "href": "/ki-anwendungsfaelle#use-case-02-fruehe-phase--anforderungen--mehrdeutigkeits-check"
      },
      {
        "label": "Schulungen für technische Teams",
        "href": "/ki-schulungen-mittelstand"
      },
      {
        "label": "Workshop KI-Landkarte",
        "href": "/zusammenarbeit#ki-landkarte"
      }
    ]
  },
  {
    "key": "knowledge",
    "slug": "rag-engineering-wissen-versionen-quellen",
    "title": "RAG für Engineering-Dokumente: Die Antwort braucht Quelle, Version und Zugriffsrecht",
    "shortTitle": "Entwicklungswissen mit RAG finden",
    "tag": "Engineering-Wissen",
    "description": "RAG für technische Dokumentation: Wie Quellen, Dokumentenstände und Berechtigungen eine KI-Antwort bestimmen. Mit interaktivem Beispiel aus der Entwicklung.",
    "lead": "Ein Konstrukteur fragt, warum der Werkstoff einer Halterung geändert wurde. Der Chatbot antwortet flüssig. Sein Beleg ist jedoch ein alter Versuchsbericht für die Vorgängervariante. Die Antwort klingt passend und führt trotzdem in die falsche Richtung.",
    "answer": "Retrieval Augmented Generation, kurz RAG, verbindet die Suche in Dokumenten mit einem Sprachmodell. Für Engineering-Fragen muss der Ablauf zusätzlich den passenden Bauteil- und Dokumentenstand sowie die Zugriffsrechte berücksichtigen. Eine Quellenangabe allein bestätigt noch keine fachlich richtige Antwort.",
    "visualTitle": "Eine Frage, drei unterschiedliche Quellenlagen",
    "visualIntro": "Wechseln Sie den Kontext zur fiktiven Halterung H-204. Beobachten Sie, wann eine belegte Antwort möglich ist und wann eine Rückfrage offenbleibt.",
    "sections": [
      {
        "id": "ablauf",
        "title": "Was bei einer RAG-Anfrage passiert",
        "paragraphs": [
          {
            "text": "Bei RAG sucht eine Anwendung zunächst nach passenden Inhalten. Sie übergibt gefundene Ausschnitte zusammen mit der Frage an ein Sprachmodell. Daraus entsteht ein Antwortentwurf, der auf die Fundstellen verweisen kann. Microsoft beschreibt diesen Ablauf als Abrufen, Ergänzen der Eingabe und Generieren der Antwort.",
            "source": "microsoft-rag"
          },
          {
            "text": "Die Suchkomponente und das Sprachmodell haben damit unterschiedliche Aufgaben. Eine passende Formulierung des Modells hilft wenig, wenn die Suche das falsche Dokument geliefert hat. Deshalb gehört die Auswahl der Quellen ebenso auf den Prüfstand wie der fertige Antworttext."
          },
          {
            "text": "Für die Halterung H-204 braucht die Anfrage möglicherweise eine Zeichnung, einen Prüfbericht und die dokumentierte Änderungsentscheidung. Das Modell soll die Begründung aus diesen Unterlagen verständlich zusammenführen. Eine fehlende Entscheidung muss es als Lücke behandeln."
          }
        ]
      },
      {
        "id": "dokumentenstand",
        "title": "Ein neueres Datum ist noch kein gültiger Stand",
        "paragraphs": [
          {
            "text": "In einem Entwicklungsordner können ein freigegebener Bericht, ein aktueller Entwurf und eine ältere, weiterhin gültige Vorgabe nebeneinanderliegen. Wer nur nach dem Änderungsdatum sortiert, verwechselt leicht Aktualität mit Freigabe. Im Beispiel gehört deshalb die Revision C zur Frage, nicht pauschal die zuletzt gespeicherte Datei."
          },
          {
            "text": "Ich würde für den ersten Anwendungsfall wenige Merkmale verbindlich pflegen: Dokumenten-ID, Revision, Status, Bauteil oder Baugruppe, Variante und Gültigkeitsbereich. Welche Felder tatsächlich nötig sind, hängt vom Ablauf ab. Ein Servicefall an einem ausgelieferten Produkt kann einen anderen Stand benötigen als die laufende Entwicklung."
          },
          {
            "text": "Die Software kann nach vorhandenen Merkmalen filtern. Sie kann deren fachliche Richtigkeit aber nicht aus einem Dateinamen garantieren. Wenn „final_neu_2.pdf“ die einzige Information über den Stand ist, beginnt die Arbeit bei der Dokumentenführung."
          }
        ]
      },
      {
        "id": "rechte",
        "title": "Berechtigungen gehören vor die Antwort",
        "paragraphs": [
          {
            "text": "Microsoft dokumentiert für Azure AI Search verschiedene Verfahren zur Zugriffskontrolle auf Dokumentebene, darunter Sicherheitsfilter. Der konkrete Ansatz hängt von Datenquelle und Identitätsmodell ab. Eine bestehende Berechtigung in der Ablage muss im Such- und Antwortweg wirksam umgesetzt werden.",
            "source": "microsoft-access"
          },
          {
            "text": "Für Ihr Projekt bedeutet das: Ein Nutzer darf über die KI keine Inhalte erhalten, die er in der freigegebenen Quelle nicht lesen darf. Auch Titel, Ausschnitte und erzeugte Zusammenfassungen können Informationen preisgeben. Berechtigungen erst nach dem Schreiben der Antwort zu prüfen, ist für diesen Ablauf zu spät."
          },
          {
            "text": "Testen Sie den Zugriff mit zwei Rollen, die bewusst unterschiedliche Rechte besitzen. Entziehen Sie anschließend einem Testkonto eine Berechtigung und prüfen Sie den nächsten Abruf. Vereinbaren Sie außerdem, wie Änderungen und gelöschte Dokumente in Suchindex, Zwischenspeicher und Antwortprotokollen behandelt werden."
          }
        ]
      },
      {
        "id": "quellen",
        "title": "Eine Fundstelle muss die Aussage wirklich tragen",
        "paragraphs": [
          {
            "text": "Ein Link zum richtigen Dokument ist ein Anfang. Für die Prüfung sollte auch die relevante Seite, Tabellenzeile oder der Abschnitt erreichbar sein. Im Beispiel lautet die Frage nach der Änderungsbegründung. Ein Bericht, der lediglich einen Werkstoff nennt, belegt diese Begründung noch nicht."
          },
          {
            "text": "Trennen Sie in der Ausgabe belegte Aussagen, mögliche Zusammenhänge und offene Punkte. Wenn zwei freigegebene Unterlagen widersprüchlich sind, sollte der Entwurf beide Fundstellen nennen und den Konflikt sichtbar lassen. Das Team braucht an dieser Stelle eine Klärung, keine sprachliche Glättung."
          }
        ],
        "table": {
          "headers": [
            "Prüfung",
            "Brauchbare Antwort",
            "Unzureichende Antwort"
          ],
          "rows": [
            [
              "Quelle",
              "Dokumenten-ID und konkrete Fundstelle",
              "Link auf einen allgemeinen Projektordner"
            ],
            [
              "Stand",
              "Passende Revision und Variante",
              "Nur das jüngste Dateidatum"
            ],
            [
              "Aussage",
              "Begründung ist im Beleg enthalten",
              "Beleg erwähnt lediglich dasselbe Bauteil"
            ],
            [
              "Lücke",
              "Offene Frage wird benannt",
              "Plausible Ursache wird hinzuerfunden"
            ]
          ]
        }
      },
      {
        "id": "testfragen",
        "title": "Bauen Sie einen kleinen Satz echter Prüffragen",
        "paragraphs": [
          {
            "text": "Sammeln Sie für einen ersten Versuch beispielsweise 15 Fragen, die im Team wiederkehren. Diese Zahl ist ein Vorschlag für einen überschaubaren Start. Die Fachpersonen halten zu jeder Frage fest, welche Quelle die Antwort trägt und welcher Dokumentenstand gilt. Wählen Sie auch Fragen aus, die sich aus den vorhandenen Unterlagen nicht beantworten lassen."
          },
          {
            "text": "Nehmen Sie mindestens einen Fall mit einer älteren Revision, einen Widerspruch zwischen Unterlagen und einen gesperrten Beleg auf. Lassen Sie die Fachpersonen erst die gefundenen Ausschnitte bewerten und danach den Antwortentwurf. So erkennen Sie, ob der Fehler in der Suche, im Kontext oder in der Formulierung entsteht."
          },
          {
            "text": "Vergleichen Sie die gesamte Bearbeitungszeit bis zur geprüften Antwort mit dem bisherigen Suchweg. Erfassen Sie falsche Quellen, unbelegte Aussagen und übersehene Einschränkungen einzeln. Eine hohe Anzahl beantworteter Fragen ist kein Erfolg, wenn gerade die kritischen Antworten nicht belastbar sind."
          }
        ]
      },
      {
        "id": "start",
        "title": "Starten Sie bei einer wiederkehrenden Entscheidung",
        "paragraphs": [
          {
            "text": "Ein begrenzter Dokumentenbestand zu einer Baugruppe lässt sich besser beurteilen als ein sofortiger Zugriff auf die gesamte Unternehmensablage. Wählen Sie eine Frage, für die heute mehrere Personen oder Systeme benötigt werden. Die zuständige Fachperson sollte die erwartete Antwort und ihre Belege kennen."
          },
          {
            "text": "AImation zeigt auf der Seite zur Wissenssicherung einen internen Prototyp mit eigenen Unterlagen. Unternehmensanbindung, Rechteprüfung und Datenhistorie werden für einen Pilot separat abgestimmt. Daraus lässt sich kein fertiger Zugriff auf Ihre Dokumentenlandschaft ableiten."
          },
          {
            "text": "Bringen Sie zum Erstgespräch eine typische Suchfrage und eine Übersicht der beteiligten Ablagen mit. Dann können wir prüfen, ob zuerst eine Suchverbindung, eine bessere Kennzeichnung der Dokumente oder ein anderer Ablauf benötigt wird."
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Verhindert RAG falsche KI-Antworten vollständig?",
        "answer": "Nein. Eine Suche kann unpassende oder veraltete Ausschnitte liefern, und das Sprachmodell kann daraus eine falsche Aussage ableiten. Quellenprüfung, passende Dokumentenstände und Tests mit unbeantwortbaren Fragen bleiben nötig."
      },
      {
        "question": "Werden unsere Dokumente durch RAG automatisch zum Modelltraining verwendet?",
        "answer": "RAG beschreibt zunächst das Abrufen von Inhalten und ihre Übergabe als Kontext. Ob ein Anbieter Eingaben speichert oder anderweitig verwendet, hängt vom eingesetzten Dienst, dessen Einstellungen und den vereinbarten Bedingungen ab. Das muss vor der Nutzung Ihrer Unterlagen geklärt werden."
      },
      {
        "question": "Brauchen wir dafür bereits einen Knowledge Graph?",
        "answer": "Für einen ersten Such- und Antwortablauf ist das keine Voraussetzung. Ein Knowledge Graph kann sinnvoll sein, wenn Beziehungen zwischen Anforderungen, Bauteilen, Varianten und Nachweisen gezielt abgefragt werden sollen. Ob das hilft, entscheidet der konkrete Anwendungsfall."
      }
    ],
    "sources": [
      "microsoft-rag",
      "microsoft-access"
    ],
    "related": [
      {
        "label": "Wissenssicherung: Ablauf und Prototyp",
        "href": "/use-cases/knowledge-graph-management"
      },
      {
        "label": "Gemeinsame Datenbasis für KI-Anwendungen",
        "href": "/ki-betriebssystem"
      },
      {
        "label": "Den Workshop KI-Landkarte kennenlernen",
        "href": "/zusammenarbeit#ki-landkarte"
      }
    ]
  },
  {
    "key": "changes",
    "slug": "ki-aenderungsmanagement-produktentwicklung",
    "title": "KI im Änderungsmanagement: Welche Folgen hat diese Bauteiländerung?",
    "shortTitle": "Folgen technischer Änderungen prüfen",
    "tag": "Änderungsmanagement",
    "description": "KI im technischen Änderungsmanagement: Beziehungen zwischen Zeichnung, Stückliste und Prüfbericht nachvollziehen. Mit interaktiver Auswirkungsanalyse als Beispiel.",
    "lead": "Der Bohrungsabstand einer Halterung soll geändert werden. Im CAD ist das schnell eingetragen. Ob die Gegenplatte noch passt, die Prüflehre angepasst werden muss und der vorhandene Nachweis noch gilt, steht in anderen Unterlagen.",
    "answer": "KI kann Änderungsanträge strukturieren, relevante Unterlagen suchen und mögliche Auswirkungen als Prüfliste vorbereiten. Verlässliche Beziehungen und Versionsstände müssen aus den vorhandenen Systemen kommen. Die Fachbereiche bewerten die Folgen und geben die Änderung frei.",
    "visualTitle": "Eine Änderung und ihre möglichen Auswirkungen",
    "visualIntro": "Wählen Sie einen fiktiven Änderungsantrag für H-204. Die Darstellung trennt vorhandene Dokumentbeziehungen von fachlich zu prüfenden Folgen.",
    "sections": [
      {
        "id": "ausgangspunkt",
        "title": "Der Ausgangsstand muss feststehen",
        "paragraphs": [
          {
            "text": "Unser fiktiver Änderungsantrag ÄA-042 betrifft die Halterung H-204 in Revision C. Der Bohrungsabstand soll von 80 auf 84 Millimeter steigen. Diese Zahlen dienen ausschließlich dem Ablaufbeispiel. Sie sind keine Auslegungsvorgabe für ein reales Bauteil."
          },
          {
            "text": "Vor jeder Auswirkungsanalyse muss klar sein, welcher Produktstand betroffen ist. Geht es um eine kommende Variante, eine bereits freigegebene Baugruppe oder ausgelieferte Produkte? Eine Änderung kann für einen Stand zulässig sein und für einen anderen zusätzliche Prüfungen verlangen."
          },
          {
            "text": "Die NASA beschreibt Konfigurationsmanagement als einen Ablauf, der Produktmerkmale und Dokumentation konsistent hält. Änderungen beziehen sich auf festgelegte Ausgangsstände, werden bewertet, genehmigt und nach der Umsetzung überprüft. Diese Grundlogik lässt sich als Orientierung für den hier vorgeschlagenen Ablauf nutzen.",
            "source": "nasa-configuration"
          }
        ]
      },
      {
        "id": "beziehungen",
        "title": "Beziehungen aus Systemen nutzen, Vermutungen kennzeichnen",
        "paragraphs": [
          {
            "text": "Eine Stückliste kann eindeutig zeigen, in welcher Baugruppe die Halterung verwendet wird. Ein Prüfbericht kann über eine Bauteilnummer und Revision zugeordnet sein. Solche vorhandenen Beziehungen sind eine andere Grundlage als die Vermutung eines Sprachmodells, dass eine bestimmte Lehre betroffen sein könnte."
          },
          {
            "text": "Lassen Sie die Anwendung deshalb ausweisen, woher eine Verbindung stammt. „In Stückliste B-10 enthalten“ und „Montagelehre möglicherweise betroffen“ erhalten unterschiedliche Kennzeichnungen. Die erste Aussage verweist auf einen Datensatz. Die zweite ist eine Aufgabe für eine fachliche Prüfung."
          },
          {
            "text": "Ein Sprachmodell kann Begriffe in unstrukturierten Änderungsanträgen erkennen und Suchbegriffe vorschlagen. Es sollte aber keine fehlende Verbindung im Produktdatenbestand als gesicherte Tatsache darstellen. Fehlende Beziehungen sind ein Ergebnis der Analyse und gehören in die Rückfragenliste."
          }
        ]
      },
      {
        "id": "rollen",
        "title": "Regeln, KI und Fachprüfung übernehmen verschiedene Aufgaben",
        "paragraphs": [
          {
            "text": "Für einen Versionsvergleich oder die Prüfung einer vorhandenen Stücklistenbeziehung braucht es nicht automatisch ein Sprachmodell. Solche Aufgaben lassen sich häufig anhand klarer Daten und Regeln bearbeiten. Das erleichtert die Wiederholung und die Prüfung des Ergebnisses."
          },
          {
            "text": "KI ist dort interessant, wo eine technische Begründung aus Texten strukturiert oder ein Hinweis für verschiedene Fachbereiche verständlich aufbereitet werden soll. Ein Entwurf kann etwa zusammenführen, welche Dokumente gefunden wurden, weshalb sie relevant erscheinen und welche Angaben fehlen."
          }
        ],
        "table": {
          "headers": [
            "Aufgabe",
            "Geeigneter Ansatz",
            "Erwartetes Ergebnis"
          ],
          "rows": [
            [
              "Revision und Verwendung ermitteln",
              "Abfrage von PDM/PLM oder kontrolliertem Export",
              "Nachvollziehbare Beziehungen mit Datenstand"
            ],
            [
              "Freitext des Antrags strukturieren",
              "KI mit vorgegebenem Ausgabeschema",
              "Änderungsobjekt, Begründung und offene Angaben"
            ],
            [
              "Mögliche Folgen formulieren",
              "Regeln und KI-Vorschläge getrennt ausgeben",
              "Prüfliste mit Herkunft jedes Hinweises"
            ],
            [
              "Nachweis und Freigabe bewerten",
              "Verantwortliche Fachbereiche",
              "Dokumentierte Entscheidung mit Auflagen"
            ]
          ]
        }
      },
      {
        "id": "pruefpaket",
        "title": "Aus dem Antrag wird ein prüfbares Paket",
        "paragraphs": [
          {
            "text": "Das Paket zu ÄA-042 enthält den Originalantrag, den ermittelten Ausgangsstand, die gefundenen Beziehungen und die offenen Prüfaufgaben. Für jede Aufgabe werden Fachbereich, Beleg und Status festgehalten. Ein leerer Status bedeutet offen; er darf nicht als Zustimmung ausgewertet werden."
          },
          {
            "text": "Bei der geänderten Bohrung könnten Konstruktion und Montage zunächst die Schnittstelle zur Gegenplatte prüfen. Die Prüfabteilung bewertet, ob der bisherige Nachweis zur geänderten Geometrie passt. Ob diese Aufgaben im realen Fall vollständig sind, kann nur das zuständige Team beurteilen."
          },
          {
            "text": "Der Entwurf sollte auch zeigen, welche Unterlagen nicht gefunden wurden. Wenn für eine Variante die aktuelle Zeichnung fehlt, ist eine vollständige Auswirkungsbewertung noch nicht möglich. Ein glatt formulierter Bericht darf diese Lücke nicht verdecken."
          }
        ]
      },
      {
        "id": "pilot",
        "title": "Ein abgeschlossener Änderungsfall eignet sich als Vergleich",
        "paragraphs": [
          {
            "text": "Wählen Sie für den ersten Versuch einen bereits abgeschlossenen Fall mit nachvollziehbarer Entscheidungshistorie. Stellen Sie dem Werkzeug nur die Informationen bereit, die zum damaligen Prüfzeitpunkt vorlagen. Die spätere Entscheidung dient der Fachgruppe als Vergleich und darf nicht versehentlich in die Eingabe gelangen."
          },
          {
            "text": "Vergleichen Sie anschließend, welche betroffenen Unterlagen und Aufgaben der Ablauf gefunden hat. Notieren Sie übersehene Abhängigkeiten, unnötige Prüfaufgaben und unklare Begründungen. Messen Sie die Zeit bis zu einem fachlich geprüften Paket, einschließlich der Korrekturen."
          },
          {
            "text": "Wiederholen Sie den Versuch mit einem Fall, in dem eine wichtige Beziehung im Datenbestand fehlt. Das Werkzeug sollte diese Unsicherheit anzeigen. Wenn es eine lückenhafte Datenlage als vollständige Analyse präsentiert, würde ich den Ablauf so nicht in eine Freigaberunde geben."
          }
        ]
      },
      {
        "id": "betrieb",
        "title": "Eine Entscheidung muss später nachvollziehbar bleiben",
        "paragraphs": [
          {
            "text": "Zur freigegebenen Änderung gehören die verwendeten Dokumentenstände, die bewerteten Hinweise und die Entscheidung der zuständigen Personen. Halten Sie bei KI-gestützten Entwürfen zusätzlich fest, welche Eingaben und welche Anweisung verwendet wurden. Der notwendige Umfang dieser Historie wird mit Ihrem Prozess abgestimmt."
          },
          {
            "text": "Nach der Freigabe folgt die Umsetzung in den führenden Systemen und die Kontrolle des geänderten Stands. Eine automatisch erzeugte Prüfliste ändert noch keine Zeichnung und keine Stückliste. Schreibzugriffe, Rollen und Rückmeldungen sind eigene Integrationsaufgaben."
          },
          {
            "text": "Für ein Erstgespräch helfen ein anonymisierter Änderungsantrag und eine Skizze Ihres heutigen Freigabewegs. Damit lässt sich prüfen, ob Ihr Team zuerst Unterstützung bei der Dokumentensuche, bei der Vorprüfung oder beim Zusammenstellen des Entscheidungspakets braucht."
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Kann KI automatisch entscheiden, ob ein Prüfbericht weiter gilt?",
        "answer": "Sie kann relevante Angaben zusammenstellen und mögliche Konflikte markieren. Ob ein Nachweis die geänderte Ausführung abdeckt, muss die verantwortliche Fachabteilung bewerten. Das Beispiel auf dieser Seite trifft keine technische Freigabeentscheidung."
      },
      {
        "question": "Brauchen wir zuerst eine vollständige PLM-Anbindung?",
        "answer": "Für einen begrenzten Versuch kann ein kontrollierter Export ausreichen, wenn Beziehungen, Revisionen und Herkunft nachvollziehbar bleiben. Für den laufenden Betrieb müssen Aktualisierung, Rechte und die Rückführung von Ergebnissen gesondert geplant werden."
      },
      {
        "question": "Ist die interaktive Darstellung bereits eine AImation-Anwendung?",
        "answer": "Sie ist ein redaktionelles Ablaufbeispiel mit fiktiven Daten und fest hinterlegten Regeln. Sie zeigt das Prinzip einer Prüfliste. Eine produktive Systemanbindung oder automatische Auswirkungsanalyse wird damit nicht vorgeführt."
      }
    ],
    "sources": [
      "nasa-configuration"
    ],
    "related": [
      {
        "label": "CAD-Konstruktion prüfen: eigene Video-Demo",
        "href": "/ai2cad/konstruktion-pruefen"
      },
      {
        "label": "VariantHub: Varianten und Regeln",
        "href": "/use-cases/variantenmanagement"
      },
      {
        "label": "Ablauf eines gemeinsamen Piloten",
        "href": "/zusammenarbeit#prozess"
      }
    ]
  }
];
export function articleReadingMinutes(article: Pick<EngineeringArticle, 'lead' | 'answer' | 'sections' | 'faqs'>) {
  const words = [article.lead, article.answer, ...article.sections.flatMap(s => [s.title, ...s.paragraphs.map(p => p.text), ...(s.table?.rows.flat() ?? [])]), ...article.faqs.flatMap(f => [f.question, f.answer])].join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
}
