import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';

const CustomUploadToCloudinary = ({ uploadChange, loading, id }) => {
  const fileInputRef = useRef(null);

  return (
    <div>
      <label
        htmlFor={id}
        style={{ cursor: 'pointer' }}
        className='main-btn col-12 text-center'
      >
        {loading ? <Spinner /> : 'Upload'}
      </label>
      <input
        id={id}
        ref={fileInputRef}
        type='file'
        onChange={uploadChange}
        className='d-none'
      />
    </div>
  );
};

export default CustomUploadToCloudinary;
