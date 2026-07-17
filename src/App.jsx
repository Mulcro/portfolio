import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';
import AuroraBackground from './components/ui/AuroraBackground';
import SplashScreen from './components/SplashScreen';

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

function App() {
  const rootRef = useRef(null);
  const [showSplash, setShowSplash] = useState(true);

  const updateCursorPosition = useCallback((e) => {
    if (!rootRef.current) return;
    const { clientX: x, clientY: y } = e;
    rootRef.current.style.setProperty('--x', `${x}px`);
    rootRef.current.style.setProperty('--y', `${y}px`);
  }, []);

  const throttledUpdateCursorPosition = useMemo(
    () => throttle(updateCursorPosition, 100),
    [updateCursorPosition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', throttledUpdateCursorPosition);

    updateCursorPosition({
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });

    return () =>
      window.removeEventListener('mousemove', throttledUpdateCursorPosition);
  }, [throttledUpdateCursorPosition, updateCursorPosition]);

  return (
    <div ref={rootRef} className="cursor-glow relative z-0 bg-bg">
      {showSplash && (
        <SplashScreen
          onFinish={() => setShowSplash(false)}
        />
      )}
      <AuroraBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
