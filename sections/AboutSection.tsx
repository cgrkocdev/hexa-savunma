import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";

function IconEngineering({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  );
}

function IconManufacturing({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 6V3" />
      <path d="M8 6 6.5 3" />
      <path d="M16 6l1.5-3" />
      <path d="M4 10h16" />
      <path d="M6 10v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconValidation({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const features = [
  {
    title: "Mühendislik odaklı yaklaşım",
    description:
      "İhtiyaçlar; revizyon kontrollü teknik veri paketleri, çizimler ve üretilebilirlik (DFM) kararlarıyla yönetilir — denetlenebilir bir iz bırakır.",
    icon: IconEngineering,
  },
  {
    title: "İmalat kabiliyeti",
    description:
      "Teknik resme dayalı üretim, süreç disiplini, izlenebilirlik ve savunma ile endüstriyel programlar için tekrarlanabilir kalite.",
    icon: IconManufacturing,
  },
  {
    title: "Test ve doğrulama",
    description:
      "Riskle uyumlu doğrulama planları, kanıt toplama ve teslim kapıları — performans iddiaları veriye dayanır.",
    icon: IconValidation,
  },
] as const;

export function AboutSection() {
  return (
    <Section bordered padding="lg" className="bg-surface">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
        <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
          Hakkımızda
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hexa Teknoloji &amp; Savunma
        </h1>
        <p className="mt-5 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          Hexa Teknoloji &amp; Savunma; 2022 yılında kurulmuş dinamik bir mühendislik ve imalat
          şirketidir. Teknik resim tabanlı üretim, prototipleme ve savunma sanayi
          çözümlerinde uzmanlaşmıştır.
        </p>
      </div>

      <ul className="mt-10 grid list-none gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon: Icon }) => (
          <li key={title}>
            <Card className="group flex h-full flex-col gap-4 p-6 sm:p-7">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-ds border border-border",
                  "bg-surface-elevated/70 text-accent shadow-none",
                  "transition-[border-color,box-shadow,color,background-color] duration-300 ease-out",
                  "group-hover:border-accent/35 group-hover:text-accent",
                )}
              >
                <Icon />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
