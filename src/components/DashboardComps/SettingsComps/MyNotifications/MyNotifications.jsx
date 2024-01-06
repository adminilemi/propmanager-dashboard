import React, { useState } from 'react';
import './MyNotifications.scss';

const MyNotifications = () => {
  const [isChecked, setIsChecked] = useState({
    newsUpdate: true,
    newsLetter: false,
    shiftBookings: true,
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleCheckedToggle = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main className='card notifications'>
      <hgroup className='px-3 my-3'>
        <h3>Notifications</h3>
      </hgroup>

      <section className=' my-3 col-11 mx-auto'>
        <div className='mt-3 d-flex justify-content-between'>
          <div>
            <h6 className='mb-2'>General</h6>
            <p>Get notifications from ile-mi to stay up-to-date.</p>
          </div>
          <div className=' d-flex justify-content-between align-items-center  form-check form-switch'>
            <input
              name='newsLetter'
              id='newsLetter'
              className='form-check-input'
              type='checkbox'
              role='switch'
              onChange={() => handleCheckedToggle('newsLetter')}
              checked={isChecked.newsLetter}
              disabled={!isEdit}
            />
          </div>
        </div>
      </section>

      <hr />
      <section className=' my-3 col-11 mx-auto'>
        <div className='mt-3 '>
          <h6>Rent Reminder</h6>
          <div className='d-flex gap-2 align-items-center mt-2'>
            <input
              name='newsLetter'
              id='newsLetter'
              className=''
              type='checkbox'
              disabled={!isEdit}
            />
            <p>When your subscription&apos;s due date is approaching</p>
          </div>
        </div>
      </section>
      <hr />

      <section className=' my-3 col-11 mx-auto'>
        <div className='mt-3 '>
          <h6>Payments</h6>
          <div className='d-flex gap-2 align-items-center mt-2'>
            <input
              name='newsLetter'
              id='newsLetter'
              className=''
              type='checkbox'
              disabled={!isEdit}
            />
            <p>When listing unit is below 15</p>
          </div>
          <div className='d-flex gap-2 align-items-center mt-2'>
            <input
              name='newsLetter'
              id='newsLetter'
              className=''
              type='checkbox'
              checked
              disabled={!isEdit}
            />
            <p>Notification about payment status</p>
          </div>
        </div>
      </section>
      <hr />
      <section className=' my-3 col-11 mx-auto'>
        <div className='mt-3 '>
          <h6>Email Newsletter</h6>
          <div className='d-flex gap-3'>
            <div className='d-flex gap-2 align-items-center mt-2'>
              <input
                name='newsLetter'
                id='newsLetter'
                className=''
                type='radio'
                disabled={!isEdit}
              />
              <p>On</p>
            </div>
            <div className='d-flex gap-2 align-items-center mt-2'>
              <input
                name='newsLetter'
                id='newsLetter'
                className=''
                type='radio'
                checked
                disabled={!isEdit}
              />
              <p>Off</p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className='d-flex justify-content-end my-3 col-11 mx-auto'>
        {isEdit ? (
          <div className='d-flex gap-2'>
            <button
              className='outline-btn'
              type='button'
              onClick={() => setIsEdit(!isEdit)}
            >
              Cancel
            </button>
            <button className='main-btn' type='button'>
              Save Changes
            </button>
          </div>
        ) : (
          <button
            className='outline-btn'
            type='button'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </section>
    </main>
  );
};

export default MyNotifications;
