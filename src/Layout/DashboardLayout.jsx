import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/Header/NavBar';
// import { selectUserData } from '../Redux/Features/userAuthSlice';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import BreadCrumbs from '../components/BreadCrumbs';

// import dashboardRoutes from './Routes/DashboardRoutes';

const DashboardLayout = ({ children }) => {
  // const { isLoggedIn } = useSelector(selectUserData);

  // if (!isLoggedIn) {
  //   return <Navigate to='/signin' replace />;
  // }

  return (
    <main className='d-flex flex-column flex-md-row justify-content-between'>
      <aside style={{ background: '#fff' }} className='col-12 col-md-2 side'>
        <Sidebar />
      </aside>
      <article className='col-12 col-md-10'>
        <NavBar />
        {/* <BreadCrumbs items={dashboardRoutes} /> */}
        {children}
      </article>
    </main>
  );
};

export default DashboardLayout;
