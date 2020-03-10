<template>
  <a-carousel :afterChange="onChange" autoplay :slidesToShow='7' :dots='true' swipeToSlide >
    <div class='mx-2'> <img :src=image alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
    <div class='mx-2'> <img src="~/static/funcat.jpg" alt=""></div>
  </a-carousel>
</template>
<script>
  export default {
    data() {
      return {
        image:'~/static/funcat.jpg',
      }
    },
    methods: {
      onChange(a, b, c) {
        console.log(a, b, c);
      },
    },
  };
</script>
<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 300px;
    line-height: 300px;
    background: #364d79;
    display:flex;
    flex-direction:row;
    overflow: hidden;
    margin:20px;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
