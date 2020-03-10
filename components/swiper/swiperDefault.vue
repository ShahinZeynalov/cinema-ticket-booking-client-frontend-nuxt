<template lang="html">
  <div class='recomend-body'>
    <swiper>
      <swiper-slide class='swiper-slide' v-for='(item,index) in recomendMovies' :key='index' :spaceBetween='500'>
        <img src="~/static/funcat.jpg" class="img-fluid" alt="Responsive image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {swiper,swiperSlide},
  data() {
    return {
      recomendMovies:[
        {
          id:0,
          image:'../../static/funcat.jpg',
        },
        {
          id:1,
          image:'../../static/funcat.jpg',
        },
        {
          id:2,
          image:'../../static/funcat.jpg',
        },
        {
          id:3,
          image:'../../static/funcat.jpg',
        },
        {
          id:3,
          image:'../../static/funcat.jpg',
        },
        {
          id:3,
          image:'../../static/funcat.jpg',
        },
        {
          id:3,
          image:'../../static/funcat.jpg',
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>
.swiper-slide{
  height: 80vh;
  text-align:center;
  border-bottom:1px solid #ccc;
  display:flex;
  align-items:center;
  justify-content:center;

}
</style>
