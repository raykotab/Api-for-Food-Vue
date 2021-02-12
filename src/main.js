import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NewDishForm from './components/NewDishForm';
import EditDishForm from './components/EditDishForm';


Vue.config.productionTip = false
Vue.component('new-dish-form', NewDishForm)
Vue.component('edit-dish-form', EditDishForm)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
