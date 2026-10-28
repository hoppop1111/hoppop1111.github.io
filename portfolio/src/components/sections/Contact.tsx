"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import type { ContactKind } from "@/types/portfolio";
import { Fog, Wall } from "@/components/effects/Atmosphere";
import { Spotlight } from "@/components/effects/Spotlight";
import { DustParticles } from "@/components/effects/DustParticles";
import { ChapterTitle } from "@/components/ui/ChapterTitle";
import { GlowButton } from "@/components/ui/GlowButton";
import { GithubIcon, KaggleIcon, LineIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const ICONS: Record<ContactKind, React.ReactNode> = {
  email: <Mail className="h-5 w-5" />,
  phone: <Phone className="h-5 w-5" />,
  line: <LineIcon />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  kaggle: <KaggleIcon />,
};

export function Contact() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  return (
    <section id="contact" className="relative overflow-hidden bg-night">
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-32 text-center">
        <Wall />
        <Spotlight originX={50} intensity={0.85} swing={10} />
        <Fog />
        <DustParticles beamX={50} density={0.7} />

        <div className="relative z-10 flex flex-col items-center">
          <ChapterTitle title="CONTACT" eyebrow={t(strings.contactTitle)} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE_CINE, delay: 0.8 }}
            className="mt-6 max-w-md font-serif text-xl text-[#c9d6d8] italic md:text-2xl"
          >
            {t(strings.contactBody)}
          </motion.p>

          {email && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: EASE_CINE, delay: 1.1 }}
              className="mt-10"
            >
              <GlowButton href={email.href} className="normal-case !tracking-wider text-sm">
                <Mail className="h-4 w-4" /> {email.label}
              </GlowButton>
            </motion.div>
          )}

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08, delayChildren: 1.3 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {profile.contacts
              .filter((c) => c.kind !== "email")
              .map((c) => (
                <motion.li
                  key={c.kind}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.9, ease: EASE_CINE }}
                >
                  <a
                    href={c.href}
                    target={c.kind === "phone" ? undefined : "_blank"}
                    rel="noopener"
                    className="hud flex items-center gap-3 rounded-full px-5 py-3 font-mono text-xs text-[#d6eef1] transition-colors hover:text-lamp"
                  >
                    <span className="text-hud">{ICONS[c.kind]}</span>
                    {c.label}
                  </a>
                </motion.li>
              ))}
          </motion.ul>
        </div>
      </div>

      <footer className="relative border-t border-hud/10 px-5 py-8 text-center font-mono text-[10px] tracking-[0.35em] text-[#5f7a7e] uppercase">
        © {new Date().getFullYear()} {profile.name.en}
      </footer>
    </section>
  );
}
