import React from 'react';
import Experience from '../experience/experience.component';
import FrameworksLogos from '../frameworkLogos/frameworksLogos.component';
import Card from '../portfolio-card/card.component';
import ProgressBar from '../progressBar/progressBar.component';
import WelcomeImg from '../welcome/welcome.component';

import './css/siteBody.style.css';

const SiteBody = () => {
  return (
    <div className="site-body">
    <WelcomeImg/>
    <Card/>
    <Experience/>
    <FrameworksLogos/>  
    <ProgressBar className="javaScript"/>
    </div>
  )
}

export default SiteBody