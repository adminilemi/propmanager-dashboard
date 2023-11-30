import React from 'react';
import './UserPop.scss';
import { Link } from 'react-router-dom';
import UserLogo from './UserLogo';

function UserPop({ close, verified, coyLogo, companyName }) {
  const items = [
    {
      id: 1,
      title: 'Personal Information',
      url: '/profile',
    },
    {
      id: 2,
      title: 'Company Profile',
      url: '/company',
    },
    {
      id: 3,
      title: 'Settings',
      url: '/settings',
    },
  ];

  return (
    <main className='col-12 UserPop'>
      <header className='d-flex flex-row justify-content-between align-items-center'>
        <div className='col-6 d-flex flex-row align-items-center justify-content-between'>
          <div className='col-3'>
            <UserLogo coyLogo={coyLogo} />
          </div>
          <h4 className='col-8'> {companyName} </h4>
        </div>
        <div>
          <button className={verified ? 'verified' : 'unverified'}>
            {verified ? 'Verified' : 'Unverified'}
          </button>
        </div>
      </header>

      <ul className='card'>
        {items.map(({ id, title, url }) => (
          <li className='userCard' key={id} onClick={close}>
            <Link to={url}> {title} </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserPop;
