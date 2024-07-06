import { PiWarningOctagon } from 'react-icons/pi';

const ErrorMessage = ({ message }) => {
  return (
    <div className='error_message  flex items-center gap-2  animate__animated animate__bounceIn my-2'>
      <div>
        <PiWarningOctagon />
      </div>
      <p className='error_message '> {message}</p>
    </div>
  );
};

export default ErrorMessage;
