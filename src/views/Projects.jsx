import React from 'react';
import Card from '../components/ProjectCard';
import '../styles/Projects.scss';

export default function Projects() {

 
  return (
    <section id='projects'>
      <div className='projects'>
        <h2 className='subtitle'>Mis Proyectos</h2>
        <div className='content'>
          <Card 
            image='https://i.ibb.co/WfyFX22/Fany.png'
            title='Fany' 
            deploy={null} 
            github='https://github.com/DieG02/RN-Fany'
            stack={['react', 'js', 'sass']}
          >
            Fany consiste en un reproductor de musica en streamming al puro estilo de spotify combinada con la amplia variedad de youtube, sumandole el plus sin anuncios
          </Card>
          <Card
            image='https://i.ibb.co/K7FR1x3/Bilder.png'
            title='Bilder'
            deploy='https://bilder-landing-page.vercel.app/'
            github='https://github.com/DieG02/Bilder-Admin'
            stack={['react', 'node', 'js', 'material']}
          >
            Bilder surgió con la idea de facilitar el proceso de compra para las pequeñas y medianas empresas, con el fin de ofrecer un mejor precio al consumidor final.
          </Card>
          <Card
            image='https://i.ibb.co/CJ3Ms3Q/Ubank.png'
            title='Ubank'
            deploy={null}
            github='https://github.com/DieG02/Fintech'
            stack={['react', 'redux', 'node', 'sql']}
          >
            Ubank, mi remake de la HenryBank, fue mi proyecto final de Henry, en el cual terminamos de consolidar todos los conocimientos adquiridos en el curso, empleando las mejores prácticas.
          </Card>
        </div>
      </div>
    </section>
  )
}