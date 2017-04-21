import { List } from 'immutable';
import createReducer from './createReducer';
import { GET_ROOT_LIST } from '../actions';

const $$rootData = createReducer({
  banner: '',
  list: {}
}, {
  /* 获取首页展示页 */
  [GET_ROOT_LIST](state, action) {
    return state.updateIn(['list'], () => List(action.payload))
      .updateIn(['banner'], () => action.banner);
  }
});

export default {
  $$rootData
};