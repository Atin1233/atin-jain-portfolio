'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = ['All', 'Finance & Accounting', 'Operations & Business', 'Technical', 'Languages'] as const;

const iconClass = 'w-5 h-5 text-white/50 shrink-0';

const icons = {
  chart: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  document: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  handshake: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  cart: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V4.875c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v5.625m0 0l-2.25.75m0 0l-2.25.75m10.5 0v5.625c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-5.625m-10.5 0l2.25.75m0 0l2.25.75" />
    </svg>
  ),
  folder: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  ),
  code: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  bolt: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  globe: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0c8.284 0 15 6.716 15 15c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5c0-8.284 6.716-15 15-15z" />
    </svg>
  ),
};

const skills: {
  name: string;
  category: (typeof filters)[number];
  context: string;
  icon: keyof typeof icons;
}[] = [
  { name: 'Cash Flow Management', category: 'Finance & Accounting', context: 'Budgeting and cash flow for e-commerce and operations.', icon: 'chart' },
  { name: 'Budgeting', category: 'Finance & Accounting', context: 'Planning and managing budgets for business operations.', icon: 'chart' },
  { name: 'Revenue Operations', category: 'Finance & Accounting', context: 'Tracking revenue, expenses, and month-end reporting.', icon: 'chart' },
  { name: 'Financial Documentation', category: 'Finance & Accounting', context: 'Spreadsheets and documentation.', icon: 'document' },
  { name: 'Excel / Google Sheets', category: 'Finance & Accounting', context: 'Transaction tracking and spreadsheets.', icon: 'document' },
  { name: 'Contract Coordination', category: 'Operations & Business', context: 'Membership contracts, renewals, and client agreements.', icon: 'document' },
  { name: 'Client Relations', category: 'Operations & Business', context: 'Direct sales, outreach, and professional client communication.', icon: 'handshake' },
  { name: 'Sales Cycle Management', category: 'Operations & Business', context: 'From scope definition through deployment and follow-up.', icon: 'handshake' },
  { name: 'Shopify', category: 'Operations & Business', context: 'E-commerce storefront and operations for CWF Apparel.', icon: 'cart' },
  { name: 'Google Workspace', category: 'Operations & Business', context: 'Docs, Sheets, and collaboration.', icon: 'folder' },
  { name: 'VSCode', category: 'Technical', context: 'Scripting and automation for operations.', icon: 'code' },
  { name: 'Cursor', category: 'Technical', context: 'AI-assisted analysis and workflow tools.', icon: 'code' },
  { name: 'GitHub', category: 'Technical', context: 'Version control and project collaboration.', icon: 'code' },
  { name: 'N8N', category: 'Technical', context: 'Workflow automation and integrations.', icon: 'bolt' },
  { name: 'AI Automation Tools', category: 'Technical', context: 'Self-taught to manage operations and build without external support.', icon: 'bolt' },
  { name: 'English', category: 'Languages', context: 'Native.', icon: 'globe' },
  { name: 'Hindi', category: 'Languages', context: 'Native.', icon: 'globe' },
];

export function SkillsSection() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const filtered =
    active === 'All'
      ? skills
      : skills.filter((s) => s.category === active);

  return (
    <section className="bg-charcoal px-6 py-24 md:px-12 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light text-white mb-12"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap gap-2 mb-16 border-b border-white/10 pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="relative px-4 py-2 text-sm uppercase tracking-wider text-white/70 hover:text-white focus:outline focus:ring-2 focus:ring-white/50 rounded"
          >
            {f}
            {active === f && (
              <motion.span
                layoutId="skills-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-white"
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="max-w-3xl space-y-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
              className="flex gap-4 items-start"
            >
              <div className="mt-0.5">{icons[skill.icon]}</div>
              <div>
                <span className="text-lg font-medium text-white">{skill.name}</span>
                <span className="text-white/55 text-base ml-2 md:ml-3">
                  — {skill.context}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
