import assert from 'node:assert/strict';
const base = new URL(process.argv[2] || 'http://localhost:3011');
async function get(path) {
  const response = await fetch(new URL(path, base), { redirect:'manual', signal:AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, path);
  return response;
}
const [overview, sitemap, llms] = await Promise.all(['/blog','/sitemap.xml','/llms.txt'].map(async p => (await get(p)).text()));
const cases = [
  {slug:'ki-cnc-drehprogramm-cad-cam', watches:['/ai2cad/cnc-drehprogramm'], source:'https://help.autodesk.com/view/fusion360/ENU/?contextId=MFG-POST-PROCESS-OPERATIONS'},
  {slug:'ki-schaltplan-erstellen-pruefen', watches:['/ki-elektrik/schaltplan-motorabgang','/ki-elektrik/kurzschluss-wendeschuetz'], source:'https://www.eplan.help/en-US/Infoportal/Content/Plattform/2027/Content/htm/msgmanagementgui_h_prueflauf.htm'},
];
for (const {slug,watches,source} of cases) {
  const path = `/blog/${slug}`;
  const html = await (await get(path)).text();
  const visible = html.replace(/<script\b[\s\S]*?<\/script>/g,'');
  assert.equal((visible.match(/<h1\b/g)||[]).length,1);
  assert.equal((visible.match(/<details\b/g)||[]).length,3,'Three native accessible steps');
  assert(visible.includes(`href="${source}"`),'Primary source is linked');
  assert(!/—|–/.test(visible.replace(/<[^>]*>/g,'')),'No em dash');
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const blog = schemas.find(s=>s['@type']==='BlogPosting');
  assert.equal(blog.datePublished,'2026-11-01');
  assert.equal(blog.url,`https://www.aimation.de${path}`);
  assert(blog.author['@id'].endsWith('#holger-peschke'));
  const faq=schemas.find(s=>s['@type']==='FAQPage');
  assert.equal(faq.mainEntity.length,3);
  for(const q of faq.mainEntity) assert(visible.includes(q.acceptedAnswer.text.replaceAll('&','&amp;')),'SSR FAQ content matches schema');
  assert(!schemas.some(s=>s['@type']==='VideoObject'),'Watch pages remain the video destinations');
  assert(html.includes(`<link rel="canonical" href="https://www.aimation.de${path}"`));
  assert(!/hreflang=/i.test(html),'No absent translation advertised');
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html));
  const en = await fetch(new URL(`/en${path}`,base),{redirect:'manual'});
  assert.equal(en.status,307); assert.equal(new URL(en.headers.get('location'),base).pathname,path);
  for (const watch of watches) {
    assert(visible.includes(`href="${watch}`),'Article links to video');
    const watchHtml = await (await get(watch)).text();
    assert(watchHtml.includes(`href="${path}"`),'Video links back to article');
  }
  assert(overview.includes(`href="${path}"`) && sitemap.includes(`<loc>https://www.aimation.de${path}</loc>`) && llms.includes(path),'Listed in blog, sitemap and llms');
  for(const [,anchor] of visible.matchAll(/href="#([^"]+)"/g)) assert(visible.includes(`id="${anchor}"`),`Missing anchor ${anchor}`);
  const image=await get(`${path}/opengraph-image`);
  assert.match(image.headers.get('content-type'),/image\/png/);
  const data=Buffer.from(await image.arrayBuffer());
  assert.equal(data.readUInt32BE(16),1200); assert.equal(data.readUInt32BE(20),630);
  // Every linked watch fragment and seek offset must be backed by the destination.
  for(const [,href] of visible.matchAll(/href="(\/(?:ki-elektrik|ai2cad)\/[^"#?]+(?:\?t=\d+)?#[^"]+)"/g)) {
    const dest=new URL(href,base), body=await (await get(dest.pathname)).text();
    assert(body.includes(`id="${dest.hash.slice(1)}"`),`Missing video target ${href}`);
    if(dest.searchParams.has('t')) {
      const video=[...body.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).find(s=>s['@type']==='VideoObject');
      assert(video.hasPart.some(c=>c.startOffset===Number(dest.searchParams.get('t'))),`Unknown chapter ${href}`);
    }
  }
  console.log(`OK ${path}: sources, SEO, share image, SSR, video chapter links and backlinks`);
}
assert(overview.indexOf('href="/blog/ki-cnc-drehprogramm-cad-cam"') < overview.indexOf('href="/blog/ki-schaltplan-erstellen-pruefen"'),'CAD/CAM first');
console.log('PASS: two video articles discoverable, linked and technically complete.');
