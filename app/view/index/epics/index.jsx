import { combineEpics } from 'redux-observable';
import fetchService from './fetchService';

const epics = [fetchService];

export default combineEpics(...epics);
