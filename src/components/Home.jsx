import React from 'react';
import '../styles/Home.scss';

export default function Home () {
  return (
    <section id='home'> 
      <div className='home'>
        <div className='content'>
          <div>
            <h1 className='title'>Diego Bautista</h1>
            <h3>Frontend Developer</h3>
            <a href='https://www.linkedin.com/in/diegobautista02' target='_blank' className='icon-container'>
              <i className='fab fa-linkedin-in icon' />
            </a>
            <a href='https://github.com/DieG02' target='_blank' className='icon-container'>
              <i className='fab fa-github icon' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=541124780505' target='_blank' className='icon-container'>
              <i className='fab fa-whatsapp icon' />
            </a>
            <a href='#' target='_blank' className='icon-container'>
              <i className='far fa-envelope icon' />
            </a>
          </div>
          <div>
            <h4>Últimos proyectos</h4>
            <img
              src='https://www.40defiebre.com/wp-content/uploads/2014/12/landing.png'
              alt='project_1'
              width='230px'
            />
            <img
              src='https://www.mister.com.py/uploads/2021/06/mac_que_es_una_landing_page_o_pagina_de_aterrizaje_1544133467.png'
              alt='proyect_2'
              width='230px'
              height='135px'
            />
          </div>
        </div>

        <div className='cover'>
          <img
            src='https://i.ibb.co/NT9hT9m/Devices-bro.png'
            alt='Devices-bro'
          />
        </div>
      </div>
    </section>
  )
}