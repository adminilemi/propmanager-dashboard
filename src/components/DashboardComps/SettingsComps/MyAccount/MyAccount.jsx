import React, { useState } from 'react';
import './MyAccount.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '@/Redux/Features/userDatasSlice';
import { FaChevronRight } from 'react-icons/fa';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import ChangePassword from './ChangePassword';

const MyAccount = () => {
  const { user } = useSelector(selectUser);
  const [isChecked, setIsChecked] = useState({
    newsUpdate: true,
    newsLetter: false,
    shiftBookings: true,
  });
  const { handleShow } = useGlobalHooks();
  const toggle = useSelector(selectGlobal);
  const handleCheckedToggle = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main className='card myAccount'>
      <hgroup className='px-3 my-3'>
        <h3>My Account</h3>
      </hgroup>

      <section className=' my-5 col-11 mx-auto'>
        <div className='mt-3'>
          <label htmlFor='email' className='labelTitle'>
            {' '}
            Email{' '}
          </label>
          <input
            id='email'
            defaultValue={user.email}
            type='email'
            className='form-control'
            disabled
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='email' className='labelTitle'>
            {' '}
            Password{' '}
          </label>
          <div
            id='changePass'
            onClick={() => handleShow('changePass')}
            className='changePass d-flex justify-content-between align-items-center p-3'
          >
            <h6>Change Password</h6>{' '}
            <small>
              {' '}
              <FaChevronRight />{' '}
            </small>{' '}
          </div>
        </div>
        <div className='mt-3 d-flex gap-5'>
          <div>
            <h6 htmlFor='email' className='labelTitle'>
              {' '}
              Enable 2-steps verification{' '}
            </h6>
            <p>
              Make your account extra secure. Along with your password,
              you&apos;ll need to enter a code that we text to your phone each
              time you sign in.
            </p>
          </div>
          <div className=' d-flex justify-content-between align-items-center p-3 form-check form-switch'>
            <input
              name='newsLetter'
              id='newsLetter'
              className='form-check-input'
              type='checkbox'
              role='switch'
              onChange={() => handleCheckedToggle('newsLetter')}
              checked={isChecked.newsLetter}
            />
          </div>
        </div>
      </section>

      <hr />
      <section className='my-5 col-11 mx-auto'>
        <div>
          <h6 htmlFor='email' className='labelTitle'>
            Linked Accounts
          </h6>
          <p>We use this to let you sign in easily.</p>
        </div>

        <div className='d-flex justify-content-between mt-3'>
          <button className='d-flex gap-2'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                  fill='#FFC107'
                />
                <path
                  d='M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z'
                  fill='#FF3D00'
                />
                <path
                  d='M12 22.0003C14.583 22.0003 16.93 21.0118 18.7045 19.4043L15.6095 16.7853C14.5718 17.5745 13.3038 18.0014 12 18.0003C9.39903 18.0003 7.19053 16.3418 6.35853 14.0273L3.09753 16.5398C4.75253 19.7783 8.11353 22.0003 12 22.0003Z'
                  fill='#4CAF50'
                />
                <path
                  d='M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                  fill='#1976D2'
                />
              </svg>
            </span>{' '}
            Sign in with Google
          </button>

          <button className='outline-btn '>Remove</button>
        </div>
      </section>
      <hr />

      <section className='my-5 col-11 mx-auto d-flex justify-content-between'>
        <div>
          <h6 htmlFor='email' className='labelTitle'>
            Delete Account
          </h6>
          <p>Delete your account and all the data</p>
        </div>

        <div className=''>
          <button className='outline-red '>Remove</button>
        </div>
      </section>
      <hr />

      {/* <div className='d-flex justify-content-end my-3 col-11 mx-auto'>
        <button className='main-btn' type='button'>
          Save Changes
        </button>
      </div> */}

      {toggle['changePass'] && (
        <ChangePassword
          id='changePass'
          close={() => handleShow('changePass')}
        />
      )}
    </main>
  );
};

export default MyAccount;
