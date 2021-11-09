import React, { useState } from 'react';
import MyLogo from '../assets/my_logo.jsx';
import '../styles/NavBar.scss';

export default function NavBar () {
  
  window.onscroll = function () {
    const element = document.getElementsByClassName('navbar');
    if (window.pageYOffset > 0) {
      element[0].classList.add('solid');
    } else {
      element[0].classList.remove('solid');
    }
  }

  const [menu, showMenu] = useState(false);
  const toogle = () => {
    showMenu(!menu);
    const element = document.querySelector('.navbar nav ul');
    menu 
      ? element.classList.remove('full')
      : element.classList.add('full');
    console.log(element);
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
            ? <i class='fas fa-times'/>
            : <i class='fas fa-bars'/>
          }          
        </div>
      </nav>
    </header>
  )
}