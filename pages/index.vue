<template lang="html">
  <div>
    <swiperDefault></swiperDefault>
    <hr>
    <section>
      <div class="movie-list mt-5">
        <div class="contains">
          <div class="row  p-0 w-100">
            <div class="col-6  d-flex justify-content-center">
              <a-button-group size="large" >
                <a-button type="primary"  class='mx-1 ml-5 ' size='large'>Now Showing</a-button>
                <a-button type="primary" size='large'> Coming Soon</a-button>
              </a-button-group>
            </div>
            <div class="col-6  d-inline-block justify-content-center ">
              <select-theater></select-theater>
            </div>
          </div>
        </div>
          <movies-carousel class='mt-5'></movies-carousel>
      </div>

      <a-row type='flex' justify='center' class='mt-3 '>
        <a-col>
          <nuxt-link to='/movies'><a-button class='px-5' type='primary'>All Movies</a-button></nuxt-link>
        </a-col>
      </a-row>
    </section>

    <hr>
    <img src="/home/shahin/Downloads/672.jpg" alt="">

  </div>

</template>

<script>
import swiperDefault from '~/components/swiper/swiperDefault';
import Select from '~/components/forms/Select';
import MovieSlideCard from '~/components/cards/MovieSlideCard';
import MoviesCarousel from '~/components/carousels/MoviesCarousel';

export default {
  components: {
    swiperDefault,
    'select-theater':Select,
    'movie-slide-card':MovieSlideCard,
    'movies-carousel':MoviesCarousel},
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
