import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Splash } from "@/components/Splash";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Privora  -  Midnight",
  description: "Prove membership without revealing your private credential. Built on Midnight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${playfair.variable} h-full antialiased`}>
      <body className={`${outfit.className} flex min-h-full flex-col bg-surface text-primary`}>
        <Splash />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
