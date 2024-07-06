import DoughnutCharts from '@/components/DashboardComps/HomeComps/Charts/DoughnutCharts';
import './Home.scss';
// import { BiSolidCheckbox } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import Due from '../../assets/due.png';
// import Active from '../../assets/active.png';
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
import {
  chartOptions,
  doughOp,
  doughtData,
  monthlyChartData,
} from '@/components/AllData';
import { FaCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { getSubPlanData } from '@/Redux/Features/userDatasSlice';
import HomeSkeleton from '@/components/DashboardComps/HomeComps/HomeSkeleton';

function Home() {
  // const rents = [
  //   { id: 1, title: '4 rents', subTitle: 'Due today.', icon: Due },
  //   { id: 2, title: '5 Listing', subTitle: 'Active Listing.', icon: Active },
  //   { id: 3, title: '1 Land (s)', subTitle: 'Landed Property.', icon: Active },
  //   { id: 4, title: '4 rents', subTitle: 'Rented Property.', icon: Active },
  // ];

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

  // console.log(weeklyData);

  // const tenantReq = [
  //   {
  //     id: 1,
  //     title: 'Valentino Parker',
  //     subTitle: 'Palm Harbor',
  //     date: 'Dec 7, 2021',
  //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Sofia Clear',
  //     subTitle: 'Beverly Springfield',
  //     date: 'Dec 7, 2021',
  //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'Chris Justice',
  //     subTitle: 'Cove Red',
  //     date: 'Dec 7, 2021',
  //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'Edin Kaolo',
  //     subTitle: 'Kelapa Bafing',
  //     date: 'Dec 7, 2021',
  //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  //   },
  // ];

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    dispatch(getSubPlanData(updateSub));
  }, [loading, data]);

  if (loading || isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <main className='Overviews flex flex-col  '>
      <section className=''>
        <h1 className='mb-5'> Dashboard</h1>
        {/* <article className='flex flex-wrap justify-between mb-4'>
          {rents.map(({ id, title, subTitle, icon }) => (
            <section
              key={id}
              className='flex flex-row card py-3 px-1 available justify-between'
            >
              <figure className='col-2'>
                <img className='w-full mx-auto' src={icon} alt='' />
              </figure>
              <div className='flex flex-col justify-between w-8/12'>
                <h5>{title}</h5>
                <div>
                  <small>
                    {subTitle}

                    <Link className='viewMore'> View more → </Link>
                  </small>
                </div>
              </div>
              <div className='col-1'>
                <BsXLg />
              </div>
            </section>
          ))}
        </article> */}

        <article className='flex flex-wrap justify-between gap-y-6'>
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
        </article>
        <article className='flex flex-col md:flex-row mt-5 justify-between gap-y-7'>
          <section className='w-full md:w-7/12 listedProp  card'>
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
          <aside className='w-full md:w-4/12 tenantRequest card'>
            <div className='flex justify-between'>
              <h5>Tenant Request</h5>
              <Link> View all </Link>
            </div>

            <div className='flex flex-col justify-center items-center mt-4'>
              {/* {tenantReq.map(({ id, title, subTitle, date, imageUrl }) => (
                <div
                  key={id}
                  className=' flex justify-between items-center py-3 reqList'
                >
                  <figure className='col-2'>
                    <img src={imageUrl} alt='' />
                  </figure>
                  <div className='w-7/12'>
                    <h6> {title} </h6>
                    <p>
                      {' '}
                      {subTitle} {date}{' '}
                    </p>
                  </div>
                  <PiCaretRightBold />{' '}
                </div>
              ))} */}

              <small> No Request Yet</small>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}

export default Home;
