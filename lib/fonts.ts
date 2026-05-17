import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * Kurumsal neo-grotesk (Univers Bold’a yakın his).
 * Lisanslı Univers dosyanız varsa public/fonts + @font-face ile değiştirilebilir.
 */
export const fontSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
