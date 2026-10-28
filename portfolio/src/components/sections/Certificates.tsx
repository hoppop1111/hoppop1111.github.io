"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { inkItem, inkList, onView } from "@/components/ui/Ink";

export function Certificates() {
  const { t } = useLocale();

  return (
    <Section id="certificates" title={t(strings.certsTitle)} note={t(strings.certsNote)}>
      <motion.ul {...onView} variants={inkList} className="grid gap-x-14 md:grid-cols-2">
        {portfolioData.certificates.map((c) => (
          <motion.li variants={inkItem} key={c.id}>
            <a
              href={c.file}
              target="_blank"
              rel="noopener"
              className="flex items-baseline gap-3 border-b border-dashed border-rule py-3 transition-colors hover:text-pen"
            >
              <span>{c.name}</span>
              <span className="flex-1" />
              <span className="font-mono text-xs text-faded">PDF ↗</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
