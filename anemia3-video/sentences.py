import re
def split_sent(s):
    parts=re.findall(r'[^।?!]+[।?!]?', s)
    parts=[p.strip() for p in parts if p.strip()]
    out=[]
    for p in parts:
        if out and len(p)<12 and not p.endswith('?'): out[-1]+=' '+p   # very short fragment -> merge
        else: out.append(p)
    return out
