"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { Underline } from "@/components/ui/Scribbles";
import { Ink, inkItem, inkList, onView, Write } from "@/components/ui/Ink";
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
    <Section id="contact" title={t(strings.contactTitle)}>
      <Ink>
        <p className="max-w-xl font-serif text-xl leading-relaxed md:text-2xl">{t(strings.contactBody)}</p>
      </Ink>

      {email && (
        <motion.a
          {...onView}
          variants={inkItem}
          href={email.href}
          className="relative mt-8 inline-block font-serif text-[clamp(1.5rem,5vw,2.75rem)] break-all hover:text-pen"
        >
          {email.label}
          <Underline />
        </motion.a>
      )}

      <motion.ul {...onView} variants={inkList} className="mt-12 grid gap-x-14 sm:grid-cols-2">
        {profile.contacts
          .filter((c) => c.kind !== "email")
          .map((c) => (
            <motion.li
              variants={inkItem}
              key={c.kind}
              className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
            >
              <span className="text-faded">{CONTACT_NAMES[c.kind]}</span>
              <a
                href={c.href}
                target={c.kind === "phone" ? undefined : "_blank"}
                rel="noopener"
                className="truncate underline decoration-rule hover:text-pen hover:decoration-pen"
              >
                {c.label}
              </a>
            </motion.li>
          ))}
      </motion.ul>

      <p className="mt-16">
        <Write className="hand -rotate-2 text-2xl text-pen" delay={0.3}>
          {t(strings.signOff)}
        </Write>
      </p>
    </Section>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mx-auto flex max-w-4xl flex-wrap justify-between gap-4 border-t border-rule px-5 pt-6 pb-12 text-sm text-faded">
      <p>
        © {new Date().getFullYear()} {portfolioData.profile.name.en}
      </p>
      <a href="#top" className="hover:text-ink">
        {t(strings.backToTop)}
      </a>
    </footer>
  );
}
