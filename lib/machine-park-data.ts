import { SITE_IMAGES, SITE_VIDEOS } from "@/lib/site-media";

export type MachineSpec = { label: string; value: string };

export type MachineItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
  specs: MachineSpec[];
};

export const MACHINE_PARK_HERO = {
  video: SITE_VIDEOS.machinePark,
} as const;

export const MACHINES: MachineItem[] = [
  {
    id: "dmg-mori",
    name: "DMG MORI CMX 1100 V",
    category: "3 eksen dikey işleme merkezi",
    description:
      "Yüksek hassasiyetli 3 eksen dikey işleme merkezi; karmaşık geometriler ve sıkı toleranslar için.",
    imageSrc: SITE_IMAGES.machines.dmgMori,
    imageAlt: "Dikey CNC işleme merkezi — metal parça frezeleme",
    highlights: ["12.000 d/d", "1100 mm X", "Siemens 828D"],
    specs: [
      { label: "Eksenler", value: "3 (X, Y, Z)" },
      { label: "İşleme alanı (X×Y×Z)", value: "1100 × 560 × 510 mm" },
      { label: "Masa boyutu", value: "1200 × 560 mm" },
      { label: "Maks. tablo yükü", value: "600 kg" },
      { label: "İmil tipi", value: "BT40" },
      { label: "İmil hızı", value: "12.000 d/d" },
      { label: "Takım kapasitesi", value: "30 adet" },
      { label: "Kontrol ünitesi", value: "Siemens 828D" },
    ],
  },
  {
    id: "haas-vf2",
    name: "HAAS VF-2",
    category: "3 eksen dikey işleme merkezi",
    description:
      "Güvenilir 3 eksen dikey işleme merkezi; prototip ve üretim serileri için hızlı ve verimli işleme.",
    imageSrc: SITE_IMAGES.machines.haasVf2,
    imageAlt: "Dikey işleme merkezi — üretim hattında CNC frezeleme",
    highlights: ["8.100 d/d", "CAT40", "20 takım"],
    specs: [
      { label: "Eksenler", value: "3 (X, Y, Z)" },
      { label: "İşleme alanı (X×Y×Z)", value: "762 × 406 × 508 mm" },
      { label: "Masa boyutu", value: "914 × 356 mm" },
      { label: "Maks. tablo yükü", value: "340 kg" },
      { label: "İmil tipi", value: "CAT40" },
      { label: "İmil hızı", value: "8.100 d/d" },
      { label: "Takım kapasitesi", value: "20 adet" },
      { label: "Kontrol ünitesi", value: "Haas CNC" },
    ],
  },
  {
    id: "haas-st10",
    name: "HAAS ST-10",
    category: "CNC torna tezgâhı",
    description:
      "Yüksek hassasiyetli CNC torna; silindirik parçalar ve karmaşık torna işlemleri için.",
    imageSrc: SITE_IMAGES.machines.haasSt10,
    imageAlt: "CNC torna tezgâhı — silindirik parça tornalama",
    highlights: ["Ø419 mm", "12 istasyon", "4.000 d/d"],
    specs: [
      { label: "Tip", value: "CNC torna" },
      { label: "Maks. tornalama çapı", value: "419 mm" },
      { label: "Maks. tornalama uzunluğu", value: "559 mm" },
      { label: "Bar besleme çapı", value: "64 mm" },
      { label: "İmil hızı", value: "4.000 d/d" },
      { label: "Takım istasyonları", value: "12 adet" },
      { label: "Kontrol ünitesi", value: "Haas CNC" },
    ],
  },
  {
    id: "haas-tm1p",
    name: "HAAS TM-1P",
    category: "3 eksen dikey işleme merkezi",
    description:
      "Kompakt 3 eksen dikey işleme merkezi; küçük ve orta boy parçalar için ideal.",
    imageSrc: SITE_IMAGES.machines.haasTm1p,
    imageAlt: "Kompakt dikey CNC işleme merkezi — hassas parça",
    highlights: ["Kompakt hat", "6.000 d/d", "10 takım"],
    specs: [
      { label: "Eksenler", value: "3 (X, Y, Z)" },
      { label: "İşleme alanı (X×Y×Z)", value: "762 × 305 × 406 mm" },
      { label: "Masa boyutu", value: "914 × 305 mm" },
      { label: "Maks. tablo yükü", value: "227 kg" },
      { label: "İmil tipi", value: "CAT40" },
      { label: "İmil hızı", value: "6.000 d/d" },
      { label: "Takım kapasitesi", value: "10 adet" },
      { label: "Kontrol ünitesi", value: "Haas CNC" },
    ],
  },
  {
    id: "haas-tm2",
    name: "HAAS TM-2",
    category: "3 eksen dikey işleme merkezi",
    description:
      "Genişletilmiş işleme alanına sahip 3 eksen dikey işleme merkezi; daha büyük parçalar için.",
    imageSrc: SITE_IMAGES.machines.haasTm2,
    imageAlt: "Geniş tabla dikey CNC işleme merkezi — seri üretim",
    highlights: ["1016 mm X", "CAT40", "Seri üretim"],
    specs: [
      { label: "Eksenler", value: "3 (X, Y, Z)" },
      { label: "İşleme alanı (X×Y×Z)", value: "1016 × 406 × 406 mm" },
      { label: "Masa boyutu", value: "1168 × 356 mm" },
      { label: "Maks. tablo yükü", value: "340 kg" },
      { label: "İmil tipi", value: "CAT40" },
      { label: "İmil hızı", value: "6.000 d/d" },
      { label: "Takım kapasitesi", value: "10 adet" },
      { label: "Kontrol ünitesi", value: "Haas CNC" },
    ],
  },
];
