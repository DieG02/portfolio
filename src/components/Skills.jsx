import React from 'react';
import '../styles/Skills.scss';

export default function Skills() {
  const my_skills = {
    'main': [
      'HTML', 'CSS', 'JS',
      'React', 'RN CLI', 'NodeJS'
    ],
    'auxiliary': [
      'Redux', 'Expo', 'Sass', 
      'Bootstrap', 'Figma', 'PostgreSQL',
      'Firebase', 'Express', 'Sequelize'
    ]
  }


  return (
    <section id='skills'>
      <div className='skills'>
        <h2 className='subtitle'>Tecnologías</h2>
        <div className='content'>
          <ul>
            <li>
              <a>HTML</a>
            </li>
            <li>
              <a>CSS</a>
            </li>
            <li>
              <a>JS</a>
            </li>
            <li>
              <a>React</a>
            </li>
            <li>
              <a>RN CLI</a>
            </li>
            <li>
              <a>NodeJS</a>
            </li>
          </ul>

          <ul>
            <li>
              <a>Redux</a>
            </li>
            <li>
              <a>Expo</a>
            </li>
            <li>
              <a>Sass</a>
            </li>
            <li>
              <a>Bootstrap</a>
            </li>
            <li>
              <a>Figma</a>
            </li>
            <li>
              <a>PostgreSQL</a>
            </li>
            <li>
              <a>Firebase</a>
            </li>
            <li>
              <a>Express</a>
            </li>
            <li>
              <a>Sequelize</a>
            </li>
            <li>
              <a>Webpack</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}