import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        brand: {
          teal: "var(--color-brand-teal)",
        },
        graphite: {
          950: "var(--color-graphite-950)",
          900: "var(--color-graphite-900)",
          800: "var(--color-graphite-800)",
          700: "var(--color-graphite-700)",
          600: "var(--color-graphite-600)",
        },
        steel: {
          600: "var(--color-steel-600)",
          500: "var(--color-steel-500)",
          400: "var(--color-steel-400)",
          300: "var(--color-steel-300)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        /** Başlıklar — gövde ile aynı kurumsal aile (IBM Plex Sans) */
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        ds: "var(--radius-md)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      boxShadow: {
        glow: "var(--shadow-glow-sm)",
        "glow-md": "var(--shadow-glow-md)",
        "glow-lg": "var(--shadow-glow-lg)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, var(--background)), radial-gradient(var(--grid-line) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
