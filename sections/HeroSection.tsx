"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { getHeroMedia } from "@/utils/hero-media";

const highlights = [
  { label: "CNC talaşlı imalat", href: "/kabiliyetler" },
  { label: "Savunma programları", href: "/projeler" },
  { label: "Makine parkı", href: "/makine-parki" },
] as const;

const metrics = [
  { value: "2022", label: "Kuruluş" },
  { value: "µm", label: "Hassasiyet odağı" },
  { value: "Tek hat", label: "Mühendislik & imalat" },
] as const;

export function HeroSection() {
  const { poster, videoSrc } = getHeroMedia();
  const [bgVideoFailed, setBgVideoFailed] = useState(false);
  const [allowVideo, setAllowVideo] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    if (reduced || saveData) setAllowVideo(false);
  }, []);

  const showVideo = allowVideo && !bgVideoFailed;

  return (
    <section
      aria-label="Hexa Teknoloji ve Savunma — ana tanıtım"
      className="relative isolate -mt-14 flex min-h-[min(100svh,52rem)] flex-col overflow-hidden border-b-2 border-border sm:-mt-16 sm:min-h-[min(100svh,54rem)]"
    >
      {/* Arka plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src={poster}
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {showVideo ? (
          <video
            className={cn(
              "absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-700",
              bgVideoFailed ? "opacity-0" : "opacity-100",
            )}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload="auto"
            aria-hidden
            onError={() => setBgVideoFailed(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
      </div>

      {/* Sinematik örtüler */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/45 to-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/25 to-black/30"
        aria-hidden
      />
      {/* İçerik */}
      <div className="relative z-10 flex flex-1 flex-col justify-end pt-20 sm:pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-10 md:px-8 md:pb-12">
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl lg:max-w-3xl">
              <div className="inline-flex items-center gap-3">
                <span
                  className="h-8 w-px shrink-0 bg-gradient-to-b from-accent via-accent-strong to-transparent"
                  aria-hidden
                />
                <span className="font-mono text-[10px] font-medium uppercase tracking-kicker text-teal-200/90 sm:text-[11px]">
                  Teknoloji &amp; Savunma
                </span>
              </div>

              <h1 className="mt-4 font-display text-[clamp(1.85rem,5.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-5xl md:text-6xl">
                <span className="block text-balance">
                  Hassas imalat.
                </span>
                <span className="mt-1 block text-balance bg-gradient-to-r from-teal-100 via-teal-200 to-accent bg-clip-text text-transparent">
                  Savunma çözümleri.
                </span>
              </h1>

              <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed">
                Hexa; mühendislik, CNC üretim ve program yönetimini tek disiplin
                altında birleştirir — izlenebilir, ölçülebilir teslimat için.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/kabiliyetler"
                  prefetch
                  className={cn(
                    "inline-flex min-h-[2.875rem] items-center justify-center gap-2 rounded-ds px-7 py-3 text-sm font-semibold",
                    "bg-accent text-accent-foreground shadow-[0_8px_32px_rgba(15,122,114,0.45)]",
                    "transition-[transform,box-shadow,filter] duration-200 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(15,122,114,0.5)] active:scale-[0.98]",
                  )}
                >
                  Kabiliyetleri incele
                  <span aria-hidden className="text-base leading-none opacity-80">
                    →
                  </span>
                </Link>
                <Link
                  href="/iletisim"
                  prefetch
                  className={cn(
                    "inline-flex min-h-[2.875rem] items-center justify-center rounded-ds px-7 py-3 text-sm font-semibold text-white/95",
                    "ring-1 ring-inset ring-white/35 transition-colors duration-200",
                    "hover:bg-white/10 hover:ring-white/50 active:scale-[0.98]",
                  )}
                >
                  İletişime geç
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 md:hidden">
                {highlights.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch
                      className="inline-flex rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur-sm transition hover:bg-white/15"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="hidden shrink-0 flex-col gap-2.5 md:flex">
              {highlights.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch
                    className={cn(
                      "group flex min-w-[14rem] items-center justify-between gap-4 rounded-ds px-4 py-3",
                      "bg-white/[0.07] ring-1 ring-inset ring-white/15 backdrop-blur-md",
                      "transition-[background-color,ring-color,transform] duration-200",
                      "hover:bg-white/12 hover:ring-white/25 hover:-translate-x-0.5",
                    )}
                  >
                    <span className="text-sm font-medium text-white/90">
                      {item.label}
                    </span>
                    <span
                      className="text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-white/15 pt-6 sm:mt-12 sm:gap-6 sm:pt-10 md:max-w-2xl lg:max-w-2xl">
            {metrics.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
                  {m.value}
                </dd>
                <dd className="mt-1 font-mono text-[9px] uppercase leading-snug tracking-[0.12em] text-white/55 sm:text-[10px] sm:tracking-[0.2em] md:text-[11px]">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="mx-auto flex w-full max-w-6xl justify-center px-4 pb-6 sm:pb-8"
          aria-hidden
        >
          <span className="flex flex-col items-center gap-2 text-white/40">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em]">
              Kaydır
            </span>
            <span className="block h-8 w-px animate-pulse bg-gradient-to-b from-white/50 to-transparent" />
          </span>
        </div>
      </div>
    </section>
  );
}
