import { Consts } from '../../models';
import { CONSTS } from '../types';

const initialState: Consts = {
  hashtags: [],
  error: '',
};

export default function constsReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case CONSTS.GET_HASHTAGS_SUCCESS:
      return {
        ...state,
        hashtags: payload,
      };
    case CONSTS.GET_HASHTAGS_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
