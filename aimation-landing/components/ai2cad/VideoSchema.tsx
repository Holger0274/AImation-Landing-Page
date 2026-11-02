import { videoUploadDate } from '@/lib/seo/video-date';
import { AI2CAD_VIDEOS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { SITE_URL } from '@/lib/seo/metadata';
import { localizedPath } from '@/lib/seo/locales';

export default function VideoSchema({ chapter, locale }: { chapter: typeof AI2CAD_VIDEOS[number]; locale: string }) {
  const copy = chapter[locale === 'en' ? 'en' : 'de'];
  const url = `${SITE_URL}${localizedPath(`${AI2CAD_PATH}/${chapter.slug}`, locale)}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'VideoObject', '@id': `${url}#video`,
    name: `${chapter.kind} ${chapter.number}: ${copy.title}`, description: `${'context' in copy ? copy.context + ' ' : ''}${copy.description} ${copy.check}`,
    thumbnailUrl: `${SITE_URL}/videos/ai2cad/${chapter.id}.webp`,
    contentUrl: `${SITE_URL}/videos/ai2cad/${chapter.id}.mp4`,
    uploadDate: videoUploadDate(chapter.uploadDate), duration: `PT${chapter.seconds}S`, inLanguage: 'de',
    url, mainEntityOfPage: url,
    creator: { '@id': `${SITE_URL}/#holger-peschke` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
