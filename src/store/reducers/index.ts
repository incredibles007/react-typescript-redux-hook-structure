import { combineReducers } from 'redux';

import user from './user.reducer';
import notification from './notification.reducer';
import progress from './progress.reducer';
import postJob from './post-job.reducer'
import meeting from './meeting.reducer'
import tickets from './tickets.reducer'
import transaction from './transaction.reducer'
import consts from './consts.reducer'

export default combineReducers({
  user,
  notification,
  progress,
  postJob,
  meeting,
  tickets,
  transaction,
  consts,
});
