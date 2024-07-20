import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Paginate from '@/components/Paginate';
import FilteringComp from './FilteringComp';
import { AllListingCard } from '../LeadsComp/Cards';
import { useListingFilteringQuery } from '@/api/apiSlice';
import { useSelector } from 'react-redux';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import Skeleton from 'react-loading-skeleton';
import EmptyState from '@/components/EmptyState/EmptyState';
import { selectSearch } from '@/Redux/Features/globalSlice';
import { ListingInitialState } from '@/components/AllData';

const AllListing = () => {
  const { authUser } = useSelector(selectUserData);
  const searchQuery = useSelector(selectSearch);

  const [propData, setPropData] = useState({
    AgentId: authUser?.userId,
    ...ListingInitialState,
  });
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);

  const { data, isLoading } = useListingFilteringQuery(propData);

  if (isLoading) {
    return (
      <section className='flex flex-col gap-6 '>
        <div className='w-full '>
          <Skeleton count={9} />
        </div>
      </section>
    );
  }

  return (
    <section className='mt-9'>
      <FilteringComp stateData={propData} setStateData={setPropData} />
      {/* <h2 className='text-lg font-bold mt-10'>All Listings</h2> */}

      <section className='my-5'>
        <ul className='flex flex-wrap items-center justify-between  text-xs text-Grey6 font-semibold  border-b-2  pb-3 px-2'>
          <li className='w-1/12 flex items-center gap-3'>
            <input
              type='checkbox'
              className='text-xs text-Grey6 font-semibold'
            />
            Date
          </li>
          <li className='w-2/12 '>Property Title</li>
          <li className='w-1/12 text-center'>No. of Bed</li>
          <li className='w-1/12 text-center'>No. of Bath</li>
          <li className='w-1/12 text-center'>No. of Toilet</li>
          <li className='w-1/12 '>Price</li>
          <li className='w-1/12 '>SQM</li>
          <li className='w-1/12 '>Status</li>
        </ul>
        <ul className='flex flex-col   '>
          {filteredData.length === 0 && searchQuery !== '' ? (
            <EmptyState title="Your search doesn't match" />
          ) : filteredData.length === 0 && searchQuery === '' ? (
            <EmptyState
              title='No Listing'
              subTitle='Your properties will appear when you have them'
            />
          ) : (
            filteredData.map(
              (
                {
                  creationDate,
                  _id,
                  BedRooms,
                  Baths,
                  Toilets,
                  SquareFoot,
                  MonthlyRent,
                  status,
                  Property_Name,
                },
                idx,
              ) => (
                <li
                  key={_id}
                  className={` ${
                    idx % 2 === 0 ? 'bg-[#F9FAFA]' : 'bg-white'
                  } flex items-center justify-between  w-full border-b-2 py-2 px-2 my-[1px]`}
                >
                  <AllListingCard
                    date={creationDate}
                    bed={BedRooms}
                    bath={Baths}
                    toilet={Toilets}
                    title={Property_Name}
                    sqm={SquareFoot}
                    price={MonthlyRent}
                    status={status}
                  />
                </li>
              ),
            )
          )}
        </ul>
      </section>

      <Paginate
        data={data}
        handleSearch={handleSearch}
        currentPage={filteredData}
        setCurrentPage={setFilteredData}
        searchParams='Property_Name'
      />
    </section>
  );
};

export default AllListing;
