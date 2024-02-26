import { useGlobalHooks } from '@/Hooks/globalHooks';
import React from 'react';

const CurrentSub = ({ subId, currentPlanData }) => {
  const { formatDate } = useGlobalHooks();

  return (
    <>
      {!subId ? (
        // <main className='currentPlan card d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center '>
        //   <section className='col-12 col-md-2'>
        //     <h4>Current Subscription Plan</h4>
        //     <h3>NILL</h3>
        //   </section>
        //   <section className='col-12 col-md-2'>
        //     <h4>Subscription Date:</h4>
        //     <p>Nill</p>
        //   </section>
        //   <section className='col-12 col-md-2'>
        //     <h4>Subscription Duratins:</h4>
        //     <p>Timeless</p>
        //   </section>
        //   <section className='col-12 col-md-2'>
        //     <h4>Renewal Date:</h4>
        //     <p>Nill</p>
        //   </section>
        //   <section className='col-12 col-md-3 d-flex justify-content-end'>
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
        <main className='currentPlan card d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center '>
          <section className='col-12 col-md-2'>
            <h4>Current Subscription Plan</h4>
            <h3>{currentPlanData.planName}</h3>
          </section>
          <section className='col-12 col-md-2'>
            <h4>Subscription Date:</h4>
            <p>{formatDate(currentPlanData.Date)}</p>
          </section>
          <section className='col-12 col-md-2'>
            <h4>Subscription Durations:</h4>
            <p>{currentPlanData.HowManyDaysPlan} Days</p>
          </section>
          <section className='col-12 col-md-2'>
            <h4>Renewal Date:</h4>
            <p>{formatDate(currentPlanData.DateOfExpiration)}</p>
          </section>
          <section className='col-12 col-md-3 d-flex justify-content-end'>
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
