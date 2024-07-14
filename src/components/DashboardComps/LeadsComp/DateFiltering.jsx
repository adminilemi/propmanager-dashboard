import React from 'react';
import DatePicker from 'react-datepicker';

const DateFiltering = ({ className }) => {
  return (
    <form
      className={`${className} flex flex-wrap gap-5 justify-between items-center `}
    >
      <div className='flex gap-3 items-center w-full lg:w-[40%]'>
        <label
          htmlFor='startDate'
          className='text-xs font-semibold text-grey-300 '
        >
          Select Date from:
        </label>
        {/* <input
          type='date'
          name='startDate'
          id='startDate'
          className='form-control flex-1'
        /> */}

        <div className='flex-1'>
          <DatePicker
            className='form-control'
            placeholderText='dd/mm/yyyy'
            showIcon
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
            className='form-control'
            placeholderText='dd/mm/yyyy'
            showIcon
          />
        </div>
      </div>

      <div className='flex-1'>
        <button className='main-btn w-full' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default DateFiltering;
