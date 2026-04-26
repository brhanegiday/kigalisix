import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";

export const display = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

export const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});
