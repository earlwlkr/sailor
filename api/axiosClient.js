import axios from 'axios';
import qs from 'qs';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    // Common transform for response
    if (response?.data) return response.data;

    return response;
  },
  (error) => {
    console.log('Response error:', error?.response?.data, error, error.config);
    if (error?.response?.data) {
      throw error.response.data;
    }
    throw error;
  }
);

export default axiosClient;
