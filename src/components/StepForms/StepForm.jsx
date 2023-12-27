import React, { useState } from 'react';
import StepFormLabel from './StepFormLabel';
import CompanyAddress from './CompanyAddress/CompanyAddress';
import JobDetails from './JobDetails/JobDetails';
import CompanyRep from './CompanyRep/CompanyRep';

function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    'Company Address',
    'Job Details',
    'Company Representative',
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between mt-5'>
      <div className='col-12 col-md-2 mb-5 mb-md-0'>
        <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
      </div>
      <section className='col-12 col-md-9'>
        {currentStep === 0 && <CompanyAddress onNext={handleNext} />}
        {currentStep === 1 && (
          <JobDetails onPrevious={handlePrevious} onNext={handleNext} />
        )}
        {currentStep === 2 && <CompanyRep onPrevious={handlePrevious} />}
      </section>
    </div>
  );
}

export default StepForm;
