import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HOLD_MS = 1500;
const EXIT_SECONDS = 0.9;

const SplashScreen = ({ onReveal, onFinish }) => {
  const [phase, setPhase] = useState('hold');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setPhase('exit');
      onReveal();
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [onReveal]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: EXIT_SECONDS, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (phase === 'exit') {
          document.body.style.overflow = '';
          onFinish();
        }
      }}
    />
  );
};

export default SplashScreen;
