<template>
  <a-select
    show-search
    placeholder="Select your city"
    option-filter-prop="children"
    style="width: 300px"
    :filter-option="filterOption"
    size="large"
    class="d-inline justify-content-center"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option value="Baki">
      Baki
    </a-select-option>
    <a-select-option value="Garadagh">
      Garadagh
    </a-select-option>
    <a-select-option value="Nizami">
      Nizami
    </a-select-option>
    <a-select-option value="Yasamal">
      Yasamal
    </a-select-option>
    <a-select-option value="Fizuli">
      Fizuli
    </a-select-option>
    <a-select-option value="Cəbrayıl">
      Cəbrayıl
    </a-select-option>
    <a-select-option value="Laçın">
      Laçın
    </a-select-option>
    <a-select-option value="Agdam">
      Agdam
    </a-select-option>
    <a-select-option value="Ağdərə">
      Ağdərə
    </a-select-option>
    <a-select-option value="Göyçay">
      Göyçay
    </a-select-option>
    <a-select-option value="Kəlbəcər">
      Kəlbəcər
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  name: 'Select',
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().includes(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
