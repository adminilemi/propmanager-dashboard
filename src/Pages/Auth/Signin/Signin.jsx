import React, { useRef, useState } from 'react';
import './Signin.scss';
import { useSweetAlert } from '../../../Hooks/useSweetAlert';
import { BsFillEyeSlashFill, BsFillEyeFill, BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import RightSide from '../../../components/RightSide';
import { useCookies } from '../../../Hooks/cookiesHook';
import { useDispatch } from 'react-redux';
import BrandLogo from '@/components/BrandLogo';
import { Spinner } from 'react-bootstrap';
// import {
//   getUserAvatar,
//   userAuthData,
// } from '../../../Redux/Features/userAuthSlice';

function Signin() {
  const [passwordType, setPasswordType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ error: false, errMessage: '' });
  const [userData, setUserData] = useState({ email: '', password: '' });

  const inputRef = useRef(null);
  // const navigate = useNavigate();
  // const { setCookies } = useCookies();
  // const dispatch = useDispatch();
  // const { showAlert } = useSweetAlert();

  const showPassword = (id) => {
    setPasswordType((prev) => ({ ...passwordType, [id]: !prev[id] }));
  };

  // get the form input data
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  // Validate input
  const validateInput = ({ email, password }) => {
    if (email === '' || password === '') {
      setErrors({ error: true, errMessage: 'empty' });
      return false;
    }

    setErrors({ error: false });

    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validInput = validateInput(userData);

    // if the input isn't validated, return
    if (!validInput) {
      setLoading(false);
      return;
    }
  };

  return (
    <div
      className={` SignIn d-flex flex-column flex-md-row justify-content-between`}
    >
      <aside className=''>
        <div className='col-3 mb-3'>
          <BrandLogo />
        </div>
        <h4> Welcome back,</h4>
        <h2>Log In to continue</h2>
        <form
          className={` form d-flex flex-column justify-content-between mt-5`}
        >
          <section className='mb-3'>
            <label htmlFor='email' className='labelTitle'>
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
                defaultValue={userData.email}
                onChange={handleChange}
                className={` formInput ${
                  errors.errMessage === 'email' || errors.errMessage === 'empty'
                    ? 'errors'
                    : ''
                } form-control `}
              />
            </div>
            {errors.errMessage === 'email' ? (
              <span className='error_message'>
                {' '}
                Please enter a valid email e.g example@mail.com{' '}
              </span>
            ) : (
              ''
            )}
          </section>
          <section className='col-12 mb-3'>
            <div className=''>
              <label htmlFor='password' className='labelTitle'>
                {' '}
                Password{' '}
              </label>
              <div
                className={` inputContainer d-flex flex-row align-items-center`}
              >
                <input
                  ref={inputRef}
                  id='password'
                  type={!passwordType['password'] ? 'password' : 'text'}
                  name='password'
                  placeholder='enter your password'
                  defaultValue={userData.password}
                  onChange={handleChange}
                  className={` formInput ${
                    errors.errMessage === 'empty' ? 'errors' : ''
                  }  form-control `}
                  required
                />{' '}
                <div onClick={() => showPassword('password')} className='icon'>
                  {!passwordType['password'] ? (
                    <BsFillEyeSlashFill />
                  ) : (
                    <BsFillEyeFill />
                  )}
                </div>
              </div>
            </div>
            <div className='forgot text-end mt-2'>
              <Link to='/resetpasswordrequest'>Forgot Password</Link>
            </div>
          </section>

          <div className=' col-12 text-center'>
            <button className='auth-btn col-12 mt-3' onClick={handleSignIn}>
              {loading ? <Spinner /> : 'Log In'}
            </button>
            {errors.errMessage === 'empty' ? (
              <span className='error_message'> All field must be filled </span>
            ) : (
              <span className='error_message'> {errors.errMessage} </span>
            )}
          </div>
          <p className='mt-3 '>
            Don’t have an account?
            <Link className='Login' to='/signup'>
              <strong> Sign Up </strong>
            </Link>
          </p>
        </form>

        <div className='goBack text-center'>
          <Link to='#'>
            {' '}
            <BsArrowLeft /> Back to homepage
          </Link>
        </div>
      </aside>
      <RightSide
        title='Get the right people to get your job done right'
        className={`signInRight   d-none d-lg-flex `}
      />
    </div>
  );
}

export default Signin;
