import type { Metadata, Viewport } from "next";
import "./site-base.css";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { fontMono, fontSans } from "@/lib/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Hexa Teknoloji & Savunma",
    template: "%s | Hexa Teknoloji & Savunma",
  },
  description:
    "Hexa Teknoloji & Savunma — mühendislik, hassas imalat ve savunma sanayi çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${fontSans.variable} ${fontMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col" data-hexa-root>
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
