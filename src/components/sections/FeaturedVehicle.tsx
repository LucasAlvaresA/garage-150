"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecItem } from "@/components/ui/SpecItem";
import { featuredVehicle } from "@/data/vehicles";
import { useTranslation } from "@/hooks/useTranslation";
import { categoryLabelKeys, transmissionLabelKeys } from "@/lib/labels";

export function FeaturedVehicle() {
  const { t } = useTranslation();
  const vehicle = featuredVehicle;

  return (
    <section
      id="destaque"
      aria-labelledby="destaque-title"
      className="scroll-mt-20 bg-ink py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("spotlight.eyebrow")}
            title={t("spotlight.title")}
            description={t("spotlight.description")}
            titleId="destaque-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-7 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
              <Image
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version} — ${vehicle.year}`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/10"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                <p className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-bone sm:text-5xl">
                  {vehicle.brand} {vehicle.model}
                </p>
                <span className="shrink-0 border border-white/30 bg-black/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  {vehicle.year}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center lg:col-span-5" delay={0.08}>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
              {t(categoryLabelKeys[vehicle.category])}{" "}
              <span aria-hidden="true">/</span> {vehicle.version}
            </p>
            <h3 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] text-bone">
              {vehicle.model} {vehicle.version}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {t("spotlight.modelDescription")}
            </p>

            <dl className="mt-8 grid grid-cols-2 border-t border-line">
              <SpecItem label={t("spotlight.engine")} value={vehicle.engine} />
              <SpecItem
                label={t("spotlight.power")}
                value={`${vehicle.horsepower} ${t("spotlight.powerUnit")}`}
              />
              <SpecItem
                label={t("spotlight.transmission")}
                value={t(transmissionLabelKeys[vehicle.transmission])}
              />
              <SpecItem
                label={t("spotlight.category")}
                value={t(categoryLabelKeys[vehicle.category])}
              />
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
