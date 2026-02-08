import React from 'react';

export const metadata = {
  title: 'Datenschutzerklärung | AI.mation',
  description: 'Datenschutzerklärung von AI.mation: Informationen zur DSGVO-konformen Datenverarbeitung, Cookies, Analytics und Ihren Rechten. Transparenter Umgang mit Ihren Daten.',
  robots: {
    index: false, // Datenschutz sollte nicht indexiert werden
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-warm-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-soft-black mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-600 mb-8">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              1. Verantwortlicher und Kontakt
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              Holger Peschke<br />
              AI.mation<br />
              Sutte 19<br />
              96049 Bamberg<br />
              Deutschland
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>E-Mail:</strong> <a href="mailto:kontakt@ai-mation.de" className="text-magenta hover:underline">kontakt@ai-mation.de</a><br />
              <strong>Telefon:</strong> [Wird nach Geschäftsanmeldung ergänzt]
            </p>
            <p className="text-soft-black leading-relaxed">
              Bei Fragen zum Datenschutz können Sie sich jederzeit unter den oben genannten Kontaktdaten an uns wenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              2. Umfang und Zweck der Datenverarbeitung
            </h2>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              2.1 Zugriff auf unsere Website (Server-Logfiles)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Bei jedem Zugriff auf unsere Website werden automatisch Informationen durch Ihren Browser an unseren Hosting-Anbieter übermittelt und in sogenannten Server-Logfiles gespeichert. Dies geschieht automatisch und ist für den technischen Betrieb der Website erforderlich.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Folgende Daten werden dabei verarbeitet:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgte (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. Betriebssystem</li>
              <li>Name Ihres Internet-Providers</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Optimierung unserer Website sowie der Gewährleistung der Systemsicherheit)
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Speicherdauer:</strong> Die Logfiles werden nach 7 Tagen automatisch gelöscht.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Hosting-Anbieter:</strong> Unsere Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel verarbeitet Daten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrags nach Art. 28 DSGVO. Die Datenübermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              2.2 Kontaktformular
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Wenn Sie uns über das Kontaktformular auf unserer Website eine Anfrage senden, werden die von Ihnen eingegebenen Daten bei uns gespeichert, um Ihre Anfrage zu bearbeiten und für eventuelle Rückfragen.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Name (Pflichtfeld)</li>
              <li>E-Mail-Adresse (Pflichtfeld)</li>
              <li>Unternehmen (optional)</li>
              <li>Telefonnummer (optional)</li>
              <li>Nachrichtentext (Pflichtfeld)</li>
              <li>Zeitstempel der Anfrage</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung Ihrer Anfrage)
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind. Dies ist in der Regel 3 Jahre nach Abschluss der Kommunikation der Fall, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>SSL-Verschlüsselung:</strong> Alle Daten, die Sie über das Kontaktformular übermitteln, werden verschlüsselt übertragen (TLS/SSL-Verschlüsselung).
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              2.3 Terminbuchung über Calendly
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Auf unserer Website bieten wir Ihnen die Möglichkeit, direkt einen kostenlosen Beratungstermin zu buchen. Hierfür nutzen wir den Dienst Calendly von Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, GA 30363, USA.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Verarbeitete Daten bei Terminbuchung:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Gewünschter Terminzeitpunkt</li>
              <li>Optional: Telefonnummer, Unternehmen, Nachricht</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Zweck:</strong> Ermöglichung der Terminvereinbarung, Versendung von Terminbestätigungen und -erinnerungen
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage)
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Datenübermittlung in Drittland:</strong> Calendly verarbeitet Daten teilweise auf Servern in den USA. Die Übermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln. Calendly ist zudem nach dem EU-US Data Privacy Framework zertifiziert.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Auftragsverarbeitung:</strong> Wir haben mit Calendly einen Auftragsverarbeitungsvertrag (Data Processing Agreement) nach Art. 28 DSGVO abgeschlossen. Calendly verarbeitet Ihre Daten nur gemäß unseren Weisungen.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Speicherdauer:</strong> Termindaten werden so lange gespeichert, wie der Termin aktiv ist, zuzüglich 3 Jahre für geschäftliche Nachvollziehbarkeit, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Weitere Informationen:</strong> Details zu Calendlys Datenschutzpraktiken finden Sie in der <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-magenta hover:underline">Datenschutzerklärung von Calendly</a>.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              2.4 Website-Analyse (Plausible Analytics)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Wir nutzen Plausible Analytics, einen datenschutzfreundlichen Website-Analyse-Dienst, um die Nutzung unserer Website zu verstehen und zu verbessern.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Besonderheiten von Plausible:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Keine Cookies oder lokale Speicherung auf Ihrem Gerät</li>
              <li>Keine personenbezogenen Daten werden erhoben</li>
              <li>Keine Tracking über mehrere Websites hinweg</li>
              <li>Daten werden nach 24 Stunden vollständig anonymisiert</li>
              <li>IP-Adressen werden nur in gehashter Form für maximal 24 Stunden gespeichert</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Erhobene Daten (aggregiert):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Aufgerufene Seiten</li>
              <li>Verweisende Website (Referrer)</li>
              <li>Verwendeter Browser und Gerättyp</li>
              <li>Ungefährer Standort (nur Land, nicht Stadt oder genauer)</li>
              <li>Besuchsdauer und Interaktionsmuster (aggregiert)</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Zweck:</strong> Verbesserung der Website-Nutzererfahrung, Verständnis der Besuchermuster, technische Optimierung
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der statistischen Auswertung des Nutzerverhaltens zu Optimierungszwecken)
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Keine Einwilligung erforderlich:</strong> Da Plausible keine personenbezogenen Daten nach der Anonymisierung speichert und keine Cookies verwendet, ist nach der Rechtsprechung deutscher Datenschutzbehörden keine explizite Cookie-Einwilligung erforderlich.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Datenverarbeitung:</strong> Plausible Analytics OÜ, Västriku tn 2, 50403, Tartu, Estland (EU). Die Datenverarbeitung erfolgt ausschließlich innerhalb der EU.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Speicherdauer:</strong> Aggregierte Statistiken werden unbegrenzt gespeichert, enthalten aber keine personenbezogenen Daten mehr.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Weitere Informationen:</strong> <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="text-magenta hover:underline">Plausible Data Policy</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              3. Cookies und Tracking-Technologien
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies dienen ausschließlich technischen Zwecken und erfordern gemäß § 25 Abs. 2 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) keine Einwilligung.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Verwendete technisch notwendige Cookies:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Session-Cookie zur Aufrechterhaltung Ihrer Sitzung während der Nutzung der Website</li>
              <li>Cookie für die Spracheinstellung (sofern Sie zwischen Deutsch und Englisch wählen können)</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Keine Marketing- oder Tracking-Cookies:</strong> Wir verwenden keine Cookies für Marketing, Werbung oder Tracking über mehrere Websites. Wir verwenden keine Third-Party-Cookies von Drittanbietern wie Google Analytics, Facebook Pixel oder ähnlichen Diensten.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Cookie-Einstellungen in Ihrem Browser:</strong> Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              4. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.1 Recht auf Auskunft (Art. 15 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden. Ist dies der Fall, haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf weitere Informationen über die Verarbeitung.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.2 Recht auf Berichtigung (Art. 16 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.3 Recht auf Löschung (Art. 17 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, von uns zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der gesetzlichen Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben ist.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.6 Widerspruchsrecht (Art. 21 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4 p-4 bg-gray-100 rounded">
              <strong>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.</strong>
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.7 Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sofern die Verarbeitung Ihrer personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              4.8 Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Zuständige Aufsichtsbehörde für Bayern:</strong><br />
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              Telefon: 0981 180093-0<br />
              E-Mail: poststelle@lda.bayern.de<br />
              Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-magenta hover:underline">www.lda.bayern.de</a>
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              Alternativ können Sie sich auch an die Datenschutzbehörde Ihres gewöhnlichen Aufenthaltsortes oder Arbeitsplatzes wenden.
            </p>

            <h3 className="text-xl font-semibold text-soft-black mb-2 mt-6">
              Ausübung Ihrer Rechte
            </h3>
            <p className="text-soft-black leading-relaxed mb-4">
              Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter den oben genannten Kontaktdaten. Wir werden Ihre Anfrage innerhalb eines Monats bearbeiten und Ihnen antworten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              5. Datensicherheit
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Technische Maßnahmen:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>SSL/TLS-Verschlüsselung für die gesamte Website (erkennbar am Schloss-Symbol in der Adresszeile Ihres Browsers)</li>
              <li>Verschlüsselte Datenübertragung bei allen Formularen</li>
              <li>Regelmäßige Sicherheitsupdates unserer Systeme</li>
              <li>Zugriffsbeschränkungen auf personenbezogene Daten</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              6. Weitergabe von Daten an Dritte
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Wir geben Ihre personenbezogenen Daten nur dann an Dritte weiter, wenn:
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>Sie gemäß Art. 6 Abs. 1 lit. a DSGVO Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
              <li>die Weitergabe gemäß Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben</li>
              <li>für die Weitergabe gemäß Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
              <li>dies gesetzlich zulässig und gemäß Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Auftragsverarbeiter:</strong> Wir setzen externe Dienstleister als Auftragsverarbeiter ein (z.B. Hosting-Anbieter, Analyse-Tools). Mit allen Auftragsverarbeitern haben wir Verträge nach Art. 28 DSGVO abgeschlossen, die sicherstellen, dass diese die Daten nur nach unserer Weisung und unter Einhaltung der DSGVO verarbeiten.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Keine Datenverkäufe:</strong> Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte und geben sie nicht zu Werbezwecken weiter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              7. Übermittlung in Drittländer
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Soweit Daten in Drittländer (außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums) übermittelt werden, erfolgt dies nur:
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li>auf Grundlage eines Angemessenheitsbeschlusses der EU-Kommission (Art. 45 DSGVO) oder</li>
              <li>unter Verwendung geeigneter Garantien wie EU-Standardvertragsklauseln (Art. 46 DSGVO) oder</li>
              <li>mit Ihrer ausdrücklichen Einwilligung (Art. 49 Abs. 1 lit. a DSGVO)</li>
            </ul>
            <p className="text-soft-black leading-relaxed mb-4">
              <strong>Konkrete Drittlandübermittlungen:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-soft-black">
              <li><strong>Vercel (USA):</strong> Hosting-Anbieter, Übermittlung auf Grundlage von EU-Standardvertragsklauseln</li>
              <li><strong>Calendly (USA):</strong> Terminbuchungssystem, Übermittlung auf Grundlage von EU-Standardvertragsklauseln und EU-US Data Privacy Framework</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              8. Keine automatisierte Entscheidungsfindung
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Wir setzen keine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO ein. Alle Anfragen und Kontaktaufnahmen werden von Menschen bearbeitet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-soft-black mb-4">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-soft-black leading-relaxed mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand vom {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}.
            </p>
            <p className="text-soft-black leading-relaxed mb-4">
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-soft-black mb-3">
              Haben Sie Fragen zum Datenschutz?
            </h3>
            <p className="text-soft-black leading-relaxed">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:
            </p>
            <p className="text-soft-black leading-relaxed mt-3">
              <strong>E-Mail:</strong> <a href="mailto:kontakt@ai-mation.de" className="text-magenta hover:underline">kontakt@ai-mation.de</a>
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-12 pt-8 border-t border-gray-300">
            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
