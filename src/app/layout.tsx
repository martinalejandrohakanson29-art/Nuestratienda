import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Boutique IA — Automatización, Webs y ERP a medida",
  description: "Transformamos tu operación con automatizaciones inteligentes, desarrollo web moderno y sistemas de gestión a medida. Expertos en n8n, IA y Next.js.",
  keywords: ["automatización", "n8n", "inteligencia artificial", "desarrollo web", "ERP", "Next.js", "Python", "OpenAI"],
  authors: [{ name: "Boutique IA" }],
  openGraph: {
    title: "Boutique IA — Automatización, Webs y ERP a medida",
    description: "Transformamos tu operación con automatizaciones inteligentes, desarrollo web moderno y sistemas de gestión a medida.",
    siteName: "Boutique IA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique IA — Automatización, Webs y ERP a medida",
    description: "Transformamos tu operación con automatizaciones inteligentes, desarrollo web moderno y sistemas de gestión a medida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${sora.variable} ${jetbrains.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
