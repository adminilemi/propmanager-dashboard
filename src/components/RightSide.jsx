import React from 'react';
import '../Pages/Auth/Auths.scss';
import propImage from '@/assets/authProp.svg';
import poweredby from '@/assets/poweredby.png';

function RightSide() {
  return (
    <section className='right hidden lg:flex flex-col'>
      <figure className='w-8/12 mx-auto'>
        <img src={propImage} alt='' />
      </figure>

      <section className='w-10/12'>
        <div className='flex gap-2 items-center'>
          {' '}
          <p> Powered by </p>
          <figure className='w-1/12'>
            <img src={poweredby} alt='' />
          </figure>
        </div>

        <div>
          <p>
            You agree to Property4u&apos;s{' '}
            <span className='viewMore'>Terms of Use & Privacy Policy.</span> You
            don&apos;t need to consent as a condition of renting any property,
            or buying any other goods or services. Message/data rates may apply.
          </p>
        </div>
      </section>
    </section>
  );
}

export default RightSide;
