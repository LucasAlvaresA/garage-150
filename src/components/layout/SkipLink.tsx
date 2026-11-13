"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function SkipLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-bone focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-ink"
    >
      {t("common.skipToContent")}
    </a>
  );
}
