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
         <small> Less Than 1 Year  </small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
         <h5>Projects</h5>
         <small> 10+ Completed</small>
        </article>
       </div>
       <p>
     Hello, I am Chayma Mehrzi, a passionate software engineering student specialzing in web development and web technolgies. Currently studying at ESPRIT , I have gained a valuable knowledge and practical experience in building web applications.
     I am constantly exploring emerging web technologies to stay up-to-date with industry trends and best practices.
     My courses at ESPRIT has provided me with a solid foundation in programming languages and helped me gain valuable experience in working with several frameworks with particiapting and working in concrete projects. 
     I also see myself as an entrepreneur , I have honed my skilss by being actively involved in enactus , a non-profit organization, where i have gained valuable experience in project management , team work, problem-solving and pitching skills.
     I am excited about utlizing my skilss and expertise to contribute to innovative projects and make a positive impact in the field of web development.
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
  </section>
  )
}

export default About