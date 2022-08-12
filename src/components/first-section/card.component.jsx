import React from 'react'
import   "./css/card.style.css";

const Card = () => {
  return (
    <section className="card">
        <div className="centered portfolio-imag">portfolio image</div>
        <div className="centered name"><h1>Asaad Hmeed</h1></div>
        <div className="centered contect">
            <ul className="">
                <li>Github</li>
                <li>Linked</li>
            </ul>
        </div>
        <div className="centered sumary">
            <div>
            Graduated from a Fullstack Bootcamp (intense training) by Applseeds. Deep knowledge in <strong>JS, HTML, CSS, React,Node.js,Express</strong>.<br/>
            Highly motivated, and eager to learn. Able to learn independently, always seeking to expand skill set while using best code practices and creative thinking. <br/>
            Looking for a challenging development position as a junior Full Stack Web Developer.<br/>
            </div>
        </div>
    </section>
  )
}

export default Card