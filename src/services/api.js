import axios from 'axios'

const API_URL = 'http://localhost:3001'

const get = (endpoint, params) => axios.get(`${API_URL}${endpoint}`, { params }).then(response => response.data)
const post = (endpoint, body) => axios.post(`${API_URL}${endpoint}`, body)

export default {
  get,
  post,
}
