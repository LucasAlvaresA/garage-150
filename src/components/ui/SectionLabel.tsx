import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionLabel({
  children,
  tone = "dark",
  className,
}: SectionLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="h-px w-8 shrink-0 bg-accent" aria-hidden="true" />
      <span
        className={cn(
          "font-mono text-[10px] font-medium uppercase tracking-[0.22em]",
          tone === "light" ? "text-ink/55" : "text-white/55",
        )}
      >
        {children}
      </span>
    </span>
  );
}
