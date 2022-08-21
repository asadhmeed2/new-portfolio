import React from 'react'
import './progressBarCircle.style.css'

const ProgressBarCercle = ({fromColor="#DA22FF", toColor= "#9733EE", className='', number='51'}) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className={className}>
        <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stopColor={toColor} />
            <stop offset="50%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
            </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeDasharray='450' strokeDashoffset={`calc(450*(${100-number}/100)`} strokeLinecap="round" />
    </svg>
  )
}

export default ProgressBarCercle