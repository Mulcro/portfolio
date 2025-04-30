import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

function App() {
  const heroRef = useRef(null);

  const updateMousePosition = useCallback((e) => {
    if (!heroRef.current) return;
    const { clientX: x, clientY: y } = e;
    heroRef.current.style.setProperty('--x', `${x}px`);
    heroRef.current.style.setProperty('--y', `${y}px`);
  }, []);

  function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        fn(...args);
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  }

  const throttledUpdateMousePosition = useMemo(
    () => throttle(updateMousePosition, 100),
    [updateMousePosition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', throttledUpdateMousePosition);

    updateMousePosition({
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });

    return () =>
      window.removeEventListener('mousemove', throttledUpdateMousePosition);
  }, [throttledUpdateMousePosition, updateMousePosition]);

  return (
    <BrowserRouter>
      <div ref={heroRef} className="hero relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas numStars={4000} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;