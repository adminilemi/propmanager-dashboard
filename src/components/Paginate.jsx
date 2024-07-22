import { selectSearch } from '@/Redux/Features/globalSlice';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const Paginate = ({
  isLoading,
  data,
  currentPage,
  setCurrentPage,
  searchParams,
  handleSearch,
}) => {
  const searchQuery = useSelector(selectSearch);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    const updateCurrentPage = (newData) => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentPage(newData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(newData.length / itemsPerPage));
    };

    handleSearch(data, searchQuery, updateCurrentPage, searchParams);
  }, [
    searchQuery,
    data,
    itemOffset,
    itemsPerPage,
    setCurrentPage,
    searchParams,
    setCurrentPage,
  ]);

  useEffect(() => {
    // Reset pagination when data changes
    if (data.length === 0) {
      setCurrentPage([]);
      setPageCount(0);
    } else {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentPage(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
  }, [data, itemOffset, itemsPerPage, setCurrentPage]);

  return (
    <section className='mt-3 flex justify-between w-full container'>
      <div className='flex items-center gap-3'>
        {' '}
        <p className='font-semibold text-xs text-grey-300'>
          Rows per page:
        </p>{' '}
        <select
          name='itemsPerPage'
          id='itemsPerPage'
          onChange={(e) => setItemsPerPage(e.target.value)}
          value={itemsPerPage}
          className='font-semibold text-xs text-grey-300 !p-1'
        >
          {['5', '10', '50', '100', '200'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center gap-3'>
        <p className='font-semibold text-xs text-grey-300'>
          {' '}
          {itemOffset + 1} - {Math.min(itemOffset + itemsPerPage, data.length)}{' '}
          of {data.length}{' '}
        </p>
        {!isLoading && data && (
          <ReactPaginate
            breakLabel=''
            nextLabel={<FaChevronRight />}
            previousLabel={<FaChevronLeft />}
            pageCount={pageCount}
            // pageRangeDisplayed={1}
            // marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName='paginContainer'
            activeClassName='activePage'
            previousClassName={currentPage === 0 ? 'disabled' : ''}
            nextClassName={currentPage === pageCount - 1 ? 'disabled' : ''}
            renderOnZeroPageCount={null}
            // to hide the page count inside the nav icons
            pageLinkClassName='!hidden'
          />
        )}
      </div>
    </section>
  );
};

export default Paginate;
