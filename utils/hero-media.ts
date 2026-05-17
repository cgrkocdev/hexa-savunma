import { SITE_IMAGES, SITE_VIDEOS } from "@/lib/site-media";

/**
 * Hero arka plan medyası.
 * .env.local: NEXT_PUBLIC_HERO_VIDEO_URL, NEXT_PUBLIC_HERO_POSTER_URL
 */
const DEFAULT_POSTER = SITE_IMAGES.heroPoster;
const DEFAULT_VIDEO = SITE_VIDEOS.hero;

export function getHeroMedia(): { poster: string; videoSrc: string } {
  const video =
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || DEFAULT_VIDEO;
  const poster =
    process.env.NEXT_PUBLIC_HERO_POSTER_URL?.trim() || DEFAULT_POSTER;
  return { poster, videoSrc: video };
}
