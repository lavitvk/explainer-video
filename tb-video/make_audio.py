# Builds narration.wav (sentence + 3.5 s gap, important lines x3) and timeline.json cues
import json, wave
GAP, LEAD, SR = 3.5, 0.6, 48000
sc = json.load(open("script.json"))
out = wave.open("narration.wav", "wb"); out.setnchannels(1); out.setsampwidth(2); out.setframerate(SR)
sil = lambda s: out.writeframes(b"\x00\x00" * int(round(s * SR)))
T = 0.0; tl = []
for s in sc:
    start = T; cues = []
    sil(LEAD); T += LEAD
    for i, l in enumerate(s["lines"]):
        w = wave.open(f"lines/{s['id']}_{i}.wav"); fr = w.readframes(w.getnframes()); d = w.getnframes() / SR
        for r in range(l["rep"]):
            cues.append({"line": i, "rep": r + 1, "of": l["rep"], "t": round(T - start, 3), "d": round(d, 3)})
            out.writeframes(fr); T += d
            sil(GAP); T += GAP
    tl.append({"id": s["id"], "dur": round(T - start, 3), "cues": cues})
sil(4); out.close()
json.dump(tl, open("timeline.json", "w"), indent=1)
print("total", round(T, 1), "s")
