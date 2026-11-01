import styles from './TechnicalAtmosphere.module.css';

export type AtmosphereMotif = 'assembly' | 'documents' | 'workflow';

/** Decorative, original vector motifs. Adjacent HTML carries all meaningful content. */
export default function TechnicalAtmosphere({ motif = 'assembly', treatment = 'hero' }: {
  motif?: AtmosphereMotif;
  treatment?: 'hero' | 'section' | 'closing';
}) {
  return <div className={`${styles.atmosphere} ${styles[treatment]}`} aria-hidden="true" data-technical-atmosphere={motif}>
    {/* Native SVG keeps these static backgrounds independent of hydration and external image services. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`/images/atmospheres/${motif}.svg`} alt="" width={1600} height={1000} draggable={false} loading={treatment === 'hero' ? 'eager' : 'lazy'} decoding="async" />
  </div>;
}
