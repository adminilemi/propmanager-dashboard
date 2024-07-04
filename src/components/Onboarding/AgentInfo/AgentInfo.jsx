import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OnboardingInputs } from '@/components/AllData';
import {
  addAgentData,
  selectAgentData,
} from '@/Redux/Features/onboardingSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ProfileImage from '../ProfileImage';
import allState from '@/components/nigeria-state-and-lgas.json';

const initialState = {
  CompanyName: '',
  profilePic: '',
  Typeoforganisation: '',
  WhatsappNumber: '',
  OfficeAddress: '',
  State: '',
  LGA: '',
};

const AgentInfo = ({ onNext }) => {
  const { agentData } = useSelector(selectAgentData);
  const { loading, setLoading, errors, setErrors, uploadFilesToServer } =
    useGlobalHooks();

  const [getLga, setGetLga] = useState([]);

  const [propData, setPropData] = useState(agentData || initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropData((prev) => ({ ...prev, [id]: value }));
  };

  const uploadFiles = async (e, id) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];
    try {
      const result = await uploadFilesToServer(file);

      setPropData((prev) => ({ ...prev, [id]: result.secure_url }));

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (propData.profilePic === '') {
      setErrors({ error: true, errMessage: 'Upload profile picture' });
      return;
    }

    setErrors({ error: false, errMessage: '' });
    dispatch(addAgentData(propData));

    onNext();
  };

  useEffect(() => {
    if (propData?.State !== '') {
      const lgaData = allState.find((s) => s?.state === propData?.State);

      setGetLga(lgaData?.lgas);
    }
  }, [propData?.State]);

  return (
    <section>
      <div className='d-flex justify-content-end stepsNumber'>
        <h5>Step 3/4</h5>
      </div>

      <form onSubmit={handleSubmit} className='d-flex flex-column'>
        <div className='d-flex flex-column col-12 mb-5'>
          <div className='col-12 col-md-5 mb-5'>
            <label> Upload Profile Image</label>
            <ProfileImage
              loading={loading}
              id='profilePic'
              images={propData.profilePic}
              error={errors.error}
              uploadFiles={uploadFiles}
            />
          </div>
          <section className='d-flex flex-wrap justify-content-between '>
            {OnboardingInputs(propData, getLga).map(
              ({ id, label, type, placeholder, value, options, keyValue }) =>
                options ? (
                  <div key={id} className=' inputWrapper d-flex flex-column'>
                    <label>
                      {' '}
                      {label} <em>*</em>{' '}
                    </label>

                    <select
                      id={id}
                      name={label}
                      className='form-control'
                      defaultValue={value}
                      onChange={handleChange}
                      required
                    >
                      <option value=''> {placeholder} </option>
                      {options.map((item) => (
                        <option
                          key={item[keyValue] || item}
                          value={item[keyValue] || item}
                        >
                          {item[keyValue] || item}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div key={id} className=' inputWrapper d-flex flex-column'>
                    <label>
                      {' '}
                      {label} <em>*</em>{' '}
                    </label>

                    <input
                      id={id}
                      name={label}
                      type={type}
                      placeholder={placeholder}
                      className='form-control'
                      defaultValue={value}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ),
            )}
          </section>
        </div>

        <div className='col-12 text-center'>
          {errors.error && (
            <p className='error_message'> {errors.errMessage} </p>
          )}
        </div>
        <div className='col-12 text-end mt-5'>
          <button className='main-btn' type='submit'>
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default AgentInfo;
