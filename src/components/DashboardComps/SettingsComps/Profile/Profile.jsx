import React, { useState } from 'react';
import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, selectUser } from '@/Redux/Features/userDatasSlice';
import CustomUploadToCloudinary from '@/components/Cloudinary/CustomUploadToCloudinary';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import {
  getAgentCoyName,
  getUserAvatar,
  selectUserData,
} from '@/Redux/Features/userAuthSlice';
import { useUpdateAgentMutation } from '@/api/apiSlice';
import { Spinner } from 'react-bootstrap';

const Profile = () => {
  const { user } = useSelector(selectUser);
  const { authUser } = useSelector(selectUserData);
  const { showAlert } = useSweetAlert();
  const [updateAgentData, { isLoading }] = useUpdateAgentMutation();

  const [userData, setUserData] = useState({
    profilePic: user.profilePic,
    CompanyName: user.CompanyName,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  });
  const { loading, setLoading, uploadFilesToServer } = useGlobalHooks();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const uploadFiles = async (e, id) => {
    setLoading({ [id]: true });

    const file = e.target.files[0];

    try {
      const result = await uploadFilesToServer(file);

      setUserData((prev) => ({
        ...prev,
        [id]: result.secure_url,
      }));

      setLoading({ [id]: false });
    } catch (error) {
      console.log(error);
      setLoading({ [id]: false });
    }
  };

  const handlChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await updateAgentData({
        agentId: authUser.userId,
        ...userData,
      });

      if (result.data) {
        showAlert(result.data.message);
        dispatch(getUserAvatar(result.data.data.profilePic));
        dispatch(getAgentCoyName(result.data.data.CompanyName));
        dispatch(getCurrentUser(result.data.data));
        setIsEdit(!isEdit);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className=' card profile '>
      <section className=''>
        <hgroup className='px-3 my-3'>
          <h3>Personal Info</h3>
        </hgroup>

        <section className='mt-5 col-11 mx-auto'>
          <h5>Avatar</h5>
          <div className='mt-3 d-flex flex-column flex-md-row align-items-center gap-3  '>
            <figure className='userInitials_nav d-flex justify-content-center align-items-center '>
              {userData.profilePic ? (
                <img src={userData.profilePic} alt='' />
              ) : (
                <img
                  src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
                  alt=''
                />
              )}
            </figure>

            <div className='d-flex flex-column flex-md-row gap-3'>
              <div>
                {!isEdit ? (
                  <button className='main-btn' type='button' disabled>
                    {' '}
                    Upload{' '}
                  </button>
                ) : (
                  <CustomUploadToCloudinary
                    id='profilePic'
                    loading={loading['profilePic']}
                    uploadChange={(e) => uploadFiles(e, 'profilePic')}
                    isEdit={!isEdit}
                  />
                )}
              </div>
              <div>
                <button
                  className='outline-btn'
                  type='button'
                  disabled={!isEdit}
                >
                  {' '}
                  Remove{' '}
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className=' my-5 col-11 mx-auto'>
          <div className='mt-3'>
            <label htmlFor='Company Name' className='labelTitle'>
              {' '}
              Company Name{' '}
            </label>
            <input
              id='CompanyName'
              defaultValue={userData.CompanyName}
              type='text'
              className='form-control'
              onChange={handlChange}
              disabled={!isEdit}
            />
          </div>
          <div className='d-flex flex-wrap gap-3'>
            <div className='mt-3 flex-fill'>
              <label htmlFor='First Name' className='labelTitle'>
                {' '}
                First Name{' '}
              </label>
              <input
                id='firstName'
                defaultValue={userData.firstName}
                type='text'
                className='form-control'
                onChange={handlChange}
                disabled={!isEdit}
              />
            </div>
            <div className='mt-3 flex-fill'>
              <label htmlFor='Last Name' className='labelTitle'>
                {' '}
                Last Name{' '}
              </label>
              <input
                id='lastName'
                defaultValue={userData.lastName}
                type='text'
                className='form-control'
                onChange={handlChange}
                disabled={!isEdit}
              />
            </div>
          </div>
          <div className='mt-3'>
            <label htmlFor='Phone Number' className='labelTitle'>
              {' '}
              Phone Number{' '}
            </label>
            <input
              id='phoneNumber'
              defaultValue={userData.phoneNumber}
              type='text'
              className='form-control'
              onChange={handlChange}
              disabled={!isEdit}
            />
          </div>
        </section>

        <hr />
      </section>

      <div className='d-flex justify-content-end my-3 col-11 mx-auto'>
        {isEdit ? (
          <div className='d-flex gap-2'>
            <button
              className='outline-btn'
              type='button'
              onClick={() => setIsEdit(!isEdit)}
            >
              Cancel
            </button>
            <button className='main-btn' type='button' onClick={handleSubmit}>
              {isLoading ? <Spinner /> : 'Save Changes'}
            </button>
          </div>
        ) : (
          <button
            className='outline-btn'
            type='button'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </main>
  );
};

export default Profile;
