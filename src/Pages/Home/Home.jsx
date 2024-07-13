import './Home.scss';
import { IoLogoWhatsapp } from 'react-icons/io';

import { Link } from 'react-router-dom';
import BarCharts from '@/components/DashboardComps/HomeComps/Charts/BarCharts';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import {
  useCheckSubValidityQuery,
  useGetAgentMonthlyStatsQuery,
  useGetAgentQuery,
  useGetAgentStatsQuery,
  // useGetAgentWeeklyStatsQuery,
} from '@/api/apiSlice';
import { chartOptions, monthlyChartData, rents } from '@/components/AllData';
import {
  FaCircle,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
} from 'react-icons/fa';
import { useEffect } from 'react';
import { getSubPlanData } from '@/Redux/Features/userDatasSlice';
import HomeSkeleton from '@/components/DashboardComps/HomeComps/HomeSkeleton';
import {
  MdOutlineMarkUnreadChatAlt,
  MdOutlineTipsAndUpdates,
} from 'react-icons/md';

const Home = () => {
  const { authUser } = useSelector(selectUserData);
  const dispatch = useDispatch();

  // This will run everytime to check change in subscriptions
  const {
    data: agentData,
    isLoading: loading,
    refetch,
    // isError,
  } = useGetAgentQuery(authUser.userId);

  // This will update the subscription package incase a user resubscribed
  const { data: updateSub } = useCheckSubValidityQuery(
    agentData?.data?.CurrentSubscriptionid,
    { refetchOnMountOrArgChange: true },
  );

  const { data, isLoading } = useGetAgentStatsQuery(authUser.userId);
  const { data: monthlyData } = useGetAgentMonthlyStatsQuery(authUser.userId);
  // const { data: weeklyData } = useGetAgentWeeklyStatsQuery(authUser.userId);

  // const [selectedOption, setSelectedOption] = useState('Weekly');

  // const handleSelectChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  useEffect(() => {
    refetch();
  }, [refetch]);

  // useEffect(() => {
  //   dispatch(updatePageName('Dashboard'));
  // }, []);

  useEffect(() => {
    dispatch(getSubPlanData(updateSub));
  }, [loading, data]);

  if (loading || isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <main className='Overviews flex flex-col  '>
      <h1 className='mb-5'> Dashboard</h1>

      <section className='flex flex-wrap gap-4 justify-between'>
        <section className='w-full lg:w-3/5'>
          <article className='flex flex-wrap justify-between gap-3 '>
            <ul className='flex flex-col justify-between gap-3 w-full md:w-[45%]'>
              {rents(data?.data).map(({ id, title, subTitle, icon }) => (
                <li
                  key={id}
                  className='flex card py-3 px-1 gap-3 justify-between !bg-white'
                >
                  <figure className='w-2/12'>
                    <img className='w-12 h-12 mx-auto' src={icon} alt='' />
                  </figure>
                  <div className='flex flex-col justify-between flex-1'>
                    <h5 className='font-bold'>{title}</h5>
                    <div>
                      <small>
                        {subTitle}

                        <Link to='/listings' className='viewMore'>
                          {' '}
                          View more →{' '}
                        </Link>
                      </small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className=' w-full md:w-[50%] py-5 px-4  card !bg-white'>
              <section className='flex flex-col   w-3/5'>
                <div className='flex justify-between'>
                  <div>
                    <h4>Leads</h4>
                    <small className='text-xm text-Grey6'>June Leads</small>
                  </div>

                  <h4>0</h4>
                </div>
                <div className='flex justify-between mt-5'>
                  <p className='flex justify-between items-center gap-2'>
                    {' '}
                    <FaPhoneAlt className='text-mainColor' /> Phone:
                  </p>

                  <h4>0</h4>
                </div>
                <div className='flex justify-between mt-5'>
                  <p className='flex justify-between items-center gap-2'>
                    {' '}
                    <IoLogoWhatsapp className='text-positive' /> Whatsapp:
                  </p>

                  <h4>0</h4>
                </div>
                <div className='flex justify-between mt-5'>
                  <p className='flex justify-between items-center gap-2'>
                    {' '}
                    <MdOutlineMarkUnreadChatAlt className='text-mainColor' />{' '}
                    Phone:
                  </p>

                  <h4>0</h4>
                </div>
              </section>
            </aside>
          </article>
          {/* <article className='flex flex-wrap justify-between gap-y-6'>
          {doughtData(data).map(
            ({ id, title, subTitle, doughChartData, doughnutLabel }) => (
              <section
                key={id}
                className='flex flex-col  card py-5 px-4 available'
              >
                <div className='flex justify-between'>
                  <div>
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                  </div>
                  <BsThreeDotsVertical />
                </div>

                <DoughnutCharts
                  data={doughChartData}
                  options={doughOp}
                  label={doughnutLabel}
                />
              </section>
            ),
          )}
        </article> */}
          <article className='flex flex-col md:flex-row mt-5 justify-between gap-y-7'>
            <section className='w-full  listedProp  card'>
              <div className='flex justify-between'>
                <div>
                  <p>Property Overview</p>
                  <h2> {data?.data?.totalProperties} Listed Properties</h2>
                  {/* <small>
                  <span> +10.6%</span> from last week
                </small> */}
                </div>

                <div>
                  <select
                    // onChange={handleSelectChange}
                    className='chartSelect'
                  >
                    <option value='Weekly'>Weekly</option>
                    <option value='Monthly'>Monthly</option>
                  </select>
                </div>
              </div>

              <BarCharts
                data={monthlyChartData(monthlyData)}
                // data={
                //   selectedOption === 'Monthly'
                //     ? monthlyChartData(monthlyData)
                //     : weeklyChartData(weeklyData)
                // }
                options={chartOptions}
              />
              <div className='w-full'>
                <div className='flex justify-between items-center mt-3'>
                  <div className=' flex items-center gap-3 chartLabel'>
                    <div className='flex items-center'>
                      {' '}
                      <FaCircle size={10} color='#5F259F' className='me-1' />
                      <span>Occupied</span>
                    </div>
                    <div className='flex items-center'>
                      {' '}
                      <FaCircle size={10} color='#E0DEF7' className='me-1' />
                      <span>Vacant </span>
                    </div>
                  </div>

                  <Link className='viewMore'>View more →</Link>
                </div>
              </div>
            </section>
          </article>{' '}
        </section>
        <ul className='flex flex-col gap-y-7 w-full lg:w-[35%]'>
          <li className='w-full main-btn text-center'>
            <Link to='/addproperty' className='!text-white font-semibold'>
              {' '}
              Post A Property{' '}
            </Link>
          </li>
          <li className='w-full h-48 !bg-white grid place-items-center text-center card my-5'>
            <h5 className='font-bold'>Advert Placement</h5>
          </li>
          <li className='w-full tenantRequest card my-5'>
            <div className=''>
              <h5>Recent Updates </h5>
              <small className='text-xm text-Grey6'>
                Recent Updates from Property4U.ng
              </small>
            </div>

            <div className='w-full h-48 grid place-items-center text-center '>
              <h5 className='font-bold'>No Updates </h5>
            </div>

            <div className='card p-3 !bg-grey-400 flex flex-col gap-3'>
              <h4 className='flex items-center gap-3 text-mainColor'>
                <MdOutlineTipsAndUpdates /> Get Tips{' '}
              </h4>
              <p className='text-xm text-Grey6'>
                Connect with us on our social media pages for tips and updates{' '}
              </p>
              <div className='flex items-center gap-3'>
                {' '}
                <FaFacebook className='text-mainColor' />{' '}
                <FaInstagram className='text-mainColor' />{' '}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
