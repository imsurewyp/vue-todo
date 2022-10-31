import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store:store,
  router,
  render: h => h(App),

}).$mount('#app')
