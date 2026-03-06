'use client';

import { motion } from 'framer-motion';

const DECA_PAPER_URL = '/FreshSense%20DECA%2010%20Page%20Paper%20Atin%20Jain%20%26%20Arjun%20Reddy%20FINAL.pdf';

const projects = [
  {
    title: 'LeaseMynd AI',
    description: 'AI-powered lease intelligence platform for REITs and property managers. Translates complex legal documents into structured, actionable data to reduce due diligence costs and attorney review time. Currently in pre-launch validation with MG Construction and independent real estate brokers.',
  },
  {
    title: 'FreshSense DECA 10 Page Paper',
    description: 'DECA SCDC startup business plan — co-authored with Arjun Reddy. FreshSense Innovations is a food safety solutions company featuring smart food storage containers with color-changing lid technology that detects spoilage through gas-sensitive pigments (green=fresh, yellow=aging, red=spoiled). Targets health-conscious consumers and restaurants. Seeks $600,000 investment for 8% equity to disrupt the $2B global food storage industry. Projected metrics: 20% market penetration within 3 years, 70% customer retention by year 2, 35% gross profit margin. Addresses global food waste crisis (1.3B tons wasted annually).',
    href: DECA_PAPER_URL,
    label: 'View PDF',
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-charcoal px-6 py-24 md:px-12 lg:px-20 border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light text-white mb-12"
      >
        Projects
      </motion.h2>
      <ul className="space-y-8 max-w-2xl">
        {projects.map((project, i) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="group"
          >
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.08] focus:outline focus:ring-2 focus:ring-white/50"
              >
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                {project.label && (
                  <span className="mt-4 inline-block text-sm font-medium text-white/90 underline decoration-white/40 underline-offset-2 group-hover:decoration-white">
                    {project.label}
                  </span>
                )}
              </a>
            ) : (
              <div className="block rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
