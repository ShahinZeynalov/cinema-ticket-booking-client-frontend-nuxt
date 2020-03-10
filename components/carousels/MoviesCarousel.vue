<template lang="html">
  <div>
    <carousel
    :items='5'
    :autoplay="true"
    :nav="true"
    :dots='false'
    :loop='true'
    :stagePadding='20'
    :autoplayHoverPause='true'

    >
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>
      <movie-slide-card></movie-slide-card>


    </carousel>
  </div>

</template>

<script>

import carousel from 'vue-owl-carousel2'
import MovieSlideCard from '~/components/cards/MovieSlideCard'
export default {
    components: { carousel,'movie-slide-card':MovieSlideCard },
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
