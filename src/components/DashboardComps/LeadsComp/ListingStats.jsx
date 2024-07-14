import React from 'react';
import DateFiltering from './DateFiltering';
import { ListingStatCard } from './Cards';

const datas = [
  { id: 1, date: '09/07/2024', rent: 12, sale: 34, shortlet: 20 },
  { id: 2, date: '20/07/2024', rent: 12, sale: 34, shortlet: 20 },
  { id: 3, date: '19/07/2024', rent: 12, sale: 34, shortlet: 20 },
  { id: 4, date: '29/07/2024', rent: 12, sale: 34, shortlet: 20 },
];

const ListingStats = () => {
  return (
    <section className='mt-9'>
      <DateFiltering className='w-full lg:w-9/12 my-10' />
      <h2 className='text-lg font-bold'>Properties Posted Daily</h2>

      <section className='my-5'>
        <ul className='flex flex-wrap items-center justify-between  text-xs text-Grey6 font-semibold container border-b-2 px-5 pb-3 '>
          <li className='w-3/12'>Date</li>
          <li className='w-3/12 text-center'>For Rent</li>
          <li className='w-3/12 text-center'>For Sale</li>
          <li className='w-3/12 text-center'>For Shortlet</li>
        </ul>
        <ul className='flex flex-col   container'>
          {datas.map(({ date, id, rent, sale, shortlet }) => (
            <li
              key={id}
              className='flex justify-between  w-full bg-[#F9FAFA] border-b-2 py-2 px-5 my-[1px] '
            >
              <ListingStatCard
                date={date}
                rent={rent}
                sale={sale}
                shortlet={shortlet}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ListingStats;
