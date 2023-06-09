
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_njqfrdf', 'template_kmaipbw', form.current, 'd-EoZ4HhZhVhLEb4X')
    e.target.reset() 
     
  };

  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <CiLocationOn className='contact__option-icon'/>
          <h4>Location</h4>
          <h5>Tunisia,Ariana</h5>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Chaymamehrzi70@gmail.com</h5>
          <a href="mailto:chaymamehrzi70@gmail.com" target="_blank">Send a message</a>
        </article>  
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+21651925485</h5>
          <a href="https://api.whatsapp.com/send?phone+21651925485" target="_blank">Send a message</a>
        </article>
      </div>
      {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
         <input type ="text" name='name' placeholder='Your Full Name' required/>
         <input type="email" name='email' placeholder='Your Email'required />
         <textarea name="message"  rows="7" placeholder='Tour Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
     </div>
    </section>
  )
}

export default Contact