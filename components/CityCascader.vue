<template>
  <div>
    <a-cascader
      size="large"
      :options="op()"
      :show-search="{filter}"
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
      options: this.op()
    }
  },
  computed: {
    ...mapGetters({
      cityData: 'cities/getCityOptions'
    })

  },
  methods: {
    op () {
      return this.cityData
    },
    onChange (value, selectedOptions) {
      console.log(value, selectedOptions)
    },
    filter (inputValue, path) {
      return path.some(
        option => option.label.toLowerCase().includes(inputValue.toLowerCase()) > -1
      )
    }
  }
}
</script>
