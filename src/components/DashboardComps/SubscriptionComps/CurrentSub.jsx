import { useGlobalHooks } from '@/Hooks/globalHooks';
import React from 'react';

const CurrentSub = ({ subId, currentPlanData }) => {
  const { formatDate } = useGlobalHooks();

  return (
    <>
      {!subId ? (
        // <main className='currentPlan card flex flex-col gap-2 md:flex-row justify-between items-center '>
        //   <section className='w-full md:2'>
        //     <h4>Current Subscription Plan</h4>
        //     <h3>NILL</h3>
        //   </section>
        //   <section className='w-full md:2'>
        //     <h4>Subscription Date:</h4>
        //     <p>Nill</p>
        //   </section>
        //   <section className='w-full md:2'>
        //     <h4>Subscription Duratins:</h4>
        //     <p>Timeless</p>
        //   </section>
        //   <section className='w-full md:2'>
        //     <h4>Renewal Date:</h4>
        //     <p>Nill</p>
        //   </section>
        //   <section className='w-full md:3 flex justify-end'>
        //     <div>
        //       <button type='button' className='main-btn'>
        //         Upgrade Account
        //       </button>
        //     </div>
        //   </section>
        // </main>
        <div className='text-center'>
          <p> You&apos;re not subscribed to any plan yet.</p>
        </div>
      ) : (
        <main className='currentPlan card flex flex-col gap-2 md:flex-row justify-between items-center '>
          <section className='w-full md:w-2/12'>
            <h4>Current Subscription Plan</h4>
            <h3>{currentPlanData?.planName}</h3>
          </section>
          <section className='w-full md:w-2/12'>
            <h4>Subscription Date:</h4>
            <p>{formatDate(currentPlanData?.Date)}</p>
          </section>
          <section className='w-full md:w-2/12'>
            <h4>Subscription Durations:</h4>
            <p>{currentPlanData?.HowManyDaysPlan} Days</p>
          </section>
          <section className='w-full md:w-2/12'>
            <h4>Renewal Date:</h4>
            <p>{formatDate(currentPlanData?.DateOfExpiration)}</p>
          </section>
          <section className='w-full md:w-3/12 flex justify-end'>
            <div>
              <button type='button' className='main-btn'>
                Renew Subscription
              </button>
            </div>
          </section>
        </main>
      )}{' '}
    </>
  );
};

export default CurrentSub;
