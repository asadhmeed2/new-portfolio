import React from 'react';
import './css/welcome.style.css'
import logo from '../../images/logo/logo.png'

const WelcomeImg = () => {
  return (
    <div className="welcome-background">
        <div className="welcome-Img-wrapper">
            <img className="welcome-Img" src={logo} alt="Welcome"/>
        </div>
    </div>
  )
}

export default WelcomeImg