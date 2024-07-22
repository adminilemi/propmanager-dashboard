import React from 'react';
import Skeleton from 'react-loading-skeleton';

const PropertyLoading = () => {
  return (
    <ul className='flex flex-wrap gap-3 mt-9 justify-between container'>
      {Array.from({ length: 9 }).map((_, idx) => (
        <li
          key={idx}
          className=' w-full md:w-[30%] flex flex-col gap-6 mt-9 card overflow-hidden !p-0'
        >
          <div className='w-full -mt-3'>
            <Skeleton height={100} />
          </div>

          <div className='p-3 bg-white'>
            <div className='flex justify-between gap-4 mt-7'>
              <Skeleton containerClassName='grow' />
              <Skeleton containerClassName='grow' />
            </div>
            <Skeleton containerClassName='grow mt-3' count={2} />
            <hr />
            <div className='flex justify-between gap-4 mt-7'>
              <Skeleton containerClassName='grow' />
              <Skeleton containerClassName='grow' />
              <Skeleton containerClassName='grow' />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PropertyLoading;
