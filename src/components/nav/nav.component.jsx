import React from 'react';
import NavList from './navList.component'
import Logo from './logo.component';
import './css/nav.style.css';

function Nav() {
  return (
    <section className="nav">
        <Logo/>
        <NavList/>
    </section>
  )
}

export default Nav