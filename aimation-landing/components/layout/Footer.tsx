import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date('2026-08-09'); // Update dieses Datum bei Content-Änderungen
  const formattedDate = lastUpdated.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <footer className="bg-[#071013] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logos/aimation-logo-transparent-light.svg"
                alt="AI.mation Logo"
                width={185}
                height={61}
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-sm">
              {t('tagline')} <span className="text-[#f90093]">{t('taglineHighlight')}</span>
            </p>
            <p className="text-gray-400 text-sm">
              {t('subtagline')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              {t('colLeistungen')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ki-schulungen-mittelstand"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkSchulungen')}
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-beratung-kmu"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkBeratung')}
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-automatisierung-mittelstand"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkUmsetzung')}
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-agenten-unternehmen"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkAgenten')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">
              {t('colUnternehmen')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#ueber-mich"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkUeberUns')}
                </a>
              </li>
              <li>
                <a
                  href="#prozess"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkProzess')}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkFaq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">{t('colKontakt')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('linkErstgespraech')}
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
                  href="https://www.linkedin.com/in/holgerpeschke/"
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          {/* Last Updated Signal (SEO Content Freshness) */}
          <p className="text-gray-500 text-xs mb-3 text-center md:text-left">
            {t('lastUpdated')} {formattedDate}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              {/* Legal-Seiten liegen ausserhalb [locale] (nur /impressum, /datenschutz),
                  daher bewusst plain <a> statt der locale-aware Link. */}
              <a
                href="/impressum"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('impressum')}
              </a>
              <a
                href="/datenschutz"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('datenschutz')}
              </a>
              <Link
                href="/facts/aimation"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('groundingPage')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
