const queries = [
  "Honda Civic 2020 sedan",
  "Volkswagen Jetta 2020",
  "Toyota Corolla 2021 sedan",
  "Chevrolet Cruze 2022 sedan",
  "Jeep Compass 2021",
  "Volkswagen T-Cross 2022",
  "Honda HR-V 2021",
  "Hyundai Creta 2022",
];

async function run() {
  for (const q of queries) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1400`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(`\n### ${q}`);
    const pages = json?.query?.pages ?? {};
    for (const p of Object.values(pages)) {
      const info = p.imageinfo?.[0];
      if (!info) continue;
      const license = info.extmetadata?.LicenseShortName?.value ?? "?";
      console.log(`${p.title}\n  ${info.thumburl}\n  [${license}]`);
    }
  }
}
run();
