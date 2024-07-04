import React from 'react';
import Logo from '../assets/property4u-logo-white.png';
import { Link } from 'react-router-dom';
import IlemiIcon from './SGVs/IlemiIcon';

function BrandLogo({ sidebar }) {
  return (
    <Link to='/' className='d-flex'>
      {sidebar ? (
        <div className='col-12'>
          <IlemiIcon />
        </div>
      ) : (
        <figure>
          {' '}
          <img src={Logo} alt='Ilemi Logo' />
        </figure>
      )}
    </Link>
  );
}

export default BrandLogo;
