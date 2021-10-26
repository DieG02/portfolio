import React from 'react';
import HtmlIcon from '../assets/icons/html.jsx';
import JavascriptIcon from '../assets/icons/javascript.jsx';
import ReactIcon from '../assets/icons/react.jsx';
import NodeIcon from '../assets/icons/node.jsx';
import '../styles/Skills.scss';

export default function Skills() {
  const skills = {
    front: [
      'CSS', 'React\nNative',
      'Redux', 'Expo', 'Sass',
      'Bootstrap', 'Figma'
    ],
    back: [
      'Express', 'Firebase',
      'PostgreSQL', 'Sequelize',  'GitHub',
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
                <HtmlIcon height='90' />
              </li>
              <li>
                <JavascriptIcon height='90'/>
              </li>
              <li>
                <ReactIcon height='90'/>
              </li>
              <li>
                <NodeIcon height='90'/>
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