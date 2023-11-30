import React, { useEffect, useRef, useState } from 'react';
import './Auths.scss';
// import * as API from '../../api/apis';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../Redux/Features/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../Hooks/useSweetAlert';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import { Spinner } from 'react-bootstrap';
import RightSide from '@/components/RightSide';
import BrandLogo from '@/components/BrandLogo';

const numInput = [
  { id: 1, name: 'num1' },
  { id: 2, name: 'num2' },
  { id: 3, name: 'num3' },
  { id: 4, name: 'num4' },
];

function VerifyEmail() {
  const { loading, setLoading, errors, setErrors } = useGlobalHooks();

  const { showAlert } = useSweetAlert();

  const navigate = useNavigate();

  const { authUser } = useSelector(selectUserData);

  const [verifyCode, setVerifyCode] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });

  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setVerifyCode({ ...verifyCode, [`num${index + 1}`]: value });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleReSendOTP = () => {
    // API.reSendOTPCode(authUser.userId)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.data.message,
    //     };
    //     console.log(successMessage);
    //   })
    //   .catch((err) => {
    //     const erroMessage = {
    //       success: false,
    //       message:
    //         err && err.response
    //           ? err.response.data.message
    //           : 'We encounter an error',
    //     };
    //     setErrors({ error: true, errMessage: erroMessage.message });
    //   });
  };

  const clearInput = () => {
    setVerifyCode('');
  };

  useEffect(() => {
    if (loading) {
      setErrors({ error: false, errMessage: '' });
      // when the code failed, it keep retrying, so this was a temp fix
      clearInput();
    }

    const handleVerifyEmail = () => {
      if (
        verifyCode.num1 &&
        verifyCode.num2 &&
        verifyCode.num3 &&
        verifyCode.num4
      ) {
        const verificationCode = `${verifyCode.num1}${verifyCode.num2}${verifyCode.num3}${verifyCode.num4}`;
        setLoading(true);

        // API.verifyEmail({
        //   userId: authUser.userId,
        //   uniqueVerificationCode: verificationCode,
        // })
        //   .then((res) => {
        //     const successMessage = {
        //       success: true,
        //       message: res.data.message,
        //     };

        //     showAlert(successMessage.message);

        //     setLoading(false);
        //     return navigate('/onboarding');
        //   })
        //   .catch((err) => {
        //     const erroMessage = {
        //       success: false,
        //       message:
        //         err && err.response
        //           ? err.response.data.message
        //           : 'We encounter an error',
        //     };
        //     setErrors({ error: true, errMessage: erroMessage.message });
        //     setLoading(false);
        //   });
      }
    };

    handleVerifyEmail();
  }, [
    verifyCode,
    showAlert,
    authUser.userId,
    navigate,
    setLoading,
    setErrors,
    loading,
  ]);

  // console.log(errors);

  return (
    <div
      className={` email d-flex flex-column flex-md-row justify-content-between`}
    >
      <aside className='d-flex flex-column justify-content-between '>
        <div className='col-3'>
          <BrandLogo />
        </div>

        <form
          className={` form d-flex flex-column justify-content-center align-items-center text-center mx-auto`}
        >
          <div className='mailIcon'>
            {/* <MdEmail className='mailIcon' /> */}
            <svg
              width='107'
              height='107'
              viewBox='0 0 107 107'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M75.5249 13.375C81.5035 13.375 87.2548 15.7379 91.4857 19.9778C95.7212 24.2087 98.0885 29.9154 98.0885 35.8896V71.1104C98.0885 83.5492 87.9681 93.625 75.5249 93.625H31.481C19.0378 93.625 8.92188 83.5492 8.92188 71.1104V35.8896C8.92188 23.4508 18.9932 13.375 31.481 13.375H75.5249ZM82.6118 42.532L82.9685 42.1753C84.034 40.8824 84.034 39.0099 82.9194 37.717C82.2997 37.0527 81.4482 36.647 80.561 36.5578C79.6247 36.5088 78.733 36.8253 78.0598 37.4495L57.9572 53.4995C55.3714 55.6439 51.6665 55.6439 49.0405 53.4995L28.978 37.4495C27.5915 36.424 25.6744 36.5578 24.5197 37.7615C23.3159 38.9653 23.1822 40.8824 24.2032 42.2199L24.7872 42.7995L45.0726 58.6265C47.5693 60.5882 50.5965 61.6582 53.7664 61.6582C56.9273 61.6582 60.008 60.5882 62.5002 58.6265L82.6118 42.532Z'
              />
            </svg>
          </div>
          <h2>Verify your email</h2>
          <p className='mt-2'>
            {' '}
            To verify your email we’ve sent a code to {authUser.userEmail}.
            Enter the code to continue
          </p>
          <div
            className={` inputContainer d-flex flex-row mx-auto col-4 gap-2 mt-3`}
          >
            {numInput.map(({ id, name }, idx) => (
              <div className='numInp' key={id}>
                <input
                  ref={inputRefs.current[idx]}
                  id={id}
                  type='text'
                  name={name}
                  onChange={(e) => handleChange(e, idx)}
                  maxLength='1'
                  defaultValue={verifyCode[name]}
                  className='formInput form-control '
                />
              </div>
            ))}
          </div>
          {errors.error && (
            <span className='error_message mt-3'> {errors.errMessage} </span>
          )}
        </form>

        {loading && <Spinner />}

        <small onClick={handleReSendOTP} className='text-center noCode'>
          Didn’t receive a code?
        </small>
      </aside>
      <RightSide title='Fast and Reliable jobs to get you hired immediately' />
    </div>
  );
}

export default VerifyEmail;
