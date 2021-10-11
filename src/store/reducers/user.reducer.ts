import { User } from '../../models';
import { USER } from '../types';

const initialState: User = {
  data: {
    token: '',
    user: {
      user_id: "",
      full_name: '',
      user_role: '',
      email: '',
      payment_email: '',
      first_name: '',
      last_name: '',
      lastMessageTime: '',
      unread: 0,
      avatar: '',
      created_at: new Date(),
      english_level: '',
      timezone: "",
      description: '',
      portfolios: [],
      reviews: [],
      unreadMeeting: 0,
      unreadTransaction: 0,
    }
  },
  profile: {
    user_id: "",
    full_name: '',
    created_at: new Date(),
    payment_email: '',
    user_role: '',
    email: '',
    first_name: '',
    last_name: '',
    lastMessageTime: '',
    unread: 0,
    avatar: '',
    english_level: '',
    timezone: "",
    description: '',
    portfolios: [],
    reviews: [],
    unreadMeeting: 0,
    unreadTransaction: 0,
  },
  error: '',
  channel: null,
  initialized: false,
  loading: false,
};

export default function userReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case USER.SET_UNREAD_MEETING:
      return {
        ...state,
        data: { ...state.data, user: { ...state.data.user, unreadMeeting: payload } },
      };
    case USER.SET_UNREAD_TRANSACTION:
      return {
        ...state,
        data: { ...state.data, user: { ...state.data.user, unreadTransaction: payload } },
      };
    case USER.SET_PROFILE_DATA:
      return {
        ...state,
        profile: payload,
      };
    case USER.USER_INIT:
      return {
        ...state,
        data: initialState.data,
        error: '',
        initialized: true,
        loading: true,
      };
    case USER.USER_SUCCESS:
      return {
        ...state,
        data: { ...state.data, token: payload },
        error: '',
        initialized: true,
        loading: false,
      };
    case USER.USER_FAILED:
      return {
        ...state,
        data: initialState.data,
        error: payload,
        initialized: true,
        loading: false,
      };
    case USER.GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case USER.GET_PROFILE_DATA_FAILED:
      return {
        ...state,
        error: payload
      };
    case USER.USER_RESET:
      return {
        ...state,
        data: initialState.data,
        error: '',
        initialized: false,
        loading: false,
      };
    case USER.SET_USER_DATA:
      return {
        ...state,
        data: { ...state.data, user: payload },
        error: '',
        initialized: true,
        loading: false,
      };
    case USER.SET_PUSHER_CHANNEL:
      return {
        ...state,
        channel: payload,
      };
    default:
      return state;
  }
}
