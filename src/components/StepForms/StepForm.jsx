import React, { useState } from 'react';
import StepFormLabel from './StepFormLabel';

import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
} from 'react-icons/tb';
import PropertyAddress from './PropertyAddress/PropertyAddress';
import ListingInfo from './ListingInfo/ListingInfo';
import PropertyImages from './PropertyImages/PropertyImages';
import PropertyVideos from './PropertyVideos/PropertyVideos';

function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    { title: 'Property Address', icon: <TbSquareRoundedNumber1Filled /> },
    { title: 'Listing Information', icon: <TbSquareRoundedNumber2Filled /> },
    { title: 'Property Images', icon: <TbSquareRoundedNumber3Filled /> },
    { title: 'Property Videos', icon: <TbSquareRoundedNumber3Filled /> },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <section className='d-flex flex-column  justify-content-between mt-5'>
      <article className='col-12 mb-5 border-bottom'>
        <div className='col-12 col-md-9 mx-auto'>
          <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
        </div>
      </article>
      <article className='col-12 card py-4 px-3'>
        {currentStep === 0 && <PropertyAddress onNext={handleNext} />}
        {currentStep === 1 && (
          <ListingInfo onPrevious={handlePrevious} onNext={handleNext} />
        )}
        {currentStep === 2 && (
          <PropertyImages onPrevious={handlePrevious} onNext={handleNext} />
        )}
        {currentStep === 3 && <PropertyVideos onPrevious={handlePrevious} />}
      </article>
    </section>
  );
}

export default StepForm;
