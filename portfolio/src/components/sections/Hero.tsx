"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Arrow, Circle } from "@/components/ui/Scribbles";
import { inkItem, inkList, Write } from "@/components/ui/Ink";

export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  // the polaroid drifts down and tilts further as the hero scrolls away
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, still ? 0 : 140]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [2.5, still ? 2.5 : 9]);

  return (
    <section
      ref={ref}
      id="top"
      className="mx-auto grid max-w-4xl gap-14 px-5 pt-16 pb-14 md:grid-cols-[1fr_auto] md:gap-12 md:pt-24"
    >
      <motion.div initial="hidden" animate="show" variants={inkList}>
        <Write className="hand -rotate-2 text-xl text-pen" delay={0.1}>
          {t(strings.hello)}
        </Write>
        <motion.h1 variants={inkItem} className="mt-2 font-serif text-[clamp(2.8rem,8vw,5.2rem)] leading-[1.1]">
          {/* keep first name and surname whole: Thai has no spaces, so the browser would split the surname */}
          {t(profile.name)
            .split(" ")
            .map((part) => (
              <span key={part} className="inline-block whitespace-nowrap">
                {part}&nbsp;
              </span>
            ))}
        </motion.h1>

        <motion.p variants={inkItem} className="mt-6 max-w-xl font-serif text-xl leading-relaxed md:text-[1.4rem]">
          {t(profile.bio)}
        </motion.p>
        <motion.p variants={inkItem} className="mt-5 text-faded">
          {t(profile.role)} · <span className="marker text-ink">{t(profile.tagline)}</span>
        </motion.p>

        <motion.p variants={inkItem} className="mt-10">
          <span className="relative inline-block px-1">
            {t(profile.status)}
            <Circle />
          </span>
        </motion.p>

        <motion.p variants={inkItem} className="mt-10 leading-loose">
          <a
            href={profile.resume.href}
            download={profile.resume.downloadName}
            className="underline decoration-pen decoration-2 hover:text-pen"
          >
            ↓ {t(strings.resume)}
          </a>
          {email && (
            <>
              <br className="sm:hidden" />
              <span className="text-faded sm:ml-3">
                {t(strings.orEmail)}{" "}
                <a href={email.href} className="text-ink underline hover:text-pen">
                  {email.label}
                </a>
              </span>
            </>
          )}
        </motion.p>
      </motion.div>

      {/* taped-in polaroid */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: photoY, rotate: photoRotate }}
        className="relative mx-auto w-56 self-start md:mt-6 md:w-60"
      >
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-3 bg-[rgba(236,224,180,0.8)] shadow-sm dark:bg-[rgba(200,186,140,0.45)]"
        />
        <div className="bg-[#fffdf8] p-2.5 pb-12 shadow-[0_10px_25px_-12px_rgba(0,0,0,0.45)] dark:bg-[#2b2823]">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
          <img src={profile.avatar.src} alt={t(profile.avatar.alt)} className="aspect-[4/5] w-full object-cover object-top" />
        </div>
        <figcaption className="hand absolute inset-x-0 bottom-2.5 text-center text-xl text-[#3a352c] dark:text-ink">
          {t(strings.thatsMe)}
        </figcaption>
        <Arrow className="absolute top-1/3 -left-24 hidden h-12 w-20 -rotate-12 md:block" />
      </motion.figure>
    </section>
  );
}
