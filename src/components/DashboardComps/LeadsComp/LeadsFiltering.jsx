import React, { useEffect, useState } from 'react';
import allState from '@/components/nigeria-state-and-lgas.json';

const initialState = {
  propertyType: '',
  name: '',
  State: '',
  LGA: '',
};

const LeadsFiltering = ({ className }) => {
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
      <article className='flex gap-3 items-center w-full lg:w-[80%]'>
        <select
          id='State'
          name='State'
          className='form-control !bg-transparent w-full lg:w-[15%'
          defaultValue={propData?.State}
          onChange={handleChange}
          required
        >
          <option value=''> Choose State </option>
          {allState.map(({ state }) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          id='LGA'
          name='LGA'
          className='form-control !bg-transparent w-full lg:w-[15%'
          defaultValue={propData?.LGA}
          onChange={handleChange}
          required
        >
          <option value=''> Choose Locality </option>
          {getLga.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          id='propertyType'
          name='propertyType'
          className='form-control !bg-transparent w-full lg:w-[15%'
          defaultValue={propData?.propertyType}
          onChange={handleChange}
          required
        >
          <option value=''> Choose Type </option>
          {['rent', 'sale', 'shortlet'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className=' w-full lg:w-[15%'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name or Phone'
            className='form-control flex-1'
            defaultValue={propData?.name}
            onChange={handleChange}
          />
        </div>
      </article>

      <article className='flex-1'>
        <button className='main-btn w-full' type='submit'>
          Submit
        </button>
      </article>
    </form>
  );
};

export default LeadsFiltering;
