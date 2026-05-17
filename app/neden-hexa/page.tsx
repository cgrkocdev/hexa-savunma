import type { Metadata } from "next";
import { WhyHexaSection } from "@/sections/WhyHexaSection";

export const metadata: Metadata = {
  title: "Neden Hexa?",
  description:
    "Hız ve hassasiyet, mühendislik önceliği ve uyum kültürü ile savunma sanayiine yaklaşımımız.",
};

export default function NedenHexaPage() {
  return <WhyHexaSection />;
}
