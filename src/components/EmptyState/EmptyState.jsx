import React from 'react';

function EmptyState({ icons, title, subTitle }) {
  return (
    <div className='emptyState d-flex flex-column justify-content-center align-items-center col-5 text-center'>
      <figure className='col-4 mx-auto mb-3'>
        <img className='col-12' src={icons} alt='' />
      </figure>
      <h4 className='mb-2'>{title} </h4>
      <p>{subTitle} </p>
    </div>
  );
}

export default EmptyState;
