// import { Map } from 'immutable';
import createReducer from './createReducer';
import { TO_LOGIN, GET_USER } from '../actions';

const isLogin = createReducer(false, {
  [TO_LOGIN](state, action) {
    /**
     *  @路由传递
     ***/
    return action.payload;
  },
});

const data = createReducer(null, {
  [GET_USER](state, action) {
    /**
     *  @路由传递
     ***/
    return action.payload;
  },
});

export default {
  isLogin,
  data
};