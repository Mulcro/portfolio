import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import SectionWrapper from './hoc/SectionWrapper';
import { contacts } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import FloatingBadges from './ui/FloatingBadges';
import { github, linkedin, gmail } from '../assets';

const CONTACT_ICONS = [github, linkedin, gmail];

const Contact = () => {
  return (
    <div className="relative min-h-[480px]">
      <FloatingBadges icons={CONTACT_ICONS} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className={styles.sectionHeadText}>Contact Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', 'tween', 0.1, 1)}
          className="mt-4 text-muted text-[16px] max-w-lg leading-relaxed"
        >
          Have a project in mind or just want to say hi? Reach out through any of
          these &mdash; I try to respond within a day or two.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-xl w-full"
        >
          {contacts.map((contact) => (
            <button
              key={contact.title}
              onClick={() => {
                if (!contact.isEmail) {
                  window.open(contact.value, '_blank', 'noopener,noreferrer');
                } else {
                  window.location.href = `mailto:${contact.value}`;
                }
              }}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface py-6 transition-all duration-300 hover:border-accent/50 hover:shadow-glow hover:-translate-y-1"
            >
              <img
                src={contact.icon}
                alt={contact.title}
                className="w-8 h-8 object-contain"
              />
              <span className="text-[13px] text-muted group-hover:text-foreground transition-colors duration-300">
                {contact.title}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
