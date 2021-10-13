import React from 'react';
import redux from '../assets/icons/redux.svg';
import '../styles/Contact.scss';

export default function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    [e.target[0], e.target[1], e.target[2]].map(element => {
      console.log(element.value)
    })
  }

  return (
    <section id='contact'>
      <div className='contact'>
        <div className='bar-side'>
          <img src={redux} width='150px' alt='form_icon'/>
        </div>
        <form name='contact-form' onSubmit={handleSubmit} className='form-side'>
          <label className='times'>
            <i class="fas fa-times"/>
          </label>
          <div>
            <label name='fullName'>
              <span>Nombre y Apellido</span>
              <input type='text'/>
            </label>
            <label name='email'>
              <span>Email</span>
              <input type='email'/>
            </label>
          </div>

          <label name='message'>
            <span>Mensaje</span>
            <textarea cols="50" rows="15"></textarea>
          </label>

          <label name='button'>
            <input type='submit'/>
          </label>
        </form>
      </div>
    </section>
  )
}