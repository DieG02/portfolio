import React from 'react';
import GitHub from '../assets/github.jsx';
import LinkedIn from '../assets/linkedIn.jsx';
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
          <GitHub/>
        </a>
        <a href='#'>
          <LinkedIn/>
        </a>
        <p>para</p>
      </div>
    </div>
  )
}