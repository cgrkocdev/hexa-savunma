import type { Metadata } from "next";
import { ContactSection } from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Hexa Teknoloji & Savunma ile iletişim: talep formu, e-posta, telefon ve lokasyon bilgileri.",
};

export default function IletisimPage() {
  return <ContactSection />;
}
