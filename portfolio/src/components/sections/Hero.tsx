"use client";

import { portfolioData } from "@/data/portfolioData";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { Arrow, Circle } from "@/components/ui/Scribbles";

export function Hero() {
  const { t } = useLocale();
  const { profile } = portfolioData;
  const email = profile.contacts.find((c) => c.kind === "email");

  return (
    <section id="top" className="mx-auto grid max-w-4xl gap-14 px-5 pt-16 pb-14 md:grid-cols-[1fr_auto] md:gap-12 md:pt-24">
      <div>
        <p className="hand inline-block -rotate-2 text-xl text-pen">{t(strings.hello)}</p>
        <h1 className="mt-2 font-serif text-[clamp(2.8rem,8vw,5.2rem)] leading-[1.1]">
          {/* keep first name and surname whole: Thai has no spaces, so the browser would split the surname */}
          {t(profile.name)
            .split(" ")
            .map((part) => (
              <span key={part} className="inline-block whitespace-nowrap">
                {part}&nbsp;
              </span>
            ))}
        </h1>

        <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed md:text-[1.4rem]">{t(profile.bio)}</p>
        <p className="mt-5 text-faded">
          {t(profile.role)} · <span className="marker text-ink">{t(profile.tagline)}</span>
        </p>

        <p className="mt-10">
          <span className="relative inline-block px-1">
            {t(profile.status)}
            <Circle />
          </span>
        </p>

        <p className="mt-10 leading-loose">
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
        </p>
      </div>

      {/* taped-in polaroid */}
      <figure className="relative mx-auto w-56 rotate-[2.5deg] self-start md:mt-6 md:w-60">
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
      </figure>
    </section>
  );
}
