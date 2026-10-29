"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, ChartBar, Code, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { fadeUp, onView, Reveal, stagger } from "@/components/ui/Reveal";
import type { ContactKind } from "@/types/portfolio";

const CONTACTS: Record<ContactKind, { name: string; icon: LucideIcon }> = {
  email: { name: "Email", icon: Mail },
  phone: { name: "Phone", icon: Phone },
  line: { name: "LINE", icon: MessageCircle },
  linkedin: { name: "LinkedIn", icon: Briefcase },
  github: { name: "GitHub", icon: Code },
  kaggle: { name: "Kaggle", icon: ChartBar },
};

export function Contact() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  return (
    <Section id="contact" index="05" title={t(strings.contactTitle)} lead={t(strings.contactBody)}>
      {email && (
        <Reveal>
          <a
            href={email.href}
            className="group inline-flex items-center gap-3 text-[clamp(1.5rem,5vw,3.25rem)] font-semibold break-all"
          >
            <span className="text-gradient">{email.label}</span>
            <ArrowUpRight className="h-8 w-8 shrink-0 text-accent-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-12 md:w-12" />
          </a>
        </Reveal>
      )}

      <motion.ul {...onView} variants={stagger} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.contacts
          .filter((c) => c.kind !== "email")
          .map((c) => {
            const { name, icon: Icon } = CONTACTS[c.kind];
            return (
              <motion.li variants={fadeUp} key={c.kind}>
                <a
                  href={c.href}
                  target={c.kind === "phone" ? undefined : "_blank"}
                  rel="noopener"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{name}</span>
                    <span className="block truncate font-medium">{c.label}</span>
                  </span>
                </a>
              </motion.li>
            );
          })}
      </motion.ul>
    </Section>
  );
}

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative z-10 mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-line px-5 pt-6 pb-12 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {portfolioData.profile.name.en}
      </p>
      <a href="#top" className="hover:text-fg">
        {t(strings.backToTop)}
      </a>
    </footer>
  );
}
