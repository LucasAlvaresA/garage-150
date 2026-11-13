"use client";

import { useTranslation } from "@/hooks/useTranslation";

const brands = [
  "Honda",
  "Volkswagen",
  "Toyota",
  "Chevrolet",
  "Jeep",
  "Hyundai",
  "Nissan",
  "Fiat",
];

export function BrandMarquee() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-4">
      <p className="sr-only">{t("hero.marqueeLabel")}</p>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-ink to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-ink to-transparent sm:w-40"
      />
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
          >
            {brands.map((brand) => (
              <li
                key={`${copy}-${brand}`}
                className="flex items-center gap-8 sm:gap-12"
              >
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:text-xs">
                  {brand}
                </span>
                <span className="h-1 w-1 bg-accent/70" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
