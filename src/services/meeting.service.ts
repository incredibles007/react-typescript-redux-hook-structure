import { apiUrls } from '../consts';
import { axiosService } from '.';

export const MeetingService = (function () {

  const getMeetingInfoById = async (id: any) => {
    return axiosService.get(apiUrls.MEETINGS + '/' + id);
  };

  const getMeetings = async () => {
    return axiosService.get(apiUrls.MEETINGS);
  }

  const sendMessage = async (payload: any) => {
    return axiosService.post(apiUrls.MEETINGS, payload);
  }

  const setUnreadasRead = async (id: any) => {
    return axiosService.post(apiUrls.SET_UNREAD_AS_READ_BYID, { id: id });
  }

  return {
    getMeetings,
    getMeetingInfoById,
    sendMessage,
    setUnreadasRead,
  };
})();
