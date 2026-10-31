import { ImageResponse } from 'next/og';
import type { ArticleKey } from '@/lib/data/engineering-articles';
import { ENGINEERING_ARTICLES } from '@/lib/data/engineering-articles';

export function articleShareImage(kind: ArticleKey) {
  const article = ENGINEERING_ARTICLES.find(item => item.key === kind)!;
  const steps = kind === 'requirements' ? ['Lastenheft', 'Prüfhinweise', 'Fachliche Klärung'] : kind === 'knowledge' ? ['Quelle', 'Version & Rechte', 'Belegte Antwort'] : ['Änderungsantrag', 'Abhängigkeiten', 'Fachliche Bewertung'];
  return new ImageResponse(<div style={{ width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#071013',color:'#faf9f7',padding:'62px 70px',fontFamily:'sans-serif' }}>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:24,color:'#bbc3c7'}}><span>AImation</span><span>KI in der technischen Produktentwicklung</span></div>
    <div style={{display:'flex',fontSize:66,fontWeight:700,lineHeight:1.1,letterSpacing:'-2px',marginTop:65,maxWidth:1030}}>{article.shortTitle}</div>
    <div style={{display:'flex',alignItems:'center',gap:18,marginTop:65}}>{steps.map((step,index)=><div style={{display:'flex',alignItems:'center',gap:18}} key={step}><div style={{display:'flex',flexDirection:'column',border:'1px solid #69767e',borderRadius:12,padding:'22px 25px',minWidth:280}}><span style={{fontSize:16,color:'#aab5bb',marginBottom:12}}>0{index+1}</span><span style={{fontSize:25}}>{step}</span></div>{index<2&&<span style={{fontSize:30,color:'#60afff'}}>→</span>}</div>)}</div>
    <div style={{display:'flex',fontSize:20,color:'#bbc3c7',marginTop:'auto'}}>Fachartikel mit interaktivem Beispiel · aimation.de/blog</div>
  </div>,{width:1200,height:630});
}
