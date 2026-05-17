import type { Metadata } from "next";
import { ProjectsShowcaseSection } from "@/sections/ProjectsShowcaseSection";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Metal bileşen üretimi, savunma prototipi, sistem tasarımı ve özel mühendislik referansları.",
};

export default function ProjelerPage() {
  return <ProjectsShowcaseSection />;
}
