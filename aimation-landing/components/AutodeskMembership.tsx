import { ArrowUpRight } from 'lucide-react';
import { ADN_MEMBERSHIP } from '@/lib/config/facts';

export default function AutodeskMembership({ en, card = false }: { en: boolean; card?: boolean }) {
  const date = new Intl.DateTimeFormat(en ? 'en-GB' : 'de-DE', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(ADN_MEMBERSHIP.since));

  return <aside
    data-partner-card={card ? true : undefined}
    aria-label={en ? 'Autodesk Developer Network membership' : 'Mitgliedschaft im Autodesk Developer Network'}
    className={card
      ? 'flex-none w-[80%] sm:w-[320px] lg:w-[380px] snap-start bg-surface rounded-2xl border border-line shadow-sm p-8 text-center flex flex-col'
      : 'mt-6 rounded-lg border border-line bg-surface p-5'}
  >
    {card && <p className="mb-5 text-xs font-heading font-semibold uppercase tracking-wide text-muted">{en ? 'Member' : 'Mitglied'} · {ADN_MEMBERSHIP.category}</p>}
    <p className={card ? 'font-heading font-bold text-xl text-ink mb-4' : 'font-heading font-semibold text-ink'}>
      {en ? 'Member of the ' : 'Mitglied im '}{ADN_MEMBERSHIP.name}
    </p>
    <p className="text-sm text-muted leading-relaxed mt-2">
      Holger Peschke · {en ? 'Category' : 'Kategorie'} {ADN_MEMBERSHIP.category} · {en ? 'since ' : 'seit '}
      <time dateTime={ADN_MEMBERSHIP.since}>{date}</time>
    </p>
    {card && <p className="text-sm text-muted leading-relaxed mt-5 mb-5 flex-1">{en
      ? 'A developer network for applications and integrations built on Autodesk technologies.'
      : 'Ein Entwicklernetzwerk für Anwendungen und Integrationen auf Basis von Autodesk-Technologien.'}</p>}
    <a href={ADN_MEMBERSHIP.url} target="_blank" rel="noopener noreferrer" className={`engineering-text-link min-h-11 mt-2 ${card ? 'justify-center' : ''}`}>
      {en ? 'About the developer network' : 'Zum Entwicklernetzwerk'}<ArrowUpRight size={16} aria-hidden="true" />
    </a>
  </aside>;
}
