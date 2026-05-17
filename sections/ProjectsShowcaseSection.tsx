import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SITE_IMAGES } from "@/lib/site-media";
import { cn } from "@/utils/cn";

type Project = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    slug: "precision-metal",
    title: "Hassas metal parça imalatı",
    description:
      "Uçuş kritik braketlerde seri üretim; ilk parça korelasyonu, SPC kontrol noktaları ve revizyon kilidi seyahat paketleriyle denetime hazır teslim.",
    imageSrc: SITE_IMAGES.projectCnc,
    imageAlt:
      "Kontrollü endüstriyel ortamda hassas CNC ile metal parça işleme",
  },
  {
    slug: "defense-prototype",
    title: "Savunma prototip geliştirme",
    description:
      "Zaman kutulu prototip hatları, kontrollü konfigürasyon çizgileri, ihracat farkındalıklı dokümantasyon ve risk ile kanıtı hizalı kapılı incelemeler.",
    imageSrc: SITE_IMAGES.projectPrototype,
    imageAlt: "CNC ile hassas metal prototip parça işleme",
  },
  {
    slug: "industrial-system-design",
    title: "Endüstriyel sistem tasarımı",
    description:
      "Güç, güvenlik ve servis edilebilirlik için disiplinler arası yerleşim; arayüzler model kontrollü, bakım notları ve devreye alma listeleri teslim setine gömülü.",
    imageSrc: SITE_IMAGES.projectFacility,
    imageAlt: "Dış yürüyüş yollarından görülen modern endüstriyel tesis",
  },
  {
    slug: "custom-engineering",
    title: "Özel mühendislik çözümü",
    description:
      "Gereksinim yakalamadan doğrulamaya tek noktadan sorumluluk; DFMA geri bildirimi, tolerans bütçelemesi ve açık kabul ölçütleriyle tedarikçiye hazır çizimler.",
    imageSrc: SITE_IMAGES.projectEngineering,
    imageAlt: "Mühendislik hesapları ve teknik çözüm geliştirme",
  },
];

export function ProjectsShowcaseSection() {
  return (
    <Section bordered padding="lg" reveal={false} className="bg-background">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
          Projeler
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Kanıtla teslim edilen programlar
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          Metal işleme, savunma prototipleme, sistem yerleşimi ve özel
          mühendislikte örnek işler — izlenebilirlik, kontrollü değişiklik ve
          profesyonel program yönetimi için yapılandırılmıştır.
        </p>
      </div>

      <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {projects.map((p) => (
          <li key={p.slug}>
            <article
              tabIndex={0}
              role="region"
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-elevated outline-none",
                "shadow-[0_10px_40px_rgba(13,21,20,0.08)]",
                "transition-[border-color,box-shadow,transform] duration-300 ease-out",
                "md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-[0_16px_48px_rgba(15,122,114,0.14)]",
                "focus-within:border-accent/40 focus-within:shadow-[0_16px_48px_rgba(15,122,114,0.14)]",
                "focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
              aria-labelledby={`${p.slug}-title`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:scale-100 motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition duration-300 group-hover:from-black/65 group-focus-within:from-black/65"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-0 motion-reduce:group-focus-within:opacity-0 ds-grid-bg-dense"
                  aria-hidden
                />
                <div className="absolute left-3 top-3 z-[1] flex items-center gap-2">
                  <span className="rounded-sm border border-border bg-white/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground shadow-sm backdrop-blur-sm">
                    Özet dosya
                  </span>
                  <span className="hidden rounded-sm border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent backdrop-blur-sm sm:inline">
                    Doğrulanmış
                  </span>
                </div>
              </div>

              <div className="relative z-[1] flex flex-1 flex-col border-t border-border bg-gradient-to-b from-surface to-surface-elevated p-4 sm:p-5">
                <h2
                  id={`${p.slug}-title`}
                  className="font-display text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg"
                >
                  {p.title}
                </h2>

                <div
                  className={cn(
                    "pointer-events-none mt-3 h-px w-10 bg-accent/50 transition duration-300 ease-out",
                    "group-hover:w-full group-hover:bg-accent/35",
                    "group-focus-within:w-full group-focus-within:bg-accent/35",
                  )}
                />

                <div
                  className={cn(
                    "mt-3 max-h-60 translate-y-0 overflow-hidden opacity-100",
                    "md:max-h-0 md:translate-y-2 md:opacity-0 md:transition-[max-height,opacity,transform] md:duration-300 md:ease-out",
                    "md:group-hover:max-h-60 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                    "md:group-focus-within:max-h-60 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100",
                  )}
                >
                  <p className="text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-ds border border-accent/30 bg-accent/5 px-3 py-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-glow"
                      aria-hidden
                    />
                    <span className="font-mono text-[10px] font-medium leading-snug tracking-wide text-foreground sm:text-[11px]">
                      Mühendislik zorluğu çözüldü
                    </span>
                  </div>
                </div>

                <p className="mt-auto pt-4 font-mono text-[10px] text-steel-500 md:transition md:duration-300 md:group-hover:opacity-40 md:group-focus-within:opacity-40">
                  NDA uyumlu özet · temsili kapsam
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
