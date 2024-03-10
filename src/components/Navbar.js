import React from 'react';
import './styling/Navbar.css';
import ScrollButton from './ScrollButton';

const Navbar = ({ isMainPage }) => {
  return (
    <nav className={isMainPage ? 'main-nav' : 'project-nav'}>
      <div className="links-container">
        <ScrollButton to="about">ABOUT</ScrollButton>
        <ScrollButton to="experience">EXPERIENCE</ScrollButton>
        <ScrollButton to="project">PROJECTS</ScrollButton>
        <ScrollButton to="contact">CONTACTS</ScrollButton>
      </div>
    </nav>
  );
};

export default Navbar;
