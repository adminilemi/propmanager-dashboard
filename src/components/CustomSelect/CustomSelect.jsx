import React, { useEffect, useRef, useState } from 'react';
import './CustomSelect.scss';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';

function CustomSelect({ options, selectedOptions, setSelectedOptions, error }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const popupRef = useRef();

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleOptionToggle = (value) => {
    // This a checkbox input options, you click to check and uncheck, when checked, it's added to the selectedOption array, when unchecked, it should be removed from the selectedOption array

    // steps to implement the above
    // 1. check if the value in selectedOption is checked using some() which will return boolean
    const isSelected = selectedOptions.some((op) => op.name === value);

    // Use if statment, to check if it's step one is true, meaning it's checked, then remove it from the array,
    if (isSelected) {
      const updateSelectedOptions = selectedOptions.filter(
        (op) => op.name !== value,
      );
      // Preserve the current array data
      setSelectedOptions(updateSelectedOptions);
    } else {
      // else, meaning it wasn't checked then update the array with additional {}
      setSelectedOptions((prevSelectedtOption) => [
        // Preserver the current object in the array
        ...prevSelectedtOption,
        // Add another object to the array
        { name: value },
      ]);
    }
  };

  return (
    <div className='custom-select d-flex flex-column col-12' ref={popupRef}>
      <div
        className={
          error.errMessage === 'job'
            ? 'errors select-header col-12'
            : 'select-header col-12'
        }
        onClick={toggleDropdown}
      >
        Select <span>{isOpen ? <PiCaretUpBold /> : <PiCaretDownBold />}</span>
        {/* {selectedOptions.length > 0
          ? selectedOptions.map(({ name }) => <p key={name}> {name}, </p>)
          : ' Select'} */}
      </div>
      {isOpen && (
        <div className='options'>
          {options.map((option) => {
            const isSelected = selectedOptions.find(
              (op) => op.name === option.title,
            );

            return (
              <label
                key={option.id}
                className='option-label d-flex flex-row justify-content-between'
              >
                {option.title}
                <input
                  type='checkbox'
                  defaultValue={option.title}
                  checked={isSelected ? true : false}
                  onChange={() => handleOptionToggle(option.title)}
                />
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
