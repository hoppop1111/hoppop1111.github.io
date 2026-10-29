"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { onView } from "@/components/ui/Reveal";

export function Certificates() {
  const { t } = useLocale();

  return (
    <Section id="certificates" index="04" title={t(strings.certsTitle)} lead={t(strings.certsLead)}>
      <motion.ul
        {...onView}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: 1000 }}
      >
        {portfolioData.certificates.map((c) => (
          <motion.li
            key={c.id}
            variants={{
              hidden: { opacity: 0, rotateY: -60, y: 30 },
              show: { opacity: 1, rotateY: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <a
              href={c.file}
              target="_blank"
              rel="noopener"
              className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-line text-accent">
                <Award className="h-5 w-5" />
              </span>
              <span className="flex-1 leading-snug">{c.name}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
