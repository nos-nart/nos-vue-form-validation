import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import Vuelidate from "vuelidate";

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
