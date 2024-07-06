import BrandLogo from '@/components/BrandLogo';
import { handleCopyToClipboard } from '@/utils';
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const SalesReferral = () => {
  const [getReferralCode, setGetReferralCode] = useState('');
  const [referralLink, setReferralLink] = useState('');

  const generateLink = (e) => {
    e.preventDefault();
    setReferralLink(
      `https://agent.property4u.ng/signup?query=${getReferralCode.replace(
        /\s+/g,
        '',
      )}`,
    );
  };

  const handleCopyLink = () => {
    handleCopyToClipboard('ref', referralLink, 'Link copied successfully');

    setGetReferralCode('');
    setReferralLink('');
  };

  return (
    <main className=' bg-white'>
      <header className='border-bottom mb-3 bg-mainColor flex justify-center py-5'>
        <BrandLogo className='w-[10%]' />
      </header>

      <section className='min-h-[73vh] flex flex-col justify-center gap-3 items-center'>
        <h2>Welcome</h2>
        <p>
          Please enter your referral link and click the button to generate your
          unique link
        </p>
        <form onSubmit={generateLink} className='w-full md:w-7/12 mx-auto'>
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

        {referralLink && (
          <section className=' w-full md:w-7/12 mx-auto flex flex-col text-center mt-3 '>
            <p>
              Your unique link has been generated, please copy it, save it, and
              share.
            </p>

            <div className='my-2 bg-mainLight flex justify-between items-center rounded-xl w-full '>
              <p className='p-2'> {referralLink} </p>{' '}
              <button
                className='bg-mainColor p-2 rounded-xl font-semibold text-white flex items-center gap-2'
                onClick={handleCopyLink}
              >
                <FaCopy /> Copy Link
              </button>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default SalesReferral;
