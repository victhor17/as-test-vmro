
import './App.css';
import useGetPriceEvolutionChat from './hooks/useGetPriceEvolutionChat';
import useGetPresenceByProduct from './hooks/useGetPresenceByProduct';
import ReactApexChart from 'react-apexcharts';
import ListRender from './components/ListRender';
import useGetProducts from './hooks/useGetProducts';

function App() {

  const { error, evolutionChartData } = useGetPriceEvolutionChat();
  const {error: error2, presenceByProductData } = useGetPresenceByProduct()
  const {error: error3, productsData} = useGetProducts();
  if (error || error2 || error3) {
    return <h3>¡Ups! Algo ha salido mal...</h3>;
  }
  return (
    <div className='main'>
      <div className='chartsContainer'>
        <div className='chartContainer'>

        <ReactApexChart options={evolutionChartData} series={evolutionChartData.series || []}/>
        </div>
        <div className='chartContainer'>
        <ReactApexChart type='pie' options={presenceByProductData} series={presenceByProductData.series || []}/>
        </div>
      </div>
      
      <h3 className='title'> Comparative Analysis </h3>

    <div className='tableContainer'>
      <ListRender list={productsData}/>
    </div>
    </div>
  );
}

export default App;
