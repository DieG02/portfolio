import React from 'react';
import Logo from '../assets/Mask_icon.svg';
import '../styles/NavBar.scss';

export default function NavBar () {
  return (
    <header className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo_portfolio'/>
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
      {/* <div className='icons'>
        <a href='https://github.com/DieG02' target='_blank'>
          <GitHub/>
        </a>
        <a href='https://www.linkedin.com/in/diegobautista02' target='_blank'>
          <LinkedIn/>
        </a>
      </div> */}
    </header>
  )
}