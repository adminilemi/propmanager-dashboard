import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../Redux/Features/userDatasSlice';

function PostJobBtn() {
  const { user } = useSelector(selectUser);
  return (
    <>
      {!user?.AdmimVerificationStatus ? (
        <button className='main-btn disabled' disabled>
          {' '}
          Post Job{' '}
        </button>
      ) : (
        <Link to='/postjob' className='main-btn'>
          {' '}
          Post Job{' '}
        </Link>
      )}
    </>
  );
}

export default PostJobBtn;
