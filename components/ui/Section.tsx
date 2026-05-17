"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GridBackground } from "@/components/ui/GridBackground";
import { cn } from "@/utils/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** İç container’a ek sınıflar */
  innerClassName?: string;
  /** Alt kenarda ince ayırıcı */
  bordered?: boolean;
  /** Arka planda ızgara */
  withGrid?: boolean;
  denseGrid?: boolean;
  /** Dikey padding ölçeği */
  padding?: "none" | "md" | "lg";
  /** Görünür alana girince hafif reveal */
  reveal?: boolean;
};

const paddingMap = {
  none: "",
  md: "py-14 sm:py-20 md:py-24",
  lg: "py-16 sm:py-24 md:py-28 lg:py-32",
};

export function Section({
  id,
  children,
  className,
  innerClassName,
  bordered = true,
  withGrid = false,
  denseGrid = false,
  padding = "lg",
  reveal = false,
}: SectionProps) {
  const reduced = useReducedMotion();

  const innerClasses = cn(
    "relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8",
    innerClassName,
  );

  const inner = reveal ? (
    <motion.div
      className={innerClasses}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -4% 0px" }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  ) : (
    <div className={innerClasses}>{children}</div>
  );

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        id && "scroll-mt-[4.75rem] sm:scroll-mt-[5.75rem]",
        bordered && "border-b-2 border-border",
        paddingMap[padding],
        className,
      )}
    >
      {withGrid ? <GridBackground dense={denseGrid} /> : null}
      {inner}
    </section>
  );
}
