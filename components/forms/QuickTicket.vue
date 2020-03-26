<template>
  <div>
    <a-button  ghost @click="openBasic()">
      QUICK TICKET
    </a-button>
    <Dialog header="GET YOUR TICKETS QUICKLY" :visible.sync="displayDialog" position='bottom' :style="{width: '80vw'}">
      <div class="quick-container">
        <a-row :gutter='20'>
          <a-col :md='6'>
            <CityCascader :cities='cities' ></CityCascader>
          </a-col>
          <a-col :md='6'>
            <Dropdown
              v-model="selectedMovie"
              :options="cars"
              optionLabel="brand"
              size='large'
              placeholder="Select a Movie"
            >
                <template #option="slotProps">
                    <div class="p-dropdown-car-option">
                        <span>{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </Dropdown>
          </a-col>
          <a-col :md='6'>
            <Dropdown
              v-model="selectedDate"
              :options="cars"
              optionLabel="brand"
              size='large'
              placeholder="Select a Date"
            >
                <template #option="slotProps">
                    <div class="p-dropdown-car-option">
                        <span>{{slotProps.option.brand}}</span>
                    </div>
                </template>
            </Dropdown>
          </a-col>
          <a-col :md='6'>
            <Dropdown
              disabled='true'
              v-model="selectedTime"
              :options="cars"
              optionLabel="brand"
              size='large'
              placeholder="Select a Time"
            >
                <template #option="slotProps">
                    <div class="p-dropdown-car-option">
                        <span>{{slotProps.option.brand}}</span>
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
import { mapActions } from 'vuex'
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
      cities: [],
      displayDialog: false,
      selectedMovie: null,
      selectedDate: null,
      selectedTime: null,
      cars: [
        { brand: 'Audi', value: 'Audi' },
        { brand: 'BMW', value: 'BMW' },
        { brand: 'Fiat', value: 'Fiat' },
        { brand: 'Honda', value: 'Honda' },
        { brand: 'Jaguar', value: 'Jaguar' },
        { brand: 'Mercedes', value: 'Mercedes' },
        { brand: 'Renault', value: 'Renault' },
        { brand: 'Volkswagen', value: 'Volkswagen' },
        { brand: 'Volvo', value: 'Volvo' }
      ]
    }
  },
  computed: {
  },
  methods: {
    ...mapActions({
      fetchCities: 'cities/fetchCities'
    }),
    fetchCitiesMethod () {
      this.fetchCities()
    },

    onChange (e) {
      this.placement = e.target.value
    },
    openBasic () {
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
.p-dropdown:not(.p-disabled):hover {
  border-color:#1890ff;
}
.p-dropdown {
  height:40px;
  border-radius:4px;
  border-color:#666666
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
