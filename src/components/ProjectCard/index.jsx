import React from 'react';
import HtmlIcon from '../../assets/icons/html.jsx';
import JavascriptIcon from '../../assets/icons/javascript.jsx';
import ReactIcon from '../../assets/icons/react.jsx';
import NodeIcon from '../../assets/icons/node.jsx';
import PostgreIcon from '../../assets/icons/postgresql.jsx';
import ReduxIcon from '../../assets/icons/redux.jsx';
import SassIcon from '../../assets/icons/sass.jsx';
import MaterialIcon from '../../assets/icons/material.jsx';

import './ProjectCard.scss';

export default function ProjectCard ({ image, title, children, deploy, github, stack }) {

  const icons = {
    html: (key) => <HtmlIcon key={key} width='20px' />,
    js: (key) => <JavascriptIcon key={key} width='20px' />,
    react: (key) => <ReactIcon key={key} width='20px' />,
    sass: (key) => <SassIcon key={key} width='25px' />,
    material: (key) => <MaterialIcon key={key} width='20px' />,
    redux: (key) => <ReduxIcon key={key} width='20px' />,
    node: (key) => <NodeIcon key={key} width='23px' />,
    sql: (key) => <PostgreIcon key={key} width='20px' />,
  }

  return (
    <div className='card'>
      <div className='top'>
        {deploy
        ? <a href={deploy} className='unlock'>
            <i className='fas fa-angle-right' />
            <img className='image' src={image} alt={`${title}`} />
          </a>
        : <span className='lock'>
            <i className='fas fa-lock' />
            <img className='image' src={image} alt={`${title}`} />
          </span>  
        }
      </div>
      <div className='mid'>
        <h3>{title}</h3>
        <p>
          {children ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nulla, ultricies at pretium at, bibendum vitae justo.'
          }
        </p>
      </div>
      <div className='bottom'>
        {stack.map((name, i) => icons[name](i))}
        <a href={github || 'https://github.com/DieG02'} target='_blank' className='icon-container' rel='noopener noreferrer'>
          <i className='fab fa-github icon' />
        </a>
      </div>
    </div>
  )
} 