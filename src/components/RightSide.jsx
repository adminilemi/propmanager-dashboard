import React from 'react';
import '../Pages/Auth/Auths.scss';
import propImage from '../assets/authProp.svg';
import poweredby from '../assets/poweredby.png';

function RightSide() {
  return (
    <section className='right d-none d-lg-flex flex-column'>
      <figure className='col-8 mx-auto'>
        <img src={propImage} alt='' />
      </figure>

      <section className='col-10'>
        <div className='d-flex gap-2 align-items-center'>
          {' '}
          <p> Powered by </p>
          <figure className='col-1'>
            <img src={poweredby} alt='' />
          </figure>
        </div>

        <div>
          <p>
            You agree to Ile-Mi’s{' '}
            <span className='viewMore'>Terms of Use & Privacy Policy.</span> You
            don't need to consent as a condition of renting any property, or
            buying any other goods or services. Message/data rates may apply.
          </p>
        </div>
      </section>
    </section>
  );
}

export default RightSide;
