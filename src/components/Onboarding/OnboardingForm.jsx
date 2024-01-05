import React, { useState } from 'react';
import FormLabel from './FormLabel';
import AgentInfo from './AgentInfo/AgentInfo';
import AgentNIN from './AgentNIN/AgentNIN';

function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [{ title: 'Step 1' }, { title: 'Step 2' }];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <section className='d-flex flex-row  justify-content-between mt-5'>
      <article className='col-1 mb-5 border-end'>
        <div className=''>
          <FormLabel stepLabels={StepLabels} currentStep={currentStep} />
        </div>
      </article>
      <article className='col-10 card py-4 px-3'>
        {currentStep === 0 && <AgentInfo onNext={handleNext} />}
        {currentStep === 1 && <AgentNIN onPrevious={handlePrevious} />}
      </article>
    </section>
  );
}

export default OnboardingForm;
