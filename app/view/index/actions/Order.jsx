import { createAction } from 'redux-actions';

export const SELECT_CARD = createAction('SELECT_CARD', cardPrice => cardPrice);
export const PAY_ORDER = createAction('PAY_ORDER', user => user);