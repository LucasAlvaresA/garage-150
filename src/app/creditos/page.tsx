import type { Metadata } from "next";
import { CreditsContent } from "@/components/sections/CreditsContent";

export const metadata: Metadata = {
  title: "Créditos das imagens",
  description:
    "Autores, fontes e licenças das fotografias utilizadas no projeto editorial Garagem 150.",
};

export default function CreditsPage() {
  return <CreditsContent />;
}
