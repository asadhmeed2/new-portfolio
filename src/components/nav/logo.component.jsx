import React from 'react';
import logo from '../../images/logo/logo.png';
import './css/logo.style.css'

function Logo() {
  return (
    <div className="logo">
        <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default Logo