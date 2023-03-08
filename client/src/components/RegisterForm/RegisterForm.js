import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [registrationMessage, setRegistrationMessage] = useState('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  function validateCredentials() {
    if (username.length < 4) {
      setRegistrationMessage('Username has to be at least 4 characters long');
    } else if (password.length < 8) {
      setRegistrationMessage('Password must be at least 8 charcaters long');
    } else if (!password.match(/[!@#$%^&*]/) || !password.match(/[0-9]/)) {
      setRegistrationMessage(
        'Password must contain at least one number and one special character'
      );
    } else if (password !== confirmPassword) {
      setRegistrationMessage('Passwords do not match');
    } else {
      setRegistrationMessage('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateCredentials();

    try {
      const data = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      const response = await fetch(`${backendUrl}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseBody = await response.json();
      if (responseBody.message === 'Email already in use') {
        setRegistrationMessage(responseBody.message);
      }
    } catch (error) {
      setRegistrationMessage('Server Error');
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
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='register-input'
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          className='register-input'
          type='text'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor='password-confirm'>Confirm password</label>
        <input
          className='register-input'
          type='text'
          id='password-confirm'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className='registration-error-message'>{registrationMessage}</p>
        <button className='register-button'>Register</button>
        <Link to='#' className='redirect-to-login'>
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
