import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Garagem 150 — Curadoria automotiva até R$ 150 mil";
const description =
  "Uma seleção editorial de carros interessantes do mercado brasileiro por até R$ 150 mil. Modelos que unem desempenho, conforto e personalidade.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: title,
    template: "%s — Garagem 150",
  },
  description,
  keywords: [
    "carros até 150 mil",
    "curadoria automotiva",
    "carros interessantes",
    "mercado brasileiro",
    "sedans",
    "suvs",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2600,
        height: 1733,
        alt: "Garagem 150 — curadoria automotiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="bg-ink font-sans text-bone antialiased">
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </LanguageProvider>
        <div
          aria-hidden="true"
          className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.025] mix-blend-soft-light"
        />
      </body>
    </html>
  );
}
