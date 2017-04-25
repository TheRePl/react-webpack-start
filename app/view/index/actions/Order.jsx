import { createAction } from 'redux-actions'

export const SELECT_CARD = createAction('SELECT_CARD', cardPrice => cardPrice)
export const UPDATE_PRICE = createAction('UPDATE_PRICE', price => price)