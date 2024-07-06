import React from 'react';
import Logo from '../assets/property4u-logo-white.png';
import { Link } from 'react-router-dom';
import IlemiIcon from './SGVs/IlemiIcon';

function BrandLogo({ sidebar, className }) {
  return (
    <Link to='/' className={`${className} flex`}>
      {sidebar ? (
        <div className='w-full'>
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
