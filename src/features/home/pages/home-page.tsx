import { AboutSection } from '@/features/home/components/about-section'
import { HeroSection } from '@/features/home/components/hero-section'
import { ServicesSection } from '@/features/home/components/services-section'
import { SkillsSection } from '@/features/home/components/skills-section'
import { ContactSection } from '@/features/contact/components/contact-section'
import { ProjectsSection } from '@/features/projects/components/projects-section'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
