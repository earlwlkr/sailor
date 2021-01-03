import qs from 'qs';

import axiosClient from './axiosClient';

class AuthAPI {
  login(email, password) {
    const url = '/auth/local';
    const payload = { identifier: email, password };
    return axiosClient.post(url, payload);
  }

  loginIdToken(token) {
    const url = '/auth/idToken';
    const payload = { token };
    return axiosClient.post(url, payload);
  }
}

const instance = new AuthAPI();
export default instance;
