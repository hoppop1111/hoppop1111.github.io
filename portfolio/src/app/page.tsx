import { Navbar } from "@/components/sections/Navbar";
import { Hero, SkillTicker } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Certificates } from "@/components/sections/Certificates";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillTicker />
        <About />
        <Experience />
        <Work />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
