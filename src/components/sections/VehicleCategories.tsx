"use client";

import { CategoryPanelCard } from "@/components/ui/CategoryPanelCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryPanels } from "@/data/categories";
import { useTranslation } from "@/hooks/useTranslation";

export function VehicleCategories() {
  const { t } = useTranslation();

  return (
    <section
      id="categorias"
      aria-labelledby="categorias-title"
      className="scroll-mt-20 bg-bone py-20 text-ink sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow={t("categories.eyebrow")}
            title={t("categories.title")}
            description={t("categories.description")}
            aside={t("categories.aside")}
            titleId="categorias-title"
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:pb-10">
          {categoryPanels.map((category, index) => (
            <Reveal
              key={category.id}
              className="h-full"
              delay={index * 0.06}
            >
              <CategoryPanelCard
                category={category}
                index={index}
                offset={index % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
