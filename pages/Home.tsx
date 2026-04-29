
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from './Hero.tsx';
import Banner from '../components/Banner.tsx';
import Services from './Services.tsx';
import RelatedLinks from './RelatedLinks.tsx';
import Stats from './Stats.tsx';
import Investment from './Investment.tsx';
import News from './News.tsx';

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

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
      <FadeInSection>
        <Banner />
      </FadeInSection>
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <RelatedLinks />
      </FadeInSection>
      <FadeInSection>
        <Stats />
      </FadeInSection>
      <FadeInSection>
        <Investment />
      </FadeInSection>
      <FadeInSection>
        <News />
      </FadeInSection>
    </main>
  );
};

export default Home;
