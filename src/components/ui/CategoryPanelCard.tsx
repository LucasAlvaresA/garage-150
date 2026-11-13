"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { categoryLabelKeys } from "@/lib/labels";
import type { CategoryPanel } from "@/types/vehicle";
import { cn } from "@/lib/utils";

interface CategoryPanelCardProps {
  category: CategoryPanel;
  index: number;
  offset?: boolean;
}

export function CategoryPanelCard({
  category,
  index,
  offset = false,
}: CategoryPanelCardProps) {
  const { t } = useTranslation();

  return (
    <article
      className={cn(
        "group relative overflow-hidden bg-graphite",
        "aspect-[4/5]",
        offset && "lg:translate-y-12",
      )}
    >
      <Image
        src={category.image}
        alt={t(category.altKey)}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10"
      />

      <div className="absolute inset-x-5 top-5 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-white/70">
          <span className="h-px w-4 bg-accent" aria-hidden="true" />
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          {t(categoryLabelKeys[category.id])}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div
          aria-hidden="true"
          className="mb-5 h-px w-10 bg-accent transition-all duration-500 group-hover:w-full"
        />
        <h3 className="font-display text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-bone">
          {t(category.nameKey)}
        </h3>
        <p className="mt-3 max-w-[17rem] text-[13px] leading-relaxed text-white/65">
          {t(category.descriptionKey)}
        </p>
      </div>
    </article>
  );
}
