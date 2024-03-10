import React from 'react';
import Navbar from '../components/Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import '../components/styling/MainPage.css';
import {ResumeButton} from '../components/ResumeButton';

const MainPage = () => {
  return (
    <div>
      <div className="welcome-section">
          <div className="welcome-text">
            <ResumeButton href="/resume/SchuebertResume.pdf" download>RESUME</ResumeButton>
            <h1 className="h1">Bryce Schuebert</h1>
            <Navbar isMainPage={true} />
          </div>
      </div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="project"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default MainPage;

