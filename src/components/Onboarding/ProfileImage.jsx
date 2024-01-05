import React from 'react';
import CustomUploadToCloudinary from '../Cloudinary/CustomUploadToCloudinary';

const ProfileImage = ({
  images,
  cat,
  id,
  loading,
  uploadFiles,
  title,
  error,
}) => {
  const placeholderImageUrl =
    'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg';

  return (
    <article className='imageContainer'>
      {title && <small className=''> {title} </small>}
      <div
        className={error ? 'errors card p-3 mb-3 mt-3' : 'card p-3 mb-3 mt-3'}
      >
        <figure className='p-3'>
          {images !== '' ? (
            <img src={images} alt='' />
          ) : (
            <img src={placeholderImageUrl} alt='' />
          )}
        </figure>
        <small className='text-center'>Upload Image (PNG, JPG, AVIF)</small>
      </div>

      <div className='d-flex flex-column flex-lg-row justify-content-center gap-3'>
        <div className='col-12 '>
          <CustomUploadToCloudinary
            id={id}
            loading={loading[id]}
            uploadChange={(e) => uploadFiles(e, id, cat)}
          />
        </div>
      </div>
    </article>
  );
};

export default ProfileImage;
