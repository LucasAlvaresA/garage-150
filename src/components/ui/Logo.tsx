import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/#inicio"
      onClick={onClick}
      aria-label="Garagem 150"
      className={cn(
        "group inline-flex items-center gap-2.5 whitespace-nowrap",
        className,
      )}
    >
      <span className="h-4 w-[3px] bg-accent transition-colors group-hover:bg-accent-bright" />
      <span className="font-display text-[13px] font-extrabold uppercase tracking-[0.2em] text-bone sm:text-sm">
        Garagem
      </span>
      <span className="font-display text-lg font-extrabold leading-none tracking-[-0.05em] text-accent sm:text-xl">
        150
      </span>
    </Link>
  );
}
