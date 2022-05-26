import logo from './logo.svg';
import './App.css';
import useGetPriceEvolutionChat from './hooks/useGetPriceEvolutionChat';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const { error, evolutionChartData } = useGetPriceEvolutionChat();
  console.log(evolutionChartData);

  if (error) {
    return <h3>¡Ups! Algo ha salido mal...</h3>;
  }
  return (
    <div className='main'>
      <div >

      </div>
      <ReactApexChart options={evolutionChartData} width={'50%'} series={evolutionChartData.series || []}></ReactApexChart>
    </div>
  );
}

export default App;
