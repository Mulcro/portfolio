import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const TEXT_SWITCH_MS = 0.5;

const ROLES = [
  { label: 'Software Engineer', bg: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.45)', text: '#a78bfa', dot: '#c4b5fd' },
  { label: 'Data Engineer', bg: 'rgba(34,211,238,0.15)', border: 'rgba(34,211,238,0.45)', text: '#22d3ee', dot: '#67e8f9' },
  { label: 'ML Enthusiast', bg: 'rgba(244,114,182,0.15)', border: 'rgba(244,114,182,0.45)', text: '#f472b6', dot: '#f9a8d4' },
];
const INTERVAL_MS = 3000;

const RevolvingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const role = ROLES[index];

  return (
    <motion.div
      layout
      animate={{ backgroundColor: role.bg, borderColor: role.border }}
      transition={{
        layout: { duration: 0.4, ease: EASE },
        backgroundColor: { duration: TEXT_SWITCH_MS, ease: EASE, delay: TEXT_SWITCH_MS },
        borderColor: { duration: TEXT_SWITCH_MS, ease: EASE, delay: TEXT_SWITCH_MS },
      }}
      className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full border mb-4 overflow-hidden"
    >
      <span className="relative flex items-center justify-center w-2 h-2 flex-shrink-0">
        <motion.span
          animate={{ backgroundColor: role.dot }}
          transition={{ duration: TEXT_SWITCH_MS, ease: EASE, delay: TEXT_SWITCH_MS }}
          className="absolute inset-0 rounded-full"
        />
        <motion.span
          animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ backgroundColor: role.dot }}
          className="absolute inset-0 rounded-full"
        />
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={role.label}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          style={{ color: role.text }}
          className="uppercase tracking-[0.2em] text-[15px] font-bold whitespace-nowrap"
        >
          {role.label}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

export default RevolvingRole;
