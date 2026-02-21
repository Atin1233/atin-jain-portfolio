'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    title: 'Financial Operations',
    body: 'Managed accounts, invoice processing, and month-end reporting for a sports ticketing firm. I don\'t observe—I execute.',
    icon: (
      <svg className="w-8 h-8 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Business Ownership',
    body: 'Self-funded, scaled, and profitably operated an e-commerce brand. P&L management, supplier negotiations, demand forecasting.',
    icon: (
      <svg className="w-8 h-8 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Tools',
    body: 'Self-taught Excel and automation. I use data and technology to support operations and analysis—accurately and independently.',
    icon: (
      <svg className="w-8 h-8 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export function OperatingPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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
