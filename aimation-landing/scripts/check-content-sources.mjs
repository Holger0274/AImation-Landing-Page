// Read-only editorial drift check. No uploads, source edits or automatic publishing.
// Usage: npm run check:content -- [path-to-Development-Landscape] [path-to-Learing-Mats]
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const landscape = resolve(process.argv[2] || resolve(app, '../../Development Landscape'));
const learning = resolve(process.argv[3] || resolve(app, '../../Learing Mats'));
const read = path => readFileSync(path, 'utf8');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

try {
  const local = read(resolve(app, 'lib/data/engineering-landscape.ts'));
  const folder = resolve(landscape, 'src/content/usecases');
  const records = readdirSync(folder).filter(name => name.endsWith('.json')).flatMap(name => JSON.parse(read(resolve(folder, name))));
  const snapshot = local.match(/cases: (\d+), areas: (\d+)/);
  check(snapshot && records.length === Number(snapshot[1]), 'Kataloggröße hat sich geändert. Snapshot prüfen.');
  check(snapshot && new Set(records.map(record => `${record.ebene}--${record.bereich}`)).size === Number(snapshot[2]), 'Anzahl der Katalogbereiche hat sich geändert.');
  const ids = new Set(records.map(record => record.id));
  const selectedIds = [...local.matchAll(/id: '([^']+--[^']+)'/g)].map(match => match[1]);
  check(selectedIds.length === 12, 'Erwartet werden zwölf kuratierte Fälle.');
  for (const id of selectedIds) check(ids.has(id), `Katalogfall fehlt: ${id}`);
  const paths = read(resolve(app, 'lib/data/application-paths.ts'));
  for (const match of paths.matchAll(/(?:quality|cost|timing): '([^']+)'/g)) check(selectedIds.includes(match[1]), `QKT-Ziel fehlt in der Website-Auswahl: ${match[1]}`);

  const courses = read(resolve(app, 'lib/data/training.ts'));
  const portal = read(resolve(learning, 'Schulungen/portal.html'));
  const courseEntries = [...courses.matchAll(/id: '([^']+)', modules: (\d+), de: \['([^']+)'/g)];
  check(courseEntries.length === 6, 'Erwartet werden sechs verfügbare Lernreihen.');
  for (const [, , count, title] of courseEntries) {
    const start = portal.indexOf(`<h4>${title}</h4>`);
    const card = start < 0 ? '' : portal.slice(start, start + 700).split('</article>')[0];
    const foundCount = card.match(/<b>(\d+)<\/b>\s*<span>Module/)?.[1]
      ?? card.match(/>(\d+) Module/)?.[1]
      ?? card.match(/>(\d+) von \d+ Modulen fertig/)?.[1];
    check(start >= 0 && foundCount === count, `Lernreihe oder Modulzahl abweichend: ${title}`);
  }
  const lesson = read(resolve(learning, 'Schulungen/microsoft-365-copilot/modul-1-kickoff-ki-grundlagen/1-2-grundlagen-des-promptens/veredelung/bloecke.md'));
  check(['Rolle', 'Ziel', 'Kontext', 'Format'].every(part => lesson.includes(part)), 'Die Quelle der Prompting-Lernprobe hat sich geändert.');
  const courseIds = courseEntries.map(match => match[1]);
  for (const match of paths.matchAll(/course: '([^']+)'/g)) check(courseIds.includes(match[1]), `Unbekannter Kursverweis: ${match[1]}`);

  const references = read(resolve(landscape, 'src/data/referenzen.ts'));
  const projects = read(resolve(app, 'components/sections/EngineeringProjects.tsx'));
  for (const [sourceId, localId, status, label] of [
    ['5why', '5why', 'fertig', 'Fertig gebaut'],
    ['fem-visualizer', 'fem', 'fertig', 'Fertig gebaut'],
    ['ideenrat', 'ideas', 'erprobung', 'In Erprobung'],
  ]) {
    const source = references.split(`id: '${sourceId}',`)[1]?.split('\n  },')[0] || '';
    const target = projects.split(`id: '${localId}',`)[1]?.split('\n')[0] || '';
    check(source.includes(`status: '${status}'`) && target.includes(`'${label}'`), `Werkzeugstatus prüfen: ${sourceId}`);
  }
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('OK: Katalogumfang, 12 Quell-IDs, 3 QKT-Ziele, 6 Lernreihen/Modulzahlen, Kursverweise und 3 Werkzeugstatus stimmen überein.');
    console.log('Kein vollständiger Faktencheck: Texte, Lektionen und Screenshots weiterhin redaktionell prüfen.');
  }
} catch (error) {
  console.error(`Quellencheck nicht möglich: ${error.message}`);
  console.error('Die beiden lokalen Quellprojekte müssen vorhanden sein. Optional deren Pfade als Argumente angeben.');
  process.exitCode = 1;
}
