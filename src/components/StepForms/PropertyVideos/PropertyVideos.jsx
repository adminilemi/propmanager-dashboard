import React, { useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useSelector } from 'react-redux';
import {
  resetState,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import { useCreatePropertyMutation } from '@/api/apiSlice';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useDispatch } from 'react-redux';
import Spinner from '@/spinner/Spinner';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { Link, useNavigate } from 'react-router-dom';

const PropertyVideos = ({ onPrevious }) => {
  const { showAlert } = useSweetAlert();
  const {
    address,
    listingInfo,
    ExteriorImages,
    Amenities,
    InteriorImages,
    Videos,
  } = useSelector(selectProperty);
  const { authUser } = useSelector(selectUserData);
  const { errors, setErrors } = useGlobalHooks();
  const [createProp, { isLoading }] = useCreatePropertyMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState({
    YoutubeVideo: '',
    instagramVideo: Videos[0]?.url || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prev) => ({ ...prev, [name]: value }));
  };

  const propData = {
    AgentId: authUser.userId,
    ...address,
    ...listingInfo,
    ExteriorImages,
    Amenities,
    InteriorImages,
    ...videoData,
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    console.log(propData);

    try {
      const rsp = await createProp(propData);

      if (rsp.data) {
        showAlert('Property created successfully');
        dispatch(resetState());
        navigate('/listings');
      } else if (rsp.error) {
        setErrors({
          error: true,
          errMessage: rsp.error.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleDataSubmit}>
      {/* Exterior */}
      <section className='flex flex-col w-full'>
        <div className='sectHeader flex justify-between border-bottom pb-2 mb-3'>
          <h5 className='font-bold'>Video (Optional)</h5>
        </div>

        <ul className='flex flex-wrap gap-4 justify-between w-full card p-4'>
          <li className='w-full'>
            <label htmlFor='YoutubeVideo' className='labelTitle'>
              Youtube Video
            </label>

            <input
              id='YoutubeVideo'
              name='YoutubeVideo'
              type='url'
              className='form-control !bg-transparent'
              placeholder='Link to your youtube video'
              defaultValue={videoData.YoutubeVideo}
              onChange={handleChange}
              required
            />
          </li>
          <li className='w-full'>
            <label htmlFor='instagramVideo' className='labelTitle'>
              Instagram Video
            </label>

            <input
              id='instagramVideo'
              name='instagramVideo'
              type='url'
              placeholder='Link to your instagram video'
              className='form-control !bg-transparent'
              defaultValue={videoData.instagramVideo}
              onChange={handleChange}
              required
            />
          </li>
        </ul>
      </section>

      <section className='flex flex-row justify-end gap-3 mt-5'>
        <button
          onClick={onPrevious}
          className='outline-btn bg-[#F7F7FD] !text-mainColor !border-0'
          type='button'
        >
          Previous{' '}
        </button>
        <button
          id='submitData'
          type='submit'
          // onClick={handleDataSubmit}
          className='main-btn'
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </section>

      {errors.error && (
        <div className='bg-danger w-8/12 mx-auto rounded p-2 listLimit'>
          <h4 className='error_message text-light text-center'>
            {errors.errMessage}{' '}
            <Link to='/subscription' className='bg-warning rounded p-2 upgrade'>
              Upgrade Now
            </Link>{' '}
            to be able to list more
          </h4>
        </div>
      )}
    </form>
  );
};

export default PropertyVideos;
