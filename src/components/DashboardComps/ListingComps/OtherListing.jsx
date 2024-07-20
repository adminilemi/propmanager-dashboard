import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Paginate from '@/components/Paginate';
import FilteringComp from './FilteringComp';
import { ClientReqCard } from '../LeadsComp/Cards';
import { ListingInitialState } from '@/components/AllData';
import Skeleton from 'react-loading-skeleton';
import { selectSearch } from '@/Redux/Features/globalSlice';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useSelector } from 'react-redux';
import { useListingFilteringQuery } from '@/api/apiSlice';
import PropertyCard from '../PropertyComps/ProductCard/PropertyCard';
import EmptyState from '@/components/EmptyState/EmptyState';

const OtherListings = ({ vacantVal }) => {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);
  const { authUser } = useSelector(selectUserData);
  const searchQuery = useSelector(selectSearch);
  const [propData, setPropData] = useState({
    AgentId: authUser?.userId,
    ...ListingInitialState,
    Vacancy: vacantVal,
  });

  const { data, isLoading } = useListingFilteringQuery(propData);

  console.log('listing????', propData);
  console.log(data);

  if (isLoading) {
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
  }

  return (
    <section className='mt-9'>
      <FilteringComp stateData={propData} setStateData={setPropData} />

      <section className='my-5'>
        <ul className='flex flex-col   '>
          {filteredData.length === 0 && searchQuery !== '' ? (
            <EmptyState title="Your search doesn't match" />
          ) : filteredData.length === 0 && searchQuery === '' ? (
            <EmptyState
              title='No Listing'
              subTitle='Your properties will appear when you have them'
            />
          ) : (
            filteredData?.map(
              ({
                creationDate,
                _id,
                BedRooms,
                Baths,
                Toilets,
                SquareFoot,
                MonthlyRent,
                status,
                Property_Name,
                InteriorImages,
                StreetAddress,
                City,
                State,
                PaymentType,
              }) => (
                <li
                  key={_id}
                  className={` flex flex-wrap items-center justify-between  w-full md:w-[32%] lg:w-[23%] gap-3`}
                >
                  <PropertyCard
                    id={_id}
                    date={creationDate}
                    bed={BedRooms}
                    bath={Baths}
                    toilet={Toilets}
                    title={Property_Name}
                    sqm={SquareFoot}
                    price={MonthlyRent}
                    status={status}
                    imageUrl={InteriorImages[0]?.url}
                    location={`${StreetAddress}, ${City}, ${State}`}
                    paymentType={PaymentType}
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

export default OtherListings;
