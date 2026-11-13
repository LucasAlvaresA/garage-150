const titles = [
 "File:Brazilian Honda Civic touring 2017.jpg",
 "File:Volkswagen Jetta VII GLI IMG 3138.jpg",
 "File:2021 Toyota Corolla LE, front right, 07-13-2024.jpg",
 "File:Chevrolet Cruze Turbo LTZ D2LC Modern Black (4).jpg",
 "File:2021 Jeep Compass Limited 4WD in Billet Silver Metallic, front left.jpg",
 "File:Volkswagen T-Cross 170 TSi Trendline 2022.jpg",
 "File:2021 Honda HR-V 1.8 EX 2WD CVT.jpg",
 "File:2022 Hyundai Creta 1.6 Plus.jpg",
];
const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(titles.join("|"))}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1600`;
const res = await fetch(url, { headers: { "User-Agent": "Garagem150Demo/1.0" } });
const json = await res.json();
for (const p of Object.values(json.query.pages)) {
  const info = p.imageinfo?.[0] || {};
  const meta = info.extmetadata || {};
  console.log(JSON.stringify({
    title: p.title,
    page: info.descriptionurl,
    artist: (meta.Artist?.value || "").replace(/<[^>]+>/g, "").trim(),
    license: meta.LicenseShortName?.value,
    licenseUrl: meta.LicenseUrl?.value,
  }, null, 2));
}
