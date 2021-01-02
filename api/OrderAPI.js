import qs from 'qs';

import axiosClient from './axiosClient';

class OrderAPI {
  list() {
    const url = '/orders';
    return axiosClient.get(url);
  }

  filter(queries) {
    const url = '/bookings';
    const query = qs.stringify(queries);

    return axiosClient.get(`${url}?${query}`);
  }
}

const instance = new OrderAPI();
export default instance;
