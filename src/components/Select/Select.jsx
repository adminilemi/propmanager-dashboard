import React, { useState } from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import './Select.scss';

function Select({
  options,
  onSelectChange,
  id,
  selectedOption,
  setSelectedOption,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // const [error, setError] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption((prev) => ({ ...prev, [id]: option }));

    setIsOpen(false);
    onSelectChange(id, option);
  };

  return (
    <div id={id} className='custom-select'>
      <div
        className={error ? 'errors select-header' : 'select-header'}
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
              className='option'
              onClick={() => handleOptionClick(option.title)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
