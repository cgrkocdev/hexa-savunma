import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary";

type Base = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export type ButtonAsAnchor = Base &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

export type ButtonAsButton = Base &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const base = cn(
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-ds border px-5 py-2.5 text-sm font-medium touch-manipulation",
  "disabled:pointer-events-none disabled:opacity-45",
);

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "border-transparent bg-gradient-to-b from-accent to-brand-teal text-accent-foreground shadow-glow",
    "ds-glow-primary hover:brightness-[1.05]",
  ),
  secondary: cn(
    "border-border bg-surface-elevated/60 text-foreground backdrop-blur-sm",
    "hover:bg-surface-elevated ds-glow-secondary",
  ),
};

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:|\/\/)/i.test(href);
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    if ("href" in props && typeof props.href === "string") {
      const { variant = "primary", className, children, href, ...anchorRest } =
        props as ButtonAsAnchor;
      const cls = cn(base, variants[variant], className);

      if (isExternalHref(href)) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={cls}
            {...anchorRest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          prefetch
          {...(anchorRest as Omit<typeof anchorRest, "href">)}
        >
          {children}
        </Link>
      );
    }

    const { variant = "primary", className, children, ...buttonRest } =
      props as ButtonAsButton;
    const cls = cn(base, variants[variant], className);
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonRest.type ?? "button"}
        className={cls}
        {...buttonRest}
      >
        {children}
      </button>
    );
  },
);
