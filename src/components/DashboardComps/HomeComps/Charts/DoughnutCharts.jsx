import React from 'react';
import { Chart as CharJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

CharJs.register(ArcElement, Tooltip, Legend);
function DoughnutCharts({ data, options, label }) {
  return (
    <main className='w-full md:6 lg:12 mx-auto charts py-3 position-relative flex justify-center items-center'>
      {/* <h5 className='doughMessage'>{message}</h5> */}
      <Doughnut data={data} options={options} plugins={[label]} />
    </main>
  );
}

export default DoughnutCharts;
