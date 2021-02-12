import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NewDishForm from './components/NewDishForm';

Vue.config.productionTip = false
Vue.component('new-dish-form', NewDishForm)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
