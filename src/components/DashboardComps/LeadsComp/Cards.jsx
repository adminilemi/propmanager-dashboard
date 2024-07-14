import React from 'react';

export const ListingStatCard = ({ rent, sale, shortlet, date }) => {
  return (
    <>
      <p className='w-3/12 text-xs text-Grey6 font-semibold'>{date}</p>
      <p className='w-3/12 text-xs text-Grey6 font-semibold text-center'>
        {rent}
      </p>
      <p className='w-3/12 text-xs text-Grey6 font-semibold text-center'>
        {sale}
      </p>
      <p className='w-3/12 text-xs text-Grey6 font-semibold text-center'>
        {shortlet}
      </p>
    </>
  );
};
