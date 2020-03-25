<template>
  <div>
    <div class="bg" :style="`background-image: url(${this.movie.poster})`">
      <div class="module-inside container">
        <a-row class='mt-2 social'>
          <a-col>
            <ul>
              <li><a><span>Comments </span><a-icon type="message"/></a></li>
              <li><a><span>Rate </span><a-icon type="star"/></a></li>
              <li><a><span>Wish</span><a-icon type="heart"/></a></li>
              <li><a><span>Share </span><a-icon type="facebook"/> | <a-icon type="instagram"/></a></li>
            </ul>
          </a-col>
        </a-row>
        <a-row class='mt-4'>
          <a-col :span='5' :style='url'>
            <img :src="movie.poster" alt="" style='width:100%;max-height:400px;'>
          </a-col>
          <a-col :span='19' class='d-grid movie-header pl-4'>
            <div class="d-grid">
              <div class="movie-title float-left">
                <h4>{{ movie.title }}</h4>
              </div>
              <div class="float-right movie-rating d-flex align-items-center">
                <h4><a-icon type='star' class='mr-1' ></a-icon></h4> <h4><span>{{ movie.average }}</span></h4>
              </div>
            </div>
            <div class="movie-warnings">
              <h4>{{ movie.age_restriction }}+</h4>
            </div>
            <div class="movie-credit">
              <div class='d-flex align-items-center'><h4>Directors:</h4> <p>{{ movie.director }}</p></div>
              <div class='d-flex align-items-center'><h4>Casts:</h4> <p> {{ movie.casts }}</p></div>
            </div>
            <div class="movie-buttons">
              <a-button size='large'>Trailer</a-button>
              <a-button size='large' v-if='movie.now_playing'>Get Ticket</a-button>
            </div>
          </a-col>
        </a-row>

      </div>
    </div>
    <div class="container mt-3">
      <a-row>
        <a-col :span='5' class='pt-3'>
          <div>
            <span>Release Date:</span> {{ movie.release_date }}
          </div>
          <div>
            <span>Duration:</span> {{ movie.runtime }} minute
          </div>
          <div>
            <span>Type:</span> {{ movie.genre }}
          </div>
        </a-col>
        <a-col :span='19' class='pl-4 pt-3'>
          <span>Ozet: </span> {{ movie.description }}
        </a-col>
      </a-row>
      <a-row class='mt-5' :gutter='30'>
        <a-col :span='12'>
          <h3>Comments</h3>
          <div class="comment-list">
            <div class="comment-item">
              <div class="comment-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quod dolorum ab maiores accusantium voluptas nihil inventore illum voluptatem, quaerat nulla, quibusdam commodi iste sapiente, voluptate nemo odit vel optio.</p>
              </div>
              <div class="comment-bottom d-flex" type='flex' justify='between'>
                <div class="comment-rating float-left">
                  <a-icon type='star'></a-icon> 10
                </div>
                <div class="comment-info float-right">
                  <a-icon type='person'></a-icon>
                  <p><span>Tugba B***</span><span class='comment-released'>08.03.2020</span></p>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </a-col>
        <a-col :span='12'>
          <div class='write-comment'>
            <h3>Your Oppinion</h3>
          </div>
          <div class="comment-form">
            <a-textarea placeholder='Type your comment' >
            </a-textarea>
            <a-button class='float-right mt-3'>Send</a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  components: {
  },
  async fetch (context) {
    try {
      await context.store.dispatch('movies/fetchMovie', context.params.id)
    } catch (e) {
      context.error({
        statusCode: 503,
        message: `Unable to fetch movie at this time with. Please try again ${e}`
      })
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      movie: state => state.movies.movie
    })
  }
}
</script>

<style type='css'>
  .bg {
    height: 500px;
    display: grid;
    color: #fff;
    position: relative;
    overflow:hidden;
    background-repeat:no-repeat;
    background-size:cover;
  }
  .bg::before {
    content: "";
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: absolute;
    background-image:inherit;
    width:100%;
    height:100%;
    filter: blur(13px);
  }
  .module-inside {
    position: relative;
  }

  .module-inside ul{
    float:right;

  }

  .module-inside ul li {
    float:left;
    list-style:none;
    margin-left:30px;
    color:white !important;
    padding:5px 10px 5px 10px;
    border:1px solid transparent;

  }
  .module-inside ul li:hover{
    float:left;
    list-style:none;
    margin-left:30px;
    color:black !important;
    padding:5px 10px 5px 10px;
    border:1px solid white;
    background-color:lightblue;
    border-radius:5px;
  }
  .module-inside ul li span{
    margin-right:5px;
  }
  .module-inside ul li a{
    text-decoration:none;
    color:white;
    display: flex;
    align-items:center;
    justify-content:center;
  }
  .movie-header{
    display:grid;
    gap: 15px;
  }

</style>
