import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import generalRoutes from './Layout/Routes/GeneralRutes';
import dashboardRoutes from './Layout/Routes/DashboardRoutes';
import DashboardLayout from './Layout/DashboardLayout';
import NotFound from './Pages/404/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCheckSubValidityQuery, useGetAgentQuery } from './api/apiSlice';
import {
  getSubPlanData,
  validateSubscription,
} from './Redux/Features/userDatasSlice';
// import { Spinner } from 'react-bootstrap';
import { selectUserData } from './Redux/Features/userAuthSlice';

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector(selectUserData);
  const { data: agentData, isLoading: loading } = useGetAgentQuery(
    authUser.userId,
  );
  const { data, isLoading, isError } = useCheckSubValidityQuery(
    !loading && agentData?.data?.CurrentSubscriptionid,
    { refetchOnMountOrArgChange: true },
  );

  // useEffect(() => {
  //   if (agentData) {
  //     dispatch(getCurrentUser(agentData));
  //   }
  // }, [agentData]);

  useEffect(() => {
    if (isError) {
      dispatch(validateSubscription(false));
    } else {
      dispatch(validateSubscription(true));
      dispatch(getSubPlanData(!isLoading && data));
    }
  }, [isError, data]);

  return (
    <main className='App'>
      <Router>
        <Routes>
          {generalRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
          {dashboardRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <DashboardLayout breadCrumbs={route.breadCrumbs}>
                  {route.element}
                </DashboardLayout>
              }
            />
          ))}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
