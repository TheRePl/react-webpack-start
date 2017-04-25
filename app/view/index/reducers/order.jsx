// import { Map } from 'immutable';
import createReducer from './createReducer'
import { SELECT_CARD, UPDATE_PRICE } from '../actions'

const $$pay = createReducer({
  num: 0,
  price: 0,
  useCard: ''
}, {
  [UPDATE_PRICE](state, action) {
    return state.set('price', action.payload.map(
      item => Number.parseInt(item.get('price') * item.get('num'), 10)
      ).reduce((pre, next) => pre + next)
    )
      .set('num', action.payload.map(item => Number.parseInt(item.get('num'), 10))
        .reduce((pre, next) => pre + next))
  },
  [SELECT_CARD](state, action) {
    return state.set('useCard', action.payload)
  }
})

export default {
  $$pay
}