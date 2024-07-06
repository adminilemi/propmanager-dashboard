import React from 'react';
import { FaAngleRight, FaCheckCircle } from 'react-icons/fa';

function StepFormLabel({ stepLabels, currentStep }) {
  return (
    <ul className='stepLabels flex flex-wrap justify-between w-full'>
      {stepLabels.map((label, index) => (
        <li
          key={index}
          className={`step-label mb-3 ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          <h4 className='flex gap-1 items-center'>
            {index < currentStep ? (
              <FaCheckCircle className='checked-icon' />
            ) : (
              label.icon
            )}
            {label.title}{' '}
            {index !== stepLabels.length - 1 && (
              <FaAngleRight className='angle-right-icon' />
            )}
          </h4>
        </li>
      ))}
    </ul>
  );
}

export default StepFormLabel;
