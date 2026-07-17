import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagnetButton = ({ children, href, onClick, className = '', variant = 'solid' }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.25, y: relY * 0.25 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const base =
    'inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-[15px] transition-colors duration-300';
  const styleVariant =
    variant === 'solid'
      ? 'bg-accent-gradient text-bg shadow-glow hover:shadow-[0_0_80px_-12px_rgba(139,92,246,0.6)]'
      : 'border border-border text-foreground hover:border-accent/50';

  const Tag = href ? 'a' : 'button';

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        target={href ? '_blank' : undefined}
        rel={href ? 'noreferrer' : undefined}
        className={`${base} ${styleVariant} ${className}`}
      >
        {children}
      </Tag>
    </motion.span>
  );
};

export default MagnetButton;
