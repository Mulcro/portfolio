import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import SectionWrapper from './hoc/SectionWrapper';
import { webb } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import SpotlightCard from './ui/SpotlightCard';
import FloatingBadges from './ui/FloatingBadges';
import { threejs, heroku, docker } from '../assets';

const WORK_ICONS = [threejs, heroku, docker];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div variants={fadeIn('right', 'tween', index * 0.15, 0.75)} className="w-[340px]">
      <SpotlightCard className="p-5 min-w-[320px]">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-[200px] object-cover rounded-xl"
          />
          <div
            onClick={() => window.open(project.source_code_link, '_blank', 'noopener,noreferrer')}
            className="absolute top-3 right-3 bg-bg/80 backdrop-blur w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-accent-gradient transition-colors duration-300"
          >
            <img src={webb} alt="link to project" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-foreground font-display font-semibold text-[20px]">{project.name}</h3>
          <p className="mt-2 text-muted text-[14px] leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative">
      <FloatingBadges icons={WORK_ICONS} />

      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn('', 'tween', 0.1, 1)}
            className="mt-3 text-muted text-[17px] max-w-3xl leading-[30px]"
          >
            A selection of projects I&apos;ve worked on, some solo and some with a
            team, spanning React, Node.js, Flask, and a handful of data-driven tools.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap items-stretch gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, 'work');
