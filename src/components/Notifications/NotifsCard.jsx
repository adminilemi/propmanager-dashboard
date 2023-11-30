import React from 'react';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import { useSelector } from 'react-redux';
import { selectGlobal } from '../../Redux/Features/globalSlice';

function NotifsCard({
  id,
  userName,
  userId,
  jobId,
  message,
  time,
  shift,
  cvFile,
}) {
  const toggle = useSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();

  return (
    <div className=' d-flex flex-column justify-content-between'>
      <section className=' d-flex flex-row justify-content-between'>
        <section className='col-10 d-flex flex-row align-items-center justify-content-between'>
          <h5 className='col-1'>
            {' '}
            <MdOutlineNotificationsNone />{' '}
          </h5>
          {/* <div className='col-10 d-flex flex-column'>
            <p>
              {' '}
              <strong
                id={`emProfile${id}`}
                onClick={() => {
                  handleShow(`emProfile${id}`);
                  readNotifs(id);
                }}
                className='links'
              >
                {userName}
              </strong>{' '}
              <em>{message} </em>
              <Link
                onClick={() => {
                  handleShow('notif');
                  readNotifs(id);
                }}
                to={`/jobdetails/${jobId}`}
                className='links'
              >
                <strong>{shift}</strong>
              </Link>
              <em>shift </em>
            </p>

            {cvFile && (
              <Link to={cvFile}>
                <button className='CV'>
                  <BsDownload /> Download CV{' '}
                </button>
              </Link>
            )}
          </div> */}
        </section>

        <div className=' d-flex flex-column justify-content-center align-items-center col-2 messageNotifs'>
          <small>{time}</small>
        </div>
      </section>
    </div>
  );
}

export default NotifsCard;
