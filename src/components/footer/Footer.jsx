import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chayma Mehrzi</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Projects</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Education</a></li>
      <li><a href="#conact">Conact</a></li>
      </ul>
<div className="footer__socials">
  <a href="https://www.linkedin.com/in/chayma-mehrzi-a15099198/" target='_blank'><AiOutlineLinkedin/></a>
  <a href="https://github.com/chaymamehrzi" target='_blank'><AiOutlineGithub/></a>
</div>
<div className="footer__copyright">
  <small> &copy; Chayma Mehrzi. ALL rights reserved.</small>
</div>
      
    </footer>
  )
}

export default Footer