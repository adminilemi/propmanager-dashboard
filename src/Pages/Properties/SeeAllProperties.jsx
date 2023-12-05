import React from 'react';
import { Link } from 'react-router-dom';
import './SeeAllProperties.scss';
import { PiCaretLeft } from 'react-icons/pi';
import { propertiesData } from '@/components/AllData';
import PropertyCard from '@/components/DashboardComps/PropertyComps/ProductCard/PropertyCard';

function SeeAllProperties() {
  return (
    <main className='seeAllProperties'>
      <section className=''>
        <Link to='/insight' className='viewMore'>
          <PiCaretLeft />
          Back to rental portfolio{' '}
        </Link>
        <h1 className='my-3'> My Properties</h1>
        <article className='d-flex flex-wrap justify-content-between gap-3'>
          {propertiesData.map((item) => (
            <PropertyCard property={item} />
          ))}
        </article>
      </section>
    </main>
  );
}

export default SeeAllProperties;
