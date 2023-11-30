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
  // const [errors, setErrors] = useState({ error: false, errMessage: '' });
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
  // const handleChange = (e) => {
  //   if (e.target.type === 'checkbox') {
  //     setUserData({ ...userData, [e.target.id]: e.target.checked });
  //   } else {
  //     setUserData({ ...userData, [e.target.id]: e.target.value });
  //   }
  // };

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

  // const handleCloseModal = () => {
  //   setPasswordStrength(false); // Close the modal
  // };

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
    const validInput = validateInput(userData);

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
      <aside className=''>
        <div className='col-3 mb-3'>
          <BrandLogo />
        </div>
        <h2>Create an Employer Account</h2>

        <form
          className={` form d-flex flex-column justify-content-between mt-3`}
        >
          <section className='mb-3'>
            <label htmlFor='Compnay Name' className='labelTitle'>
              {' '}
              Company Name
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
                <div onClick={() => showPassword('password')} className='icon'>
                  {!passwordType['password'] ? (
                    <BsFillEyeSlashFill />
                  ) : (
                    <BsFillEyeFill />
                  )}
                </div>
              </div>

              {errors.errMessage === 'weakPassword' && (
                <span className='error_message'>
                  {' '}
                  Your password is weak, please use combination of Upper letter
                  number and special characters{' '}
                </span>
              )}
            </div>

            <div className='mt-3'>
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
            </div>
            <div className='mt-2 d-flex flex-column justify-content-center'>
              <div>
                <input
                  id='checked'
                  type='checkbox'
                  name='checked'
                  onChange={handleChange}
                  checked={userData.checked}
                />
                <small className='ms-2'>
                  I agree with Emdo’s <strong>Terms of Service</strong> and{' '}
                  <strong>Privacy Policy</strong>
                </small>
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
            <button className='auth-btn col-12 mt-2' onClick={handleSignUp}>
              {loading ? <Spinner /> : 'Sign Up'}
            </button>
            {errors.errMessage === 'empty' ? (
              <span className='error_message'> All field must be filled </span>
            ) : (
              !errors.errMessage.includes('hasUpperLetterhasUpper') && (
                <span className='error_message'> {errors.errMessage} </span>
              )
            )}
          </div>
          <p className='mt-2 '>
            Already have an account?
            <Link className='Login' to='/signin'>
              <strong> Login </strong>
            </Link>
          </p>
        </form>
      </aside>
      <RightSide title='Get the right people to get your job done right' />
    </div>
  );
}

export default Signup;
