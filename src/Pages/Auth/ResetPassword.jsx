import { useRef, useState } from 'react';
import './Auths.scss';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import * as API from '@/api/apis';
import BrandLogo from '@/components/BrandLogo';
import Spinner from '@/spinner/Spinner';
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
      className={` changePassword flex flex-col md:flex-row justify-between`}
    >
      <section className='flex flex-col aside py-3'>
        <header className='border-bottom py-2 mb-3 '>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>

        <aside className='w-7/12 mx-auto'>
          <h2>Reset Password</h2>
          <p> Enter your new password to continue</p>

          <form
            onSubmit={changePassword}
            className='form flex flex-col justify-between mt-5'
          >
            <section className='mb-3'>
              <label htmlFor='password' className='labelTitle'>
                {' '}
                Enter Verification Code *{' '}
              </label>
              <div className={` inputContainer flex flex-row items-center`}>
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
            <section className='w-full mb-3'>
              <div className=''>
                <label htmlFor='password' className='labelTitle'>
                  {' '}
                  New Password*{' '}
                </label>
                <div className={` inputContainer flex flex-row items-center`}>
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
            <section className='w-full mb-3'>
              <div className=''>
                <label htmlFor='password' className='labelTitle'>
                  {' '}
                  Confirm New Password*
                </label>
                <div className={` inputContainer flex flex-row items-center`}>
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

            <div className=' w-full text-center'>
              <button className='main-btn w-full mt-3' type='submit'>
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
