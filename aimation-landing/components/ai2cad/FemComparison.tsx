import styles from './ai2cad.module.css';

/** Values supplied with the demonstration, not independently reproduced results. */
export default function FemComparison({ en }: { en: boolean }) {
  const rows = en ? [
    ['Locating bearing reaction, magnitude', '3,464 N', '3,463.7 N'],
    ['Floating bearing reaction, magnitude', '4,964 N', '4,963.6 N'],
    ['Deflection at the hub end', '0.22–0.23 mm', '0.251 mm'],
    ['Slope at the floating bearing', '1.9 arcmin', '2.5 arcmin'],
    ['F1 relief: local tensile stress / σ₁', '230–245 MPa', '268.2 MPa'],
  ] : [
    ['Lagerkraft Festlager, Betrag', '3.464 N', '3.463,7 N'],
    ['Lagerkraft Loslager, Betrag', '4.964 N', '4.963,6 N'],
    ['Durchbiegung am Nabenende', '0,22–0,23 mm', '0,251 mm'],
    ['Neigung im Loslager', '1,9 Winkelminuten', '2,5 Winkelminuten'],
    ['Freistich F1: lokale Zugspannung / σ₁', '230–245 MPa', '268,2 MPa'],
  ];
  return <section id="ai2cae" className={styles.femSection} aria-labelledby="fem-heading">
    <p className={styles.eyebrow}>AI2CAE · {en ? 'Chapter 05' : 'Kapitel 05'}</p>
    <h2 id="fem-heading">{en ? 'The model is built. Now comes the ' : 'Das Modell steht. Jetzt folgt die '}<span className="highlight">{en ? 'calculation.' : 'Berechnung.'}</span></h2>
    <p className={styles.femIntro}>{en ? 'A 1,500 N load acts on the shaft hub. The LLM coordinates the analysis through a tool interface; the CAE system performs the numerical calculation. The demonstration follows the result through to a documented comparison with a hand calculation.' : '1.500 N wirken auf die Nabe der Welle. Das LLM steuert den Berechnungsablauf über eine Werkzeugschnittstelle; das CAE-System rechnet numerisch. Die Demonstration reicht bis zum dokumentierten Vergleich mit der Handrechnung.'}</p>
    <ol className={styles.femSteps}>
      {(en ? [
        ['Set up the model', 'Define the material, load and locating and floating bearing constraints. Check the assumptions before solving.'],
        ['Refine the mesh', 'Compare r/5, r/10 and r/20. Observe how deformation and local stresses change.'],
        ['Cross-check the results', 'Compare reactions and bending moments with equilibrium. Assess differences in deformation and notch stresses.'],
        ['Document the assessment', 'Record results, assumptions and unresolved checks in the report. Engineering approval remains a separate step.'],
      ] : [
        ['Rechenmodell aufbauen', 'Werkstoff, Last und Randbedingungen an Fest- und Loslager festlegen. Die Annahmen vor der Rechnung prüfen.'],
        ['Netz verfeinern', 'r/5, r/10 und r/20 vergleichen. Beobachten, wie sich Verformung und lokale Spannungen verändern.'],
        ['Gegenprobe rechnen', 'Lagerkräfte und Biegemomente mit dem Gleichgewicht abgleichen. Unterschiede bei Verformung und Kerbspannungen bewerten.'],
        ['Bewertung dokumentieren', 'Ergebnisse, Annahmen und offene Prüfungen im Bericht festhalten. Die fachliche Freigabe bleibt ein eigener Schritt.'],
      ]).map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}
    </ol>
    <div className={styles.femTableWrap} role="region" aria-label={en ? 'Hand calculation and FEM comparison' : 'Vergleich Handrechnung und FEM'} tabIndex={0}>
      <table className={styles.femTable}>
        <caption>{en ? 'Selected results from the supplied demonstration calculation. FE values use the finest mesh shown, r/20.' : 'Ausgewählte Ergebnisse der bereitgestellten Demonstrationsrechnung. FE-Werte aus dem feinsten gezeigten Netz r/20.'}</caption>
        <thead><tr><th scope="col">{en ? 'Quantity' : 'Größe'}</th><th scope="col">{en ? 'Hand calculation' : 'Handrechnung'}</th><th scope="col">FEM</th></tr></thead>
        <tbody>{rows.map(([label, hand, fe]) => <tr key={label}><th scope="row">{label}</th><td>{hand}</td><td>{fe}</td></tr>)}</tbody>
      </table>
    </div>
    <div className={styles.femInterpretation}>
      <div><h3>{en ? 'Where the methods agree' : 'Wo die Rechnungen übereinstimmen'}</h3><p>{en ? 'The bearing reactions closely match equilibrium. The bending moments also agree in the supplied comparison. This checks the global load balance; it does not establish every material or support assumption.' : 'Die Lagerkräfte stimmen nahezu mit dem Gleichgewicht überein. Auch die Biegemomente passen im gelieferten Vergleich zusammen. Das prüft die globale Lastbilanz, bestätigt aber nicht jede Werkstoff- oder Lagerannahme.'}</p></div>
      <div><h3>{en ? 'Where engineering judgment matters' : 'Wo die fachliche Bewertung beginnt'}</h3><p>{en ? 'At relief F1, the FE principal stress exceeds the estimate based on nominal bending stress and a stress concentration factor. Deflection and bearing slope differ as well. The supplied assessment discusses support idealisation, notch geometry and proximity to the bearing as possible influences.' : 'Am Freistich F1 liegt die FE-Hauptspannung über der Abschätzung aus Nennspannung und Formzahl. Auch Durchbiegung und Lagerneigung weichen ab. Die mitgelieferte Auswertung diskutiert Lageridealisierung, Kerbgeometrie und Lagernähe als mögliche Einflüsse.'}</p></div>
    </div>
    <p className={styles.femLimit}>{en ? 'Scope: linear-elastic static analysis. A strength ratio for this load case does not establish fatigue life or general suitability for service. Load assumptions, bearing representation and convergence must be checked for the actual application before part approval.' : 'Geltungsbereich: linear-elastische Statik. Eine Sicherheitszahl für diesen Lastfall belegt weder die Lebensdauer unter wechselnder Last noch die allgemeine Einsatztauglichkeit. Vor einer Bauteilfreigabe sind Lastannahmen, Lagerabbildung und Konvergenz für den konkreten Einsatz zu prüfen.'}</p>
  </section>;
}
