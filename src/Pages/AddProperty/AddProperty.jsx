import React from 'react';
import './AddProperty.scss';
import StepForm from '@/components/StepForms/StepForm';

const AddProperty = () => {
  return (
    <main className='addproperty d-flex flex-column justify-content-between'>
      <section className='text-center my-5 col-12 col-md-6 mx-auto'>
        {' '}
        <h2>Add New Property</h2>
        <p className='my-2'>
          Make sure you have filled in all the necessary fields and have
          uploaded all the required files.
        </p>{' '}
      </section>

      <section className='text-center my-5 col-12 col-md-6 mx-auto'>
        <StepForm />
      </section>
    </main>
  );
};

export default AddProperty;
