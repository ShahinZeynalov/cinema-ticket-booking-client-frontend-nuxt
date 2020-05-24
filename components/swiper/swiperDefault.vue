<template lang="html">
  <div class='recomend-body'>
    <swiper>
      <swiper-slide style='background:lightblue' class='swiper-slide' v-for='(item,index) in recomendMovies' :key='index' :spaceBetween='500'>
        <div>
            <a-row>
              <a-col>
                <h1>SORRY WE ARE CLOSED DUE TO CORONA VIRUS</h1>
              </a-col>
            </a-row>
        </div>
        <a-row>
          <a-col>
            <br>
          </a-col>
        </a-row>
        <div><h1> #StayAtHome</h1></div>
       </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { swiper, swiperSlide },
  data () {
    return {
      recomendMovies: [
        {
          id: 0,
          image: '../../assets/funcat.jpg'
        },
        {
          id: 1,
          image: '../../assets/funcat.jpg'
        },
        {
          id: 2,
          image: '../../assets/funcat.jpg'
        },
        {
          id: 3,
          image: '../../assets/funcat.jpg'
        },
        {
          id: 3,
          image: '../../static/funcat.jpg'
        },
        {
          id: 3,
          image: '../../static/funcat.jpg'
        },
        {
          id: 3,
          image: '../../static/funcat.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.swiper-slide{
  height: 60vh;
  text-align:center;
  border-bottom:1px solid #ccc;
  display:flex;
  align-items:center;
  justify-content:center;

}
</style>
