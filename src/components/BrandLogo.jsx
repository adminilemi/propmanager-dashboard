import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/property4u-logo-white.png';

const BrandLogo = ({ className }) => {
  return (
    <Link to='/' className={`${className} flex`}>
      <figure>
        <img src={Logo} alt='Property4u logo' />
      </figure>
    </Link>
  );
};

export default BrandLogo;
