"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { categoryLabelKeys } from "@/lib/labels";
import type { Vehicle } from "@/types/vehicle";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
  featured?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function VehicleCard({
  vehicle,
  index,
  featured = false,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: VehicleCardProps) {
  const { t, formatPrice } = useTranslation();
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-graphite-2 transition-colors duration-500 hover:border-line-strong">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version} — ${vehicle.year}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/15"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2.5">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/65">
            {indexLabel}
          </span>
          <span className="h-px w-3 bg-white/30" aria-hidden="true" />
          <span className="border border-white/15 bg-black/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
            {t(categoryLabelKeys[vehicle.category])}
          </span>
        </div>

        {featured ? (
          <span className="absolute right-4 top-4 bg-accent px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white">
            {t("card.featured")}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              {vehicle.brand}
            </p>
            <h3 className="mt-1.5 truncate font-display text-xl font-bold uppercase leading-none tracking-[-0.025em] text-bone md:text-2xl">
              {vehicle.model}
            </h3>
            <p className="mt-1.5 text-[13px] text-white/50">{vehicle.version}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              {t("card.yearLabel")}
            </p>
            <p className="mt-1 font-mono text-xs text-white/70">
              {vehicle.year}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4 md:pt-5">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
              {t("card.priceLabel")}
            </p>
            <p className="mt-1.5 font-mono text-[15px] font-medium tracking-[-0.02em] text-bone md:text-base">
              {formatPrice(vehicle.price)}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              "mb-1 h-1.5 w-1.5 shrink-0 bg-accent transition-transform duration-500 group-hover:scale-150",
            )}
          />
        </div>
      </div>
    </article>
  );
}
