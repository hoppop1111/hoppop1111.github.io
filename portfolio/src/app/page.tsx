import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Certificates } from "@/components/sections/Certificates";
import { Contact, CornerBadge, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <CornerBadge />
    </>
  );
}
