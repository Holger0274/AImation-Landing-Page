# Run against the production preview to verify all original section text survived the move.
from html.parser import HTMLParser
from urllib.request import urlopen
import re,json,sys,hashlib
from pathlib import Path
class Sections(HTMLParser):
 def __init__(self): super().__init__(); self.frames=[]; self.sections={}; self.skip=0
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if tag in ('script','style'): self.skip+=1
  if tag=='section': self.frames.append([attrs.get('id') or attrs.get('aria-labelledby') or ('eu-ai-notice' if 'eu-ai-notice' in attrs.get('class','') else ''),[]])
 def handle_endtag(self,tag):
  if tag in ('script','style'): self.skip=max(0,self.skip-1)
  if tag=='section' and self.frames:
   key,parts=self.frames.pop()
   if key:self.sections[key]=re.sub(r'\s+',' ',''.join(parts)).strip()
 def handle_data(self,data):
  if not self.skip:
   for frame in self.frames:frame[1].append(data)
def sections(url):
 p=Sections();p.feed(urlopen(url,timeout=30).read().decode());return p.sections
mapping={'hero-heading':'/','founder-heading':'/','entwicklung-erleben':'/entwicklungswerkstatt','anwendungsdemos':'/entwicklungswerkstatt','selbst-gebaut':'/entwicklungswerkstatt','herausforderungen':'/ki-anwendungsfaelle','use-cases':'/ki-anwendungsfaelle','vorher-nachher':'/ki-anwendungsfaelle','zeitpotenzial':'/wirtschaftlichkeit','qualitaet-kosten-timing':'/wirtschaftlichkeit','prozess':'/zusammenarbeit','leistungen':'/zusammenarbeit','eu-ai-notice':'/zusammenarbeit','ueber-mich':'/ueber-holger-peschke','partnerschaften':'/ueber-holger-peschke','faq':'/','kontakt':'/'}
f=Path(__file__).parent/'fixtures/home-before-restructure.json'
baseline=json.loads(f.read_text());count=0
for lang,data in baseline.items():
 cache={}
 for key,path in mapping.items():
  route=lang+(path if path!='/' or not lang else '')
  if route not in cache:cache[route]=sections(sys.argv[1].rstrip('/')+route)
  actual=cache[route].get(key)
  assert actual is not None, f'Missing section: {route}#{key}'
  assert hashlib.sha256(actual.encode()).hexdigest()==data[key], f'Content changed: {route}#{key}'
  count+=1
print(f'PASS: {count} complete section texts unchanged against live site at 821db4f, DE/EN.')
