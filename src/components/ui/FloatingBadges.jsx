import React from 'react';
import { motion } from 'framer-motion';

// scattered positions, reused/sliced per section so badge count can taper down the page
const POSITIONS = [
  { top: '10%', left: '14%', size: 52 },
  { top: '16%', left: '84%', size: 44 },
  { top: '72%', left: '10%', size: 40 },
  { top: '80%', left: '88%', size: 48 },
  { top: '42%', left: '4%', size: 36 },
  { top: '26%', left: '50%', size: 34 },
  { top: '62%', left: '70%', size: 42 },
  { top: '88%', left: '42%', size: 32 },
  { top: '8%', left: '60%', size: 38 },
  { top: '52%', left: '93%', size: 30 },
  { top: '92%', left: '18%', size: 34 },
  { top: '36%', left: '78%', size: 40 },
];

const FloatingBadges = ({ icons = [], glow = false, className = '' }) => {
  const badges = icons.map((icon, i) => ({ icon, ...POSITIONS[i % POSITIONS.length] }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {glow && (
        <>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] max-w-[80vw] max-h-[80vw] rounded-full bg-accent/25 blur-[110px]"
            style={{ animation: 'blob-float 10s ease-in-out infinite' }}
          />
          <div
            className="absolute top-[30%] left-[65%] w-[340px] h-[340px] max-w-[60vw] max-h-[60vw] rounded-full bg-accent-2/20 blur-[100px]"
            style={{ animation: 'blob-float 14s ease-in-out infinite reverse' }}
          />
        </>
      )}

      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-surface/60 backdrop-blur-md border border-border shadow-glow flex items-center justify-center"
          style={{
            top: badge.top,
            left: badge.left,
            width: badge.size,
            height: badge.size,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + (i % 4) * 0.4,
            delay: (i % 5) * 0.3,
            ease: 'easeInOut',
          }}
        >
          <img src={badge.icon} alt="" className="w-1/2 h-1/2 object-contain" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBadges;
