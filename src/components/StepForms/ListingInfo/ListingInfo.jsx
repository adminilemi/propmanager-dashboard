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
import {
  amenitiesList,
  propertySubType,
  propertyType,
} from '@/components/AllData';
import ErrorMessage from '@/components/ErrorMessage';

const bedAndCo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListingInfo = ({ onNext, onPrevious }) => {
  const { Amenities, listingInfo } = useSelector(selectProperty);

  const [selectValues, setSelectValues] = useState(
    listingInfo || {
      PropertySubType: '',
      PropertyType: '',
      Description: '',
      BedRooms: '',
      Baths: '',
      Toilets: '',
      SecurityDeposit: '',
      DateAvalaibality: '',
      PostingDuration: '',
      SquareFoot: '',
      NearestBustop: '',
    },
  );

  const [amenities, setAmenities] = useState(Amenities || []);
  const [customOptions, setCustomOptions] = useState({
    PropertyType: listingInfo?.PropertyType || null,
    PropertySubType: listingInfo?.PropertySubType || null,
  });

  const { errors, setErrors } = useGlobalHooks();

  const dispatch = useDispatch();

  const today = new Date().toISOString().split('T')[0];

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

    if (selectValues.PropertyType === '') {
      setErrors({
        error: true,
        errMessage: 'Please Select Property type',
      });
      return;
    }

    if (selectValues.PropertySubType === '') {
      setErrors({
        error: true,
        errMessage:
          'Please Select Property categories; e.g Rent, Sell, Buy etc',
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
      <section className='flex flex-col justify-between card p-4'>
        <article className='w-full flex flex-wrap justify-between gap-2 '>
          <div className='w-full'>
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
              error={errors}
            />
          </div>
          <div className='inputWrapper'>
            <label htmlFor='PropertyType' className='labelTitle'>
              {' '}
              Property Sub Type <em>*</em>{' '}
            </label>

            <Select
              id='PropertySubType'
              options={propertySubType}
              selectedOption={customOptions.PropertySubType}
              setSelectedOption={setCustomOptions}
              onSelectChange={handleOnSelectChange}
              errors={errors}
            />
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='PostingDuration' className='labelTitle'>
              {' '}
              Posting Duration <em>*</em>{' '}
            </label>
            <select
              id='PostingDuration'
              name='PostingDuration'
              className='form-control'
              defaultValue={selectValues.PostingDuration}
              onChange={(e) =>
                handleOnSelectChange('PostingDuration', e.target.value)
              }
              required
            >
              <option value='' disabled>
                {' '}
                Select Duration
              </option>
              {['6 Months', '12 Months', '2 Years', '3 Years'].map(
                (item, idx) => (
                  <option value={item} key={idx}>
                    {' '}
                    {item}{' '}
                  </option>
                ),
              )}
            </select>
          </div>
        </article>

        <article className='w-full flex flex-col md:flex-row gap-1 justify-between mt-3'>
          <div className='inputWrapper '>
            <label htmlFor='BedRooms' className='labelTitle'>
              {' '}
              Bedrooms <em>*</em>
            </label>
            <select
              id='BedRooms'
              name='BedRooms'
              className='form-control'
              defaultValue={selectValues.BedRooms}
              onChange={(e) => handleOnSelectChange('BedRooms', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many Bed
              </option>

              {bedAndCo.map((item, idx) => (
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
              className='form-control'
              defaultValue={selectValues.Baths}
              onChange={(e) => handleOnSelectChange('Baths', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many baths
              </option>
              {bedAndCo.map((item, idx) => (
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
              Toilets <em>*</em>
            </label>
            <select
              id='Toilets'
              name='Toilets'
              className='form-control'
              defaultValue={selectValues.Toilets}
              onChange={(e) => handleOnSelectChange('Toilets', e.target.value)}
              required
            >
              <option value='' disabled>
                {' '}
                How many toilets
              </option>
              {bedAndCo.map((item, idx) => (
                <option value={item} key={idx}>
                  {' '}
                  {item}{' '}
                </option>
              ))}
            </select>
          </div>
        </article>

        {/* <article className='flex flex-col md:flex-row gap-2 justify-between'>
          <div className='inputWrapper'>
            <label htmlFor='MonthlyRent' className='labelTitle'>
              {selectValues?.PropertySubType === 'Shortlets'
                ? 'Daily Rent'
                : 'Yearly Rent'}{' '}
              <em>*</em>
            </label>
            <div className='rentPay flex flex-row items-center gap-2 bor'>
              <h4 className='pe-3'> ₦ </h4>
              <input
                id='MonthlyRent'
                name='MonthlyRent'
                type='number'
                className='w-10/12'
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
            <div className='rentPay flex flex-row items-center gap-2 bor'>
              <h4 className='pe-3'> ₦ </h4>
              <input
                id='SecurityDeposit'
                name='SecurityDeposit'
                type='number'
                className='w-10/12'
                defaultValue={selectValues.SecurityDeposit}
                onChange={(e) =>
                  handleOnSelectChange('SecurityDeposit', e.target.value)
                }
                required
              />
            </div>
          </div>
        </article> */}
        <article className='w-full flex flex-col md:flex-row gap-1 justify-between mt-3'>
          <div className=' inputWrapper'>
            <label htmlFor='SquareFoot' className='labelTitle'>
              {' '}
              Square Feet
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
            />
          </div>

          <div className=' inputWrapper'>
            <label htmlFor='NearestBustop' className='labelTitle'>
              {' '}
              Nearest Bus stop
            </label>
            <input
              id='NearestBustop'
              name='NearestBustop'
              type='text'
              placeholder='Enter Nearst bus stop'
              className={'form-control'}
              defaultValue={selectValues.NearestBustop}
              onChange={(e) =>
                handleOnSelectChange('NearestBustop', e.target.value)
              }
            />
          </div>
        </article>

        <article className='w-full flex flex-col'>
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

        <article className='w-full flex flex-col my-4'>
          <label htmlFor='Amenities' className='labelTitle mb-2'>
            {' '}
            Select Amenitites
          </label>
          <div className='Amenities flex flex-wrap gap-2 '>
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
      </section>
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

      <div className='flex justify-center'>
        {errors.error && <ErrorMessage message={errors.errMessage} />}
      </div>
    </form>
  );
};

export default ListingInfo;
