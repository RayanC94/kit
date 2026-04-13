import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApprenKit — La Welcome Box pour vos apprentis",
  description:
    "Offrez à vos apprentis une Welcome Box personnalisée avec le logo de votre CFA. PC ou iPad, accessoires et article métier. Financée jusqu'à 500€ par votre OPCO.",
  keywords: ["CFA", "apprentissage", "OPCO", "équipement apprentis", "welcome box", "alternance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
