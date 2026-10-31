import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { ADN_MEMBERSHIP } from '@/lib/config/facts';
import s from './HomeTrust.module.css';

export default async function HomeTrust({ en }: { en: boolean }) {
  const t = await getTranslations('partnership');
  const partners = [
    { key:'uknow', name:'U-KNOW.AI', image:'/logos/partners/u-know-ai-icon.webp', detail:en ? 'Knowledge management' : 'Wissensmanagement' },
    { key:'kibv', name:t('kibv.title'), image:'/logos/partners/kibv-icon.png', detail:'Holger Peschke' },
    { key:'bko', name:t('bko.title'), image:'/logos/partners/bko-icon.png', detail:'Holger Peschke' },
  ];
  return <section id="partnerschaften" className={s.section} aria-labelledby="home-trust-heading">
    <div className="engineering-wrap">
      <div className={s.heading}>
        <h2 id="home-trust-heading">{en ? 'Partnerships and memberships' : 'Partnerschaften und Mitgliedschaften'}</h2>
        <Link href={`${en ? '/en' : ''}/ueber-holger-peschke#partnerschaften`}>{en ? 'About the network' : 'Mehr zum Netzwerk'}<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <div className={s.network}>
        <a className={s.member} href={ADN_MEMBERSHIP.url} target="_blank" rel="noopener noreferrer">
          <span className={s.relationship}>{en ? 'Member · ' : 'Mitglied · '}{ADN_MEMBERSHIP.category}</span>
          <div className={s.brand}><span className={s.adn} aria-hidden="true">ADN</span><h3>{ADN_MEMBERSHIP.name}</h3><ArrowUpRight size={15} aria-hidden="true" /></div>
          <p>Holger Peschke · {en ? 'since ' : 'seit '}<time dateTime={ADN_MEMBERSHIP.since}>{new Intl.DateTimeFormat(en ? 'en-GB' : 'de-DE', {day:'2-digit',month:'2-digit',year:'numeric',timeZone:'UTC'}).format(new Date(ADN_MEMBERSHIP.since))}</time></p>
        </a>
        {partners.map(partner=><a className={s.member} href={t(`${partner.key}.href`)} target="_blank" rel="noopener noreferrer" key={partner.key}>
          <span className={s.relationship}>{t(`${partner.key}.kicker`)}</span>
          <div className={s.brand}><span className={s.logo}><Image src={partner.image} alt="" width={42} height={42} /></span><h3>{partner.name}</h3><ArrowUpRight size={15} aria-hidden="true" /></div>
          <p>{partner.detail}</p>
        </a>)}
      </div>
    </div>
  </section>;
}
