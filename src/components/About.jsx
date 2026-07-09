import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import SpotlightCard from './ui/SpotlightCard';
import FloatingBadges from './ui/FloatingBadges';
import { typescript, redux, figma, postgres, css } from '../assets';

const ABOUT_ICONS = [typescript, redux, figma, postgres, css];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div variants={fadeIn('right', 'tween', 0.15 * index, 0.75)} className="xs:w-[250px] w-full">
      <SpotlightCard className="min-h-[260px] flex flex-col justify-evenly items-center py-10 px-8">
        <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
        <h3 className="text-foreground text-[18px] font-display font-semibold text-center mt-4">
          {title}
        </h3>
      </SpotlightCard>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative min-h-[560px]">
      <FloatingBadges icons={ABOUT_ICONS} />

      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', 'tween', 0.1, 1)}
          className="mt-4 text-muted text-[17px] max-w-3xl leading-[30px]"
        >
          Hey! I&apos;m Mulero and this website is a showcase of my work and skills as
          a software engineer. I have a passion for building thoughtful software and
          I&apos;m always looking to learn something new. Below are some of my main
          areas of focus.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
