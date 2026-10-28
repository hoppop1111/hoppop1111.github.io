"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Section } from "@/components/ui/Section";
import { inkItem, inkList, onView } from "@/components/ui/Ink";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about" title={t(strings.aboutTitle)} note={t(strings.aboutNote)}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {portfolioData.skills.map((group) => (
          <div key={group.id}>
            <h3 className="mb-3 font-serif text-2xl italic">{t(group.title)}</h3>
            <motion.ul {...onView} variants={inkList}>
              {group.items.map((item) => (
                <motion.li variants={inkItem} key={item.en} className="flex gap-3 border-b border-dashed border-rule py-2.5">
                  <span className="text-faded">–</span>
                  {t(item)}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
