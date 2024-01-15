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
  Zipcode: '',
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
    <form onSubmit={handleSubmit} className='d-flex flex-column'>
      <div className='d-flex flex-column col-12 mb-5'>
        <section className='d-flex flex-wrap justify-content-between '>
          {Inputs(propData).map(
            ({ id, label, type, placeholder, value, options }) =>
              options ? (
                <div key={id} className=' inputWrapper d-flex flex-column'>
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
                <div key={id} className=' inputWrapper d-flex flex-column'>
                  <label>
                    {' '}
                    {label} <em>*</em>{' '}
                  </label>

                  <input
                    id={id}
                    name={label}
                    type={type}
                    placeholder={placeholder}
                    className='form-control'
                    defaultValue={value}
                    onChange={handleChange}
                    required
                  />
                </div>
              ),
          )}
        </section>
      </div>

      <div className='col-12 text-end mt-5'>
        <button className='main-btn' type='submit'>
          Next
        </button>
      </div>
    </form>
  );
}

export default PropertyAddress;
