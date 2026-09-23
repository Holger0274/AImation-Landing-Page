// Editable, deterministic diagrams. Run from aimation-landing with Node.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../public/images/editorial/', import.meta.url));
mkdirSync(output, { recursive: true });
const ink = '#eef1f3', muted = '#acb8c1', blue = '#8fa6b5', focus = '#c5d2da';
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const text = (x, y, value, size = 27, color = ink, anchor = 'start', weight = 500) => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(value)}</text>`;
const rect = (x, y, w, h, stroke = '#34434e', fill = '#101a20', radius = 16) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const line = (x1, y1, x2, y2, color = blue, arrow = false) => `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="3" ${arrow ? 'marker-end="url(#arrow)"' : ''}/>`;
const dot = (x, y, r = 7, color = focus) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const label = (x, y, rows, size = 27, color = ink, anchor = 'middle') => rows.map((row, i) => text(x, y + i * 34, row, size, color, anchor)).join('');
const doc = (x, y, w = 92, h = 110, color = blue) => rect(x, y, w, h, color, '#14212a', 7) + [0, 1, 2].map(i => line(x + 18, y + 30 + i * 23, x + w - 18 - (i === 2 ? 15 : 0), y + 30 + i * 23, color)).join('');
const part = (x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${blue}" stroke-width="3"><path d="M-60 -44 L26 -70 L76 -32 L76 43 L-10 70 L-60 30 Z M-60 -44 L-10 -6 L76 -32 M-10 -6 V70"/><ellipse cx="-31" cy="9" rx="16" ry="25" transform="rotate(-22 -31 9)"/><path d="M-46 -28 L-23 -35 M4 -43 L25 -50 M12 14 L53 1 M12 32 L53 19"/></g>`;
function save(name, title, subtitle, body, footer = 'Prinzipdarstellung · keine Produktoberfläche') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#8fb6db" stroke-opacity=".055"/></pattern><radialGradient id="glow"><stop stop-color="#21333d"/><stop offset="1" stop-color="#071013"/></radialGradient><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L8 5L1 9" fill="none" stroke="${blue}" stroke-width="1.5"/></marker></defs><rect width="960" height="540" fill="url(#glow)"/><rect width="960" height="540" fill="url(#grid)"/><g font-family="Arial, Helvetica, sans-serif">${text(40, 49, title, 22, muted)}${text(40, 92, subtitle, 32, ink, 'start', 600)}${body}${line(40, 483, 920, 483, '#34434e')}${text(40, 514, footer, 18, muted)}${text(920, 514, 'AImation', 19, ink, 'end')}</g></svg>`;
  writeFileSync(`${output}${name}.svg`, svg + '\n');
}

// Compact conceptual illustrations for every project card.
save('knowledge-graph', 'WISSENSSICHERUNG', 'Eine Antwort. Die Quellen bleiben sichtbar.',
  [[55, 145, 'Zeichnung'], [55, 245, 'Prüfbericht'], [55, 345, 'Protokoll']].map(([x,y,s]) => rect(x,y,220,72) + text(x+22,y+45,s) + line(x+220,y+36,405,276)).join('') +
  rect(405, 198, 180, 157, blue) + part(495, 260, .53) + text(495, 334, 'Bauteil', 25, ink, 'middle') + line(585,276,660,276,blue,true) +
  rect(680,171,230,218,focus) + text(705,214,'Antwort',30) + [0,1].map(i=>line(705,244+i*20,880-i*35,244+i*20,muted)).join('') + rect(700,310,190,51,'#536573') + text(795,344,'↗ Prüfbericht',23,ink,'middle'));

save('email-classification', 'TECHNISCHE ANFRAGEN', 'Aus der Anfrage wird ein geprüfter Entwurf.',
  rect(55,177,225,205) + `<path d="M90 215H245V309H90Z M90 215L167 270L245 215" fill="none" stroke="${blue}" stroke-width="3"/>` + text(167,355,'Anfrage + Anhang',22,ink,'middle') +
  line(280,280,365,280,blue,true) + rect(385,214,190,132,blue) + label(480,264,['Kontext','+ Entwurf']) + line(575,280,660,280,blue,true) +
  rect(680,177,225,205,focus) + `<path d="M750 250L776 276L834 216" fill="none" stroke="${blue}" stroke-width="6"/>` + label(792,330,['Mensch prüft','und sendet'],25));

save('patent-research', 'PATENTRECHERCHE', 'Merkmale vergleichen. Fundstellen belegen.',
  rect(55,144,310,285) + part(210,249,.95) + text(210,391,'Technisches Merkmal',24,ink,'middle') + line(366,285,455,285,blue,true) +
  [0,1,2].map(i => rect(480+i*18,155+i*17,370,225,i===2?blue:'#34434e') ).join('') +
  part(602,268,.6) + text(712,247,'Prior Art',29) + text(712,289,'Fundstelle',24,muted) + line(712,317,850,317,focus) + text(700,455,'Fachlich bewerten',27,ink,'middle'));

save('tech-scouting', 'TECHNOLOGIE-SCOUTING', 'Relevantes erkennen, bevor es untergeht.',
  [60,105,150].map(r=>`<circle cx="240" cy="292" r="${r}" fill="none" stroke="#466074" stroke-width="2"/>`).join('') +
  `<path d="M240 292L353 193 A150 150 0 0 1 384 331Z" fill="#8fb6db" opacity=".12"/>` + line(90,292,390,292,'#466074') + line(240,142,240,442,'#466074') + dot(309,227) + dot(168,319,6,blue) + dot(256,395,6,blue) +
  line(402,292,477,292,blue,true) + [[174,'Fachpublikation'],[270,'Neue Technologie'],[366,'Bezug zum Produkt']].map(([y,s])=>rect(505,y,393,70)+dot(535,y+35,5)+text(560,y+44,s,26)).join(''));

save('project-review-dashboard', 'PROJEKT-REVIEW', 'Was fehlt noch bis zur Freigabe?',
  [['Anforderung','geklärt'],['Nachweis','offen'],['Freigabe','prüfen']].map(([a,b],i)=>rect(55+i*300,166,250,240,i===1?focus:'#34434e') + text(180+i*300,217,a,28,ink,'middle') +
  (i===0?`<path d="M145 279L170 306L220 252" fill="none" stroke="${blue}" stroke-width="5"/>`:i===1?doc(144+i*300,247,72,78):`<circle cx="${180+i*300}" cy="282" r="36" fill="none" stroke="${blue}" stroke-width="3"/>`) + text(180+i*300,378,b,27,ink,'middle')).join(''));

save('customer-preparation', 'GESPRÄCHSVORBEREITUNG', 'Der Projektstand liegt vor dem Termin bereit.',
  ['Anforderung','Offene Punkte','Letztes Protokoll'].map((s,i)=>rect(50,145+i*99,280,70)+text(75,190+i*99,s,25)+line(330,180+i*99,433,280)).join('') + line(433,280,500,280,blue,true) +
  rect(525,143,365,291,blue) + text(558,189,'Briefing',32) + ['Stand der Entwicklung','Zu klärende Fragen','Quellen zum Nachlesen'].map((s,i)=>dot(558,239+i*60,5)+text(580,247+i*60,s,24)).join(''));

save('audit-documentation', 'DOKUMENTENANALYSE', 'Jede Anforderung erhält einen Nachweis.',
  doc(65,174,180,230) + line(260,290,365,290,blue,true) + rect(390,153,510,282) +
  ['Anforderung','Quelle','Prüfung'].map((s,i)=>text(418+i*165,201,s,23,muted)) +
  [0,1,2].map(i=>line(418,248+i*65,535,248+i*65,muted)+text(590,257+i*65,'↗',30,blue)+text(787,257+i*65,i===1?'offen':'belegt',24,i===1?focus:ink)).join(''));

save('meeting-transcript', 'BESPRECHUNGEN', 'Aus Gesagtem werden Aufgaben mit Kontext.',
  rect(50,181,305,196) + Array.from({length:23},(_,i)=>{const h=18+Math.abs(Math.sin(i*1.7))*86;return line(73+i*11,277-h/2,73+i*11,277+h/2,blue)}).join('') + text(202,349,'Gespräch',25,ink,'middle') +
  line(360,278,470,278,blue,true) + ['Entscheidung','Aufgabe + Verantwortliche','Offene Frage'].map((s,i)=>rect(500,150+i*100,408,75,i===1?blue:'#34434e')+text(526,198+i*100,s,25)).join(''));

save('multi-agent-debate', 'KONZEPTPRÜFUNG', 'Drei Perspektiven auf dieselbe Idee.',
  [[75,149,'Technik'],[75,260,'Kosten'],[75,371,'Risiken']].map(([x,y,s])=>rect(x,y,220,70)+text(x+110,y+44,s,28,ink,'middle')+line(x+220,y+35,460,297)).join('')+
  rect(460,222,175,150,blue)+part(550,272,.45)+text(548,344,'Konzept',25,ink,'middle')+line(635,297,705,297,blue,true)+rect(725,222,190,150,focus)+label(820,277,['Abwägen','+ Entscheiden'],24));

save('competitor-benchmark', 'WETTBEWERBSVERGLEICH', 'Die Unterschiede werden nachvollziehbar.',
  rect(65,157,825,278) + ['Merkmal','Produkt A','Produkt B'].map((s,i)=>text(95+i*282,204,s,27,i===0?muted:ink)) +
  ['Funktion','Schnittstelle','Datenquelle'].map((s,i)=>text(95,270+i*64,s,27,muted)+text(390,270+i*64,i===2?'↗ Quelle':'belegt',26)+text(675,270+i*64,i===1?'offen':i===2?'↗ Quelle':'belegt',26)).join(''));

save('innovation-dashboard', 'IDEENBEWERTUNG', 'Machbarkeit und Nutzen zusammen prüfen.',
  line(100,411,570,411,blue,true)+line(100,411,100,153,blue,true)+text(335,450,'Machbarkeit',24,muted,'middle')+text(115,150,'Nutzen',24,muted)+
  `<path d="M335 173V411 M100 287H550" stroke="#466074" stroke-width="2" stroke-dasharray="7 8"/>`+dot(440,222,12)+dot(211,349,10,blue)+dot(247,213,10,blue)+
  rect(620,184,280,218,focus)+label(650,232,['Idee prüfen','Datenlage klären','Pilot festlegen'],27,ink,'start'));

save('analysis-tools', 'KUNDENBEDARF', 'Von der Aussage zur prüfbaren Anforderung.',
  rect(50,181,255,204)+text(78,233,'„',68,blue)+label(177,267,['Was muss','das Produkt','leisten?'],26)+
  line(306,286,360,286,blue,true)+rect(380,215,205,144,blue)+label(482,272,['Bedarf','verstehen'],27)+
  line(587,286,642,286,blue,true)+rect(665,181,245,204,focus)+label(787,247,['Anforderung','+ Kriterium','+ Nachweis'],26));

// Editorial explanatory images: no invented statistics or product screenshots.
save('blog-fundament', 'KI-PROJEKTE', 'Das Modell steht auf einem Fundament.',
  [['KI-Anwendung',270,160,420],['Prozess + Verantwortung',180,248,600],['Daten + Zugriffsrechte + Qualität',80,336,800]].map(([s,x,y,w],i)=>rect(x,y,w,72,i===0?focus:blue)+text(480,y+46,s,28,ink,'middle')).join(''));

save('blog-roadmap', 'KI-EINFÜHRUNG', 'Lernen verändert den nächsten Schritt.',
  line(100,186,865,186,'#52636f')+text(100,157,'Plan',24,muted)+
  `<path d="M100 365 C240 170 310 440 435 305 S535 460 670 305 S780 265 865 365" fill="none" stroke="${blue}" stroke-width="4" marker-end="url(#arrow)"/>`+
  [[100,365,'Start'],[435,305,'Pilot'],[670,305,'Lernen'],[865,365,'Anpassen']].map(([x,y,s])=>dot(x,y,9)+text(x,y+53,s,26,ink,'middle')).join(''));

save('blog-rice', 'PRIORISIERUNG', 'Wirkung und Aufwand gemeinsam bewerten.',
  ['Reach','Impact','Confidence'].map((s,i)=>rect(60+i*302,159,237,91)+text(178+i*302,216,s,31,ink,'middle')+(i<2?text(329+i*302,216,'×',31,blue,'middle'):'')).join('')+
  line(80,285,880,285,blue)+rect(340,320,280,95,focus)+text(480,380,'Effort',33,ink,'middle'));

save('blog-methods', 'BEWERTUNGSMETHODEN', 'Die Methode muss zur Entscheidung passen.',
  [['Impact / Effort','Nutzen und Aufwand'],['WSJF','Kosten des Wartens'],['AI-Feasibility','Technische Machbarkeit'],['Weighted Scoring','Gewichtete Kriterien']].map(([a,b],i)=>{const x=50+(i%2)*445,y=149+Math.floor(i/2)*148;return rect(x,y,415,128,i===2?blue:'#34434e')+text(x+26,y+46,a,28)+text(x+26,y+91,b,23,muted)}).join(''));

save('blog-prompts', 'PROMPT ENGINEERING', 'Ein klarer Auftrag liefert prüfbare Ergebnisse.',
  ['Aufgabe','Kontext','Ausgabeformat','Prüfkriterium'].map((s,i)=>rect(65,141+i*78,365,63)+text(91,182+i*78,s,26)).join('')+
  line(446,290,539,290,blue,true)+doc(590,170,270,252)+rect(614,267,222,59,focus)+text(725,306,'Prüfbare Antwort',24,ink,'middle'));

save('blog-stages', 'KI-NUTZUNG', 'Sechs Stufen. Der nächste Schritt zählt.',
  [['Prompting',''],['Custom','GPTs'],['Auto-','matisierung'],['KI im','Workflow'],['KI-','Agenten'],['Multi-','Agenten']].map((rows,i)=>{const x=45+i*150,y=340-i*34;return rect(x,y,132,430-y,i===5?focus:'#466074')+text(x+66,y-23,String(i+1).padStart(2,'0'),30,blue,'middle')+label(x+66,y+35,rows,20)}).join(''), 'Schematische Einordnung · kein gemessener Nutzen');

save('blog-shadow', 'KI-GOVERNANCE', 'Daten brauchen einen freigegebenen Weg.',
  doc(60,207,140,166)+text(130,412,'Firmendaten',26,ink,'middle')+line(209,288,325,288,blue,true)+
  rect(346,147,253,108)+label(472,190,['Privates Tool','Zugriff ungeklärt'],25)+rect(346,326,253,108,blue)+label(472,370,['Freigegebenes Tool','Klare Regeln'],25)+
  `<path d="M280 288V200H330 M280 288V380H330" fill="none" stroke="${blue}" stroke-width="3"/>`+
  line(599,380,680,380,blue,true)+rect(700,326,205,108,focus)+label(802,370,['Kontrollierte','Verarbeitung'],24));

save('blog-cad', 'KI IN DER KONSTRUKTION', 'Vom Entwurf zum fachlich geprüften Bauteil.',
  rect(50,150,260,270)+part(180,260,.95)+text(180,394,'Geometrie',27,ink,'middle')+line(311,285,355,285,blue,true)+
  rect(376,202,215,165,blue)+label(483,253,['KI unterstützt','Entwurf +','Recherche'],25)+line(592,285,641,285,blue,true)+
  rect(663,150,250,270,focus)+doc(739,184,92,108)+label(788,337,['Ingenieur prüft','und verantwortet'],24));

// Expanded principle views on the three use-case detail pages.
save('knowledge-detail', 'BEISPIEL: ENTWICKLUNGSWISSEN', 'Warum wurde das Bauteil geändert?',
  rect(50,146,410,293,blue)+text(80,194,'Frage zum Bauteil',28)+part(155,292,.75)+label(325,276,['Änderung','nachvollziehen'],24)+
  line(463,292,515,292,blue,true)+rect(535,146,374,293,focus)+text(562,196,'Antwort mit Belegen',28)+
  ['Änderungsgrund','↗ Prüfbericht','↗ Freigabeprotokoll'].map((s,i)=>text(566,265+i*62,s,26,i===0?ink:muted)).join(''), 'Illustratives Beispiel · keine tatsächliche Projektentscheidung');
save('request-detail', 'BEISPIEL: TECHNISCHE ANFRAGE', 'Die Antwort bleibt eine fachliche Entscheidung.',
  [['Eingang','Anhang erfassen'],['Vorbereitung','Kontext + Entwurf'],['Freigabe','Mensch entscheidet']].map(([a,b],i)=>rect(50+i*305,175,250,231,i===2?focus:blue)+text(175+i*305,226,a,29,ink,'middle')+doc(141+i*305,249,68,72)+text(175+i*305,378,b,22,ink,'middle')+(i<2?line(307+i*305,285,342+i*305,285,blue,true):'')).join(''));
save('patent-detail', 'BEISPIEL: PRIOR ART', 'Treffer allein sind noch keine Bewertung.',
  [['Merkmal','Was wird gesucht?'],['Fundstelle','Wo ist es belegt?'],['Einordnung','Was bedeutet es?']].map(([a,b],i)=>rect(50+i*305,168,250,247,i===2?focus:blue)+text(175+i*305,219,a,29,ink,'middle')+(i===0?part(175+i*305,288,.55):doc(137+i*305,249,76,80))+text(175+i*305,382,b,22,ink,'middle')+(i<2?line(307+i*305,285,342+i*305,285,blue,true):'')).join(''), 'Prinzipdarstellung · Fundstellen fachlich einordnen');

save('blog-methods-detail', 'WELCHE METHODE PASST?', 'Beginnen Sie mit Ihrer Entscheidungsfrage.',
  [['Nutzen je Aufwand?','Impact / Effort'],['Was kostet Warten?','WSJF'],['Ist KI technisch geeignet?','AI-Feasibility'],['Mehrere Ziele abwägen?','Weighted Scoring']].map(([a,b],i)=>rect(50,137+i*79,860,67)+text(77,180+i*79,a,27)+line(509,170+i*79,559,170+i*79,blue,true)+text(590,180+i*79,b,27)).join(''));
save('blog-stages-detail', 'SECHS ANWENDUNGSSTUFEN', 'Welche Arbeitsweise passt zur Aufgabe?',
  [['01','Prompting','Einzelne Frage'],['02','Custom GPTs','Fester Kontext'],['03','Automatisierung','Definierter Ablauf'],['04','KI im Workflow','Inhalte verarbeiten'],['05','KI-Agenten','Schritte selbst planen'],['06','Multi-Agenten','Rollen zusammenführen']].map(([n,a,b],i)=>{const x=42+(i%3)*306,y=151+Math.floor(i/3)*154;return rect(x,y,284,135)+text(x+22,y+32,n,20,blue)+text(x+22,y+70,a,25)+text(x+22,y+107,b,20,muted)}).join(''), 'Schematische Einordnung · kein gemessener Nutzen');
console.log('Generated 25 editorial SVG diagrams.');
