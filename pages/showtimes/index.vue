<template>

  <div>
    <Carousel :value="cars" :numVisible="1" :circular='true' :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #header>
        <h2>Basic</h2>
        </template>
        <template #item="slotProps">
        <div class="car-details">
            <div class="p-grid p-nogutter">
              <div class="p-col-12">
                <img src="~/static/funcat.jpg" style='width:200px' alt=" " />
              </div>
              <div class="p-col-12 car-data">
                <div class="car-title">{{slotProps.data.brand}}</div>
                <div class="car-subtitle">{{slotProps.data.year}} | {{slotProps.data.color}}</div>

                <div class="car-buttons">
                  <Button icon="pi pi-search" class="p-button-secondary" />
                  <Button icon="pi pi-star" class="p-button-secondary" />
                  <Button icon="pi pi-cog" class="p-button-secondary" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
  </div>

</template>
<script>
import Carousel from 'primevue/carousel'
export default {
  components: {
    Carousel
  },
  data () {
    return {
      image: '~/static/funcat.jpg',
      cars: [
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        },
        {
          brand: '~/static/funcat.jpg',
          year: 1995,
          color: 'Orange'
        }
      ]
    }
  },
  methods: {
    onChange (a, b, c) {
      console.log(a, b, c)
    }
  }
}

</script>
<style scoped>

.p-carousel {
  .p-carousel-content {
    .p-carousel-item {
      .car-details {
        > .p-grid {
          border: 1px solid #b3c2ca;
          border-radius: 3px;
          margin: .3em;
          text-align: center;
          padding: 2em 0 2.25em 0;
        }
      }
      .car-data {
        .car-title {
          font-weight: 700;
          font-size: 20px;
          margin-top: 24px;
        }
        .car-subtitle {
          margin: .25em 0 2em 0;
        }

        button {
          margin-left: .5em;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }

  &.custom-carousel {
    .p-carousel-dot-icon  {
      width: 16px !important;
      height: 16px !important;
      border-radius: 50%;
    }
  }

  &.p-carousel-horizontal {
    .p-carousel-content {
      .p-carousel-item {
        &.p-carousel-item-start {
          .car-details {
            > .p-grid {
              margin-left: .6em;
            }
          }
        }

        &.p-carousel-item-end {
          .car-details {
            > .p-grid {
              margin-right: .6em;
            }
          }
        }
      }
    }
  }
}

/* Dark Theme such as luna-amber, luna-blue, luna-green and luna-pink */
.dark-theme {
  .p-carousel {
    .p-carousel-content {
      .p-carousel-item {
        .car-details {
          > .p-grid {
            border: 1px solid #191919;
            background-color: #323232;
          }
        }
      }
    }
  }
}

</style>
