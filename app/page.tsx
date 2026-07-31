import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { AchievementsAndCerts } from "@/components/AchievementsAndCerts";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <AchievementsAndCerts />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
