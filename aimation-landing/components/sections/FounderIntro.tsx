'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Linkedin, ZoomIn } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import styles from './FounderIntro.module.css';

export default function FounderIntro() {
  const t = useTranslations('founderIntro');
  const en = useLocale() === 'en';

  return (
    <section className={styles.section} aria-labelledby="founder-heading">
      <div className={`engineering-wrap ${styles.layout}`}>
        <figure className={styles.portrait}>
          <div className={styles.image}>
            <Image
              src="/images/about-holger-office-ai-edited-v2.webp"
              alt={t('imageAlt')}
              aria-describedby="founder-photo-origin"
              fill
              sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1200px) 36vw, 420px"
              className="object-contain"
            />
          </div>
          <figcaption id="founder-photo-origin" title={t('imageOriginDetail')}>
            {t('imageOrigin')}
          </figcaption>
        </figure>
        <div className={styles.copy}>
          <p className={styles.role}>{t('role')}</p>
          <h2 id="founder-heading">{t('headlineStart')}<span className="highlight">Holger</span> Peschke.</h2>
          <p>{t('experience')}</p>
          <p>{t('conversation')}</p>
          <a href="#ueber-mich" className={`engineering-text-link ${styles.link}`}>
            {t('more')}<ArrowDown size={17} aria-hidden="true" />
          </a>
          <aside className={styles.linkedin} aria-label={en ? 'Holger Peschke on LinkedIn' : 'Holger Peschke auf LinkedIn'}>
            <div className={styles.proofCopy}>
              <span className={styles.proofLabel}><Linkedin size={18} aria-hidden="true" /> LinkedIn</span>
              <strong className={styles.proofNumber}>{en ? '20,000+' : '20.000+'}</strong>
              <span className={styles.proofFollowers}>{en ? 'people follow my posts.' : 'Menschen folgen meinen Beiträgen.'}</span>
              <a href="https://www.linkedin.com/in/holgerpeschke/" target="_blank" rel="noopener noreferrer" className={styles.proofLink}>
                {en ? 'View profile and posts' : 'Profil und Beiträge ansehen'}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className={styles.proofPreview} aria-label={en ? 'Enlarge original LinkedIn profile screenshot' : 'Originalen LinkedIn-Profilausschnitt vergrößern'}>
                  <Image src="/images/holger-linkedin-proof-2026-10-03.png" alt={en ? 'Original LinkedIn profile of Holger Peschke with 20,477 followers' : 'Originales LinkedIn-Profil von Holger Peschke mit 20.477 Followern'} width={792} height={441} sizes="(max-width: 760px) 90vw, 300px" />
                  <span><ZoomIn size={16} aria-hidden="true" />{en ? 'View original' : 'Original ansehen'}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogTitle className="pr-10">Holger Peschke · LinkedIn</DialogTitle>
                <Image src="/images/holger-linkedin-proof-2026-10-03.png" alt={en ? 'Original profile excerpt with 20,477 followers' : 'Originaler Profilausschnitt mit 20.477 Followern'} width={792} height={441} sizes="(max-width: 900px) 90vw, 792px" className="w-full h-auto rounded-md" />
                <DialogDescription>{en ? 'Original screenshot from 3 October 2026. 20,477 followers at the time of capture.' : 'Original-Screenshot vom 3. Oktober 2026. Zum Aufnahmezeitpunkt: 20.477 Follower.'}</DialogDescription>
                <a className="engineering-text-link" href="https://www.linkedin.com/in/holgerpeschke/" target="_blank" rel="noopener noreferrer">{en ? 'Open current profile' : 'Aktuelles Profil öffnen'}<ArrowUpRight size={17} aria-hidden="true" /></a>
              </DialogContent>
            </Dialog>
            <small className={styles.proofDate}>{en ? 'Original profile · 3 October 2026' : 'Originalprofil · 3. Oktober 2026'}</small>
          </aside>
        </div>
      </div>
    </section>
  );
}
