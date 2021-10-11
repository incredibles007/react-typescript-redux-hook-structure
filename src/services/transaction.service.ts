import { apiUrls } from '../consts';
import { axiosService } from '.';

export const TransactionService = (function () {
  const getTransactions = async () => {
    return axiosService.get(apiUrls.TRANSACTIONS);
  }

  const addContract = async (payload: any) => {
    return axiosService.post(apiUrls.MAKE_CONTRACT, payload);
  }

  const sendMessage = async (payload: any) => {
    return axiosService.post(apiUrls.TRANSACTIONS, payload);
  }

  const changeContract = async (payload: any) => {
    return axiosService.post(apiUrls.CHANGE_CONTRACT, payload);
  }

  const setUnreadasReadTr = async (id: any) => {
    return axiosService.post(apiUrls.SET_UNREAD_AS_READ_TR, { id: id });
  }

  return {
    sendMessage,
    setUnreadasReadTr,
    addContract,
    changeContract,
    getTransactions
  };
})();
