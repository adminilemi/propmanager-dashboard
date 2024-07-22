import React, { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/Redux/Features/globalSlice';

function Search({ className, placeholder }) {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    dispatch(setSearchQuery(''));
  }, [dispatch]);

  return (
    <div className={`${className} search flex flex-row items-center `}>
      <BiSearch className='searchIcon text-Line' />
      <input
        type='text'
        placeholder={placeholder}
        className='form-control'
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
