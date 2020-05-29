<template>
  <div class="card-container text-center">
    <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
      <template slot="title">
        <p>This will cause you to lose any current booking progress, would you like to leave booking?</p>
      </template>
      <a-button icon='home' size='large' shape='circle' ></a-button>
    </a-popconfirm>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    confirm () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
.ant-popover-content{
  width:220px;
}
</style>
