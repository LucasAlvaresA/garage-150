import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withIcon?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-accent text-white hover:bg-accent-bright",
  outline:
    "border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink",
  light: "bg-ink text-bone hover:bg-accent hover:text-white",
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  withIcon = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>
      {withIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      ) : null}
    </a>
  );
}
