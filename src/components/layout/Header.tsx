"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Logo } from "@/components/ui/Logo";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/i18n/translations";

const navItems: Array<{ key: TranslationKey; href: string }> = [
  { key: "nav.home", href: "/#inicio" },
  { key: "nav.garage", href: "/#garagem" },
  { key: "nav.categories", href: "/#categorias" },
  { key: "nav.about", href: "/#sobre" },
];

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "border-b transition-colors duration-500",
            scrolled || menuOpen
              ? "border-line bg-ink/90 backdrop-blur-xl"
              : "border-transparent bg-linear-to-b from-ink/75 to-transparent",
          )}
        >
          <Container>
            <div className="flex h-16 items-center justify-between gap-4 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
              <Logo onClick={() => setMenuOpen(false)} />

              <nav
                aria-label={t("nav.primary")}
                className="hidden items-center gap-7 lg:flex lg:justify-self-center"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="group relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-bone"
                  >
                    {t(item.key)}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-3 sm:gap-4 lg:justify-self-end">
                <span className="hidden items-center gap-2 border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 md:flex">
                  <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                  {t("header.priceBadge")}
                </span>

                <LanguageToggle />

                <button
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label={
                    menuOpen ? t("header.closeMenu") : t("header.openMenu")
                  }
                  className="flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink lg:hidden"
                >
                  {menuOpen ? (
                    <X aria-hidden="true" size={18} strokeWidth={1.75} />
                  ) : (
                    <Menu aria-hidden="true" size={18} strokeWidth={1.75} />
                  )}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            aria-label={t("header.menuLabel")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink lg:hidden"
          >
            <div
              aria-hidden="true"
              className="grain pointer-events-none absolute inset-0 opacity-[0.04]"
            />
            <div className="relative flex min-h-svh flex-col px-5 pb-8 pt-24 sm:px-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                {t("header.menuLabel")}
              </p>

              <nav
                aria-label={t("nav.primary")}
                className="mt-5 flex flex-col"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.06 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-line py-5"
                    >
                      <span className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-bone transition-colors group-hover:text-accent-bright">
                        {t(item.key)}
                      </span>
                      <span className="font-mono text-[10px] text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 flex items-center justify-between border border-line p-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                    {t("hero.priceLabel")}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-bone">
                    {t("header.priceBadge")}
                  </p>
                </div>
                <span className="h-8 w-px bg-accent" aria-hidden="true" />
              </div>

              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
                {t("header.menuNote")}
              </p>

              <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                <LanguageToggle size="large" />
                <span className="text-right font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                  {t("hero.side")}
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
