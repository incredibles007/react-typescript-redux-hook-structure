import { useDispatch, useSelector } from "react-redux";
import { ConstsService } from "../../services";
import { CONSTS } from "../types";

export const useConsts = () => {
  const dispatch = useDispatch();
  const { hashtags } = useSelector(({ consts }: any) => consts);

  const getHashTags = async () => {
    try {
      const results = await ConstsService.getHashTags();
      dispatch({ type: CONSTS.GET_HASHTAGS_SUCCESS, payload: results.data.data });
      return true;
    } catch ({ response, message }) {

      dispatch({
        type: CONSTS.GET_HASHTAGS_FAILED,
        payload: response?.data?.message || "Something went wrong."
      });
      return false;
    }
  }
  return {
    hashtags,
    getHashTags,
  };
};
