import React from 'react';
import HtmlIcon from '../assets/icons/html.jsx';
import JavascriptIcon from '../assets/icons/javascript.jsx';
import ReactIcon from '../assets/icons/react.jsx';
import '../styles/Projects.scss';

export default function Projects() {

  const flipCard = e => {
    // e.preventDefault();
    // e.stopPropagation();
    alert('redirect to app');
  }

  // const redirect = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   alert('redirect to gitHub')
  // }

  const Card = () => (
    <div className='card'>
      <div className='top'>
        <img className='image' src='https://res.cloudinary.com/dte7upwcr/image/upload/v1617025711/blog/blog/landing-page-rd-station.jpg' alt='wheater_app' />
        <span>
          DB
          <div onClick={flipCard}>
            <i className='fas fa-angle-right' />
          </div>
        </span>
      </div>
      <div className='mid'>
        <h3>WeatHer App</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nulla, ultricies at pretium at, bibendum vitae justo.
        </p>
      </div>
      <div className='bottom'>
        <ReactIcon width='20px'/>
        <JavascriptIcon width='20px'/>
        <HtmlIcon width='20px'/>
        <a href='https://github.com/DieG02' target='_blank' className='icon-container' rel='noopener noreferrer'>
          <i className='fab fa-github icon' />
        </a>
      </div>
    </div>
  )

  return (
    <section id='projects'>
      <div className='projects'>
        <h2 className='subtitle'>Mis Proyectos</h2>
        <div className='content'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}