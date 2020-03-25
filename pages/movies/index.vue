<template lang="html">
  <div>
    <div class="bg mt-5" :style="url">
      <p class="py-5 text-center">
        This example creates a full page background image.
        Try to resize the browser window to see how it always will cover the full screen (when scrolled to top),
        and that it scales nicely on all screen sizes.
      </p>
    </div>
    <a-row>
      <a-col :md='20' :push='2'>
        <div>
          <div class="contains pt-5">
            <div class="row  p-0 w-100">
              <div class="col-12  d-flex justify-content-center">
                <a-button-group size="large">
                  <a-button type="primary" class=" ml-5" size="large">
                    Now Showing
                  </a-button>
                  <a-button type="primary" size="large">
                    Coming Soon
                  </a-button>
                  <a-button type="primary" size="large">
                    About this theater
                  </a-button>
                </a-button-group>
              </div>
            </div>
          </div>
          <hr>
          <main>
            <div class="gutter-example">
              <a-row>
                <a-col :md='6' :xs='24' :sm='24' :xl='5'>
                  <city-cascader :cities="cities" class='mt-4' />
                </a-col>
                <a-col :md='18' :xs='24' :sm='24' :xl='19' class='px-3'>
                  <a-row gutter='10' class='text-center'>
                    <a-col
                      v-for='movie in movies'
                      :key='movie.id'
                      class="gutter-row py-3"
                      :xs="24"
                      :sm="{span: 22, push:1}"
                      :md="{span: 12, push:0}"
                      :lg="{span: 8, push:0}"
                      :xl="{span: 8, push:0}"
                    >
                      <div class="gutter-box">
                        <movie-card :movie='movie' />
                      </div>
                    </a-col>

                  </a-row>
                </a-col>
              </a-row>
            </div>
          </main>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CityCascader from '~/components/CityCascader'
import MovieSlideCard from '~/components/cards/MovieSlideCard'
// import carousel from 'vue-owl-carousel2'
// import MovieSlideCard from '~/components/cards/MovieSlideCard'
export default {
  components: {
    'city-cascader': CityCascader,
    'movie-card': MovieSlideCard
    // carousel, 'movie-slide-card': MovieSlideCard
  },
  async fetch (context) {
    await context.store.dispatch('movies/fetchMovies')
    await context.store.dispatch('cities/fetchCities')
  },
  data () {
    return {
      url: 'background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg")'
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
.bg {
  /* The image used */
  /* background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg"); */

  /* Full height */
  height: 300px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
