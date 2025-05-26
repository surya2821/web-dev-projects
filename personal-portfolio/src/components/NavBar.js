import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <center>
              <div style={{scrollMarginRight:'530px'}}>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            </div>
            </center>
            <widgetbot server="299881420891881473"
            channel="355719584830980096"
            width="800"
             height="600"
             ></widgetbot>
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
            
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/saisurya2818/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/surya2821"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/surya_2820_/"><img src={navIcon3} alt="" /></a>
                <a href="https://discord.gg/K2W6DqUR"><img src={navIcon4} alt="" /></a>
              </div>
              
           
              <a href="https://surya-resume2100031646.tiiny.site/" className="vvd">
  <button><span>Download Resume</span></button>
</a>
            
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
