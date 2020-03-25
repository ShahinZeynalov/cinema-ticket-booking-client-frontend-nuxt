<template lang="html">
  <div>
    <carousel
      :items="5"
      :autoplay="true"
      :nav="true"
      :dots="false"
      :loop="movieLooper"
      :stage-padding="20"
      :autoplay-hover-pause="true"
    >
    <div v-for='movie in movies' :key='movie.id'>
      <movie-slide-card :movie='movie' />
    </div>
    </carousel>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel2'
import MovieSlideCard from '~/components/cards/MovieSlideCard'
export default {
  props: ['movies'],
  data () {
    return {
      movie: this.movies
    }
  },
  components: { carousel, 'movie-slide-card': MovieSlideCard },
  computed: {
    movieLooper () {
      if (this.movie.length > 5) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>

<style lang="css" scoped>
.next{
  background:red !important;
}

.owl-nav{
  display:flex;
  justify-content:space-between;
}
</style>
