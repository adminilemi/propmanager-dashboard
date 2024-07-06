import React from 'react';
import Skeleton from 'react-loading-skeleton';

const HomeSkeleton = () => {
  return (
    <main>
      <section className='flex flex-wrap gap-3 justify-between'>
        <div className='w-[32%] '>
          <Skeleton height={250} />
        </div>
        <div className='w-[32%] '>
          <Skeleton height={250} />
        </div>
        <div className='w-[32%] '>
          <Skeleton height={250} />
        </div>
      </section>
      <section className='w-full mt-10'>
        <div className='flex flex-wrap justify-between'>
          <Skeleton containerClassName='w-[67%]' height={250} />
          <Skeleton height={250} containerClassName='w-[31%]' />
        </div>
      </section>
    </main>
  );
};

export default HomeSkeleton;
