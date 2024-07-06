import React from 'react';

function FormLabel({ stepLabels, currentStep }) {
  return (
    <ul className='stepLabels flex flex-col justify-between w-full'>
      {stepLabels.map((label, index) => (
        <li
          key={index}
          className={`step-label mb-3 ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          <h4 className='flex gap-1 items-center'>{label.title} </h4>
        </li>
      ))}
    </ul>
  );
}

export default FormLabel;
