import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#070A2B",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  title: {
    default: BRAND.name,
    template: `%s · ${BRAND.name}`
  },
  description:
    "Asesoría patrimonial especializada en seguros de vida y salud. Diagnóstico financiero personalizado y acompañamiento completo.",
  applicationName: BRAND.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: BRAND.name,
    description:
      "Diagnóstico financiero y asesoría patrimonial en seguros de vida y salud para proteger tu patrimonio.",
    type: "website",
    // Placeholders: si luego subes una imagen social, usa /public/og.webp y descomenta:
    // images: [{ url: "/og.webp", width: 1200, height: 630, alt: BRAND.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description:
      "Asesoría patrimonial en seguros de vida y salud. Diagnóstico financiero personalizado.",
    // images: ["/og.webp"]
  }
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
