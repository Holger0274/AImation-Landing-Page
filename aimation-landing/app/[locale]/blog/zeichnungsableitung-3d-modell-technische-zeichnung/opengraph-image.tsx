import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { videoArticleShareImage } from '@/components/blog/VideoArticleShareImage';
export const alt = 'Vom 3D-Modell zur technischen Zeichnung mit KI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image() {
  const source = await readFile(path.join(process.cwd(), 'public/videos/ai2cad/zeichnung.webp'));
  return videoArticleShareImage('zeichnungsableitung-3d-modell-technische-zeichnung', source);
}
