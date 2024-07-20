import React from 'react';
import './Navbar.scss';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import { selectGlobal, selectPageName } from '../../Redux/Features/globalSlice';
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
import { greetings } from '@/utils';
// import { getNotifs, selectNotifs } from '../../Redux/Features/notifsSlice';

const NavBar = () => {
  const toggle = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  const { authUser } = useSelector(selectUserData);
  const userName = useSelector(selectUserName);
  const logoImage = useSelector(selectUserAvatar);

  // const notifs = useSelector(selectNotifs);
  // const dispatch = useDispatch();

  return (
    <header className='navbar '>
      <section className='container flex flex-wrap items-center justify-between'>
        <hgroup className='grow'>
          <h1>
            {' '}
            {greetings()}, {userName || authUser.userName}{' '}
          </h1>
        </hgroup>
        <section className=' flex-1 flex flex-row heading justify-end'>
          <div className='flex  heading gap-3 '>
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
        </section>
      </section>

      {toggle['notif'] && (
        <Modal id='notif' className='notifPopUp m-3'>
          <Notifications popUp />
        </Modal>
      )}
      {toggle['user'] && (
        <Modal id='user' className='userPopUp w-full md:w-6/12 m-3'>
          <UserPop
            coyLogo={logoImage}
            companyName={userName || authUser.userName}
            close={() => handleShow('user')}
          />
        </Modal>
      )}
    </header>
  );
};

export default NavBar;
