import React, { useState, useEffect } from 'react';
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade'; 
import moonicon from '../images/moon.svg';
import sunicon from '../images/sun.svg';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (

    <PortfolioProvider style={{position: 'relative'}} inView={inView} value={{ hero, about, projects, contact, footer }}>
      <Nav />

      <Hero />
      <About ref={ref} />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
