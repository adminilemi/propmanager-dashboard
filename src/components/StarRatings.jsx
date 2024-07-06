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
    <div className='flex gap-2 justify-center'>
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
