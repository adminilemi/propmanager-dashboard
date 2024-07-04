import React from 'react';
import OnboardingForm from './OnboardingForm';
import './Onboarding.scss';
import RightSide from '../RightSide';
import BrandLogo from '../BrandLogo';

const Onboarding = () => {
  return (
    <main className='onboarding d-flex flex-col flex-lg-row justify-content-between bg-white'>
      <section className='d-flex flex-column aside '>
        <header className='border-bottom mb-3 '>
          <div className='container py-2 px-2 px-lg-5'>
            <div className='col-1 py-2 '>
              <BrandLogo />
            </div>
          </div>
        </header>
        <aside className='container px-2 px-lg-5 mt-4'>
          <section className='col-11 mx-auto mx-lg-0'>
            <OnboardingForm />
          </section>
        </aside>
      </section>
      <RightSide title='Get the right people to get your job done right' />
    </main>
  );
};

export default Onboarding;
