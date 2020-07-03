import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/css/reset.css'
import axios from 'axios'
import qs from 'qs'
import EXIF from "exif-js"
Vue.config.productionTip = false

// 引用API文件
import api from "./http/index";
Vue.use(api);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
