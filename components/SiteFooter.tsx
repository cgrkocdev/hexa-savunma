export function SiteFooter() {
  return (
    <footer data-hexa-footer className="border-t-2 border-border bg-surface">
      <div
        data-hexa-footer-inner
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-6 sm:py-14 sm:text-left md:px-8"
      >
        <div className="flex flex-col gap-1 sm:gap-0">
          <p className="font-mono text-xs tracking-widest text-muted">
            © {new Date().getFullYear()} Hexa Teknoloji &amp; Savunma
          </p>
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-steel-400">
            Mühendislik · İmalat · Savunma
          </p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted sm:text-sm">
          Bu sitedeki bilgiler tanıtım amaçlıdır; teknik özellikler ve ihracat
          kısıtları proje bazında değerlendirilir.
        </p>
      </div>
    </footer>
  );
}
