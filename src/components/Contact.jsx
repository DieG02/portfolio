import React from 'react';
import redux from '../assets/icons/redux.svg';
import '../styles/Contact.scss';

export default function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  }

  return (
    <section id='contact'>
      <div className='contact'>
        <div className='bar-side'>
          <img src={redux} width='100px'/>
        </div>
        <form onSubmit={handleSubmit} className='form-side'>
          <input type='text' name='fullName'/>
          <input type='email' name='email'/>
          <input type='text' name='message'/>
          <input type='submit' className='button'/>
        </form>
      </div>
    </section>
  )
}