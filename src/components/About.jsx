import React from 'react';
import Henry from '../assets/henry.png';
import '../styles/About.scss';

export default function About () {
  return (
    <section id='about'>
      <div className='about'>
        <h2 className='subtitle'>Sobre Mi</h2>
        <div className='content'>
          <div className='card'>
            <img 
              src='https://cdn140.picsart.com/289791384052211.png?type=webp&to=min&r=640'
              alt='Diego Bautista'
            />
            <h3>¿Quién soy?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            </p>
          </div>
          <div className='card'>
            <img 
              src='https://th.bing.com/th/id/R.1a9ad7c423aaf3521a71e8c5d1224260?rik=4op8DL%2bmgNyx0w&riu=http%3a%2f%2fwww.motivar.com.ar%2fwp-content%2fuploads%2f2012%2f08%2fuba.jpg&ehk=sv1aa%2bVurlU9Is4aGXJDAKLn%2fgsMFIj4Y0ipZHJW8HI%3d&risl=&pid=ImgRaw&r=0'
              alt='UBA XXI'
            />
            <h3>Mi carrera</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            </p>
          </div>
          <div className='card'>
            <img 
              src={Henry}
              alt='Henry'
            />
            <h3>Aprendizaje</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}