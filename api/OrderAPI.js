import qs from 'qs';

import axiosClient from './axiosClient';

class OrderAPI {
  list() {
    const url = '/orders';
    return axiosClient.get(url);
  }

  create(payload) {
    const url = '/orders';
    return axiosClient.post(url, payload);
  }

  // filter(queries) {
  //   const url = '/orders';
  //   const query = qs.stringify(queries);

  //   return axiosClient.get(`${url}?${query}`);
  // }
}

const instance = new OrderAPI();
export default instance;
