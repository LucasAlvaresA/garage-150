"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VehicleDetailsModal } from "@/components/ui/VehicleDetailsModal";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { useTranslation } from "@/hooks/useTranslation";
import type { Vehicle } from "@/types/vehicle";

export function FeaturedCars() {
  const { t } = useTranslation();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <>
      <section
        id="modelos"
        aria-labelledby="modelos-title"
        className="scroll-mt-20 bg-bone py-20 text-ink sm:py-24 lg:py-32"
      >
        <Container>
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow={t("gallery.eyebrow")}
              title={t("gallery.title")}
              description={t("gallery.description")}
              aside={`${String(vehicles.length).padStart(2, "0")} ${t("gallery.count")}`}
              titleId="modelos-title"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles.map((vehicle, index) => (
              <Reveal
                key={vehicle.id}
                className="h-full"
                delay={(index % 4) * 0.05}
              >
                <VehicleCard
                  vehicle={vehicle}
                  index={index}
                  onSelect={() => setSelectedVehicle(vehicle)}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {selectedVehicle ? (
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      ) : null}
    </>
  );
}
