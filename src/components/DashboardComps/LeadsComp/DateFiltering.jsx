import { getDateAfterDays } from '@/utils';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const initialState = {
  startDate: '',
  endDate: '',
};

const DateFiltering = ({ className, setStateData }) => {
  const [formData, setFormData] = useState(initialState);
  const [clicked, setClicked] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();

    setStateData((prev) => ({ ...prev, ...formData }));
    setClicked(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFormData(initialState);
    setClicked(false);
    setStateData((prev) => ({
      ...prev,
      startDate: new Date().toISOString(),
      endDate: getDateAfterDays(new Date(), 30).toISOString(),
    }));
  };

  return (
    <form
      className={`${className} flex flex-wrap gap-5 justify-between items-center `}
      onSubmit={handleFilter}
    >
      <div className='flex gap-3 items-center w-full lg:w-[40%]'>
        <label
          htmlFor='startDate'
          className='text-xs font-semibold text-grey-300 '
        >
          Select Date from:
        </label>

        <div className='flex-1'>
          <DatePicker
            id='startDate'
            name='startDate'
            onChange={(date) => {
              setFormData((prev) => ({
                ...prev,
                startDate: date?.toISOString(),
              }));
            }}
            selected={formData?.startDate}
            className='form-control'
            placeholderText='dd/mm/yyyy'
            showIcon
            required
          />
        </div>
      </div>
      <div className='flex gap-3 items-center  w-full lg:w-[40%]'>
        <label
          htmlFor='endDate'
          className='text-xs font-semibold text-grey-300 '
        >
          Select Date to:
        </label>
        <div className='flex-1'>
          <DatePicker
            id='endDate'
            name='endDate'
            onChange={(date) => {
              setFormData((prev) => ({
                ...prev,
                endDate: date?.toISOString(),
              }));
            }}
            selected={formData?.endDate}
            className='form-control'
            placeholderText='dd/mm/yyyy'
            showIcon
            required
          />
        </div>
      </div>

      <div className='flex-1'>
        {clicked ? (
          <button
            className='main-btn w-full'
            type='button'
            onClick={handleClear}
          >
            Clear Filter
          </button>
        ) : (
          <button className='main-btn w-full' type='submit'>
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default DateFiltering;
