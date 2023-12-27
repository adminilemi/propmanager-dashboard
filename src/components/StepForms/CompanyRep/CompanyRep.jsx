import React, { useState } from 'react';
import './CompanyRep.scss';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../Redux/Features/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../../Hooks/useSweetAlert';
// import { useUpdateUserMutation } from '../../../api/apiSlice';
import { SelectProperty } from '@/Redux/Features/createPropertySlice';

function CompanyRep({ onPrevious }) {
  const Inputs = [
    {
      id: 'firstName',
      type: 'text',
      label: 'First Name',
      value: '',
      placeholder: 'Enter first name',
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'Last Name',
      value: '',
      placeholder: 'Enter last name',
    },
    {
      id: 'role',
      type: 'text',
      label: 'Role',
      value: '',
      placeholder: 'Enter role',
    },
    {
      id: 'personalEmail',
      label: 'Personal email',
      type: 'email',
      value: '',
      placeholder: 'Enter personal email',
    },
  ];
  const { address, jobDetails, jobPosts } = useSelector(SelectProperty);
  const { authUser } = useSelector(selectUserData);

  const { showAlert } = useSweetAlert();
  const navigate = useNavigate();
  const {
    companyDescription,
    industry,
    logoImage,
    numberOfEmployees,
    typeOfEmployer,
    websites,
  } = jobDetails;

  const employerid = authUser.userId;

  const [onboardingData, setOnboardingData] = useState({
    employerid,
    firstName: '',
    lastName: '',
    role: '',
    personalEmail: '',
    address,
    companyDescription,
    industry,
    logoImage,
    numberOfEmployees,
    typeOfEmployer,
    websites,
    jobPosts,
  });

  const handleChange = (e) => {
    setOnboardingData({
      ...onboardingData,
      [e.target.id]: e.target.value,
    });
  };

  // const [update, { isLoading, isError }] = useUpdateUserMutation();

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      // const result = await update({ ...onboardingData, id: employerid });
      showAlert(result.data.message);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleDataSubmit}>
      <section className='d-flex flex-wrap justify-content-between '>
        {Inputs.map(({ id, label, type, placeholder, value }) => (
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
        ))}
      </section>

      <div className='d-flex flex-row justify-content-between mt-5'>
        <button onClick={onPrevious} type='submit' className='outline-btn'>
          {' '}
          Back{' '}
        </button>
        <button type='submit' className='main-btn'>
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </div>

      {isError && (
        <p className='error_message'>
          {' '}
          Oppos we encounter an error, please try again{' '}
        </p>
      )}
    </form>
  );
}

export default CompanyRep;
