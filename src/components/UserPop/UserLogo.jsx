import React from 'react';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import { FaChevronDown } from 'react-icons/fa';

function UserLogo() {
  const { handleShow } = useGlobalHooks();

  return (
    <div
      onClick={() => handleShow('user')}
      id='user'
      className='d-flex gap-3 align-items-center userLogo'
    >
      {/* <figure className='userInitials d-flex justify-content-center align-items-center me-2'>
        {coyLogo ? (
          <img src={coyLogo} alt='' />
        ) : (
          <img
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt=''
          />
        )}
      </figure> */}

      <div className='userInitials'>
        <h4> FR</h4>
      </div>
      <h4> FRANCES </h4>

      <FaChevronDown className='Icons' />
    </div>
  );
}

export default UserLogo;
