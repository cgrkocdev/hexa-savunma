import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SITE_IMAGES } from "@/lib/site-media";
import { cn } from "@/utils/cn";
import { HeroSection } from "@/sections/HeroSection";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Hexa Teknoloji & Savunma — mühendislik, imalat ve savunma sanayi çözümleri. Türkiye merkezli hassas üretim.",
};

const exploreCards = [
  {
    href: "/hakkimizda",
    label: "Hakkımızda",
    description: "Kuruluş, vizyon ve mühendislik odaklı yaklaşım.",
    image: SITE_IMAGES.exploreAbout,
    alt: "Ekip toplantısı ve kurumsal vizyon",
  },
  {
    href: "/kabiliyetler",
    label: "Kabiliyetler",
    description: "CNC imalat, prototip ve savunma programları.",
    image: SITE_IMAGES.exploreCapabilities,
    alt: "CNC işleme merkezi — hassas metal frezeleme",
  },
  {
    href: "/makine-parki",
    label: "Makine Parkı",
    description: "5 tezgâh — işleme merkezi ve torna kapasitesi.",
    image: SITE_IMAGES.machineParkExplore,
    alt: "Makine parkı üretim hattı",
  },
  {
    href: "/projeler",
    label: "Projeler",
    description: "Temsili program özetleri ve referans alanları.",
    image: SITE_IMAGES.exploreProjects,
    alt: "Savunma ve imalat programları — mühendislik atölyesi",
  },
  {
    href: "/neden-hexa",
    label: "Neden Hexa?",
    description: "Hesap verebilirlik ve uyumluluk odağı.",
    image: SITE_IMAGES.exploreWhy,
    alt: "Kalite, uyumluluk ve süreç yönetimi",
  },
  {
    href: "/iletisim",
    label: "İletişim",
    description: "Teklif ve iş birliği için doğrudan kanal.",
    image: SITE_IMAGES.exploreContact,
    alt: "İş birliği ve teklif görüşmesi",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Section bordered padding="lg" className="bg-surface">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
            Keşfet
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kurumsal bilgi ve hizmetler
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Her konu ayrı sayfada; teknik içerik, makine parkı ve iletişim için
            aşağıdaki kartları kullanın.
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-elevated",
                  "shadow-[0_8px_28px_rgba(13,21,20,0.06)] transition-[border-color,box-shadow,transform] duration-300 ease-out",
                  "md:hover:-translate-y-0.5 md:hover:border-accent/35 md:hover:shadow-[0_14px_40px_rgba(15,122,114,0.12)] active:scale-[0.99]",
                )}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-accent">
                    Sayfaya git →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
