import React from 'react';
import html_icon from '../assets/icons/html.svg';
import javascript_icon from '../assets/icons/javascript.svg';
import react_icon from '../assets/icons/react.svg';
// import postgresql_icon from '../assets/icons/postgresql.svg';
import node_icon from '../assets/icons/node.svg';
import '../styles/Skills.scss';

export default function Skills() {
  const skills = {
    front: [
      'CSS', 'React\nNative', 'Redux', 'Expo', 'Sass',
      'Bootstrap', 'Figma'
    ],
    back: [
      'Express', 'Firebase',
      'PostgreSQL', 'Sequelize'
    ]
  }

  return (
    <section id='skills'>
      <div className='skills'>
        <h2 className='subtitle'>Tecnologías</h2>
        <div className='content'>
          
          <div className='front-skills'>
            {skills.front.map((name, i) => 
              <p key={i} className={`front${i} items`}>{name}</p>
            )}
          </div>
          <div className='main-skills'>
            <ul>
              <li>
                <img src={html_icon} alt='html' />
              </li>
              <li>
                <img src={javascript_icon} alt='javascript' />
              </li>
              <li>
                <img src={react_icon} alt='react' />
              </li>
              <li>
                <img src={node_icon} alt='node' />
              </li>
            </ul>
          </div>

          <div className='back-skills'>
            {skills.back.map((name, i) =>
              <p key={i} className={`back${i} items`}>{name}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


/*

  <ul>
            <li>
              <img src={html_icon} alt='html' />
            </li>
            <li>
              <img src={javascript_icon} alt='javascript' />
            </li>
            <li>
                <img src={react_icon} alt='react' />
            </li>
            <li>
              <img src={node_icon} alt='node' />
            </li>
          </ul>

*/