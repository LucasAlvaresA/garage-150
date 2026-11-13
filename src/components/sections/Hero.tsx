"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CarFront } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src="/images/hero.jpg"
          alt={t("images.heroAlt")}
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-[56%_center]"
        />
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-ink via-ink/75 to-ink/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink via-ink/10 to-ink/60"
      />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-8 pt-28 sm:pb-10 lg:pb-12">
        <div className="absolute right-5 top-28 hidden text-right lg:block">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            {t("hero.side")}
          </p>
          <div className="mt-3 flex items-center justify-end gap-2">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.16em] text-white/55">
              00 / 04
            </span>
          </div>
        </div>

        <div className="max-w-5xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionLabel>{t("hero.eyebrow")}</SectionLabel>
          </motion.div>

          <motion.h1
            className="mt-6 max-w-[15ch] font-display text-[clamp(2.85rem,7.3vw,7.15rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.05em] text-bone"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
            }}
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                variants={{
                  hidden: { y: "110%" },
                  visible: { y: 0, transition: { duration: 0.95, ease } },
                }}
              >
                {t("hero.titleLine1")}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                variants={{
                  hidden: { y: "110%" },
                  visible: { y: 0, transition: { duration: 0.95, ease } },
                }}
              >
                {t("hero.titleLine2")}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                variants={{
                  hidden: { y: "110%" },
                  visible: { y: 0, transition: { duration: 0.95, ease } },
                }}
              >
                {t("hero.titleLine3a")}{" "}
                <span className="text-accent">{t("hero.titleLine3b")}</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-[15px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            <Button href="#garagem" className="sm:px-7">
              {t("hero.cta")}
            </Button>

            <div className="flex items-center gap-3 border border-white/15 bg-white/[0.045] px-4 py-3 backdrop-blur-md">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">
                <CarFront
                  aria-hidden="true"
                  className="h-4 w-4 text-accent"
                  strokeWidth={1.6}
                />
              </span>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                  {t("hero.priceLabel")}
                </p>
                <p className="mt-0.5 font-display text-lg font-bold leading-none text-bone">
                  {t("hero.priceValue")}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mx-1 hidden h-8 w-px bg-white/10 sm:block"
              />
              <p className="hidden max-w-[9rem] text-[10px] leading-snug text-white/45 sm:block">
                {t("hero.priceNote")}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex items-end justify-between gap-6 border-t border-white/15 pt-4 sm:mt-16"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-white/70">
              <ArrowDown
                aria-hidden="true"
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
              />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
              {t("hero.scroll")}
            </span>
          </div>

          <div className="flex items-center gap-3 text-right">
            <span className="hidden h-1.5 w-1.5 bg-accent sm:block" aria-hidden="true" />
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
              {t("hero.caption")}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
