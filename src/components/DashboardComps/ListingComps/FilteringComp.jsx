import React, { useState } from 'react';
import {
  ListingInitialState,
  maxPrice,
  minPrice,
  propertyCategories,
  propertyType,
} from '@/components/AllData';
import Search from '@/components/Search';
import { bedAndCo } from '@/components/StepForms/ListingInfo/ListingInfo';
import DatePicker from 'react-datepicker';

const FilteringComp = ({ className, setStateData }) => {
  const [formData, setFormData] = useState(ListingInitialState);
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFilter = (e) => {
    e.preventDefault();

    setStateData((prev) => ({ ...prev, ...formData }));
    setClicked(true);
  };

  const handleClear = () => {
    setFormData({ ...ListingInitialState });
    setClicked(false);
    setStateData((prev) => ({ ...prev, ...ListingInitialState }));
  };

  return (
    <form
      className={`${className} flex flex-wrap gap-5 justify-between items-center `}
      onSubmit={handleFilter}
    >
      <article className='flex flex-wrap gap-3 items-center w-full'>
        <Search className='w-full lg:w-[50%]' placeholder='Search by title' />
        <select
          id='PropertyType'
          name='PropertyType'
          className='form-control !bg-transparent w-full lg:w-[15%]'
          value={formData?.PropertyType}
          onChange={handleChange}
          required
        >
          <option value=''> Choose Type </option>
          {propertyType?.map(({ id, title }) => (
            <option key={id} value={title}>
              {title}
            </option>
          ))}
        </select>
        <select
          id='BedRooms'
          name='BedRooms'
          className='form-control !bg-transparent w-full lg:w-[15%]'
          value={formData?.BedRooms}
          onChange={handleChange}
          required
        >
          <option value=''> Choose Type </option>
          {bedAndCo?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          id='minMonthlyRent'
          name='minMonthlyRent'
          onChange={handleChange}
          value={formData?.minMonthlyRent}
          className='form-control !bg-transparent w-full lg:w-[15%]'
        >
          <option value=''>Min Price</option>

          {minPrice?.map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>

        <select
          id='maxMonthlyRent'
          name='maxMonthlyRent'
          onChange={handleChange}
          value={formData?.maxMonthlyRent}
          className='form-control !bg-transparent w-full lg:w-[15%]'
        >
          <option value=''>Max Price</option>

          {maxPrice?.map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>

        <select
          id='status'
          name='status'
          onChange={handleChange}
          value={formData?.status}
          className='form-control !bg-transparent w-full lg:w-[15%]'
        >
          <option value=''>Max Price</option>

          {['Active', 'InActive']?.map((item, idx) => (
            <option key={idx} value={item.toUpperCase()}>
              {item}
            </option>
          ))}
        </select>
        <select
          id='Property_Category'
          name='Property_Category'
          onChange={handleChange}
          value={formData?.Property_Category}
          className='form-control !bg-transparent w-full lg:w-[15%]'
        >
          <option value=''>Category</option>

          {propertyCategories?.map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>

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
            placeholderText='Start Date'
            showIcon
          />
        </div>
        <div className='flex-1'>
          <DatePicker
            id='endDate'
            name='endDate'
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, endDate: date?.toISOString() }))
            }
            selected={formData?.endDate}
            className='form-control'
            placeholderText='End Date'
            showIcon
          />
        </div>

        <div className='grow'>
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
      </article>
    </form>
  );
};

export default FilteringComp;
