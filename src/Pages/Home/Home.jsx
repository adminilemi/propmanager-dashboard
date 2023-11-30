import DoughnutCharts from '@/components/DashboardComps/HomeComps/Charts/DoughnutCharts';
import './Home.scss';
import { BiSolidCheckbox } from 'react-icons/bi';
import { BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import Due from '../../assets/due.png';
import Active from '../../assets/active.png';
import { Link } from 'react-router-dom';
import BarCharts from '@/components/DashboardComps/HomeComps/Charts/BarCharts';

function Home() {
  const rents = [
    { id: 1, title: '4 rents', subTitle: 'Due today.', icon: Due },
    { id: 2, title: '5 Listing', subTitle: 'Active Listing.', icon: Active },
    { id: 3, title: '1 Land (s)', subTitle: 'Landed Property.', icon: Active },
    { id: 4, title: '4 rents', subTitle: 'Rented Property.', icon: Active },
  ];

  const doughtData = [
    {
      id: 1,
      title: 'Units',
      subTitle: 'Total units available',

      doughChartData: {
        labels: '',
        datasets: [
          {
            borderRadius: 8,
            data: [15, 100],
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = ['15', 'Units available'];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            // centerY += 12;
            const centerY = initialCenterY - totalHeight / 2 + index * 15;
            ctx.fillText(label, centerX, centerY);

            // Adjust the value (vertical spacing) as needed
          });

          ctx.restore();
        },
      },
    },
    {
      id: 2,
      title: 'Properties',
      subTitle: 'Total Listed Properties',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [78, 100],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = ['Employee', 'Subscription', 'Chart'];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            // centerY += 12;
            const centerY = initialCenterY - totalHeight / 2 + index * 15;
            ctx.fillText(label, centerX, centerY);

            // Adjust the value (vertical spacing) as needed
          });

          ctx.restore();
        },
      },
    },
    {
      id: 3,
      title: 'Vacant',
      subTitle: 'Total vacant property',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [22, 100],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = ['Employee', 'Subscription', 'Chart'];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            // centerY += 12;
            const centerY = initialCenterY - totalHeight / 2 + index * 15;
            ctx.fillText(label, centerX, centerY);

            // Adjust the value (vertical spacing) as needed
          });

          ctx.restore();
        },
      },
    },
    {
      id: 1,
      title: 'Unlisted Properties',
      subTitle: 'Total sold properties',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [15, 100],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = ['Employee', 'Subscription', 'Chart'];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            // centerY += 12;
            const centerY = initialCenterY - totalHeight / 2 + index * 15;
            ctx.fillText(label, centerX, centerY);

            // Adjust the value (vertical spacing) as needed
          });

          ctx.restore();
        },
      },
    },
  ];

  // const doughChartData = {
  //   labels: '',
  //   datasets: [
  //     {
  //       data: [15, 100],

  //       backgroundColor: ['#5F259F', '#E8E6F9'],
  //       cutout: '80%',
  //     },
  //   ],
  // };

  const doughOp = {
    elements: {
      arc: {
        skipNull: true, // Display segments with a value of 0
      },
    },
  };

  const employerStatData = {
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
      // registered
      {
        // categoryPercentage: 1,
        // barPercentage: 0.6,
        // borderRadius: 8,
        minBarLength: 5,
        data: [21, 51, 20, 14, 11, 21, 23, 41, 10, 19, 90, 87],

        backgroundColor: ' #5F259F',
      },
      // Verified
      {
        // categoryPercentage: 1,
        minBarLength: 5,
        data: [12, 31, 15, 14, 8, 35, 5, 19, 80, 80, 70, 67],

        backgroundColor: '#100A55',
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
      x: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
  };

  // const doughnutLabel = {
  //   id: 'doughnutLabel',
  //   afterDatasetsDraw(chart) {
  //     const { ctx } = chart;
  //     let centerX = chart.getDatasetMeta(0).data[0].x;
  //     let initialCenterY = chart.getDatasetMeta(0).data[0].y;

  //     // The labels
  //     ctx.save();
  //     ctx.font = 'bold 12px sans-serif';
  //     ctx.fillStyle = 'black';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';

  //     // Labels
  //     const labels = ['Employee', 'Subscription', 'Chart'];
  //     const totalHeight = labels.length * 15;

  //     labels.forEach((label, index) => {
  //       // centerY += 12;
  //       const centerY = initialCenterY - totalHeight / 2 + index * 15;
  //       ctx.fillText(label, centerX, centerY);

  //       // Adjust the value (vertical spacing) as needed
  //     });

  //     ctx.restore();
  //   },
  // };
  return (
    <main className='Overviews d-flex flex-column  '>
      <section className=''>
        <h1 className='mb-5'> Dashboard</h1>
        <article className='d-flex flex-wrap justify-content-between mb-4'>
          {rents.map(({ id, title, subTitle, icon }) => (
            <section
              key={id}
              className='d-flex flex-row card py-3 px-1 available justify-content-between'
            >
              <figure className='col-2'>
                <img className='col-12 mx-auto' src={icon} alt='' />
              </figure>
              <div className='d-flex flex-column justify-content-between col-8'>
                <h5>{title}</h5>
                <div>
                  <small>
                    {subTitle}

                    <Link className='view'> View more → </Link>
                  </small>
                </div>
              </div>
              <div className='col-1'>
                <BsXLg />
              </div>
            </section>
          ))}
        </article>

        <article className='d-flex flex-wrap justify-content-between'>
          {doughtData.map(
            ({ id, title, subTitle, doughChartData, doughnutLabel }) => (
              <section
                key={id}
                className='d-flex flex-column  card py-5 px-4 available'
              >
                <div className='d-flex justify-content-between'>
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
        <article className='d-flex flex-column flex-md-row mt-5 justify-content-between'>
          <section className='col-12 col-md-7 listedProp card'>
            <div>
              <p>Property Overview</p>
              <h2> 78 Listed Properties</h2>
              <small>
                <span> +10.6%</span> from last week
              </small>
            </div>

            <BarCharts data={employerStatData} options={chartOptions} />
          </section>
          <aside className='col-12 col-md-4 tenantRequest card'>
            <h5>Tenant Request</h5>
          </aside>
        </article>
      </section>
    </main>
  );
}

export default Home;
