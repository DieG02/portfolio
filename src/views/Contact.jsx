import React from 'react';
// import Logo from '../assets/my_logo';
import ShakingHands from '../assets/icons/shaking_hands.jsx'
import '../styles/Contact.scss';

export default function Contact() {
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   [e.target[0], e.target[1], e.target[2]].map(element => {
  //     console.log(element.value)
  //     return element.value;
  //   })
  // }

  return (
    <section id='contact'>
      <div className='contact'>
        <div className='bar-side'>
          <ShakingHands width='70%' color='#FAFAFA' />
        </div>
        <form 
          name='contact-form'  
          className='form-side'
          method='POST'
          action='https://formsubmit.co/diegobautista2002@gmail.com'
          target='_blank'
        >
          <div>
            <div className='fullName'>
              <span>Nombre y Apellido</span>
              <input 
                name='name'
                required
                type='text' 
                placeholder='Ingresa tu nombre'
                pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
              />
            </div>
            <div className='email'>
              <span>Email</span>
              <input
                required
                name='email'
                type='email'
                placeholder='Ingresa tu email'
                pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
              />
            </div>
          </div>

          <div className='message'>
            <span>Mensaje</span>
            <textarea
              required 
              id='message'
              name='message' 
              placeholder='Escribe un mensaje'
            />
          </div>

          <div name='button'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    </section>
  )
}