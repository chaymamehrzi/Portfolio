import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Academic</h5>
      <h2>Projects</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Angular/Springboot Web Application</h3>
          </div>

          <ul className='service__list'>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Created dynamic user interfaces with javascript and angular material design</p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Implemented a back-end server using SpringBoot to create a Restful API that comunicates with the front-end.
        </p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Utlized MYSSQL databse to store the data and connected it to the spring boot application using JDBC driver and hibernate ORM.
            </p>
            </li>
       
          </ul>
        </article>
        {/*  End of UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Mern Web Application Givly</h3>
          </div>

          <ul className='service__list'>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Developed a responsive and costumizable ReactJS compenents using Material UI to enhance the user experience.</p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Created an AI system using Python to detect the objects and provide options fot the user.
            </p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Implemented REST API to allow efficient data flow.
           </p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Used MongoDB database to allow dynamic and evolving data structures enabling efficient data storage and real-time ,responsive web experiences.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPEMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Symfony 4 Web Application</h3>
          </div>

          <ul className='service__list'>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Developed feature-rich web application with MVC architecture,modular compenets and extendsive libraries to create scalable and efficient APIs.</p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Inetgrated Symfony's authentication and authorization lechanims to ensure secure access control.</p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Ensured clean and maintainable URL structures by utizing Symfon's routing system.</p>
            </li>
            <li>
           <BiCheck className='service__list-icon'/>
           <p>Generated dynamic and reusable views,combined with modern front-end technologies such as HTML ,CSS and JavasCript.</p>
            </li>
          </ul>
        </article>

        {/* END of Content Creation*/ }



      </div>
      
      </section>

  )
} 

export default Services