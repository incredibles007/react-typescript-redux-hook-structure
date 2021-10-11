export const apiUrls = {
  /**
   * Accounts management API urls
   */
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',

  /**
   * Client signup
   */
  GET_CONFIRMCODE: '/user/get_confirmcode',

  /***
   * Update User Info Apis
   */
  GET_USERDATA: '/user/get_userdata',
  GET_PROFILE_BYID: '/user/get_profiledata',
  UPDATE_USERDATA: '/user/update_userdata',
  CHANGE_PASSWORD: '/auth/change_password',

  /***
   * Portfolio Urls
   */
  PORTFOLIOS: '/portfolios',

  /**
   * Get Initial Consts
   */
  GET_HASHTAGS: '/hashtags',

  /**
   * Tickets
   */
  TICKETS: '/tickets',

  /**
   * Jobs
   */
  JOBS: '/jobs',
  GET_TOP_FREELANCERS: '/get_top_freelancers',

  /**
   * Meetings
   */
  MEETINGS: '/meetings',
  SET_UNREAD_AS_READ_BYID: '/meetings/set_unread_as_read_byid',

  /**
   * Transaction
   */
  TRANSACTIONS: '/transactions',
  SET_UNREAD_AS_READ_TR: '/transactions/set_unread_as_read_byid',
  MAKE_CONTRACT: '/transactions/make_contract',
  CHANGE_CONTRACT: '/transactions/change_contract',
};
