import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Inputs } from '@/components/AllData';
import {
  addAddress,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';

const initialState = {
  Property_Name: '',
  StreetAddress: '',
  UnitNumber: '',
  State: '',
  City: '',
  YearBuilt: '',
};

function PropertyAddress({ onNext }) {
  const { address } = useSelector(selectProperty);

  const [propData, setPropData] = useState(address || initialState);

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

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <div className='flex flex-col w-full mb-5'>
        <section className='flex flex-wrap justify-between '>
          {Inputs(propData).map(
            ({ id, label, type, placeholder, value, options, required }) =>
              options ? (
                <div key={id} className=' inputWrapper flex flex-col'>
                  <label>
                    {' '}
                    {label} <em>*</em>{' '}
                  </label>

                  <select
                    id={id}
                    name={label}
                    className='form-control'
                    defaultValue={value}
                    onChange={handleChange}
                    required
                  >
                    <option value=''> Select state </option>
                    {options.map(({ name }) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div key={id} className=' inputWrapper flex flex-col'>
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
                </div>
              ),
          )}
        </section>
      </div>

      <div className='w-full text-end mt-5'>
        <button className='main-btn' type='submit'>
          Next
        </button>
      </div>
    </form>
  );
}

export default PropertyAddress;
