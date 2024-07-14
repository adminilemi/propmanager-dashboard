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
      {shortlet && (
        <p className='w-3/12 text-xs text-Grey6 font-semibold text-center'>
          {shortlet}
        </p>
      )}
    </>
  );
};

export const ClientReqCard = ({
  name,
  phone,
  medium,
  date,
  reqId,
  actionTitle,
}) => {
  return (
    <>
      <p className='w-1/12 text-xs text-Grey6 font-semibold'>{date}</p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {name}
      </p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {phone}
      </p>

      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {medium}
      </p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {reqId}
      </p>
      <button className='main-btn flex-1'> {actionTitle} </button>
    </>
  );
};
export const LeadsCard = ({
  name,
  phone,
  medium,
  date,
  propId,
  propertyDeets,
}) => {
  return (
    <>
      <p className='w-1/12 text-xs text-Grey6 font-semibold'>{date}</p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {name}
      </p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {phone}
      </p>

      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {medium}
      </p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold text-center'>
        {propId}
      </p>
      <p className='w-3/12 text-xs text-Grey6 font-semibold text-center'>
        {propertyDeets}{' '}
      </p>
    </>
  );
};
