import Home from '@/Pages/Home/Home';
import Insight from '@/Pages/Insight/Insight';
import Listings from '@/Pages/Listings/Listings';
import Logout from '@/Pages/Logout/Logout';
import Messages from '@/Pages/Messages/Messages';
import Settings from '@/Pages/Settings/Settings';
import Subscription from '@/Pages/Subscription/Subscription';
import Tenants from '@/Pages/Tenants/Tenants';

const dashboardRoutes = [
  { path: '/', name: 'Dashboard', element: <Home /> },
  { path: '/insight', name: 'Insight', element: <Insight /> },
  { path: '/listings', name: 'Listings', element: <Listings /> },
  { path: '/tenants', name: 'Tenants', element: <Tenants /> },
  { path: '/messages', name: 'Messages', element: <Messages /> },
  { path: '/subscription', name: 'Subscription', element: <Subscription /> },
  { path: '/settings', name: 'Settings', element: <Settings /> },
  { path: '/logout', element: <Logout /> },
];

export default dashboardRoutes;