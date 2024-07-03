import React from 'react';
import OnboardingForm from './OnboardingForm';
import Logo from '@/assets/ilemi-logo-white.png';
import './Onboarding.scss';

const Onboarding = () => {
  return (
    <main className='onboarding d-flex flex-column'>
      <header className='d-flex align-items-center'>
        <div>
          <figure className=''>
            {' '}
            <img src={Logo} alt='Ilemi Logo' className='col-4' />
          </figure>
        </div>
      </header>
      <section className='container'>
        <OnboardingForm />
      </section>
    </main>
  );
};

export default Onboarding;
