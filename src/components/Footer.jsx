import React from 'react';
import { styles } from '../style';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.paddingX} py-8`}>
      <div className="max-w-7xl mx-auto flex justify-center">
        <p className="text-muted text-[13px]">
          &copy; {year} Mulero Alamou. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
