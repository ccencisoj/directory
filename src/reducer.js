import { combineReducers } from 'redux';
import commonReducer from './reducers/common';

export default combineReducers({
  common: commonReducer
});