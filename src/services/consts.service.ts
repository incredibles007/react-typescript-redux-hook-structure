// import HttpClient from "./http-client";
import { apiUrls } from '../consts';
import { axiosService } from '.';

export const ConstsService = (function () {
  const getHashTags = async () => {
    return axiosService.get(apiUrls.GET_HASHTAGS);
  };

  return {
    getHashTags,
  };
})();
