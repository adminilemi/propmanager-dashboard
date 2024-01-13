import React from 'react';
import './UserPop.scss';
import UserLogo from './UserLogo';
import Logout from '@/Pages/Logout/Logout';
import { useSelector } from 'react-redux';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';

function UserPop({ coyLogo, companyName }) {
  const toggle = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();

  // const items = [
  //   {
  //     id: 1,
  //     title: 'Personal Information',
  //     url: '/profile',
  //   },
  //   {
  //     id: 2,
  //     title: 'Company Profile',
  //     url: '/company',
  //   },
  //   {
  //     id: 3,
  //     title: 'Settings',
  //     url: '/settings',
  //   },
  // ];

  return (
    <main className='col-12 UserPop'>
      <header className='d-flex flex-row justify-content-between align-items-center'>
        <div className='col-6 d-flex flex-row align-items-center justify-content-between'>
          <div className='col-5'>
            <UserLogo coyLogo={coyLogo} />
          </div>
          <h4 className='col-8'> {companyName} </h4>
        </div>
        {/* <div>
          <button className={verified ? 'verified' : 'unverified'}>
            {verified ? 'Verified' : 'Unverified'}
          </button>
        </div> */}
      </header>

      <ul className='card'>
        {/* {items.map(({ id, title, url }) => (
          <li className='userCard' key={id} onClick={close}>
            <Link to={url}> {title} </Link>
          </li>
        ))} */}

        <li
          className='sidebarNotActive tabTitle'
          onClick={() => handleShow('logout')}
        >
          <hgroup className='d-flex flex-row align-items-center ps-2 tabTitle'>
            <h4 className='me-2'>
              {' '}
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='logout-exit'>
                  <path
                    id='Vector'
                    d='M4 12H15'
                    stroke='#565C69'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    id='Vector_2'
                    d='M8 7L3 12L8 17'
                    stroke='#565C69'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    id='Vector_3'
                    d='M21 3V21'
                    stroke='#565C69'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>{' '}
            </h4>
            <h4> Logout </h4>
          </hgroup>
        </li>
      </ul>

      {toggle['logout'] && (
        <Logout id='logout' close={() => handleShow('logout')} />
      )}
    </main>
  );
}

export default UserPop;
