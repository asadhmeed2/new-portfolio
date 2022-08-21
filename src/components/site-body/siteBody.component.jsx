import React from 'react';
import Experience from '../experience/experience.component';
import FrameworksLogos from '../frameworkLogos/frameworksLogos.component';
import Projects from '../myProjects/projects.component';
import Card from '../portfolio-card/card.component';
import ProgressBarWrapper from '../progressBarWrapper/progressBarWrapper.component';
import WelcomeImg from '../welcome/welcome.component';

import './css/siteBody.style.css';

const SiteBody = () => {
  return (
    <div className="site-body">
    <WelcomeImg/>
    <Card/>
    <Experience/>
    <FrameworksLogos/>
    <ProgressBarWrapper/> 
    <Projects/>
    </div>
  )
}

export default SiteBody