import os,base64,json,re
src={f[:-4]:'data:image/jpeg;base64,'+base64.b64encode(open('art/'+f,'rb').read()).decode() for f in sorted(os.listdir('art')) if f.endswith('.jpg')}
h=open('render.html').read()
h=re.sub(r"^const ART_SRC = .*$", lambda m:'const ART_SRC = '+json.dumps(src)+';', h, count=1, flags=re.M)
open('render.html','w').write(h); print(len(src),'images')
