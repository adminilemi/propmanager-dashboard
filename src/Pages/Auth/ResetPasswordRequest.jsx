import { useRef, useState } from 'react';
import './Auths.scss';
// import { useSweetAlert } from '../../Hooks/useSweetAlert';
// import * as API from '../../api/apis';

import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import RightSide from '@/components/RightSide';
import BrandLogo from '@/components/BrandLogo';

function ResetPasswordRequest() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ error: false, errMessage: '' });
  const [resetEmail, setResetEmail] = useState({ email: '' });
  // const navigate = useNavigate();
  const inputRef = useRef(null);
  // const { Toast } = useSweetAlert();

  // get the form input data
  const handleChange = (e) => {
    setResetEmail({ ...resetEmail, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (resetEmail.email === '') {
      setErrors({ error: true, errMessage: 'empty' });
      setLoading(false);
      return;
    }

    // API.requestPasswordChange(resetEmail.email)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.message,
    //     };
    //     Toast.fire({
    //       icon: 'success',
    //       title: `${successMessage.message} 👊🏿👏🏿`,
    //     });
    //     setLoading(false);
    //     navigate('/resetpassword');
    //   })
    //   .catch((err) => {
    //     setLoading(false);

    //     const erroMessage = {
    //       success: false,
    //       message:
    //         err && err.response
    //           ? err.response.data.message
    //           : 'We encounter an error',
    //     };

    //     console.log(erroMessage);
    //     setErrors({ error: true, errMessage: erroMessage.message });
    //   });
  };

  return (
    <div className={` reset d-flex flex-column flex-md-row `}>
      <aside className=''>
        <div className='col-3 mb-4'>
          <BrandLogo />
        </div>
        <form className={` form d-flex flex-column  `}>
          <h2>Reset Password</h2>
          <h4> Please enter your email to reset your password</h4>
          <section className='mb-3 mt-4'>
            <label className='labelTitle' htmlFor='email'>
              {' '}
              Email
            </label>
            <div>
              <input
                ref={inputRef}
                type='email'
                id='email'
                name='email'
                placeholder='example@gmail.com'
                onChange={handleChange}
                defaultValue={resetEmail.email}
                className={` formInput ${
                  errors.errMessage === 'empty' ? 'errors' : ''
                } form-control `}
              />
            </div>
          </section>

          <div className=' col-12 text-center'>
            <button
              className='auth-btn col-12 mt-3'
              onClick={handleResetPassword}
            >
              {loading ? <Spinner /> : 'Reset'}
            </button>
            {errors.errMessage === 'empty' ? (
              <span className='error_message'> All field must be filled </span>
            ) : (
              <span className='error_message'> {errors.errMessage} </span>
            )}
          </div>
        </form>
      </aside>
      <RightSide title='Get the right people to get your job done right' />
    </div>
  );
}

export default ResetPasswordRequest;
