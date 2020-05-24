import SessionService from '~/services/SessionService.js'

export const state = () => ({
  sessionDates: [],
  sessionTimes: [],
  selectedTheater: [],
  selectedMovie: {}
})

export const mutations = {
  SET_SESSION_DATES (state, sessionDates) {
    state.sessionDates = sessionDates
  },
  SET_SESSION_TIMES (state, sessionTimes) {
    state.sessionTimes = sessionTimes
  },
  SET_SELECTED_THEATER (state, value) {
    state.selectedTheater = value
  },
  SET_SELECTED_MOVIE (state, movie) {
    state.selectedMovie = movie
  }
}

export const actions = {
  async fetchSessionDates (context) {
    console.log('----------------------- context', context.state.selectedTheater[0])
    console.log('----------------------- context', context.state.selectedTheater[1])
    console.log('----------------------- context', context.state.selectedMovie.movie)
    await SessionService.getSessionDates(context.state.selectedTheater[0], context.state.selectedTheater[1], context.state.selectedMovie.movie)
      .then((response) => {
        context.commit('SET_SESSION_DATES', response.data)
        console.log('----------------------- sessiondates', response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  },
  async fetchSessionTimes (context, id) {
    await SessionService.getSessionTimes(id)
      .then((response) => {
        console.log(response.data)
        context.commit('SET_SESSION_TIMES', response.data)
        console.log('-------------session times', context.state.sessionTimes)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
}
