
import { HeroSection } from '@/components/portfolio/HeroSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { TechStackSection } from '@/components/portfolio/TechStackSection';
import { ContactSection } from '@/components/portfolio/ContactSection';



const Page = () => {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}

export default Page;