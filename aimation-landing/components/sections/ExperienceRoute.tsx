import { ArrowDown } from 'lucide-react';
import styles from './ExperienceRoute.module.css';

export default function ExperienceRoute({ en }: { en: boolean }) {
  const stops = [
    { href: '#entwicklung-erleben', title: en ? 'Explore CAD & FEM' : 'CAD & FEM erleben', detail: en ? 'From text to analysis' : 'Vom Text bis zur Berechnung' },
    { href: '#anwendungsdemos', title: en ? 'Discover applications' : 'Anwendungen entdecken', detail: en ? 'Projects, variants, teams' : 'Projekte, Varianten, Teams' },
    { href: '#aufgabe-waehlen', title: en ? 'Explore your task' : 'Ihre Aufgabe erkunden', detail: en ? 'Choose an engineering workflow' : 'Einen Entwicklungsablauf wählen' },
    { href: '#prozess', title: en ? 'Plan the next step' : 'Den nächsten Schritt planen', detail: en ? 'Scope, process and prices' : 'Umfang, Ablauf und Preise' },
  ];
  return <nav className={`engineering-wrap ${styles.route}`} aria-label={en ? 'Your route through AImation' : 'Ihr Weg durch AImation'}>
    {stops.map((stop, index) => <a key={stop.href} href={stop.href}><span className={styles.index}>0{index + 1}</span><span><strong>{stop.title}</strong><small>{stop.detail}</small></span><ArrowDown size={16} aria-hidden="true" /></a>)}
  </nav>;
}
