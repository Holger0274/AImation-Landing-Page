'use client';
import { useLocale } from 'next-intl';
import { FileText, FolderOpen, Search } from 'lucide-react';

export default function PainSchematic({ type }: { type: 'searching' | 'research' }) {
  const en = useLocale() === 'en';
  return <span className={`pain-schematic schematic-${type}`} role="img" aria-label={type === 'searching' ? (en ? 'Diagram of conflicting document versions in disconnected folders' : 'Schematische Darstellung verschiedener Dokumentstände in getrennten Ablagen') : (en ? 'Technical research radar with scattered sources' : 'Technisches Recherche-Radar mit verstreuten Quellen')}>
    {type === 'searching' ? <span className="version-scene" aria-hidden="true">
      <span className="version-file version-a"><FolderOpen size={24}/><span>REV. A</span><i/><i/><small>{en ? 'Folder' : 'Ablage'}</small></span>
      <span className="version-file version-b"><FileText size={24}/><span>REV. B</span><i/><i/><small>E-Mail</small></span>
      <span className="version-file version-c"><FileText size={24}/><span>REV. C?</span><i/><i/><small>{en ? 'Local' : 'Lokal'}</small></span>
      <span className="schematic-caption"><Search size={16}/>{en ? 'Which version is current?' : 'Welcher Stand gilt?'}</span>
    </span> : <span className="radar-scene" aria-hidden="true">
      <svg viewBox="0 0 400 225" fill="none"><g stroke="currentColor" strokeWidth="1"><circle cx="200" cy="113" r="88"/><circle cx="200" cy="113" r="60"/><circle cx="200" cy="113" r="31"/><path d="M95 113h210M200 8v210M137 50l126 126M137 176L263 50" strokeDasharray="3 5"/></g><path d="M200 113V25a88 88 0 0 1 84 62Z" fill="currentColor" opacity=".14"/><path d="M200 113l84-26" stroke="currentColor" strokeWidth="2"/>{[[150,82],[249,61],[221,145],[123,136],[268,167],[190,106]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="7" fill="var(--surface)" stroke="var(--ink)"/><circle cx={x} cy={y} r="2" fill="var(--ink)"/></g>)}</svg>
      <span className="radar-label radar-label-a">{en ? 'Patents' : 'Patente'}</span><span className="radar-label radar-label-b">{en ? 'Standards' : 'Normen'}</span><span className="radar-label radar-label-c">{en ? 'Literature' : 'Fachliteratur'}</span>
    </span>}
  </span>;
}
