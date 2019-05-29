import { combineReducers } from 'redux';

import authReducer from './authReducer';
import isOpenReducer from './isOpenReducer';
import photoReducer from './photoReducer';

export default combineReducers({
  auth: authReducer,
  isOpen: isOpenReducer,
  photo: photoReducer
});