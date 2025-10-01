import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedCharacter } from "@/components/animated-character"
import { ThreeBackground } from "@/components/three-background"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <AnimatedCharacter />
    </div>
  )
}
