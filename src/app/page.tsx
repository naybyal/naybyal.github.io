
import { HeroSection } from '@/components/portfolio/HeroSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { TechStackSection } from '@/components/portfolio/TechStackSection';
import { ContactSection } from '@/components/portfolio/ContactSection';



const Page = () => {
  return (
    <main className="min-h-screen selection:bg-foreground selection:text-background">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}

export default Page;