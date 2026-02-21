'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DURATION_MS = 800;
const EASE = [0.76, 0, 0.24, 1] as const;

export function PageReveal() {
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setRevealed(true), DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!revealed && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 50 L 100 50"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
            />
          </svg>
          <motion.div
            className="absolute left-0 right-0 top-0 h-1/2 bg-charcoal"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: EASE }}
            style={{ transformOrigin: '50% 100%' }}
          />
          <motion.div
            className="absolute left-0 right-0 bottom-0 h-1/2 bg-charcoal"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: EASE }}
            style={{ transformOrigin: '50% 0%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
