import {
  ADD_SERVICE,
  ADD_SERVICE_COUNT,
  CLEAR_SERVICE,
  UPDATE_PRICE
} from '../actions'

function updatePayPrice(action$, stroe) {
  return action$.filter(
    action => action.type === ADD_SERVICE().type ||
    action.type === ADD_SERVICE_COUNT().type ||
    action.type === CLEAR_SERVICE().type
  )
    .map(() => ({
      type: UPDATE_PRICE().type,
      payload: stroe.getState().$$order
    }))
}

export default [updatePayPrice]