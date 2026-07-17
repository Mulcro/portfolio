import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { experiences } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import SpotlightCard from './ui/SpotlightCard';
import FloatingBadges from './ui/FloatingBadges';
import { merced, snc, javascript, html } from '../assets';

const EXPERIENCE_ICONS = [merced, snc, javascript, html];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  const content = (
    <SpotlightCard className="p-6">
      <p className="text-accent-2 text-[13px] uppercase tracking-wider font-medium">
        {experience.date}
      </p>
      <h3 className="text-foreground text-[20px] font-display font-semibold mt-2">
        {experience.title}
      </h3>
      <p className="text-muted text-[14px] mt-1">{experience.company_name}</p>
      <ul className="mt-4 list-disc ml-4 space-y-2">
        {experience.points.map((point, i) => (
          <li key={i} className="text-muted text-[13px] leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );

  return (
    <motion.div
      variants={fadeIn(isEven ? 'right' : 'left', 'tween', 0.1, 0.6)}
      className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-6 items-start"
    >
      <div className="hidden md:block">{isEven ? content : null}</div>
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-accent bg-surface flex items-center justify-center shadow-glow z-10 shrink-0">
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="w-6 h-6 object-contain rounded-full"
          />
        </div>
      </div>
      <div className="md:hidden">{content}</div>
      <div className="hidden md:block">{!isEven ? content : null}</div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <FloatingBadges icons={EXPERIENCE_ICONS} />

      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Have Done So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-border md:-translate-x-1/2" />
          <div className="flex flex-col gap-10">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
