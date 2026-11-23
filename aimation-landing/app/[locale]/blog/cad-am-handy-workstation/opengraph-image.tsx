import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { videoArticleShareImage } from '@/components/blog/VideoArticleShareImage';
export const alt = 'CAD am Handy oder an der Workstation? Fachbeitrag von Holger Peschke';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image() {
  const source = await readFile(path.join(process.cwd(), 'public/videos/ai2cad/skizze.webp'));
  return videoArticleShareImage('cad-am-handy-workstation', source);
}
