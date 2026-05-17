"use client";

import { cn } from "@/utils/cn";

export function GridBackground({
  className,
  dense,
}: {
  className?: string;
  /** Daha sık çizgiler */
  dense?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.5]",
        dense ? "ds-grid-bg-dense" : "ds-grid-bg",
        className,
      )}
      aria-hidden
    />
  );
}
