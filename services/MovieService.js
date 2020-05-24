import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMovies () {
    return apiClient.get('/api/movies/')
  },
  getMovie (id) {
    return apiClient.get(`/api/movies/${id}`)
  },
  // Its written due to quick ticket filter
  getFilteredMovies (city, theater) {
    return apiClient.get(`/api/movies/?city=${city}&theater=${theater}`)
  }
}
