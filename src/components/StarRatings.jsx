import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const StarRatings = ({ maxRatings, rating, setRating }) => {
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const getColor = (index) => {
    return index + 1 <= rating ? 'rated' : 'noRating';
  };

  return (
    <div className='d-flex gap-2 justify-content-center'>
      {[...Array(maxRatings)].map((_, index) => (
        <BsStarFill
          key={index}
          className={`star ${getColor(index)}`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRatings;
