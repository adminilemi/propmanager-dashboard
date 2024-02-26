import React from 'react';
import Skeleton from 'react-loading-skeleton';

const HomeSkeleton = () => {
  return (
    <main style={{ height: '100vh' }} className='d-flex flex-column'>
      {<Skeleton height={400} />}

      <section>
        <div>{<Skeleton width='20%' height={400} />}</div>
        <div>{<Skeleton width='20%' height={400} />}</div>
        <div>{<Skeleton width='20%' height={400} />}</div>
      </section>
    </main>
  );
};

export default HomeSkeleton;
