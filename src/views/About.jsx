import React from 'react';
import Profile from '../assets/image_profile.jpeg';
import Henry from '../assets/henry.png';
import Volta from '../assets/volta.jpg';
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
              ¡Hola! Soy Diego Bautista, tengo 19 años y soy un apasionado por el mundo IT.
              Me encanta programar para crear soluciones, trabajar en equipo, mantener una buena relación con mis compañeros y estar en constante aprendizaje.
            </p>
          </div>
          <div className='card'>
            <img 
              src={Volta}
              alt='UBA XXI'
            />
            <h3>Mi carrera</h3>
            <p>
              Actualmente me encuentro en el ciclo básico de la carrera de Lic. en Análisis de Sistemas en la UBA.
              Además, estoy realizando diversos cursos relacionados a la programación con el fin de aprender nuevos lenguajes.
            </p>
          </div>
          <div className='card'>
            <img 
              src={Henry}
              alt='Henry'
            />
            <h3>Aprendizaje</h3>
            <p>
              De la mano de Henry, un bootcamp en programación con +700hs de código; 
              me formé y adquirí las habilidades necesarias para adentrarme en el mundo IT.
              Actualmente me encuentro en la búsqueda de mi primera oportunidad laboral. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}