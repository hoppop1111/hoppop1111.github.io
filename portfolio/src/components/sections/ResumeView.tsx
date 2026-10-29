"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { RESUME_EVENT } from "@/lib/resume";
import { setScrollLocked } from "@/components/SmoothScroll";
import type { TimelineEntry } from "@/types/portfolio";

/** Full-screen, printable resume built from the same data as the site. */
export function ResumeView() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const { profile, experience, education, skills } = portfolioData;
  const phone = profile.contacts.find((c) => c.kind === "phone");
  const email = profile.contacts.find((c) => c.kind === "email");
  const links = profile.contacts.filter((c) => c.kind === "github" || c.kind === "linkedin" || c.kind === "kaggle");

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(RESUME_EVENT, show);
    return () => window.removeEventListener(RESUME_EVENT, show);
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-lenis-prevent
          role="dialog"
          aria-modal
          aria-label={t(strings.viewResume)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-bg px-4 pt-20 pb-20 sm:px-6"
        >
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl space-y-6"
          >
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setOpen(false)} className="btn">
                ← {t(strings.backToSite)}
              </button>
              <button onClick={() => window.print()} className="btn">
                {t(strings.print)}
              </button>
              <a href={profile.resume.href} download={profile.resume.downloadName} className="btn btn-solid">
                <Download className="h-3.5 w-3.5" /> {t(strings.downloadPdf)}
              </a>
            </div>

            <article id="resume-sheet" className="crosshair space-y-8 border border-line bg-panel p-6 sm:p-10">
              <header className="space-y-4 border-b border-line pb-6">
                <h1 className="display text-4xl sm:text-5xl">{t(profile.name)}</h1>
                <p className="display text-xl normal-case text-fg/80">
                  {t(profile.role)} | {t(profile.tagline)}
                </p>
                <div className="grid gap-2 pt-2 font-mono text-xs text-muted sm:grid-cols-2">
                  {phone && (
                    <a href={phone.href} className="flex items-center gap-2 hover:text-fg">
                      <Phone className="h-3.5 w-3.5" /> {phone.label}
                    </a>
                  )}
                  {email && (
                    <a href={email.href} className="flex items-center gap-2 uppercase hover:text-fg">
                      <Mail className="h-3.5 w-3.5" /> {email.label}
                    </a>
                  )}
                  <span className="flex items-center gap-2 uppercase">
                    <MapPin className="h-3.5 w-3.5" /> {t(strings.country)}
                  </span>
                  <span className="flex gap-4 uppercase">
                    {links.map((l) => (
                      <a key={l.kind} href={l.href} target="_blank" rel="noopener" className="underline hover:text-fg">
                        {l.kind}
                      </a>
                    ))}
                  </span>
                </div>
              </header>

              <section className="space-y-3 border-b border-line pb-6">
                <h2 className="display text-2xl">{t(strings.profile)}</h2>
                <p className="text-sm leading-relaxed text-fg/80">{t(profile.bio)}</p>
              </section>

              <ResumeEntries title={t(strings.experience)} entries={experience} />
              <ResumeEntries title={t(strings.education)} entries={education} />

              <section className="space-y-4">
                <h2 className="display text-2xl">{t(strings.skills)}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((g) => (
                    <div key={g.id}>
                      <p className="label mb-2">{t(g.title)}</p>
                      <p className="text-sm leading-relaxed text-fg/80">{g.items.map(t).join(" · ")}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ResumeEntries({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  const { t } = useLocale();
  return (
    <section className="space-y-4">
      <h2 className="display text-2xl">{title}</h2>
      {entries.map((e) => (
        <div key={e.id} className="space-y-3 border border-line bg-bg p-5">
          <div>
            <h3 className="display text-xl normal-case">{t(e.title)}</h3>
            <p className="text-xs text-muted">{t(e.org)}</p>
            <p className="mt-1 font-mono text-[11px] text-muted">{t(e.period)}</p>
          </div>
          <ul className="list-inside list-disc space-y-1.5 text-xs leading-relaxed text-fg/80 sm:text-sm">
            {e.points.map((p, i) => (
              <li key={i}>{t(p)}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
