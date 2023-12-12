import './Insight.scss';
import { Link } from 'react-router-dom';
import { PiCaretRightBold } from 'react-icons/pi';
import home from '../../assets/home.png';
import properties from '../../assets/properties.png';
import { RiCheckboxBlankFill } from 'react-icons/ri';

import { BsHouseFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ProgressBar } from 'react-bootstrap';
import LineChart from '@/components/DashboardComps/HomeComps/Charts/LineChart';

function Insight() {
  const chartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [11, 31, 20, 14, 13, 21, 23, 31, 10, 19, 20, 37],
        borderColor: '#5F259F',
        pointBorderColor: '#100A55',
        backgroundColor: ' #5F259F',
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      // x: {
      //   grid: {
      //     display: false,
      //   },
      //   beginAtZero: true,
      // },
      y: {
        gridLines: {
          display: true,
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };

  return (
    <main className='insight d-flex flex-column '>
      <section className=''>
        <h1 className='mb-5'> Rental Portfolio</h1>
        <article className='d-flex flex-column flex-lg-row justify-content-between mb-4 gap-3'>
          <section className='col-12 flex-fill rentalOverview card d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between'>
              <div className='col-8'>
                <h3>Rental Overview</h3>
                <p>
                  Show overview from Nov 2021 - Dec 2021.{' '}
                  {/* <span>
                    {' '}
                    <Link className='viewMore'>
                      {' '}
                      Detailed Stats <PiCaretRightBold />{' '}
                    </Link>{' '}
                  </span>{' '} */}
                </p>
              </div>
              <div className='col-3 d-flex flex-column'>
                <div>
                  <input
                    type='date'
                    name='date'
                    className='form-control line'
                  />
                </div>
              </div>
            </div>

            <article className='d-flex flex-column flex-lg-row justify-content-between mt-4'>
              <div className='col-12 col-lg-4 listingUnit card '>
                <figure className='col-3'>
                  <img src={home} alt='' />
                </figure>

                <p className='my-3'> Listing Units</p>
                <div className='d-flex gap-2 border-bottom pb-3'>
                  <h4> 78</h4>
                  <span className='greenBg'> +2.8%</span>{' '}
                </div>

                <p className='house mt-3'>
                  {' '}
                  <BsHouseFill className='me-1' />
                  15 Available
                </p>
              </div>
              <div className='col-12 col-lg-7 rentsData card mt-4 mt-lg-0'>
                <h5> Rents</h5>

                <div className='d-flex justify-content-between'>
                  <div>
                    <h4>4</h4>
                    <p> Due this month</p>
                  </div>
                  <div>
                    <div className='d-flex gap-1'>
                      <h4>16</h4>
                      <span className='purpleBg'>70.96%</span>
                    </div>

                    <p> Occupied this month</p>
                  </div>
                </div>

                <hr className='my-3' />
                <div className='d-flex justify-content-between'>
                  <div>
                    <h4 style={{ color: '#F06565' }}>15</h4>
                    <p> Units Left</p>
                  </div>
                  <div>
                    <h4>2</h4>

                    <p> In Draft Unlisted</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className='col-12 col-lg-5 card propertiesOverview'>
            <div className='d-flex justify-content-between'>
              <div className='d-flex gap-2 col-6'>
                <figure className='col-3'>
                  <img src={properties} alt='' />
                </figure>

                <div>
                  <h4>78</h4>
                  <p> Properties </p>
                </div>
              </div>

              <div className='d-flex flex-column justify-content-between align-items-end col-6'>
                <BsThreeDotsVertical />
                <span>
                  {' '}
                  <Link className='viewMore' to='seeallproperties'>
                    {' '}
                    See all properties
                    <PiCaretRightBold />{' '}
                  </Link>{' '}
                </span>{' '}
              </div>
            </div>

            <ul className='propList d-flex flex-wrap gap-1 mt-3'>
              {[
                { id: 1, title: '22', sub: 'Vacant' },
                { id: 2, title: '39', sub: 'Occupied' },
                { id: 3, title: '15', sub: 'Unlisted' },
                { id: 4, title: '2', sub: 'Unavailable' },
              ].map(({ id, title, sub }) => (
                <li key={id} className='text-center flex-fill'>
                  <h4>{title}</h4>
                  <p>{sub} </p>
                </li>
              ))}
            </ul>

            <div className='propProgress mt-2'>
              <h3>Property listed </h3>

              <ProgressBar now={68} className='my-3' />
              <ProgressBar now={32} className='listed' />

              <div className='d-flex gap-5 mt-3'>
                <div className='d-flex gap-2 align-items-center'>
                  <h6>
                    <RiCheckboxBlankFill color='#5F259F' /> 68%{' '}
                  </h6>{' '}
                  <span> Occupied</span>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <h6>
                    {' '}
                    <RiCheckboxBlankFill color='#100a55' />
                    32%{' '}
                  </h6>{' '}
                  <span> Vacant</span>
                </div>
              </div>
            </div>
          </section>
        </article>

        <article className='mt-5 col-12 lineChartWrapper card'>
          <section>
            <p>Property Listed</p>
            <div className='d-flex gap-2 align-items-center my-3'>
              <h4>78</h4>
              <div>
                <span className='greenBg'>+10.6%</span>
              </div>
              <small>from Nov 2021 - Dec 2021.</small>
            </div>
          </section>
          <section className='mt-3'>
            <LineChart data={chartData} options={chartOptions} />
          </section>
        </article>
      </section>
    </main>
  );
}

export default Insight;
