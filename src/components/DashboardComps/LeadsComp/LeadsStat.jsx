import React, { useState } from 'react';
import { ListingStatCard } from './Cards';
import DateFiltering from './DateFiltering';
import Paginate from '@/components/Paginate';
import { useGlobalHooks } from '@/Hooks/globalHooks';

const datas = [
  { id: 1, date: '09/07/2024', phone: 10, whatsapp: 34 },
  { id: 2, date: '20/07/2024', phone: 9, whatsapp: 14 },
  { id: 3, date: '19/07/2024', phone: 21, whatsapp: 41 },
  { id: 4, date: '29/07/2024', phone: 23, whatsapp: 42 },
  { id: 5, date: '29/07/2024', phone: 23, whatsapp: 42 },
  { id: 6, date: '29/07/2024', phone: 23, whatsapp: 42 },
  { id: 7, date: '29/07/2024', phone: 23, whatsapp: 42 },
  { id: 8, date: '29/07/2024', phone: 23, whatsapp: 42 },
];

const LeadsStats = () => {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);
  return (
    <section className='mt-9'>
      <DateFiltering className='w-full lg:w-9/12 my-10' />
      <h2 className='text-lg font-bold'>Leads Daily</h2>

      <section className='my-5'>
        <ul className='flex flex-wrap items-center justify-between  text-xs text-Grey6 font-semibold container border-b-2 px-5 pb-3 '>
          <li className='w-3/12'>Date</li>
          <li className='w-3/12 text-center'>From Phone</li>
          <li className='w-3/12 text-center'>From Whatsapp</li>
        </ul>
        <ul className='flex flex-col   container'>
          {filteredData.map(({ date, id, phone, whatsapp }) => (
            <li
              key={id}
              className='flex justify-between  w-full bg-[#F9FAFA] border-b-2 py-2 px-5 my-[1px] '
            >
              <ListingStatCard date={date} rent={phone} sale={whatsapp} />
            </li>
          ))}
        </ul>
      </section>

      <Paginate
        data={datas}
        handleSearch={handleSearch}
        currentPage={filteredData}
        setCurrentPage={setFilteredData}
      />
    </section>
  );
};

export default LeadsStats;
