import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import Users from './Users.vue'
import Home from './Home.vue'

Vue.use(VueRouter)
const routes=[
  {path : '/users', component : 'Users'},
  {path: '/',component:'Home'}];
const router =new VueRouter({
  routes :routes
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
