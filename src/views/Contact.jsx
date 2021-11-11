import React from 'react';
import Logo from '../assets/my_logo';
import Shaking_hands from '../assets/icons/shaking_hands.jsx'
import '../styles/Contact.scss';

export default function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    [e.target[0], e.target[1], e.target[2]].map(element => {
      console.log(element.value)
      return element.value;
    })
  }

  return (
    <section id='contact'>
      <div className='contact'>
        <div className='bar-side'>
          <Shaking_hands width='70%' color='#FAFAFA' />
        </div>
        <form name='contact-form' onSubmit={handleSubmit} className='form-side'>
          <div>
            <div name='fullName'>
              <span>Nombre y Apellido</span>
              <input type='text' placeholder='Nombre completo'/>
            </div>
            <div name='email'>
              <span>Email</span>
              <input type='email' placeholder='Ingrese su email'/>
            </div>
          </div>

          <div name='message'>
            <span>Mensaje</span>
            <textarea id='message' placeholder='Escriba su mensaje'/>
          </div>

          <div name='button'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    </section>
  )
}