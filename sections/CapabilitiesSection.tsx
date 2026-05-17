"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";

function IconCnc({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}

function IconDrawing({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
      <path d="M9 9h1" />
    </svg>
  );
}

function IconDefense({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M8 12h8" />
    </svg>
  );
}

function IconPrototype({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
      <path d="M7 8h6" />
      <path d="M7 12h4" />
    </svg>
  );
}

function IconEngineering({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 3v18h18" />
      <path d="M7 16l3-3 3 3 5-5" />
      <path d="M18 8h-4V4" />
    </svg>
  );
}

const services = [
  {
    title: "CNC talaşlı imalat",
    description:
      "Kontrollü takım stratejileri, fixtür disiplini ve ölçülebilir yüzey bütünlüğü ile dar toleranslı talaşlı üretim — kritik parçalar için.",
    icon: IconCnc,
  },
  {
    title: "Teknik resim üzerinden imalat",
    description:
      "Yayımlanmış resimlere bağlı üretim, revizyon kontrolü ve izlenebilir sapmalar — tasarım niyetinin imalatta korunması.",
    icon: IconDrawing,
  },
  {
    title: "Savunma sanayi çözümleri",
    description:
      "Regüle ortamlar için program uyumu: konfigürasyon disiplini, dokümantasyon paketleri ve ihracat farkındalıklı iş birliği modelleri.",
    icon: IconDefense,
  },
  {
    title: "Prototip geliştirme",
    description:
      "Tanımlı kabul ölçütleri, metroloji destekli doğrulama ve seri üretime temiz geçiş — hızlı iterasyon döngüleri.",
    icon: IconPrototype,
  },
  {
    title: "Endüstriyel mühendislik desteği",
    description:
      "Rotalama, kapasite varsayımları, DFMA geri bildirimi ve ölçeklenmeden önce risk azaltma — üretim hazırlığı.",
    icon: IconEngineering,
  },
] as const;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardClass = cn(
  "group flex h-full flex-col gap-4 p-6 sm:p-7",
  "origin-center will-change-transform",
  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
  "md:hover:scale-[1.02] md:hover:border-accent/35 md:hover:shadow-glow-md",
  "motion-reduce:transition-none motion-reduce:md:hover:scale-100",
);

const iconWrapClass = cn(
  "flex h-12 w-12 items-center justify-center rounded-ds border border-border",
  "bg-surface-elevated/70 text-accent",
  "transition-[border-color,color,box-shadow] duration-300 ease-out",
  "group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-glow",
);

export function CapabilitiesSection() {
  return (
    <Section bordered padding="lg" reveal={false} className="bg-background">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
          Kabiliyetler
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Teknik hizmetler
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          Resim kontrollü imalat, disiplinli CNC ve savunma programlarına uygun
          süreç hijyeni — tekrarlanabilirlik, kanıt ve zamanında teslimat için
          tasarlanmıştır.
        </p>
      </div>

      <motion.ul
        className="mt-10 grid list-none grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map(({ title, description, icon: Icon }) => (
          <motion.li key={title} variants={itemVariants}>
            <Card glow className={cardClass}>
              <div className={iconWrapClass}>
                <Icon />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
