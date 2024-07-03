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
    Exterior: (ExteriorImages.length > 0 && ExteriorImages) || [
      {
        name: 'front1',
        title: '',
        url: '',
      },
      {
        name: 'front2',

        title: '',
        url: '',
      },
    ],
    Interior: (InteriorImages.length > 0 && InteriorImages) || [
      {
        name: 'inner1',
        title: '',
        url: '',
      },
      {
        name: 'inner2',
        title: '',
        url: '',
      },
      {
        name: 'inner3',
        title: '',
        url: '',
      },
      {
        name: 'inner4',
        title: '',
        url: '',
      },
      {
        name: 'inner5',
        title: '',
        url: '',
      },
      {
        name: 'inner6',
        title: '',
        url: '',
      },
    ],
  });

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
            {imageData.Exterior.map(({ name, url }) => (
              <ImageContainer
                key={name}
                images={url}
                cat='Exterior'
                id={name}
                loading={loading}
                uploadFiles={uploadFiles}
                removeImage={handleRmoveImage}
              />
            ))}
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
