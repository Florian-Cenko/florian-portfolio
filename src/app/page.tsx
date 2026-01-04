import Hero from "@/components/Hero";
import About from "@/components/About";
import Summary from "@/components/Summary";
import Strengths from "@/components/Strengths";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Languages from "@/components/Languages";
import SectionWrapper from "./components/SectionWrapper";


export default function Portfolio() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      
        <Hero />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <Summary />
      </SectionWrapper>
      <SectionWrapper>
        <Strengths />
      </SectionWrapper>
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      <SectionWrapper>
        <Learning />
      </SectionWrapper>
      <SectionWrapper>
        <Languages />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </main>
  );
}