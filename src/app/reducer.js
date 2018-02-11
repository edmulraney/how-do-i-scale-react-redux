import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as domainReducer } from '../domain'

export default combineReducers({
  router: routerReducer,
  domain: domainReducer,
})
