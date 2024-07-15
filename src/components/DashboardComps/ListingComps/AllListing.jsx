import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Paginate from '@/components/Paginate';
import FilteringComp from './FilteringComp';
import { AllListingCard } from '../LeadsComp/Cards';

const datas = [
  {
    id: 1,
    date: '09/07/2024',
    title: 'New Jarus',
    bed: 3,
    bath: 4,
    toilet: 1,
    price: '200,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 2,
    date: '09/07/2024',
    title: 'Bana Island',
    bed: 1,
    bath: 2,
    toilet: 2,
    price: '200,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 3,
    date: '09/07/2024',
    title: 'Main Bungalow ',
    bed: 13,
    bath: 43,
    toilet: 12,
    price: '10,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 4,
    date: '09/07/2024',
    title: 'Old Detached Semi Bungalow ',
    bed: 13,
    bath: 14,
    toilet: 11,
    price: '2,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 5,
    date: '09/07/2024',
    title: 'Newly Detached Multi-Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 6,
    date: '09/07/2024',
    title: 'Newly Undetached Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 7,
    date: '09/07/2024',
    title: 'Newly Detached Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
];

const AllListing = () => {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);

  return (
    <section className='mt-9'>
      <FilteringComp />
      <h2 className='text-lg font-bold mt-10'>All Listings</h2>

      <section className='my-5'>
        <ul className='flex flex-wrap items-center justify-between  text-xs text-Grey6 font-semibold  border-b-2  pb-3 '>
          <input
            type='checkbox'
            className='mr-2 text-xs text-Grey6 font-semibold'
          />
          <li className='w-1/12'>Date</li>
          <li className='w-2/12 '>Property Title</li>
          <li className='w-1/12 text-center'>No. of Bed</li>
          <li className='w-1/12 text-center'>No. of Bath</li>
          <li className='w-1/12 text-center'>No. of Toilet</li>
          <li className='w-1/12 '>Price</li>
          <li className='w-1/12 '>SQM</li>
          <li className='w-1/12 '>Status</li>
        </ul>
        <ul className='flex flex-col   '>
          {filteredData.map(
            (
              { date, id, bed, bath, toilet, sqm, price, status, title },
              idx,
            ) => (
              <li
                key={id}
                className={` ${
                  idx % 2 === 0 ? 'bg-[#F9FAFA]' : 'bg-white'
                } flex items-center justify-between  w-full border-b-2 py-2  my-[1px]`}
              >
                <AllListingCard
                  date={date}
                  bed={bed}
                  bath={bath}
                  toilet={toilet}
                  title={title}
                  sqm={sqm}
                  price={price}
                  status={status}
                />
              </li>
            ),
          )}
        </ul>
      </section>

      <Paginate
        data={datas}
        handleSearch={handleSearch}
        currentPage={filteredData}
        setCurrentPage={setFilteredData}
        searchParams='title'
      />
    </section>
  );
};

export default AllListing;
