import React from 'react';

function EmptyState({ icons, title, subTitle }) {
  return (
    <div className='emptyStateContainer flex-col min-h-[40vh] text-center my-2'>
      {icons && (
        <figure className='w-4/12 mx-auto mb-3'>
          <img className='w-full' src={icons} alt='' />
        </figure>
      )}
      <h4 className='mb-2'>{title} </h4>
      <p>{subTitle} </p>
    </div>
  );
}

export default EmptyState;
