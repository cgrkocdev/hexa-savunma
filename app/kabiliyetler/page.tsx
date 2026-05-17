import type { Metadata } from "next";
import { CapabilitiesSection } from "@/sections/CapabilitiesSection";

export const metadata: Metadata = {
  title: "Kabiliyetler",
  description:
    "CNC işleme, teknik resim üretimi, savunma çözümleri, prototip ve endüstriyel mühendislik desteği.",
};

export default function KabiliyetlerPage() {
  return <CapabilitiesSection />;
}
