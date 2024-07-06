import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Header/NavBar';
import {
  selectIsOnboarded,
  selectUserData,
} from '../Redux/Features/userAuthSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(selectUserData);
  const isOnboarded = useSelector(selectIsOnboarded);

  if (isLoggedIn && !isOnboarded) {
    return <Navigate to='/onboarding' replace />;
  }
  if (!isLoggedIn) {
    return <Navigate to='/signin' replace />;
  }

  return (
    <main className='flex '>
      <aside className='leftSide'>
        <Sidebar />
      </aside>
      <article className='rightSide'>
        <NavBar />

        {children}
      </article>
    </main>
  );
};

export default DashboardLayout;
