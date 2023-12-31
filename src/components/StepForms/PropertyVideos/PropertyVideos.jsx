import React, { useState } from 'react';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import { useGlobalHooks } from '@/Hooks/globalHooks';
// import { useDispatch } from 'react-redux';

const PropertyVideos = ({ onPrevious }) => {
  const { loading, setLoading, errors, setErrors, uploadFilesToServer } =
    useGlobalHooks();

  // const dispatch = useDispatch();

  const [imageData, setImageData] = useState({
    Exterior: [],
    Interior: [],
  });

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

  // console.log(imageData);

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

    // onNext();
  };

  return (
    <main>
      {/* Exterior */}
      <section className='d-flex flex-column col-12'>
        <div className='sectHeader d-flex justify-content-between border-bottom pb-2 mb-3'>
          <h5>Video (Optional)</h5>
        </div>

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
        </section>
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
          Submit
          {/* {loading['submitIt'] ? <Spinner /> : 'Submit'} */}
        </button>
      </div>

      {errors.error && <p>{errors.errMessage}</p>}
    </main>
  );
};

export default PropertyVideos;
