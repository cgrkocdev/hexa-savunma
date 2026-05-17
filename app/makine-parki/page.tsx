import type { Metadata } from "next";
import { MachineParkSection } from "@/sections/MachineParkSection";

export const metadata: Metadata = {
  title: "Makine Parkı",
  description:
    "CNC torna ve işleme merkezleri, hassas kesim ve kalite ölçüm altyapısı.",
};

export default function MakineParkiPage() {
  return <MachineParkSection />;
}
