import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Header/NavBar';
import { selectUserData } from '../Redux/Features/userAuthSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(selectUserData);

  if (!isLoggedIn) {
    return <Navigate to='/signin' replace />;
  }

  return (
    <main className='d-flex '>
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
