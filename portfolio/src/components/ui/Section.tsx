import { Underline } from "@/components/ui/Scribbles";
import { Ink, Write } from "@/components/ui/Ink";

/** Page section with a serif title, a pen underline and an optional margin note. */
export function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-6 px-5 py-14 md:py-20">
      <div className="mb-10 flex flex-wrap items-end gap-x-6 gap-y-2">
        <Ink>
          <h2 className="font-serif text-4xl md:text-5xl">
            <span className="relative inline-block">
              {title}
              <Underline />
            </span>
          </h2>
        </Ink>
        {note && <Write className="hand -rotate-2 text-lg text-pen">← {note}</Write>}
      </div>
      {children}
    </section>
  );
}
