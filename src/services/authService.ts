import axios from "axios";
import { api_conf } from "../configs/api.config";

const API_URL = api_conf.API_URL;
const ACCESS_TOKEN_KEY = "access";
const REFRESH_TOKEN_KEY = "refresh";

const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/api/users/login/`, {
        username,
        password,
      });
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
      localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
      console.log(response.data);
      console.log(localStorage);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  registration: async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/api/users/register/`, {
        username,
        email,
        password,
      });
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
      localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
      console.log(response.data);
      console.log(localStorage);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(`${API_URL}user/logout/`);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
};

export default authService;
