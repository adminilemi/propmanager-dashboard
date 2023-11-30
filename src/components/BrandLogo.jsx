import React from 'react';
import Logo from '../assets/ilemi-logo.svg';
import { Link } from 'react-router-dom';

function BrandLogo() {
  return (
    <Link to='/'>
      <figure>
        {' '}
        <img src={Logo} alt='Ilemi Logo' />
      </figure>
    </Link>
  );
}

export default BrandLogo;
