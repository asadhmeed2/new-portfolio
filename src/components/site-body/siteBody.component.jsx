import React from 'react'
import Experience from '../experience/experience.component'
import Card from '../portfolio-card/card.component'
import './css/siteBody.style.css'

const SiteBody = () => {
  return (
    <div className="site-body">
    <Card/>
    <Experience/>
    </div>
  )
}

export default SiteBody