import Hero from "@/components/hero"
import ProjectsShowcase from "@/components/projects-showcase"
import Timeline from "@/components/timeline"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import FeaturedProjects from "@/components/featured-projects"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main className="flex flex-col relative z-10">
        <Hero />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <Timeline />
        <ContactSection />
      </main>
    </div>
  )
}
