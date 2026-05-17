"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE_NAV } from "@/lib/site-nav";
import { cn } from "@/utils/cn";

function navActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

const logoImageClass =
  "h-10 w-auto max-h-10 max-w-[11rem] object-contain object-left sm:h-11 sm:max-h-11 sm:max-w-[13rem]";

function LogoMark({
  onDark,
  priority,
}: {
  onDark?: boolean;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        onDark &&
          "rounded-lg bg-white px-2.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.22)] ring-1 ring-black/5",
      )}
    >
      <Image
        src="/brand/hexa-logo.png"
        alt="Hexa Teknoloji ve Savunma"
        width={320}
        height={320}
        priority={priority}
        sizes="(max-width: 1024px) 132px, 176px"
        className={logoImageClass}
      />
    </span>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);
  const isHome = pathname === "/";
  const heroHeader = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        data-hexa-header
        className={cn(
          "sticky top-0 z-50 border-b-2 transition-[background-color,border-color,box-shadow] duration-300 ease-out",
          heroHeader
            ? "border-transparent bg-transparent shadow-none"
            : "border-border bg-background shadow-sm",
          scrolled && !heroHeader && "shadow-md",
        )}
      >
        <div
          data-hexa-header-inner
          className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 pt-[env(safe-area-inset-top,0px)] sm:h-16 sm:gap-3 sm:px-6 md:px-8"
        >
          <Link
            href="/"
            onClick={closeMobile}
            className="flex shrink-0 items-center gap-2 py-1"
            aria-label="Ana sayfa"
          >
            <LogoMark onDark={heroHeader} priority />
          </Link>

          <nav
            data-hexa-nav-desktop
            className="hidden list-none text-[12px] font-medium md:flex md:text-[13px] lg:text-sm"
            aria-label="Ana menü"
          >
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-3 gap-y-1 p-0 md:gap-x-4 lg:gap-x-5">
              {SITE_NAV.map((item) => {
                const active = navActive(pathname, item.href);
                return (
                  <li key={item.href} className="list-none">
                    <Link
                      href={item.href}
                      prefetch
                      className={cn(
                        "relative block py-2 transition-colors duration-300 ease-out",
                        active
                          ? heroHeader
                            ? "text-white"
                            : "text-foreground"
                          : heroHeader
                            ? "text-white/80 hover:text-white"
                            : "text-muted hover:text-accent",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <span
                          className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-[70%] max-w-[4.5rem] rounded-full bg-accent shadow-glow"
                          aria-hidden
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="secondary"
              href="/iletisim"
              className={cn(
                "min-h-9 shrink-0 px-2.5 py-1.5 text-[11px] sm:min-h-10 sm:px-3 sm:text-sm",
                heroHeader &&
                  "border-white/40 bg-white/10 text-white hover:border-white/60 hover:bg-white/20 hover:text-white",
              )}
            >
              Teklif Al
            </Button>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-ds border transition-[border-color,box-shadow,color] duration-300 ease-out md:hidden",
                heroHeader
                  ? "border-white/40 bg-white/10 text-white hover:border-white/60 hover:text-white"
                  : "border-border bg-surface-elevated/70 text-foreground hover:border-accent/40 hover:text-accent",
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            aria-label="Menüyü kapat"
            onClick={closeMobile}
          />
          <nav
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col border-l-2 border-border bg-background p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] shadow-[0_0_48px_rgba(13,21,20,0.18)]"
            aria-label="Mobil menü"
          >
            <div className="mb-5 flex items-center justify-between gap-3 border-b-2 border-border pb-4">
              <Link
                href="/"
                onClick={closeMobile}
                className="min-w-0 shrink py-0.5"
                aria-label="Ana sayfa"
              >
                <LogoMark />
              </Link>
              <button
                type="button"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-ds border-2 border-border bg-surface-elevated px-3 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                onClick={closeMobile}
              >
                Kapat
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto">
              <ul className="m-0 list-none space-y-1 p-0">
                {SITE_NAV.map((item) => {
                  const active = navActive(pathname, item.href);
                  return (
                    <li key={item.href} className="list-none">
                      <Link
                        href={item.href}
                        prefetch
                        onClick={closeMobile}
                        className={cn(
                          "flex items-center justify-between rounded-[var(--radius-md)] border-2 px-3 py-3.5 text-[15px] font-semibold leading-snug transition-colors duration-200",
                          active
                            ? "border-accent/35 bg-accent/10 text-accent"
                            : "border-transparent bg-surface-elevated text-foreground hover:border-accent/25 hover:bg-accent/5 hover:text-accent",
                        )}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <span
                            className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-glow"
                            aria-hidden
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-auto border-t-2 border-border pt-4">
              <Button variant="primary" href="/iletisim" className="w-full">
                Teklif Al
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
