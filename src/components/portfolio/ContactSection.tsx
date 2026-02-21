'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    await navigator.clipboard.writeText('atinjain117@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="min-h-screen bg-white text-charcoal flex flex-col items-center justify-center px-6 py-24 relative">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-medium z-50"
            role="status"
            aria-live="polite"
          >
            Copied
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-light text-charcoal"
      >
        Let&apos;s get in touch.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-16 flex flex-col items-center gap-8 text-xl md:text-2xl"
      >
        <button
          onClick={copyEmail}
          className="text-charcoal underline decoration-charcoal/40 underline-offset-4 hover:decoration-charcoal focus:outline focus:ring-2 focus:ring-charcoal/30 rounded px-2 py-1"
        >
          atinjain117@gmail.com
        </button>
        <a
          href="tel:+17326665310"
          className="text-charcoal underline decoration-charcoal/40 underline-offset-4 hover:decoration-charcoal focus:outline focus:ring-2 focus:ring-charcoal/30 rounded px-2 py-1"
        >
          732-666-5310
        </a>
        <a
          href="https://linkedin.com/in/atinjain1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal underline decoration-charcoal/40 underline-offset-4 hover:decoration-charcoal focus:outline focus:ring-2 focus:ring-charcoal/30 rounded px-2 py-1"
        >
          linkedin.com/in/atinjain1
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 text-charcoal/60 text-sm"
      >
        I respond to all inquiries within 24 hours.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mt-4 text-charcoal/50 text-sm"
      >
        Letters of recommendation available upon request from past employers and other parties.
      </motion.p>
    </section>
  );
}
