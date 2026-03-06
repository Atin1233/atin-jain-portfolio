import { HeroSection } from '@/components/portfolio/HeroSection';
import { ProofOfWork } from '@/components/portfolio/ProofOfWork';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ContactSection } from '@/components/portfolio/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <EducationSection />
      <ProofOfWork />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
