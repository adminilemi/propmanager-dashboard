import baseAPI from './axiosInstances';

export const SignUp = async (formData) => {
  return await baseAPI.post('/auth/employerSignup', formData);
};

export const SignIn = async (formData) => {
  return await baseAPI.post('/auth/employerlogin', formData);
};

export const verifyEmail = async (formData) => {
  return await baseAPI.post(
    `/employer/employerverification/verify-signup-code/`,
    formData,
  );
};

export const reSendOTPCode = async (userId) => {
  return await baseAPI.get(`/employer/EmployeeResend-otp-code/${userId}`);
};

export const requestPasswordChange = async (email) => {
  return await baseAPI.get(
    `/employer/verification/initiate-forgot-password-flow/${email}`,
  );
};

export const passwordChange = async (formData) => {
  return await baseAPI.post('/employer/verification/change-password', formData);
};

export const uploadFiles = async (formData) => {
  return await baseAPI.post(`/upload-files`, formData);
};

export const teamMemberChangePassword = async (formData) => {
  return await baseAPI.post(`/auth/Authenticate-team-manager`, formData);
};

export const teamMemberSignin = async (formData) => {
  return await baseAPI.post(
    `/auth/Relogin-team-manager-to-employers-account`,
    formData,
  );
};

// all of this will be moved to RTK

export const updateUser = async (formData) => {
  return await baseAPI.post(`/employer/update-employer`, formData);
};

export const getUser = async (id) => {
  return await baseAPI.get(`/employer/${id}`);
};

export const getUpcomingShift = async (formData) => {
  return await baseAPI.post(`/jobs/employer-upcoming-shifts`, formData);
};

export const createJob = async (id, formData) => {
  return await baseAPI.post(`/jobs/createjob/${id}`, formData);
};

export const editJob = async (formData) => {
  return await baseAPI.post(`/jobs/updatejobs`, formData);
};

export const getNewJobs = async (formData) => {
  return await baseAPI.post(`/jobs/Getjobbyemployer`, formData);
};

export const getOngoingJobs = async () => {
  return await baseAPI.post(`/jobs/employer-find-ongoingjobs`);
};
export const getCompletedJobs = async () => {
  return await baseAPI.post(`/jobs/employer-find-expiredjobs`);
};
export const deletJobById = async (id) => {
  return await baseAPI.delete(`/jobs/deleteemployee/${id}`);
};
