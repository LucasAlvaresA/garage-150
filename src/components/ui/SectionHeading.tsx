import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  tone?: "dark" | "light";
  titleId?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  aside,
  tone = "dark",
  titleId,
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionLabel tone={tone}>{eyebrow}</SectionLabel>
        {aside ? (
          <div
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.18em]",
              isLight ? "text-ink/45" : "text-white/40",
            )}
          >
            {aside}
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-12">
        <h2
          id={titleId}
          className={cn(
            "font-display text-[clamp(2.35rem,5.2vw,4.9rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em]",
            isLight ? "text-ink" : "text-bone",
          )}
        >
          {title}
        </h2>

        {description ? (
          <p
            className={cn(
              "max-w-sm text-sm leading-relaxed lg:justify-self-end",
              isLight ? "text-ink/60" : "text-white/55",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
