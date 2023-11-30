import Cookies from 'js-cookie';
import axios from 'axios';

const baseUrl = 'https://emdo-app-772a8ada7729.herokuapp.com/';

const baseAPI = axios.create({ baseURL: baseUrl });

baseAPI.interceptors.request.use(async (config) => {
  const userToken = Cookies.get('userToken');
  // If userToken exists, set 'Authorization' and 'x-access-token' headers to the user token
  if (userToken) {
    config.headers['Authorization'] = `Bearer ${userToken}`;
    config.headers['x-access-token'] = userToken;
  }

  return config;
});

export default baseAPI;
