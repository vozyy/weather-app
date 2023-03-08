import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      await fetch(`${backendUrl}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='register-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          className='register-input username'
          type='text'
          id='username'
          // required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='register-input'
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}

          //  required
        />
        <label htmlFor='password'>Password</label>
        <input
          className='register-input'
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}

          // required
        />
        <label htmlFor='password-confirm'>Confirm password</label>
        <input
          className='register-input'
          type='password'
          id='password-confirm'
          onChange={(e) => setConfirmPassword(e.target.value)}
          // required
        />
        <button className='register-button'>Register</button>
        <Link to='#' className='redirect-to-login'>
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
