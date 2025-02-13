import type { Metadata } from "next";
import { Varela_Round } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const varelaRound = Varela_Round({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-varela-round',
});

export const metadata: Metadata = {
  title: "Florian Braun's Portfolio",
  description: "Welcome to my personal portfolio website showcasing my work and experience in software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${varelaRound.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
