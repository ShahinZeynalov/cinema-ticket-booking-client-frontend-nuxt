import MovieService from '~/services/MovieService.js'

export const state = () => ({
  movies: [],
  movie: {},
  filteredMovies: []
})

export const mutations = {
  SET_MOVIES (state, movies) {
    state.movies = movies
  },
  SET_MOVIE (state, movie) {
    state.movie = movie
  },
  SET_FILTERED_MOVIES (state, filteredMovies) {
    state.filteredMovies = filteredMovies
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
  },
  // Its written due to quick ticket filter
  fetchFilteredMovies (context, payload) {
    return MovieService.getFilteredMovies(payload[0], payload[1]).then((response) => {
      context.commit('SET_FILTERED_MOVIES', response.data)
      console.log(response.data)
    })
  }
}

export const getters = {
  getFilteredMoviesOptions: (state) => {
    const options = []
    for (const movie of state.filteredMovies) {
      options.push({
        movie: movie.title,
        id: movie.id
      })
    }
    return options
  }
}
