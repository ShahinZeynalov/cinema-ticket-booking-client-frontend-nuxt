<template>
  <div>
    <button class='quick-ticket'  @click="openFilter()">
      <div class="float">
        QUICK TICKET
      </div>
    </button>
    <Dialog header="GET YOUR TICKETS QUICKLY" :visible.sync="displayDialog" position="bottom" :style="{width: '80vw'}">
      <div class="quick-container">
        <a-row :gutter="20">
          <a-col :md="6" :xs="24">
            <CityCascader />
          </a-col>
          <a-col :md="6" :xs="24">
            <Dropdown
              v-model="selectedMovie"
              @change='customFetchSessionDates()'
              :show-clear="true"
              :options="filteredMoviesData"
              option-label="movie"
              size="large"
              placeholder="Select a Movie"
              change
            >
              <template #option="slotProps">
                <div class="p-dropdown-car-option">
                  <span>{{ slotProps.option.movie }}</span>
                </div>
              </template>
            </Dropdown>
          </a-col>
          <a-col :md="6" :xs="24">
            <Dropdown
              v-model="selectedDate"
              @before-hide="customFetchSessionTimes()"
              :show-clear="true"
              :options="sessionDates"
              option-label="date"
              size="large"
              placeholder="Select a Date"
            >
              <template #option="slotProps">
                <div class="p-dropdown-car-option">
                  <span>{{ slotProps.option.date }}</span>
                </div>
              </template>
            </Dropdown>
          </a-col>
          <a-col :md="6" :xs="24">
            <Dropdown
              v-model="selectedTime"
              @before-hide='goToBooking'
              :show-clear="true"
              :options="this.$store.state.sessions.sessionTimes"
              option-label="hour"
              size="large"
              placeholder="Select a Time"
            >
              <template #option="slotProps">
                <div class="p-dropdown-car-option">
                  <span>{{ slotProps.option.hour }}</span>
                </div>
              </template>
            </Dropdown>
          </a-col>
        </a-row>
      </div>
      <template #footer>
      </template>
    </Dialog>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import CityCascader from '~/components/CityCascader'
export default {
  components: {
    CityCascader,
    Dialog,
    Dropdown
  },
  async fetch (context) {
    try {
      await context.store.dispatch('cities/fetchCities')
    } catch (e) {
      context.error({
        statusCode: 503,
        message: `Unable to fetch cities: ${e}`
      })
    }
  },
  data () {
    return {
      placement: 'left',
      displayDialog: false,
      selectedTheaterData: null,
      selectedMovie: null,
      selectedDate: null,
      selectedTime: null,
      movies: [
      ]
    }
  },
  computed: {
    ...mapState({
      filteredMovies: state => state.movies.filteredMovies,
      sessionDates: state => state.sessions.sessionDates

    }),
    ...mapGetters({
      filteredMoviesData: 'movies/getFilteredMoviesOptions'

    })
  },
  methods: {
    filteredMoviesMethod () {
      this.movies = this.filteredMovies()
    },
    ...mapActions({
      fetchCities: 'cities/fetchCities',
      fetchSessionDates: 'sessions/fetchSessionDates',
      fetchSessionTimes: 'sessions/fetchSessionTimes'
    }),
    fetchCitiesMethod () {
      this.fetchCities()
    },
    goToBooking () {
      if (this.selectedTime) {
        setTimeout(() => { this.displayDialog = false }, 100)
        setTimeout(() => { this.$router.push('booking') }, 500)
      }
    },
    customFetchSessionDates () {
      this.selectedDate = null
      this.$store.commit('sessions/SET_SELECTED_MOVIE', this.selectedMovie)
      this.fetchSessionDates()
    },
    customFetchSessionTimes () {
      if (this.selectedDate) {
        this.selectedTime = null
        this.fetchSessionTimes(this.selectedDate.id)
      }
    },
    openFilter () {
      this.selectedMovie = null
      this.selectedDate = null
      this.selectedTime = null
      if (this.displayDialog) {
        this.displayDialog = false
      } else {
        this.fetchCitiesMethod()
        this.displayDialog = true
      }
    }
  }
}
</script>

<style scoped>
.quick-ticket{
  background-color:#ff0060;
  border:none;
  color:white;
  padding:10px;
  border-radius:5px;
  width:150px;
  outline:none
}
.quick-ticket:active{
  background-color:purple-light;
  color:gray;
}

.p-dropdown:not(.p-disabled):hover {
  border-color:#1890ff;
}

.p-dropdown {
  height:40px;
  border-radius:4px;
  border-color:black;
}
.p-dropdown {
  width: 100%;
}
.p-dropdown-car-option {
    span {
        margin-top: .125em;
    }
}
.p-dialog .p-dialog-content {
    padding: 40px;
}
.quick-container {
  /* background-color:#39fb82; */
  background-color:white;
  height:300px;
  padding:8px;
}
</style>
