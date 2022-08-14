import React from 'react'
import DownloadIcone from '../../images/svgs/downloadIcone'
import './css/navList.style.css'

const NavList = () => {
  return (
    <div>
        <ul className="nav-list">
            <li className="nav-list-item"><a href="/#"><DownloadIcone className="resume-icon" /> resume</a></li>
        </ul>
    </div>
  )
}

export default NavList