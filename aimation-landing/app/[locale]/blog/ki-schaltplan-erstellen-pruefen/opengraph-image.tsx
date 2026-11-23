import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { videoArticleShareImage } from '@/components/blog/VideoArticleShareImage';
export const alt = 'AImation: Engineering-Praxis mit eigener Video-Demonstration';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image() {
  const source = await readFile(path.join(process.cwd(), 'public/videos/elektrik/kurzschluss.webp'));
  return videoArticleShareImage('ki-schaltplan-erstellen-pruefen', source);
}
