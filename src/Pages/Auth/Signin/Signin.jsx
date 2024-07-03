import { useRef, useState } from 'react';
import './Signin.scss';
import { useSweetAlert } from '../../../Hooks/useSweetAlert';
import {
  BsFillEyeSlashFill,
  BsFillEyeFill,
  // BsArrowLeft,
  // BsGoogle,
} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BrandLogo from '@/components/BrandLogo';
import { Spinner } from 'react-bootstrap';
import * as API from '@/api/apis';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useCookies } from '@/Hooks/cookiesHook';
import RightSide from '@/components/RightSide';
import { getUserAvatar, userAuthData } from '@/Redux/Features/userAuthSlice';
import { useAuthHook } from '@/Hooks/authHook';
import { getCurrentUser } from '@/Redux/Features/userDatasSlice';

function Signin() {
  const [passwordType, setPasswordType] = useState(false);
  const { loading, setLoading, errors, setErrors } = useGlobalHooks();
  const [userData, setUserData] = useState({ email: '', password: '' });

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { setCookies } = useCookies();
  const dispatch = useDispatch();
  const { showAlert } = useSweetAlert();
  const { setSession } = useAuthHook();

  const showPassword = (id) => {
    setPasswordType((prev) => ({ ...passwordType, [id]: !prev[id] }));
  };

  // get the form input data
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    API.SignIn(userData)
      .then((res) => {
        const successMessage = {
          success: true,
          message: res.data.message,
        };

        const userToken = res.data.data.token;
        const userId = res.data.data.user._id;
        const userEmail = res.data.data.user.email;
        const userName = res.data.data.user.CompanyName;
        const profileImage = res.data.data.user.profilePic;

        showAlert(successMessage.message);

        setCookies('ilemiUserToken', userToken);

        dispatch(getUserAvatar(profileImage));
        dispatch(userAuthData({ userId, userEmail, userName }));
        dispatch(getCurrentUser(res.data.data.user));

        setLoading(false);
        setSession();
        navigate('/');
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

        setErrors({ error: true, errMessage: erroMessage.message });
      });
  };

  return (
    <div
      className={` SignIn d-flex flex-column flex-md-row justify-content-between`}
    >
      <section className='d-flex flex-column aside'>
        <header className='border-bottom py-3 px-4 mb-3'>
          <div className='col-2 '>
            <BrandLogo />
          </div>
        </header>
        <aside className='col-7 mx-auto'>
          <h2> Welcome back,</h2>
          <p>Welcome back! Please enter your details.</p>
          <form
            className={` form d-flex flex-column justify-content-between mt-5`}
            onSubmit={handleSignIn}
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
                  className={` formInput  form-control `}
                  required
                />
              </div>
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
                    className={` formInput  form-control `}
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
              </div>
              <div className='forgot text-end mt-2'>
                <Link to='/resetpasswordrequest'>Forgot Password</Link>
              </div>
            </section>

            <div className=' col-12 text-center'>
              <button className='main-btn col-12 mt-1' type='submit'>
                {loading ? <Spinner /> : 'Log In'}
              </button>

              <span className='error_message'> {errors.errMessage} </span>
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
            <p className='mt-3 text-center'>
              Don&apos;t have an account?
              <Link className='Login' to='/signup'>
                <strong> Sign up for free </strong>
              </Link>
            </p>
          </form>
        </aside>
      </section>
      <RightSide />
    </div>
  );
}

export default Signin;
