import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../../services";
import { UserService } from "../../services";
import { LOCAL_STORAGE_KEY } from "../../consts";
import { USER, NOTI_TYPE } from "../types";
import { useNotification } from './notification.hook';
import { useProgress } from "./progress.hook";

const { JWT_TOKEN, USER_DATA } = LOCAL_STORAGE_KEY;

export const useUser = () => {
  const dispatch = useDispatch();
  const { data: user, loading, error, profile, channel } = useSelector(({ user }: any) => user);
  const { setNewNotification } = useNotification();
  const { startProgress, stopProgress } = useProgress();

  const setUnreadMeeting = (payload: any) => {
    dispatch({ type: USER.SET_UNREAD_MEETING, payload });
    return true;
  }

  const setUnreadTransaction = (payload: any) => {
    dispatch({ type: USER.SET_UNREAD_TRANSACTION, payload });
    return true;
  }

  const setProfileData = (payload: any) => {
    dispatch({ type: USER.SET_PROFILE_DATA, payload });
    return true;
  }

  const getProfileData = async (id: any) => {
    try {
      startProgress();
      const result = await UserService.getProfileData(id);
      stopProgress();
      dispatch({ type: USER.GET_PROFILE_DATA_SUCCESS, payload: result.data.data });
      return true;
    } catch ({ response, message }) {
      stopProgress();
      dispatch({
        type: USER.GET_PROFILE_DATA_FAILED,
        payload: "message"
      });
      return false;
    }
  }

  const userLogin = async (logInfo: any) => {
    try {
      if (user.token !== '') {
        return true;
      }
      dispatch({ type: USER.USER_INIT });
      startProgress();
      const data: any = await AuthService.login(logInfo);

      dispatch({
        type: USER.SET_USER_DATA,
        payload: data.data.user,
      });

      localStorage.setItem(JWT_TOKEN, data.data.access_token);
      localStorage.setItem(USER_DATA, JSON.stringify(data.data.user));

      const payload = data.data.access_token;
      dispatch({ type: USER.USER_SUCCESS, payload });
      setNewNotification(NOTI_TYPE.SUCCESS, "Login Success!");
      stopProgress();
      return true;
    } catch ({ response, message }) {
      dispatch({
        type: USER.USER_FAILED,
        payload: response?.data?.message || message
      });
      setNewNotification(NOTI_TYPE.WARNING, "Please Enter Valid Email And Password!");
      stopProgress();
      return false;
    }
  };

  const userSignup = async (body: any) => {
    try {
      if (user.token !== "") {
        return true;
      }
      dispatch({ type: USER.USER_INIT });
      startProgress();
      const data: any = await AuthService.signup(body);

      dispatch({
        type: USER.SET_USER_DATA,
        payload: data.data.user,
      });

      localStorage.setItem(JWT_TOKEN, data.data.access_token);
      localStorage.setItem(USER_DATA, JSON.stringify(data.data.user));

      const payload = data.data.access_token;
      dispatch({ type: USER.USER_SUCCESS, payload });
      setNewNotification(NOTI_TYPE.SUCCESS, "Register Success!.");
      stopProgress();
      return true;
    } catch ({ response, message }) {
      if (response?.data?.email) {
        dispatch({
          type: USER.USER_FAILED,
          payload: response?.data?.email[0]
        });
        setNewNotification(NOTI_TYPE.WARNING, response?.data?.email[0]);

      }
      else {
        dispatch({
          type: USER.USER_FAILED,
          payload: "Something went wrong"
        });
        setNewNotification(NOTI_TYPE.WARNING, "Something went wrong");
      }

      stopProgress();
      return false;
    }
  };

  const getUserData = async () => {
    try {
      const data = await UserService.getUserData();
      dispatch({
        type: USER.SET_USER_DATA,
        payload: data.data.data,
      });
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      return true;
    } catch ({ response, message }) {
      setNewNotification(NOTI_TYPE.WARNING, "Somethings is wrong! Failed to get user data.");
      return false;
    }
  };

  const addPortfolio = async (data: any) => {
    try {
      startProgress();
      const result = await UserService.addPortfolio(data);
      dispatch({
        type: USER.SET_USER_DATA,
        payload: result.data.data,
      });
      stopProgress();
      localStorage.setItem(USER_DATA, JSON.stringify(result.data.data));
      setNewNotification(NOTI_TYPE.SUCCESS, "Successfully added portfolio!");
      return true;

    } catch ({ response, message }) {
      stopProgress();
      setNewNotification(NOTI_TYPE.WARNING, "Somethings is wrong! Failed to add portfolio.");
      return false;
    }
  };

  const editPortfolio = async (data: any) => {
    try {
      startProgress();
      const result = await UserService.editPortfolio(data);
      dispatch({
        type: USER.SET_USER_DATA,
        payload: result.data.data,
      });
      stopProgress();
      localStorage.setItem(USER_DATA, JSON.stringify(result.data.data));
      setNewNotification(NOTI_TYPE.SUCCESS, "Successfully edited portfolio!");
      return true;

    } catch ({ response, message }) {
      stopProgress();
      setNewNotification(NOTI_TYPE.WARNING, "Somethings is wrong! Failed to edit portfolio.");
      return false;
    }
  };

  const deletePortfolio = async (por_id: number) => {
    try {
      startProgress();
      const result = await UserService.deletePortfolio(por_id);
      dispatch({
        type: USER.SET_USER_DATA,
        payload: result.data.data,
      });
      stopProgress();
      localStorage.setItem(USER_DATA, JSON.stringify(result.data.data));
      setNewNotification(NOTI_TYPE.SUCCESS, "Successfully deleted portfolio!");
      return true;
    } catch ({ response, message }) {
      stopProgress();
      setNewNotification(NOTI_TYPE.WARNING, "Somethings is wrong! Failed to delete portfolio.");
      return false;
    }
  };

  const updateUserData = async (data: any) => {
    try {
      startProgress();
      const result: any = await UserService.updateUserData(data);
      dispatch({
        type: USER.SET_USER_DATA,
        payload: result.data.data,
      });
      dispatch({
        type: USER.SET_PROFILE_DATA,
        payload: result.data.data,
      });
      stopProgress();
      localStorage.setItem(USER_DATA, JSON.stringify(result.data.data));
      setNewNotification(NOTI_TYPE.SUCCESS, "Successfully updated!");
      return true;
    } catch ({ response, message }) {

      stopProgress();
      setNewNotification(NOTI_TYPE.WARNING, response?.data?.message || "Somethings is wrong! Failed to update.");
      return false;
    }
  }

  const changePassword = async (data: any) => {
    try {
      startProgress();
      await AuthService.changePassword(data);
      stopProgress();
      setNewNotification(NOTI_TYPE.SUCCESS, "Password successfully changed!");
      return true;
    } catch ({ response, message }) {
      stopProgress();
      setNewNotification(NOTI_TYPE.WARNING, response?.data?.message || "Somethings is wrong! Failed to update.");
      return false;
    }
  }

  const logout = async () => {
    channel.unbind('MessageSent');
    await Promise.all([
      localStorage.removeItem(JWT_TOKEN),
      localStorage.removeItem(USER_DATA)
    ]);
    dispatch({ type: USER.USER_RESET });
    return true;
  };

  const setPusherChannel = (payload: any) => {
    dispatch({
      type: USER.SET_PUSHER_CHANNEL,
      payload,
    });
    return true;
  }

  // const updateUser = (payload) => dispatch({ type: USER.USER_SUCCESS, payload });

  return {
    user,
    error,
    loading,
    profile,
    setUnreadMeeting,
    setUnreadTransaction,
    getProfileData,
    setProfileData,
    userLogin,
    userSignup,
    getUserData,
    addPortfolio,
    editPortfolio,
    deletePortfolio,
    updateUserData,
    logout,
    changePassword,
    setPusherChannel,
    // updateUser,
  };
};

