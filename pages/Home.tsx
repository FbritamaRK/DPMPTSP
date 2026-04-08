
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import Stats from './Stats.tsx';
import Investment from './Investment.tsx';
import News from './News.tsx';

// Fix: Removed React.FC to avoid "Cannot find namespace 'React'" error
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Stats />
      <Investment />
      <News />
    </main>
  );
};

export default Home;
