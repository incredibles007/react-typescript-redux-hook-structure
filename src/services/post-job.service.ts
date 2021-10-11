// import HttpClient from "./http-client";
import { apiUrls } from '../consts';
import { axiosService } from '.';

export const PostJobService = (function () {
  const getConfirmCode = async (email: any) => {
    return axiosService.post(apiUrls.GET_CONFIRMCODE);
  };

  const addJobInfo = async (jobInfo: any, topFreelancers: any) => {
    let users: any = [];
    topFreelancers.forEach((freelancer: any) => {
      users.push(freelancer.user_id);
    });
    jobInfo["users"] = users;
    return axiosService.post(apiUrls.JOBS, jobInfo);
  };

  const getTopFreelancers = async () => {
    return axiosService.get(apiUrls.GET_TOP_FREELANCERS);
  };
  return {
    addJobInfo,
    getConfirmCode,
    getTopFreelancers,
  };
})();
