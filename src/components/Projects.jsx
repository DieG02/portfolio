import React from 'react';
import React_Icon from '../assets/icons/react.svg';
import HtmlIcon from '../assets/icons/html.jsx';
import '../styles/Projects.scss';

export default function Projects() {

  const flipCard = e => {
    // e.preventDefault();
    // e.stopPropagation();
    alert('redirect to app');
  }

  const redirect = e => {
    e.preventDefault();
    e.stopPropagation();
    alert('redirect to gitHub')
  }

  const Card = () => (
    <div className='card'>
      <div className='top' onClick={flipCard}>
        <img className='image' src='https://res.cloudinary.com/dte7upwcr/image/upload/v1617025711/blog/blog/landing-page-rd-station.jpg' alt='wheater_app' />
        <span>
          DB
          <a>
            <i class='fas fa-angle-right' />
          </a>
        </span>
      </div>
      <div className='mid'>
        <h3>WeatHer App</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nulla, ultricies at pretium at, bibendum vitae justo.
        </p>
      </div>
      <div className='bottom'>
        <img src={React_Icon} alt='React Icon' />
        <img src={React_Icon} alt='React Icon' />
        <img src={React_Icon} alt='React Icon' />
        <HtmlIcon width='20px'/>
          
      </div>
    </div>
  )

  return (
    <section id='projects'>
      <div className='projects'>
        <h1 className='title'>Mis Proyectos</h1>
        <div className='content'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}