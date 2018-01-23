import axios from 'axios'
import adapter from './adapter'

const routes = {
  fetchAll: '/api/privileges',
}

function fetchAll() {
  return axios.get(routes.fetchAll).then(adapter)
}
