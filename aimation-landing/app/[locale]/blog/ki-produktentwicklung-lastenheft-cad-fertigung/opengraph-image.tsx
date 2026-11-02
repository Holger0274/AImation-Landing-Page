import { ImageResponse } from 'next/og';
import { PRODUCT_DEVELOPMENT_ARTICLE as article, journeyArtworkUri } from '@/lib/data/product-development-article';
export const alt = 'KI in der Produktentwicklung: Anforderungen, Wissen, CAD, CAM und Prüfung';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',padding:'50px 60px',background:'#071013',color:'#faf9f7',fontFamily:'sans-serif',position:'relative'}}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={journeyArtworkUri()} alt="" width={700} height={504} style={{position:'absolute',right:-100,top:130,opacity:.6}} />
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,#071013 15%,rgba(7,16,19,.95) 40%,rgba(7,16,19,.15) 100%)'}} />
    <div style={{display:'flex',justifyContent:'space-between',fontSize:23,color:'#bbc3c7'}}><span>AImation</span><span>Engineering-Perspektive</span></div>
    <div style={{display:'flex',marginTop:74,fontSize:18,color:'#bbc3c7'}}>KI in der Produktentwicklung</div>
    <div style={{display:'flex',fontSize:60,fontWeight:700,lineHeight:1.1,letterSpacing:'-2px',marginTop:20,maxWidth:730}}>{article.shortTitle}</div>
    <div style={{display:'flex',marginTop:'auto',paddingTop:22,borderTop:'1px solid #334249',fontSize:19,color:'#bbc3c7'}}>Holger Peschke · Mit Entwicklungskette und eigenen Demos</div>
  </div>,size);
}
