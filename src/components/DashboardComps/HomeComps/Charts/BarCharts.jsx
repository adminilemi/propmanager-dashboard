import React from 'react';
import {
  Chart as CharJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

CharJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarCharts({ data, options }) {
  return (
    <main className='w-full mt-5 charts'>
      <Bar data={data} options={options} />
    </main>
  );
}

export default BarCharts;
