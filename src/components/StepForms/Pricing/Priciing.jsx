import React, { useState } from 'react';
import './ListingInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addListingInfo,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';

import { paymentType } from '@/components/AllData';

const Pricing = ({ onNext, onPrevious }) => {
  const { listingInfo } = useSelector(selectProperty);

  const [selectValues, setSelectValues] = useState(
    listingInfo || {
      MonthlyRent: '',
      PaymentType: '',
      Currency: '',
    },
  );

  const dispatch = useDispatch();

  console.log(listingInfo);
  // console.log(customOptions);

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addListingInfo(selectValues));

    onNext();
  };

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <ul className='flex flex-wrap justify-between card p-4'>
        <li className='w-full'>
          <label htmlFor='PaymentType' className='labelTitle'>
            Payment Type
            <em>*</em>
          </label>

          <select
            id='PaymentType'
            name='PaymentType'
            type='number'
            className='form-control !bg-transparent'
            defaultValue={selectValues.PaymentType}
            onChange={(e) =>
              handleOnSelectChange('PaymentType', e.target.value)
            }
            required
          >
            <option value=''> Select Payment type</option>
            {paymentType.map(({ title, id }) => (
              <option value={title} key={id}>
                {' '}
                {title}{' '}
              </option>
            ))}
          </select>
        </li>
        <li className='inputWrapper'>
          <label htmlFor='Currency' className='labelTitle'>
            Currency
          </label>

          <select
            id='Currency'
            name='Currency'
            type='number'
            className='form-control !bg-transparent'
            defaultValue={selectValues.Currency}
            onChange={(e) => handleOnSelectChange('Currency', e.target.value)}
            required
          >
            <option value='' disabled>
              {' '}
              Select Currency
            </option>
            {['NGN', 'USD', 'EUR', 'GBP'].map((item, idx) => (
              <option value={item} key={idx}>
                {' '}
                {item}{' '}
              </option>
            ))}
          </select>
        </li>
        <li className='inputWrapper'>
          <label htmlFor='MonthlyRent' className='labelTitle'>
            Amount
          </label>

          <input
            id='MonthlyRent'
            name='MonthlyRent'
            type='number'
            className='form-control !bg-transparent'
            defaultValue={selectValues.MonthlyRent}
            onChange={(e) =>
              handleOnSelectChange('MonthlyRent', e.target.value)
            }
            required
          />
        </li>
      </ul>
      <section className='flex gap-3 justify-end mt-5'>
        <button
          onClick={onPrevious}
          className='outline-btn bg-[#F7F7FD] !text-mainColor !border-0'
          type='button'
        >
          Previous{' '}
        </button>
        <button className='main-btn' type='submit'>
          {' '}
          Next{' '}
        </button>
      </section>
    </form>
  );
};

export default Pricing;
