import React from 'react';

function FormLabel({ stepLabels, currentStep }) {
  return (
    <ul className='stepLabels d-flex flex-column justify-content-between col-12'>
      {stepLabels.map((label, index) => (
        <li
          key={index}
          className={`step-label mb-3 ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          <h4 className='d-flex gap-1 align-items-center'>{label.title} </h4>
        </li>
      ))}
    </ul>
  );
}

export default FormLabel;
