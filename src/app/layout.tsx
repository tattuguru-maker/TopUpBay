import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TopUpBay — Instant Game Top-Ups & Digital Keys",
  description:
    "Buy game top-ups, gift cards, and digital keys instantly. Trusted sellers, instant delivery, competitive prices.",
  keywords: [
    "game top-up",
    "digital keys",
    "gift cards",
    "PUBG UC",
    "Free Fire diamonds",
    "Steam keys",
    "Xbox Game Pass",
    "PlayStation Plus",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col pb-14 lg:pb-0">
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
