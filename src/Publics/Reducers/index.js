import {combineReducers} from 'redux';

import book from './book';
// import genres from './genres';
import users from './users'
import request from './request'
// import donation from './donation';

const rootReducer = combineReducers ({
  book,
  users,
  request
});

export default rootReducer;