import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BRAND } from "@/lib/constants";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: BRAND.name,
  description:
    "Asesoría patrimonial especializada en seguros de vida y salud. Diagnóstico financiero personalizado y acompañamiento completo."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-body">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:text-black"
        >
          Saltar al contenido
        </a>

        <div id="top" />
        <Header />

        <main id="contenido" className="min-h-[70vh]">
          {children}
        </main>

        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
