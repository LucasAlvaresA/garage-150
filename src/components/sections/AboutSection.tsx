"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutSection() {
  const { t } = useTranslation();

  const values = [
    { title: t("about.value1.title"), text: t("about.value1.text") },
    { title: t("about.value2.title"), text: t("about.value2.text") },
    { title: t("about.value3.title"), text: t("about.value3.text") },
  ];

  const stats = [
    { value: "08", label: t("about.stats.models") },
    { value: "04", label: t("about.stats.categories") },
    { value: t("about.ceilingValue"), label: t("about.stats.ceiling") },
  ];

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative scroll-mt-24 overflow-hidden bg-bone py-20 text-ink sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-4 hidden select-none font-display text-[30rem] font-extrabold leading-none tracking-[-0.08em] text-ink/[0.035] lg:block"
      >
        150
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel tone="light">{t("about.eyebrow")}</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                id="sobre-title"
                className="mt-6 font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.05em]"
              >
                <span className="block">{t("about.titleLine1")}</span>
                <span className="block">{t("about.titleLine2")}</span>
                <span className="block">{t("about.titleLine3a")}</span>
                <span className="block text-accent">
                  {t("about.titleLine3b")}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-[15px]">
                {t("about.description")}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-accent"
                />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/45">
                  {t("about.valuesTitle")}
                </span>
              </div>

              <div className="mt-4 grid border-t border-ink/15 sm:grid-cols-3">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="border-b border-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                  >
                    <p className="font-mono text-[9px] tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-base font-bold uppercase leading-tight tracking-[-0.015em]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/55">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                {t("about.signature")}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.12}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-full w-full border border-accent sm:-right-3 sm:-top-3"
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <Image
                    src="/images/about.jpg"
                    alt={t("images.aboutAlt")}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <p className="max-w-[16rem] font-mono text-[8px] uppercase leading-relaxed tracking-[0.16em] text-white/75">
                      {t("about.imageCaption")}
                    </p>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-3 border-y border-ink/15">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={
                      index === 0
                        ? "py-4 pr-4"
                        : index === 1
                          ? "border-x border-ink/15 px-4 py-4"
                          : "py-4 pl-4"
                    }
                  >
                    <p className="font-display text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[8px] uppercase leading-relaxed tracking-[0.14em] text-ink/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
