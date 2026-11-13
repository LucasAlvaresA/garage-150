"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecItem } from "@/components/ui/SpecItem";
import { featuredVehicle } from "@/data/vehicles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  categoryLabelKeys,
  fuelLabelKeys,
  transmissionLabelKeys,
} from "@/lib/labels";

export function FeaturedVehicle() {
  const { t, formatPrice } = useTranslation();
  const vehicle = featuredVehicle;

  return (
    <section
      id="destaque"
      aria-labelledby="destaque-title"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-accent/[0.06] blur-[140px]"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={t("spotlight.eyebrow")}
            title={t("spotlight.title")}
            aside={
              <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-2">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                {t("spotlight.badge")}
              </span>
            }
            titleId="destaque-title"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid overflow-hidden border border-line lg:mt-12 lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version} — ${vehicle.year} — ${t("common.illustrative")}`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/10"
                />

                <span className="absolute left-5 top-5 border border-white/15 bg-black/30 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-md">
                  {vehicle.brand} {vehicle.model} {vehicle.version}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                      {t("spotlight.year")}
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold leading-none text-bone">
                      {vehicle.year}
                    </p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                    {t("common.illustrative")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {t("spotlight.specsTitle")}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {vehicle.year} ·{" "}
                  {t(categoryLabelKeys[vehicle.category])}
                </span>
              </div>
            </div>

            <div className="flex flex-col bg-graphite-2 p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-accent" aria-hidden="true" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                  {t("spotlight.badge")}
                </span>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {vehicle.brand}
                </p>
                <h3 className="mt-2 font-display text-[clamp(2rem,3.4vw,3.1rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone">
                  {vehicle.model}
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  {vehicle.version} · {vehicle.year}
                </p>
              </div>

              <blockquote className="mt-7 border-l border-accent pl-4 font-display text-lg font-semibold uppercase leading-tight tracking-[-0.015em] text-bone sm:text-xl">
                {t("spotlight.quote")}
              </blockquote>

              <p className="mt-5 text-[13px] leading-relaxed text-white/55">
                {t("spotlight.description")}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6">
                <SpecItem
                  label={t("spotlight.engine")}
                  value={vehicle.engine}
                />
                <SpecItem
                  label={t("spotlight.power")}
                  value={`${vehicle.horsepower} ${t("spotlight.powerUnit")}`}
                />
                <SpecItem
                  label={t("spotlight.transmission")}
                  value={t(transmissionLabelKeys[vehicle.transmission])}
                />
                <SpecItem
                  label={t("spotlight.fuel")}
                  value={t(fuelLabelKeys[vehicle.fuel])}
                />
                <SpecItem
                  label={t("spotlight.year")}
                  value={String(vehicle.year)}
                />
                <SpecItem
                  label={t("spotlight.price")}
                  value={formatPrice(vehicle.price)}
                  accent
                />
              </dl>

              <p className="mt-auto pt-4 text-[10px] leading-relaxed text-white/30">
                {t("spotlight.priceNote")}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
