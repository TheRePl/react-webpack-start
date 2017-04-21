import { combineEpics } from 'redux-observable';
import fetchService from './fetchService';
import fetchRoot from './fetchRoot';

const epics = [
  fetchRoot,
  fetchService
];

export default combineEpics(...epics);
