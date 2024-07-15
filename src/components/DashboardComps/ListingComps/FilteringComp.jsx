import React, { useEffect, useState } from 'react';
import allState from '@/components/nigeria-state-and-lgas.json';
import { maxPrice, minPrice, propertyType } from '@/components/AllData';
import Search from '@/components/Search';

const initialState = {
  minPrice: '',
  maxPrice: '',
  propertyType: '',
  name: '',
  State: '',
  LGA: '',
};

const FilteringComp = ({ className }) => {
  const [propData, setPropData] = useState(initialState);
  const [getLga, setGetLga] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    if (propData?.State !== '') {
      const lgaData = allState.find((s) => s?.state === propData?.State);

      setGetLga(lgaData?.lgas);
    }
  }, [propData?.State]);

  return (
    <form
      className={`${className} flex flex-wrap gap-5 justify-between items-center `}
    >
      <article className='flex flex-wrap gap-3 items-center w-full'>
        <Search className='w-full lg:w-[50%]' placeholder='Search by title' />
        <select
          id='State'
          name='State'
          className='form-control !bg-transparent w-full lg:w-[15%]'
          defaultValue={propData?.State}
          onChange={handleChange}
          required
        >
          <option value=''> Choose State </option>
          {allState?.map(({ state }) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          id='LGA'
          name='LGA'
          className='form-control !bg-transparent w-full lg:w-[15%]'
          defaultValue={propData?.LGA}
          onChange={handleChange}
          required
        >
          <option value=''> Choose Locality </option>
          {getLga?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          id='propertyType'
          name='propertyType'
          className='form-control !bg-transparent w-full lg:w-[15%]'
          defaultValue={propData?.propertyType}
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
          id='minPrice'
          name='minPrice'
          onChange={handleChange}
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
          id='maxPrice'
          name='maxPrice'
          onChange={handleChange}
          className='form-control !bg-transparent w-full lg:w-[15%]'
        >
          <option value=''>Max Price</option>

          {maxPrice?.map(({ title, value }, idx) => (
            <option key={idx} value={value}>
              {title}
            </option>
          ))}
        </select>

        <div className=' w-full lg:w-[15%]'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name or Phone'
            className='form-control '
            defaultValue={propData?.name}
            onChange={handleChange}
          />
        </div>
        <div className='grow'>
          <button className='main-btn w-full' type='submit'>
            Submit
          </button>
        </div>
      </article>
    </form>
  );
};

export default FilteringComp;
