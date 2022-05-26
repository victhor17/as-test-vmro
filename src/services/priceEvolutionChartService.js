import axios from 'axios';

const priceEvolutionChartService = () => {
  const config = {
    method: 'get',
    url: 'https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/',
  };
  return axios(config);
};

export default priceEvolutionChartService;
