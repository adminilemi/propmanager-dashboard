import React from 'react';
import './Navbar.scss';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import { selectGlobal } from '../../Redux/Features/globalSlice';
import Notifications from '../Notifications/Notifications';
import UserLogo from '../UserPop/UserLogo';

import { useSelector } from 'react-redux';
import Modal from '../popUps/Modal';
import {
  selectUserAvatar,
  selectUserData,
  selectUserName,
} from '@/Redux/Features/userAuthSlice';
import UserPop from '../UserPop/UserPop';
// import { getNotifs, selectNotifs } from '../../Redux/Features/notifsSlice';

function NavBar() {
  const toggle = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  const { authUser } = useSelector(selectUserData);
  const userName = useSelector(selectUserName);
  const logoImage = useSelector(selectUserAvatar);
  // const name = useSelector(selectUserName);
  // const notifs = useSelector(selectNotifs);
  // const dispatch = useDispatch();

  return (
    <div className='navbar d-flex flex-column align-items-end'>
      <header className=' col-12 d-flex flex-row heading justify-content-end'>
        <div className='d-flex  heading gap-3 '>
          <button
            type='button'
            onClick={() => handleShow('notif')}
            id='notif'
            className='notifs'
          >
            <MdOutlineNotificationsNone className='Icons' />
            <span>
              <small> </small>
            </span>
          </button>

          <UserLogo
            coyLogo={logoImage}
            userName={userName || authUser.userName}
            chev
          />
        </div>
      </header>

      {toggle['notif'] && (
        <Modal id='notif' className='notifPopUp m-3'>
          <Notifications popUp />
        </Modal>
      )}
      {toggle['user'] && (
        <Modal id='user' className='userPopUp col-12 col-md-6 m-3'>
          <UserPop
            coyLogo={logoImage}
            companyName={userName || authUser.userName}
            close={() => handleShow('user')}
          />
        </Modal>
      )}
    </div>
  );
}

export default NavBar;
