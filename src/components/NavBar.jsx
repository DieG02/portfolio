import React from 'react';
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import '../styles/NavBar.scss';

export default function NavBar () {
  return (
    <div className='navbar-container'>
      <div>
        <p>Nombre</p>
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
      <div>
        <a href='#'>
          <image alt='logo_' src={github} width='30px'/>
        </a>
        <a href='#'>
          <image alt='logo_' src={linkedIn} width='30px'/>
        </a>
      </div>
    </div>
  )
}