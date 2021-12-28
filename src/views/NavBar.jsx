import React, { useState } from 'react';
import MyLogo from '../assets/Logo.jsx';
import '../styles/NavBar.scss';

export default function NavBar () {
  
  window.onscroll = function () {
    const navbar = document.getElementsByClassName('navbar');
    if (window.pageYOffset > 0) {
      navbar[0].classList.add('solid');
    } else {
      navbar[0].classList.remove('solid');
    }
  }

  const [menu, showMenu] = useState(true);
  const toogle = () => {
    showMenu(!menu);
    const ul = document.querySelector('.navbar nav ul');
    console.log('ejecuta3');
    menu 
      ? ul.classList.remove('full')
      : ul.classList.add('full');
  }

  return (
    <header className='navbar'>
      <div className='logo'>
        <MyLogo width='35' />
        <p>
          <span>DB</span> 
          portfolio
        </p>
      </div>
      <nav>
        <ul className='full'>
          <li>
            <a onClick={toogle} href='#home'>Inicio</a>
          </li>
          <li>
            <a onClick={toogle} href='#about'>Sobre mi</a>
          </li>
          <li>
            <a onClick={toogle} href='#skills'>Skills</a>
          </li>
          <li>
            <a onClick={toogle} href='#projects'>Proyectos</a>
          </li>
          <li>
            <a onClick={toogle} href='#contact'>Contacto</a>
          </li>
        </ul>
        <div className='menu-btn' onClick={toogle}>
          {menu
            ? <i className='fas fa-times'/>
            : <i className='fas fa-bars'/>
          }          
        </div>
      </nav>
    </header>
  )
}