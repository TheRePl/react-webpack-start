import { createAction } from 'redux-actions';

export const GET_USER = createAction('GET_USER', user => user);
export const TO_LOGIN = createAction('TO_LOGIN', result => result);