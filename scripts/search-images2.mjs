const queries = [
  "Honda Civic Touring",
  "Volkswagen Jetta Comfortline",
  "Toyota Corolla XEi",
  "Chevrolet Cruze LTZ",
  "Jeep Compass Longitude",
  "Volkswagen T-Cross Highline",
  "Honda HR-V EXL",
  "Hyundai Creta Platinum",
  "Honda Civic 2021 Brazil",
  "Toyota Corolla 2021 Brazil",
  "Jeep Compass 2021 Brazil",
  "Volkswagen T-Cross Brazil",
];

async function run() {
  for (const q of queries) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1600`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(`\n### ${q}`);
    const pages = json?.query?.pages ?? {};
    for (const p of Object.values(pages)) {
      const info = p.imageinfo?.[0];
      if (!info) continue;
      const license = info.extmetadata?.LicenseShortName?.value ?? "?";
      console.log(`${p.title}\n  ${info.thumburl.split("?")[0]}\n  [${license}]`);
    }
  }
}
run();
