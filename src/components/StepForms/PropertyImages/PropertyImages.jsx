import React, { useState } from 'react';
import './PropertyImages.scss';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../Redux/Features/userAuthSlice';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../../Hooks/useSweetAlert';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectProperty } from '@/Redux/Features/createPropertySlice';

const PropertyImages = ({ onPrevious }) => {
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
  const t = useSelector(selectProperty);
  const { authUser } = useSelector(selectUserData);
  const { loading, setLoading } = useGlobalHooks();
  const { showAlert } = useSweetAlert();
  const navigate = useNavigate();

  const employerid = authUser.userId;

  const [onboardingData, setOnboardingData] = useState({
    employerid,
    firstName: '',
    lastName: '',
    role: '',
    personalEmail: '',
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
    // try {
    //   // const result = await update({ ...onboardingData, id: employerid });
    //   showAlert(result.data.message);
    //   navigate('/');
    // } catch (error) {
    //   console.log(error);
    // }
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
          {loading ? <Spinner /> : 'Submit'}
        </button>
      </div>

      {/* {isError && (
        <p className='error_message'>
          {' '}
          Oppos we encounter an error, please try again{' '}
        </p>
      )} */}
    </form>
  );
};

export default PropertyImages;
