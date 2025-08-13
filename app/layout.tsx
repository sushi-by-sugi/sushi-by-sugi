import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sushi by Sugi",
  description:
    "Ontdek de ultieme sushi catering ervaring met dagverse ingrediënten. Van intieme diners tot grote feesten, wij zorgen voor een culinair hoogtepunt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${cormorantGaramond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
