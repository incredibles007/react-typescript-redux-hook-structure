import { useDispatch, useSelector } from "react-redux";
import { APROGRESS } from "../types";


export const useProgress = () => {
  const dispatch = useDispatch();
  const { progress } = useSelector(( progress:any) => progress);  

  const startProgress = () => {    
    dispatch({
        type: APROGRESS.START
    });
    return true;    
  };

  const stopProgress = () => {    
    dispatch({
        type: APROGRESS.STOP
    });
    return true;    
  };

  return {
    progress,
    startProgress,
    stopProgress
  };
};