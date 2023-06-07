import React from 'react'
import './portfolio.css'
import image1 from '../../assets/image.PNG'
import image2 from '../../assets/angular.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
      <img src={image1} alt=""></img>
       </div>
        <h3>Givly MERN Web Application</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/chaymamehrzi/Givly" className='btn' target='_blank'>Github</a>
        <a href="https://givly.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
       <div className="portfolio__item-image">
      <img src={image2} alt=""></img>
       </div>
        <h3>Student Management Angular Web Application </h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/" className='btn' target='_blank'>Github</a>
        </div>
      </article>

    </div>
    </section>
  )
}

export default Portfolio