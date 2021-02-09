import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      activeCardId: 0,
      cards: [
      {
        id: 0,
        number: '1111111111111111',
        holder: 'Oscar',
        vendor: 'ninja',
        month: '01',
        year: '21',
        ccv: '1234'
      }, {
        id: 1,
        number: '2222222222222222',
        holder: 'Kaj',
        vendor: 'blockchain',
        month: '02',
        year: '23',
        ccv: '234'
      }, {
        id: 2,
        number: '3333333333333333',
        holder: 'Axel',
        vendor: 'bitcoin',
        month: '02',
        year: '23',
        ccv: '345'
      }, {
        id: 3,
        number: '4444444444444444',
        holder: 'Marcus',
        vendor: 'evil',
        month: '02',
        year: '23',
        ccv: '123'
      },
      {
        id: 4,
        number: '5555555555555555',
        holder: 'Viktor',
        vendor: 'ninja',
        month: '11',
        year: '25',
        ccv: '123'
      }
    ],
    }
  }
})

new Vue({
  router,
  render: h => h(App),
})
.$mount('#app')