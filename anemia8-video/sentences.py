import re
def split_sent(s):
    parts=re.findall(r'.+?(?:[.?!](?=\s|$)|$)', s.strip())
    parts=[p.strip() for p in parts if p.strip()]
    out=[]
    for p in parts:
        if out and len(p)<10 and not p.endswith('?'): out[-1]+=' '+p
        else: out.append(p)
    return out
