import React, { useState } from 'react';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

const UploadWidget = ({ setImageData }) => {
  const [publicId, setPublicId] = useState('');
  // Replace with your own cloud name
  const [cloudName] = useState('dtkjpvhxd');
  // Replace with your own upload preset
  const [uploadPreset] = useState('ilemi-upload');

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    sources: ['local', 'url'], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ['images', 'png'], //restrict uploading to image files only
    maxImageFileSize: 2000000, //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  console.log(publicId);

  return (
    <section>
      <CloudinaryUploadWidget
        uwConfig={uwConfig}
        setPublicId={setPublicId}
        setImageData={setImageData}
      />
    </section>
  );
};

export default UploadWidget;
