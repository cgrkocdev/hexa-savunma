"use client";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="icerik" className="flex-1 w-full bg-background">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
