import React from 'react'
import './testimonials.css'
import logo from'../../assets/logo.png'
import logo1 from '../../assets/logo2.jpg'

// import Swiper core and required modules
import {   Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const data = [
  {
    avatar: logo,
    name:"Master's Degree in Software Engineering",
    review:"Private Higher School of Engineering and Technology Tunis  2019-Currently"
  },

  {
    avatar: logo1,
    name:"High School diploma in experimental sciences(with honours)",
    review:" Carnot high school Tunis  2014-2017"
  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My school career</h5>
      <h2>Education</h2>
      <Swiper className='container testimonials__container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
       {
        data.map(({avatar,name,review}, index) => {
          return (
            <SwiperSlide  key={index}className="testimonial">
            <div className='client__avatar'>
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client__name'>{name}
          </h5>
              <small className='client__review'>
             {review}
              </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials 
