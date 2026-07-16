import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import MagnetButton from './ui/MagnetButton';
import FloatingBadges from './ui/FloatingBadges';
import { reactjs, nodejs, python, docker, mongodb, git, tailwind } from '../assets';

const HERO_ICONS = [reactjs, nodejs, python, docker, mongodb, git, tailwind];
const NAME = 'Mulero Alamou';
const HERO_SIZE_CLASSES =
  'lg:text-[76px] sm:text-[58px] xs:text-[48px] text-[38px] lg:leading-[90px]';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <FloatingBadges icons={HERO_ICONS} glow className="w-full h-full" />

      <div
        className={`${styles.paddingX} relative max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center`}
      >
        <p className="text-accent-2 uppercase tracking-[0.3em] text-[13px] font-medium mb-4">
          Software Engineer
        </p>

        <h1 className={`w-full flex justify-center flex-wrap ${HERO_SIZE_CLASSES} font-display font-bold gradient-text`}>
          {NAME}
        </h1>

        <p className={`${styles.heroSubText} mt-6 max-w-xl`}>
          I build fast, thoughtful software for the web &mdash; from data-driven
          backends to interfaces people enjoy using.
        </p>

        <div className="mt-10 flex gap-4">
          <MagnetButton onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View my work
          </MagnetButton>
          <MagnetButton
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
          </MagnetButton>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-border items-start p-2 flex justify-center">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatType: 'loop' }}
              className="w-3 h-3 bg-accent-2 rounded-full z-30"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
