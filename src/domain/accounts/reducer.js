import adapter from './adapter'
import {
  FETCH_ACCOUNTS_REQUESTED,
  FETCH_ACCOUNTS_FAILED,
  FETCH_ACCOUNTS_SUCCEEDED,
} from './action-types'

const initialState = {
  isLoading: false,
  isLoaded: false,
  entities: [],
}

export default function reducer(state = initialState, action) {
  switch (action.payload) {

    case FETCH_ACCOUNTS_REQUESTED: {
      return { ...state, isLoading: true, entities: {}, ids: [] }
    }

    case FETCH_ACCOUNTS_SUCCEEDED: {
      return { ...state, isLoading: false, entities: adapter(action.payload) }
    }

    case FETCH_ACCOUNTS_FAILED: {
      return { ...state, isLoading: false }
    }

    default: return state
  }
}


// domain data
// app state
// ui state
