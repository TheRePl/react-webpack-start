import { combineEpics } from 'redux-observable'
import rootEpics from './rootEpics'
import orderEpics from './orderEpics'
import serviceEpics from './serviceEpics'

const epics = [
  ...rootEpics,
  ...orderEpics,
  ...serviceEpics
]

export default combineEpics(...epics)
