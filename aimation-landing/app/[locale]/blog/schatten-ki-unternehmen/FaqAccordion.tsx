import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Ist Schatten-KI wirklich so verbreitet?',
    answer: 'Ja. Studien zeigen, dass drei von vier Wissensarbeitern KI-Tools nutzen, oft ohne Wissen oder Freigabe ihrer IT-Abteilung. Das ist kein Randphänomen, sondern Alltag in deutschen Unternehmen.',
  },
  {
    question: 'Was ist der Unterschied zu Schatten-IT?',
    answer: 'Schatten-IT betraf Infrastruktur (jemand nutzt Dropbox statt Firmenserver). Schatten-KI betrifft die Verarbeitung von Unternehmensdaten und die Qualität von Entscheidungen. Das Risikoprofil ist grundlegend anders.',
  },
  {
    question: 'Drohen uns konkrete Strafen durch DSGVO-Verstöße?',
    answer: 'Ja. Wenn personenbezogene Daten in nicht genehmigte KI-Tools eingegeben werden, ist das ein Verstoß gegen die DSGVO. Nach Art. 83 Abs. 5 DSGVO drohen Bußgelder bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist. Dazu kommen Reputationsschäden.',
  },
  {
    question: 'Wie lange dauert es, eine KI-Richtlinie aufzusetzen?',
    answer: 'Eine erste, funktionierende Richtlinie lässt sich in 2 bis 4 Wochen erstellen. Sie braucht keine 50 Seiten, eine Seite mit klaren Regeln ist wirksamer. Wir helfen dabei.',
  },
  {
    question: 'Was kostet eine sichere KI-Lösung als Alternative?',
    answer: 'Das hängt vom Umfang ab. Ein Unternehmens-Account bei ChatGPT Business mit AVV kostet ab 20 US-Dollar pro Nutzer pro Monat bei Jahresabrechnung. Selbst gehostete Lösungen mit lokalen Modellen sind einmalig teurer im Aufbau, aber kostengünstiger im Betrieb und bieten maximalen Datenschutz.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
