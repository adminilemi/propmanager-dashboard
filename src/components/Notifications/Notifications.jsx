import React from 'react';
import './Notifications.scss';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import notif from '../../assets/noNotif.png';
import NotifsCard from './NotifsCard';
import EmptyState from '../EmptyState/EmptyState';
import { useSelector } from 'react-redux';
import { selectNotifs } from '../../Redux/Features/notifsSlice';
import { BsCheck2, BsCheck2All } from 'react-icons/bs';
// import { selectUserName } from '../../Redux/Features/userAuthSlice';

function Notifications({ popUp, home }) {
  const notifs = useSelector(selectNotifs);
  const { getJobCreationDate } = useGlobalHooks();
  // const userName = useSelector(selectUserName);

  // where home is true, render top 3 notifs
  const renderNotifs = home ? notifs?.slice(0, 3) : notifs;

  return (
    <main className='col-12 Notifs'>
      <hgroup className='d-flex justify-content-between'>
        <h3> Notifications {notifs.length} </h3>
        <h3 className='viewMore d-flex gap-2'>
          {' '}
          <BsCheck2All />
          <span>Mark as read</span>
        </h3>
      </hgroup>
      {popUp && <hr />}

      {notifs?.length === 0 && (
        <section
          className={
            popUp
              ? 'py-5 emptyStateContainer d-flex justify-content-center'
              : 'emptyStateContainer d-flex justify-content-center '
          }
        >
          <EmptyState
            icons={notif}
            title='No notifications yet'
            subTitle='Your notifications will show here when you have them'
          />
        </section>
      )}

      <ul
        className={home ? 'card' : notifs?.length >= 1 && 'notifCardContainer'}
      >
        {renderNotifs &&
          renderNotifs.map(
            ({ _id, Jobid, otherUserid, content, timestamp }) => (
              <li className='notifCard' key={_id}>
                <NotifsCard
                  id={_id}
                  userId={otherUserid}
                  jobId={Jobid}
                  userName={content.Username}
                  shift={content.jobTitle}
                  message={content.message}
                  time={getJobCreationDate(timestamp)}
                  cvFile={content.message === 'just applied' && content.CvUrl}
                />
              </li>
            ),
          )}
      </ul>

      <p className='viewMore col-11 mx-auto py-3'>View all notification</p>
    </main>
  );
}

export default Notifications;
