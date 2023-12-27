import React from 'react';

function StepFormLabel({ stepLabels, currentStep }) {
  return (
    <ul className='stepLabels'>
      {stepLabels.map((label, index) => (
        <li
          key={index}
          className={`step-label mb-3 ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          <h4>{label}</h4>
        </li>
      ))}
    </ul>
  );
}

export default StepFormLabel;
