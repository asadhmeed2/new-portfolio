import React from 'react'
import ProgressBarCercle from '../../images/svgs/progressBarCercle'
import './css/progressBar.style.css'

const ProgressBar = ({fromColor="#DA22FF", toColor="#9733EE", number=65}) => {
  return (
    <div className="progress-bar">
    <div className="progress-bar-outer">
      <div className="progress-bar-inner" style={{color: `${number > 70?'green':number >30? 'orange':'red' }`}}>
        <div className="number">{`${number}`}%</div>
      </div>
    </div>
    <ProgressBarCercle fromColor={fromColor} toColor={toColor} className="progress-bar-svg" number={number} />
    </div>
  )
}

export default ProgressBar