import type { Metadata } from "next";
import { display, body, mono } from "@/lib/fonts";
import Grain from "@/components/layout/grain";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const description =
  "A collective of engineers, researchers, and product designers from Carnegie Mellon University Africa — working at the intersection of AI, infrastructure, and the problems we know first-hand.";

// TODO: replace with the real Vercel domain once deployed
const siteUrl = "https://kigalisix.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kigali Six",
    template: "%s — Kigali Six",
  },
  description,
  openGraph: {
    title: "Kigali Six",
    description,
    url: siteUrl,
    siteName: "Kigali Six",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kigali Six" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kigali Six",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className="font-body min-h-full flex flex-col"
        style={{ background: "var(--bg)", color: "var(--fg)" }}
      >
        <Grain />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
