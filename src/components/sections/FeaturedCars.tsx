"use client";

import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { useTranslation } from "@/hooks/useTranslation";

export function FeaturedCars() {
  const { t } = useTranslation();
  const [first, second, ...remaining] = vehicles;

  return (
    <section
      id="garagem"
      aria-labelledby="garagem-title"
      className="scroll-mt-24 bg-graphite py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            description={t("featured.description")}
            aside={t("featured.aside")}
            titleId="garagem-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
          <Reveal className="h-full" delay={0.05}>
            <VehicleCard
              vehicle={first}
              index={0}
              featured
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal className="h-full" delay={0.12}>
            <VehicleCard
              vehicle={second}
              index={1}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
          {remaining.map((vehicle, index) => (
            <Reveal
              key={vehicle.id}
              className="h-full"
              delay={(index % 3) * 0.06}
            >
              <VehicleCard vehicle={vehicle} index={index + 2} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex items-start gap-3 border-t border-line pt-5">
            <Info
              aria-hidden="true"
              className="mt-px h-4 w-4 shrink-0 text-accent"
              strokeWidth={1.5}
            />
            <p className="max-w-3xl text-[11px] leading-relaxed text-white/35">
              {t("featured.disclaimer")}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
