import { BrowserRouter } from 'react-router-dom';
import {useRef, useEffect} from 'react';
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

function App() {
  const heroRef = useRef(null);

  const updateMousePosition = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    heroRef.current.style.setProperty('--x', `${x}px`);
    heroRef.current.style.setProperty('--y', `${y}px`);
  }

  const throttle = (func, delay) => {
    let waiting = false;

    return (...args) => {
      if(waiting === false){
        func(...args);
        waiting = setTimeout(() => {
          waiting = false;
        },delay)
      }
    }
  }

  const throttledUpdateMousePosition = throttle(updateMousePosition,100);

  useEffect(() => {
    if(!heroRef.current) return;

    window.addEventListener('mousemove', throttledUpdateMousePosition);

    return () => window.removeEventListener('mousemove', throttledUpdateMousePosition);
  }, []);

  return (
    <BrowserRouter>
      <div ref={heroRef} className="hero relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas numStars={4000}/>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
