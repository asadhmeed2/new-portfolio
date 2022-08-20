import React from 'react'
import ProgressBar from '../progressBar/progressBar.component'
import {FRAMEWORK_PROGRESS_BAR_DATA} from '../../consts'
import './css/progressBarWrapper.style.css'


const ProgressBarWrapper = () => {

  return (
    <div className="progress-bar-wrapper">
    {FRAMEWORK_PROGRESS_BAR_DATA.map((framework)=>{  
    return(
      <div key={framework.id}> 
    <h2>{framework.name}</h2>
    <ProgressBar  fromColor={framework.fromColor} toColor={framework.toColor} number={framework.progress}/>
    </div>
    )
  })}
    </div>
  )
}

export default ProgressBarWrapper