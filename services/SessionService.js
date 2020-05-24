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
  getSession (id) {
    return apiClient.get(`api/sessions/${id}`)
  },
  getSessionDates (city, theater, movie) {
    return apiClient.get(`api/sessiondates/?city=${city}&theater=${theater}&movie=${movie}`)
  },
  getSessionTimes (id) {
    console.log('-----------------------', id)
    return apiClient.get(`api/sessiontimes/?sessiondate=${id}`)
  }
}
