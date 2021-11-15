import React from 'react';
import MyLogo from '../assets/Logo.jsx';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <MyLogo width='30' color='#aaa' />
      <span>Sitio creado por <a href='#home'>Diego Bautista</a> | <i className="far fa-copyright"/> 2021 Todos los derechos reservados</span>
    </div>
  )
}