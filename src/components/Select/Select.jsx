import React, { useEffect, useRef, useState } from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import './Select.scss';

const Select = ({
  options,
  onSelectChange,
  id,
  selectedOption,
  setSelectedOption,
  errors,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [error, setError] = useState(false);

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

  const handleOptionClick = (option) => {
    setSelectedOption((prev) => ({ ...prev, [id]: option }));

    setIsOpen(false);
    onSelectChange(id, option);
  };

  return (
    <div id={id} className='custom-select my-3' ref={popupRef}>
      <div
        className={
          (errors?.error && errors?.errMessage.includes('categories')) ||
          (errors?.error && errors?.errMessage.includes('type'))
            ? 'errors select-header'
            : 'select-header'
        }
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : 'Select'}
        <HiMiniChevronDown className='chevIcons' />
      </div>
      {isOpen && (
        <ul className='options'>
          {options.map((option) => (
            <li
              key={option.id}
              className='option flex items-center gap-3'
              onClick={() => handleOptionClick(option.title)}
            >
              {option?.icon} {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
