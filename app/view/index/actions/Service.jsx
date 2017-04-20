import { createAction } from 'redux-actions';

export const ADD_SERVICE = createAction('ADD_SERVICE', item => item);
export const CLEAR_SERVICE = createAction('CLEAR_SERVICE');
export const FETCH_SERVICE = createAction('FETCH_SERVICE', type => type);
export const SELECT_SERVICE = createAction('SELECT_SERVICE', items => items);
export const ADD_SERVICE_COUNT = createAction('ADD_SERVICE_COUNT', id => id);
export const REDUCE_SERVICE_COUNT = createAction('REDUCE_SERVICE_COUNT', id => id);