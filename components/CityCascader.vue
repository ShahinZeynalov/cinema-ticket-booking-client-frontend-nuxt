<template>
  <div>
    <a-cascader
      size="large"
      :options="optionData()"
      placeholder="Select a theater"
      @change="onChange"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
    optionData () {
      return this.cityData
    },
    onChange (value, selectedOptions) {
      console.log(value, selectedOptions)
    }
  }
}
</script>
