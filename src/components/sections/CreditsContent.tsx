"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  unsplashLicenseUrl,
  vehicleImageCredits,
} from "@/data/imageCredits";
import { useTranslation } from "@/hooks/useTranslation";

export function CreditsContent() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      <Container className="relative">
        <Reveal>
          <Link
            href="/#garagem"
            className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-bone"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-3.5 w-3.5"
              strokeWidth={1.5}
            />
            {t("credits.back")}
          </Link>

          <div className="mt-10">
            <SectionLabel>{t("credits.eyebrow")}</SectionLabel>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-bone">
            {t("credits.title")}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">
            {t("credits.intro")}
          </p>
        </Reveal>

        <div className="mt-14">
          <h2 className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
            {t("credits.vehicleTitle")}
          </h2>

          <div className="mt-4 border-t border-line">
            {vehicleImageCredits.map((credit, index) => (
              <Reveal key={credit.id} delay={index * 0.03}>
                <div className="grid gap-3 border-b border-line py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_9rem_8rem] sm:items-center sm:gap-6">
                  <span className="font-mono text-[10px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm text-bone">{credit.originalFile}</p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                      {t("credits.author")}: {credit.author}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:contents">
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-bone"
                    >
                      <span className="sm:hidden">
                        {t("credits.license")}:{" "}
                      </span>
                      {credit.license}
                    </a>

                    <a
                      href={credit.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${credit.originalFile} — ${t("credits.viewSource")}`}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-bone"
                    >
                      {t("credits.viewSource")}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3 w-3"
                        strokeWidth={1.5}
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-6 border border-line p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-[-0.02em] text-bone">
                {t("credits.ambientTitle")}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/45">
                {t("credits.ambientText")}
              </p>
            </div>

            <a
              href={unsplashLicenseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border border-line px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-white/40 hover:text-bone"
            >
              {t("credits.unsplashLink")}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </Reveal>

        <p className="mt-6 max-w-3xl text-[10px] leading-relaxed text-white/30">
          {t("credits.derivativeNote")}
        </p>
      </Container>
    </section>
  );
}
