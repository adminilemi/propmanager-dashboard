import React, { useState } from 'react';

const SalesReferral = () => {
  const [getReferralCode, setGetReferralCode] = useState('');
  const [referralLink, setReferralLink] = useState('');

  const generateLink = () => {};

  return (
    <main className='min-h-screen flex flex-col justify-center gap-3 items-center bg-white'>
      <h2>Welcome</h2>
      <p>
        Please enter your referral link and click the button to generate your
        unique link
      </p>
      <form action='' className='w-full md:w-7/12 mx-auto'>
        <input
          id='referralCode'
          name='referralCode'
          type='text'
          className='form-control'
          placeholder='Enter your referral code here '
          onChange={(e) => setGetReferralCode(e.target.value)}
        />
        <div className=' w-full  flex justify-center mt-5'>
          <button className='main-btn w-full md:w-4/12' type='submit'>
            {' '}
            Generate Link
          </button>
        </div>
      </form>

      <section className=' w-full md:w-7/12 mx-auto flex flex-col text-center mt-3 '>
        <p>
          Your unique link has been generated, please copy it, save it, and
          share.
        </p>

        <div className='my-2 bg-mainLight flex justify-between rounded-xl w-full md:w-7/12 mx-auto '>
          <p> {referralLink} </p>{' '}
          <button className='bg-mainColor p-2 rounded-xl font-semibold text-white'>
            Copy Link
          </button>
        </div>
      </section>
    </main>
  );
};

export default SalesReferral;
