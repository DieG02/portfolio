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
            image='https://eduardoduque.com/wp-content/uploads/2016/01/Spotify.jpg'
            title='Fany' 
            deploy={false} 
            github='https://github.com/DieG02/RN-Fany'
            stack={['react', 'js']}
          >
            Fany consiste en un reproductor de musica en streamming al puro estilo de spotify combinada con la amplia variedad de youtube, sumandole el plus sin anuncios
          </Card>
          <Card
            image='https://i.ibb.co/KKQ0c4C/Bilder-landing.png'
            title='Bilder'
            deploy='https://bilder-landing-page.vercel.app/'
            github='https://github.com/DieG02/Bilder-Admin'
            stack={['react', 'node', 'js']}
          >
            Bilder surgió con la idea de facilitar el proceso de compra para las pequeñas y medianas empresas, con el fin de ofrecer un mejor precio al consumidor final.
          </Card>
          <Card
            image='https://i.ibb.co/hDLbqdV/Uala-landing.png'
            title='Henry Bank'
            deploy={false}
            github='https://github.com/DieG02/Fintech'
            stack={['react', 'redux', 'node', 'sql']}
          >
            Henry Bank fue mi proyecto final del Bootcamp Henry, en el terminamos de consolidar todos los conocimientos adquiridos en el curso, empleando las mejores prácticas.
          </Card>
        </div>
      </div>
    </section>
  )
}