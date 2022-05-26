import axios from "axios";

const presenceProductService = () => {
  const config ={
    method: 'get',
    url: 'https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/'
  }
  return axios(config)
}

export default presenceProductService;