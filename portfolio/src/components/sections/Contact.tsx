"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Reveal } from "@/components/ui/Reveal";
import { ContactIcon, CONTACT_NAMES } from "@/components/ui/ContactIcon";

export function Contact() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");
  const others = profile.contacts.filter((c) => c.kind !== "email");
  const badge = `${t(profile.status)} • ${t(profile.status)} • `;

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-duck p-7 text-duck-ink sm:p-10 md:p-14">
        {/* rotating "open to opportunities" badge */}
        <svg viewBox="0 0 200 200" aria-hidden className="spin-slow absolute top-8 right-8 hidden h-36 w-36 md:block">
          <defs>
            <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-current font-mono text-[15px] tracking-[0.12em] uppercase">
            <textPath href="#badge-circle" textLength="485">
              {badge}
            </textPath>
          </text>
          <text x="100" y="114" textAnchor="middle" className="text-[40px]">
            🦆
          </text>
        </svg>

        <p className="font-mono text-xs">05 — {t(strings.navContact)}</p>
        <h2 className="display-tight mt-6 max-w-3xl font-display text-[clamp(2.8rem,8vw,6.5rem)] font-semibold">
          {t(strings.contactTitle)}
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">{t(strings.contactBody)}</p>

        {email && (
          <a
            href={email.href}
            className="group mt-10 inline-flex max-w-full items-center gap-3 border-b-2 border-duck-ink/80 pb-1 font-display text-[clamp(1.3rem,4.2vw,2.75rem)] font-medium break-all"
          >
            {email.label}
            <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}

        <ul className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((c) => (
            <li key={c.kind}>
              <a
                href={c.href}
                target={c.kind === "phone" ? undefined : "_blank"}
                rel="noopener"
                className="flex h-full items-center gap-3 rounded-2xl bg-duck-ink/[0.07] p-4 transition-colors duration-300 hover:bg-duck-ink hover:text-duck"
              >
                <ContactIcon kind={c.kind} />
                <span className="min-w-0">
                  <span className="block text-xs opacity-60">{CONTACT_NAMES[c.kind]}</span>
                  <span className="block truncate text-sm font-medium">{c.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pt-4 pb-10 text-sm text-muted sm:flex-row md:px-6">
      <p>
        © {new Date().getFullYear()} {portfolioData.profile.name.en}
      </p>
      <p>{t(strings.madeIn)}</p>
      <a href="#top" className="flex items-center gap-1.5 transition-colors hover:text-fg">
        {t(strings.backToTop)} <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
}
