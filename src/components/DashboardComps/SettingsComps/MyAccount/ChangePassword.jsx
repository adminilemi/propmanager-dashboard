import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useChangePasswordMutation } from '@/api/apiSlice';
import PopUp from '@/components/popUps/PopUp';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function ChangePassword({ id, close }) {
  const { authUser } = useSelector(selectUserData);
  const { handleShow, errors, setErrors } = useGlobalHooks();
  const { showAlert } = useSweetAlert();

  const [data, setData] = useState({
    userid: authUser.userId,
    newPassword: '',
    OldPassword: '',
  });

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = async () => {
    const result = await changePassword(data);
    if (result.data) {
      showAlert(result.data.message);
      handleShow(id);
    }

    if (result.error) {
      setErrors({ error: true, errMessage: result.error.data.message });
    }
  };

  return (
    <PopUp id={id}>
      <hgroup className='d-flex flex-row justify-content-between align-items-center col-11 mx-auto'>
        <h4>Change Password</h4>
        <h4
          onClick={close}
          className=' X d-flex align-items-center justify-content-center'
        >
          <BsX />
        </h4>
      </hgroup>
      <hr />
      <section className='col-11 mx-auto mb-3 d-flex flex-column align-items-end mt-3'>
        <div className=' col-12'>
          <label htmlFor='Old Password'>Old Password</label>
          <input
            id='OldPassword'
            name='OldPassword'
            type='text'
            defaultValue={data.OldPassword}
            className='form-control p-2 mt-2'
            placeholder='Enter Old Passwordd'
            onChange={handleChange}
          />
        </div>
        <div className=' col-12 mb-3 mt-3'>
          <label htmlFor='New Password'>New Password</label>
          <input
            id='newPassword'
            name='newPassword'
            type='text'
            defaultValue={data.newPassword}
            className='form-control p-2 mt-2'
            placeholder='Enter New Password'
            onChange={handleChange}
          />
        </div>
        <div className=' col-12 '>
          <label htmlFor='Confirm New Password '>Confirm New Password</label>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='text'
            className='form-control p-2 mt-2'
            placeholder='Re-enter New Password'
          />
        </div>
        <div className='d-flex flex-row justify-content-between mt-5 gap-3'>
          <button type='submit' className='outline-btn' onClick={close}>
            Cancel
          </button>
          <button
            type='submit'
            className='main-btn'
            onClick={handlePasswordChange}
          >
            {isLoading ? <Spinner /> : 'Save Changes'}
          </button>
        </div>
      </section>
      <div className='d-flex justify-content-center col-12'>
        {errors.error && (
          <h2 className='error_message py-3'>{errors.errMessage} </h2>
        )}
      </div>{' '}
    </PopUp>
  );
}

export default ChangePassword;
