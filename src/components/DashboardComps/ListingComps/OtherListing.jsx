import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Paginate from '@/components/Paginate';
import FilteringComp from './FilteringComp';
import { ClientReqCard } from '../LeadsComp/Cards';

const datas = [
  {
    id: 'R000764',
    date: '09/07/2024',
    name: 'Adeshewa abiodun',
    phone: '08134567898',
    medium: 'Whatsapp',
  },
  {
    id: 'R000765',
    date: '20/07/2024',
    name: 'Adetewa Sabiodun',
    phone: 'Not Displayed',
    medium: 'Message',
  },
  {
    id: 'R000766',
    date: '19/07/2024',
    name: 'Ademewa Babiodun',
    phone: '08134567898',
    medium: 'Phone',
  },
  {
    id: 'R000767',
    date: '29/07/2024',
    name: 'Aderewa Cabiodun',
    phone: '08134567898',
    medium: 'Whatsapp',
  },
  {
    id: 'R000768',
    date: '29/07/2024',
    name: 'Aderewa Cabiodun',
    phone: '08134567898',
    medium: 'Message',
  },
  {
    id: 'R000769',
    date: '29/07/2024',
    name: 'Aderewa Cabiodun',
    phone: '08134567898',
    medium: 'Phone',
  },
];

const OtherListings = () => {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);
  return (
    <section className='mt-9'>
      <FilteringComp className='w-full lg:w-9/12 my-10' />
      <h2 className='text-lg font-bold'>Leads Daily</h2>

      <section className='my-5'>
        <ul className='flex flex-wrap items-center justify-between  text-xs text-Grey6 font-semibold container border-b-2 px-5 pb-3 '>
          <li className='w-1/12'>Date</li>
          <li className='w-2/12 text-center'>Client Name</li>
          <li className='w-2/12 text-center'>Client Phone</li>
          <li className='w-2/12 text-center'>Medium</li>
          <li className='w-2/12 text-center'>Request ID</li>
          <li className='w-3/12 text-center'>Action</li>
        </ul>
        <ul className='flex flex-col   container'>
          {filteredData.map(({ date, id, name, medium, phone }) => (
            <li
              key={id}
              className='flex items-center justify-between  w-full bg-[#F9FAFA] border-b-2 py-2 px-5 my-[1px] '
            >
              <ClientReqCard
                date={date}
                name={name}
                medium={medium}
                reqId={id}
                phone={phone}
                actionTitle={
                  medium === 'Whatsapa'
                    ? 'Connect to Whatsapp'
                    : medium === 'Phone'
                    ? ' Send SMS'
                    : ' Send A Message'
                }
              />
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

export default OtherListings;
