import SharedFaqAccordion from '@/components/ui/FaqAccordion';

export const FAQ_ITEMS = [
  {
    question: 'Muss jedes Unternehmen auf Stufe 6?',
    answer: 'Nein. Nicht jedes Unternehmen muss auf Stufe 6. Viele KMUs erzielen den größten Nutzen zwischen Stufe 3 und 5. Das hängt von Ihrer Branche, Ihren Prozessen und Ihrem Budget ab. Wichtig ist, die eigene Stufe zu kennen und den nächsten sinnvollen Schritt zu machen.',
  },
  {
    question: 'Wie schnell kann man von Stufe 1 auf Stufe 3 kommen?',
    answer: 'Mit dem richtigen Fokus in 3 bis 6 Monaten. Stufe 1 zu 2 ist eine Frage von Schulung und ein paar Wochen Konfiguration. Stufe 2 zu 3 braucht technische Umsetzung: erste Automatisierungen mit n8n oder Make.com. Mit unserer Unterstützung sind erste Workflows in 2 bis 4 Wochen live.',
  },
  {
    question: 'Was kostet der Übergang zwischen den Stufen?',
    answer: 'Das ist sehr unterschiedlich. Stufe 1 zu 2 kostet vor allem Schulungszeit. Stufe 3 und 4 können mit 5.000 bis 20.000 Euro Investition realisiert werden, je nach Komplexität. Stufe 5 und 6 sind größere Projekte. In allen Fällen gilt: erst den ROI berechnen, dann entscheiden.',
  },
  {
    question: 'Können wir auf mehreren Stufen gleichzeitig sein?',
    answer: 'Ja, das ist häufig so. Ihre Marketing-Abteilung ist vielleicht auf Stufe 4, Ihre Produktion noch auf Stufe 1. Das ist normal. Das Ziel ist nicht, überall gleichzeitig auf Stufe 6 zu sein, sondern die richtigen Bereiche systematisch zu entwickeln.',
  },
  {
    question: 'Was ist der häufigste Fehler beim KI-Einstieg?',
    answer: 'Zu viel auf einmal wollen. Unternehmen, die versuchen, sofort auf Stufe 5 zu springen, scheitern oft an mangelndem Verständnis in der Belegschaft und unrealistischen Erwartungen. Der bessere Weg: Stufe 2 oder 3 als Einstieg, messen, lernen, dann skalieren.',
  },
];

export default function FaqAccordion() {
  return <SharedFaqAccordion items={FAQ_ITEMS} />;
}
