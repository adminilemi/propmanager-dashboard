import React from 'react';
import CustomUploadToCloudinary from './CustomUploadToCloudinary';

const VideoContainer = ({
  videoLink,
  cat,
  id,
  loading,
  uploadFiles,
  title,
}) => {
  const placeholderImageUrl =
    'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg';

  return (
    <article className='imageContainer'>
      {title && <small className=''> {title} </small>}
      <div className='card p-3 mb-3 mt-3'>
        {videoLink !== '' ? (
          <video width='640' height='360' controls>
            <source src={videoLink} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <figure className='p-3'>
            <img src={placeholderImageUrl} alt='' />
          </figure>
        )}
        <small className='text-center'>Upload Video (MP4)</small>
      </div>

      <div className='d-flex flex-column flex-lg-row justify-content-center gap-3'>
        <div className='col-12 col-lg-5'>
          <CustomUploadToCloudinary
            id={id}
            loading={loading[id]}
            uploadChange={(e) => uploadFiles(e, id, cat)}
          />
        </div>
        <div className='col-12 col-lg-5'>
          <button className='outline-btn col-12'>Remove</button>
        </div>
      </div>
    </article>
  );
};

export default VideoContainer;
