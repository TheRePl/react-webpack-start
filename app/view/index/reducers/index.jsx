import { combineReducers } from 'redux';
import $$app from './app';
import $$order from './order';
import service from './service';

export default combineReducers({
  ...$$app,
  ...$$order,
  ...service
});
