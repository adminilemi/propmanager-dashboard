import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectProperty } from '../../../Redux/Features/createPropertySlice';

const initialState = {
  addressLine1: '',
  addressLine2: '',
  phoneNumber: '',
  city: '',
  postcode: '',
  country: '',
  branchName: '',
};

function CompanyAddress({ onNext }) {
  const stepper = useSelector(SelectProperty);

  const [coyData, setCoyData] = useState(stepper || [initialState]);

  const dispatch = useDispatch();

  const addAnotherAddress = () => {
    // clone the initialState to create initialState data for the new addres
    setCoyData([...coyData, initialState]);
  };

  const handleChange = (index, e) => {
    // Create a copy of the coyData array
    const updatedCoyData = [...coyData];

    updatedCoyData[index] = {
      // Clone the specific address object based on index
      ...updatedCoyData[index],

      // Update the specific field in the address object
      [e.target.name]: e.target.value,
    };

    // Update the state with the modified coyData
    setCoyData(updatedCoyData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
    // dispatch(updateAddress(coyData));
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column'>
      <div className='d-flex flex-column col-12 mb-5'></div>

      <div className='col-12 text-end mt-5'>
        <button className='main-btn' type='submit'>
          Next
        </button>
      </div>
    </form>
  );
}

export default CompanyAddress;
