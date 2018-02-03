import api from './api'
import {
  FETCH_ACCOUNTS_REQUESTED,
  FETCH_ACCOUNTS_FAILED,
  FETCH_ACCOUNTS_SUCCEEDED,
} from './action-types'

function fetchAll() {
  return dispatch => {
    dispatch({ type: FETCH_ACCOUNTS_REQUESTED })
    return api.fetch()
      .then(
        result => dispatch({ type: FETCH_ACCOUNTS_REQUESTED, payload: result }),
        error => dispatch({ type: FETCH_ACCOUNTS_FAILED, payload: error })
      )
    }
}

export {
  fetchAll,
}
