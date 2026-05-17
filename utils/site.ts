/**
 * Ortam değişkenleri (.env.local):
 * NEXT_PUBLIC_CONTACT_EMAIL
 * NEXT_PUBLIC_CONTACT_PHONE — örn. +90 212 000 00 00
 * NEXT_PUBLIC_CONTACT_LOCATION — örn. İstanbul, Türkiye
 */
const DEFAULT_CONTACT_EMAIL = "info@hexasavunma.com";
const DEFAULT_CONTACT_PHONE = "05456972880";

export function getContactEmail(): string {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email || DEFAULT_CONTACT_EMAIL;
}

export function getContactMailto(): string {
  return `mailto:${getContactEmail()}`;
}

export function getContactPhone(): string {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
  return phone || DEFAULT_CONTACT_PHONE;
}

/** Lokasyon metni; env yoksa Türkiye varsayılanı. */
export function getContactLocation(): string {
  const loc = process.env.NEXT_PUBLIC_CONTACT_LOCATION?.trim();
  return loc || "Türkiye";
}
