import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { string } from "yup";

import accessToken from "./jwt-token-access/accessToken";
// import * as url from "./url_helper";
import { POST_JWT_REFRESH } from "./url_helper";

// Pass new generated access token here
const token = accessToken;

// Apply base URL for axios
const API_URL = "http://127.0.0.1:8000";

const axiosApi = axios.create({
  baseURL: API_URL,
});

export async function get<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return await axiosApi
    .get<T>(url, { ...config })
    .then((response: AxiosResponse<T>) => response.data);
}

export async function post<T>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi
    .post<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response.data);
}

export async function put<T>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi
    .put<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response.data);
}

export async function del<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return await axiosApi
    .delete<T>(url, { ...config })
    .then((response: AxiosResponse<T>) => response.data);
}

axiosApi.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<any> => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken && config.headers) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

const refreshRequest = async (
  refresh: string | null,
  access: string | null
) => {
  try {
    const { data } = await axios.post(API_URL + POST_JWT_REFRESH, {
      refresh,
    });
    if (data?.access) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
    }

    return data;
  } catch (err) {
    return err;
  }
};

axiosApi.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.status === 401) {
      const refresh_token = localStorage.getItem("refresh_token");
      const access_token = localStorage.getItem("access_token");

      await refreshRequest(refresh_token, access_token);
    }
    return response;
  },
  async (error: any) => {
    const refresh_token = localStorage.getItem("refresh_token");
    const access_token = localStorage.getItem("access_token");
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return await refreshRequest(refresh_token, access_token).finally(() => {
        return axiosApi(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default API_URL;
