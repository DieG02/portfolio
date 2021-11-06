import React from 'react';
import Henry from '../assets/henry.png';
import Profile from '../assets/image_profile.jpeg';
import '../styles/About.scss';

export default function About () {
  return (
    <section id='about'>
      <div className='about'>
        <h2 className='subtitle'>Sobre Mi</h2>
        <div className='content'>
          <div className='card'>
            <img 
              src={Profile}
              alt='Diego Bautista'
            />
            <h3>¿Quién soy?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            </p>
          </div>
          <div className='card'>
            <img 
              src='https://th.bing.com/th/id/R.ed991c350eb263ad5060a33ad8d2ed38?rik=PM27HQp7MyMCvw&riu=http%3a%2f%2felregionaldigital.com.ar%2fwp-content%2fuploads%2f2021%2f01%2fUBA-XXI.jpg&ehk=rYNK68SyGJuO9jonIpeqzDrc6QP2KMRb1wgKMeVLcbQ%3d&risl=&pid=ImgRaw&r=0'
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