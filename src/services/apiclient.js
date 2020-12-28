import axios from 'axios';

const apiClient = axios.create({
  baseUrl: 'https://localhost:5001',
  timeout: 3000,
});

apiClient.defaults.withCredentials = true;

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;
      axios.get('/auth/refresh').then((res) => {
        if (res.status === 200) {
          return axios.request(error.config);
        }
      });
    }
  }
);

export default apiClient;
