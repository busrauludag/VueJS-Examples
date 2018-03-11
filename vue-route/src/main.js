import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  // bu şekilde diziyi burada da tanımlayabiliriz
  //routes: []
  // ya da bu şekilde route dosyamızı referans gösterebiliriz
  routes,
  // VueRouter otomotik olarak url'e # ekler. Bunu engellemek için;
  // default mode: 'hash' tir
  mode: 'history'
});


new Vue({
  el: '#app',
  // Vue nesnesne de router kullanacağımızı belirtmemiz gerekiyor
  router,
  render: h => h(App)
})
