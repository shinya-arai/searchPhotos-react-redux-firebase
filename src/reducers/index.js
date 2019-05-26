import { combineReducers } from 'redux';

import authReducer from './authReducer';
import webSideReducer from './webSideReducer';
import mobileSideReducer from './mobileSideReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  auth: authReducer,
  web: webSideReducer,
  mobile: mobileSideReducer,
  modal: modalReducer,
});