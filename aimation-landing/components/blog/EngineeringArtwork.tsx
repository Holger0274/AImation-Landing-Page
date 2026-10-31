import type { ArticleKey } from '@/lib/data/engineering-articles';
import { engineeringArtworkUri } from '@/lib/data/engineering-artwork';

export default function EngineeringArtwork({ kind, variant = 0, className }: { kind: ArticleKey; variant?: number; className?: string }) {
  // Decorative: all meaning, states and qualifications also appear in the adjacent HTML.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={engineeringArtworkUri(kind, variant)} width={1000} height={720} alt="" aria-hidden="true" draggable={false} />;
}
