"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";
import {
  getContactEmail,
  getContactLocation,
  getContactMailto,
  getContactPhone,
} from "@/utils/site";

type FieldErrors = Partial<Record<"name" | "email" | "company" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ContactSection() {
  const contactEmail = getContactEmail();
  const contactMailtoBase = getContactMailto();
  const contactPhone = getContactPhone();
  const location = getContactLocation();

  const telHref = useMemo(() => {
    const digits = contactPhone.replace(/\D/g, "");
    if (!digits) return null;
    if (digits.startsWith("90")) return `tel:+${digits}`;
    if (digits.startsWith("0")) return `tel:+90${digits.slice(1)}`;
    return `tel:+${digits}`;
  }, [contactPhone]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sentHint, setSentHint] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Zorunlu alan";
    if (!email.trim()) next.email = "Zorunlu alan";
    else if (!emailPattern.test(email.trim())) next.email = "Geçerli bir e-posta girin";
    if (!company.trim()) next.company = "Zorunlu alan";
    if (!message.trim()) next.message = "Zorunlu alan";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSentHint(false);
    setSubmitError(null);
    if (!validate()) return;
    const subject = encodeURIComponent(
      `Hexa Teknoloji & Savunma — talep (${company.trim()})`,
    );
    const body = encodeURIComponent(
      `Ad Soyad: ${name.trim()}\nYanıt e-postası: ${email.trim()}\nŞirket: ${company.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `${contactMailtoBase}?subject=${subject}&body=${body}`;
    setSentHint(true);
  }

  return (
    <Section
      bordered={false}
      padding="lg"
      className="border-t-2 border-border bg-surface"
    >
      <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-steel-300 sm:text-xs">
            İletişim
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Güvenli program başvurusu
          </h1>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Kapsamı, çizim durumunu ve takvim kısıtlarını paylaşın. Teknik
            talepleri, uygun olduğunda ihracat farkındalıklı işleyişle mühendislik
            liderlerine yönlendiriyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-4 shadow-[0_4px_24px_rgba(13,21,20,0.06)] sm:p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-steel-400"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    className={cn("ds-input mt-2", errors.name && "border-red-500/50")}
                    value={name}
                    onChange={(ev) => {
                      setName(ev.target.value);
                      setSubmitError(null);
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name ? (
                    <p id="err-name" className="mt-1.5 text-xs text-red-400">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-steel-400"
                  >
                    E-posta
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={cn("ds-input mt-2", errors.email && "border-red-500/50")}
                    value={email}
                    onChange={(ev) => {
                      setEmail(ev.target.value);
                      setSubmitError(null);
                    }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email ? (
                    <p id="err-email" className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-company"
                    className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-steel-400"
                  >
                    Şirket
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    className={cn(
                      "ds-input mt-2",
                      errors.company && "border-red-500/50",
                    )}
                    value={company}
                    onChange={(ev) => {
                      setCompany(ev.target.value);
                      setSubmitError(null);
                    }}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? "err-company" : undefined}
                  />
                  {errors.company ? (
                    <p id="err-company" className="mt-1.5 text-xs text-red-400">
                      {errors.company}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-steel-400"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={cn(
                      "ds-input mt-2",
                      errors.message && "border-red-500/50",
                    )}
                    value={message}
                    onChange={(ev) => {
                      setMessage(ev.target.value);
                      setSubmitError(null);
                    }}
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "err-message" : undefined}
                  />
                  {errors.message ? (
                    <p id="err-message" className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              {submitError ? (
                <p
                  className="mt-4 rounded-ds border border-red-500/25 bg-red-500/5 px-3 py-2 font-mono text-[11px] text-red-200"
                  role="alert"
                >
                  {submitError}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" type="submit">
                  Mesajı gönder
                </Button>
                {sentHint ? (
                  <span className="font-mono text-[11px] text-steel-300">
                    E-posta uygulamanız açılıyor…
                  </span>
                ) : null}
              </div>

              <p className="mt-6 font-mono text-[10px] leading-relaxed text-muted">
                Gönderimler yerel e-posta istemcinizi (mailto) kullanır. Güvenlik
                politikası gerektiriyorsa, API tabanlı bir başvuru akışıyla
                değiştirilebilir.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-5">
            <div className="md:sticky md:top-24 lg:top-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-steel-400">
                Doğrudan iletişim
              </p>
              <ul className="mt-5 space-y-4">
                <li>
                  <div className="flex gap-4 rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-4 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent/30 hover:shadow-glow-sm">
                    <IconMail className="text-accent" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        E-posta
                      </p>
                      <a
                        href={contactMailtoBase}
                        className="mt-1 block text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-4 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent/30 hover:shadow-glow-sm">
                    <IconPhone className="text-accent" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        Telefon
                      </p>
                      <a
                        href={telHref ?? undefined}
                        className="mt-1 block text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                      >
                        {contactPhone}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4 rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-4 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent/30 hover:shadow-glow-sm">
                    <IconPin className="text-accent" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        Konum
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {location}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
    </Section>
  );
}
