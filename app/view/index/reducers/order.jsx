// import { Map } from 'immutable';
import createReducer from './createReducer';
import { SELECT_CARD } from '../actions';

const pay = createReducer({
  useCard: '',
}, {
  [SELECT_CARD](state, action) {
    return state.set('useCard', action.payload);
  },
});

export default {
  pay,
};