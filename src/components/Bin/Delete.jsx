import React from 'react';
import PopUp from '../popUps/PopUp';

function Delete({ id, title, subTitle, close, action, actionTitle }) {
  return (
    <PopUp id={id}>
      <div className='container-deactivate py-5'>
        <div className='d-flex flex-column mx-auto col-10'>
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <div className='mt-5 d-flex flex-row gap-3 col-6'>
            <button onClick={close} className='outline-dark'>
              Cancel
            </button>
            <button className='main-btn' type='button' onClick={action}>
              {actionTitle}
            </button>
          </div>
        </div>
      </div>
    </PopUp>
  );
}

export default Delete;
