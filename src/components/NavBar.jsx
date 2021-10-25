import React from 'react';
import MyLogo from '../assets/my_logo.jsx';
import '../styles/NavBar.scss';

export default function NavBar () {
  return (
    <header className='navbar'>
      <div className='logo'>
        <MyLogo width='35' />
        <p>
          <span>DB</span> 
          portfolio
        </p>
      </div>
      <nav style={{ position: 'relative', right: '-20px' }}>
        <ul>
          <li>
            <a href='#home'>Inicio</a>
          </li>
          <li>
            <a href='#about'>Sobre mi</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#contact'>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}