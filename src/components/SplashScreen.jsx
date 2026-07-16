import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HOLD_MS = 2000;
const EXIT_SECONDS = 0.9;
const NAME = 'Mulero Alamou';
const SPLASH_SIZE_CLASSES = 'text-[clamp(28px,6vw,64px)]';

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
      className="fixed inset-0 z-[100] bg-bg pointer-events-none flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: EXIT_SECONDS, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (phase === 'exit') {
          document.body.style.overflow = '';
          onFinish();
        }
      }}
    >
      <motion.div layout transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap justify-center px-6">
        {NAME.split('').map((char, i) =>
          char === ' ' ? (
            <span
              key={i}
              className={`inline-block ${SPLASH_SIZE_CLASSES}`}
              style={{ width: '0.3em' }}
            />
          ) : (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                delay: i * 0.035,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block font-display font-bold gradient-text ${SPLASH_SIZE_CLASSES}`}
            >
              {char}
            </motion.span>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
