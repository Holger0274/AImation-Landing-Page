'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CALENDLY_URL = 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai';

const FAQ_ITEMS = [
  {
    q: 'Ist Schatten-KI wirklich so verbreitet?',
    a: 'Ja. Studien zeigen, dass drei von vier Wissensarbeitern KI-Tools nutzen — oft ohne Wissen oder Freigabe ihrer IT-Abteilung. Das ist kein Randphänomen, sondern Alltag in deutschen Unternehmen.',
  },
  {
    q: 'Was ist der Unterschied zu Schatten-IT?',
    a: 'Schatten-IT betraf Infrastruktur (jemand nutzt Dropbox statt Firmenserver). Schatten-KI betrifft die Verarbeitung von Unternehmensdaten und die Qualität von Entscheidungen. Das Risikoprofil ist grundlegend anders.',
  },
  {
    q: 'Drohen uns konkrete Strafen durch DSGVO-Verstöße?',
    a: 'Ja. Wenn personenbezogene Daten in nicht genehmigte KI-Tools eingegeben werden, ist das ein Verstoß gegen die DSGVO. Die Bußgelder können bis zu 4% des weltweiten Jahresumsatzes betragen. Dazu kommen Reputationsschäden.',
  },
  {
    q: 'Wie lange dauert es, eine KI-Richtlinie aufzusetzen?',
    a: 'Eine erste, funktionierende Richtlinie lässt sich in 2 bis 4 Wochen erstellen. Sie braucht keine 50 Seiten — eine Seite mit klaren Regeln ist wirksamer. Wir helfen dabei.',
  },
  {
    q: 'Was kostet eine sichere KI-Lösung als Alternative?',
    a: 'Das hängt vom Umfang ab. Ein Unternehmens-Account bei ChatGPT mit AVV kostet ab 25 Euro pro Nutzer pro Monat. Selbst gehostete Lösungen mit lokalen Modellen sind einmalig teurer im Aufbau, aber kostengünstiger im Betrieb und bieten maximalen Datenschutz.',
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-semibold text-[#071013] hover:bg-[#faf9f7] transition-colors"
            aria-expanded={open === i}
            style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
          >
            {item.q}
            <span className={`ml-4 flex-shrink-0 text-[#f90093] text-lg transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 font-inter text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SchattenKiPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#faf9f7]">
        {/* ── HERO ── */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter flex-wrap">
              <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-[#071013] transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#071013] font-medium">Schatten-KI im Unternehmen</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold">
                KI-Governance
              </span>
              <span className="text-xs text-gray-400 font-inter">1. März 2025</span>
              <span className="text-xs text-gray-400 font-inter">·</span>
              <span className="text-xs text-gray-400 font-inter">7 Min. Lesezeit</span>
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
            >
              Schatten-KI in Ihrem Unternehmen: Warum Verbieten nicht funktioniert.{' '}
              <span className="text-[#f90093]">Und was stattdessen hilft.</span>
            </h1>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-2">
              <Image
                src="/images/blog/schatten-ki-hero.jpg"
                alt="Schatten-KI im Unternehmen – Mitarbeiter nutzen KI-Tools ohne IT-Freigabe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── ARTIKEL ── */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none font-inter text-[#071013]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: '1.75' }}>

              <p>
                Ihr Vertriebsmitarbeiter lässt Angebote von ChatGPT formulieren. Auf dem Privathandy, über seinen persönlichen Account. Die Personalabteilung nutzt Claude, um Bewerbungsunterlagen zusammenzufassen. Ein Entwickler gibt internen Quellcode in einen KI-Assistenten ein, um einen Fehler schneller zu finden. Alle drei handeln mit guter Absicht. Und alle drei lösen ein Problem aus, von dem Ihre IT-Abteilung nichts weiß.
              </p>
              <p className="font-semibold text-[#071013]">Willkommen in der Welt der Schatten-KI.</p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was ist Schatten-KI?
              </h2>
              <p>
                Schatten-KI (englisch: Shadow AI) beschreibt die Nutzung von KI-Tools am Arbeitsplatz ohne offizielle Genehmigung der IT-Abteilung oder Geschäftsführung. Es ist die Weiterentwicklung der bekannten Schatten-IT, aber mit einer völlig neuen Dimension: Während Schatten-IT Infrastruktur betraf (jemand nutzt Dropbox statt des Firmen-Servers), betrifft Schatten-KI die Verarbeitung von Unternehmensdaten und die Qualität von Entscheidungen.
              </p>
              <p>
                Die Zahlen sind eindeutig: Drei von vier Wissensarbeitern nutzen KI-Tools zur Arbeitsentlastung. In vielen Unternehmen passiert das ohne jede Richtlinie, ohne Freigabe, ohne Dokumentation.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Warum Ihre Mitarbeiter das tun
              </h2>
              <p>
                Nicht aus Bosheit. Nicht aus Nachlässigkeit. Sondern weil KI-Tools Probleme in Sekunden lösen, für die man vorher Stunden brauchte.
              </p>
              <p>
                Der Vertriebsmitarbeiter schreibt sein Angebot in 10 Minuten statt in einer Stunde. Die Personalabteilung arbeitet 50 Bewerbungen in einem Nachmittag durch statt in einer Woche. Der Entwickler findet seinen Bug in 5 Minuten statt in 2 Stunden.
              </p>
              <p>
                Die Motivation ist Produktivität. Der Antrieb ist Frust über langsame, umständliche oder fehlende offizielle Alternativen. Wenn Ihr Unternehmen keine freigegebene KI-Lösung bietet, schaffen sich Ihre Mitarbeiter selbst eine. Das ist kein IT-Problem. Es ist ein Signal, dass Bedürfnisse nicht gedeckt werden.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Warum Verbieten das Problem verschlimmert
              </h2>
              <p>
                Die naheliegende Reaktion: KI-Tools blockieren. Richtlinie raus, Zugriff sperren, fertig.
              </p>
              <p>
                Das Ergebnis? Ihre Mitarbeiter weichen auf private Geräte, persönliche Accounts und VPN-Verbindungen aus. Die KI-Nutzung hört nicht auf. Sie verschwindet aus dem Sichtbereich.
              </p>
              <p>
                Und das ist gefährlicher als die unkontrollierte Nutzung selbst. Denn jetzt gibt es keine Logs, keine Nachverfolgung, keine Möglichkeit zur Schadensbegrenzung. Selbst große Konzerne haben das gelernt: Verbote führen nicht dazu, dass Mitarbeiter aufhören, KI zu nutzen. Sie führen dazu, dass sie es heimlich tun.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Die echten Risiken von Schatten-KI
              </h2>
              <p>Das Problem ist nicht, dass Ihre Mitarbeiter KI nutzen. Das Problem ist, dass sie es unkontrolliert tun.</p>

              <p><strong>Datenabfluss:</strong> Jede Eingabe in ein öffentliches KI-Modell kann gespeichert, für Modelltraining verwendet oder von Dritten eingesehen werden. Wenn Ihr Controller Finanzdaten in ChatGPT eingibt, verlassen vertrauliche Informationen Ihr Unternehmen. Unwiderruflich.</p>

              <p><strong>DSGVO-Verstöße:</strong> Unter der DSGVO ist jede Verarbeitung personenbezogener Daten durch Dritte genehmigungspflichtig. Wenn Ihr HR-Team Bewerberdaten durch ein nicht freigegebenes KI-Tool schickt, ist das ein Compliance-Verstoß. Ohne dass jemand davon weiß.</p>

              <p><strong>Qualitätsrisiken:</strong> KI-Ergebnisse können fehlerhaft, verzerrt oder halluziniert sein. Wenn niemand die Nutzung kennt, prüft auch niemand die Ergebnisse. Ein Angebot mit falschen Spezifikationen, ein Vertragsentwurf mit erfundenen Klauseln, eine Kundenantwort mit falschen Fakten.</p>

              <p><strong>EU AI Act:</strong> Seit 2025 müssen Unternehmen wissen, welche KI-Systeme im Einsatz sind. Hochrisiko-Anwendungen (Recruiting, Kreditvergabe, sicherheitskritische Systeme) müssen dokumentiert und überwacht werden. Schatten-KI macht das unmöglich.</p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Was stattdessen hilft: 4 Schritte
              </h2>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                1. Sichtbarkeit schaffen
              </h3>
              <p>
                Sie können nur regeln, was Sie kennen. Der erste Schritt ist eine Bestandsaufnahme: Welche KI-Tools werden in welchen Abteilungen genutzt? Welche Daten fließen wohin? Keine Hexenjagd. Sondern ein offenes Gespräch. Niedrigschwellige Umfragen oder Workshops helfen, ein realistisches Bild zu bekommen.
              </p>
              <p>
                Wenn Sie dabei feststellen, dass 80% Ihres Teams bereits KI nutzt, ist das kein Alarmsignal. Es ist ein Zeichen, dass Ihr Team vorbereitet ist. Es braucht nur den richtigen Rahmen.
              </p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                2. KI-Richtlinien aufsetzen (und zwar verständliche)
              </h3>
              <p>
                Keine 50-seitigen Compliance-Dokumente, die niemand liest. Sondern klare, einfache Regeln: Welche Tools sind freigegeben? Welche Daten dürfen eingegeben werden, welche nicht? Wer prüft KI-generierte Ergebnisse vor der Verwendung? Was passiert bei Unsicherheit?
              </p>
              <p>Eine KI-Richtlinie muss so einfach sein, dass sie auf eine Seite passt. Und sie muss leben, nicht in der Schublade liegen.</p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                3. Sichere Alternativen bereitstellen
              </h3>
              <p>
                Der wichtigste Schritt: Geben Sie Ihrem Team freigegebene KI-Tools, die genauso bequem sind wie die Schatten-Alternativen. Das kann ein Unternehmens-ChatGPT-Account mit AVV (Auftragsverarbeitungsvertrag) sein. Oder eine{' '}
                <Link href="/ki-automatisierung-mittelstand" className="text-[#f90093] hover:underline">selbst gehostete Lösung</Link>
                {' '}mit lokalen Modellen, bei der keine Daten Ihr Unternehmen verlassen.
              </p>
              <p>Die offizielle Alternative muss einfacher und besser sein als die Schatten-Lösung. Sonst gewinnt immer der Schatten.</p>

              <h3 className="font-heading font-semibold text-[#071013] mt-6 mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                4. Schulen, schulen, schulen
              </h3>
              <p>
                Ihre Mitarbeiter müssen wissen: Was kann KI? Was kann sie nicht? Welche Daten darf ich eingeben? Wann muss ich Ergebnisse prüfen? Wie erkenne ich Halluzinationen? Das ist kein Einmal-Event, sondern ein laufender Prozess.{' '}
                <Link href="/ki-schulungen-mittelstand" className="text-[#f90093] hover:underline">Unsere KI-Schulungen für den Mittelstand</Link>
                {' '}zeigen, wie das gelingt.
              </p>

              <hr className="border-gray-200 my-8" />

              <h2 className="font-heading font-bold text-[#071013] mt-10 mb-4" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}>
                Schatten-KI als Chance
              </h2>
              <p>
                Schatten-KI ist nicht nur ein Risiko. Sie ist auch ein Signal: Ihre Mitarbeiter wollen produktiver arbeiten. Sie sind bereit für KI. Die Frage ist nicht OB Ihr Team KI nutzt, sondern ob es das kontrolliert und sicher tut.
              </p>
              <p>
                Unternehmen, die Schatten-KI in geordnete Bahnen lenken statt sie zu verbieten, berichten von höherer Mitarbeiterzufriedenheit, weniger Sicherheitsvorfällen und messbaren Produktivitätsgewinnen.
              </p>
              <p>Der Weg dahin ist kein Zwei-Jahres-Projekt. Er beginnt mit einem Gespräch.</p>
            </div>

            {/* ── INTERNE LINKS ── */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Weiterführende Seiten</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'KI-Schulungen für den Mittelstand', href: '/ki-schulungen-mittelstand' },
                  { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
                  { label: 'KI-Agenten für Unternehmen', href: '/ki-agenten-unternehmen' },
                  { label: 'Die 6 Stufen der KI-Nutzung', href: '/blog/6-stufen-ki-nutzung' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm font-inter text-[#071013] hover:border-[#f90093] hover:text-[#f90093] transition-colors"
                  >
                    {link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-[#071013] mb-8" style={{ fontSize: 'clamp(1.375rem, 4vw, 2rem)' }}>
              Häufige Fragen zu Schatten-KI
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#071013]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-heading font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            >
              Wissen Sie, welche KI-Tools Ihre Mitarbeiter nutzen?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              Wir helfen Ihnen, Schatten-KI sichtbar zu machen, sichere Alternativen aufzubauen und Ihr Team zu schulen. 30 Minuten Erstgespräch. Kostenlos.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
                boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              }}
            >
              Erstgespräch buchen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
