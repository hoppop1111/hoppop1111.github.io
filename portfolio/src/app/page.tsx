import { portfolioData, caseStudiesByCategory } from "@/data/portfolioData";

// Temporary page: proves the data layer type-checks and renders while the
// cinematic sections (Hero, About, CaseStudyViewer, Contact) are being built.
export default function Home() {
  const { profile, categories } = portfolioData;

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold">{profile.name.en}</h1>
      <p className="mt-2 opacity-70">{profile.tagline.en}</p>
      {categories.map((category) => (
        <section key={category.id} className="mt-10">
          <h2 className="text-xl font-medium">{category.label.en}</h2>
          <ul className="mt-3 list-disc pl-5 opacity-80">
            {caseStudiesByCategory(category.id).map((cs) => (
              <li key={cs.slug}>
                {cs.title.en}
                {cs.featured ? " — full case study" : ""}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
