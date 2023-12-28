import React, { useState } from 'react';
import './ListingInfo.scss';
import Select from '../../Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { selectProperty } from '@/Redux/Features/createPropertySlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { propertyType } from '@/components/AllData';
import { MdInfo } from 'react-icons/md';

const ListingInfo = ({ onNext, onPrevious }) => {
  const stepper = useSelector(selectProperty);
  const [isValid, setIsValid] = useState({});
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectValues, setSelectValues] = useState({
    Property_type: '',
    companyDescription: '',
    BedRooms: '',
    Baths: '',
    websites: '',
    SquareFoot: '',
  });

  const [customOptions, setCustomOptions] = useState({ Property_type: null });

  const { loading, setLoading, errors, setErrors } = useGlobalHooks();

  const dispatch = useDispatch();

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Check for validation errors for each Select component
    // if (customOptions.Property_type === null) {
    //   validationErrors['Property_type'] = true;
    // }
    // setIsValid(validationErrors);

    // if (selectValues.websites === '') {
    //   setErrors({ error: true, errMessage: 'web' });
    //   return false;
    // }

    // if (selectValues.logoImage === '') {
    //   setError({ error: true, errMessage: 'logo' });
    //   return false;
    // }

    // setErrors({ error: false });

    // dispatch(getUserAvatar(selectValues.logoImage));

    onNext();
  };

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <section className='d-flex flex-column justify-content-between '>
        <article className='col-12 '>
          <label htmlFor='typeOfEmployer' className='labelTitle'>
            {' '}
            Type of Employer <em>*</em>{' '}
          </label>

          <Select
            id='Property_type'
            options={propertyType}
            selectedOption={customOptions.Property_type}
            setSelectedOption={setCustomOptions}
            onSelectChange={handleOnSelectChange}
            error={isValid['Property_type']}
          />
        </article>

        <article className='col-12 d-flex flex-column flex-md-row gap-1 justify-content-between mt-3'>
          <div className='inputWrapper '>
            <label htmlFor='BedRooms' className='labelTitle'>
              {' '}
              Bedrooms <em>*</em>
            </label>
            <select
              id='BedRooms'
              name='BedRooms'
              className='form-select'
              defaultValue={selectValues.BedRooms}
              onChange={(e) => handleOnSelectChange('BedRooms', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many Bed
              </option>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <option value={item}> {item} </option>
              ))}
            </select>
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='Baths' className='labelTitle'>
              {' '}
              Baths <em>*</em>
            </label>
            <select
              id='Baths'
              name='Baths'
              className='form-select'
              defaultValue={selectValues.websites}
              onChange={(e) => handleOnSelectChange('websites', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many baths
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <option value={item}> {item} </option>
              ))}
            </select>
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='noOfEmployees' className='labelTitle'>
              {' '}
              Square Feet <em>*</em>
            </label>
            <input
              id='SquareFoot'
              name='SquareFoot'
              type='number'
              placeholder='example: 128, 0r 169.56'
              className={'form-control'}
              defaultValue={selectValues.SquareFoot}
              onChange={(e) =>
                handleOnSelectChange('SquareFoot', e.target.value)
              }
              required
            />
          </div>
        </article>

        <article className='d-flex flex-column flex-md-row gap-2 justify-content-between'>
          <div className='inputWrapper'>
            <label htmlFor='hourlPay' className='labelTitle'>
              Monthly Rent <em>*</em>
            </label>
            <div className='rentPay   d-flex flex-row align-items-center gap-2 bor'>
              <h4 className='pe-3'> ₦ </h4>
              <input
                name='hourlyPay'
                type='number'
                className=''
                placeholder='rent'
                // defaultValue={createJob.hourlyPay}
                // onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='inputWrapper'>
            <label htmlFor='hourlPay' className='labelTitle'>
              Security Deposit <MdInfo color='var(--mainColor)' />
            </label>
            <div className='rentPay   d-flex flex-row align-items-center gap-2 bor'>
              <h4 className=' pe-3'> ₦ </h4>
              <input
                name='hourlyPay'
                type='number'
                className=''
                placeholder='rent'
                // defaultValue={createJob.hourlyPay}
                // onChange={handleChange}
                required
              />
            </div>
          </div>
        </article>

        <article className='col-12 d-flex flex-column'>
          <label htmlFor='companyDescription' className='labelTitle'>
            {' '}
            Company Description
          </label>

          <textarea
            id='companyDescription'
            name='companyDescription'
            placeholder='Enter company desciption'
            className='form-control'
            defaultValue={selectValues.companyDescription}
            onChange={(e) =>
              handleOnSelectChange('companyDescription', e.target.value)
            }
            rows='3'
            required
          ></textarea>
        </article>

        <article className='col-12 d-flex flex-column flex-md-row gap-1 justify-content-between mt-3'>
          <div className='inputWrapper '>
            <label htmlFor='BedRooms' className='labelTitle'>
              {' '}
              Date Available <em>*</em>
            </label>
            <input
              id='BedRooms'
              name='BedRooms'
              type='date'
              className={'form-control'}
              defaultValue={selectValues.BedRooms}
              onChange={(e) => handleOnSelectChange('BedRooms', e.target.value)}
              required
            />
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='Baths' className='labelTitle'>
              {' '}
              Lease Duration
            </label>
            <select
              id='Baths'
              name='Baths'
              className='form-select'
              defaultValue={selectValues.websites}
              onChange={(e) => handleOnSelectChange('websites', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                Select Duration
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <option value={item}> {item} </option>
              ))}
            </select>
          </div>
        </article>
      </section>
      <div className='d-flex flex-row justify-content-between mt-5'>
        <button onClick={onPrevious} className='outline-btn' type='button'>
          Back{' '}
        </button>
        <button className='main-btn' type='submit'>
          {' '}
          Next{' '}
        </button>
      </div>
    </form>
  );
};

export default ListingInfo;
