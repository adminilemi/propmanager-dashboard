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
import { diamond, free, gold, platinum, silver } from '@/components/AllData';
import { Link } from 'react-router-dom';
import ErrorMessage from '@/components/ErrorMessage';

const PropertyImages = ({ onPrevious, onNext }) => {
  const { InteriorImages } = useSelector(selectProperty);
  const { errors, handleError, uploadFilesToServer } = useGlobalHooks();
  const [loading, setLoading] = useState(false);
  const toggle = useSelector(selectGlobal);
  const planData = useSelector(selectSubPlan);
  const dispatch = useDispatch();

  let fromReduxStor = InteriorImages.length > 0 && InteriorImages;

  const [imageData, setImageData] = useState({ Interior: [] });
  const [uploadMessage, setUploadMessage] = useState({ title: '' });

  console.log(free);

  // create a lookup object
  const planLimits = {
    SILVER: { limit: '4', image: silver },
    GOLD: { limit: '8', image: gold },
    PLATINUM: { limit: '12', image: platinum },
    DIAMOND: { limit: '', image: diamond },
    FREE: { limit: '2', image: free },
  };

  useEffect(() => {
    const subName = planData?.planName || 'FREE';
    const subLimit = planLimits[subName];

    setImageData({ Interior: fromReduxStor || subLimit?.image });
    setUploadMessage({
      title: subLimit?.limit ? (
        <small className='messageUpload'>
          You can only upload {subLimit?.limit} images for this package,{' '}
          <Link to='/subscription' className='upgrade'>
            Upgrade Now
          </Link>{' '}
          to upload more.{' '}
        </small>
      ) : null,
    });
  }, [planData]);

  // useEffect(() => {
  //   if (planData.planName === 'SILVER') {
  //     setImageData({ Interior: fromReduxStor || silver });
  //     setUploadMessage({
  //       title: (
  //         <small className='messageUpload'>
  //           You can only upload 4 images for this package,{' '}
  //           <Link to='/subscription' className='upgrade'>
  //             Upgrade Now
  //           </Link>{' '}
  //           to upload more.{' '}
  //         </small>
  //       ),
  //     });
  //   } else if (planData.planName === 'GOLD') {
  //     setImageData({ Interior: fromReduxStor || gold });
  //     setUploadMessage({
  //       title: (
  //         <small className='messageUpload'>
  //           You can only upload 8 images for this package,{' '}
  //           <Link to='/subscription' className='upgrade'>
  //             Upgrade Now
  //           </Link>{' '}
  //           to upload more{' '}
  //         </small>
  //       ),
  //     });
  //   } else if (planData.planName === 'PLATINUM') {
  //     setImageData({ Interior: fromReduxStor || platinum });
  //     setUploadMessage({
  //       title: (
  //         <small className='messageUpload'>
  //           You can only upload 12 images for this package,{' '}
  //           <Link to='/subscription' className='upgrade'>
  //             Upgrade Now
  //           </Link>{' '}
  //           to upload more.{' '}
  //         </small>
  //       ),
  //     });
  //   } else if (planData.planName === 'DIAMOND') {
  //     setImageData({ Interior: fromReduxStor || diamond });
  //     setUploadMessage({ title: '' });
  //   } else {
  //     setImageData({ Interior: fromReduxStor || free });
  //     setUploadMessage({
  //       title: (
  //         <small className='messageUpload'>
  //           You can only upload 5 images for this package,{' '}
  //           <Link to='/subscription' className='upgrade'>
  //             Upgrade Now
  //           </Link>{' '}
  //           to upload more.{' '}
  //         </small>
  //       ),
  //     });
  //   }
  // }, [planData]);

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

    if (Object.keys(planLimits).includes(planData?.planName || 'FREE')) {
      for (let i = 0; i < imageData.Interior.length; i++) {
        if (imageData.Interior[i].url === '') {
          console.log(imageData.Interior[i].url);
          handleError(true, 'Please upload all Images');
          return;
        }
      }
    }

    handleError(false, '');

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

  useEffect(() => {
    if (errors.error) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [errors.error]);

  return (
    <main className='productUpload w-full'>
      {/* Interior */}
      <section className='flex flex-col w-full mt-5'>
        <div className='sectHeader flex justify-between border-bottom pb-2 mb-3'>
          <h4>Upload Images</h4>

          {uploadMessage.title !== '' && <div>{uploadMessage.title}</div>}
        </div>

        {!toggle['Interior'] && (
          <section className='flex flex-wrap gap-2 justify-between w-full'>
            {imageData?.Interior?.map(({ name, url }) => (
              <ImageContainer
                key={name}
                images={url}
                cat='Interior'
                id={name}
                loading={loading}
                uploadFiles={uploadFiles}
                removeImage={handleRmoveImage}
                error={errors.error}
              />
            ))}
          </section>
        )}
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
          id='submitIt'
          type='button'
          onClick={handleDataSubmit}
          className='main-btn'
        >
          Next
          {/* {loading['submitIt'] ? <Spinner /> : 'Submit'} */}
        </button>
      </section>
      <div className='flex justify-center mt-5'>
        {errors.error && <ErrorMessage message={errors.errMessage} />}
      </div>
    </main>
  );
};

export default PropertyImages;
