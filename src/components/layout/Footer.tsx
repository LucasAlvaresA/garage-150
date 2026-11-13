"use client";

import Link from "next/link";
import { ArrowUp, Instagram, Mail, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { categoryPanels } from "@/data/categories";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/i18n/translations";

const navItems: Array<{ key: TranslationKey; href: string }> = [
  { key: "nav.home", href: "/#inicio" },
  { key: "nav.garage", href: "/#garagem" },
  { key: "nav.categories", href: "/#categorias" },
  { key: "nav.about", href: "/#sobre" },
];

const socialItems = [
  { label: "footer.social.instagram" as TranslationKey, Icon: Instagram },
  { label: "footer.social.youtube" as TranslationKey, Icon: Youtube },
  { label: "footer.social.newsletter" as TranslationKey, Icon: Mail },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line bg-ink">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-4 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="col-span-2 sm:col-span-4 lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              {t("footer.description")}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              {t("header.priceBadge")}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
              {t("footer.navTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-bone"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"
                    />
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
              {t("footer.garageTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              {categoryPanels.map((category) => (
                <li key={category.id}>
                  <Link
                    href="/#categorias"
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-bone"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3"
                    />
                    {t(category.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <h3 className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
              {t("footer.socialTitle")}
            </h3>
            <ul className="mt-4">
              {socialItems.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-3 border-b border-line py-2.5"
                >
                  <span className="flex items-center gap-2 text-sm text-white/55">
                    <Icon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-white/35"
                      strokeWidth={1.5}
                    />
                    {t(label)}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">
                    {t("footer.social.soon")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex max-w-4xl gap-3">
              <span
                aria-hidden="true"
                className="mt-1 h-8 w-px shrink-0 bg-accent"
              />
              <p className="text-[10px] leading-relaxed text-white/30">
                {t("footer.editorial")} {t("footer.priceNote")}{" "}
                {t("footer.imageNote")}
              </p>
            </div>

            <Link
              href="/creditos"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-bone"
            >
              {t("footer.credits")}
              <span
                aria-hidden="true"
                className="h-px w-4 bg-accent transition-all duration-300 group-hover:w-7"
              />
            </Link>
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
              {t("footer.copyright")}
            </p>

            <div className="flex items-center gap-5">
              <p className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-white/25 sm:block">
                {t("footer.made")}
              </p>
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-bone"
              >
                {t("footer.backToTop")}
                <span className="flex h-6 w-6 items-center justify-center border border-line transition-colors group-hover:border-accent group-hover:text-accent">
                  <ArrowUp
                    aria-hidden="true"
                    className="h-3 w-3"
                    strokeWidth={1.5}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="overflow-hidden border-t border-line">
        <Container>
          <p className="select-none whitespace-nowrap pt-5 text-center font-display text-[clamp(3.4rem,12.8vw,11.5rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.07em] text-white/[0.045]">
            Garagem <span className="text-accent/20">150</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
