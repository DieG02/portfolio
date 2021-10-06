import React from 'react';
// import Logo from '../assets/logo.jsx';
import GitHub from '../assets/github.jsx';
import LinkedIn from '../assets/linkedIn.jsx';
import '../styles/NavBar.scss';

export default function NavBar () {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <p>Diego<br/>Bautista</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#'>Inicio</a>
          </li>
          <li>
            <a href='#'>Sobre mi</a>
          </li>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Proyectos</a>
          </li>
          <li>
            <a href='#'>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className='icons'>
        <a href='https://github.com/DieG02' target='_blank'>
          <GitHub/>
        </a>
        <a href='https://www.linkedin.com/in/diegobautista02' target='_blank'>
          <LinkedIn/>
        </a>
      </div>
    </div>
  )
}