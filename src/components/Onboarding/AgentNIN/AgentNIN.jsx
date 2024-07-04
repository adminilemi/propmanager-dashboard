import React, { useState } from 'react';
import './AgentNIN.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ProfileImage from '../ProfileImage';
import {
  resetOnboardingState,
  selectAgentData,
} from '@/Redux/Features/onboardingSlice';
import {
  getAgentCoyName,
  getUserAvatar,
  selectUserData,
  updateIsOnboarded,
} from '@/Redux/Features/userAuthSlice';
import {
  useUpdateAgentMutation,
  useVerifyUserNINMutation,
} from '@/api/apiSlice';
import { Spinner } from 'react-bootstrap';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, selectUser } from '@/Redux/Features/userDatasSlice';
import ninf from '@/assets/ninf.png';
import ninb from '@/assets/ninb.png';
import ErrorMessage from '@/components/ErrorMessage';

const initialState = {
  NINNumber: '',
  FSOReferral: '',
  NINback: {
    name: '',
    url: '',
  },
  NINfront: {
    name: '',
    url: '',
  },
};

const AgentNIN = ({ onPrevious }) => {
  const { authUser } = useSelector(selectUserData);
  const { agentData } = useSelector(selectAgentData);

  const { user } = useSelector(selectUser);

  const { loading, setLoading, errors, setErrors, uploadFilesToServer } =
    useGlobalHooks();

  const dispatch = useDispatch();
  const { showAlert } = useSweetAlert();
  const navigate = useNavigate();

  const [verifyNIN, { isLoading: verifying }] = useVerifyUserNINMutation();
  const [updateAgentData, { isLoading }] = useUpdateAgentMutation();

  const [ninData, setNinData] = useState({ firstname: '', lastname: '' });

  const [propData, setPropData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
    setNinData((prev) => ({ ...prev, [id]: value }));
  };

  const uploadFiles = async (e, id) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];
    try {
      const result = await uploadFilesToServer(file);

      setPropData((prev) => ({
        ...prev,
        [id]: {
          name: result.original_filename,
          url: result.secure_url,
        },
      }));

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  const userData = {
    agentId: authUser.userId,
    ...agentData,
    ...propData,
    onBoarded: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (propData.NINfront.url === '') {
      setErrors({ error: true, errMessage: 'Upload NIN front image' });
      return;
    }

    if (propData.NINback.url === '') {
      setErrors({ error: true, errMessage: 'Upload NIN back image' });
      return;
    }

    setErrors({ error: false, errMessage: '' });

    const verifyNINData = {
      // firstname: user?.firstName,
      // lastname: user?.lastName,
      firstname: ninData?.firstname,
      lastname: ninData?.lastname,
      AgentId: user?._id,
      NINNumber: propData?.NINNumber,
    };

    try {
      const rsp = await verifyNIN(verifyNINData);
      console.log(rsp);

      if (rsp?.error) {
        setErrors({
          error: true,
          errMessage: 'Your NIN is incorrect, please enter a vliad NIN',
        });
      }

      if (rsp?.data?.data?.summary?.nin_check?.status === 'EXACT_MATCH') {
        // showAlert(rsp?.data?.message);
        try {
          const result = await updateAgentData(userData);
          console.log(result);

          if (result.data) {
            showAlert(result.data.message);

            dispatch(updateIsOnboarded(true));
            dispatch(getUserAvatar(result.data.data.profilePic));
            dispatch(getAgentCoyName(result.data.data.CompanyName));
            dispatch(getCurrentUser(result?.data?.data));
            dispatch(resetOnboardingState());
            navigate('/');
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='bg-white'>
      <div className='d-flex justify-content-end stepsNumber mb-3'>
        <h5>Step 4/4</h5>
      </div>
      <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
        <section className='d-flex flex-column justify-content-between '>
          <section className='d-flex flex-column flex-lg-row col-12 mb-5 justify-content-between'>
            <article className='col-12 col-lg-5 mb-5'>
              <p className='viewMore'> NIN Document Verification (Front)</p>

              <ProfileImage
                loading={loading}
                id='NINfront'
                images={propData.NINfront.url}
                error={errors.error}
                uploadFiles={uploadFiles}
                placeholderImage={ninf}
              />
            </article>
            <article className='col-12 col-lg-5 mb-5'>
              <p className='viewMore'> NIN Document Verification (Back)</p>

              <ProfileImage
                loading={loading}
                id='NINback'
                images={propData.NINback.url}
                error={errors.error}
                uploadFiles={uploadFiles}
                placeholderImage={ninb}
              />
            </article>
          </section>
          <article className='d-flex flex-column flex-md-row gap-2 justify-content-between'>
            <div className='inputWrapper'>
              <label htmlFor='NINNumber' className='labelTitle'>
                First name on your nin <em>*</em>
              </label>

              <input
                id='firstname'
                name='firstname'
                type='text'
                className='form-control col-10'
                placeholder='Enter nin number'
                defaultValue={ninData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className='inputWrapper'>
              <label htmlFor='NINNumber' className='labelTitle'>
                Last name on your nin <em>*</em>
              </label>

              <input
                id='lastname'
                name='lastname'
                type='text'
                className='form-control col-10'
                placeholder='Enter nin number'
                defaultValue={ninData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </article>
          <article className='d-flex flex-column flex-md-row gap-2 justify-content-between'>
            <div className='col-12'>
              <label htmlFor='NINNumber' className='labelTitle'>
                NIN Number <em>*</em>
              </label>

              <input
                id='NINNumber'
                name='NINNumber'
                type='tel'
                inputMode='numeric'
                pattern='[0-9]{1,11}'
                className={
                  errors?.error &&
                  errors?.errMessage.includes('Your NIN is incorrect')
                    ? 'errors form-control col-10'
                    : 'form-control col-10'
                }
                placeholder='Enter nin number'
                defaultValue={propData.NINNumber}
                onChange={handleChange}
                maxLength='11'
                required
              />
            </div>
          </article>
          <article className='d-flex flex-column flex-md-row gap-2 justify-content-between mt-5'>
            <div className='col-12'>
              <label htmlFor='FSOReferral' className='labelTitle'>
                Referral code (Optional)
              </label>

              <input
                id='FSOReferral'
                name='FSOReferral'
                type='text'
                className='form-control col-10'
                placeholder='Enter nin number'
                defaultValue={propData.FSOReferral}
                onChange={handleChange}
              />
            </div>
          </article>
        </section>
        <div className='d-flex flex-row justify-content-between mt-5'>
          <button className='outline-btn ' type='button' onClick={onPrevious}>
            Back
          </button>
          <button className='main-btn ' type='submit'>
            {isLoading || verifying ? <Spinner /> : 'Submit'}
          </button>
        </div>

        <div className='d-flex justify-content-center'>
          {errors.error && <ErrorMessage message={errors.errMessage} />}
        </div>
      </form>{' '}
    </section>
  );
};

export default AgentNIN;
