import * as mdbvue from 'mdbvue'
import Vue from 'vue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
