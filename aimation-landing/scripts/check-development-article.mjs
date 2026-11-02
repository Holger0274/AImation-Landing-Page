import assert from 'node:assert/strict';
const base = new URL(process.argv[2] || 'http://localhost:3011');
const path = '/blog/ki-produktentwicklung-lastenheft-cad-fertigung';
async function get(route) {
  const response = await fetch(new URL(route,base), {redirect:'manual',signal:AbortSignal.timeout(30000)});
  assert.equal(response.status,200,route);
  return response;
}
const html=await (await get(path)).text();
const visible=html.replace(/<script\b[\s\S]*?<\/script>/g,'');
assert.equal((visible.match(/<h1\b/g)||[]).length,1);
assert.equal((visible.match(/<details\b/g)||[]).length,5,'Five accessible stages');
assert(!/—|–/.test(visible.replace(/<[^>]*>/g,'')));
assert(visible.includes('eigenständige Beispiele') && visible.includes('kein durchgängig entwickeltes Produkt'),'Honest demonstration scope');
const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
const blog=schemas.find(x=>x['@type']==='BlogPosting');
assert.equal(blog.datePublished,'2026-11-02');
assert.equal(blog.url,`https://www.aimation.de${path}`);
assert(blog.author['@id'].endsWith('#holger-peschke'));
const faq=schemas.find(x=>x['@type']==='FAQPage');
assert.equal(faq.mainEntity.length,3);
for(const q of faq.mainEntity) assert(visible.includes(q.acceptedAnswer.text.replaceAll('&','&amp;')),'FAQ rendered on server');
assert(html.includes(`<link rel="canonical" href="https://www.aimation.de${path}"`));
assert(!/hreflang=/i.test(html));
const en=await fetch(new URL(`/en${path}`,base),{redirect:'manual'});
assert.equal(en.status,307);assert.equal(new URL(en.headers.get('location'),base).pathname,path);
for(const [,anchor] of visible.matchAll(/href="#([^"]+)"/g)) assert(visible.includes(`id="${anchor}"`),anchor);
for(const source of ['https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/','https://www.nasa.gov/reference/6-5-configuration-management/','https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation']) assert(visible.includes(`href="${source}"`));
const linked=[...new Set([...visible.matchAll(/href="(\/(?:blog|ai2cad|ki-elektrik)[^"]*)"/g)].map(m=>m[1]))];
for(const target of linked) {
 const url=new URL(target,base); const body=await (await get(url.pathname)).text();
 if(url.hash) assert(body.includes(`id="${url.hash.slice(1)}"`),target);
}
for(const route of ['/blog','/ki-produktentwicklung','/blog/ki-cnc-drehprogramm-cad-cam','/blog/ki-schaltplan-erstellen-pruefen']) assert((await (await get(route)).text()).includes(`href="${path}"`),`Incoming link: ${route}`);
for(const route of ['/sitemap.xml','/llms.txt']) assert((await (await get(route)).text()).includes(path));
const image=await get(`${path}/opengraph-image`);
assert.match(image.headers.get('content-type'),/image\/png/);
const buffer=Buffer.from(await image.arrayBuffer());
assert.equal(buffer.readUInt32BE(16),1200);assert.equal(buffer.readUInt32BE(20),630);
console.log(`PASS: article, five stages, ${linked.length} internal destinations, FAQs, sources, date, metadata, image, discoverability and German-only fallback.`);
