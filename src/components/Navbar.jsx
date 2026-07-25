import React, { useEffect, useState } from 'react';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed w-full flex items-center py-4 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/70 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Mulero Alamou" className="w-8 h-8 object-contain" />
          <p className="text-foreground text-[16px] font-display font-semibold cursor-pointer flex">
            Mulero&nbsp;<span className="sm:block hidden text-muted">| Alamou</span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-2 rounded-full border border-border bg-surface/60 backdrop-blur-md px-2 py-1.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`block px-4 py-1.5 rounded-full text-[14px] transition-all duration-200 ${
                  link.id === active
                    ? 'bg-accent-gradient text-bg font-medium'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center gap-2 cursor-pointer">
          <img
            alt="open menu icon"
            src={menu}
            className={`${toggle ? 'hidden' : ''} w-[20px] h-[20px] object-contain cursor-pointer invert`}
            onClick={() => setToggle(!toggle)}
          />
          <img
            alt="close menu icon"
            src={close}
            className={`${!toggle ? 'hidden' : ''} w-[20px] h-[20px] object-contain cursor-pointer invert`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-surface border border-border absolute top-[4rem] right-4 mx-4 my-2 min-w-[160px] z-10 rounded-2xl`}
          >
            <ul className="list-none flex justify-end flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`font-medium cursor-pointer text-[15px] transition-colors duration-200 ${
                      link.id === active ? 'gradient-text' : 'text-muted'
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.id);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
