
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main>
          <section id="home" className="min-h-screen w-full flex items-center">
            <HeroSection />
          </section>

          <section id="about" className="min-h-screen w-full flex items-center ">
            <AboutSection />
          </section>
          
          <section id="project" className="min-h-screen w-full flex items-center ">
            <ProjectSection />
          </section>

          <section id="contact" className="min-h-screen w-full flex items-center ">
            <ContactSection />
          </section>
    </main>
  );
}
