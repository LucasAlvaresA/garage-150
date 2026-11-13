export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

const ptBR = {
  "nav.home": "Início",
  "nav.garage": "Garagem",
  "nav.categories": "Categorias",
  "nav.about": "Sobre",
  "nav.primary": "Navegação principal",

  "header.priceBadge": "Até R$ 150 mil",
  "header.language": "Selecionar idioma",
  "header.openMenu": "Abrir menu",
  "header.closeMenu": "Fechar menu",
  "header.menuLabel": "Navegação",
  "header.menuNote": "Curadoria independente de carros até R$ 150 mil.",

  "hero.eyebrow": "Curadoria automotiva · Edição 01",
  "hero.titleLine1": "SEU PRÓXIMO",
  "hero.titleLine2": "CARRO PODE",
  "hero.titleLine3a": "ESTAR",
  "hero.titleLine3b": "AQUI.",
  "hero.description":
    "Uma seleção de carros que unem desempenho, conforto e personalidade por até R$ 150 mil.",
  "hero.cta": "Explorar garagem",
  "hero.priceLabel": "Teto de preço",
  "hero.priceValue": "R$ 150 mil",
  "hero.priceNote": "Toda a seleção dentro dessa faixa.",
  "hero.scroll": "Role para descobrir",
  "hero.caption": "Imagem ilustrativa",
  "hero.side": "Seleção independente · 2026",
  "hero.marqueeLabel": "Marcas na garagem",

  "featured.eyebrow": "01 / Seleção",
  "featured.title": "ESCOLHAS DA GARAGEM",
  "featured.description": "Modelos que merecem sua atenção.",
  "featured.aside": "08 modelos selecionados",
  "featured.disclaimer":
    "Preços ilustrativos de referência. Os valores variam conforme condição, quilometragem, região e condições de mercado. Não são cotações FIPE.",

  "card.priceLabel": "Preço de referência",
  "card.yearLabel": "Ano modelo",
  "card.featured": "Destaque",

  "category.sedan": "Sedan",
  "category.suv": "SUV",
  "category.hatchback": "Hatchback",
  "category.pickup": "Picape",

  "categories.eyebrow": "02 / Categorias",
  "categories.title": "ENCONTRE SEU ESTILO",
  "categories.description": "Quatro jeitos de entender o prazer de dirigir.",
  "categories.aside": "Uma garagem, quatro perspectivas.",
  "categories.sedan.name": "Sedans",
  "categories.sedan.description":
    "Elegância discreta, conforto no dia a dia e uma boa dose de esportividade.",
  "categories.suv.name": "SUVs",
  "categories.suv.description":
    "Posição de dirigir elevada, versatilidade e espaço para ir mais longe.",
  "categories.hatchback.name": "Hatchbacks",
  "categories.hatchback.description":
    "Compactos, ágeis e cheios de personalidade — feitos para a cidade.",
  "categories.pickup.name": "Picapes",
  "categories.pickup.description":
    "Força para o trabalho e liberdade para o fim de semana.",
  "spotlight.eyebrow": "03 / Destaque",
  "spotlight.title": "DESTAQUE DA GARAGEM",
  "spotlight.badge": "Escolha da redação",
  "spotlight.description":
    "O Civic Touring é daqueles carros que não precisam gritar para chamar atenção. Acabamento cuidadoso, motor turbo e um equilíbrio raro entre conforto e prazer ao dirigir.",
  "spotlight.quote": "Discreto por fora. Interessante em cada detalhe.",
  "spotlight.specsTitle": "Ficha do modelo",
  "spotlight.engine": "Motor",
  "spotlight.power": "Potência",
  "spotlight.transmission": "Câmbio",
  "spotlight.fuel": "Combustível",
  "spotlight.year": "Ano modelo",
  "spotlight.price": "Preço de referência",
  "spotlight.priceNote":
    "Valor ilustrativo. Pode variar conforme condição, quilometragem, região e mercado. Não é uma cotação FIPE.",
  "spotlight.powerUnit": "cv",

  "transmission.cvt": "CVT",
  "transmission.automatic6": "Automático de 6 marchas",
  "transmission.manual6": "Manual de 6 marchas",

  "fuel.flex": "Flex",
  "fuel.gasoline": "Gasolina",
  "fuel.diesel": "Diesel",

  "about.eyebrow": "04 / Sobre",
  "about.titleLine1": "CARRO BOM",
  "about.titleLine2": "NÃO PRECISA",
  "about.titleLine3a": "CUSTAR UMA",
  "about.titleLine3b": "FORTUNA.",
  "about.description":
    "Na Garagem 150, acreditamos que existem excelentes opções para quem gosta de dirigir. Reunimos modelos que oferecem personalidade, conforto e desempenho dentro de uma faixa de preço mais acessível.",
  "about.signature": "Garagem 150 — Curadoria automotiva",
  "about.imageCaption": "O prazer de cuidar do que se gosta.",
  "about.valuesTitle": "Nosso ponto de vista",
  "about.value1.title": "Curadoria, não catálogo.",
  "about.value1.text":
    "Cada modelo é escolhido pelo que desperta, não apenas pelo que entrega em uma ficha técnica.",
  "about.value2.title": "Contexto, não cotação.",
  "about.value2.text":
    "Preços de referência são ponto de partida. Condição, histórico e região contam a história real de cada carro.",
  "about.value3.title": "Prazer de dirigir.",
  "about.value3.text":
    "Performance, conforto e personalidade importam. A experiência ao volante é o que fica.",
  "about.stats.models": "modelos selecionados",
  "about.stats.categories": "categorias",
  "about.stats.ceiling": "teto de preço",
  "about.ceilingValue": "R$ 150 mil",

  "footer.description":
    "Uma curadoria digital de carros interessantes do mercado brasileiro por até R$ 150 mil.",
  "footer.navTitle": "Navegação",
  "footer.garageTitle": "Garagem",
  "footer.socialTitle": "Social",
  "footer.editorial":
    "Projeto editorial independente. Não somos uma loja, revenda ou plataforma de vendas.",
  "footer.priceNote":
    "Preços ilustrativos de referência. Os valores variam conforme condição, quilometragem, região e condições de mercado. Não são cotações FIPE.",
  "footer.imageNote": "Imagens ilustrativas.",
  "footer.credits": "Créditos das imagens",
  "footer.backToTop": "Voltar ao topo",
  "footer.copyright": "© 2026 Garagem 150. Todos os direitos reservados.",
  "footer.made": "Feito com curiosidade automotiva.",
  "footer.social.soon": "Em breve",
  "footer.social.instagram": "Instagram",
  "footer.social.youtube": "YouTube",
  "footer.social.newsletter": "Newsletter",


  "credits.eyebrow": "Arquivo / Imagens",
  "credits.title": "CRÉDITOS DAS IMAGENS",
  "credits.intro":
    "As fotografias de veículos deste projeto são composições editoriais criadas a partir de imagens do Wikimedia Commons. Autores e licenças estão listados abaixo.",
  "credits.vehicleTitle": "Veículos",
  "credits.ambientTitle": "Fotografias de ambiente",
  "credits.ambientText":
    "As imagens de hero, categorias e seção sobre utilizam fotografias do Unsplash, sob a Licença Unsplash.",
  "credits.author": "Autor",
  "credits.license": "Licença",
  "credits.viewSource": "Ver original",
  "credits.back": "Voltar à garagem",
  "credits.derivativeNote":
    "Os recortes e composições derivados das imagens do Wikimedia Commons são disponibilizados sob as mesmas licenças indicadas.",
  "credits.unsplashLink": "Licença Unsplash",

  "common.illustrative": "Imagem ilustrativa",
  "common.skipToContent": "Ir para o conteúdo",

  "images.heroAlt":
    "Carro esportivo claro em uma garagem subterrânea com iluminação cinematográfica.",
  "images.sedanAlt": "Sedan preto em movimento em uma rodovia ao anoitecer.",
  "images.suvAlt": "SUV branco em uma paisagem árida com montanhas ao fundo.",
  "images.hatchbackAlt": "Hatchback azul estacionado em uma rua arborizada.",
  "images.pickupAlt": "Picape azul em uma estrada de montanha ao pôr do sol.",
  "images.aboutAlt":
    "Detalhe da traseira de um carro esportivo durante a lavagem, com gotas de água iluminadas.",
} as const;

export type TranslationKey = keyof typeof ptBR;

const en: Record<TranslationKey, string> = {
  "nav.home": "Home",
  "nav.garage": "Garage",
  "nav.categories": "Categories",
  "nav.about": "About",
  "nav.primary": "Main navigation",

  "header.priceBadge": "Up to R$150k",
  "header.language": "Select language",
  "header.openMenu": "Open menu",
  "header.closeMenu": "Close menu",
  "header.menuLabel": "Navigation",
  "header.menuNote": "Independent curation of cars up to R$150k.",

  "hero.eyebrow": "Automotive curation · Edition 01",
  "hero.titleLine1": "YOUR NEXT",
  "hero.titleLine2": "CAR MIGHT BE",
  "hero.titleLine3a": "RIGHT",
  "hero.titleLine3b": "HERE.",
  "hero.description":
    "A selection of cars that combine performance, comfort and character for up to R$150k.",
  "hero.cta": "Explore the garage",
  "hero.priceLabel": "Price ceiling",
  "hero.priceValue": "R$150k",
  "hero.priceNote": "The whole selection within this range.",
  "hero.scroll": "Scroll to discover",
  "hero.caption": "Illustrative image",
  "hero.side": "Independent selection · 2026",
  "hero.marqueeLabel": "Brands in the garage",

  "featured.eyebrow": "01 / Selection",
  "featured.title": "GARAGE PICKS",
  "featured.description": "Models that deserve your attention.",
  "featured.aside": "08 selected models",
  "featured.disclaimer":
    "Illustrative reference prices. Values vary by condition, mileage, region and market conditions. They are not FIPE quotes.",

  "card.priceLabel": "Reference price",
  "card.yearLabel": "Model year",
  "card.featured": "Featured",

  "category.sedan": "Sedan",
  "category.suv": "SUV",
  "category.hatchback": "Hatchback",
  "category.pickup": "Pickup",

  "categories.eyebrow": "02 / Categories",
  "categories.title": "FIND YOUR STYLE",
  "categories.description": "Four ways to look at the joy of driving.",
  "categories.aside": "One garage, four perspectives.",
  "categories.sedan.name": "Sedans",
  "categories.sedan.description":
    "Understated elegance, daily comfort and a healthy dose of sportiness.",
  "categories.suv.name": "SUVs",
  "categories.suv.description":
    "A higher driving position, versatility and room to go further.",
  "categories.hatchback.name": "Hatchbacks",
  "categories.hatchback.description":
    "Compact, agile and full of character — made for the city.",
  "categories.pickup.name": "Pickups",
  "categories.pickup.description":
    "Strength for work and freedom for the weekend.",
  "spotlight.eyebrow": "03 / Spotlight",
  "spotlight.title": "GARAGE SPOTLIGHT",
  "spotlight.badge": "Editors' pick",
  "spotlight.description":
    "The Civic Touring is the kind of car that doesn't need to shout to get noticed. Careful finishing, a turbo engine and a rare balance between comfort and driving pleasure.",
  "spotlight.quote": "Understated outside. Interesting in every detail.",
  "spotlight.specsTitle": "Model specs",
  "spotlight.engine": "Engine",
  "spotlight.power": "Power",
  "spotlight.transmission": "Transmission",
  "spotlight.fuel": "Fuel",
  "spotlight.year": "Model year",
  "spotlight.price": "Reference price",
  "spotlight.priceNote":
    "Illustrative value. May vary by condition, mileage, region and market. Not a FIPE quote.",
  "spotlight.powerUnit": "hp",

  "transmission.cvt": "CVT",
  "transmission.automatic6": "6-speed automatic",
  "transmission.manual6": "6-speed manual",

  "fuel.flex": "Flex fuel",
  "fuel.gasoline": "Gasoline",
  "fuel.diesel": "Diesel",

  "about.eyebrow": "04 / About",
  "about.titleLine1": "A GOOD CAR",
  "about.titleLine2": "DOESN'T HAVE TO",
  "about.titleLine3a": "COST A",
  "about.titleLine3b": "FORTUNE.",
  "about.description":
    "At Garagem 150, we believe there are excellent options for people who love to drive. We bring together models that offer character, comfort and performance within a more accessible price range.",
  "about.signature": "Garagem 150 — Automotive curation",
  "about.imageCaption": "The pleasure of caring for what you love.",
  "about.valuesTitle": "Our point of view",
  "about.value1.title": "Curation, not a catalogue.",
  "about.value1.text":
    "Every model is chosen for what it stirs, not only for what it delivers on a spec sheet.",
  "about.value2.title": "Context, not a quote.",
  "about.value2.text":
    "Reference prices are a starting point. Condition, history and region tell the real story of each car.",
  "about.value3.title": "Joy of driving.",
  "about.value3.text":
    "Performance, comfort and character matter. The experience behind the wheel is what stays.",
  "about.stats.models": "selected models",
  "about.stats.categories": "categories",
  "about.stats.ceiling": "price ceiling",
  "about.ceilingValue": "R$150k",

  "footer.description":
    "A digital curation of interesting cars from the Brazilian market for up to R$150k.",
  "footer.navTitle": "Navigation",
  "footer.garageTitle": "Garage",
  "footer.socialTitle": "Social",
  "footer.editorial":
    "An independent editorial project. We are not a dealership, reseller or sales platform.",
  "footer.priceNote":
    "Illustrative reference prices. Values vary by condition, mileage, region and market conditions. They are not FIPE quotes.",
  "footer.imageNote": "Illustrative images.",
  "footer.credits": "Image credits",
  "footer.backToTop": "Back to top",
  "footer.copyright": "© 2026 Garagem 150. All rights reserved.",
  "footer.made": "Made with automotive curiosity.",
  "footer.social.soon": "Coming soon",
  "footer.social.instagram": "Instagram",
  "footer.social.youtube": "YouTube",
  "footer.social.newsletter": "Newsletter",


  "credits.eyebrow": "Archive / Images",
  "credits.title": "IMAGE CREDITS",
  "credits.intro":
    "The vehicle photographs in this project are editorial compositions built from Wikimedia Commons images. Authors and licenses are listed below.",
  "credits.vehicleTitle": "Vehicles",
  "credits.ambientTitle": "Ambient photography",
  "credits.ambientText":
    "Hero, category and about photographs use images from Unsplash under the Unsplash License.",
  "credits.author": "Author",
  "credits.license": "License",
  "credits.viewSource": "View original",
  "credits.back": "Back to the garage",
  "credits.derivativeNote":
    "The cut-outs and compositions derived from Wikimedia Commons images are made available under the same licenses listed above.",
  "credits.unsplashLink": "Unsplash License",

  "common.illustrative": "Illustrative image",
  "common.skipToContent": "Skip to content",

  "images.heroAlt":
    "Light-colored sports car in an underground garage with cinematic lighting.",
  "images.sedanAlt": "Black sedan in motion on a highway at dusk.",
  "images.suvAlt": "White SUV in an arid landscape with mountains in the background.",
  "images.hatchbackAlt": "Blue hatchback parked on a tree-lined street.",
  "images.pickupAlt": "Blue pickup truck on a mountain road at sunset.",
  "images.aboutAlt":
    "Rear detail of a sports car being washed, with water droplets caught in the light.",
};

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  "pt-BR": ptBR,
  en,
};

export const localeLabels: Record<Locale, string> = {
  "pt-BR": "PT-BR",
  en: "EN",
};
