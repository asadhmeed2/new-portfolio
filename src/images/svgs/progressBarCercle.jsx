import React from 'react'
import './progressBarCircle.style.css'

const ProgressBarCercle = ({fromColor="#DA22FF", toColor= "#9733EE" ,className=''}) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" class={className}>
        <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stop-color={fromColor} />
            <stop offset="100%" stop-color={toColor} />
            </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
  )
}

export default ProgressBarCercle