import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { VIDEO_ARTICLES } from '@/lib/data/video-articles';

export async function videoArticleShareImage(slug: string) {
  const article = VIDEO_ARTICLES.find(item => item.slug === slug)!;
  const source = await readFile(path.join(process.cwd(), 'public', article.poster));
  const poster = await sharp(source).resize({ width: 1000 }).png().toBuffer();
  return new ImageResponse(<div style={{ width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#071013',color:'#faf9f7',padding:'52px 60px',fontFamily:'sans-serif',position:'relative' }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={`data:image/png;base64,${poster.toString('base64')}`} alt="" width={800} height={450} style={{position:'absolute',right:-180,top:140,opacity:.55}} />
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, #071013 0%, rgba(7,16,19,0.96) 40%, rgba(7,16,19,0.4) 100%)'}} />
    <div style={{display:'flex',justifyContent:'space-between',fontSize:23,color:'#bbc3c7'}}><span>AImation</span><span>{article.tag} / Praxiswissen</span></div>
    <div style={{display:'flex',fontSize:18,marginTop:72,color:'#bbc3c7'}}>Mit eigener Video-Demonstration</div>
    <div style={{display:'flex',fontSize:60,fontWeight:700,lineHeight:1.1,letterSpacing:'-2px',marginTop:22,maxWidth:760}}>{article.shortTitle}</div>
    <div style={{display:'flex',fontSize:19,color:'#bbc3c7',marginTop:'auto',borderTop:'1px solid #334249',paddingTop:22}}>Holger Peschke · Engineering aus der Praxis · aimation.de/blog</div>
  </div>,{width:1200,height:630});
}
