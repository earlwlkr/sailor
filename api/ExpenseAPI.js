import qs from 'qs';

import axiosClient from './axiosClient';

class ExpenseAPI {
  list() {
    const url = '/expenses';
    return axiosClient.get(url);
  }

  create(payload) {
    const url = '/expenses';
    return axiosClient.post(url, payload);
  }

  // filter(queries) {
  //   const url = '/expenses';
  //   const query = qs.stringify(queries);

  //   return axiosClient.get(`${url}?${query}`);
  // }
}

const instance = new ExpenseAPI();
export default instance;
