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
import Pricing from './Pricing/Priciing';

function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    { title: 'Property Address', icon: <TbSquareRoundedNumber1Filled /> },
    { title: 'Listing Information', icon: <TbSquareRoundedNumber2Filled /> },
    { title: 'Pricing', icon: <TbSquareRoundedNumber2Filled /> },
    { title: 'Property Images', icon: <TbSquareRoundedNumber3Filled /> },
    { title: 'Property Videos', icon: <TbSquareRoundedNumber3Filled /> },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const data = [
    { comp: <PropertyAddress onNext={handleNext} /> },
    { comp: <ListingInfo onPrevious={handlePrevious} onNext={handleNext} /> },
    { comp: <Pricing onPrevious={handlePrevious} onNext={handleNext} /> },
    {
      comp: <PropertyImages onPrevious={handlePrevious} onNext={handleNext} />,
    },

    {
      comp: <PropertyVideos onPrevious={handlePrevious} onNext={handleNext} />,
    },
  ];

  return (
    <section className='flex flex-col  justify-between mt-5'>
      <article className='w-full lg:w-7/12 mx-auto mb-5 border-bottom'>
        <div className=''>
          <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
        </div>
      </article>
      <article className='w-full lg:w-7/12 mx-auto'>
        {data.map(
          ({ comp }, idx) =>
            currentStep === idx && (
              <React.Fragment key={idx}>{comp}</React.Fragment>
            ),
        )}
      </article>
    </section>
  );
}

export default StepForm;
