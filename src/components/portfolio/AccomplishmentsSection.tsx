'use client';

import { motion } from 'framer-motion';

const accomplishments = [
  'Generated high four figures in revenue across Conquer With Faith Apparel and Linyr Web Design since 2024.',
  'Self-taught Excel, VSCode, Cursor, GitHub, and N8N to manage business operations and build software without external technical support.',
];

export function AccomplishmentsSection() {
  return (
    <section className="bg-charcoal px-6 py-24 md:px-12 lg:px-20 border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light text-white mb-12"
      >
        Selected Accomplishments
      </motion.h2>
      <ul className="space-y-6 max-w-2xl">
        {accomplishments.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="text-white/80 text-base md:text-lg leading-relaxed flex gap-3"
          >
            <span className="text-white/40 mt-1.5">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
