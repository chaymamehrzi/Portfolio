import React from 'react'
import {BsLinkedin} from  'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './header.css'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
     <a href="https://www.linkedin.com/in/chayma-mehrzi-a15099198/" target="_blank"><BsLinkedin/></a>
     <a href="https://github.com/chaymamehrzi" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials