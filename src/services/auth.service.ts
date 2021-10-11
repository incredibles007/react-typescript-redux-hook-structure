// import HttpClient from "./http-client";
import { apiUrls } from '../consts';
import { axiosService } from '.';

export const AuthService = (function () {
  const login = async (payload: any) => {
    return axiosService.post(apiUrls.LOGIN, payload);
  };

  const signup = async (payload: any) => {
    return axiosService.post(apiUrls.SIGNUP, payload);
  };

  const changePassword = async (payload: any) => {
    return axiosService.post(apiUrls.CHANGE_PASSWORD, payload);
  };

  return {
    login,
    signup,
    changePassword
  };
})();
