export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

const ptBR = {
  "nav.home": "Início",
  "nav.garage": "Modelos",
  "nav.categories": "Estilos",
  "nav.spotlight": "Design em foco",
  "nav.about": "Sobre",
  "nav.primary": "Navegação principal",

  "header.priceBadge": "Até R$ 150 mil",
  "header.language": "Selecionar idioma",
  "header.openMenu": "Abrir menu",
  "header.closeMenu": "Fechar menu",
  "header.menuLabel": "Navegação",
  "header.menuNote": "Curadoria independente de carros até R$ 150 mil.",

  "hero.eyebrow": "Showroom automotivo",
  "hero.titleLine1": "SEU PRÓXIMO",
  "hero.titleLine2": "CARRO PODE",
  "hero.titleLine3a": "ESTAR",
  "hero.titleLine3b": "AQUI.",
  "hero.description":
    "Um espaço para apreciar design, presença e personalidade sobre quatro rodas.",
  "hero.cta": "Explore os estilos",
  "hero.priceLabel": "Teto de preço",
  "hero.priceValue": "R$ 150 mil",
  "hero.priceNote": "Toda a seleção dentro dessa faixa.",
  "hero.scroll": "Explore o showroom",
  "hero.caption": "Uma coleção em movimento",
  "hero.side": "Showroom automotivo · 2026",
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

  "categories.eyebrow": "GARAGE 150 / ESTILOS",
  "categories.title": "ENCONTRE SEU ESTILO",
  "categories.description":
    "Silhuetas, espaços e propostas diferentes. Encontre o tipo de carro que combina com o seu olhar.",
  "categories.aside": "Quatro estilos. Um só showroom.",
  "categories.filter.label": "Filtrar veículos por categoria",
  "categories.filter.all": "Todos",
  "categories.modelsCount": "modelos",
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
  "spotlight.eyebrow": "GARAGE 150 / EM FOCO",
  "spotlight.title": "DESIGN EM FOCO",
  "spotlight.category": "Estilo",
  "spotlight.badge": "Em exposição",
  "spotlight.modelDescription":
    "Perfil baixo, linha de teto fluida e assinatura luminosa marcante definem o desenho do Civic Touring.",
  "spotlight.description":
    "Linhas, proporções e detalhes que definem a presença de um modelo mesmo quando ele está parado.",
  "spotlight.quote": "Discreto por fora. Interessante em cada detalhe.",
  "spotlight.specsTitle": "Ficha do modelo",
  "spotlight.engine": "Motor",
  "spotlight.power": "Potência",
  "spotlight.transmission": "Tipo de câmbio",
  "spotlight.fuel": "Combustível",
  "spotlight.year": "Ano modelo",
  "spotlight.price": "Preço de referência",
  "spotlight.priceNote":
    "Valor ilustrativo. Pode variar conforme condição, quilometragem, região e mercado. Não é uma cotação FIPE.",
  "spotlight.powerUnit": "cv",

  "gallery.eyebrow": "GARAGE 150 / COLEÇÃO",
  "gallery.title": "MODELOS EM EXPOSIÇÃO",
  "gallery.description":
    "Uma volta completa pela coleção. Oito modelos, cada um com identidade própria.",
  "gallery.count": "modelos",
  "gallery.viewDetails": "Ver detalhes de",
  "gallery.closeDetails": "Fechar detalhes do veículo",
  "gallery.details": "Detalhes do modelo",
  "gallery.technicalDetails": "Ficha técnica",
  "gallery.price": "Preço de referência",
  "gallery.horsepower": "Cavalaria",
  "gallery.maxSpeed": "Velocidade máxima",
  "gallery.zeroToHundred": "0–100 km/h",
  "gallery.cityConsumption": "Consumo — cidade (etanol/gasolina)",
  "gallery.highwayConsumption": "Consumo — estrada (etanol/gasolina)",
  "gallery.fuelTank": "Capacidade do tanque",
  "gallery.transmissionType": "Tipo de câmbio",
  "gallery.score": "Nota comparativa",
  "gallery.comparisonNote":
    "Notas comparativas em uma escala suavizada (3,9–10), relativas aos modelos desta coleção. Preço e 0–100: menor é melhor; consumo em km/l, potência, velocidade e tanque: maior é melhor.",
  "gallery.referenceNote":
    "Dados aproximados de referência, sujeitos a variação conforme versão e condições de uso. Consumo em etanol/gasolina; consulte a ficha do veículo para confirmação.",

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
  "nav.garage": "Models",
  "nav.categories": "Styles",
  "nav.spotlight": "Design spotlight",
  "nav.about": "About",
  "nav.primary": "Main navigation",

  "header.priceBadge": "Up to R$150k",
  "header.language": "Select language",
  "header.openMenu": "Open menu",
  "header.closeMenu": "Close menu",
  "header.menuLabel": "Navigation",
  "header.menuNote": "Independent curation of cars up to R$150k.",

  "hero.eyebrow": "Automotive showroom",
  "hero.titleLine1": "YOUR NEXT",
  "hero.titleLine2": "CAR MIGHT BE",
  "hero.titleLine3a": "RIGHT",
  "hero.titleLine3b": "HERE.",
  "hero.description":
    "A space to appreciate design, presence and personality on four wheels.",
  "hero.cta": "Explore the styles",
  "hero.priceLabel": "Price ceiling",
  "hero.priceValue": "R$150k",
  "hero.priceNote": "The whole selection within this range.",
  "hero.scroll": "Explore the showroom",
  "hero.caption": "A collection in motion",
  "hero.side": "Automotive showroom · 2026",
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

  "categories.eyebrow": "GARAGE 150 / STYLES",
  "categories.title": "FIND YOUR STYLE",
  "categories.description":
    "Different silhouettes, spaces and purposes. Find the kind of car that speaks to you.",
  "categories.aside": "Four styles. One showroom.",
  "categories.filter.label": "Filter vehicles by category",
  "categories.filter.all": "All",
  "categories.modelsCount": "models",
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
  "spotlight.eyebrow": "GARAGE 150 / IN FOCUS",
  "spotlight.title": "DESIGN IN FOCUS",
  "spotlight.category": "Style",
  "spotlight.badge": "On display",
  "spotlight.modelDescription":
    "A low stance, flowing roofline and distinctive lighting signature define the Civic Touring's design.",
  "spotlight.description":
    "Lines, proportions and details that define a model's presence even when it is standing still.",
  "spotlight.quote": "Understated outside. Interesting in every detail.",
  "spotlight.specsTitle": "Model specs",
  "spotlight.engine": "Engine",
  "spotlight.power": "Power",
  "spotlight.transmission": "Transmission type",
  "spotlight.fuel": "Fuel",
  "spotlight.year": "Model year",
  "spotlight.price": "Reference price",
  "spotlight.priceNote":
    "Illustrative value. May vary by condition, mileage, region and market. Not a FIPE quote.",
  "spotlight.powerUnit": "hp",

  "gallery.eyebrow": "GARAGE 150 / COLLECTION",
  "gallery.title": "MODELS ON DISPLAY",
  "gallery.description":
    "A complete look around the collection. Eight models, each with its own identity.",
  "gallery.count": "models",
  "gallery.viewDetails": "View details for",
  "gallery.closeDetails": "Close vehicle details",
  "gallery.details": "Model details",
  "gallery.technicalDetails": "Technical specs",
  "gallery.price": "Reference price",
  "gallery.horsepower": "Horsepower",
  "gallery.maxSpeed": "Top speed",
  "gallery.zeroToHundred": "0–100 km/h",
  "gallery.cityConsumption": "City consumption (ethanol/gasoline)",
  "gallery.highwayConsumption": "Highway consumption (ethanol/gasoline)",
  "gallery.fuelTank": "Fuel tank capacity",
  "gallery.transmissionType": "Transmission type",
  "gallery.score": "Comparative score",
  "gallery.comparisonNote":
    "Comparative scores use a softened 3.9–10 scale and are relative to this collection. Price and 0–100: lower is better; consumption in km/l, horsepower, speed and tank capacity: higher is better.",
  "gallery.referenceNote":
    "Approximate reference figures; values vary by trim and driving conditions. Consumption is shown as ethanol/gasoline; confirm with the vehicle's official specifications.",

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
