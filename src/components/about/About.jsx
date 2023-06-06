import React from 'react'
import './about.css' 
import Me from '../../assets/Mee.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
         <img src={Me} alt='About Image'/> 
        </div>

      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
          <FaAward   style={{color: "#f9fafa",}} className='about__icon'/>
         <h5>Experience</h5>
         <small> Less Than 1 Year Working </small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
         <h5>Projects</h5>
         <small> 10+ Completed</small>
        </article>
       </div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ut sequi eos, atque sapiente dolorum rem, aspernatur tempore
        adipisci aut omnis velit quod iusto nemo facilis eligendi quam illum nam ipsum.
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
  </section>
  )
}

export default About