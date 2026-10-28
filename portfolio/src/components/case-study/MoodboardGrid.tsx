"use client";

import { motion } from "framer-motion";
import type { MoodboardItem } from "@/types/portfolio";
import { useLocale } from "@/lib/locale";
import { EASE_CINE } from "@/lib/motion";
import { MediaFrame } from "@/components/ui/MediaFrame";

const SPAN: Record<NonNullable<MoodboardItem["span"]>, string> = {
  square: "col-span-1 row-span-1",
  tall: "col-span-1 row-span-2",
  wide: "col-span-2 row-span-1",
};

/** Art-board style collage; tiles drop in one by one, slightly rotated like pinned prints. */
export function MoodboardGrid({ items, accent }: { items: MoodboardItem[]; accent: string }) {
  const { t } = useLocale();
  return (
    <div className="grid auto-rows-[120px] grid-cols-2 gap-3 md:auto-rows-[160px] md:grid-cols-4 md:gap-4">
      {items.map((item, i) => (
        <motion.figure
          key={item.id}
          initial={{ opacity: 0, y: 30, rotate: i % 2 ? 4 : -4, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE_CINE, delay: 0.2 + i * 0.12 }}
          whileHover={{ rotate: 0, scale: 1.03, zIndex: 2 }}
          className={`gpu group relative overflow-hidden rounded-md bg-white p-1.5 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)] ${SPAN[item.span ?? "square"]}`}
        >
          <MediaFrame media={item} accent={accent} className="rounded-sm" />
          {item.caption && (
            <figcaption className="absolute inset-x-1.5 bottom-1.5 bg-gradient-to-t from-black/70 to-transparent px-3 pt-6 pb-2 font-mono text-[10px] tracking-wider text-white uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {t(item.caption)}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  );
}
