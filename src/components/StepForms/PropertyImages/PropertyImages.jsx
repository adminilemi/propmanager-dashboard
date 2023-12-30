import React, { useState } from 'react';
import './PropertyImages.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import {
  addExteriorImages,
  addInteriorImages,
  selectProperty,
} from '@/Redux/Features/createPropertySlice';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { selectGlobal } from '@/Redux/Features/globalSlice';

const PropertyImages = ({ onPrevious, onNext }) => {
  const { ExteriorImages, InteriorImages } = useSelector(selectProperty);
  const { errors, setErrors, uploadFilesToServer, handleShow } =
    useGlobalHooks();
  const [loading, setLoading] = useState(false);
  const toggle = useSelector(selectGlobal);
  const dispatch = useDispatch();

  const [imageData, setImageData] = useState({
    Exterior: ExteriorImages || [],
    Interior: InteriorImages || [],
  });

  // console.log(ExteriorImages);
  // console.log(InteriorImages);

  const uploadFiles = async (e, id, cat) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];
    try {
      const result = await uploadFilesToServer(file);
      console.log(result);

      setImageData((prev) => ({
        ...prev,
        [cat]: [
          ...prev[cat],
          {
            title: result.original_filename,
            url: result.secure_url,
          },
        ],
      }));

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  console.log(imageData);

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    if (imageData.Exterior.length < 2) {
      setErrors({
        error: true,
        errMessage: 'Please upload all Exterior images',
      });
      return;
    }
    if (imageData.Interior.length < 6) {
      setErrors({
        error: true,
        errMessage: 'Please upload all Interior images',
      });
      return;
    }

    setErrors({ error: false, errMessage: '' });

    dispatch(addExteriorImages(imageData.Exterior));
    dispatch(addInteriorImages(imageData.Interior));

    onNext();
  };

  console.log(errors);

  return (
    <main className='productUpload col-12'>
      {/* Exterior */}
      <section className='d-flex flex-column col-12'>
        <div className='sectHeader d-flex justify-content-between border-bottom pb-2 mb-3'>
          <h5>Exterior (Front of the property)</h5>
          <h5 id='togg' onClick={() => handleShow('togg')}>
            {!toggle['togg'] ? (
              <FaChevronUp className='Icons' />
            ) : (
              <FaChevronDown className='Icons' />
            )}
          </h5>
        </div>

        {!toggle['togg'] && (
          <section className='d-flex flex-column flex-md-row justify-content-between col-12'>
            <ImageContainer
              images={
                imageData.Exterior.length > 0 ? imageData.Exterior[0].url : ''
              }
              cat='Exterior'
              id='front1'
              loading={loading}
              uploadFiles={uploadFiles}
            />
            <ImageContainer
              images={
                imageData.Exterior.length > 1 ? imageData.Exterior[1].url : ''
              }
              cat='Exterior'
              id='front2'
              loading={loading}
              uploadFiles={uploadFiles}
            />
          </section>
        )}
      </section>

      {/* Interior */}
      <section className='d-flex flex-column col-12 mt-5'>
        <div className='sectHeader d-flex justify-content-between border-bottom pb-2 mb-3'>
          <h5>Interior Images</h5>
          <h5 id='Interior' onClick={() => handleShow('Interior')}>
            {!toggle['Interior'] ? (
              <FaChevronUp className='Icons' />
            ) : (
              <FaChevronDown className='Icons' />
            )}
          </h5>
        </div>

        {!toggle['Interior'] && (
          <section className='d-flex flex-wrap gap-2 justify-content-between col-12'>
            <ImageContainer
              images={
                imageData.Interior.length > 0 ? imageData.Interior[0].url : ''
              }
              cat='Interior'
              id='LivingRoom'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Living room *'
            />
            <ImageContainer
              images={
                imageData.Interior.length > 1 ? imageData.Interior[1].url : ''
              }
              cat='Interior'
              id='Bedroom1'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Bed room *'
            />
            <ImageContainer
              images={
                imageData.Interior.length > 2 ? imageData.Interior[2].url : ''
              }
              cat='Interior'
              id='Bedroom2'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Bed room 2 *'
            />
            <ImageContainer
              images={
                imageData.Interior.length > 3 ? imageData.Interior[3].url : ''
              }
              cat='Interior'
              id='Bedroom3'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Bed room 3 *'
            />
            <ImageContainer
              images={
                imageData.Interior.length > 4 ? imageData.Interior[4].url : ''
              }
              cat='Interior'
              id='Kitchen'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Kitchen *'
            />
            <ImageContainer
              images={
                imageData.Interior.length > 5 ? imageData.Interior[5].url : ''
              }
              cat='Interior'
              id='Bathroom'
              loading={loading}
              uploadFiles={uploadFiles}
              title='Bathroom *'
            />
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
