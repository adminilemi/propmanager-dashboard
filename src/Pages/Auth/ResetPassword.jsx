import { useRef, useState } from 'react';
import './Auths.scss';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import * as API from '@/api/apis';
import BrandLogo from '@/components/BrandLogo';
import { Spinner } from 'react-bootstrap';
import RightSide from '@/components/RightSide';
import { useNavigate } from 'react-router-dom';
import { useGlobalHooks } from '@/Hooks/globalHooks';

function ResetPassword() {
  const { errors, setErrors, loading, setLoading } = useGlobalHooks();
  const [updatePassword, setUpdatePassword] = useState({
    uniqueVerificationCode: '',
    newPassword: '',
  });

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { showAlert } = useSweetAlert();

  // get the form input data
  const handleChange = (e) => {
    setUpdatePassword({ ...updatePassword, [e.target.id]: e.target.value });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    API.passwordChange(updatePassword)
      .then((res) => {
        const successMessage = {
          success: true,
          message: res.data.message,
        };

        showAlert(successMessage.message);

        setLoading(false);
        navigate('/signin');
      })
      .catch((err) => {
        setLoading(false);
        const erroMessage = {
          success: false,
          message:
            err && err.response
              ? err.response.data.message
              : 'We encounter an error',
        };

        console.log(erroMessage);
        setErrors({ error: true, errMessage: erroMessage.message });
      });
  };

  return (
    <div
      className={` changePassword d-flex flex-column flex-md-row justify-content-between`}
    >
      <section className='d-flex flex-column aside py-3'>
        <header className='border-bottom py-3 px-4 mb-3'>
          <div className='col-2 '>
            <BrandLogo />
          </div>
        </header>
        <aside className='col-7 mx-auto'>
          <h2>Reset Password</h2>
          <p> Enter your new password to continue</p>

          <form
            onSubmit={changePassword}
            className='form d-flex flex-column justify-content-between mt-5'
          >
            <section className='mb-3'>
              <label htmlFor='password' className='labelTitle'>
                {' '}
                Enter Verification Code *{' '}
              </label>
              <div
                className={` inputContainer d-flex flex-row align-items-center`}
              >
                <input
                  ref={inputRef}
                  id='uniqueVerificationCode'
                  type='text'
                  name='password'
                  placeholder='Enter verification code'
                  defaultValue={updatePassword.uniqueVerificationCode}
                  onChange={handleChange}
                  className={` formInput ${
                    errors.errMessage === 'empty' ? 'errors' : ''
                  }  form-control `}
                  required
                />{' '}
              </div>
            </section>
            <section className='col-12 mb-3'>
              <div className=''>
                <label htmlFor='password' className='labelTitle'>
                  {' '}
                  New Password*{' '}
                </label>
                <div
                  className={` inputContainer d-flex flex-row align-items-center`}
                >
                  <input
                    ref={inputRef}
                    id='newPassword'
                    type='text'
                    name='newPassword'
                    placeholder='Enter new password'
                    defaultValue={updatePassword.newPassword}
                    onChange={handleChange}
                    className={` formInput ${
                      errors.errMessage === 'empty' ? 'errors' : ''
                    }  form-control `}
                    required
                  />{' '}
                </div>
              </div>
            </section>
            <section className='col-12 mb-3'>
              <div className=''>
                <label htmlFor='password' className='labelTitle'>
                  {' '}
                  Confirm New Password*
                </label>
                <div
                  className={` inputContainer d-flex flex-row align-items-center`}
                >
                  <input
                    ref={inputRef}
                    id='confirm Password'
                    type='text'
                    name='confirm Password'
                    placeholder='Re-enter new password'
                    onChange={handleChange}
                    className={` formInput ${
                      errors.errMessage === 'empty' ? 'errors' : ''
                    }  form-control `}
                    required
                  />{' '}
                </div>
              </div>
            </section>

            <div className=' col-12 text-center'>
              <button className='main-btn col-12 mt-3' type='submit'>
                {loading ? <Spinner /> : 'Reset'}
              </button>
              {errors.errMessage === 'empty' ? (
                <span className='error_message'>
                  {' '}
                  All field must be filled{' '}
                </span>
              ) : (
                <span className='error_message'> {errors.errMessage} </span>
              )}
            </div>
          </form>
        </aside>
      </section>
      <RightSide title='Get the right people to get your job done right' />
    </div>
  );
}

export default ResetPassword;
