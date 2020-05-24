<template>
  <div>
    <a-cascader
      size="large"
      :options="optionData()"
      placeholder="Select a theater"
      @change="onChange"
      style='width:100%'
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: this.optionData()
    }
  },
  computed: {
    ...mapGetters({
      cityData: 'cities/getCityOptions'
    })
  },
  methods: {
    ...mapActions({
      fetchFilteredMovies: 'movies/fetchFilteredMovies'
    }),
    optionData () {
      return this.cityData
    },
    onChange (value, selectedOptions) {
      this.$store.commit('sessions/SET_SELECTED_THEATER', value)
      console.log('-------------------state', this.$store.state.sessions.selectedTheater)
      this.fetchFilteredMovies(value)
    }
  }
}
</script>

<style>

.ant-input, .ant-cascader-input, .ant-input-lg {
  border-color: black;
  width:100%;
  color:red !important;
  z-index:101;
}

.ant-cascader-input:not(.p-disabled):hover
 {
  border-color:#1890ff;
  z-index:100;
}

.anticon-close-circle{
  z-index:1000 !important;
}
</style>
