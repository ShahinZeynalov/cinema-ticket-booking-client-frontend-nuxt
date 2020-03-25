<template lang="html">
  <div>
    <swiperDefault />
    <hr>
    <section>
      <div class="movie-list mt-5">
        <div class="contains">
          <div class="row  p-0 w-100">
            <div class="col-6  d-flex justify-content-center">
              <a-button-group size="large">
                <a-button type="primary" class="mx-1 ml-5" size="large">
                  Now Showing
                </a-button>
                <a-button type="primary" size="large">
                  Coming Soon
                </a-button>
              </a-button-group>
            </div>
            <div class="col-6  d-inline-block justify-content-center ">
              <city-cascader :cities="cities"/>
            </div>
          </div>
        </div>
        <movies-carousel :movies='movies' class="mt-5" />
      </div>

      <a-row type="flex" justify="center" class="mt-3">
        <a-col>
          <nuxt-link to="/movies">
            <a-button class="px-5" type="primary">
              All Movies
            </a-button>
          </nuxt-link>
        </a-col>
      </a-row>
    </section>

    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CityCascader from '~/components/CityCascader'
import swiperDefault from '~/components/swiper/swiperDefault'
import MoviesCarousel from '~/components/carousels/MoviesCarousel'

export default {
  components: {
    swiperDefault,
    'city-cascader': CityCascader,
    'movies-carousel': MoviesCarousel
  },
  async fetch (context) {
    try {
      await context.store.dispatch('movies/fetchMovies')
      await context.store.dispatch('cities/fetchCities')
    } catch (e) {
      context.error({
        statusCode: 503,
        message: `Unable to fetch movies at this time. Please try again ${e}`
      })
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      movies: state => state.movies.movies
    })
  }
}
</script>

<style lang="css" scoped>
*{
  box-sizing:border-box !important;
}

.ant-card-hoverable:hover{
  background-color:red;
}

.movie-slide-card{
  margin:30px 0;
  display:flex;
}
</style>
