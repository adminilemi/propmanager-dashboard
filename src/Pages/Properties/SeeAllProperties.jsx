import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SeeAllProperties.scss';
import { PiCaretLeft } from 'react-icons/pi';
import { propertiesData } from '@/components/AllData';
import PropertyCard from '@/components/DashboardComps/PropertyComps/ProductCard/PropertyCard';
import Paginate from '@/components/Paginate';
import { useGlobalHooks } from '@/Hooks/globalHooks';

function SeeAllProperties() {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);

  return (
    <main className='seeAllProperties'>
      <section className=''>
        <Link to='/insight' className='viewMore'>
          <PiCaretLeft />
          Back to rental portfolio{' '}
        </Link>
        <h1 className='my-3'> My Properties</h1>

        <section className='filtering mb-5 d-flex justify-content-between rounded p-2'>
          <div className=' border-right pe-4'>
            <select className=''>
              <option>Show All</option>
              <option>Show Active</option>
              <option>Show Archive</option>
              <option>Show Maintenance</option>
            </select>
          </div>
          <div className='d-flex gap-2 col-4'>
            <select className='form-select flex-fill'>
              <option>By Date</option>
              <option>By Time</option>
              <option>By Price</option>
              <option>By Location</option>
            </select>
            <div className='layoutIcon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <g opacity='0.5' clipPath='url(#clip0_283_14003)'>
                  <path
                    d='M10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z'
                    fill='#100A55'
                  />
                  <path
                    d='M18 5H14C13.4477 5 13 5.44772 13 6V10C13 10.5523 13.4477 11 14 11H18C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5Z'
                    fill='#100A55'
                  />
                  <path
                    d='M10 13H6C5.44772 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H10C10.5523 19 11 18.5523 11 18V14C11 13.4477 10.5523 13 10 13Z'
                    fill='#100A55'
                  />
                  <path
                    d='M18 13H14C13.4477 13 13 13.4477 13 14V18C13 18.5523 13.4477 19 14 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 18.5523 13 18 13Z'
                    fill='#100A55'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_283_14003'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='layoutIcon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <g opacity='0.5' clipPath='url(#clip0_283_14026)'>
                  <path
                    d='M3.33301 5H9.16634'
                    stroke='#000929'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.33301 10H9.16634'
                    stroke='#000929'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.33301 15H10.833'
                    stroke='#000929'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12.5 7.5L15 5L17.5 7.5'
                    stroke='#000929'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15 5V15'
                    stroke='#000929'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_283_14026'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='layoutIcon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <g clipPath='url(#clip0_283_14011)'>
                  <path
                    d='M18 6H6C4.89543 6 4 6.59695 4 7.33333V8.66667C4 9.40305 4.89543 10 6 10H18C19.1046 10 20 9.40305 20 8.66667V7.33333C20 6.59695 19.1046 6 18 6Z'
                    fill='#5F259F'
                  />
                  <path
                    d='M18 14H6C4.89543 14 4 14.597 4 15.3333V16.6667C4 17.403 4.89543 18 6 18H18C19.1046 18 20 17.403 20 16.6667V15.3333C20 14.597 19.1046 14 18 14Z'
                    fill='#5F259F'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_283_14011'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>
        <article className='d-flex flex-wrap justify-content-between gap-3'>
          {filteredData.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </article>
      </section>

      <Paginate
        data={propertiesData}
        handleSearch={handleSearch}
        currentPage={filteredData}
        setCurrentPage={setFilteredData}
      />
    </main>
  );
}

export default SeeAllProperties;
