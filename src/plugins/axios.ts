import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '@/store';

const apiUrl: string = import.meta.env.VITE_APP_BACKEND_URL || '';
axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(
  (request: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('access_token');
    if (token)
      request.headers = {
        ...request.headers,
        authorization: `Bearer ${token}`,
      };
    return request;
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const originalConfig = error.config;
    console.log(originalConfig);
    if (error?.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      if (originalConfig.url === `${apiUrl.slice(0, 43)}/token/refresh/`) {
        store.commit('auth/SET_AUTH', { status: false });
        return Promise.reject(error);
      }

      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        store.commit('auth/SET_AUTH', { status: false });
        return Promise.reject(error);
      }

      axios
        .post(`${apiUrl}auth/refresh/`, { refresh: refreshToken })
        .then((res: AxiosResponse) => {
          if (res.data) {
            localStorage.setItem('access_token', res.data.access);
            store.commit('auth/SET_AUTH', { status: true });
            return axios(originalConfig);
          }
        })
        .catch((error: AxiosError) => {
          store.commit('auth/SET_AUTH', { status: false });
          return Promise.reject(error);
        });
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;
