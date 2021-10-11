import { apiUrls } from '../consts';
import { axiosService } from '.';

export const UserService = (function () {
  const getProfileData = async (payload: any) => {
    return axiosService.post(apiUrls.GET_PROFILE_BYID, { id: payload });
  }
  const getUserData = async () => {
    return axiosService.get(apiUrls.PORTFOLIOS);
  };

  const addPortfolio = async (data: any) => {
    return axiosService.post(apiUrls.PORTFOLIOS, data);
  }

  const editPortfolio = async (data: any) => {
    return axiosService.put(apiUrls.PORTFOLIOS, data);
  }

  const deletePortfolio = async (id: number) => {
    return axiosService.del(apiUrls.PORTFOLIOS + '/' + id);
  }

  const updateUserData = async (data: any) => {
    return axiosService.post(apiUrls.UPDATE_USERDATA, data);
  }

  return {
    getUserData,
    getProfileData,
    addPortfolio,
    editPortfolio,
    deletePortfolio,
    updateUserData
  };
})();
