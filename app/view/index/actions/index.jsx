import { createAction } from 'redux-actions';

export * from './Order';
export * from './Service';
export const GET_USER = createAction('GET_USER', user => user);
export const TO_LOGIN = createAction('TO_LOGIN', result => result);