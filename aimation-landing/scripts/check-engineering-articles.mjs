import assert from 'node:assert/strict';
const base = new URL(process.argv[2] || 'http://localhost:3011');
const slugs = ['ki-lastenheft-anforderungen-pruefen','rag-engineering-wissen-versionen-quellen','ki-aenderungsmanagement-produktentwicklung'];
async function get(path) {
  const response = await fetch(new URL(path,base),{redirect:'manual',signal:AbortSignal.timeout(20000)});
  assert.equal(response.status,200,path);
  return response;
}
const overview = await (await get('/blog')).text();
const sitemap = await (await get('/sitemap.xml')).text();
const llms = await (await get('/llms.txt')).text();
const previous = ['prozessdokumentation-ki-transkript','ki-roadmap-illusion-mittelstand','bewertungsmethoden-ki-projekte','ki-projekte-priorisierung-rice','ki-projekte-scheitern-fundament','ki-cad-zukunft-jetzt-starten','ki-prompts-die-wirklich-funktionieren','6-stufen-ki-nutzung','schatten-ki-unternehmen'];
for(const slug of previous) assert(overview.includes(`href="/blog/${slug}"`),`Existing article lost: ${slug}`);
for(const slug of slugs) {
  const path = `/blog/${slug}`;
  const response = await get(path);
  const html = await response.text();
  const visible = html.replace(/<script\b[\s\S]*?<\/script>/g,'');
  const source = slug.startsWith('rag-') ? 'https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation' : slug.includes('lastenheft') ? 'https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/' : 'https://www.nasa.gov/reference/6-5-configuration-management/';
  assert(visible.includes(`href="${source}"`), 'Linked primary source');
  assert.equal((visible.match(/<h1\b/g)||[]).length,1,`${path}: H1`);
  assert(visible.includes('Fiktive Daten, redaktionell hinterlegte Beispiele.'), 'Honest interactive scope');
  assert.equal((visible.match(/aria-pressed="(?:true|false)"/g)||[]).length,3,'Three example choices');
  assert(!/—|–/.test(visible.replace(/<[^>]*>/g,'')), 'No em dash copy');
  const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const blog=schemas.find(s=>s['@type']==='BlogPosting');
  assert(blog && blog.url.endsWith(path),'Article schema URL');
  assert.equal(blog.datePublished,'2026-10-31','Actual publication date');
  assert(blog.author['@id'].endsWith('#holger-peschke'),'Known author entity');
  const faq=schemas.find(s=>s['@type']==='FAQPage');
  assert.equal(faq.mainEntity.length,3,'Three FAQs');
  for(const q of faq.mainEntity) assert(visible.includes(q.acceptedAnswer.text.replaceAll('&','&amp;')),'FAQ answers in server HTML');
  assert(schemas.some(s=>s['@type']==='BreadcrumbList'),'Breadcrumb schema');
  assert(overview.includes(`href="${path}"`) && sitemap.includes(`<loc>https://www.aimation.de${path}</loc>`) && llms.includes(path),'Discovery in blog, sitemap, llms');
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  assert.equal(canonical,`https://www.aimation.de${path}`);
  assert(!/hreflang=/i.test(html),'Do not advertise an absent English translation');
  const en=await fetch(new URL(`/en${path}`,base),{redirect:'manual'});
  assert.equal(en.status,307,'German-only blog fallback');
  assert.equal(new URL(en.headers.get('location'),base).pathname,path);
  const img=await get(`${path}/opengraph-image`);
  assert.match(img.headers.get('content-type'),/image\/png/);
  const data=Buffer.from(await img.arrayBuffer());
  assert.equal(data.readUInt32BE(16),1200); assert.equal(data.readUInt32BE(20),630);
  for(const [,anchor] of visible.matchAll(/href="#([^"]+)"/g)) assert(visible.includes(`id="${anchor}"`),`Missing anchor ${anchor}`);
  console.log(`OK ${path}: article, FAQs, interactive examples, metadata, share image and links`);
}
console.log('PASS: three new articles, nine existing articles retained, actual dates, primary sources, discoverability and German-only routing.');
