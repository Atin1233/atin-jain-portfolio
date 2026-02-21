'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const delay = (i: number) => ({ delay: 0.3 + i * 0.05, duration: 0.4 });

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen min-h-screen-fill flex flex-col md:flex-row overflow-hidden bg-charcoal"
      id="hero"
    >
      {/* Gradient orb following mouse */}
      <div
        className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-blue-900/30 blur-[100px] transition-opacity duration-300"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 md:px-12 lg:px-20 md:w-[60%]">
        <motion.div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={delay(0)}
            className="text-[72px] font-light leading-[1.1] tracking-[-0.02em] text-white md:text-7xl lg:text-[72px]"
          >
            Atin Jain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={delay(1)}
            className="mt-4 text-lg uppercase tracking-[0.1em] text-white/60"
          >
            Financial Operations · Business Ownership · Pre-Launch Founder
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 text-base text-white/80 leading-relaxed max-w-lg"
          >
            High school junior (Class of 2027) aspiring to major in finance and build a career in financial services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={delay(3)}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/Atin_Jain_Resume.pdf"
              download
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-white/90 focus:outline focus:ring-2 focus:ring-white/50"
            >
              Download Resume
            </Link>
            <Link
              href="#proof"
              className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline focus:ring-2 focus:ring-white/50"
            >
              View Experience
            </Link>
            <a
              href="https://linkedin.com/in/atinjain1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white underline decoration-white/50 underline-offset-4 hover:decoration-white focus:outline focus:ring-2 focus:ring-white/50 rounded"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center md:justify-end md:w-[40%] md:pr-8 lg:pr-12">
        <motion.div
          initial={{ clipPath: 'circle(50% at 50% 50%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-[320px] w-[280px] md:h-[420px] md:w-[340px] overflow-hidden rounded-3xl grayscale hover:grayscale-0 hover:scale-[1.05] transition-all duration-500"
        >
          <Image
            src="/headshot.jpeg"
            alt="Atin Jain"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 280px, 340px"
            priority
          />
        </motion.div>
      </div>

      {/* Overlap into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-charcoal" />
    </section>
  );
}
