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
  mode: 'history',
  // scroll behavior
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return{
        selector: to.hash
      };
    }
    // return {
    //   x: 0,
    //   y: 700
    // };
  }
});


// before each router for GUARD
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  // next(false); next('/'); next({xxx});
  next();
});

new Vue({
  el: '#app',
  // Vue nesnesne de router kullanacağımızı belirtmemiz gerekiyor
  router,
  render: h => h(App)
})
