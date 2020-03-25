import MovieService from '~/services/MovieService.js'

export const state = () => ({
  movies: [],
  movie: {}
})

export const mutations = {
  SET_MOVIES (state, movies) {
    state.movies = movies
  },
  SET_MOVIE (state, movie) {
    state.movie = movie
  }
}

export const actions = {
  fetchMovies (context) {
    return MovieService.getMovies().then((response) => {
      context.commit('SET_MOVIES', response.data)
    })
  },
  fetchMovie (context, id) {
    return MovieService.getMovie(id).then((response) => {
      context.commit('SET_MOVIE', response.data)
    })
  }
}
