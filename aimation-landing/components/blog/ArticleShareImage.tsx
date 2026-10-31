import { ImageResponse } from 'next/og';
import type { ArticleKey } from '@/lib/data/engineering-articles';
import { ENGINEERING_ARTICLES } from '@/lib/data/engineering-articles';
import { engineeringArtworkUri } from '@/lib/data/engineering-artwork';

export function articleShareImage(kind: ArticleKey) {
  const article = ENGINEERING_ARTICLES.find(item => item.key === kind)!;
  return new ImageResponse(<div style={{ width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#071013',color:'#faf9f7',padding:'55px 65px',fontFamily:'sans-serif',position:'relative' }}>
    {/* The identical original vector motif ties the card to the article. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={engineeringArtworkUri(kind)} alt="" width={790} height={569} style={{position:'absolute',right:-125,top:62,opacity:.85}} />
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, #071013 0%, rgba(7,16,19,0.97) 30%, rgba(7,16,19,0.3) 63%, rgba(7,16,19,0) 100%)'}} />
    <div style={{display:'flex',justifyContent:'space-between',fontSize:23,color:'#bbc3c7'}}><span>AImation</span><span>Engineering / Praxiswissen</span></div>
    <div style={{display:'flex',fontSize:17,color:'#bbc3c7',marginTop:85,letterSpacing:1}}>{article.tag}</div>
    <div style={{display:'flex',fontSize:64,fontWeight:700,lineHeight:1.08,letterSpacing:'-2px',marginTop:24,maxWidth:650}}>{article.shortTitle}</div>
    <div style={{display:'flex',fontSize:19,color:'#bbc3c7',marginTop:'auto',borderTop:'1px solid #334249',paddingTop:22}}>Mit interaktivem Beispiel · aimation.de/blog</div>
  </div>,{width:1200,height:630});
}
