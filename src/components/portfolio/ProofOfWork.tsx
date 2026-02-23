'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Experience ordered by prominence: Elias Counsel, JSTickets, LeaseMynd, Linyr, CWF, Referee
const projects = [
  {
    id: 'elias',
    name: 'Elias Counsel LLC',
    role: 'Intern',
    location: 'New Jersey · July 2024 – Sept 2024',
    bullets: [
      'Shadowed estate planning attorneys; observed trust administration, wealth transfer strategies, and fiduciary compliance processes.',
      'Reviewed client financial documentation structures and tax implication frameworks for estate decisions.',
    ],
    metric: 'Wealth & estate planning',
    color: 'from-slate-800/50 to-slate-900/70',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center p-4">
        <Image
          src="/eliascounselllclogo.png"
          alt="Elias Counsel LLC"
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(40vw, 400px)"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 'jstickets',
    name: 'JSTickets',
    role: 'Assistant Account & Financial Manager Intern',
    location: 'Monroe Township, NJ / Long Island, NY (Hybrid) · June 2025 – Sept 2025',
    bullets: [
      'Maintained financial accounts and detailed spreadsheets tracking transactions, expenses, and revenue across multiple business lines.',
      'Processed payments and invoices; managed membership contracts and renewals with professional soccer clubs.',
      'Supported month-end reporting accuracy and collaborated with finance team to streamline documentation workflows.',
    ],
    metric: 'Month-end reporting accuracy',
    color: 'from-blue-900/40 to-blue-950/60',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center p-4">
        <Image
          src="/jsticketslogo.jpeg"
          alt="JSTickets"
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(40vw, 400px)"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 'leasemynd',
    name: 'LeaseMynd AI',
    role: 'Pre-Launch Founder',
    location: 'Feb 2025 – Present',
    bullets: [
      'Pre-launch founder of AI-powered lease intelligence platform for REITs and property managers.',
      'Conducted customer discovery with MG Construction and independent real estate brokers to validate demand for automated contract analysis.',
      'Translating complex legal documents into structured, actionable data to reduce due diligence costs and attorney review time.',
    ],
    metric: 'Pre-launch validation',
    color: 'from-amber-900/40 to-amber-950/60',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center p-4">
        <Image
          src="/mainleasemyndailogo.png"
          alt="LeaseMynd AI"
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(40vw, 400px)"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 'linyr',
    name: 'Linyr Web Design Studio',
    role: 'Founder',
    location: 'Remote · June 2025 – Present · linyr.vercel.app',
    bullets: [
      'Design and deliver custom websites to business clients; manage projects from scope definition through deployment.',
      'Generate revenue through direct sales, cold outreach, and referral networks.',
    ],
    metric: 'Building since 2024',
    color: 'from-violet-900/40 to-violet-950/60',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center p-4">
        <a href="https://linyr.vercel.app" target="_blank" rel="noopener noreferrer" className="relative block w-full h-full">
          <Image
            src="/linyragencylogo.png"
            alt="Linyr Web Design Studio"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, min(40vw, 400px)"
            unoptimized
          />
        </a>
      </div>
    ),
  },
  {
    id: 'cwf',
    name: 'Conquer With Faith Apparel Co.',
    role: 'Founder & CEO',
    location: 'New Jersey · Feb 2024 – Present · conquerwithfaith.com',
    bullets: [
      'Manage full financial operations for self-funded e-commerce: budgeting, pricing strategy, and cash flow.',
      'Deployed personal capital into inventory and marketing; achieved profitability through cost optimization and demand forecasting.',
      'Negotiate supplier terms and manage inventory procurement to maintain target margins.',
      'Built and operate Shopify storefront; utilize sales data to inform purchasing decisions and seasonal planning.',
    ],
    metric: 'High 4-figures revenue',
    color: 'from-emerald-900/40 to-emerald-950/60',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center overflow-hidden rounded-lg bg-black/20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain object-center"
        >
          <source src="/cwfvid.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    id: 'referee',
    name: 'Soccer Referee',
    role: 'Grassroots – Adult Recreation',
    location: 'U.S. Soccer Federation · New Jersey · Oct 2023 – Present',
    bullets: [
      'Officiate competitive matches requiring real-time decision-making under pressure and rule enforcement authority.',
    ],
    metric: 'Decision under pressure',
    color: 'from-green-900/40 to-green-950/60',
    media: (
      <div className="relative w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center p-4">
        <Image
          src="/refereelicense.png"
          alt="Soccer referee license"
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(40vw, 400px)"
          unoptimized
        />
      </div>
    ),
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-full min-w-full min-h-full flex flex-col md:flex-row items-stretch overflow-y-auto overflow-x-hidden"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className={`flex-1 flex flex-col justify-start md:justify-center p-4 sm:p-6 md:p-12 lg:p-16 bg-gradient-to-br ${project.color} min-h-0 overflow-y-auto`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-3xl sm:text-5xl md:text-7xl font-light text-white/20 select-none leading-tight break-words">
            {project.metric}
          </p>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-5xl font-light text-white mt-2 break-words"
        >
          {project.name}
        </motion.h3>
        <p className="mt-2 text-sm sm:text-lg uppercase tracking-widest text-white/70 break-words">
          {project.role}
        </p>
        {project.location && (
          <p className="mt-1 text-xs sm:text-sm text-white/50 break-words">
            {project.location}
          </p>
        )}
        <ul className="mt-4 sm:mt-8 space-y-2 sm:space-y-3">
          {project.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="text-white/90 text-sm md:text-base list-disc list-inside break-words"
            >
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[40%] flex-shrink-0 flex items-center justify-center p-3 sm:p-6 md:p-12 min-h-[180px] sm:min-h-[220px] md:min-h-0">
        <motion.div
          className="relative w-full h-full min-h-[160px] sm:min-h-[200px] max-h-[240px] sm:max-h-[320px] md:max-h-none md:min-h-[200px] aspect-video rounded-xl overflow-hidden bg-black/20"
          style={{
            perspective: 1000,
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
        >
          {project.media}
        </motion.div>
      </div>
    </div>
  );
}

export function ProofOfWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.offsetWidth;
      const scroll = el.scrollLeft;
      const index = Math.round(scroll / w);
      setActiveIndex(Math.min(index, projects.length - 1));
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const next = Math.max(0, activeIndex - 1);
        el.scrollTo({ left: next * el.offsetWidth, behavior: 'smooth' });
      }
      if (e.key === 'ArrowRight') {
        const next = Math.min(projects.length - 1, activeIndex + 1);
        el.scrollTo({ left: next * el.offsetWidth, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <section id="proof" className="relative bg-charcoal py-8">
      <h2 className="px-4 md:px-8 mb-6 text-3xl md:text-4xl font-light tracking-tight text-white">
        Experience
      </h2>
      <div
        ref={containerRef}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-0 h-[85vh] min-h-[480px] max-h-[100dvh]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-center snap-always flex-shrink-0 w-full min-w-full min-h-full px-2 sm:px-4 md:px-8"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              containerRef.current?.scrollTo({
                left: i * (containerRef.current?.offsetWidth ?? 0),
                behavior: 'smooth',
              });
            }}
            className="rounded-full bg-white/20 transition-all focus:outline focus:ring-2 focus:ring-white/50"
            aria-label={`Go to project ${i + 1}`}
          >
            <motion.span
              className="block rounded-full bg-white"
              animate={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
              }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
