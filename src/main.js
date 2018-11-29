import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App),
});
