import axios from "axios";

const productsService = () => {
  const config = {
    method: 'get',
    url: 'https://atlantia-dev-test.herokuapp.com/api/beer-products/'
  }

  return axios(config)
}

export default productsService;