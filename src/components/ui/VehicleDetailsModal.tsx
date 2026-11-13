"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import {
  categoryLabelKeys,
  fuelLabelKeys,
  transmissionLabelKeys,
} from "@/lib/labels";
import { vehicles } from "@/data/vehicles";
import type { Vehicle } from "@/types/vehicle";

type VehicleDetail = {
  label: string;
  value: string;
  score?: number;
};

function relativeScore(
  value: number,
  referenceValues: number[],
  higherIsBetter: boolean,
) {
  const minimum = Math.min(...referenceValues);
  const maximum = Math.max(...referenceValues);

  if (minimum === maximum) {
    return 10;
  }

  const position = (value - minimum) / (maximum - minimum);
  const score = higherIsBetter ? position : 1 - position;

  return Math.round((3.9 + score * 6.1) * 10) / 10;
}

function averageScore(scores: number[]) {
  return Math.round(
    (scores.reduce((sum, score) => sum + score, 0) / scores.length) * 10,
  ) / 10;
}

function getScoreColors(score: number) {
  if (score < 4) {
    return {
      badge: "bg-red-100 text-red-700",
      bar: "bg-red-500",
    };
  }

  if (score < 7) {
    return {
      badge: "bg-amber-100 text-amber-800",
      bar: "bg-amber-500",
    };
  }

  return {
    badge: "bg-emerald-100 text-emerald-800",
    bar: "bg-emerald-500",
  };
}

interface VehicleDetailsModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

export function VehicleDetailsModal({
  vehicle,
  onClose,
}: VehicleDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const reduceMotion = useReducedMotion();
  const { formatPrice, locale, t } = useTranslation();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const formatConsumption = (ethanol: number, gasoline: number) => {
    const formatter = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    return `${formatter.format(ethanol)} / ${formatter.format(gasoline)} km/l`;
  };

  const cityConsumptionReferences = vehicles.map(
    (item) => item.fuelConsumption.city,
  );
  const highwayConsumptionReferences = vehicles.map(
    (item) => item.fuelConsumption.highway,
  );
  const cityConsumptionScore = averageScore([
    relativeScore(
      vehicle.fuelConsumption.city.ethanol,
      cityConsumptionReferences.map((consumption) => consumption.ethanol),
      true,
    ),
    relativeScore(
      vehicle.fuelConsumption.city.gasoline,
      cityConsumptionReferences.map((consumption) => consumption.gasoline),
      true,
    ),
  ]);
  const highwayConsumptionScore = averageScore([
    relativeScore(
      vehicle.fuelConsumption.highway.ethanol,
      highwayConsumptionReferences.map((consumption) => consumption.ethanol),
      true,
    ),
    relativeScore(
      vehicle.fuelConsumption.highway.gasoline,
      highwayConsumptionReferences.map((consumption) => consumption.gasoline),
      true,
    ),
  ]);
  const scoreFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const requestClose = () => {
    if (closing) {
      return;
    }

    if (reduceMotion) {
      dialogRef.current?.close();
      return;
    }

    setClosing(true);
  };

  const details: VehicleDetail[] = [
    { label: t("spotlight.year"), value: String(vehicle.year) },
    {
      label: t("spotlight.category"),
      value: t(categoryLabelKeys[vehicle.category]),
    },
    {
      label: t("gallery.price"),
      value: formatPrice(vehicle.price),
      score: relativeScore(
        vehicle.price,
        vehicles.map((item) => item.price),
        false,
      ),
    },
    {
      label: t("gallery.horsepower"),
      value: `${vehicle.horsepower} ${t("spotlight.powerUnit")}`,
      score: relativeScore(
        vehicle.horsepower,
        vehicles.map((item) => item.horsepower),
        true,
      ),
    },
    {
      label: t("gallery.maxSpeed"),
      value: `${vehicle.maximumSpeed} km/h`,
      score: relativeScore(
        vehicle.maximumSpeed,
        vehicles.map((item) => item.maximumSpeed),
        true,
      ),
    },
    {
      label: t("gallery.zeroToHundred"),
      value: `${new Intl.NumberFormat(locale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }).format(vehicle.zeroToHundred)} s`,
      score: relativeScore(
        vehicle.zeroToHundred,
        vehicles.map((item) => item.zeroToHundred),
        false,
      ),
    },
    {
      label: t("gallery.cityConsumption"),
      value: formatConsumption(
        vehicle.fuelConsumption.city.ethanol,
        vehicle.fuelConsumption.city.gasoline,
      ),
      score: cityConsumptionScore,
    },
    {
      label: t("gallery.highwayConsumption"),
      value: formatConsumption(
        vehicle.fuelConsumption.highway.ethanol,
        vehicle.fuelConsumption.highway.gasoline,
      ),
      score: highwayConsumptionScore,
    },
    {
      label: t("gallery.fuelTank"),
      value: `${vehicle.fuelTankCapacity} L`,
      score: relativeScore(
        vehicle.fuelTankCapacity,
        vehicles.map((item) => item.fuelTankCapacity),
        true,
      ),
    },
    { label: t("spotlight.engine"), value: vehicle.engine },
    {
      label: t("gallery.transmissionType"),
      value: t(transmissionLabelKeys[vehicle.transmission]),
    },
    { label: t("spotlight.fuel"), value: t(fuelLabelKeys[vehicle.fuel]) },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="vehicle-dialog-title"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          requestClose();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          requestClose();
        }
      }}
      className="fixed inset-0 m-0 flex h-dvh w-full max-w-none items-center justify-center overflow-y-auto border-0 bg-transparent p-4 text-ink backdrop:bg-black/75 sm:p-8"
    >
      <motion.div
        initial={reduceMotion ? "open" : "closed"}
        animate={closing ? "closed" : "open"}
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: reduceMotion ? 0 : 0.24,
              ease: [0.22, 1, 0.36, 1],
            },
          },
          closed: {
            opacity: 0,
            scale: 0.97,
            y: 16,
            transition: {
              duration: reduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        onAnimationComplete={(definition) => {
          if (definition === "closed" && closing) {
            dialogRef.current?.close();
          }
        }}
        className="relative my-auto grid min-w-0 w-full max-w-6xl overflow-hidden bg-bone shadow-2xl md:max-h-[calc(100dvh-4rem)] md:grid-cols-[1.15fr_0.85fr] md:grid-rows-[minmax(0,1fr)]"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] bg-graphite md:aspect-auto md:h-full md:min-h-0 md:self-stretch"
        >
          <Image
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version} — ${vehicle.year}`}
            fill
            sizes="(min-width: 1280px) 55vw, (min-width: 768px) 55vw, 100vw"
            className="object-contain"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink/45 to-transparent"
          />
          <p className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/75">
            {vehicle.brand} / {vehicle.year}
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : 0.08,
          }}
          className="relative flex min-w-0 flex-col p-6 sm:p-9 md:max-h-[calc(100dvh-4rem)] md:overflow-y-auto"
        >
          <button
            type="button"
            onClick={requestClose}
            aria-label={t("gallery.closeDetails")}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-bone sm:right-6 sm:top-6"
          >
            <X aria-hidden="true" size={18} strokeWidth={1.5} />
          </button>

          <p className="pr-12 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
            {vehicle.brand} <span aria-hidden="true">/</span>{" "}
            {t("gallery.details")}
          </p>
          <h2
            id="vehicle-dialog-title"
            className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.055em]"
          >
            {vehicle.model}
          </h2>
          <p className="mt-2 text-sm text-ink/55">
            {vehicle.version} · {vehicle.year}
          </p>

          <h3 className="mt-8 border-t border-ink/15 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
            {t("gallery.technicalDetails")}
          </h3>
          <dl className="mt-2 grid grid-cols-1 gap-x-5 sm:grid-cols-2">
            {details.map(({ label, value, score }, index) => {
              const scoreColors =
                score !== undefined ? getScoreColors(score) : undefined;

              return (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.28,
                    delay: reduceMotion ? 0 : 0.12 + index * 0.025,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="group rounded-sm border border-transparent border-b-ink/10 px-2 py-3.5 transition-colors duration-200 hover:border-accent/25 hover:bg-white/60"
                >
                  <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/45">
                    {label}
                  </dt>
                  <div className="mt-1.5 flex items-center justify-between gap-2">
                    <dd className="min-w-0 break-words font-display text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
                      {value}
                    </dd>
                    {score !== undefined ? (
                      <span
                        aria-label={`${t("gallery.score")}: ${scoreFormatter.format(score)} / 10`}
                        className={`shrink-0 rounded-full px-2 py-1 font-mono text-[8px] font-medium ${scoreColors?.badge}`}
                      >
                        {scoreFormatter.format(score)}/10
                      </span>
                    ) : null}
                  </div>
                  {score !== undefined ? (
                    <div
                      aria-hidden="true"
                      className="relative mt-2 h-0.5 overflow-hidden bg-ink/10"
                    >
                      <motion.span
                        initial={reduceMotion ? false : { scaleX: 0 }}
                        animate={{ scaleX: score / 10 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.45,
                          delay: reduceMotion ? 0 : 0.15 + index * 0.025,
                        }}
                        className={`absolute inset-y-0 left-0 origin-left ${scoreColors?.bar}`}
                      />
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </dl>
          <p className="mt-5 text-[10px] leading-relaxed text-ink/45">
            {t("gallery.referenceNote")}
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-ink/45">
            {t("gallery.comparisonNote")}
          </p>
        </motion.div>
      </motion.div>
    </dialog>
  );
}
