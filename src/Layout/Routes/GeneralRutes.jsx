import ResetPassword from '@/Pages/Auth/ResetPassword';
import ResetPasswordRequest from '@/Pages/Auth/ResetPasswordRequest';
import Signup from '@/Pages/Auth/Siginup/Signup';
import Signin from '@/Pages/Auth/Signin/Signin';
import VerifyEmail from '@/Pages/Auth/VerifyEmail';
import Onboarding from '@/components/Onboarding/Onboarding';

const generalRoutes = [
  { path: '/signup', element: <Signup /> },
  { path: '/signin', element: <Signin /> },
  { path: '/verifyemail', element: <VerifyEmail /> },
  { path: '/resetpasswordrequest', element: <ResetPasswordRequest /> },
  { path: '/resetpassword', element: <ResetPassword /> },
  { path: '/onboarding', element: <Onboarding /> },
];

export default generalRoutes;
