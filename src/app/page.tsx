import { HeroSection } from '@/components/portfolio/HeroSection';
import { OperatingPhilosophy } from '@/components/portfolio/OperatingPhilosophy';
import { ProofOfWork } from '@/components/portfolio/ProofOfWork';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { AccomplishmentsSection } from '@/components/portfolio/AccomplishmentsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <OperatingPhilosophy />
      <ProofOfWork />
      <SkillsSection />
      <EducationSection />
      <AccomplishmentsSection />
      <section className="min-h-[30vh] flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 bg-charcoal border-t border-white/5">
        <p className="text-white/50 text-lg">
          Interested in: wealth management, fintech operations, and the
          intersection of real estate and finance.
        </p>
      </section>
      <ContactSection />
    </main>
  );
}
