import CityService from '~/services/CityService.js'

export const state = () => ({
  cities: []
})

export const mutations = {
  SET_CITIES (state, cities) {
    state.cities = cities
  }
}

export const actions = {
  fetchCities (context) {
    return CityService.getCities().then((response) => {
      context.commit('SET_CITIES', response.data)
    })
  }
}

export const getters = {
  getCityOptions: (state) => {
    const options = []
    for (const city of state.cities) {
      const theaters = []
      for (const theater of city.theaters) {
        theaters.push({
          value: theater.name,
          label: theater.name
        })
      }
      options.push({
        value: city.name,
        label: city.name,
        children: theaters
      })
    }
    return options
  }
}
