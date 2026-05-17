import { SITE_IMAGES } from "@/lib/site-media";

/** .env.local: NEXT_PUBLIC_MACHINE_PARK_IMAGE_URL */
export function getMachineParkImageSrc(): string {
  return (
    process.env.NEXT_PUBLIC_MACHINE_PARK_IMAGE_URL?.trim() ||
    SITE_IMAGES.machineParkHero
  );
}
