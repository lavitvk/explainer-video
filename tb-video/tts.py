import sys, certifi
certifi.where = lambda: "/root/.ccr/ca-bundle.crt"
import ssl
import edge_tts.communicate as c
if hasattr(c, "_SSL_CTX"):
    c._SSL_CTX = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt")
import asyncio, edge_tts
async def main(text, out, voice, rate):
    await edge_tts.Communicate(text, voice, rate=rate).save(out)
asyncio.run(main(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv)>3 else "hi-IN-MadhurNeural", sys.argv[4] if len(sys.argv)>4 else "+0%"))
