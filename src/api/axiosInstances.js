import Cookies from 'js-cookie';
import axios from 'axios';

const baseUrl = 'https://property-4u-befe5e00eae1.herokuapp.com/';
// const baseUrl = 'https://ile-mi-app.onrender.com/';

const baseAPI = axios.create({ baseURL: baseUrl });

baseAPI.interceptors.request.use(async (config) => {
  const userToken = Cookies.get('ilemiUserToken');
  // If userToken exists, set 'Authorization' and 'x-access-token' headers to the user token
  if (userToken) {
    config.headers['Authorization'] = `Bearer ${userToken}`;
    config.headers['x-access-token'] = userToken;
  }

  return config;
});

export default baseAPI;
