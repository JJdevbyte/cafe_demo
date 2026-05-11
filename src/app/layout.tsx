import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "CafeHero | Architectural Minimalism",
  description: "Experience coffee as architecture. Minimalist aesthetic, luxury organic quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, cormorant.variable)}>
      <body className="antialiased bg-cream selection:bg-espresso selection:text-cream">
        {children}
      </body>
    </html>
  );
}
