import { formatNumInThousands, readableDateTime } from '@/utils';
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

export const AllListingCard = ({
  title,
  bed,
  bath,
  date,
  toilet,
  price,
  sqm,
  status,
}) => {
  return (
    <>
      <p className='w-1/12 text-xs text-Grey6 font-semibold flex items-center gap-3'>
        <input type='checkbox' className='text-xs text-Grey6 font-semibold' />
        {readableDateTime(date)}
      </p>
      <p className='w-2/12 text-xs text-Grey6 font-semibold '>{title}</p>
      <p className='w-1/12 text-xs text-Grey6 font-semibold text-center'>
        {bed}
      </p>

      <p className='w-1/12 text-xs text-Grey6 font-semibold text-center'>
        {bath}
      </p>
      <p className='w-1/12 text-xs text-Grey6 font-semibold text-center'>
        {toilet}
      </p>
      <p className='w-1/12 text-xs text-Grey6 font-semibold '>
        {formatNumInThousands(price)}{' '}
      </p>
      <p className='w-1/12 text-xs text-Grey6 font-semibold '>{sqm} </p>

      <select
        name='status'
        id='status'
        className='w-1/12 text-xs text-Grey6 font-semibold '
        defaultValue={status}
      >
        <option value='Active'>Active</option>
        <option value='Close'>Close</option>
        <option value='Reactivate'>Reactivate</option>
      </select>
    </>
  );
};
