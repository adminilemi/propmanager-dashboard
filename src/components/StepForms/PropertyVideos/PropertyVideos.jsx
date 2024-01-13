import React, { useEffect, useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import VideoContainer from '@/components/Cloudinary/VideoContainer';
import { useSelector } from 'react-redux';
import {
  addVideos,
  resetState,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import { useCreatePropertyMutation } from '@/api/apiSlice';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
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
  const { errors, setErrors, loading, setLoading, uploadFilesToServer } =
    useGlobalHooks();
  const [createProp, { isLoading }] = useCreatePropertyMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState({
    title: Videos[0]?.title || '',
    url: Videos[0]?.url || '',
  });

  const uploadFiles = async (e, id) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];
    try {
      const result = await uploadFilesToServer(file);

      setVideoData((prev) => ({
        ...prev,

        title: result.original_filename,
        url: result.secure_url,
      }));

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  useEffect(() => {
    videoData.url !== '' && dispatch(addVideos([videoData]));
  }, [videoData.url]);

  const propData = {
    AgentId: authUser.userId,
    ...address,
    ...listingInfo,
    ExteriorImages,
    Amenities,
    InteriorImages,
    Videos: [videoData],
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const rsp = await createProp(propData);
      console.log(rsp);
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
    <main>
      {/* Exterior */}
      <section className='d-flex flex-column col-12'>
        <div className='sectHeader d-flex justify-content-between border-bottom pb-2 mb-3'>
          <h5>Video (Optional)</h5>
        </div>

        <section className='d-flex flex-column flex-md-row justify-content-between col-12'>
          <VideoContainer
            videoLink={videoData.url}
            cat='Video'
            id='productVideo'
            loading={loading}
            uploadFiles={uploadFiles}
          />
        </section>
      </section>
      <div className='d-flex flex-row justify-content-between mt-5'>
        <button onClick={onPrevious} type='button' className='outline-btn'>
          {' '}
          Back{' '}
        </button>
        <button
          id='submitData'
          type='button'
          onClick={handleDataSubmit}
          className='main-btn'
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </div>

      {errors.error && (
        <div className='bg-danger col-8 mx-auto rounded p-2 listLimit'>
          <h4 className='error_message text-light text-center'>
            {errors.errMessage}{' '}
            <Link to='/subscription' className='bg-warning rounded p-2 upgrade'>
              Upgrade Now
            </Link>{' '}
            to be able to list more
          </h4>
        </div>
      )}
    </main>
  );
};

export default PropertyVideos;
