import { RevealBlock } from "@/components/scroll/reveal-block";

const pillars = [
  {
    kicker: "01 — Verim",
    title: "Hızlı ve hassas imalat",
    body: "Metroloji destekli offsetler, stabil fixtür ve seyahat disiplini ile kontrollü çevrim süreleri — hızın kanıt ve tekrarlanabilirlikten ödün vermemesi için.",
  },
  {
    kicker: "02 — Otorite",
    title: "Mühendislik öncelikli yaklaşım",
    body: "Teknik kararlar önde: çizim niyeti, tolerans yığınları ve risk kayıtları — imalat, mühendisliğin yetkilendirdiğini yürütür, tersi değil.",
  },
  {
    kicker: "03 — Yönetişim",
    title: "Savunma uyumluluğu zihniyeti",
    body: "Konfigürasyon kontrolü, ihracat farkındalıklı iş birliği ve dokümantasyon hijyeni teslim gereksinimi olarak ele alınır — regüle programların denetlendiği şekilde hizalanır.",
  },
] as const;

export function WhyHexaSection() {
  return (
    <section
      aria-labelledby="neden-hexa-baslik"
      className="relative overflow-hidden border-b-2 border-border bg-background py-16 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 ds-grid-bg-animate opacity-[0.38]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(26,171,159,0.14),transparent_52%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/55 to-background" />
      </div>

      <RevealBlock className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:max-w-5xl lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-steel-300 sm:text-xs">
          Neden Hexa?
        </p>
        <h1
          id="neden-hexa-baslik"
          className="font-display mt-4 text-balance text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-foreground sm:mt-5"
        >
          <span className="text-accent">Görev kritikliğinde</span> hesap
          verebilirlik için tasarlanmış bir teklif.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          Takvimler sıkıştığında ve inceleme arttığında kazanan duruş basittir:
          mühendislik otoritesi, imalat hassasiyeti ve uyumluluk hijyeni — tek
          kapalı döngüde çalışır.
        </p>

        <ul className="mt-12 space-y-12 text-center sm:mt-20 sm:space-y-16 md:mt-24 md:space-y-20">
          {pillars.map((p) => (
            <li key={p.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                {p.kicker}
              </p>
              <h2 className="font-display mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.08]">
                {p.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </RevealBlock>
    </section>
  );
}
