import { Map, List } from 'immutable';
import createReducer from './createReducer';
import {
  ADD_SERVICE,
  SELECT_SERVICE,
  CLEAR_SERVICE,
  ADD_SERVICE_COUNT,
  REDUCE_SERVICE_COUNT,
} from '../actions';

const order = createReducer([], {
  [ADD_SERVICE](state, action) {
    let off = true;
    state.map(item => {
      if (item.get('id') === action.payload.id) {
        off = false;
      }
      return item;
    });
    return off ? state.push(Map(action.payload)) : state.map(item => (
      item.get('id') === action.payload.id ? item.updateIn(['num'], num => num + 1) : item
    ));
  },
  [CLEAR_SERVICE](state) {
    return state.clear();
  },
  [ADD_SERVICE_COUNT](state, action) {
    return state.map(item => (
      item.get('id') === action.payload ? item.updateIn(['num'], num => num + 1) : item
    ));
  },
  [REDUCE_SERVICE_COUNT](state, action) {
    return state.filter(item => item.get('num') > 1 || item.get('id') !== action.payload).map(item => (
      item.get('id') === action.payload ? item.updateIn(['num'], num => num - 1) : item
    ));
  },
});

const service = createReducer([], {
  [SELECT_SERVICE](state, action) {
    return List(action.payload);
  },
});

export default {
  order,
  service,
};