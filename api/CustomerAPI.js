import qs from 'qs';

import axiosClient from './axiosClient';

class CustomerAPI {
  list() {
    const url = '/customers';
    return axiosClient.get(url);
  }

  create(payload) {
    const url = '/customers';
    return axiosClient.post(url, payload);
  }

  // filter(queries) {
  //   const url = '/customers';
  //   const query = qs.stringify(queries);

  //   return axiosClient.get(`${url}?${query}`);
  // }
}

const instance = new CustomerAPI();
export default instance;
