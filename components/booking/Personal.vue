<template lang="html">
  <div>
    <div>
      <a-row type='flex' justify="center">
        <a-col :md='8'>
          Session Info:
          <p>lorem
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nesciunt velit nam expedita ipsam sequi recusandae. Aut minus odio quas, iste ipsum quaerat explicabo recusandae quasi, voluptatem sequi soluta animi.</p>
          <hr>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row class='email' type='flex' justify="center">
        <a-col type='flex' :md='8'>
          <h3>Enter email to continue</h3>
          <a-input placeholder="Email address" size='large' required/>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
