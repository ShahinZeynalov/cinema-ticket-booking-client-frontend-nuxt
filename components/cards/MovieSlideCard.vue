<template lang="html">
  <div class="contains" :style="'background: url('+movie.poster+');background-size: cover;'">
    <div class="overlay">
      <div class="items">
      </div>
      <div class="items head">
        <p>{{ movie.title }}</p>
        <hr>
      </div>
      <div class="items price">
      </div>
      <div class="items cart">
        <nuxt-link :to="movie.slug">
          <a-button type="primary">
            GET TICKET
          </a-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['movie']
}

</script>

<style lang="scss" scoped>

  $bg: #fef5df;

  body {
    background-color: $bg;
  }

  .contains {
    min-width: 250px;
    min-height: 350px;
    height: 350px;
    margin: 0 4%;
    background-color: black;
    background-size: cover;
    overflow-y: hidden;
    cursor: pointer;
    // -webkit-box-shadow: 0 0 5px #000;
    // box-shadow: 0 0 5px #000;
  }

  .overlay {
    width: 100%;
    min-height: 350px;
    height: 350px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    background: rgba(#1890ff, 0.6);
    color: $bg;
    opacity: 0;
    transition: all 0.3s;

    font-family: 'Playfair Display', serif;
  }

  .items {
    padding-left: 20px;
    letter-spacing: 3px;
  }

  .head {
    font-size: 30px;
    line-height: 40px;

    transform: translateY(40px);
    transition: all 0.7s;
    hr {
      display: block;
      width: 0;

      border: none;
      border-bottom: solid 2px $bg;

      position: absolute;
      bottom: 0;
      left: 20px;

      transition: all 0.3s;
    }
  }

  .cart {
    font-size: 12px;
    opacity: 0;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    transform: translateY(40px);
    transition: all 0.7s;
    i {
      font-size: 16px;
    }
    span {
      margin-left: 10px;
    }
  }

  .contains:hover .overlay {
    opacity: 1;
    & .head {
      transform: translateY(0px);
    }

    & hr {
      width: 75px;
      transition-delay: 0.2s;
    }

    & .cart {
      transform: translateY(0px);
      opacity: 1;
    }
  }

</style>
