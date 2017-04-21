import { createAction } from 'redux-actions';

export * from './Order';
export * from './Service';
export const FETCH_ROOT_LIST = createAction('FETCH_ROOT_LIST');
export const GET_ROOT_LIST = createAction('GET_ROOT_LIST', items => items);