import React from 'react';
import CustomUploadToCloudinary from './CustomUploadToCloudinary';

const ImageContainer = ({
  images,
  cat,
  id,
  loading,
  uploadFiles,
  title,
  removeImage,
}) => {
  const placeholderImageUrl =
    'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg';

  return (
    <article className='imageContainer'>
      {title && <small className=''> {title} </small>}
      <div className='card p-3 mb-3 mt-3'>
        <figure className='p-3'>
          {images !== '' ? (
            <img src={images} alt='' />
          ) : (
            <img src={placeholderImageUrl} alt='' />
          )}
        </figure>
        <small className='text-center'>Upload Image (PNG, JPG, AVIF)</small>
      </div>

      <div className='flex flex-col lg:flex-row justify-center gap-3'>
        <div className='w-full lg:5'>
          <CustomUploadToCloudinary
            id={id}
            loading={loading[id]}
            uploadChange={(e) => uploadFiles(e, id, cat)}
          />
        </div>
        <div className='w-full lg:5'>
          <button
            className='outline-btn w-full'
            onClick={() => removeImage(id, cat)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default ImageContainer;
