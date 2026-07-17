import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const GREETINGS = ['Hello', 'Bonjour', 'Hola', 'Bawo', 'こんにちは'];
const GREETING_INTERVAL_MS = 1000;
const GREETING_TRANSITION_SECONDS = 0.35;
const HOLD_MS = GREETINGS.length * GREETING_INTERVAL_MS;
const EXIT_SECONDS = 0.9;
const SPLASH_SIZE_CLASSES = 'text-[clamp(28px,6vw,64px)]';

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState('hold');
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const cycleTimer = setInterval(() => {
      setGreetingIndex((i) => Math.min(i + 1, GREETINGS.length - 1));
    }, GREETING_INTERVAL_MS);

    const holdTimer = setTimeout(() => {
      setPhase('exit');
    }, HOLD_MS);

    return () => {
      clearInterval(cycleTimer);
      clearTimeout(holdTimer);
    };
  }, []);

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
      <div className="relative overflow-hidden px-6 py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={GREETINGS[greetingIndex]}
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-60%', opacity: 0 }}
            transition={{ duration: GREETING_TRANSITION_SECONDS, ease: EASE }}
            className="inline-block"
          >
            <span className={`inline-block font-display font-bold gradient-text ${SPLASH_SIZE_CLASSES}`}>
              {GREETINGS[greetingIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
