import type { ArticleKey } from './engineering-articles';

// Original vector illustrations, shared by article headers, interactive figures and social images.
// No external assets, fonts, scripts or technical design data are embedded.
export function engineeringArtworkSvg(kind: ArticleKey, variant = 0): string {
  const line = '#a7b6bc';
  const blue = '#60afff';
  const text = (x: number, y: number, value: string, size = 15, opacity = 1) => `<text x="${x}" y="${y}" fill="#faf9f7" opacity="${opacity}" font-size="${size}" font-family="monospace" letter-spacing="2">${value}</text>`;
  const dots = [[80,90],[920,90],[80,630],[920,630]].map(([x,y])=>`<path d="M${x-9} ${y}h18M${x} ${y-9}v18" stroke="${line}" opacity=".4"/>`).join('');
  const grid = `<path d="M0 120H1000M0 240H1000M0 360H1000M0 480H1000M0 600H1000M140 0V720M280 0V720M420 0V720M560 0V720M700 0V720M840 0V720" stroke="${line}" opacity=".075"/>`;
  const plate = (x: number, y: number, ghost = false) => `<g transform="translate(${x} ${y})" ${ghost ? 'opacity=".35" stroke-dasharray="7 7"' : ''}>
    <path d="M0 160L270 0L560 145L290 310Z" fill="${ghost ? 'none' : 'url(#metal)'}" stroke="${ghost ? line : '#d6dfe1'}" stroke-width="2"/>
    ${!ghost ? `<path d="M0 160v28l290 150v-28M290 338l270-165v-28" fill="#182327" stroke="${line}" stroke-width="1.5"/>` : ''}
    <g fill="#071013" stroke="${ghost ? line : blue}" stroke-width="2">${[[125,164],[267,80],[300,249],[443,165]].map(([cx,cy])=>`<ellipse cx="${cx}" cy="${cy}" rx="31" ry="17"/>`).join('')}</g>
    <path d="M70 160l220 112 214-128M270 35v50M260 80h35M286 226v46M275 249h47" fill="none" stroke="${line}" opacity=".4"/>
  </g>`;
  let drawing = '';
  if (kind === 'changes') {
    drawing = `${text(150,104,'H-204 / REVISION C',17,.7)}${text(150,135,'SCHEMATISCHE DARSTELLUNG',11,.4)}
      <g opacity="${variant === 2 ? '.4' : '1'}">${plate(200,315,true)}${plate(200,170)}
      <path d="M325 480V334M643 480V335M470 315V170" stroke="${blue}" opacity=".45" stroke-dasharray="4 7"/>
      <path d="M300 570l140 73 260-156" stroke="${line}" fill="none" opacity=".6"/>
      <path d="M300 560v22M440 632v22M700 476v22" stroke="${line}" opacity=".6"/>
      ${variant === 1 ? `<path d="M510 225l135 68-75 45-136-68Z" fill="url(#hatch)" stroke="${blue}" stroke-width="2"/>${text(652,250,'A / B',21)}` : `<ellipse cx="643" cy="335" rx="49" ry="29" stroke="${blue}" fill="none" stroke-width="2"/><path d="M679 314l93-70h100" fill="none" stroke="${blue}"/>${text(779,231,'80 / 84',21)}`}
      </g>${variant === 2 ? `<circle cx="500" cy="350" r="62" fill="#071013" stroke="${line}" stroke-dasharray="5 7"/>${text(480,372,'?',60)}${text(360,620,'ZUORDNUNG OFFEN',19)}` : text(155,632,variant === 1 ? 'WERKSTOFFVERGLEICH' : 'GEOMETRIEVERGLEICH',13,.65)}`;
  } else if (kind === 'requirements') {
    const row = variant === 0 ? 0 : variant === 1 ? 1 : 2;
    drawing = `<g transform="translate(340 92) rotate(7 240 260)">
      <rect width="490" height="520" rx="3" fill="#101b1f" stroke="${line}" stroke-opacity=".65"/>
      <path d="M24 24h442v472H24Z M24 432h442M260 432v64M24 466h442" fill="none" stroke="${line}" opacity=".3"/>
      ${text(42,56,'H-204',19)}${text(282,461,'REV. C',15,.7)}${text(42,489,'ANSICHT / SCHEMA',12,.5)}
      <path d="M104 140h252v190H104Z M148 140v190M312 140v190" fill="url(#metal)" stroke="#d6dfe1" stroke-width="2"/>
      <g fill="#071013" stroke="${blue}" stroke-width="2"><circle cx="180" cy="184" r="17"/><circle cx="280" cy="184" r="17"/><circle cx="180" cy="284" r="17"/><circle cx="280" cy="284" r="17"/></g>
      <path d="M180 113V92M280 113V92M180 103H280M174 96l12 14M274 96l12 14M380 140h24M380 330h24M394 140v190M387 147l14-14M387 337l14-14" fill="none" stroke="${line}"/>
      <path d="M82 235h294M230 121v230" stroke="${line}" stroke-dasharray="10 7" opacity=".4"/>
      ${text(211,88,'?',22)}${text(410,245,'?',22)}
    </g>
    <g transform="translate(106 290) rotate(-6 180 150)">
      <rect x="12" y="16" width="360" height="292" rx="8" fill="#071013" stroke="${line}" opacity=".25"/>
      <rect width="360" height="292" rx="8" fill="#172227" stroke="${line}" stroke-opacity=".8"/>
      ${text(30,44,'LASTENHEFT',18)}${text(30,74,'PRUEFAUSSCHNITT',10,.5)}
      ${[0,1,2].map((i)=>`<rect x="20" y="${98+i*55}" width="320" height="43" rx="3" fill="${row===i ? '#60afff' : '#faf9f7'}" fill-opacity="${row===i ? '.1' : '.025'}" stroke="${row===i ? blue : line}" stroke-opacity="${row===i ? '.9' : '.18'}"/>${text(34,125+i*55,['LH-017','LH-028 / LH-041','LH-063'][i],14,row===i?1:.5)}<path d="M257 ${119+i*55}h60" stroke="${row===i ? blue : line}" opacity=".5"/>`).join('')}
    </g><path d="M445 411l95-48h103" fill="none" stroke="${blue}" stroke-width="2"/><circle cx="643" cy="363" r="5" fill="${blue}"/>`;
  } else {
    const doc = (x: number, y: number, title: string, sub: string, faded = false) => `<g transform="translate(${x} ${y})" opacity="${faded ? '.28' : '1'}"><rect x="10" y="12" width="205" height="164" rx="7" fill="#071013" stroke="${line}" opacity=".35"/><rect width="205" height="164" rx="7" fill="url(#metal)" stroke="${line}"/><path d="M24 25h23l12 12v30H24Z M47 25v14h12" fill="none" stroke="${blue}"/>${text(24,99,title,15)}${text(24,127,sub,12,.6)}<path d="M24 144h90" stroke="${line}" opacity=".3"/></g>`;
    drawing = `<circle cx="515" cy="360" r="241" stroke="${line}" stroke-opacity=".15" fill="none" stroke-dasharray="2 12"/><circle cx="515" cy="360" r="164" stroke="${line}" stroke-opacity=".12" fill="none"/>
      <g fill="none" stroke="${variant===2 ? line : blue}" stroke-width="2" opacity=".65" ${variant>0 ? 'stroke-dasharray="6 8"' : ''}><path d="M300 215h90l125 145M724 215h-89L515 360M320 525h80l115-165M719 527h-88L515 360"/></g>
      ${doc(95,108,'AA-042','REV. C',variant===2)}${doc(705,108,'V-118','REV. C',variant===2)}${doc(115,470,'H-204',variant===1?'WERKSTOFF A':'REV. C',variant===2)}${doc(699,470,'FUNDSTELLE','QUELLENBEZUG',variant>0)}
      <circle cx="515" cy="360" r="77" fill="#111d22" stroke="${blue}" stroke-opacity=".65" stroke-width="2"/><circle cx="515" cy="360" r="91" fill="none" stroke="${line}" stroke-opacity=".3"/>
      ${variant===2 ? `<path d="M495 353v-17a20 20 0 0 1 40 0v17M488 353h54v43h-54Z" fill="none" stroke="#faf9f7" stroke-width="3"/><circle cx="515" cy="372" r="4" fill="#faf9f7"/>` : variant===1 ? `${text(503,375,'?',44)}` : `${text(480,355,'REV.',17)}${text(503,389,'C',29)}`}
      ${text(373,77,'QUELLEN / KONTEXT',17,.6)}${text(400,665,variant===2?'ZUGRIFF PRUEFEN':variant===1?'WIDERSPRUCH':'BELEGE ZUORDNEN',14,.7)}`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="720" viewBox="0 0 1000 720"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#334249"/><stop offset=".48" stop-color="#19262c"/><stop offset="1" stop-color="#0c171c"/></linearGradient><pattern id="hatch" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M-3 3l6-6M0 12L12 0M9 15l6-6" stroke="#60afff" stroke-opacity=".6"/></pattern></defs>${grid}${dots}${drawing}</svg>`;
}

export function engineeringArtworkUri(kind: ArticleKey, variant = 0): string {
  return `data:image/svg+xml;base64,${btoa(engineeringArtworkSvg(kind, variant))}`;
}
