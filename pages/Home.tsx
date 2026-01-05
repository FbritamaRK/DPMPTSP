
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import Stats from '../components/Stats.tsx';
import Investment from '../components/Investment.tsx';
import News from '../components/News.tsx';

const Home: React.FC = () => {
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
    <>
      <Hero />
      <Services />
      <Stats />
      <Investment />
      <News />
    </>
  );
};

export default Home;
