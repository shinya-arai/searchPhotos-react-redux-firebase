import { combineReducers } from 'redux';

import authReducer from './authReducer';
import isOpenReducer from './isOpenReducer';

export default combineReducers({
  auth: authReducer,
  isOpen: isOpenReducer,
});