import React from 'react';
import './AddProperty.scss';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import StepForm from '@/components/StepForms/StepForm';

const AddProperty = () => {
  const nav = useNavigate();

  return (
    <main className='addproperty flex flex-col '>
      <div>
        <button
          onClick={() => nav(-1)}
          className='viewMore mt-2 flex items-center'
        >
          {' '}
          <BsChevronLeft /> Go Back
        </button>
      </div>

      <section className='text-center mb-3 mt-5 w-full md:6 mx-auto'>
        {' '}
        <h2>Add New Property</h2>
        <p className='my-2'>
          Make sure you have filled in all the necessary fields and have
          uploaded all the required files.
        </p>{' '}
      </section>

      <section className=' mb-5 w-full md:10 mx-auto'>
        <StepForm />
      </section>
    </main>
  );
};

export default AddProperty;
