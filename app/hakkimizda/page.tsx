import type { Metadata } from "next";
import { AboutSection } from "@/sections/AboutSection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Hexa Teknoloji & Savunma: mühendislik, teknik resim tabanlı üretim ve savunma sanayi çözümleri.",
};

export default function HakkimizdaPage() {
  return <AboutSection />;
}
