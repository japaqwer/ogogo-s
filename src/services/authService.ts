// import axios, { AxiosError, AxiosResponse } from "axios";
// import { api_conf } from "../configs/api.config";

// const API_URL: string = api_conf.API_URL;
// const ACCESS_TOKEN_KEY: string = "access";
// const REFRESH_TOKEN_KEY: string = "refresh";

// interface LoginResponse {
//   access: string;
//   refresh: string;
// }

// const authService = {
//   login: async (username: string, password: string): Promise<LoginResponse> => {
//     try {
//       const response: AxiosResponse<LoginResponse> = await axios.post(
//         `${API_URL}user/login/`,
//         { username, password }
//       );
//       localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
//       localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
//       console.log(response.data);
//       console.log(localStorage);
//       return response.data;
//     } catch (error: AxiosError) {
//       throw error.response?.data; // Используйте error.response?.data, чтобы получить данные ошибки
//     }
//   },
//   registration: async (
//     username: string,
//     email: string,
//     password: string
//   ): Promise<LoginResponse> => {
//     try {
//       const response: AxiosResponse<LoginResponse> = await axios.post(
//         `${API_URL}user/register/`,
//         { username, email, password }
//       );
//       localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
//       localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
//       console.log(response.data);
//       console.log(localStorage);
//       return response.data;
//     } catch (error: AxiosError) {
//       throw error.response?.data;
//     }
//   },
//   logout: async (): Promise<any> => {
//     try {
//       const response: AxiosResponse<any> = await axios.post(
//         `${API_URL}/logout`
//       );
//       return response.data;
//     } catch (error: AxiosError) {
//       throw error.response?.data;
//     }
//   },
// };

// export default authService;
