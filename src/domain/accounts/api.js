import { api } from 'services'
import adapter from './adapter'

const endpoint = '/accounts'

function fetch() {
  return api.get(endpoint).then(adapter)
}

function create(account) {
  return api.post(endpoint, account)
}

export default {
  fetch,
  create,
}
