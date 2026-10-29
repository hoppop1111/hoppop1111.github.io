"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, Reveal, stagger } from "@/components/ui/Reveal";
import type { ContactKind } from "@/types/portfolio";

const CONTACT_NAMES: Record<ContactKind, string> = {
  email: "Email",
  phone: "Phone",
  line: "LINE",
  linkedin: "LinkedIn",
  github: "GitHub",
  kaggle: "Kaggle",
};

export function Contact() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  return (
    <Section id="contact" index={5} title={t(strings.contactTitle)} lead={t(strings.contactBody)}>
      {email && (
        <Reveal>
          <a
            href={email.href}
            className="display inline-block text-[clamp(2rem,8vw,5rem)] break-all normal-case underline decoration-muted decoration-2 underline-offset-[0.18em] transition-colors hover:decoration-fg"
          >
            {email.label} ↗
          </a>
        </Reveal>
      )}

      <motion.ul {...onView} variants={stagger} className="mt-14 border-t border-line">
        {profile.contacts
          .filter((c) => c.kind !== "email")
          .map((c) => (
            <motion.li variants={fadeUp} key={c.kind}>
              <a
                href={c.href}
                target={c.kind === "phone" ? undefined : "_blank"}
                rel="noopener"
                className="group flex items-baseline justify-between gap-4 border-b border-line bg-bg/70 px-2 py-4 transition-colors hover:bg-fg hover:text-bg md:px-4"
              >
                <span className="label group-hover:text-bg">{CONTACT_NAMES[c.kind]}</span>
                <span className="truncate font-mono text-sm tracking-wider">{c.label} ↗</span>
              </a>
            </motion.li>
          ))}
      </motion.ul>
    </Section>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="label flex flex-wrap justify-between gap-4 px-6 pt-6 pb-24 sm:px-10 md:pb-14">
      <p>
        © {new Date().getFullYear()} {portfolioData.profile.name.en}
      </p>
      <p>{t(strings.country)}</p>
    </footer>
  );
}

/** Monogram badge fixed to the bottom-right corner; takes you back to the top. */
export function CornerBadge() {
  const { t } = useLocale();
  return (
    <a
      href="#top"
      aria-label={t(strings.backToTop)}
      className="display fixed right-4 bottom-4 z-50 flex h-11 w-11 items-center justify-center border border-line bg-bg text-lg transition-colors hover:border-fg md:right-6 md:bottom-6"
    >
      KS
      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-fg" />
    </a>
  );
}
