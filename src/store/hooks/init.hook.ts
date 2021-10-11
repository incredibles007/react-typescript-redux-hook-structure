import { LOCAL_STORAGE_KEY } from "../../consts";
import { USER } from "../types";

const { JWT_TOKEN, USER_DATA } = LOCAL_STORAGE_KEY;

// Initializer
export const initUserFromStorage = async (dispatch: any) => {
  const saved = await localStorage.getItem(USER_DATA);
  const token = await localStorage.getItem(JWT_TOKEN);
  if (!saved || token === '') {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    dispatch({ type: USER.SET_USER_DATA, payload: parsed });
    dispatch({ type: USER.USER_SUCCESS, payload: token });
  } catch { }
};
