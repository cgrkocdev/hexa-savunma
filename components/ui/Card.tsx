import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Hover’da çelik mavisi parlama */
  glow?: boolean;
  /** Hafif yükseltilmiş yüzey gradyanı */
  elevated?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, glow = true, elevated = false, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-6",
        "shadow-[0_8px_32px_rgba(13,21,20,0.07)] backdrop-blur-sm",
        elevated &&
          "bg-gradient-to-br from-surface-elevated via-surface to-graphite-950/50",
        glow && "ds-glow-surface",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
