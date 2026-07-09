import React from 'react';
import ParticleField from './ParticleField';

const blobs = [
  {
    className: 'top-[-10%] left-[10%] w-[45vw] h-[45vw] bg-accent/20',
    duration: '22s',
  },
  {
    className: 'top-[20%] right-[5%] w-[35vw] h-[35vw] bg-accent-2/15',
    duration: '28s',
  },
  {
    className: 'bottom-[-10%] left-[30%] w-[40vw] h-[40vw] bg-accent/10',
    duration: '25s',
  },
];

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden bg-bg">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
          style={{ animation: `blob-float ${blob.duration} ease-in-out infinite` }}
        />
      ))}
      <ParticleField className="absolute inset-0 opacity-40" />
    </div>
  );
};

export default AuroraBackground;
