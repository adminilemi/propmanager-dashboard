import React, { useState } from 'react';
import './ListingInfo.scss';
import Select from '../../Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAmenities,
  addListingInfo,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { amenitiesList, propertyType } from '@/components/AllData';
import { MdInfo } from 'react-icons/md';

const ListingInfo = ({ onNext, onPrevious }) => {
  const { Amenities, listingInfo } = useSelector(selectProperty);

  const [selectValues, setSelectValues] = useState(
    listingInfo || {
      PropertyType: '',
      Description: '',
      BedRooms: '',
      Baths: '',
      MonthlyRent: '',
      SecurityDeposit: '',
      DateAvalaibality: '',
      LeaseDuration: '',
      SquareFoot: '',
    },
  );

  const [amenities, setAmenities] = useState(Amenities || []);
  const [customOptions, setCustomOptions] = useState({
    PropertyType: listingInfo?.PropertyType || null,
  });

  const { errors, setErrors } = useGlobalHooks();

  const dispatch = useDispatch();

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const updateAmenities = (idx, val) => {
    // Check to see if the item selected is already in the state array
    const isItemInState = amenities.some((item) => item.title === val.title);

    if (isItemInState) {
      // IF item available, remove it
      setAmenities((prev) => prev.filter((item) => item.title !== val.title));
    } else {
      // Add it to the state rray

      setAmenities((prevState) => [
        ...prevState,
        {
          title: val.title,
        },
      ]);
    }
  };

  // console.log(amenities);
  // console.log(customOptions);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectValues.Property_type === '') {
      setErrors({
        error: true,
        errMessage: 'Please Select Property type',
      });
      return;
    }

    setErrors({ error: false, errMessage: '' });

    dispatch(addAmenities(amenities));
    dispatch(addListingInfo(selectValues));

    onNext();
  };

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <section className='d-flex flex-column justify-content-between '>
        <article className='col-12 '>
          <label htmlFor='PropertyType' className='labelTitle'>
            {' '}
            Property Type <em>*</em>{' '}
          </label>

          <Select
            id='PropertyType'
            options={propertyType}
            selectedOption={customOptions.PropertyType}
            setSelectedOption={setCustomOptions}
            onSelectChange={handleOnSelectChange}
            error={errors.error}
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

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
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
              defaultValue={selectValues.Baths}
              onChange={(e) => handleOnSelectChange('Baths', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many baths
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='SquareFoot' className='labelTitle'>
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
            <label htmlFor='MonthlyRent' className='labelTitle'>
              Monthly Rent <em>*</em>
            </label>
            <div className='rentPay d-flex flex-row align-items-center gap-2 bor'>
              <h4 className='pe-3'> ₦ </h4>
              <input
                id='MonthlyRent'
                name='MonthlyRent'
                type='number'
                className='col-10'
                defaultValue={selectValues.MonthlyRent}
                onChange={(e) =>
                  handleOnSelectChange('MonthlyRent', e.target.value)
                }
                required
              />
            </div>
          </div>
          <div className='inputWrapper'>
            <label htmlFor='SecurityDeposit' className='labelTitle'>
              Security Deposit <MdInfo color='var(--mainColor)' />
            </label>
            <div className='rentPay d-flex flex-row align-items-center gap-2 bor'>
              <h4 className='pe-3'> ₦ </h4>
              <input
                id='SecurityDeposit'
                name='SecurityDeposit'
                type='number'
                className='col-10'
                defaultValue={selectValues.SecurityDeposit}
                onChange={(e) =>
                  handleOnSelectChange('SecurityDeposit', e.target.value)
                }
                required
              />
            </div>
          </div>
        </article>

        <article className='col-12 d-flex flex-column my-4'>
          <label htmlFor='Amenities' className='labelTitle mb-2'>
            {' '}
            Select Amenitites
          </label>
          <div className='Amenities d-flex flex-wrap gap-2 '>
            {amenitiesList.map((item, idx) => (
              <small
                onClick={() => updateAmenities(idx, item)}
                className={
                  amenities.some((s) => s.title === item.title)
                    ? 'selected'
                    : 'notSelected'
                }
                key={idx}
              >
                {' '}
                {item.title}{' '}
              </small>
            ))}
          </div>
        </article>

        <article className='col-12 d-flex flex-column'>
          <label htmlFor='Description' className='labelTitle'>
            {' '}
            Description
          </label>

          <textarea
            id='Description'
            name='Description'
            placeholder='Enter  desciption'
            className='form-control'
            defaultValue={selectValues.Description}
            onChange={(e) =>
              handleOnSelectChange('Description', e.target.value)
            }
            rows='3'
            required
          ></textarea>
        </article>

        <article className='col-12 d-flex flex-column flex-md-row gap-1 justify-content-between mt-3'>
          <div className='inputWrapper '>
            <label htmlFor='DateAvalaibality' className='labelTitle'>
              {' '}
              Date Available <em>*</em>
            </label>
            <input
              id='DateAvalaibality'
              name='DateAvalaibality'
              type='date'
              className={'form-control'}
              defaultValue={selectValues.DateAvalaibality}
              onChange={(e) =>
                handleOnSelectChange('DateAvalaibality', e.target.value)
              }
              required
            />
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='LeaseDuration' className='labelTitle'>
              {' '}
              Lease Duration
            </label>
            <select
              id='LeaseDuration'
              name='LeaseDuration'
              className='form-select'
              defaultValue={selectValues.LeaseDuration}
              onChange={(e) =>
                handleOnSelectChange('LeaseDuration', e.target.value)
              }
              required
            >
              <option value='' disabled>
                {' '}
                Select Duration
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
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

      <div className='d-flex justify-content-center'>
        {errors.error && <p className='error_message'>{errors.errMessage}</p>}
      </div>
    </form>
  );
};

export default ListingInfo;
