"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { categoryLabelKeys } from "@/lib/labels";
import type { Vehicle } from "@/types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
  onSelect?: () => void;
  featured?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function VehicleCard({
  vehicle,
  index,
  onSelect,
  featured = false,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: VehicleCardProps) {
  const { t } = useTranslation();
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(16,19,16,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version} — ${vehicle.year}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.16em] text-white/65">
            {indexLabel}
          </span>
          <span className="bg-white/90 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink">
            {t(categoryLabelKeys[vehicle.category])}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
          {vehicle.brand} <span aria-hidden="true">/</span> {vehicle.year}
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-[-0.045em] text-ink">
            {vehicle.model}
          </h3>
          {featured ? (
            <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-ink/40">
              {t("card.featured")}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-xs text-ink/55">{vehicle.version}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/45">
          <span>{vehicle.engine}</span>
          <span>{vehicle.horsepower} {t("spotlight.powerUnit")}</span>
        </div>
      </div>
      {onSelect ? (
        <button
          type="button"
          onClick={onSelect}
          aria-label={`${t("gallery.viewDetails")} ${vehicle.brand} ${vehicle.model}`}
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
        >
          <span className="sr-only">
            {t("gallery.viewDetails")} {vehicle.brand} {vehicle.model}
          </span>
        </button>
      ) : null}
    </article>
  );
}
