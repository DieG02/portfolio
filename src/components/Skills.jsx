import React from 'react';
import HtmlIcon from '../assets/icons/html.jsx';
import JavascriptIcon from '../assets/icons/javascript.jsx';
import ReactIcon from '../assets/icons/react.jsx';
import NodeIcon from '../assets/icons/node.jsx';
import PostgresqlIcon from '../assets/icons/postgresql.jsx';
import ReduxIcon from '../assets/icons/redux.jsx';
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
                {/* <img src={html_icon} alt='html'  color='#ff5e62' /> */}
                <HtmlIcon height='90' />
              </li>
              <li>
                {/* <img src={javascript_icon} alt='javascript' /> */}
                <JavascriptIcon height='90' />
              </li>
              <li>
                {/* <img src={react_icon} alt='react' /> */}
                <ReactIcon height='90'/>
              </li>
              <li>
                {/* <img src={node_icon} alt='node' /> */}
                <NodeIcon height='90'/>
              </li>
              <li>
                {/* <img src={node_icon} alt='node' /> */}
                <PostgresqlIcon height='90'/>
              </li>
              <li>
                {/* <img src={node_icon} alt='node' /> */}
                <ReduxIcon height='90'/>
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