import React, { useEffect, useState } from 'react';
import './PropertyImages.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import {
  addExteriorImages,
  addInteriorImages,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { selectSubPlan } from '@/Redux/Features/userDatasSlice';
import { free, gold, platinum, silver } from '@/components/AllData';
import { Link } from 'react-router-dom';

const PropertyImages = ({ onPrevious, onNext }) => {
  const { InteriorImages } = useSelector(selectProperty);
  const { errors, setErrors, uploadFilesToServer } = useGlobalHooks();
  const [loading, setLoading] = useState(false);
  const toggle = useSelector(selectGlobal);
  const planData = useSelector(selectSubPlan);
  const dispatch = useDispatch();

  let fromReduxStor = InteriorImages.length > 0 && InteriorImages;

  const [imageData, setImageData] = useState({ Interior: [] });
  const [uploadMessage, setUploadMessage] = useState({ title: '' });

  console.log(planData);
  useEffect(() => {
    if (planData.planName === 'SILVER') {
      setImageData({ Interior: fromReduxStor || silver });
      setUploadMessage({
        title: (
          <small className='messageUpload'>
            You can only upload 4 images for this package,{' '}
            <Link to='/subscription' className='upgrade'>
              Upgrade Now
            </Link>{' '}
            to upload more.{' '}
          </small>
        ),
      });
    } else if (planData.planName === 'GOLD') {
      setImageData({ Interior: fromReduxStor || gold });
      setUploadMessage({
        title: (
          <small className='messageUpload'>
            You can only upload 8 images for this package,{' '}
            <Link to='/subscription' className='upgrade'>
              Upgrade Now
            </Link>{' '}
            to upload more{' '}
          </small>
        ),
      });
    } else if (planData.planName === 'PLATINUM') {
      setImageData({ Interior: fromReduxStor || platinum });
      setUploadMessage({ title: '' });
    } else {
      setImageData({ Interior: fromReduxStor || free });
      setUploadMessage({
        title: (
          <small className='messageUpload'>
            You can only upload 1 image for this package,{' '}
            <Link to='/subscription' className='upgrade'>
              Upgrade Now
            </Link>{' '}
            to upload more.{' '}
          </small>
        ),
      });
    }
  }, [planData]);

  const uploadFiles = async (e, id, cat) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];
    try {
      const result = await uploadFilesToServer(file);

      setImageData((prev) => {
        const updatedCategory = prev[cat].map((item) =>
          item.name === id
            ? {
                name: id,
                title: result.original_filename,
                url: result.secure_url,
              }
            : item,
        );

        if (updatedCategory.some((item) => item.name === id)) {
          // If the object with the given id exists, update the state
          return { ...prev, [cat]: updatedCategory };
        }
      });

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    if (
      planData.planName === 'BASIC' ||
      planData.planName === 'SILVER' ||
      planData.planName === 'GOLD' ||
      planData.planName === 'PLATINUM'
    ) {
      for (let i = 0; i < imageData.Interior.length; i++) {
        if (imageData.Interior[i].url === '') {
          console.log(imageData.Interior[i].url);
          setErrors({
            error: true,
            errMessage: 'Please upload all Images',
          });
          return;
        }
      }
    }

    setErrors({ error: false, errMessage: '' });

    dispatch(addExteriorImages(imageData.Exterior));
    dispatch(addInteriorImages(imageData.Interior));

    onNext();
  };

  const handleRmoveImage = (id, cat) => {
    if (id) {
      setImageData((prev) => {
        const toUpdate = prev[cat].map((item) =>
          item.name === id
            ? {
                name: id,
                title: '',
                url: '',
              }
            : item,
        );

        return { ...prev, [cat]: toUpdate };
      });
    }
  };

  return (
    <main className='productUpload col-12'>
      {/* Interior */}
      <section className='d-flex flex-column col-12 mt-5'>
        <div className='sectHeader d-flex justify-content-between border-bottom pb-2 mb-3'>
          <h4>Upload Images</h4>

          {uploadMessage.title !== '' && <div>{uploadMessage.title}</div>}
        </div>

        {!toggle['Interior'] && (
          <section className='d-flex flex-wrap gap-2 justify-content-between col-12'>
            {imageData.Interior.map(({ name, url }) => (
              <ImageContainer
                key={name}
                images={url}
                cat='Interior'
                id={name}
                loading={loading}
                uploadFiles={uploadFiles}
                removeImage={handleRmoveImage}
              />
            ))}
          </section>
        )}
      </section>

      <div className='d-flex flex-row justify-content-between mt-5'>
        <button onClick={onPrevious} type='button' className='outline-btn'>
          {' '}
          Back{' '}
        </button>
        <button
          id='submitIt'
          type='button'
          onClick={handleDataSubmit}
          className='main-btn'
        >
          Next
          {/* {loading['submitIt'] ? <Spinner /> : 'Submit'} */}
        </button>
      </div>
      <div className='d-flex justify-content-center'>
        {errors.error && <p className='error_message'>{errors.errMessage}</p>}
      </div>
    </main>
  );
};

export default PropertyImages;
