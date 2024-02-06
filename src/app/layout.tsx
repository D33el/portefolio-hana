import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";

const ntr = NTR({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hana Berrached",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ntr.className} text-text`}>{children}</body>
    </html>
  );
}
