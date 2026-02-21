'use client';

import { motion } from 'framer-motion';

const coursework = [
  'AP Microeconomics',
  'AP Macroeconomics',
  'Economics and Personal Finance',
  'Accounting 1',
  'AP Computer Science Principles',
  'AP Computer Science A',
  'AP Psychology',
  'AP United States History',
];

const activities = [
  { name: 'DECA', detail: '2x States-level competitor (business strategy and financial decision-making)' },
  { name: 'FBLA', detail: 'Banking & Financial Systems' },
  { name: 'Entrepreneur and Innovation Association', detail: 'Member' },
  { name: 'Varsity Soccer', detail: 'Competitive resilience and performance under pressure' },
  { name: 'Varsity Track', detail: '' },
];

export function EducationSection() {
  return (
    <section className="bg-charcoal px-6 py-24 md:px-12 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light text-white mb-4"
      >
        Education
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-xl text-white/80"
      >
        Monroe Township High School
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/50 text-sm mt-1"
      >
        Monroe Township, NJ · Expected graduation June 2027
      </motion.p>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">
            Relevant Coursework
          </h3>
          <ul className="flex flex-wrap gap-2">
            {coursework.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/90"
              >
                {c}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">
            Activities & Leadership
          </h3>
          <ul className="space-y-3">
            {activities.map((a, i) => (
              <motion.li
                key={a.name}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="text-white/90 text-sm"
              >
                <span className="font-medium text-white">{a.name}</span>
                {a.detail && (
                  <span className="text-white/60"> — {a.detail}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
