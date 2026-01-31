import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl md:text-3xl font-heading font-bold mb-4">
              AI<span className="text-magenta text-glow-magenta">.</span>mation
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Automatisierung mit Intelligenz
            </p>
            <p className="text-gray-600 text-sm">
              20 Jahre Engineering-Erfahrung für Ihren KI-Erfolg
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#schulungen"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Schulungen
                </a>
              </li>
              <li>
                <a
                  href="#beratung"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Beratung
                </a>
              </li>
              <li>
                <a
                  href="#umsetzung"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Umsetzung
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              Unternehmen
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#ueber-mich"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="#prozess"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Prozess
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Erstgespräch buchen
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@aimation.de"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={14} />
                  kontakt@aimation.de
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} AI.mation – Alle Rechte vorbehalten
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
