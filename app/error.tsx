"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console -- geliştirici teşhisi
      console.error(error);
    }
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-16 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Sunucu hatası
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Bir şeyler ters gitti
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        Sayfa yüklenirken beklenmeyen bir hata oluştu. Önbelleği temizleyip
        yeniden denemek genelde sorunu giderir.
      </p>
      {error.digest ? (
        <p className="mt-2 font-mono text-[11px] text-steel-400">
          Kod: {error.digest}
        </p>
      ) : null}
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <Button type="button" variant="primary" onClick={() => reset()}>
          Yeniden dene
        </Button>
        <Button variant="secondary" href="/" className="sm:min-w-[8rem]">
          Ana sayfa
        </Button>
      </div>
      <p className="mt-10 text-xs text-muted">
        Sorun sürerse terminalde{" "}
        <code className="rounded bg-surface-elevated px-1 py-0.5 font-mono text-[11px]">
          npm run dev:clean
        </code>{" "}
        çalıştırın;{" "}
        <Link href="/iletisim" className="text-accent underline-offset-2 hover:underline">
          iletişim
        </Link>{" "}
        sayfasından bize yazabilirsiniz.
      </p>
    </div>
  );
}
