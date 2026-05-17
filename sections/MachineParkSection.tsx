"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/Modal";
import { Section } from "@/components/ui/Section";
import {
  MACHINE_PARK_HERO,
  MACHINES,
  type MachineItem,
} from "@/lib/machine-park-data";
import { cn } from "@/utils/cn";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function MachineParkHero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [allowVideo, setAllowVideo] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (reduced || saveData) setAllowVideo(false);
  }, []);

  const showVideo = allowVideo && !videoFailed;

  return (
    <div
      className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-steel-900 shadow-[0_16px_48px_rgba(13,21,20,0.1)] sm:mb-12 sm:aspect-[21/9] md:mb-14"
      aria-label="CNC üretim hattı — makine parkı"
    >
      {showVideo ? (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source
            src={`${MACHINE_PARK_HERO.video}?v=21079`}
            type="video/mp4"
          />
        </video>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-steel-800 via-steel-900 to-black"
          aria-hidden
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/45 via-black/12 to-black/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-teal-950/8"
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 z-[2] p-4 sm:p-6 md:p-8">
        <p className="font-mono text-[10px] font-medium uppercase tracking-kicker text-teal-200/95 sm:text-[11px]">
          Üretim hattı
        </p>
        <p className="mt-2 max-w-xl font-display text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-xl md:text-2xl">
          Canlı kapasite · ölçülebilir çıktı
        </p>
      </div>
    </div>
  );
}

function MachineCard({
  machine,
  onOpen,
}: {
  machine: MachineItem;
  onOpen: () => void;
}) {
  return (
    <motion.article variants={itemVariants}>
      <button
        type="button"
        onClick={onOpen}
        className={cn(
          "group flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-elevated text-left",
          "shadow-[0_8px_28px_rgba(13,21,20,0.06)] transition-[border-color,box-shadow,transform] duration-300 ease-out",
          "md:hover:-translate-y-1 md:hover:border-accent/35 md:hover:shadow-[0_16px_44px_rgba(15,122,114,0.14)] active:scale-[0.99]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={machine.imageSrc}
            alt={machine.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            aria-hidden
          />
          <span className="absolute left-3 top-3 rounded-sm border border-white/25 bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-sm">
            {machine.category.includes("torna") ? "Torna" : "İşleme merkezi"}
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              {machine.name}
            </h2>
            <p className="mt-0.5 text-xs text-white/80 sm:text-sm">
              {machine.category}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {machine.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {machine.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
          <span className="mt-auto font-mono text-[10px] font-medium uppercase tracking-wider text-accent group-hover:text-accent">
            Teknik özellikler →
          </span>
        </div>
      </button>
    </motion.article>
  );
}

export function MachineParkSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = useMemo(
    () => MACHINES.find((m) => m.id === openId) ?? null,
    [openId],
  );

  return (
    <Section bordered padding="lg" reveal={false} className="bg-surface">
      <MachineParkHero />

      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
          Makine parkı
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hassasiyet için donanım
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          Dikey işleme merkezleri ve CNC torna tezgâhlarımız; dar toleranslı
          parçalar ve tekrarlanabilir süreçler için yapılandırılmıştır. Her
          tezgâh için teknik özet aşağıdadır.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-6">
        {[
          { value: "5", label: "Aktif tezgâh" },
          { value: "3+1", label: "İşleme merkezi / torna" },
          { value: "BT40", label: "İmil standardı" },
          { value: "µm", label: "Hassasiyet odağı" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-ds border border-border bg-surface-elevated px-3 py-2.5 text-center sm:px-4 sm:py-3"
          >
            <dd className="font-display text-xl font-bold text-foreground sm:text-2xl">
              {s.value}
            </dd>
            <dt className="mt-1 font-mono text-[9px] uppercase leading-snug tracking-[0.14em] text-muted sm:text-[10px] sm:tracking-[0.18em]">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>

      <motion.ul
        className="mt-10 grid list-none gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {MACHINES.map((machine) => (
          <li key={machine.id}>
            <MachineCard
              machine={machine}
              onOpen={() => setOpenId(machine.id)}
            />
          </li>
        ))}
      </motion.ul>

      <Modal
        open={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.name ?? ""}
        subtitle={active?.category}
      >
        {active ? (
          <div className="space-y-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-ds border border-border">
              <Image
                src={active.imageSrc}
                alt={active.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 560px"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted">{active.description}</p>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-steel-400">
                Teknik özellikler
              </h3>
              <dl className="mt-3 divide-y divide-border/60 rounded-ds border border-border/60 bg-surface/40">
                {active.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-3 sm:px-5"
                  >
                    <dt className="text-xs text-muted sm:text-sm">{spec.label}</dt>
                    <dd className="text-left text-xs font-medium text-foreground sm:text-right sm:text-sm">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
