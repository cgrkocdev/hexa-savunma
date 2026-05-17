/**
 * Yerel site medyası — tüm varsayılanlar public/ altında.
 */

export const SITE_IMAGES = {
  heroPoster: "/images/hero-cnc.jpg",
  projectCnc: "/images/project-cnc.jpg",
  projectPrototype: "/images/project-prototype.jpg",
  projectFacility: "/images/project-facility.jpg",
  projectEngineering: "/images/project-engineering.jpg",
  machinePark: "/images/machines/park-hero.jpg",
  machineParkHero: "/images/machines/park-hero.jpg",
  /** Ana sayfa keşfet kartı — makine parkı banner’dan farklı görsel */
  machineParkExplore: "/images/explore-machine-park.jpg",
  exploreAbout: "/images/explore-about-v2.jpg",
  exploreProjects: "/images/explore-projects-v2.jpg",
  exploreWhy: "/images/explore-why-v2.jpg",
  exploreContact: "/images/explore-contact-v2.jpg",
  machines: {
    dmgMori: "/images/machines/machine-dmg-mori.jpg",
    haasVf2: "/images/machines/machine-haas-vf2.jpg",
    haasSt10: "/images/machines/machine-haas-st10-lathe.jpg",
    haasTm1p: "/images/machines/machine-haas-tm1p.jpg",
    haasTm2: "/images/machines/machine-haas-tm2.jpg",
  },
} as const;

export const SITE_VIDEOS = {
  hero: "/videos/hero.mp4",
  /** Makine parkı banner — Mixkit #21079 (freze tezgâhı; #4302 manzara, kullanılmaz) */
  machinePark: "/videos/machine-park-cnc.mp4",
} as const;

export const ALL_LOCAL_MEDIA_PATHS = [
  SITE_IMAGES.heroPoster,
  "/images/hero-poster.jpg",
  SITE_IMAGES.projectCnc,
  SITE_IMAGES.projectPrototype,
  SITE_IMAGES.projectFacility,
  SITE_IMAGES.projectEngineering,
  SITE_IMAGES.machineParkHero,
  SITE_IMAGES.machineParkExplore,
  SITE_IMAGES.exploreAbout,
  "/images/explore-about.jpg",
  SITE_IMAGES.exploreProjects,
  "/images/explore-projects.jpg",
  SITE_IMAGES.exploreWhy,
  "/images/explore-why.jpg",
  SITE_IMAGES.exploreContact,
  "/images/explore-contact.jpg",
  ...Object.values(SITE_IMAGES.machines),
  SITE_VIDEOS.hero,
  SITE_VIDEOS.machinePark,
  "/brand/hexa-logo.png",
] as const;
