import api from './api'
import {
  FETCH_ACCOUNTS_REQUESTED,
  FETCH_ACCOUNTS_FAILED,
  FETCH_ACCOUNTS_SUCCEEDED,
} from './action-types'

function fetchAccounts() {
  return dispatch => {
    dispatch({ type: FETCH_ACCOUNTS_REQUESTED })
    return api.fetch()
      .then(
        result => dispatch({ type: FETCH_ACCOUNTS_SUCCEEDED, payload: result }),
        error => dispatch({ type: FETCH_ACCOUNTS_FAILED, payload: error })
      )
    }
}

export {
  fetchAccounts,
}

export default {
  fetchAccounts,
}
