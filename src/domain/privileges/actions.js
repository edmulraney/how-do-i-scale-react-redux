import api from './api'
import {
  FETCH_PRIVILEGES_REQUESTED,
  FETCH_PRIVILEGES_FAILED,
  FETCH_PRIVILEGES_SUCCEEDED,
} from './action-types'

function fetchAll() {
  return dispatch => {
    dispatch({ type: FETCH_PRIVILEGES_REQUESTED })
    return api.fetch()
      .then(result => dispatch({ type: FETCH_PRIVILEGES_REQUESTED, payload: result }))
      .catch(error => dispatch({ type: FETCH_PRIVILEGES_FAILED, payload: error }))
    }
}

export {
  fetchAll,
}
