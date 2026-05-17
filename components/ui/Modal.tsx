"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Başlık altında ikincil satır (ör. makine kategorisi) */
  subtitle?: string;
  children: ReactNode;
  /** Ek sınıflar diyalog paneline */
  className?: string;
};

export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  className,
}: ModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, handleKeyDown]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[200]">
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
        aria-label="Pencereyi kapat"
        onClick={onClose}
      />
      <div className="relative z-10 flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4 md:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={cn(
            "pointer-events-auto w-full max-w-2xl overflow-hidden rounded-t-[var(--radius-lg)] border border-border-strong sm:rounded-[var(--radius-lg)]",
            "bg-gradient-to-b from-surface-elevated to-surface shadow-glow-lg",
            "max-h-[min(92svh,100%)] sm:max-h-none",
            className,
          )}
        >
        <div className="flex items-start justify-between gap-3 border-b border-border bg-surface/80 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-steel-400">
              Teknik özellik özeti
            </p>
            <h2
              id={titleId}
              className="font-display mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-sm text-muted">{subtitle}</p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-ds border border-border bg-surface-elevated/80 px-3 py-1.5 font-mono text-xs text-muted transition-[color,border-color,box-shadow] duration-300 ease-out hover:border-accent/40 hover:text-foreground"
            aria-label="Kapat"
          >
            Esc
          </button>
        </div>
        <div className="max-h-[min(70svh,640px)] overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6">
          {children}
        </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
