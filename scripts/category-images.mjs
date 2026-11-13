const cats = [
 "Category:Honda Civic (FC)",
 "Category:Volkswagen Jetta (MK7)",
 "Category:Toyota Corolla (E210)",
 "Category:Chevrolet Cruze (2016)",
 "Category:Jeep Compass (MP)",
 "Category:Volkswagen T-Cross",
 "Category:Honda HR-V (RU)",
 "Category:Hyundai Creta (SU2)",
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  for (const cat of cats) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=categorymembers&gcmtitle=${encodeURIComponent(cat)}&gcmtype=file&gcmlimit=60&prop=imageinfo&iiprop=url&iiurlwidth=1600`;
    let json;
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Garagem150Demo/1.0 (contact: demo@example.com)" } });
      const text = await res.text();
      json = JSON.parse(text);
    } catch (e) {
      console.log("ERR", cat, e.message);
      await sleep(3000);
      continue;
    }
    console.log(`\n### ${cat}`);
    const pages = json?.query?.pages ?? {};
    for (const p of Object.values(pages)) {
      const info = p.imageinfo?.[0];
      if (!info) continue;
      if (/\.(svg|pdf|png|gif|webm|ogg)$/i.test(p.title)) continue;
      console.log(`${p.title}\n  ${info.thumburl.split("?")[0]}`);
    }
    await sleep(1200);
  }
}
run();
