import React, { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/Redux/Features/globalSlice';

function Search({ placeholder }) {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    dispatch(setSearchQuery(''));
  }, [dispatch]);

  return (
    <div className='search d-flex flex-row align-items-center col-12'>
      <BiSearch className='searchIcon' />
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
