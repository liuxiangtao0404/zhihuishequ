import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// Echarts图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import VCharts from 'v-charts'
Vue.use(VCharts)

//axios接口
import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
