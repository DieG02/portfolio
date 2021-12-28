import React from 'react';
import '../styles/Home.scss';

export default function Home () {
  return (
    <section id='home'> 
      <div className='home'>
        <div className='content'>
          <div>
            <h1>Diego Bautista</h1>
            <h3>Full Stack Developer</h3>
            <div className='icons'>
              <a href='https://www.linkedin.com/in/diegobautista02' target='_blank' className='icon-container' rel='noopener noreferrer'>
                <i className='fab fa-linkedin-in icon' />
              </a>
              <a href='https://github.com/DieG02' target='_blank' className='icon-container' rel='noopener noreferrer'>
                <i className='fab fa-github icon' />
              </a>
              {/* <a href='https://api.whatsapp.com/send?phone=541124780505' target='_blank' className='icon-container' rel='noopener noreferrer'>
                <i className='fab fa-whatsapp icon' />
              </a> */}
              <a href='mailto:diegobautista2002@gmail.com' target='_blank' className='icon-container' rel='noopener noreferrer'>
                <i className='far fa-envelope icon' />
              </a>
              <a href='https://drive.google.com/uc?id=1DM1wo7e84qS6p7y-ldVbV09ltn57fiZ7&export=download' download='Diego Bautista - Fullstack Developer' target='_blank' className='icon-container' rel='noopener noreferrer'>
                <i className='fas fa-download icon' />
              </a>
            </div>
          </div>

          <div className='data'>
            <h4>Último proyecto</h4>
            <img
              src='https://i.ibb.co/1KfpZyt/Portfolio.png'
              alt='diego_bautista_portfolio'
              width='230px'
            />
          </div>
        
        </div>
      </div>
    </section>
  )
}