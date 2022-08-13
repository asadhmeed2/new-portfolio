import React from 'react'
import   "./css/card.style.css";

const Card = () => {
  return (
    <div className="card">
        <div className="centered card-border portfolio-imag">portfolio image</div>
        <div className="centered card-border name"><h1>Asaad Hmeed</h1></div>
        <div className="centered card-border contect">
            <ul className="">
                <li>Github</li>
                <li>Linked</li>
            </ul>
        </div>
        <div className="centered card-border sumary">
            <div>
            Graduated from a Fullstack Bootcamp (intense training) by Applseeds. Deep knowledge in <strong>JS, HTML, CSS, React,Node.js,Express</strong>.<br/>
            Highly motivated, and eager to learn. Able to learn independently, always seeking to expand skill set while using best code practices and creative thinking. <br/>
            Looking for a challenging development position as a junior Full Stack Web Developer.<br/>
            </div>
        </div>
    </div>
  )
}

export default Card