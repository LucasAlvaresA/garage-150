"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
          quality={80}
          sizes="100vw"
          className="object-cover object-[56%_center]"
        />
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/55 to-ink/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-ink/25"
      />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-8 pt-28 sm:pb-10 lg:pb-14">
        <div className="max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionLabel>{t("hero.eyebrow")}</SectionLabel>
          </motion.div>

          <motion.h1
            className="mt-6 max-w-[14ch] font-display text-[clamp(3rem,8.6vw,8.2rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.065em] text-bone"
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
            className="mt-6 max-w-md text-sm leading-relaxed text-white/75 sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
          >
            <a
              href="#categorias"
              className="group inline-flex w-fit items-center gap-5 border-b border-accent pb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-accent"
            >
              {t("hero.cta")}
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex items-end justify-between gap-6 border-t border-white/25 pt-4 sm:mt-20"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#categorias" className="flex items-center gap-3">
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
          </a>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
            {t("hero.caption")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
