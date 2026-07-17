import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Work With</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-16 flex flex-row flex-wrap justify-center gap-4"
      >
        {technologies.map((technology) => (
          <div
            key={technology.name}
            title={technology.name}
            className="group w-24 h-24 rounded-2xl border border-border bg-surface flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-accent/50 hover:shadow-glow hover:-translate-y-1"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-9 h-9 object-contain"
            />
            <span className="text-[11px] text-muted group-hover:text-foreground transition-colors duration-300 text-center px-1">
              {technology.name}
            </span>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
