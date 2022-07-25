import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email Invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='pt-44 w-96 h-full'>
      <h1 className="text-3xl mx-8 mb-8">Contact:</h1>
      <form className="ml-4 w-auto h-auto" onSubmit={handleSubmit}>
        <div className=''>
          <label className='text-2xl' htmlFor="name">Name:</label>
          <input className='mb-4 ml-4 w-96 h-8 border-2 border-gray-400 rounded' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-2xl' htmlFor="email">Email address:</label>
          <input className='mb-4 ml-4 w-96 h-8 border-2 border-gray-400 rounded' type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-2xl' htmlFor="message">Message:</label>
          <textarea className='mb-4 ml-4 w-96 h-44 border-2 border-gray-400 rounded' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="text-2xl text-red-700">{errorMessage}</p>
          </div>
        )}
        <button className='border-2 border-gray-400 rounded-full p-2 text-2xl bg-sky-200 m-4 w-44' type="submit">Submit</button>
      </form>
    </div>
  );
}