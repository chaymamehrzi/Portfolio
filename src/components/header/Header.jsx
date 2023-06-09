import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import {CgArrowsScrollV} from'react-icons/cg'
const Header = () => {
  return (
  <header>
   <div className= "container header__container" >
       <h5>Hello,I am </h5>
       <h1>Chayma Mehrzi</h1>
       <h5 className="text-light">Software Engineering Student</h5>
       <CTA/>
       <div className="me"> 
      <img src={ME} alt="me"/>
       </div>


       <a href="#contact" className='scroll__down'></a>
   </div>
  </header>
  )
}

export default Header