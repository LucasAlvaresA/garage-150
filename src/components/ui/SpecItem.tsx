import { cn } from "@/lib/utils";

interface SpecItemProps {
  label: string;
  value: string;
  accent?: boolean;
}

export function SpecItem({ label, value, accent = false }: SpecItemProps) {
  return (
    <div className="border-t border-white/10 py-4">
      <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </dt>
      <dd
        className={cn(
          "mt-1.5 font-display text-[15px] font-semibold leading-tight tracking-[-0.01em]",
          accent ? "text-accent-bright" : "text-bone",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
