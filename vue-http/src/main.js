import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.root = 'https://vue-http-bd16c.firebaseio.com/data.json';
Vue.http.options.root = 'https://vue-http-bd16c.firebaseio.com/';

// Vue.http.headers.common['Content-Type'] = 'application/json';
// Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
// Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*';
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';


Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // if(request.method == 'POST'){
  //   request.method = 'PUT';
  // }
  // next();

  // // modify headers
  // request.headers.set('X-CSRF-TOKEN', 'TOKEN');
  // request.headers.set('Authorization', 'Bearer TOKEN');

});


new Vue({
  el: '#app',
  render: h => h(App)
})
