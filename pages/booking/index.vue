<template>
  <div class='container-fluid'>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class='steps-content'>
      <Personal v-if="current===0" />
      <Tickets v-if="current===1"/>
      <Seats v-if="current===2"/>
      <Payments v-if="current===3"/>
      <Confirmation v-if="current===4"/>
    </div>
    <div class="steps-action text-right">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Continue
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script>
import Personal from '~/components/booking/Personal'
import Tickets from '~/components/booking/Tickets'
import Seats from '~/components/booking/Seats'
import Payments from '~/components/booking/Payments'
import Confirmation from '~/components/booking/Confirmation'
export default {
  layout: 'booking',
  components: {
    Personal,
    Tickets,
    Seats,
    Payments,
    Confirmation
  },
  data () {
    return {
      current: 0,
      steps: [
        {
          title: 'Login',
          content: 'Login'
        },
        {
          title: 'Tickets',
          content: 'Tickets'
        },
        {
          title: 'Seats',
          content: 'Seats'
        },
        {
          title: 'Payments',
          content: 'Payments'
        },
        {
          title: 'Confirmation',
          content: 'Confirm'
        }
      ]
    }
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
}
</script>
<style scoped>
.steps-content {
  border-radius: 6px;
  background-color: #eaefff;
  min-height: 75vh;
  display:flex;
  flex-direction:column;
  justify-content:center
}

.steps-action {
  margin-top: 24px;
}
</style>
