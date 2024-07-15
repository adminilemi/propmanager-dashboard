import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Inputs } from '@/components/AllData';
import {
  addAddress,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import allState from '@/components/nigeria-state-and-lgas.json';

const initialState = {
  ElectricityBand: '',
  Property_Category: '',
  Property_Name: '',
  StreetAddress: '',
  UnitNumber: '',
  State: '',
  City: '',
  YearBuilt: '',
};

const PropertyAddress = ({ onNext }) => {
  const { address } = useSelector(selectProperty);
  const [getLga, setGetLga] = useState([]);

  const [propData, setPropData] = useState(address || initialState);

  console.log(address);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(propData));

    onNext();
  };

  useEffect(() => {
    if (propData?.State !== '') {
      const lgaData = allState.find((s) => s?.state === propData?.State);

      setGetLga(lgaData?.lgas);
    }
  }, [propData?.State]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col '>
      <section className='flex flex-col w-full mb-5 card p-4'>
        <ul className='flex flex-wrap justify-between '>
          {Inputs(propData, allState, getLga).map(
            ({ id, label, type, placeholder, value, options, required }) =>
              options ? (
                <li
                  key={id}
                  className={
                    id === 'Property_Category'
                      ? ' inputWrapper !w-full flex flex-col'
                      : ' inputWrapper flex flex-col'
                  }
                >
                  <label>
                    {' '}
                    {label} <em>*</em>{' '}
                  </label>

                  <select
                    id={id}
                    name={label}
                    className='form-control'
                    value={value}
                    onChange={handleChange}
                    required
                  >
                    <option value=''> {placeholder} </option>
                    {options.map((item) => (
                      <option
                        key={item['state'] || item?.id || item}
                        value={item['state'] || item?.title || item}
                      >
                        {item['state'] || item?.title || item}
                      </option>
                    ))}
                  </select>
                </li>
              ) : (
                <li key={id} className=' inputWrapper flex flex-col'>
                  <label>
                    {' '}
                    {label} {required && <em>*</em>}
                  </label>

                  <input
                    id={id}
                    name={label}
                    type={type}
                    placeholder={placeholder}
                    className='form-control'
                    defaultValue={value}
                    onChange={handleChange}
                    required={required}
                  />
                </li>
              ),
          )}
        </ul>
      </section>

      <section className='w-full text-end mt-2'>
        <button className='main-btn' type='submit'>
          Next
        </button>
      </section>
    </form>
  );
};

export default PropertyAddress;
