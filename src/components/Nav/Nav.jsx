import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import moonicon from '../../images/moon.svg';
import sunicon from '../../images/sun.svg';

const Nav = () => {


  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [state, setState] = useState({
    icon : moonicon
  });

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    setState({
      ...state,
      icon: moonicon,
    });
  }, []);


  const toggleLgt =()=> {
    document.documentElement.getAttribute('data-theme') === 'dark' ? document.documentElement.setAttribute('data-theme', 'light') :  document.documentElement.setAttribute('data-theme', 'dark');
    
    state.icon == sunicon ?
    setState({
      ...state,
      icon: moonicon,
    }) : 
    setState({
      ...state,
      icon: sunicon,
    })
  }

  return (
    <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">

      <Container className='navi'>
          <div className='nav-btns'> 
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
            <div className='themeMode' onClick={toggleLgt}> <img src={state.icon}  /></div>
          </div>
      </Container>
    </Fade>
  );
};

export default Nav;
