"use client";

import { localeLabels, locales } from "@/i18n/translations";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  size?: "default" | "large";
}

export function LanguageToggle({
  className,
  size = "default",
}: LanguageToggleProps) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("header.language")}
      className={cn(
        "flex items-center gap-0.5 font-mono uppercase tracking-[0.14em]",
        size === "large" ? "text-xs" : "text-[10px]",
        className,
      )}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            aria-pressed={isActive}
            aria-label={item === "pt-BR" ? "Português (Brasil)" : "English"}
            className={cn(
              "relative px-2 py-2 transition-colors duration-300",
              isActive ? "text-bone" : "text-white/35 hover:text-white/70",
              size === "large" && "px-1.5",
            )}
          >
            {localeLabels[item]}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-2 bottom-1 h-px bg-accent transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-0",
                size === "large" && "inset-x-1.5",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
