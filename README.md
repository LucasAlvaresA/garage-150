# Garage 150

Garage 150 is a landing page and automotive showroom project built with Next.js to present a curated selection of vehicles inspired by the Brazilian market, with a focus on interesting models priced up to R$ 150 thousand.

The interface is designed to highlight cars by category, showcase a featured vehicle, and deliver a modern, responsive experience with support for both Portuguese and English.

## Project overview

The project simulates a digital showroom with:

- a strong brand-focused hero section;
- vehicle categories such as sedan, SUV, hatchback, and pickup;
- a featured model with key information;
- vehicle cards with essential data;
- a detail modal with fuel consumption, power, transmission, fuel type, and other attributes;
- multilingual support.

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Main structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── categories.ts
│   └── vehicles.ts
├── hooks/
├── i18n/
├── lib/
├── types/
│   └── vehicle.ts
└── ...

public/
├── images/
│   ├── hero.jpg
│   └── vehicles/
└── ...
```

## Vehicle data

Vehicles are defined in `src/data/vehicles.ts` and include information such as:

- brand, model, and version;
- year and price;
- category;
- engine and power;
- top speed;
- fuel economy and consumption;
- fuel tank capacity;
- transmission and fuel type;
- short descriptions in Portuguese and English.

## How to run

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app is available at:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

### Start production build

```bash
npm run start
```

### Type checking

```bash
npm run typecheck
```

## Available scripts

- `npm run dev` — starts the development environment
- `npm run build` — generates the production version
- `npm run start` — runs the app in production mode
- `npm run typecheck` — validates TypeScript types

## Project goal

The goal of Garage 150 is to provide a modern vehicle discovery experience with a focus on curation, attractive visuals, and clear presentation of the most important information for each model.

## Note

This project was designed as a digital showcase for presenting automotive models and is not intended to be an e-commerce platform or inventory management system.
