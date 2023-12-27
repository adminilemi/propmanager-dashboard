import React, { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import CustomSelect from '../../CustomSelect/CustomSelect';
import { MdCancel } from 'react-icons/md';
import Select from '../../Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { SelectProperty } from '../../../Redux/Features/createPropertySlice';
import { useGlobalHooks } from '../../../Hooks/globalHooks';
import {
  employerType,
  industry,
  jobPost,
  numOfEmployee,
} from '../../SelectOptionData';
import { getUserAvatar } from '../../../Redux/Features/userAuthSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import './JobDetails.scss';

function JobDetails({ onNext, onPrevious }) {
  const stepper = useSelector(SelectProperty);
  const [isValid, setIsValid] = useState({});
  const [error, setError] = useState({ error: false, errMessage: '' });
  const [selectedOptions, setSelectedOptions] = useState(
    stepper.jobPosts || [],
  );
  const [selectValues, setSelectValues] = useState(
    stepper.jobDetails || {
      industry: '',
      numberOfEmployees: '',
      typeOfEmployer: '',
      companyDescription: '',
      websites: '',
      logoImage: '',
    },
  );

  const { loading, setLoading, uploadFilesToServer } = useGlobalHooks();

  const [customOptions, setCustomOptions] = useState(
    stepper.jobDetails || {
      industry: null,
      numberOfEmployees: null,
      typeOfEmployer: null,
    },
  );

  const dispatch = useDispatch();

  // For the Custom Select
  const handleJobPost = () => {
    // console.log('Selected options:', selectedOptions);
  };

  // For Select comp
  const handleOnSelectChange = (id, val) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [id]: val,
    }));
  };

  const handleRemoveJobType = (id) => {
    const filteredJobType = selectedOptions.filter((job, idx) => idx !== id);
    setSelectedOptions(filteredJobType);
  };

  const handleUploadFiles = async (e) => {
    const file = e.target.files[0];
    setLoading(true);
    try {
      const res = await uploadFilesToServer(file);

      const logoUrl = res.data.data[0];
      setSelectValues({ ...selectValues, logoImage: logoUrl });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const removeImage = () => {
    setSelectValues((prev) => ({ ...prev, logoImage: '' }));
  };

  const handleSubmit = () => {
    handleJobPost();
    const validationErrors = {};

    // Check for validation errors for each Select component
    if (customOptions.typeOfEmployer === null) {
      validationErrors['typeOfEmployer'] = true;
    }
    setIsValid(validationErrors);

    if (selectValues.websites === '') {
      setError({ error: true, errMessage: 'web' });
      return false;
    }

    if (selectValues.logoImage === '') {
      setError({ error: true, errMessage: 'logo' });
      return false;
    }

    if (selectedOptions.length === 0) {
      setError({ error: true, errMessage: 'job' });
      return false;
    }
    setError({ error: false });

    dispatch(getUserAvatar(selectValues.logoImage));

    onNext();
  };

  return (
    <form className='mb-5 jobDeets'>
      <section className='d-flex flex-wrap justify-content-between '>
        <div className=' inputWrapper'>
          <label htmlFor='typeOfEmployer' className='labelTitle'>
            {' '}
            Type of Employer <em>*</em>{' '}
          </label>

          <Select
            id='typeOfEmployer'
            options={employerType}
            selectedOption={customOptions.typeOfEmployer}
            setSelectedOption={setCustomOptions}
            onSelectChange={handleOnSelectChange}
            error={isValid['typeOfEmployer']}
          />
        </div>
        <div className=' inputWrapper'>
          <label htmlFor='noOfEmployees' className='labelTitle'>
            {' '}
            No of Employee
          </label>
          <Select
            id='numberOfEmployees'
            options={numOfEmployee}
            selectedOption={customOptions.numberOfEmployees}
            setSelectedOption={setCustomOptions}
            onSelectChange={handleOnSelectChange}
          />
        </div>
        <div className=' inputWrapper'>
          <label htmlFor='industry' className='labelTitle'>
            {' '}
            Industry
          </label>

          <Select
            id='industry'
            options={industry}
            selectedOption={customOptions.industry}
            setSelectedOption={setCustomOptions}
            onSelectChange={handleOnSelectChange}
          />
        </div>
        <div className=' inputWrapper d-flex flex-column'>
          <label htmlFor='websites' className='labelTitle'>
            {' '}
            Website <em>*</em>{' '}
          </label>

          <input
            id='websites'
            name='websites'
            type='text'
            placeholder='Enter your website'
            className={
              error.errMessage === 'web'
                ? 'errors form-control'
                : 'form-control'
            }
            defaultValue={selectValues.websites}
            onChange={(e) => handleOnSelectChange('websites', e.target.value)}
          />
        </div>
        <div className=' inputWrapper d-flex flex-column'>
          <label htmlFor='companyDescription' className='labelTitle'>
            {' '}
            Company Description
          </label>

          <textarea
            id='companyDescription'
            name='companyDescription'
            placeholder='Enter company desciption'
            className='form-control'
            defaultValue={selectValues.companyDescription}
            onChange={(e) =>
              handleOnSelectChange('companyDescription', e.target.value)
            }
            rows='3'
          ></textarea>
        </div>

        <div className=' inputWrapper'>
          <label htmlFor='jobType' className='labelTitle'>
            {' '}
            Type of Jobs to Post <em>*</em>{' '}
          </label>

          <div className=' jobType'>
            <CustomSelect
              options={jobPost}
              // Change={handleJobPost}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              error={error}
            />
          </div>
          <div className='mt-2'>
            <small> Note: Add up to 5</small>
            <div className='d-flex flex-wrap'>
              {selectedOptions.map((item, idx) => (
                <p
                  className='selected py1 px-2 me-1 d-flex flex-row align-items-center'
                  key={idx}
                  id={idx}
                  onClick={() => handleRemoveJobType(idx)}
                >
                  {item.name} <MdCancel className='ms-1' />
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className=' inputWrapper '>
          <label htmlFor='logoImage' className='col-12  d-flex flex-column '>
            <small className='d-flex mb-2'>
              {' '}
              Logo <em className='ms-1'>*</em>
            </small>
            <div
              className={
                error.errMessage === 'logo'
                  ? 'errors upload col-12  d-flex flex-row  justify-content-center align-items-center '
                  : 'upload col-12  d-flex flex-row  justify-content-center align-items-center '
              }
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <BsUpload className='me-2' />
                  <p> Drag files here or click to upload</p>{' '}
                </>
              )}
              <input
                id='logoImage'
                type='file'
                accept='image/*'
                name='logoImage'
                onChange={handleUploadFiles}
                className='uploadInp'
              />
            </div>
            <small className='uploadType mt-3'>
              Png , jpeg files up to 10mb at least 400px by 400px
            </small>
            {error.error && (
              <small className='error_message mt-3'>{error.errMessage}</small>
            )}
          </label>

          {selectValues.logoImage !== '' && (
            <div>
              <figure className='uploadedImage'>
                <div className='deleteIcon'>
                  <RiDeleteBinLine onClick={removeImage} />
                </div>
                <img src={selectValues.logoImage} alt='' />
              </figure>
            </div>
          )}
        </div>
      </section>
      <div className='d-flex flex-row justify-content-between mt-5'>
        <button onClick={onPrevious} className='outline-btn' type='button'>
          Back{' '}
        </button>
        <button onClick={handleSubmit} className='main-btn' type='button'>
          {' '}
          Next{' '}
        </button>
      </div>
    </form>
  );
}

export default JobDetails;
