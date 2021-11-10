import React from 'react';
import '../styles/Home.scss';

export default function Home () {
  return (
    <section id='home'> 
      <div className='home'>
        <div className='content'>
          <div>
            <h1>Diego Bautista</h1>
            <h3>Frontend Developer</h3>
            <a href='https://www.linkedin.com/in/diegobautista02' target='_blank' className='icon-container' rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in icon' />
            </a>
            <a href='https://github.com/DieG02' target='_blank' className='icon-container' rel='noopener noreferrer'>
              <i className='fab fa-github icon' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=541124780505' target='_blank' className='icon-container' rel='noopener noreferrer'>
              <i className='fab fa-whatsapp icon' />
            </a>
            <a href='mailto:diegobautista2002@gmail.com' target='_blank' className='icon-container' rel='noopener noreferrer'>
              <i className='far fa-envelope icon' />
            </a>
          </div>
        
        </div>

        {/* <div className='cover'>
          <img
            src='https://i.ibb.co/NT9hT9m/Devices-bro.png'
            alt='Devices-bro'
          />
        </div> */}
      </div>
    </section>
  )
}