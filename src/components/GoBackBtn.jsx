import { useNavigate } from 'react-router-dom';

const GoBackBtn = ({ className }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={className}>
      Go Back{' '}
    </button>
  );
};

export default GoBackBtn;
