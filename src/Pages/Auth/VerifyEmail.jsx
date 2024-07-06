import React, { useEffect, useRef, useState } from 'react';
import './Auths.scss';
import * as API from '@/api/apis';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../Redux/Features/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../Hooks/useSweetAlert';
import { useGlobalHooks } from '../../Hooks/globalHooks';
import RightSide from '@/components/RightSide';
import BrandLogo from '@/components/BrandLogo';
import Spinner from '@/spinner/Spinner';

const numInput = [
  { id: 1, name: 'num1' },
  { id: 2, name: 'num2' },
  { id: 3, name: 'num3' },
  { id: 4, name: 'num4' },
];

const VerifyEmail = () => {
  const { loading, setLoading, errors, setErrors } = useGlobalHooks();
  const [sendingCode, setSendingCode] = useState(false);
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
    setSendingCode(true);
    API.reSendOTPCode(authUser.userId)
      .then((res) => {
        const successMessage = {
          success: true,
          message: res.data.message,
        };
        showAlert(successMessage.message);
        setSendingCode(false);
      })
      .catch((err) => {
        const erroMessage = {
          success: false,
          message:
            err && err.response
              ? err.response.data.message
              : 'We encounter an error',
        };
        setSendingCode(false);
        setErrors({ error: true, errMessage: erroMessage.message });
      });
  };

  const clearInput = () => {
    setVerifyCode('');
  };

  // When delete is pressed it should delete backward and jump focus to current input
  const handleKeyPress = (e, index) => {
    // Detect if backspace or delete key is clicked, if yes and the current input value is empty, jump backward to next one if available
    if (e.key === 'Backspace' && !e.currentTarget?.value && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

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

        API.verifyEmail({
          userId: authUser.userId,
          uniqueVerificationCode: verificationCode,
        })
          .then((res) => {
            const successMessage = {
              success: true,
              message: res.data.message,
            };

            showAlert(successMessage.message);

            setLoading(false);
            return navigate('/onboarding');
          })
          .catch((err) => {
            console.log(err);
            const erroMessage = {
              success: false,
              message:
                err && err.response
                  ? err.response.data.message
                  : 'We encounter an error',
            };
            setErrors({ error: true, errMessage: erroMessage.message });
            setLoading(false);
          });
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

  const handleVerifyEmail = (e) => {
    e.preventDefault();

    const verificationCode = `${verifyCode.num1}${verifyCode.num2}${verifyCode.num3}${verifyCode.num4}`;
    setLoading(true);

    API.verifyEmail({
      userId: authUser.userId,
      uniqueVerificationCode: verificationCode,
    })
      .then((res) => {
        const successMessage = {
          success: true,
          message: res.data.message,
        };

        showAlert(successMessage.message);

        setLoading(false);
        return navigate('/onboarding');
      })
      .catch((err) => {
        console.log(err);
        const erroMessage = {
          success: false,
          message:
            err && err.response
              ? err.response.data.message
              : 'We encounter an error',
        };
        setErrors({ error: true, errMessage: erroMessage.message });
        setLoading(false);
      });
  };

  // console.log(errors);

  return (
    <div className={` email flex flex-col md:flex-row justify-between`}>
      <section className='flex flex-col aside'>
        <header className='border-bottom py-2 px-2 px-lg-5 mb-3 container'>
          <div className='col-2 py-2 '>
            <BrandLogo />
          </div>
        </header>
        <aside className='container px-2 px-lg-5'>
          <section className='w-11/12 lg:8 '>
            <form
              className={` form flex flex-col justify-center text-start w-full md:2`}
              onSubmit={handleVerifyEmail}
            >
              <h2>Verify your email</h2>
              <p className='mt-2'>
                Enter the verification code sent to {authUser.userEmail}{' '}
              </p>
              <div
                className={` inputContainer flex flex-row mx-auto w-full gap-2 mt-3 `}
              >
                {numInput.map(({ id, name }, idx) => (
                  <div className='numInp ' key={id}>
                    <input
                      ref={inputRefs.current[idx]}
                      id={id}
                      type='text'
                      name={name}
                      onChange={(e) => handleChange(e, idx)}
                      onKeyDown={(e) => handleKeyPress(e, idx)}
                      maxLength={1}
                      defaultValue={verifyCode[name]}
                      className={`${
                        errors.error &&
                        'errors animate__animated  animate__shakeY'
                      }  text-center form-control py-4`}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className=' w-full text-center'>
                <button className='main-btn w-full mt-3' type='submit'>
                  {loading ? 'Validating...' : 'Validate'}
                </button>

                {errors.error && (
                  <span className='error_message mt-3'>
                    {' '}
                    {errors.errMessage}{' '}
                  </span>
                )}
              </div>
            </form>

            <button className='mt-3'>
              <small onClick={handleReSendOTP}>
                Didn&apos;t get code? <strong>Resend</strong>
              </small>
            </button>

            {sendingCode && <Spinner />}
          </section>
        </aside>
      </section>
      <RightSide title='Fast and Reliable jobs to get you hired immediately' />
    </div>
  );
};

export default VerifyEmail;
