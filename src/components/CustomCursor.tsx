'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LERP = 0.1;
const DOT_SIZE = 8;
const RING_SIZE = 40;

export function CustomCursor() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    document.body.style.cursor = isDesktop ? 'none' : '';
    return () => {
      document.body.style.cursor = '';
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);

    const interval = setInterval(() => {
      pos.current.x += (target.current.x - pos.current.x) * LERP;
      pos.current.y += (target.current.y - pos.current.y) * LERP;
      setCursorPos({ x: pos.current.x, y: pos.current.y });
    }, 16);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
      clearInterval(interval);
    };
  }, [visible, isDesktop]);

  useEffect(() => {
    const links = document.querySelectorAll('a, button, [role="button"]');
    const cards = document.querySelectorAll('[data-cursor-view]');
    const onLinkEnter = () => setIsHoveringLink(true);
    const onLinkLeave = () => setIsHoveringLink(false);
    const onCardEnter = () => setIsHoveringCard(true);
    const onCardLeave = () => setIsHoveringCard(false);
    links.forEach((el) => {
      el.addEventListener('mouseenter', onLinkEnter);
      el.addEventListener('mouseleave', onLinkLeave);
    });
    cards.forEach((el) => {
      el.addEventListener('mouseenter', onCardEnter);
      el.addEventListener('mouseleave', onCardLeave);
    });
    return () => {
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onLinkEnter);
        el.removeEventListener('mouseleave', onLinkLeave);
      });
      cards.forEach((el) => {
        el.removeEventListener('mouseenter', onCardEnter);
        el.removeEventListener('mouseleave', onCardLeave);
      });
    };
  }, []);

  if (!isDesktop || !visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorPos.x,
          y: cursorPos.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={false}
        animate={{
          width: isHoveringCard ? 80 : isHoveringLink ? RING_SIZE : DOT_SIZE,
          height: isHoveringCard ? 32 : isHoveringLink ? RING_SIZE : DOT_SIZE,
          borderRadius: isHoveringCard ? 4 : '50%',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      >
        {isHoveringCard ? (
          <span className="flex items-center justify-center w-full h-full text-[10px] font-medium uppercase tracking-wider text-white bg-transparent border border-white rounded">
            View
          </span>
        ) : (
          <div
            className="w-full h-full rounded-full bg-white"
            style={{
              boxShadow: isHoveringLink ? '0 0 0 1px white' : undefined,
              background: isHoveringLink ? 'transparent' : 'white',
            }}
          />
        )}
      </motion.div>
    </>
  );
}
