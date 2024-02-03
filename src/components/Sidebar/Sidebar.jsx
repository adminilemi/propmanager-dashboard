import React, { useState } from 'react';

import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';
import BrandLogo from '../BrandLogo';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';

function Sidebar() {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const Employer = SidebarData.Employer;
  const Account = SidebarData.Account;

  return (
    <main className=' sidebarContainer'>
      <article className={`sidebar `}>
        <div className='col-4 ps-2 mb-5 mt-3 d-flex gap-3 align-items-end'>
          <BrandLogo sidebar />{' '}
          <div
            onClick={() => setToggleSideBar(!toggleSideBar)}
            className='pe-1'
          >
            {toggleSideBar ? (
              <GoSidebarExpand size={30} />
            ) : (
              <GoSidebarCollapse size={30} />
            )}
          </div>
        </div>
        <ul className='mt-5 mt-lg-0  d-flex flex-column justify-content-between'>
          {Employer.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.url}
              className={({ isActive }) =>
                isActive
                  ? 'sidebarActive'
                  : !toggleSideBar
                  ? 'mx-auto sidebarNotActive'
                  : 'sidebarNotActive'
              }
            >
              <hgroup className='d-flex gap-1 align-items-center tabTitle'>
                <h4 className=''>{tab.icon} </h4>
                {toggleSideBar && <h4>{tab.title}</h4>}
              </hgroup>
            </NavLink>
          ))}
        </ul>
        <ul className='mt-5  d-flex flex-column justify-content-between'>
          {Account.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.url}
              className={({ isActive }) =>
                isActive
                  ? 'sidebarActive'
                  : !toggleSideBar
                  ? 'mx-auto sidebarNotActive'
                  : 'sidebarNotActive'
              }
            >
              <li>
                <hgroup className='d-flex gap-1 align-items-center tabTitle'>
                  <h4 className=''>{tab.icon} </h4>
                  {toggleSideBar && <h4>{tab.title}</h4>}
                </hgroup>
              </li>
            </NavLink>
          ))}
        </ul>
        {/* <li
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
        </li> */}
      </article>

      {/* {toggle['logout'] && (
        <Logout id='logout' close={() => handleShow('logout')} />
      )} */}
    </main>
  );
}

export default Sidebar;
