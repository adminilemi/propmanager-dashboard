import React, { useRef } from 'react';
import Spinner from '@/spinner/Spinner';

const CustomUploadToCloudinary = ({ uploadChange, loading, id }) => {
  const fileInputRef = useRef(null);

  return (
    <div className='w-full flex'>
      <label
        htmlFor={id}
        style={{ cursor: 'pointer' }}
        className='main-btn !w-full text-center'
      >
        {loading ? <Spinner /> : 'Upload'}
      </label>
      <input
        id={id}
        ref={fileInputRef}
        type='file'
        onChange={uploadChange}
        className='hidden'
      />
    </div>
  );
};

export default CustomUploadToCloudinary;
