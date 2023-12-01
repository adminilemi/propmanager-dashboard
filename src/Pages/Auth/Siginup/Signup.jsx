import React, { useRef, useState } from 'react';
import './Signup.scss';
import { useSweetAlert } from '../../../Hooks/useSweetAlert';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import RightSide from '../../../components/RightSide';
import { useDispatch } from 'react-redux';
import { useCookies } from '../../../Hooks/cookiesHook';
import { userAuthData } from '../../../Redux/Features/userAuthSlice';
import { Spinner } from 'react-bootstrap';
import BrandLogo from '@/components/BrandLogo';

const initialState = {
  companyName: '',
  email: '',
  password: '',
  confirmPass: '',
  checked: false,
};

function Signup() {
  const [passwordType, setPasswordType] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [passwordStrength, setPasswordStrength] = useState(false);
  const [errors, setErrors] = useState({ error: false, errMessage: '' });
  const [userData, setUserData] = useState(initialState);

  // const navigate = useNavigate();

  // const { setCookies } = useCookies();

  // const dispatch = useDispatch();
  const inputRef = useRef(null);
  // const { Toast } = useSweetAlert();

  const showPassword = (id) => {
    setPasswordType((prev) => ({ ...passwordType, [id]: !prev[id] }));
  };

  // // get the form input data
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setUserData({ ...userData, [e.target.id]: e.target.checked });
    } else {
      setUserData({ ...userData, [e.target.id]: e.target.value });
    }
  };

  // // Verify email
  // const verifyEmail = (email) => {
  //   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  //   return emailRegex.test(email);
  // };

  // // Check if password has Uppercaseletter
  // const strongPassword = (str) => {
  //   // eslint-disable-next-line no-useless-escape
  //   const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  //   const hasNum = '0123456789';

  //   let messages = [];

  //   // Loop through the str to check if there's atleast 1 Upper case letter
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === str[i].toUpperCase()) {
  //       messages.push('hasUpperLetter');
  //     }
  //     // Check if password has special character with this regex specialChar
  //     if (str[i].match(specialChar)) {
  //       messages.push('hasSpecialChar');
  //     }

  //     // Check if password has number
  //     if (hasNum.includes(str[i])) {
  //       messages.push('hasNum');
  //     }
  //   }

  //   setErrors({ errMessage: messages.join('') });
  //   return messages;
  // };

  // // Run check on password strength has user is typing out password
  // const checkPassword = (e) => {
  //   const password = e.target.value;
  //   if (password !== '') {
  //     strongPassword(password);
  //     setPasswordStrength(true);
  //   }

  //   if (password === ' ') {
  //     setPasswordStrength(false);
  //   }
  // };

  const handleCloseModal = () => {
    setPasswordStrength(false); // Close the modal
  };

  // // Validate input
  // const validateInput = ({
  //   companyName,
  //   email,
  //   password,
  //   confirmPass,
  //   checked,
  // }) => {
  //   if (
  //     companyName === '' ||
  //     email === '' ||
  //     password === '' ||
  //     confirmPass === ''
  //   ) {
  //     setErrors({ error: true, errMessage: 'empty' });
  //     return false;
  //   }
  //   if (password) {
  //     const weakPassword = strongPassword(password);
  //     if (
  //       !weakPassword.includes('hasNum') &&
  //       !weakPassword.includes('hasSpecialChar') &&
  //       !weakPassword.includes('hasUpperLetter')
  //     ) {
  //       setErrors({ error: true, errMessage: 'weakPassword' });
  //       return false;
  //     }
  //   }
  //   if (!checked) {
  //     setErrors({ error: true, errMessage: 'T&S' });
  //     return false;
  //   }
  //   if (confirmPass !== password) {
  //     setErrors({ error: true, errMessage: 'confirmpass' });
  //     return false;
  //   }

  //   if (email) {
  //     const isValidEmail = verifyEmail(email);
  //     isValidEmail
  //       ? setErrors({ error: false, errMessage: '' })
  //       : setErrors({ error: true, errMessage: 'email' });

  //     return isValidEmail || false;
  //   }

  //   setErrors({ error: false });

  //   return true;
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const validInput = validateInput(userData);

    // if the input isn't validated, return
    if (!validInput) {
      setLoading(false);
      return;
    }
  };

  return (
    <div
      className={` userSignup d-flex flex-column flex-md-row justify-content-between`}
    >
      <section className='d-flex flex-column aside py-3'>
        <header className='border-bottom py-3 px-4 mb-3'>
          <div className='col-2 '>
            <BrandLogo />
          </div>
        </header>
        <aside className='col-7 mx-auto'>
          <h2> Welcome back,</h2>
          <p>Welcome back! Please enter your details.</p>

          <form
            className={` form d-flex flex-column justify-content-between mt-3`}
          >
            <section className='mb-3'>
              <label htmlFor='Compnay Name' className='labelTitle'>
                {' '}
                Name
              </label>
              <div>
                <input
                  ref={inputRef}
                  type='text'
                  id='companyName'
                  name='Company Name'
                  onChange={handleChange}
                  defaultValue={userData.companyName}
                  placeholder=' Enter company name'
                  required
                  className={` formInput ${
                    errors.errMessage === 'empty' ? 'errors' : ''
                  } form-control `}
                />
              </div>
            </section>

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
                  placeholder='Enter your email'
                  onChange={handleChange}
                  defaultValue={userData.email}
                  className={` formInput ${
                    errors.errMessage === 'email' ||
                    errors.errMessage === 'empty'
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
              <div className='password'>
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
                    placeholder='Enter password'
                    onChange={(e) => {
                      handleChange(e);
                      checkPassword(e);
                    }}
                    defaultValue={userData.password}
                    onBlur={handleCloseModal}
                    className={` formInput ${
                      errors.errMessage === 'weakPassword' ||
                      errors.errMessage === 'empty'
                        ? 'errors'
                        : ''
                    }  form-control `}
                    required
                  />{' '}
                  <div
                    onClick={() => showPassword('password')}
                    className='icon'
                  >
                    {!passwordType['password'] ? (
                      <BsFillEyeSlashFill />
                    ) : (
                      <BsFillEyeFill />
                    )}
                  </div>
                </div>
                <small className='charLong'>
                  Must be at least 8 characters.
                </small>

                {errors.errMessage === 'weakPassword' && (
                  <span className='error_message'>
                    {' '}
                    Your password is weak, please use combination of Upper
                    letter number and special characters{' '}
                  </span>
                )}
              </div>

              {/* <div className='mt-3'>
                <label htmlFor='confirmPass' className='labelTitle'>
                  Re-enter Password
                </label>
                <div
                  className={`inputContainer d-flex flex-row align-items-center `}
                >
                  <input
                    ref={inputRef}
                    id='confirmPass'
                    type={!passwordType['confirmPass'] ? 'password' : 'text'}
                    name='password'
                    onChange={handleChange}
                    defaultValue={userData.confirmPass}
                    placeholder='Re-enter password'
                    className={`formInput  ${
                      errors.errMessage === 'confirmpass' ||
                      errors.errMessage === 'empty'
                        ? 'errors'
                        : ''
                    } form-control `}
                  />{' '}
                  <div
                    onClick={() => showPassword('confirmPass')}
                    className='icon'
                  >
                    {!passwordType['confirmPass'] ? (
                      <BsFillEyeSlashFill />
                    ) : (
                      <BsFillEyeFill />
                    )}
                  </div>
                </div>
                {errors.errMessage === 'confirmpass' ? (
                  <span className='error_message'>
                    {' '}
                    Your password do not match
                  </span>
                ) : (
                  ''
                )}
              </div> */}
              <div className='mt-2 d-flex flex-column justify-content-center'>
                <div>
                  <input
                    id='checked'
                    type='checkbox'
                    name='checked'
                    onChange={handleChange}
                    checked={userData.checked}
                  />
                  <small className='ms-2'>I am a property manager</small>
                  {/* <small className='ms-2'>
                    I agree with Emdo’s <strong>Terms of Service</strong> and{' '}
                    <strong>Privacy Policy</strong>
                  </small> */}
                </div>
                {errors.errMessage === 'T&S' && (
                  <span className='error_message'>
                    {' '}
                    Please check the box to agree to our Terms of service{' '}
                  </span>
                )}
              </div>
            </section>

            <div className=' col-12 text-center'>
              <button className='main-btn col-12 mt-2' onClick={handleSignUp}>
                {loading ? <Spinner /> : 'Sign Up'}
              </button>
              {errors.errMessage === 'empty' ? (
                <span className='error_message'>
                  {' '}
                  All field must be filled{' '}
                </span>
              ) : (
                !errors.errMessage.includes('hasUpperLetterhasUpper') && (
                  <span className='error_message'> {errors.errMessage} </span>
                )
              )}
            </div>
            <div className=' col-12 text-center mt-3'>
              <button className='outline-btn col-12 mt-1'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                      fill='#FFC107'
                    />
                    <path
                      d='M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z'
                      fill='#FF3D00'
                    />
                    <path
                      d='M12 22.0003C14.583 22.0003 16.93 21.0118 18.7045 19.4043L15.6095 16.7853C14.5718 17.5745 13.3038 18.0014 12 18.0003C9.39903 18.0003 7.19053 16.3418 6.35853 14.0273L3.09753 16.5398C4.75253 19.7783 8.11353 22.0003 12 22.0003Z'
                      fill='#4CAF50'
                    />
                    <path
                      d='M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                      fill='#1976D2'
                    />
                  </svg>
                </span>{' '}
                Continue with Google
              </button>
            </div>
            <p className='mt-2 '>
              Already have an account?
              <Link className='Login' to='/signin'>
                <strong> Login </strong>
              </Link>
            </p>
          </form>
        </aside>
      </section>
      <RightSide title='Get the right people to get your job done right' />
    </div>
  );
}

export default Signup;
