import { apiUrls } from '../consts';
import { axiosService } from '.';

export const TicketsService = (function () {
  const getTicketInfoById = async (id: any) => {
    return axiosService.get(apiUrls.TICKETS + '/' + id);
  }

  const updateSelectedTicketInfo = async (data: any) => {
    return axiosService.put(apiUrls.TICKETS, data);
  }

  const getTickets = async () => {
    return axiosService.get(apiUrls.TICKETS);
  }

  const addTicket = async (payload: any) => {
    return axiosService.post(apiUrls.TICKETS, payload);
  }

  return {
    getTickets,
    addTicket,
    getTicketInfoById,
    updateSelectedTicketInfo,
  };
})();
