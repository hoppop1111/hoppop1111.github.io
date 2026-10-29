"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { onView } from "@/components/ui/Reveal";

export function Certificates() {
  const { t } = useLocale();

  return (
    <Section id="certificates" index={4} title={t(strings.certsTitle)} lead={t(strings.certsLead)}>
      <motion.ul
        {...onView}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="border-t border-line"
      >
        {portfolioData.certificates.map((c, i) => (
          <motion.li
            key={c.id}
            variants={{
              hidden: { opacity: 0, x: -24 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <a
              href={c.file}
              target="_blank"
              rel="noopener"
              className="group flex items-baseline gap-5 border-b border-line bg-bg/70 px-2 py-4 transition-colors hover:bg-fg hover:text-bg md:px-4"
            >
              <span className="label group-hover:text-bg">{String(i + 1).padStart(2, "0")}</span>
              <span className="display flex-1 text-2xl normal-case md:text-3xl">{c.name}</span>
              <span className="label group-hover:text-bg">PDF ↗</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
