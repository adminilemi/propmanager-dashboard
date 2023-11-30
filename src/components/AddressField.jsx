import React from 'react';
import { countriesList } from './CountriesList';

function AddressField({ coydata, getData }) {
  return (
    <div className='d-flex flex-wrap justify-content-between mb-5'>
      <div className=' inputWrapper'>
        <label>
          {' '}
          AddressLine 1 <em>*</em>{' '}
        </label>
        <input
          id='addressLine1'
          name='addressLine1'
          type='text'
          className='form-control'
          placeholder='Enter address'
          defaultValue={coydata.addressLine1}
          onChange={getData}
          required
        />
      </div>

      <div className=' inputWrapper'>
        <label> AddressLine 2</label>

        <input
          id='addressLine2'
          name='addressLine2'
          type='text'
          className=' form-control'
          placeholder='Enter address'
          defaultValue={coydata.addressLine2}
          onChange={getData}
        />
      </div>

      <div className=' inputWrapper'>
        <label>
          {' '}
          Phone Number <em>*</em>{' '}
        </label>
        <input
          id='phoneNumber'
          name='phoneNumber'
          className=' form-control'
          type='text'
          placeholder='Enter number'
          defaultValue={coydata.phoneNumber}
          onChange={getData}
          required
        />
      </div>
      <div className=' inputWrapper'>
        <label>
          {' '}
          City <em>*</em>{' '}
        </label>
        <input
          id='city'
          name='city'
          className=' form-control'
          type='text'
          placeholder='Enter city'
          defaultValue={coydata.city}
          onChange={getData}
          required
        />
      </div>

      <div className=' inputWrapper'>
        <label>
          {' '}
          Postcode <em>*</em>{' '}
        </label>

        <input
          id='postcode'
          name='postcode'
          type='text'
          className=' form-control '
          placeholder='Enter postcode'
          defaultValue={coydata.postcode}
          onChange={getData}
          required
        />
      </div>

      <div className=' inputWrapper'>
        <label>
          {' '}
          Country <em>*</em>{' '}
        </label>

        <select
          id='country'
          name='country'
          className=' form-select'
          onChange={getData}
          defaultValue={coydata.country}
          required
        >
          <option value=''>Select a country</option>
          {countriesList.map(({ code, name }) => (
            <option key={code} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className=' inputWrapper'>
        <label> Branch Name</label>

        <input
          id='branchName'
          name='branchName'
          type='text'
          className=' form-control '
          placeholder='E.g London branch'
          defaultValue={coydata.branchName}
          onChange={getData}
        />
      </div>
    </div>
  );
}

export default AddressField;
