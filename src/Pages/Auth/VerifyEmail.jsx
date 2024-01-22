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
import { Spinner } from 'react-bootstrap';

const numInput = [
  { id: 1, name: 'num1' },
  { id: 2, name: 'num2' },
  { id: 3, name: 'num3' },
  { id: 4, name: 'num4' },
];

function VerifyEmail() {
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
    <div
      className={` email d-flex flex-column flex-md-row justify-content-between`}
    >
      <section className='d-flex flex-column aside py-3'>
        <header className='border-bottom py-3 px-4 mb-3'>
          <div className='col-2 '>
            <BrandLogo />
          </div>
        </header>
        <aside className='col-10 col-md-6 mx-auto mt-5'>
          <form
            className={` form d-flex flex-column justify-content-center text-start `}
            onSubmit={handleVerifyEmail}
          >
            <h2>Verify your email</h2>
            <p className='mt-2'>
              Enter the verification code sent to {authUser.userEmail}{' '}
            </p>
            <div
              className={` inputContainer d-flex flex-row mx-auto col-12 gap-2 mt-3 `}
            >
              {numInput.map(({ id, name }, idx) => (
                <div className='numInp ' key={id}>
                  <input
                    ref={inputRefs.current[idx]}
                    id={id}
                    type='text'
                    name={name}
                    onChange={(e) => handleChange(e, idx)}
                    maxLength='1'
                    defaultValue={verifyCode[name]}
                    className='text-center form-control py-4'
                    required
                  />
                </div>
              ))}
            </div>

            <div className=' col-12 text-center'>
              <button className='main-btn col-12 mt-3' type='submit'>
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

          <div className='mt-3'>
            <small onClick={handleReSendOTP}>
              Didn&apos;t get code? <strong>Resend</strong>
            </small>
          </div>

          {sendingCode && <Spinner />}
        </aside>
      </section>
      <RightSide title='Fast and Reliable jobs to get you hired immediately' />
    </div>
  );
}

export default VerifyEmail;
