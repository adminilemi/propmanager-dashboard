import baseAPI from './axiosInstances';

export const SignUp = async (formData) => {
  return await baseAPI.post('/auth/AgentSignup', formData);
};

export const SignIn = async (formData) => {
  return await baseAPI.post('/auth/Agentlogin', formData);
};

export const verifyEmail = async (formData) => {
  return await baseAPI.post(
    `/Agent/agentification/verify-signup-or-login-code`,
    formData,
  );
};

export const reSendOTPCode = async (userId) => {
  return await baseAPI.get(`/Agent/agentResend-otp-code/${userId}`);
};

export const requestPasswordChange = async (email) => {
  return await baseAPI.get(
    `/Agent/verification/initiate-forgot-password-flow/${email}`,
  );
};

export const passwordChange = async (formData) => {
  return await baseAPI.post('/Agent/verification/change-password', formData);
};

export const uploadFiles = async (formData) => {
  return await baseAPI.post(`/upload-files`, formData);
};
