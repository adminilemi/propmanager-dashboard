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
} from '@/Redux/Features/userAuthSlice';
import { useUpdateAgentMutation } from '@/api/apiSlice';
import { Spinner } from 'react-bootstrap';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/Redux/Features/userDatasSlice';

const initialState = {
  NINNumber: '',
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
  const { loading, setLoading, errors, setErrors, uploadFilesToServer } =
    useGlobalHooks();
  const dispatch = useDispatch();
  const { showAlert } = useSweetAlert();
  const navigate = useNavigate();
  const [updateAgentData, { isLoading }] = useUpdateAgentMutation();
  const [propData, setPropData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
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

  const userData = { agentId: authUser.userId, ...agentData, ...propData };

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

    try {
      const result = await updateAgentData(userData);
      console.log(result);

      if (result.data) {
        showAlert(result.data.message);

        dispatch(getUserAvatar(result.data.data.profilePic));
        dispatch(getAgentCoyName(result.data.data.CompanyName));
        dispatch(getCurrentUser(result?.data?.data));
        dispatch(resetOnboardingState());
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='mb-5 listingInfo' onSubmit={handleSubmit}>
      <section className='d-flex flex-column justify-content-between '>
        <section className='d-flex flex-column flex-lg-row col-12 mb-5 justify-content-between'>
          <article className='col-12 col-lg-5 mb-5'>
            <h4 className='viewMore'> NIN Document Verification (Front)</h4>

            <ProfileImage
              loading={loading}
              id='NINfront'
              images={propData.NINfront.url}
              error={errors.error}
              uploadFiles={uploadFiles}
            />
          </article>
          <article className='col-12 col-lg-5 mb-5'>
            <h4 className='viewMore'> NIN Document Verification (Back)</h4>

            <ProfileImage
              loading={loading}
              id='NINback'
              images={propData.NINback.url}
              error={errors.error}
              uploadFiles={uploadFiles}
            />
          </article>
        </section>
        <article className='d-flex flex-column flex-md-row gap-2 justify-content-between'>
          <div className='inputWrapper'>
            <label htmlFor='NINNumber' className='labelTitle'>
              NIN Number <em>*</em>
            </label>

            <input
              id='NINNumber'
              name='NINNumber'
              type='number'
              className='form-control col-10'
              placeholder='Enter nin number'
              defaultValue={propData.NINNumber}
              onChange={handleChange}
              required
            />
          </div>
        </article>
      </section>
      <div className='d-flex flex-row justify-content-between mt-5'>
        <button className='outline-btn ' type='button' onClick={onPrevious}>
          Back
        </button>
        <button className='main-btn ' type='submit'>
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </div>

      <div className='d-flex justify-content-center'>
        {errors.error && <p className='error_message'>{errors.errMessage}</p>}
      </div>
    </form>
  );
};

export default AgentNIN;
