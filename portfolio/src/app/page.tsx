import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Certificates } from "@/components/sections/Certificates";
import { Contact, CornerBadge, Footer } from "@/components/sections/Contact";
import { ResumeView } from "@/components/sections/ResumeView";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* one bordered editorial column */}
      <div className="mx-auto max-w-6xl border-x border-line pt-14">
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
      <ResumeView />
      <CornerBadge />
    </>
  );
}
