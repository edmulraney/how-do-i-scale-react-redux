import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as domainReducer } from '../domain' // TODO: 'domain' should work but doesnt...

export default combineReducers({
  router: routerReducer,
  domain: domainReducer,
})
