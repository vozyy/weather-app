import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './LogoTitle.css';

export default function LogoTitle() {
  return (
    <Link to='#'>
      <div className='logo-container'>
        <img src={logo} className='logo-img' alt='weather-app-logo' />
        <h1 className='logo-name'>Weather App</h1>
      </div>
    </Link>
  );
}
