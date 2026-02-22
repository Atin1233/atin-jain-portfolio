'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars: { title: string; body: string; icon: React.ReactNode }[] = [];

export function OperatingPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  if (pillars.length === 0) return null;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 py-24 md:px-12 lg:px-20 bg-charcoal" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white max-w-5xl leading-[1.1]"
      >
        I OPERATE LIKE AN ANALYST, NOT A STUDENT
      </motion.h2>

      <div className="mt-24 md:mt-32 max-w-3xl space-y-16 md:space-y-20">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.08 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex gap-5"
          >
            <div className="mt-0.5">{pillar.icon}</div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
                {pillar.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
