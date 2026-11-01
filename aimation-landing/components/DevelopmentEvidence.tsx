import { Link } from '@/i18n/navigation';
import { AI2CAD_VIDEOS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { DEMO_VIDEOS } from '@/lib/data/demo-videos';

// Visible evidence uses the same descriptions and limits as the watch pages.
export default function DevelopmentEvidence({ en }: { en: boolean }) {
  const language = en ? 'en' : 'de';
  return <section id="entwicklungsbeispiele" aria-labelledby="evidence-title" className="scroll-mt-24">
    <h2 id="evidence-title" className="font-heading font-semibold text-ink text-2xl mb-6">
      {en ? 'AImation: documented development examples' : 'AImation: dokumentierte Entwicklungsbeispiele'}
    </h2>
    <p className="font-inter text-sm text-muted leading-relaxed mb-6">
      {en
        ? 'Holger Peschke documents AImation’s development work in these recordings. AI2CAD and AI2CAE show a mounting plate, a shaft and FEM analysis under a 1,500 N load. The application videos show demonstration data. The recordings document our own development work. The notes below describe the engineering checks needed before production use.'
        : 'Holger Peschke dokumentiert in diesen Aufnahmen die Entwicklungsarbeit von AImation. AI2CAD und AI2CAE zeigen eine Montageplatte, eine Welle und eine FEM-Berechnung unter 1.500 N. Die Anwendungsvideos arbeiten mit Demonstrationsdaten. Die Aufnahmen dokumentieren unsere eigene Entwicklungsarbeit. Die Hinweise bei jedem Beispiel benennen die fachlichen Prüfungen vor einem Produktiveinsatz.'}
    </p>
    <div className="space-y-6">
      {AI2CAD_VIDEOS.map(chapter => <article key={chapter.id} className="border-t border-line pt-5">
        <h3 className="font-heading text-lg mb-2"><Link href={`${AI2CAD_PATH}/${chapter.slug}`} className="engineering-text-link">{chapter.kind}: {chapter[language].title} →</Link></h3>
        <p className="font-inter text-sm text-muted leading-relaxed">{'field' in chapter ? `${chapter[language].context} ` : ''}{chapter[language].description}</p>
        <p className="font-inter text-sm text-muted leading-relaxed mt-2">{chapter[language].check}</p>
        <p className="text-xs text-dim mt-2">{en ? 'Published' : 'Veröffentlicht'}: <time dateTime={chapter.uploadDate}>{chapter.uploadDate}</time> · {chapter.duration} · {en ? 'Development demonstration' : 'Entwicklungsdemonstration'}</p>
      </article>)}
      {DEMO_VIDEOS.map(video => <article key={video.id} className="border-t border-line pt-5">
        <h3 className="font-heading text-lg mb-2"><Link href={video.path} className="engineering-text-link">{video.name}: {video[language].topic} →</Link></h3>
        <p className="font-inter text-sm text-muted leading-relaxed">{video[language].description}</p>
        <p className="font-inter text-sm text-muted leading-relaxed mt-2">{video[language].note}</p>
        <p className="text-xs text-dim mt-2">{en ? 'Published' : 'Veröffentlicht'}: <time dateTime={video.uploadDate}>{video.uploadDate}</time> · {video.duration} · {video[language].status}</p>
      </article>)}
    </div>
  </section>;
}
