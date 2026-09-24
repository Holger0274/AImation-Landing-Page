// Confirmed generated assets only. Provenance: docs/image-direction/final-prompts.json
// and docs/image-direction/2026-09-23-varianz-prompts.json. Real photos, screenshots
// and code-drawn schematics must not inherit this label from their file extension.
const generatedImages = new Set([
  'engineering-knowledge.webp', 'knowledge-loss.webp', 'reporting.webp',
  'requests.webp', 'searching.webp', 'research.webp', 'competition.webp',
  'reporting-v2.png', 'requests-v2.png', 'competition-v2.png',
].map(name => `/images/editorial/${name}`));

export default function ImageOriginLabel({ src, en = false }: { src: string; en?: boolean }) {
  if (!generatedImages.has(src)) return null;
  return <span className="image-origin-label">{en ? 'AI-generated' : 'KI-generiert'}</span>;
}
